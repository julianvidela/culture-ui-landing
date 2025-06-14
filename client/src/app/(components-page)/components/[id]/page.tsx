"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useComponentContext } from "@/context/ComponentContext";
import { CodeBlock } from "@/components/Atoms/codeBlock/CodeBlock";
import { PropsTable } from "@/components/Atoms/PropsTable/PropsTable";
import { Text } from "@/components/Atoms/Text/Text";
import { ClipboardCheck, Clipboard } from "lucide-react";
import ComponentPreview from "@/components/ComponentsPreview/ComponentPreview";

const ComponentDetail = () => {
  const { id } = useParams();
  const { components, error, loading } = useComponentContext();
  const component = components.find((comp) => comp.id === id);
  const { copied, copy } = useCopyToClipboard();

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
        <Text
          fontWeight="700"
          size="medium"
          color="secondary"
          as="h3"
          className="relative"
        >
          <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400" />
          Preview
        </Text>
        <ComponentPreview id={component.slug} />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text
            fontWeight="700"
            size="medium"
            color="secondary"
            as="h3"
            className="relative"
          >
            <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400" />
            Instalation CLI
          </Text>
        </div>
        <div className="flex overflow-auto group flex-col h-[7rem] rounded-lg bg-[#0A0A0A] ">
          <div className="flex justify-between h-[50px] px-6 rounded-t-lg  border-b border-[var(--border-primary)] items-center ">
            <div>
              <Text color="primary" as="h4" size="small" fontWeight="600">
                npm
              </Text>
            </div>
            <button
              onClick={() => copy(component.installationCli)}
              className=" opacity-0 group-hover:opacity-100 transition-opacity text-white rounded-md"
              aria-label="Copiar código"
            >
              {copied ? (
                <ClipboardCheck color="white" size={16} />
              ) : (
                <Clipboard color="white" size={16} />
              )}
            </button>
          </div>
          <div className="h-[60%] bg-[#0A0A0A] rounded-b-lg flex items-center px-5 font-semibold text-[14px] text-[var(--text-color-secondary)]">
            <Text color="secondary" as="p" size="small">
              <code className="text-violet-400">
                {component.installationCli}
              </code>
            </Text>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text
            fontWeight="700"
            size="medium"
            color="secondary"
            as="h3"
            className="relative"
          >
            <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400" />
            Usage
          </Text>
        </div>
        <div className="flex flex-col h-auto">
          <p>
            <CodeBlock
              code={component.usageExample}
              language="tsx"
              languageText="jsx/tsx"
            />
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text fontWeight="700" size="medium" color="secondary" as="h3">
            Components props
          </Text>
        </div>
        <div>
          <PropsTable
            properties={component.properties.map((p: any) => ({
              prop: p.prop ?? p.name,
              type: p.type,
              description: p.description,
            }))}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Text
            fontWeight="700"
            size="medium"
            color="secondary"
            as="h3"
            className="relative"
          >
            <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400" />
            Advanced Usage
          </Text>
        </div>
        <div className="flex flex-col h-auto">
          <CodeBlock
            code={component.advancedUsage}
            language="tsx"
            languageText="jsx/tsx"
          />
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
