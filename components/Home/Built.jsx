import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

import builtbanner from "@/public/images/home/builtbanner.png";
import builtbanner2 from "@/public/images/home/builtbanner2.png";
import icon1 from "@/public/images/home/builticon1.svg";
import icon2 from "@/public/images/home/builticon2.svg";

const Built = () => {
    return (
        <section className="container section-padding">
            <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Image
                        src={builtbanner2}
                        alt="Business Plan Banner"
                        className="rounded-2xl shadow-lg w-full md:w-[90%] h-auto object-cover"
                        priority
                    />
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        One Plan, Two Objectives: <br />
                        <span className="text-primary">
                            Immigration Compliance & Business Growth
                        </span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed max-w-lg">
                        A single plan can open doors to visas and funding alike. Our senior
                        strategists combine immigration expertise with sharp business
                        acumen—building not just documents, but <span className="font-semibold">strategic roadmaps</span> for your
                        success.
                    </p>

                    {/* Features */}
                    <div className="space-y-6">
                        {/* Feature 1 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-md">
                                    <Image src={icon1} alt="Dual-Purpose" width={28} height={28} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Dual-Purpose Expertise</h3>
                                <p className="text-gray-600 text-sm">
                                    Crafted to satisfy both immigration officers and discerning
                                    investors at once.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex gap-4 items-start">
                            <div className="flex-shrink-0">
                                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-md">
                                    <Image src={icon2} alt="Financial Modeling" width={28} height={28} />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">
                                    Market-Led Financial Modeling
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Realistic, defensible projections—P&L, Cash Flow, Balance
                                    Sheets—based on real-world data.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className="primary-button bg-dark px-6 py-3 rounded-xl shadow-md hover:bg-primary transition">
                        Explore Our Methodology
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Built;
