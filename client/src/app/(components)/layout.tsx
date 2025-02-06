import { CodeBlock } from "@/components/Atoms/codeBlock";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";


export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-full m-10">
        {children}
      </div>
    </div>
  )
}
