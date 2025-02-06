import React from 'react'
import Link from 'next/link'
import { Button } from '../Atoms/Button/Button';
import { navLinksDesktop } from './DataLinks';


export const Navbar = () => {
  return (
    <div className="border-b border-[var(--border-primary)] w-full h-auto mt-2">
      <nav className="flex justify-between items-center w-full h-[100%] py-[24px] ">
        <div className="w-[70%] flex items-center gap-52">
          <div>
            <h2 className="text-[var(--text-color-secondary)] font-bold text-2xl">Culture UI</h2>
          </div>
          <div className="flex gap-9 ml-6 text-base">
            {navLinksDesktop.map((link, index) => (
              <Link key={index} href={link.href} className="font-normal text-[var(--text-color-secondary)] transition-colors duration-300 ease-in-out hover:text-[var(--text-color-primary)]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-white flex justify-end gap-4 w-[30%]">
          <Button
          color='#CAC8C8'
          textColor='#000000'
          fontSize='15px'
          >
            <Link href="/">Log in</Link>
          </Button>
         
        </div>
      </nav>
    </div>
  );
};
