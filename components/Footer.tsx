// components/Footer.tsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">JLE Customs</h3>
            <p>9934 Jones Road, Houston, TX</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-red-600 px-4 py-2 rounded">Contact Us</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
