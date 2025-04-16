import BackgroundGallery from "@/components/Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";


export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex ml-10">
      <div className="w-full m-10">
        <BackgroundGallery />
        {children}
      </div>
    </div>
  )
}
