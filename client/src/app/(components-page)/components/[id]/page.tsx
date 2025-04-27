"use client";
import React from "react"
import { useParams } from "next/navigation";
import { useComponents } from "@/hooks/useComponents";
import { CodeBlock } from "@/components/Atoms/codeBlock";
import { PropsTable } from "@/components/Atoms/PropsTable/PropsTable";
import { Text } from "@/components/Atoms/Text/Text";

const ComponentDetail = () => {
  const { id } = useParams();
  const { components, error, loading } = useComponents();
  const component = components.find((comp) => comp._id === id);

  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!component) return <p className="text-white">Componente no encontrado</p>;

  return (
    <div className=" max-w-[750px] justify-start flex flex-col gap-[5rem] border-l border-[var(--border-primary)] text-white mb-16 px-8">
      <div className="flex flex-col gap-3">
        <Text fontWeight="700" color="secondary" size="large" as="h2">
          {component.name}
        </Text>
        <Text color="primary" fontWeight="600" size="small" as="p">
          {component.description}
        </Text>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text fontWeight="700" size="medium" color="secondary" as="h3" className="relative">
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
            Instalation CLI
          </Text>
        </div>
        <div className="flex flex-col h-[7rem] rounded-lg border border-[var(--border-primary)]">
          <div className="h-[45px] px-6  bg-[var(--bg-black-degrade)] rounded-t-lg py-6 border-b border-[var(--border-primary)] flex items-center">
            <Text color="primary" as="h4" size="small" fontWeight="600">
              npm
            </Text>
          </div>
          <div className="h-[60%] bg-[var(--bg-black-degrade)] rounded-b-lg flex items-center px-5 font-semibold text-[14px] text-[var(--text-color-secondary)]">
            <Text color="secondary" as="p" size="small">
              {component.installationCli}
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text fontWeight="700" size="medium" color="secondary" as="h3" className="relative">
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
            Usage
          </Text>
        </div>
        <div className="flex flex-col h-auto">
          <CodeBlock
            code={component.usageExample}
            language="tsx"
            languageText="jsx/tsx"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text fontWeight="700" size="medium" color="secondary" as="h3">
          
            Components props
          </Text>
        </div>
        <div>
          <PropsTable properties={component.properties} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text fontWeight="700" size="medium" color="secondary" as="h3" className="relative">
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
            Advanced Usage
          </Text>
        </div>
        <div className="flex flex-col h-auto">
          <CodeBlock code={component.advancedUsage} language="tsx" languageText="jsx/tsx" />
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
