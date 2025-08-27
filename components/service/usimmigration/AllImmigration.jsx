'use client'

import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AllImmigration = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const businessPlans = [
        {
            id: 1,
            title: "E-2 Visa Business Plan",
            description: "Support your E-2 visa application with a custom-made business plan that meets the requirements.",
            href: "/e-2-business-plan"
        },
        {
            id: 2,
            title: "L-1 Visa Business Plan",
            description: "Support your L-1 visa application with a custom-made business plan that meets the requirements.",
            href: "/l-1-business-plan"
        },
        {
            id: 3,
            title: "EB-2 NIW Visa Business Plan",
            description: "Support your EB-2 NIW visa application with a custom-made business plan that meets the requirements.",
            href: "/eb-2-niw-business-plan"
        },
        {
            id: 4,
            title: "EB-5 Visa Business Plan",
            description: "Support your EB-5 visa application with a custom-made business plan that meets the requirements.",
            href: "/eb-5-business-plan"
        },
        {
            id: 5,
            title: "Regional Center Business Plan",
            description: "Support your Regional Center application with a custom-made business plan that meets the requirements.",
            href: "/regional-center-business-plan"
        },
        {
            id: 6,
            title: "Innovator Founder Visa Business Plan",
            description: "Support your Innovator Founder visa application with a custom-made business plan that meets the requirements.",
            href: "/innovator-founder-business-plan"
        },
        {
            id: 7,
            title: "Expansion Worker Visa Business Plan",
            description: "Support your Expansion Worker visa application with a custom-made business plan that meets the requirements.",
            href: "/expansion-worker-business-plan"
        },
        {
            id: 8,
            title: "Golden Visa Business Plan",
            description: "Support your Golden visa application with a custom-made business plan that meets the requirements.",
            href: "/golden-visa-business-plan"
        },
        {
            id: 9,
            title: "Green Visa for Work Business Plan",
            description: "Support your Green visa for work application with a custom-made business plan that meets the requirements.",
            href: "/green-visa-business-plan"
        },
        {
            id: 10,
            title: "Start-Up Visa Business Plan",
            description: "Support your Start-Up visa application with a custom-made business plan that meets the requirements.",
            href: "/startup-visa-business-plan"
        }
    ];

    return (
        <section ref={sectionRef} className="w-full py-16 bg-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className={`transition-all duration-700 ${isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            All Immigration Business
                            Plans
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
                                        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 pr-10 lg:pr-12 group-hover:text-primary transition-colors duration-300">
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
                                        <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-3 pr-10 lg:pr-12 group-hover:text-primary transition-colors duration-300">
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