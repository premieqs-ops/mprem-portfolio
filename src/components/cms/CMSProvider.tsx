"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type CMSData,
  getDefaultCMSData,
  loadCMSData,
  saveCMSData,
  resetCMSData,
  exportCMSData,
  importCMSData,
} from "@/lib/cms-store";

interface CMSContextValue {
  data: CMSData;
  ready: boolean;
  update: (partial: Partial<CMSData>) => void;
  setData: (data: CMSData) => void;
  reset: () => void;
  exportJson: () => void;
  importJson: (file: File) => Promise<void>;
  save: () => void;
  hasChanges: boolean;
}

const CMSContext = createContext<CMSContextValue | null>(null);
const CHANNEL = "mprem_cms_sync";

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<CMSData>(getDefaultCMSData);
  const [ready, setReady] = useState(false);
  const [savedSnapshot, setSavedSnapshot] = useState("");

  useEffect(() => {
    const loaded = loadCMSData();
    setDataState(loaded);
    setSavedSnapshot(JSON.stringify(loaded));
    setReady(true);

    const onUpdate = (e: Event) => {
      const detail = (e as CustomEvent<CMSData>).detail;
      if (detail) {
        setDataState(detail);
        setSavedSnapshot(JSON.stringify(detail));
      }
    };
    window.addEventListener("cms-updated", onUpdate);

    let bc: BroadcastChannel | null = null;
    try {
      bc = new BroadcastChannel(CHANNEL);
      bc.onmessage = (ev) => {
        if (ev.data?.type === "cms-data" && ev.data.payload) {
          setDataState(ev.data.payload);
          setSavedSnapshot(JSON.stringify(ev.data.payload));
        }
      };
    } catch {
      /* ignore */
    }

    const onStorage = (e: StorageEvent) => {
      if (e.key === "mprem_cms_v1" && e.newValue) {
        try {
          const parsed = JSON.parse(e.newValue) as CMSData;
          setDataState(parsed);
          setSavedSnapshot(JSON.stringify(parsed));
        } catch {
          /* ignore */
        }
      }
    };
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("cms-updated", onUpdate);
      window.removeEventListener("storage", onStorage);
      bc?.close();
    };
  }, []);

  const update = useCallback((partial: Partial<CMSData>) => {
    setDataState((prev) => ({
      ...prev,
      ...partial,
      updatedAt: new Date().toISOString(),
    }));
  }, []);

  const setData = useCallback((next: CMSData) => {
    setDataState(next);
  }, []);

  const save = useCallback(() => {
    setDataState((prev) => {
      const next = { ...prev, updatedAt: new Date().toISOString() };
      saveCMSData(next);
      try {
        const bc = new BroadcastChannel(CHANNEL);
        bc.postMessage({ type: "cms-data", payload: next });
        bc.close();
      } catch {
        /* ignore */
      }
      queueMicrotask(() => setSavedSnapshot(JSON.stringify(next)));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    const d = resetCMSData();
    setDataState(d);
    setSavedSnapshot(JSON.stringify(d));
  }, []);

  const exportJson = useCallback(() => {
    exportCMSData(data);
  }, [data]);

  const importJson = useCallback(async (file: File) => {
    const imported = await importCMSData(file);
    setDataState(imported);
    setSavedSnapshot(JSON.stringify(imported));
  }, []);

  const hasChanges = useMemo(
    () => ready && JSON.stringify(data) !== savedSnapshot,
    [data, savedSnapshot, ready]
  );

  const value = useMemo(
    () => ({
      data,
      ready,
      update,
      setData,
      reset,
      exportJson,
      importJson,
      save,
      hasChanges,
    }),
    [data, ready, update, setData, reset, exportJson, importJson, save, hasChanges]
  );

  return <CMSContext.Provider value={value}>{children}</CMSContext.Provider>;
}

export function useCMS() {
  const ctx = useContext(CMSContext);
  if (!ctx) throw new Error("useCMS must be used within CMSProvider");
  return ctx;
}

export function useCMSData(): CMSData {
  const ctx = useContext(CMSContext);
  if (!ctx) return getDefaultCMSData();
  return ctx.data;
}
