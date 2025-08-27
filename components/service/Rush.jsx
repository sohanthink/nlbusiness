"use client";
import React from 'react';
import { IoIosSend } from 'react-icons/io';
import Image from 'next/image';
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import rushrightshape from "@/public/images/service/rushrightshape.png";
import rushleftshape from "@/public/images/service/rushleftshape.png";

const Rush = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                        Rush Service Available
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="!text-white text-center px-10 md:px-52">
                        Are you under a very tight deadline? Use our Rush business plan writing service. We will deliver the highest quality business plan within days. Contact us and order the Rush service today.
                    </p>
                </motion.div>

                <motion.div
                    className='w-full mx-auto my-8 mb-4 z-10 flex justify-center'
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                >
                    <button
                        className="hover:bg-secondary bg-white transition-all duration-200 ease-linear flex justify-center gap-2 items-center relative group/btn px-4 text-black-300 hover:text-gray rounded-full h-10 font-bold uppercase shadow-md text-sm"
                        type="submit"
                    >
                        Contact Us <IoIosSend />
                        <BottomGradient />
                    </button>
                </motion.div>
                <Image className='absolute right-0 top-20 w-[50px] md:w-[250px] h-[50px] md:h-[250px] object-cover' src={rushrightshape} alt='subscribe_shape' />
                <Image className='absolute inset-0 top-10 left-5 w-[50px] md:w-[250px] h-[50px] md:h-[250px] object-cover' src={rushleftshape} alt='subscribe_shape' />
            </motion.div>
        </section>
    );
};

export default Rush;

const BottomGradient = () => (
    <>
        <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
        <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);