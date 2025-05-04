import { CommandPalette } from "@/components/Atoms/CommandPalette/CommandPalette";
import { useComponents } from "@/hooks/useComponents";

export const CommandPaletteWrapper = () => {
  const { components } = useComponents();

  const staticOptions = [
    { id: "docs", label: "Docs", path: "/docs" },
    { id: "showcase", label: "Showcase", path: "/allcomponents" },
  ];

  const dynamicOptions = components.map((component) => ({
    id: component._id,
    label: component.name,
    path: `/components/${component._id}`,
  }));

  const options = [...staticOptions, ...dynamicOptions];

  return <CommandPalette options={options} />;
};
