import Link from "next/link";
import { useComponentContext } from "@/context/ComponentContext";
import { usePathname } from "next/navigation";
import clsx from "clsx";


const SideBar = () => {
   const {components,error,loading} = useComponentContext()
   const pathname = usePathname();


  return (
    <aside className="w-64 text-white h-full pt-16 px-4">
      <h2 className="text-sm font-semibold mb-4">Menu</h2>
      <ul className="space-y-2 font-semibold text-[14px]  border-l border-[var(--border-primary)]">
      
      <li>
  <Link
    href="/docs"
    className={clsx(
      "block py-2 px-4 rounded text-[14px] font-semibold transition-colors",
      pathname === "/docs"
        ? "text-[var(--text-color-secondary)]"
        : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
    )}
  >
    Docs
  </Link>
</li>
     
      <li>
  <Link
    href="/installation"
    className={clsx(
      "block py-2 px-4 rounded text-[14px] font-semibold transition-colors",
      pathname === "/installation"
        ? "text-[var(--text-color-secondary)]"
        : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
    )}
  >
    Installation
  </Link>
</li>

        <li>
  <Link
    href="/allcomponents"
    className={clsx(
      "block py-2 px-4 rounded text-[14px] font-semibold transition-colors",
      pathname === "/showcase"
        ? "text-[var(--text-color-secondary)]"
        : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
    )}
  >
    Showcase
  </Link>
</li>

      </ul>

      
      <h3 className="mt-6 text-sm font-semibold mb-5">Componentes</h3>
      <ul className="mt-2 space-y-2 border-l border-[var(--border-primary)]">
        {loading && <p className="text-gray-400">Cargando componentes...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}

        {!loading && !error && components.length > 0 ? (
         components.map((component) => {
          const isActive = pathname === `/components/${component.id}`;
          return (
            <li key={component.id}>
              <Link
                href={`/components/${component.id}`}
                className={clsx(
                  "block font-semibold text-[14px] py-2 px-4 rounded transition-colors",
                  isActive
                    ? "text-[var(--text-color-secondary)]"
                    : "text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]"
                )}
              >
                {component.name}
              </Link>
            </li>
          )
        })
        ) : (
          <p className="text-gray-400">No hay componentes disponibles</p>
        )}
      </ul>
    </aside>
  );
};

export default SideBar;
