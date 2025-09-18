"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { IoCheckmarkCircle, IoArrowForward, IoGlobeOutline, IoPeopleOutline, IoShieldCheckmarkOutline } from 'react-icons/io5';
import Button from '@/components/common/Button';

const Banner2 = () => {
    const services = [
        {
            icon: <IoGlobeOutline className="w-8 h-8" />,
            title: "Global Immigration",
            description: "Expert guidance for Canada, USA, and worldwide immigration programs"
        },
        {
            icon: <IoPeopleOutline className="w-8 h-8" />,
            title: "Business Plans",
            description: "Professional business plans tailored for visa applications and success"
        },
        {
            icon: <IoShieldCheckmarkOutline className="w-8 h-8" />,
            title: "Visa Success",
            description: "Proven track record of helping entrepreneurs achieve their dreams"
        }
    ];
    // bg-gradient-to-br from-slate-50 via-white to-purple-50
    return (
        <section className="min-h-screen m-5 relative overflow-hidden bg-gradient-to-tr from-[#90FF81]/20 to-[#90FF81]/80  rounded-lg">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-primary/10"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/15 to-primary/5 rounded-full blur-3xl"></div>

            {/* Curved Lines */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10" viewBox="0 0 1000 1000">
                <path d="M100,500 Q300,200 500,500 T900,500" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/30" />
                <path d="M100,600 Q300,300 500,600 T900,600" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/20" />
                <path d="M100,400 Q300,100 500,400 T900,400" stroke="currentColor" strokeWidth="2" fill="none" className="text-primary/25" />
            </svg>

            <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center min-h-screen">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                        Your Journey to
                        <span className="block bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">
                            Global Success
                        </span>
                    </h1>
                    <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
                        Experts in investor business plans, startup visa documentation, and strategic immigration planning.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 text-center"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-2xl mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
                            <p className="text-gray leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main CTA Section */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <Button
                        link="#consultation"
                        cn="primary-button text-lg px-8 py-4"
                        text="Get Free Strategy Session"
                    />
                    <Link
                        href="/services"
                        className="flex items-center gap-2 text-gray hover:text-black font-semibold transition-colors duration-300"
                    >
                        Explore Our Services
                        <IoArrowForward />
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default Banner2;