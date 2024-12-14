"use client"
import React from "react";
import { motion } from "framer-motion";
export default function Location() {
    return (
        <section className="location  w-[100%] h-[600px] flex flex-col md:flex-row items-center justify-between p-[2%] /*md:py-20 py-10*/ ">
            <motion.div 
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
            className="p-6 h-[80%]  flex flex-col items-center justify-between w-full md:w-1/2 ">
                <h1 className="text-3xl md:text-5xl font-bold">Location and Hours</h1>
                <div className="w-[100%]">
                    <p className="font-bold">Call us</p>
                    <p className="font-bold">BY APPOINTMENT ONLY</p>
                    <a className="font-bold underline" href="#">(832) 506 0968</a>
                </div>
                <div className="w-[100%]">
                    <p className="font-bold">Location</p>
                    <p className="font-bold">9934 Jones Road</p>
                    <p className="font-bold">Unit D3</p>
                    <p className="font-bold">Houston, TX</p>
                </div>
                <div className="w-[100%]">
                    <p className="font-bold">Monday - Friday: 10am to 6pm</p>
                    <p className="font-bold">Saturday: 10am to 2pm</p>
                    <p className="font-bold">Sunday CLOSED</p>
                </div>
            </motion.div>
            <div className="w-full h-[80%] md:w-1/2">
                <motion.iframe
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
                    src="https://www.google.com/maps/embed"
                    width="100%"
                    height="100%"
                    className="border"
                    allowFullScreen
                ></motion.iframe>
            </div>
        </section>
    );
}
