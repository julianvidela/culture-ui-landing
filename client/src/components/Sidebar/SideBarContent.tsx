import Link from "next/link";
import { useComponents } from "@/hooks/useComponents";

export const menuItems = [

  {
    path: '/docs',
    title: 'Docs',
  },
  {
    path: '/components',
    title: 'Components',
  },

]




const SidebarContent = () => {
  const {components} = useComponents()
  return (
    <div className="flex flex-col gap-4">
      {components.map((component) => (
        <li className="list-none" key={component._id}>
        <Link
          href={`/components/${component._id}`} 
          className="block font-semibold text-[14px] text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)] py-2 px-2 rounded"
        >
          {component.name}
        </Link>
      </li>
      ))}
    </div>
  );
};

export default SidebarContent;
