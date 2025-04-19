

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
      <div className="overflow-x-autoborder border border-[var(--border-primary)] rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="text-white rounded-lg">
            <tr>
              <th className="p-3">Prop name</th>
              <th className="p-3">Type</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody className=" text-zinc-300">
            {properties.map(({ prop, type, description }) => (
              <tr key={prop} className="border-t border-[var(--border-primary)]">
                <td className="p-3">
                  <span className="bg-zinc-800 text-white px-2 py-1 rounded font-mono text-xs">
                    {prop}
                  </span>
                </td>
                <td className="p-3">
                  <span className="bg-zinc-900 text-green-400 px-2 py-1 rounded font-mono text-xs">
                    {type}
                  </span>
                </td>
                <td className="p-3">{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  