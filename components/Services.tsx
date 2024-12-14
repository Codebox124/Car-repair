'use client';
import React from "react";
import { motion } from "framer-motion";
const services = [
    {
        title: "Vinyl Wrap",
        description: "High-quality vinyl made to last.",
        img: "/services.jpg", 
    },
    {
        title: "Window Tint",
        description: "Protect from harmful UV rays.",
        img: "/services.jpg", 
    },
    {
        title: "Paint Protection Film",
        description: "Protect your car's exterior.",
        img: "/services.jpg", 
    }/*,
    {
        title: "Ceramic Coating",
        description: "Durable, long-lasting coating.",
        img: "/services.jpg", 
    },*/
];
const removed = "grid-cols-1 md:grid-cols-3"
export default function Services() {
    return (
        <section className=" flex flex-col items-center md:py-20 py-10 w-[100%] bg-[white] text-[black] ">
            
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid services w-[90%] gap-6 px-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="border cursor-pointer service bg-[hsla(0,_0%,_0%,_0.1)] rounded-[2px] p-6 text-center flex flex-col items-center"
                        initial={{
                            y:100,
                            opacity:0
                        }}
                        whileInView={{
                            y:0,
                            opacity:1
                        }}
                        transition={{
                            duration:0.7,
                            ease:"easeInOut",
                            delay:0.07*index
                        }}
                        viewport={{
                            once:true
                        }}
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="mb-4 w-full h-48 object-cover"
                        />
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="font-bold">{service.description}</p>
                        <button className="mt-4 bg-red-600 text-white font-bold px-4 py-2 rounded">
                            Read More
                        </button>
                    </motion.div>
                ))}
            </div>
            <motion.button 
             initial={{
                y:100,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:0.7,
                ease:"easeInOut",
            }}
            viewport={{
                once:true
            }}
            className="mt-[50px] bg-red-600 text-white font-bold px-4 py-2 rounded">View Services</motion.button>
        </section>
    );
}
