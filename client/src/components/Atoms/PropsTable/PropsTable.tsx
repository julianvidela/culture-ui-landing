
export interface ParsedProp {
    prop: string;
    type: string;
    description: string;
  }


  interface PropsTableProps {
    properties: ParsedProp[];
  }

export const PropsTable = ({ properties }: PropsTableProps) => {
  return (
    <div className="overflow-x-auto border border-[var(--border-primary)] rounded-lg scrollbar-shadcn">
      <table className="min-w-[700px] w-full text-sm text-left">
        <thead className="text-[var(--text-color-primary)]">
          <tr>
            <th className="py-3 px-6">Prop name</th>
            <th className="py-3 px-6">Type</th>
            <th className="py-3 px-6">Description</th>
          </tr>
        </thead>
        <tbody className="text-zinc-300">
          {properties.map(({ prop, type, description }) => (
            <tr key={prop} className="border-t border-[var(--border-primary)]">
              <td className="py-4 px-6">
                <span className="bg-zinc-800 text-orange-200 px-2 py-1 rounded font-mono text-sm">
                  {prop}
                </span>
              </td>
              <td className="py-4 px-6">
                <span className="bg-zinc-900 text-violet-500 px-2 py-1 rounded font-mono text-sm">
                  {type}
                </span>
              </td>
              <td className="py-4 px-6 font-semibold text-sm">{description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
