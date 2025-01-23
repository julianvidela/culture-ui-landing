import React from "react";
import "./footer.css";
import Img from "@/app/common/assets/img";
import { navLinksDesktop } from "../Navbar/DataLinks";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-[25rem] w-full mt-40 flex flex-col gap-10">
      <div className="w-full flex justify-center">
        <img src={Img.CultureUiText} alt="" />
      </div>
      <hr className="hr_footer"/>
      <div className="flex justify-center">
        <div className="flex gap-9 ml-6 text-sm">
          {navLinksDesktop.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="font-normal text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
