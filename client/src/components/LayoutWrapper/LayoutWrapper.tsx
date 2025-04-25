"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";
import BackgroundGallery from "../Atoms/BackGrounds/BackGroundGallery/BackgroundGallery";

const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const showSidebar =
    pathname.startsWith("/docs") ||
    pathname.startsWith("/components");

  return (
    <div className="">
      <div className="w-full relative">
        <Navbar />
      </div>

      <div className="flex">
        <div className="flex justify-start">
          {showSidebar && (
            <div className="hidden lg:block">
              <SideBar />
            </div>
          )}
        </div>
        <div className="flex flex-col w-full items-center">
          {/* <BackgroundGallery /> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
