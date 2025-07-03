import { CommandPalette } from "@/components/Atoms/CommandPalette/CommandPalette";
import { useComponents } from "@/hooks/useComponents";
import path from "path";

export const CommandPaletteWrapper = () => {

  const { data: components = []} = useComponents()

  const staticOptions = [
    { id: "docs", label: "Docs", path: "/docs" },
    { id: "showcase", label: "Showcase", path: "/allcomponents" },
    { id:"intallation", label:"Installation" , path: "/installation"}
  ];

  const dynamicOptions = (components).map((component) => ({
    id: component.id,
    label: component.name,
    path: `/components/${component.id}`,
  }));

  const options = [...staticOptions, ...dynamicOptions];

  return <CommandPalette options={options} />;
};
