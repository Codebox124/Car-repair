// components/Testimonials.tsx
'use client';

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Appointment was on time and professional. Trust JLE Customs for quality work!",
      author: "Danny Abasi",
    },
    {
      quote: "Amazing service and attention to detail. Highly recommend JLE Customs!",
      author: "Sarah Johnson",
    },
    {
      quote: "Professional, reliable, and affordable. I will definitely use their services again.",
      author: "Michael Doe",
    },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="bg-black text-white md:py-20 py-10 ">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <Carousel
         responsive={responsive} showDots={false} arrows={false} autoPlay={true} autoPlaySpeed={3000} infinite={true}
        className="max-w-3xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <div
            className="text-center px-6 py-8 rounded-lg shadow-md"
            key={index}
          >
            <blockquote className="italic text-lg">"{testimonial.quote}"</blockquote>
            <footer className="mt-4 text-sm font-semibold">- {testimonial.author}</footer>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
