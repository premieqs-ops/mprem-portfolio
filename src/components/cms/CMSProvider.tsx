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
    return () => window.removeEventListener("cms-updated", onUpdate);
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
      saveCMSData(prev);
      setSavedSnapshot(JSON.stringify(prev));
      return prev;
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
  if (ctx?.ready) return ctx.data;
  return getDefaultCMSData();
}
