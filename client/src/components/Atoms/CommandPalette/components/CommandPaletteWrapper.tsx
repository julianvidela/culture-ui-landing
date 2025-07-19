import { CommandPalette } from "@/components/Atoms/CommandPalette/CommandPalette";
import { useComponents } from "@/hooks/useComponents";
import { Box , CircleArrowRight } from 'lucide-react';


export const CommandPaletteWrapper = () => {

  const { data: components = []} = useComponents()

  const staticOptions = [
    { id: "docs", label: "Docs", path: "/docs" , type: "static" , icon: <CircleArrowRight className="h-4 w-4" />},
    { id: "showcase", label: "Showcase", path: "/allcomponents" , type: "static" , icon: <CircleArrowRight className="h-4 w-4" />},
    { id:"intallation", label:"Installation" , path: "/installation" , type: "static", icon: <CircleArrowRight className="h-4 w-4" />},
  ];

  const dynamicOptions = (components).map((component) => ({
    id: component.id,
    label: component.name,
    path: `/components/${component.id}`,
    icon: <Box className="h-4 w-4" />,
    type: "dynamic",
  }));

  const options = [...staticOptions, ...dynamicOptions];

  return <CommandPalette options={options} />;
};
