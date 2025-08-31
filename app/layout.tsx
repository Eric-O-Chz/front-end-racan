import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Azeret_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap", // or "block", "fallback"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Racan",
  description: "Refine Styling With Racon AI-powered assistant | fashion Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${azeretMono.className}  antialiased`} //${geistMono.variable}
      >
        {children}

      </body>
    </html>
  );
}
