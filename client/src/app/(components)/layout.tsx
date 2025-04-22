import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";

import React from "react";


export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex mt-16 w-full">
      <div className="w-full">
        
        {children}
      </div>
    </div>
  )
}
