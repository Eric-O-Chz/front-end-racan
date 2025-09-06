import type { Metadata } from "next";
import { Azeret_Mono, Poppins,Outfit } from "next/font/google";
import "./globals.css";


const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  display: "swap", // or "block", "fallback"
});
//This is global poppons fonts
const poppins = Poppins({
   subsets: ["latin"],
    variable: "--font-poppins" ,
    weight: ['100','200','400'],
  });

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
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
        className={`${azeretMono.className} ${poppins.variable} ${outfit.variable} antialiased`} //${geistMono.variable}
      >
        {/* <Navbar01 /> */}
        {children}

      </body>
    </html>
  );
}
