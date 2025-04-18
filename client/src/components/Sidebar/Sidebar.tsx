import Link from "next/link";
import { useComponents } from "@/hooks/useComponents";

const SideBar = () => {
   const {components,error,loading} = useComponents()

  return (
    <aside className="w-64 text-white h-full pt-16 px-4 border-r border-[var(--border-primary)] ">
      <h2 className="text-lg font-bold mb-4">Menú</h2>
      <ul className="space-y-2">
      
        <li>
          <Link href="/docs" className="block py-2 px-4 rounded hover:bg-gray-700">
            📄 Docs
          </Link>
        </li>
        <li>
          <Link href="/allcomponents" className="block py-2 px-4 rounded hover:bg-gray-700">
            🧩 Components
          </Link>
        </li>
      </ul>

      {/* Separador */}
      <h3 className="mt-6 text-sm font-semibold uppercase opacity-75">Componentes</h3>
      <ul className="mt-2 space-y-1">
        {loading && <p className="text-gray-400">Cargando componentes...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}

        {!loading && !error && components.length > 0 ? (
          components.map((component) => (
            <li key={component._id}>
              <Link
                href={`/components/${component._id}`} 
                className="block py-2 px-4 rounded hover:bg-gray-700"
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
