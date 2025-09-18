import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGlobeAmericas, FaChartLine, FaCheckCircle, FaAward, FaUsers } from "react-icons/fa";
import builtbanner2 from "@/public/images/home/builtbanner2.png";
import Image from "next/image";

const Value = () => {
    const valuePoints = [
        {
            icon: <FaAward className="w-6 h-6" />,
            title: "Expert-Crafted Plans",
            description: "Professional business plans that meet immigration standards"
        },
        {
            icon: <FaUsers className="w-6 h-6" />,
            title: "500+ Success Stories",
            description: "Proven track record with entrepreneurs worldwide"
        },
        {
            icon: <FaGlobeAmericas className="w-6 h-6" />,
            title: "Global Expertise",
            description: "Deep knowledge of 15+ countries' immigration programs"
        }
    ];

    const stats = [
        { number: "98%", label: "Success Rate" },
        { number: "500+", label: "Plans Delivered" },
        { number: "15+", label: "Countries" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-primary/5 via-white to-primary/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
            <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                            <FaHandshake className="w-4 h-4" />
                            Trusted by Entrepreneurs
                        </div>

                        {/* Main Heading */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Your Gateway to
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80 mt-2">
                                Global Success
                            </span>
                        </h2>

                        {/* Simple Description */}
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We craft business plans that <span className="font-bold text-primary">get approved</span> and
                            <span className="font-bold text-primary"> secure funding</span>.
                        </p>

                        {/* Minimal Value Points */}
                        <div className="flex flex-wrap gap-4">
                            {valuePoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-4 py-3 shadow-md hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {point.icon}
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">
                                        {point.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <button className="primary-button inline-flex items-center px-8 py-4 text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                <span>Start Your Journey</span>
                                <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Image + Stats */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Image */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={builtbanner2}
                                alt="Business Success"
                                className="w-full h-[500px] object-cover"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {stats.map((stat, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                                viewport={{ once: true }}
                                                className="text-center"
                                            >
                                                <div className="text-2xl font-bold text-primary mb-1">
                                                    {stat.number}
                                                </div>
                                                <div className="text-xs text-gray-600 font-medium">
                                                    {stat.label}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>

                        {/* Success Badge */}
                        <div className="absolute top-6 right-6">
                            <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                                <FaCheckCircle className="w-4 h-4" />
                                98% Success Rate
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Value;
