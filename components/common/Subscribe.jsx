"use client";
import React from 'react';
import { IoIosSend } from 'react-icons/io';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import subscribeshape from "@/public/images/home/subscribeshape.png";

const Subscribe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get("email");
        console.log("Email submitted:", email);
        e.target.reset();
    };

    return (
        <section ref={ref} className='mx-5 md:mx-0 my-10 md:my-24'>
            <motion.div
                className='py-10 relative md:py-24 container bg-primary p-5 rounded-lg flex flex-col items-center'
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                >
                    <h2 className="!text-white mb-4 z-10 text-center text-2xl md:text-3xl font-bold">
                        Let's Contact with Us
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="!text-white text-center px-10 md:px-52">
                        Emigre Law Chambers provides the simplest solution for processing your all types of visa. Say good bye to end less hassles and confusions. There anyone who loves or pursues not some great to have pleasure.
                    </p>
                </motion.div>

                <motion.div
                    className='w-full md:w-1/2 lg:w-1/3 mx-auto my-8 mb-4 z-10'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <form className="flex flex-col md:flex-row gap-3" onSubmit={handleSubmit}>
                        <div className="flex-grow">
                            <input
                                className="w-full bg-transparent border border-white text-white placeholder-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white/50"
                                id="email"
                                placeholder="Enter Your Email"
                                type="email"
                                name="email"
                                required
                            />
                        </div>

                        <button
                            className="hover:bg-secondary bg-white transition-all duration-200 ease-linear flex justify-center gap-2 items-center relative group/btn px-4 text-black-300 hover:text-white rounded-full h-10 font-bold uppercase shadow-md text-sm"
                            type="submit"
                        >
                            Subscribe <IoIosSend />
                            <BottomGradient />
                        </button>
                    </form>
                </motion.div>

                <Image className='absolute inset-0 w-full h-full object-cover opacity-80' src={subscribeshape} alt='subscribe_shape' />
            </motion.div>
        </section>
    );
};

export default Subscribe;

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);