"use client";

import { Navbar } from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";


const LayoutWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();

  const showSidebar =
    pathname.startsWith("/docs") || pathname.includes("/components") || pathname.includes("/installation");

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
        <div className="flex flex-col w-full">{children}</div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
