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
  configured: boolean;
  saving: boolean;
  update: (partial: Partial<CMSData>) => void;
  setData: (data: CMSData) => void;
  reset: () => void;
  exportJson: () => void;
  importJson: (file: File) => Promise<void>;
  save: () => Promise<void>;
  hasChanges: boolean;
}

const CMSContext = createContext<CMSContextValue | null>(null);
const CHANNEL = "mprem_cms_sync";

export function CMSProvider({ children }: { children: ReactNode }) {
  const [data, setDataState] = useState<CMSData>(getDefaultCMSData);
  const [ready, setReady] = useState(false);
  const [configured, setConfigured] = useState(false);
  const [saving, setSaving] = useState(false);
  const [savedSnapshot, setSavedSnapshot] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function init() {
      try {
        const res = await fetch("/api/cms", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          if (!cancelled && json.data) {
            setConfigured(Boolean(json.configured));
            setDataState(json.data);
            setSavedSnapshot(JSON.stringify(json.data));
            saveCMSData(json.data);
            setReady(true);
            return;
          }
        }
      } catch {
        /* fall through */
      }

      if (!cancelled) {
        const loaded = loadCMSData();
        setDataState(loaded);
        setSavedSnapshot(JSON.stringify(loaded));
        setConfigured(false);
        setReady(true);
      }
    }

    init();

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
      cancelled = true;
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

  const save = useCallback(async () => {
    setSaving(true);
    const next: CMSData = { ...data, updatedAt: new Date().toISOString() };
    setDataState(next);
    saveCMSData(next);
    try {
      const res = await fetch("/api/cms", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(next),
      });
      if (res.ok) {
        setConfigured(true);
        setSavedSnapshot(JSON.stringify(next));
        try {
          const bc = new BroadcastChannel(CHANNEL);
          bc.postMessage({ type: "cms-data", payload: next });
          bc.close();
        } catch {
          /* ignore */
        }
      } else {
        const err = await res.json().catch(() => ({}));
        setSavedSnapshot(JSON.stringify(next));
        if (res.status === 503) {
          console.warn("Saved locally only (Supabase not configured)", err);
        } else {
          throw new Error(err.error || "Save failed");
        }
      }
    } finally {
      setSaving(false);
    }
  }, [data]);

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
      configured,
      saving,
      update,
      setData,
      reset,
      exportJson,
      importJson,
      save,
      hasChanges,
    }),
    [
      data,
      ready,
      configured,
      saving,
      update,
      setData,
      reset,
      exportJson,
      importJson,
      save,
      hasChanges,
    ]
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
