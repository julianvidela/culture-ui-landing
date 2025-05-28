import { CommandPalette } from "@/components/Atoms/CommandPalette/CommandPalette";
import { useComponentContext } from "@/context/ComponentContext";
import path from "path";

export const CommandPaletteWrapper = () => {
  const { components } = useComponentContext();

  const staticOptions = [
    { id: "docs", label: "Docs", path: "/docs" },
    { id: "showcase", label: "Showcase", path: "/allcomponents" },
    { id:"intallation", label:"Installation" , path: "/installation"}
  ];

  const dynamicOptions = components.map((component) => ({
    id: component.id,
    label: component.name,
    path: `/components/${component.id}`,
  }));

  const options = [...staticOptions, ...dynamicOptions];

  return <CommandPalette options={options} />;
};
