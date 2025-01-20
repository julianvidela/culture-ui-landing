import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CultureUI",
  description: "Library of UI components for React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
