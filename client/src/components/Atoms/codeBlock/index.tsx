import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";


export const CodeBlock = ({ code, language }: { code: string; language: string }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula} wrapLines={true}>
      {code}
    </SyntaxHighlighter>
  );
};

