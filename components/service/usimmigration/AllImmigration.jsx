'use client'

import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AllImmigration = ({
    businessPlans = [],
    title = "All Immigration Business Plans",
    sectionId = "all-immigration"
}) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Don't render anything if no business plans are provided
    if (!businessPlans || businessPlans.length === 0) {
        return null;
    }

    return (
        <section id={sectionId} ref={sectionRef} className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="leading-tight">
                            {title}
                        </h2>
                    </div>
                    {businessPlans.slice(0, 2).map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`group transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                        >
                            <Link href={plan.href} className="block">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 p-4 lg:p-6 relative transform hover:scale-105">
                                    {/* Action Button */}
                                    <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                                        <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary rounded-tr-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                                            <FaArrowRight className="text-white text-xs group-hover:translate-x-0.5 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-6 lg:mt-8">
                                        <h3 className="font-bold !text-base md:!text-xl text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                                            {plan.title}
                                        </h3>

                                        {/* Separator */}
                                        <div className="border-b border-dashed border-gray-300 mb-3 group-hover:border-primary transition-colors duration-300"></div>

                                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Business Plans Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                    {businessPlans.slice(2).map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`group transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
                            style={{ transitionDelay: `${(index + 3) * 100}ms` }}
                        >
                            <Link href={plan.href} className="block">
                                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-2 p-4 lg:p-6 relative transform hover:scale-105">
                                    {/* Action Button */}
                                    <div className="absolute top-3 right-3 lg:top-4 lg:right-4">
                                        <div className="w-7 h-7 lg:w-8 lg:h-8 bg-primary rounded-tr-md flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12">
                                            <FaArrowRight className="text-white text-xs group-hover:translate-x-0.5 transition-transform duration-300" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="mt-6 lg:mt-8">
                                        <h3 className="!text-base md:!text-xl font-bold text-gray-900 mb-3 pr-10 lg:pr-12 group-hover:text-primary transition-colors duration-300">
                                            {plan.title}
                                        </h3>

                                        {/* Separator */}
                                        <div className="border-b border-dashed border-gray-300 mb-3 group-hover:border-primary transition-colors duration-300"></div>

                                        <p className="text-xs lg:text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                                            {plan.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                }
            `}</style>
        </section>
    )
}

export default AllImmigration