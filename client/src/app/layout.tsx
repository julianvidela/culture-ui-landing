import type { Metadata } from "next";
import { Manrope } from "next/font/google";
 import { Providers } from "@/providers/Providers";

import "./globals.css";
import '@/styles/utilities.css'; 

import LayoutWrapper from "@/components/LayoutWrapper/LayoutWrapper";
import  Icon  from "@/common/assets/icons";


const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-Manrope",
});

export const metadata: Metadata = {
  title: "CultureUI",
  description: "Library of components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href={Icon.LogoPublicCulture} type="image/svg+xml"/>
      {/* <link rel="alternate icon" href="/favicon.ico" /> */}
      </head>
      <body className={`${manrope.variable}  antialiased`}>
          <Providers>

          <div className="max-w-[1400px] mx-auto px-4">
            <LayoutWrapper>
                {children}
              </LayoutWrapper>
          </div>
          </Providers>
        
      </body>
    </html>
  );
}