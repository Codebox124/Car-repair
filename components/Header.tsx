'use client'
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const border = "border-[1px] border-[red] border-[solid]"
  return (
    <nav className="fixed top-0  font-[family-name:var(--font-Ahmet-Altun)] bg-black z-50 text-white flex justify-between items-center py-4 px-6 w-full">
      {/* Logo Section */}
     <a href="/">
     <div className="text-lg font-bold">
        <img className="w-24 h-24" src= "/logo.jpg" alt='' />
      </div>
     </a>
      <div className="hidden md:flex items-center justify-between w-[230px]">
        <a href="/services"><h1 className="cursor-pointer">Services</h1></a>
        <div className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded w-full md:w-auto text-center">
          (832)-208-1071
        </div>
      </div>
      {/* Navigation and Contact */}
    <AnimatePresence>
    {isMenuOpen &&  <motion.div
    initial={{
      x:"-100vw"
    }}
    animate={{
      x:0
    }}
    exit={{
      x:"-100vw"
    }}
    transition={{
      duration:0.7,
      ease:"backInOut"
    }}
        className={"fixed inset-0 bg-[black] flex flex-col items-center justify-center p-[2%] "}
      >
        <a href="/services"><button className="block md:inline uppercase  text-xl w-full md:w-auto text-center py-3 md:py-0">
          Services
        </button></a>
        <div className="bg-red-600 text-white px-4 py-2 rounded w-full md:w-auto text-center">
          (832)-208-1071
        </div>
      </motion.div>}
    </AnimatePresence>
    <AnimatePresence>
    {!isMenuOpen && <motion.span
    initial={{
      opacity:0
    }}
    animate={{
      opacity:1
    }}
    exit={{
      opacity:0
    }}
    transition={{
      duration:0.5,
      ease:"easeInOut"
    }}
    className="block fixed right-[24px]"
    ><CiMenuFries className="block md:hidden relative z-20  w-[30px] h-[30px] cursor-pointer" onClick={()=>{setIsMenuOpen(true)}} /></motion.span>}
    </AnimatePresence>
    <AnimatePresence>
    {isMenuOpen && <motion.span 
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      exit={{
        opacity:0
      }}
      transition={{
        duration:0.5,
        ease:"easeInOut"
      }}
      ><IoMdClose className="w-[30px] h-[30px] relative z-20 cursor-pointer" onClick={()=>{setIsMenuOpen(false)}} /></motion.span>}
    </AnimatePresence>
    </nav>
  );
}
