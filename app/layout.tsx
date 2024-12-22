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
  title: "Iqballaz Customs",
  description: "Car Wraps and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Structured Data for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Iqballaz Customs",
              url: "https://iqballazcustoms.com",
              logo: "https://iqballazcustoms.com/logo.jpg", 
            }),
          }}
        />
      </head>
      <body className={`${Ahmet.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
