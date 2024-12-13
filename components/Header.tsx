'use client'
import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black z-50 text-white flex justify-between items-center py-4 px-6 fixed w-full">
      {/* Logo Section */}
      <div className="text-lg font-bold">
        <span className="block uppercase">Iqballaz</span>
        <span className="block">CUSTOMS</span>
      </div>

     
      <button
        className="block md:hidden text-white focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={
              isMenuOpen
                ? "M6 18L18 6M6 6l12 12" // Close icon
                : "M4 6h16M4 12h16M4 18h16" // Hamburger menu icon
            }
          />
        </svg>
      </button>

      {/* Navigation and Contact */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-black md:static md:flex md:items-center justify-between md:space-x-4 `}
      >
        <button className="block md:inline uppercase  text-sm w-full md:w-auto text-center py-3 md:py-0">
          Services
        </button>
        <div className="bg-red-600 text-white px-4 py-2 rounded w-full md:w-auto text-center">
          (832)-208-1071
        </div>
      </div>
    </header>
  );
}
