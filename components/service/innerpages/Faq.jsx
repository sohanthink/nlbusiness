"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';
import Image from 'next/image';

import faqBanner from "@/public/images/service/innerpages/faq-banner.png"

const Faq = ({
    title = "Frequently Asked Questions",
    subtitle = "Get answers to common questions about our business plan services",
    faqs = []
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-primary/5"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* Main Content - Image + FAQ Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">

                    {/* Left Column - Image */}
                    <div className="relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src={faqBanner}
                                alt="FAQ Support"
                                width={600}
                                height={500}
                                className="w-full h-[400px] lg:h-[500px] object-cover"
                            />

                            {/* Image Overlay with Stats */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                            {/* Stats Overlay */}
                            <div className="absolute bottom-6 left-6 right-6">
                                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-primary">500+</div>
                                            <div className="text-sm text-gray-600">Questions Answered</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-primary">24/7</div>
                                            <div className="text-sm text-gray-600">Expert Support</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - FAQ Items */}
                    <div className="space-y-4">
                        {faqs && faqs.length > 0 ? (
                            faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden hover:cursor-pointer"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-6 text-left flex items-center justify-between group transition-all duration-200 hover:bg-gray-50 hover:cursor-pointer"
                                    >
                                        <h3 className="!text-base md:!text-xl font-semibold text-gray-900 pr-4 leading-relaxed group-hover:text-primary transition-colors duration-200">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all duration-200">
                                            {openIndex === index ? (
                                                <IoChevronUp className="w-4 h-4 text-primary transition-transform duration-200" />
                                            ) : (
                                                <IoChevronDown className="w-4 h-4 text-primary transition-transform duration-200" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-6">
                                            <div className="border-t border-gray-100 pt-4">
                                                <p className="text-gray-600 leading-relaxed text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No FAQs available at the moment.</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                                Still Have Questions?
                            </h3>
                            <p className="text-lg text-gray mb-8 max-w-2xl mx-auto leading-relaxed">
                                Our immigration business plan experts are here to help. Get personalized answers to your specific questions.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="#consultation">
                                    <button className="primary-button inline-flex items-center px-8 py-4 text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                        <span>Schedule Free Consultation</span>
                                        <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </Link>
                                <Link href="/contact">
                                    <button className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary/30 hover:border-primary/50 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                        <span>Contact Us</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;