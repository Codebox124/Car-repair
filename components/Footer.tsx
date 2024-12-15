'use client';
import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function ContactForm() {
    return (
        <section className="bg-black text-white py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Left Section */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">JLE CUSTOMS</h2>
                        <p className="mb-4">Our average response time is 1-3 business days.</p>
                        <div>
                            <p className="text-red-500 font-bold text-lg mb-2">(832) 506 0968</p>
                            <p>9934 Jones Road, Unit D3</p>
                            <p>Houston, TX</p>
                        </div>
                        <div className="flex justify-center md:justify-start  mt-10 space-x-6">
                            <motion.a
                                href="https://www.instagram.com/iqballazcustoms/"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <FaInstagram size={24} />
                            </motion.a>
                            <motion.a
                                href="https://www.facebook.com/share/15XgEEfB5M/?mibextid=wwXIfr"
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <FaFacebookF size={24} />
                            </motion.a>
                           
                        </div>
                    </div>


                    {/* Right Section - Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="bg-white p-6 rounded-md shadow-md text-black"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                                    First Name *
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                                    Last Name *
                                </label>
                                <input
                                    id="lastName"
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                            </div>
                        </div>

                        {/* Phone Number */}
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                                Phone Number *
                            </label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Enter your phone number"
                                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-semibold mb-2">
                                Write a message *
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="Type your message here"
                                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                            ></textarea>
                        </div>

                        {/* reCAPTCHA Placeholder */}
                        <div className="mb-4">
                            <div className="bg-gray-200 rounded p-4 text-center text-gray-600">
                                reCAPTCHA Placeholder
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-all"
                            >
                                Submit
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
