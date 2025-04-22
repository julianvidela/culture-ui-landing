import Link from "next/link";
import { useComponents } from "@/hooks/useComponents";

const SideBar = () => {
   const {components,error,loading} = useComponents()

  return (
    <aside className="w-64 text-white h-full pt-16 px-4">
      <h2 className="text-sm font-semibold mb-4">Menu</h2>
      <ul className="space-y-2 font-semibold text-[14px]  border-l border-[var(--border-primary)]">
      
        <li>
          <Link href="/docs" className="block py-2 px-4 rounded text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]">
            Docs
          </Link>
        </li>
        <li>
          <Link href="/allcomponents" className="block py-2 px-4 rounded text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)]">
            Components
          </Link>
        </li>
      </ul>

      
      <h3 className="mt-6 text-sm font-semibold mb-5">Componentes</h3>
      <ul className="mt-2 space-y-2 border-l border-[var(--border-primary)]">
        {loading && <p className="text-gray-400">Cargando componentes...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}

        {!loading && !error && components.length > 0 ? (
          components.map((component) => (
            <li key={component._id}>
              <Link
                href={`/components/${component._id}`} 
                className="block font-semibold text-[14px] text-[var(--text-color-primary)] hover:text-[var(--text-color-secondary)] py-2 px-4 rounded"
              >
                {component.name}
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-400">No hay componentes disponibles</p>
        )}
      </ul>
    </aside>
  );
};

export default SideBar;
