"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

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
        <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-primary/5"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                        {title}
                    </h2>
                    <p className="text-xl text-gray max-w-3xl mx-auto leading-relaxed">
                        {subtitle}
                    </p>
                </div>

                {/* FAQ Items */}
                {faqs && faqs.length > 0 && (
                    <div className="max-w-5xl mx-auto">
                        <div className="space-y-2">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 overflow-hidden transition-all duration-300 hover:bg-white hover:shadow-md hover:border-primary/20"
                                >
                                    {/* Question */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between transition-colors duration-200"
                                    >
                                        <h3 className="text-base md:text-lg font-medium text-black pr-4 leading-relaxed">
                                            {faq.question}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            {openIndex === index ? (
                                                <IoChevronUp className="w-5 h-5 text-primary transition-transform duration-200" />
                                            ) : (
                                                <IoChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-200" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Answer */}
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                            }`}
                                    >
                                        <div className="px-6 pb-5">
                                            <div className="border-t border-gray-100 pt-4">
                                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

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