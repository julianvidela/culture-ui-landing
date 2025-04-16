"use client"

import { useComponents } from "@/hooks/useComponents";



const ComponentList = () => {
 
  const {components,error,loading} = useComponents()

  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-white">
      <h2 className="text-white">Lista de Componentes</h2>
      <ul>
        {components.map((component : any) => (
          <li key={component._id}>
            <h3>{component.name}</h3>
            <p>{component.description}</p>
            <p><strong>Instalación:</strong> {component.installationCli}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
