import { useContext } from "react";
import { ComponentContext } from "@/context/ComponentContext";

export const useComponents = () => {
  const context = useContext(ComponentContext);
  if (!context) throw new Error("useComponents debe usarse dentro del ComponentProvider");
  return context;
};
