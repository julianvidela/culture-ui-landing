"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { componentService, Component } from "@/services/componentService";

interface ComponentContextValue {
  components: Component[];
  loading: boolean;
  error: string | null;
}

const ComponentContext = createContext<ComponentContextValue | undefined>(
  undefined
);

export const ComponentProvider = ({ children }: { children: React.ReactNode }) => {
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = localStorage.getItem("componentCache");

    if (cached) {
      try {
        setComponents(JSON.parse(cached));
        setLoading(false);
      } catch {
        localStorage.removeItem("componentCache");
      }
    }

    componentService()
      .then((data) => {
        setComponents(data);
        localStorage.setItem("componentCache", JSON.stringify(data));
        setError(null);
      })
      .catch(() => setError("❌ Error obteniendo los componentes"))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({ components, loading, error }), [
    components,
    loading,
    error,
  ]);

  return (
    <ComponentContext.Provider value={value}>
      {children}
    </ComponentContext.Provider>
  );
};


export const useComponentContext = (): ComponentContextValue => {
  const context = useContext(ComponentContext);
  if (!context)
    throw new Error("useComponentContext debe usarse dentro de ComponentProvider");
  return context;
};

