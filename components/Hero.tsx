'use client';
import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <motion.section
        id="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative bg-cover bg-center text-white h-screen w-full md:py-20 py-10  flex flex-col justify-center items-center"
            style={{ backgroundImage: "url('/carrepairherobanner.jpg')" }}
        >
          
            <motion.div
                className="absolute inset-0 bg-black opacity-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>

            
            <div className="relative z-10 text-center px-4">
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    Customize Your Vehicle Today!
                </motion.h1>
                <motion.button
                    className="bg-red-600 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded text-white uppercase text-sm sm:text-base md:text-lg"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.6,
                        ease: "easeInOut",
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Call to Schedule
                </motion.button>
            </div>
        </motion.section>
    );
}
