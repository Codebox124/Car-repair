import React from "react";

const services = [
    {
        title: "Vinyl Wrap",
        description: "High-quality vinyl made to last.",
        img: "/services.png", 
    },
    {
        title: "Window Tint",
        description: "Protect from harmful UV rays.",
        img: "/services.png", 
    },
    {
        title: "Paint Protection Film",
        description: "Protect your car's exterior.",
        img: "/services.png", 
    },
    {
        title: "Ceramic Coating",
        description: "Durable, long-lasting coating.",
        img: "/services.png", 
    },
];

export default function Services() {
    return (
        <section className=" md:py-20 py-10 ">
            
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="border p-6 text-center flex flex-col items-center"
                    >
                        <img
                            src={service.img}
                            alt={service.title}
                            className="mb-4 w-full h-48 object-cover"
                        />
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p>{service.description}</p>
                        <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
                            Read More
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
