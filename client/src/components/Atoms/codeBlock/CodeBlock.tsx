"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from "lucide-react"; 
import { Text } from "@/components/Atoms/Text/Text";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard"; 


interface CodeBlockProps {
  code: string;
  language?: string;
  languageText?:string;
  showLineNumbers?: boolean;
  theme?: { [key: string]: React.CSSProperties };
}

export const CodeBlock = ({
  code,
  language = "tsx",
  languageText= "jsx/tsx",
  showLineNumbers = false,
  theme = nightOwl,
}: CodeBlockProps) => {
  
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className="overflow-auto group flex flex-col h-auto rounded-xl bg-[var(--bg-black-degrade)] border border-[var(--border-primary)]">
      <div className="flex justify-between h-[50px] px-6 rounded-t-lg  border-b border-[var(--border-primary)] items-center ">
        <div>
          <Text color="primary" as="h4" size="small" fontWeight="600">{languageText}</Text>
        </div>
      <button
         onClick={() => copy(code)}
        className=" opacity-0 group-hover:opacity-100 transition-opacity text-white rounded-md"
        aria-label="Copiar código"
      >
        {copied ? <ClipboardCheck color="white" size={16} /> : <Clipboard color="white" size={16} />}
      </button>

      </div>
      
      <div className="scrollbar-shadcn px-6">
      <SyntaxHighlighter
        language={language}
        style={theme}
        showLineNumbers={showLineNumbers}
        wrapLines
        customStyle={{
          
          background: "transparent",
          fontSize: "14px",
          fontWeight:"normal",
          padding: 0,
          margin: 0,
          paddingBlock:"16px",
          marginBottom:"15px"
        }}
        lineNumberStyle={{
          color: "#666",
          paddingRight: "1rem",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>

      </div>
      
    </div>
  );
};
