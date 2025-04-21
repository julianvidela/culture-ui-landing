"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from "lucide-react"; 

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  theme?: { [key: string]: React.CSSProperties };
}

export const CodeBlock = ({
  code,
  language = "tsx",
  showLineNumbers = false,
  theme = nightOwl,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    <div className="relative p-6 overflow-auto group scrollbar-shadcn">
      
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity text-white p-1 rounded-md"
        aria-label="Copiar código"
      >
        {copied ? <ClipboardCheck color="white" size={16} /> : <Clipboard color="white" size={16} />}
      </button>

      
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
          paddingBottom:"16px",
        }}
        lineNumberStyle={{
          color: "#666",
          paddingRight: "1rem",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
};
