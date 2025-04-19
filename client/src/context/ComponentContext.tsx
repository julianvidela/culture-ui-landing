
import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import { componentService } from "@/services/componentService";

export interface ParsedProp {
  prop: string;
  type: string;
  description: string;
}

export interface Component {
  _id: string;
  name: string;
  description: string;
  installationCli: string;
  usageExample: string;
  properties:ParsedProp[];
  advancedUsage: string;
  isPremium: boolean;
}

interface ComponentContextValue {
  components: Component[];
  loading: boolean;
  error: string | null;
}

export const ComponentContext = createContext<ComponentContextValue | undefined>(undefined);

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
      .catch(() => setError("Error obteniendo los componentes"))
      .finally(() => setLoading(false));
  }, []);

  const value = useMemo(() => ({ components, loading, error }), [components, loading, error]);

  return <ComponentContext.Provider value={value}>{children}</ComponentContext.Provider>;
};


