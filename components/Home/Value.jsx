import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaGlobeAmericas, FaChartLine } from "react-icons/fa"; // trust, compliance, growth
import builtbanner2 from "@/public/images/home/builtbanner2.png";
import Image from "next/image";

const Value = () => {
    return (
        <section className="container section-padding">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image Placeholder (replace with your own later) */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <div className="w-full md:w-[85%] h-72 md:h-[400px] rounded-2xl bg-gray-200 shadow-inner flex items-center justify-center text-gray-500">
                        <Image
                            src={builtbanner2}
                            alt="Value"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black leading-snug">
                        Trusted Business Plans for <br />
                        <span className="text-primary">Immigration & Investment Success</span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-lg">
                        At <span className="font-semibold">Business Venture Canada</span>, we
                        craft business plans that meet Canadian immigration requirements and
                        persuade investors. With our expertise, your journey to Canada
                        becomes a pathway to long-term growth.
                    </p>


                </motion.div>
            </div>
        </section>
    );
};

export default Value;
