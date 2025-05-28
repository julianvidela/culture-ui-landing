"use client";

import React from "react";
import { Text } from "@/components/Atoms/Text/Text";
import { CodeSnippet } from "@/components/Atoms/CodeSnippet/CodeSnippet";
import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";

export const Installation = () => {
  return (
    <section className="w-full h-auto mt-16 mb-20 border-l flex flex-col gap-6 border-[var(--border-primary)] px-8">
      <BackgroundGallery />

      <div className="max-w-[700px] flex flex-col gap-8 mt-4">
        <div className="flex flex-col gap-3">
          <Text fontWeight="700" color="secondary" size="large" as="h2">
            Installation
          </Text>
          <Text color="primary" fontWeight="600" size="small" as="p">
            CultureUI is a modern React component library built with
            TailwindCSS. Below is how to get started in just a few steps.
          </Text>
        </div>

        
        <div className="flex flex-col gap-3">
          <Text fontWeight="700" color="secondary" size="medium"  as="h3">
            1. Install the package
          </Text>
          

          <CodeSnippet
            code={`npm install cultureui-library\n`}
            language="bash"
          />
          <CodeSnippet 
          language="bash"
          code={`\nyarn add cultureui-library`}/>
          
        
        </div>

        <div className="flex flex-col gap-3">
          <Text fontWeight="700" color="secondary" size="medium" as="h3">
            2. Configure TailwindCSS
          </Text>
          <Text color="primary" size="small" fontWeight="600" className="flex gap-2 items-center">
            Asegurate de incluir la librería en tu{" "}
            <code className="bg-[#ffffff40] p-1 rounded-lg text-white borde-re">tailwind.config.js</code>:
          </Text>
          <div>

         <CodeSnippet
  language="js"
  code={`export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};`}
/>
          </div>

        </div>

        
        <div className="flex flex-col gap-3">
          <Text fontWeight="700" color="secondary" size="medium" as="h3">
            3. Use components
          </Text>
          <Text color="primary" size="small" fontWeight="600">
            Podés importar cualquier componente de forma directa:
          </Text>

          <div>


 <CodeSnippet
  language="tsx"
  code={`import { AvatarStack } from "cultureui-library";

export default function MyComponent() {
  return (
    <div className="p-8">
      <AvatarStack
        people={[
          { image: "/img1.jpg", name: "Juli", role: "Dev" },
          { image: "/img2.jpg", name: "Marce", role: "UX" },
        ]}
      />
    </div>
  );
}`}
/>
          </div>

        </div>
      </div>
    </section>
  );
};
