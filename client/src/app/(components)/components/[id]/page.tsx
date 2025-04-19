"use client";
import { useParams } from "next/navigation";
import { useComponents } from "@/hooks/useComponents";
import { CodeBlock } from "@/components/Atoms/codeBlock";
import { PropsTable } from "@/components/Atoms/PropsTable/PropsTable";

const ComponentDetail = () => {
  const { id } = useParams();
  const { components, error, loading } = useComponents();
  const component = components.find((comp) => comp._id === id);

  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!component) return <p className="text-white">Componente no encontrado</p>;

  return (
    <div className=" max-w-[700px] justify-start flex flex-col gap-10 text-white mb-16">
      <div className="flex flex-col gap-4">
        <h2 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
          {component.name}
        </h2>
        <p className="text-[14px] font-semibold text-[var(--text-color-primary)]">
          {component.description}
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
            Instalation CLI
          </h3>
        </div>
        <div className="flex flex-col h-[7rem] bg-black rounded-xl border border-[var(--border-primary)]">
          <div className="h-[40%] flex items-center p-6 border-b border-[var(--border-primary)]">
            <p className="font-semibold text-[14px] text-[var(--text-color-primary)]">
              npm
            </p>
          </div>
          <div className="h-[60%] flex items-center px-5 font-semibold text-[14px] text-[var(--text-color-secondary)]">
            <p>{component.installationCli}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
            Usage
          </h3>
        </div>
        <div className="flex flex-col h-auto rounded-xl bg-black border border-[var(--border-primary)]">
          <div className="h-[49px] px-6 py-6 border-b border-[var(--border-primary)] flex items-center">
            <h4 className="font-semibold text-[14px] text-[var(--text-color-primary)]">
              jsx/tsx
            </h4>
          </div>

          <CodeBlock code={component.usageExample} language="tsx" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
            component props
          </h3>
        </div>
        <div>
          <PropsTable properties={component.properties} />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-[32px] font-bold text-[var(--text-color-secondary)]">
            component props
          </h3>
        </div>
        <div className="flex flex-col gap-4 h-auto rounded-xl bg-black border border-[var(--border-primary)]">
          <div className="h-[49px] px-6 py-6 border-b border-[var(--border-primary)] flex items-center">
            <h4 className="font-semibold text-[14px] text-[var(--text-color-primary)]">
              jsx/tsx
            </h4>
          </div>

          <CodeBlock code={component.advancedUsage} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ComponentDetail;
