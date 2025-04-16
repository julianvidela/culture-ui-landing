"use client";

import {Navbar} from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";



const LayoutWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
 
  const pathname = usePathname();

  const showSidebar = pathname.startsWith("/docs") || pathname.startsWith("/allcomponents") || pathname.startsWith("/components") ;

  return (
    <div className="">
      <div className="w-full">

      <Navbar />
      </div>

      <div className="flex">
        <div>
      {showSidebar && <SideBar />}

        </div>
        <div>
          {children}
        </div>

      </div>
    </div>
  );
};

export default LayoutWrapper;
