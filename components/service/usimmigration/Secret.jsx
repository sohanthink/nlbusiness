import Image from "next/image";
import React from "react";
import { FaCheck, FaArrowRight, FaLightbulb, FaShieldAlt, FaRocket } from "react-icons/fa";

import secretbanner from "@/public/images/service/secretbanner.png";
import Link from "next/link";

const Secret = ({ title, content, imageSrc, imageAlt }) => {
    // Default values if no props are provided
    const defaultTitle = "The Secret is in the Details";
    const defaultContent = [
        "At Joorney, we create thousands of immigration business plans for visa applications every year, including E-2, EB-2 NIW, L-1, EB-5, and more. Our business plan writers have an in-depth understanding of the visa application process and requirements, ensuring that your business plan is USCIS-ready.",
        "We treat each project individually. Every business plan tells a unique story – yours. We take the time to fully understand it and then transform it into a plan that shows how you will turn your vision into reality. This is exactly what immigration officers need when reviewing your application."
    ];

    const finalTitle = title || defaultTitle;
    const finalContent = content || defaultContent;
    const finalImageSrc = imageSrc || secretbanner;
    const finalImageAlt = imageAlt || "Why choose us - Professional team collaboration";

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-primary/5"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/15 to-primary/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* Header with Badge */}
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                                <FaLightbulb className="w-4 h-4" />
                                <span>Our Expertise</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                                {finalTitle}
                            </h2>
                        </div>

                        {/* Content with Enhanced Styling */}
                        <div className="space-y-6">
                            {Array.isArray(finalContent) ? (
                                finalContent.map((paragraph, index) => (
                                    <div key={index} className="relative">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                                                <FaCheck className="w-4 h-4 text-primary" />
                                            </div>
                                            <p className="text-lg text-gray leading-relaxed">{paragraph}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="relative">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                                            <FaCheck className="w-4 h-4 text-primary" />
                                        </div>
                                        <p className="text-lg text-gray leading-relaxed">{finalContent}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Feature Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <FaShieldAlt className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm">USCIS Ready</h4>
                                        <p className="text-xs text-gray">Compliant Plans</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <FaRocket className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm">Fast Turnaround</h4>
                                        <p className="text-xs text-gray">Quick Delivery</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 hover:border-primary/30 transition-all duration-300">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                        <FaLightbulb className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-black text-sm">Custom Solutions</h4>
                                        <p className="text-xs text-gray">Tailored Plans</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="pt-6">

                            <Link href="#all-immigration">
                                <button className="group inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                                    <span>Get Your Business Plan</span>
                                    <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image with Enhanced Design */}
                    <div className="relative">
                        <div className="relative group">
                            {/* Main Image */}
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                                <Image
                                    src={finalImageSrc}
                                    alt={finalImageAlt}
                                    height={600}
                                    className="w-full h-[400px] md:h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                                    priority={false}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>

                                {/* Floating Elements */}
                                <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                                    <FaCheck className="w-8 h-8 text-primary" />
                                </div>

                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                            <FaRocket className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black text-sm">1000+ Plans</h4>
                                            <p className="text-xs text-gray">Created Successfully</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Secret;