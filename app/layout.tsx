import type { Metadata } from "next";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";





const Ahmet = localFont({
  src: "./fonts/Ahmet-Altun.otf",
  variable: "--font-Ahmet-Altun",

});



export const metadata: Metadata = {
  title: "Iqballas Custom",
  description: "Car Wraps and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Ahmet.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
