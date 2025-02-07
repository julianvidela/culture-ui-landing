import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";


export const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  const [copy, setCopy] = useState(false)
  return (
    <div className="grid w-full ">
      <div className="w-full bg-[#282c34] rounded-xl overflow-hidden">
        <div className="flex justify-between pb-3 pt-6 px-6 rounded-lg">
          <div className="flex space-x-2">
            <div className="w-4 h-4 rounded-full bg-red-500"></div>
            <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
            <div className="w-4 h-4 rounded-full bg-green-500"></div>
          </div>
          {
            copy ? (
              <button className="text-white ">Copied</button>
            ) : (
              <button className="text-white" onClick={() => {
                navigator.clipboard.writeText(code)
                setCopy(true)
                setTimeout(() => {
                  setCopy(false)
                }, 1500)
              }}>Copy</button>
            )
          }
        </div>
        <SyntaxHighlighter language={language} style={oneDark} wrapLines={true}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div >
  );
};

