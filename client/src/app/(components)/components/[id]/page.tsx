"use client"
import { useParams } from "next/navigation";
import { useComponents } from "@/hooks/useComponents";

const ComponentDetail = () => {
  const { id } = useParams(); 
  const { components,error,loading } = useComponents();
  
 
  const component = components.find((comp) => comp._id === id);

 
  if (!component) return <p className="text-white">Componente no encontrado</p>;

  return (
    <div className="text-white p-4">
      <h1 className="text-2xl font-bold">{component.name}</h1>
      <p>{component.description}</p>
      <p><strong>Instalación:</strong> {component.installationCli}</p>
    </div>
  );
};

export default ComponentDetail;
