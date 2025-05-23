// import axios from "axios";

// const API_URL = "https://c23-53-webapp.onrender.com/api/v1/component";


// export const componentService = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     console.log(response)
//     return response.data; 
//   } catch (error) {
//     console.error("Error obteniendo los componentes:", error);
//     return [];
//   }
// };




// src/services/componentService.ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://lvrnssnafxbbmiigjfim.supabase.co",
 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2cm5zc25hZnhiYm1paWdqZmltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTQ3MDgsImV4cCI6MjA2Mjk5MDcwOH0.fMuP3R5nDCQqqyTDO0Zm_c56Sozv3dode7Yer4mO5-0"
);

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
