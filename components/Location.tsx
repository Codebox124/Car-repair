
import React from "react";

export default function Location() {
    return (
        <section className="flex flex-col md:flex-row items-center md:py-20 py-10 ">
            <div className="p-6">
                <h3 className="text-xl font-bold">Location and Hours</h3>
                <p>Call us by appointment only: (832) 506 0968</p>
                <p>Location: 9934 Jones Road, Unit D3, Houston, TX</p>
                <p>Monday - Friday: 10am to 6pm</p>
            </div>
            <div className="w-full h-64 md:w-1/2">
                <iframe
                    src="https://www.google.com/maps/embed"
                    width="100%"
                    height="100%"
                    className="border"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}
