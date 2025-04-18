import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";

import React from "react";


export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ml-10 w-full">
      <div className="w-full m-10">
        
        {children}
      </div>
    </div>
  )
}
