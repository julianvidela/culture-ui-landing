"use client";
import { useParams } from "next/navigation";
import { useComponents } from "@/hooks/useComponents";
import { CodeBlock } from "@/components/Atoms/codeBlock";

const ComponentDetail = () => {
  const { id } = useParams();
  const { components, error, loading } = useComponents();
  const component = components.find((comp) => comp._id === id);

  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!component) return <p className="text-white">Componente no encontrado</p>;

  return (
    <div className=" max-w-[700px] justify-start flex flex-col gap-5 text-white">

      <div className="flex flex-col gap-4">
        <h2>{component.name}</h2>
        <p>{component.description}</p>
      </div>



      <div className="flex flex-col gap-4">
        <div>
           <h3>Instalation CLI</h3>   
        </div>
        <div>
         <div>
          <p>npm</p>
         </div>
         <div>
          <p>{component.installationCli}</p>
         </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3>Usage</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div>
              <h4>jsx/tsx</h4>
          </div>
          <div>
            <CodeBlock code={component.usageExample} language="tsx"/>
          </div>

        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3>component props</h3>
        </div>
        <div>
          <p>props</p>
        </div>
      </div>


      <div className="flex flex-col gap-4">
        <div>
          <h3>component props</h3>
        </div>
        <div className="flex flex-col gap-4">
        <div>
          <h4>jsx/tsx</h4>
        </div>
        <div>
          <CodeBlock code={component.advancedUsage} language="tsx"/>
        </div>

        </div>
      </div>
     
    </div>
  );
};

export default ComponentDetail;
