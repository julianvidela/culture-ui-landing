"use client";

import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark, vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import "./codeSnippet.css"

interface CodeSnippetProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export const CodeSnippet = ({
  code,
  language = "tsx",
  showLineNumbers = false,
  className,
}: CodeSnippetProps) => {
  const { copied, copy } = useCopyToClipboard();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={clsx("relative scrollbar-shadcn overflow-hidden bg-[#0A0A0A] rounded-lg", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <SyntaxHighlighter
        language={language}
        style={duotoneDark}
        showLineNumbers={showLineNumbers}
        wrapLines
        customStyle={{
          background: "transparent",
          fontSize: "14px",
          fontWeight: "normal",
          padding: 0,
          margin: 0,
          paddingBlock: "16px",
          paddingRight:"20px",
          paddingLeft:"20px",
          paddingTop:"20px"
          
        }}
        lineNumberStyle={{
          backgroundColor: "transparent",
          color: "#666",
          paddingRight: "1rem",
        }}
      >
        {code.trim()}
      </SyntaxHighlighter>

      <button
        onClick={() => copy(code)}
        className={clsx(
          "absolute top-2 right-2 text-white p-1 rounded-md transition-opacity z-10",
          hovered ? "opacity-100" : "opacity-0"
        )}
        aria-label="Copiar código"
      >
        {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
      </button>
    </div>
  );
};
