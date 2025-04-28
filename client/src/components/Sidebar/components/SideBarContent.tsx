import Link from "next/link";
import { useComponents } from "@/hooks/useComponents";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarContentProps {
  onLinkClick?: () => void;
}

export const menuItems = [

  {
    path: '/docs',
    title: 'Docs',
  },
  {
    path: '/components',
    title: 'Showcase',
  },

]




const SidebarContent = ({ onLinkClick }: SidebarContentProps) => {
  const { components } = useComponents()
  const pathname = usePathname();
  return (
    <ul className="flex gap-3 flex-col list-none">
    {components.map((component) => {
      const isActive = pathname === `/components/${component._id}`;
      return (
        <li key={component._id}>
          <Link
            href={`/components/${component._id}`}
            onClick={onLinkClick}
            className={clsx(
              "block font-semibold text-[14px]  py-2 px-2 rounded transition-colors",
              isActive
                ? "text-[var(--text-color-secondary)]"
                : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
            )}
          >
            {component.name}
          </Link>
        </li>
      );
    })}
  </ul>
  
  );
};

export default SidebarContent;
