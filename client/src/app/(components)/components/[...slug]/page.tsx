"use client"
import { CodeBlock } from "@/components/Atoms/codeBlock";
import { useState } from "react";
// import { useState } from "react";

interface Props {
  params: {
    slug: string;
  }
}

const CodeSnippet = (props: Props) => {
  const nameToUppercase = props.params.slug[0].split('-').join(' ');
  const convertToName = nameToUppercase.charAt(0).toUpperCase() + nameToUppercase.slice(1);
  const [codes, setCodes] = useState([
    ` import { Button } from '@tu-libreria/ui-components';

  export default function App() {
    return (
      <>
        <Button variant="primary">Primario</Button>
        <Button variant="secondary" size="lg">Secundario Grande</Button>
        <Button disabled>Deshabilitado</Button>
      </>
    );
  }`
  ]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-6 text-white">{convertToName}</h1>
      <h2 className="text-xl">Installation CLI</h2>
      {
        codes.map((code) => (

          <CodeBlock code={code} language="tsx" />
        ))
      }
      <h2 className="text-xl">Usage</h2>
    </div>
  );
};


export default CodeSnippet;
