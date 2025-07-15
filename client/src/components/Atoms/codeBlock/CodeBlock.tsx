"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Clipboard, ClipboardCheck, ChevronDown, ChevronUp } from "lucide-react";
import { Text } from "@/components/Atoms/Text/Text";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import "./codeBlock.css"


interface CodeBlockProps {
  code: string;
  language?: string;
  languageText?: string;
  showLineNumbers?: boolean;
  theme?: { [key: string]: React.CSSProperties };
}

export const CodeBlock = ({
  code,
  language = "tsx",
  languageText = "jsx/tsx",
  showLineNumbers = false,
  theme = duotoneDark,
}: CodeBlockProps) => {
  const { copied, copy } = useCopyToClipboard();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative group flex flex-col h-auto rounded-xl bg-[#0A0A0A] overflow-hidden transition-all"
      style={{
        WebkitMaskImage: !expanded
          ? "linear-gradient(to bottom, black 75%, transparent 100%)"
          : undefined,
        maskImage: !expanded
          ? "linear-gradient(to bottom, black 75%, transparent 100%)"
          : undefined,
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        transition: "mask-image 0.4s ease, -webkit-mask-image 0.4s ease",
      }}
    >
      
      <div className="flex justify-between h-[50px] px-6 border-b border-[var(--border-primary)] items-center">
        <Text color="primary" as="p" size="small" fontWeight="600">
          {languageText}
        </Text>

        <button
          onClick={() => copy(code)}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-white rounded-md"
          aria-label="Copiar código"
        >
          {copied ? <ClipboardCheck size={16} /> : <Clipboard size={16} />}
        </button>
      </div>

      
      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          expanded ? "max-h-auto" : "max-h-[350px]"
        } overflow-hidden relative scrollbar-shadcn`}
      >
        <SyntaxHighlighter
          language={language}
          style={theme}
          showLineNumbers={showLineNumbers}
          wrapLines
          customStyle={{
            background: "transparent",
            fontSize: "14px",
            fontWeight: "normal",
            padding: 0,
            margin: 0,
            paddingBlock: "16px",
            marginBottom: "15px",
          }}
          lineNumberStyle={{
            color: "#666",
            paddingRight: "1rem",
          }}
        >
          {code.trim()}
        </SyntaxHighlighter>
      </div>

      
      {!expanded ? (
        <button
          onClick={() => setExpanded(true)}
          className="relative left-1/2 -translate-x-1/2 z-50 text-xs font-semibold text-white  px-3 pt-2 pb-8 rounded-md transition"
        >
          Expand <ChevronDown size={14} className="inline-block ml-1" />
        </button>
      ) : (
        <button
          onClick={() => setExpanded(false)}
          className="relative z-10 flex items-center gap-1 justify-center text-xs font-semibold py-5 text-white hover:text-zinc-200 transition"
        >
          Collapse <ChevronUp size={14} />
        </button>
      )}
    </div>
  );
};
