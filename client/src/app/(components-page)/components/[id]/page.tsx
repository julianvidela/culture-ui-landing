"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useComponents } from "@/hooks/useComponents";
import { CodeBlock } from "@/components/Atoms/codeBlock/CodeBlock";
import { PropsTable } from "@/components/Atoms/PropsTable/PropsTable";
import { Text } from "@/components/Atoms/Text/Text";
import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";
import { ClipboardCheck, Clipboard } from "lucide-react";

const ComponentDetail = () => {
  const { id } = useParams();
  const { components, error, loading } = useComponents();
  const component = components.find((comp) => comp._id === id);
  const { copied, copy } = useCopyToClipboard();

  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!component) return <p className="text-white">Componente no encontrado</p>;

  return (
    <div className=" max-w-[750px] justify-start flex flex-col gap-[5rem] border-l border-[var(--border-primary)] text-white mb-16 px-8">
      <BackgroundGallery />
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
          <Text
            fontWeight="700"
            size="medium"
            color="secondary"
            as="h3"
            className="relative"
          >
            <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
            Instalation CLI
          </Text>
        </div>
        <div className="flex overflow-auto group flex-col h-[7rem] rounded-lg bg-[var(--bg-black-degrade)] border border-[var(--border-primary)]">
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
          <div className="h-[60%] bg-[var(--bg-black-degrade)] rounded-b-lg flex items-center px-5 font-semibold text-[14px] text-[var(--text-color-secondary)]">
            <Text color="secondary" as="p" size="small">
              {component.installationCli}
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
          <Text
            fontWeight="700"
            size="medium"
            color="secondary"
            as="h3"
            className="relative"
          >
            <span className="absolute top-0 -left-8 z-20 block h-full w-[6px] rounded-tr-full rounded-br-full bg-zinc-400"></span>
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
