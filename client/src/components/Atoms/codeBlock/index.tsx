// import { useState } from "react";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


// export const CodeBlock = ({ code, language }: { code: string; language: string }) => {
//   const [copy, setCopy] = useState(false)
//   return (
//     <div className="grid w-full ">
//       <div className="w-full bg-[#282c34] rounded-xl overflow-hidden">
//         <div className="flex justify-between pb-3 pt-6 px-6 rounded-lg">
//           <div className="flex space-x-2">
//             <div className="w-4 h-4 rounded-full bg-red-500"></div>
//             <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
//             <div className="w-4 h-4 rounded-full bg-green-500"></div>
//           </div>
//           {
//             copy ? (
//               <button className="text-white ">Copied</button>
//             ) : (
//               <button className="text-white" onClick={() => {
//                 navigator.clipboard.writeText(code)
//                 setCopy(true)
//                 setTimeout(() => {
//                   setCopy(false)
//                 }, 1500)
//               }}>Copy</button>
//             )
//           }
//         </div>
//         <SyntaxHighlighter language={language} style={oneDark} wrapLines={true}>
//           {code}
//         </SyntaxHighlighter>
//       </div>
//     </div >
//   );
// };


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
    <div className="relative p-6 overflow-auto group">
      
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
          padding: 0,
          margin: 0,
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
