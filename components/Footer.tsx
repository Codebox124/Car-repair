// components/Footer.tsx
'use client'
import React from "react";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <motion.h3
              initial={{
                x:-100,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.7,
                ease:"easeInOut",
            }}
            viewport={{
                once:true
            }}
            className="text-2xl font-bold">JLE Customs</motion.h3>
            <motion.p
              initial={{
                x:-100,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.7,
                ease:"easeInOut",
                delay:0.07
            }}
            viewport={{
                once:true
            }}
            >9934 Jones Road, Houston, TX</motion.p>
          </div>
          <div className="flex space-x-4">
            <motion.button
              initial={{
                x:100,
                opacity:0
            }}
            whileInView={{
                x:0,
                opacity:1
            }}
            transition={{
                duration:0.7,
                ease:"easeInOut",
            }}
            viewport={{
                once:true
            }}
            className="bg-red-600 px-4 py-2 rounded">Contact Us</motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
