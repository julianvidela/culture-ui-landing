
import { supabase } from "@/lib/supabaseClient";



export interface ParsedProp {
  name: string;
  type: string;
  description: string;
  required: boolean;
}

export interface Component {
  id:string;
  name: string;
  description: string;
  slug: string;
  imageURL: string;
  installationCli: string;
  usageExample: string;
  advancedUsage: string;
  isPremium: boolean;
  properties: ParsedProp[];
}

export const componentService = async (): Promise<Component[]> => {
  const { data: files, error: listError } = await supabase
    .storage
    .from("components-metadata")
    .list("", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (listError) throw new Error("No se pudo listar los archivos");

  const jsonFiles = files?.filter((f: { name: string; }) => f.name.endsWith(".json")) ?? [];

  const downloads = await Promise.all(
    jsonFiles.map(async (file: { name: any; }) => {
      const { data, error } = await supabase
        .storage
        .from("components-metadata")
        .download(file.name);

      if (error) return null;

      const text = await data.text();
      try {
        const parsed: Component = JSON.parse(text);
        console.log("holaaaa puutoo",parsed)
        return parsed;
      } catch (e) {
        console.warn("Error parseando", file.name);
        return null;
      }
    })
  );

  return downloads.filter(Boolean) as Component[];
};
