import type { Metadata } from "next";
import { Manrope } from "next/font/google"
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-Manrope',
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
      <body
        className={`${manrope.variable} antialiased`}
      >
        <div className="flex ">
          <Sidebar />
          <main className="w-[50%]">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
