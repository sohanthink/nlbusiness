import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import popularbanner from "@/public/images/service/popular.png";
import popular1 from "@/public/images/service/popular1.png";
import popular2 from "@/public/images/service/popular2.png";

const Popular = () => {
    return (
        <section className="w-full relative py-16">
            {/* Background Banner Image */}
            <div className="absolute inset-0 opacity-40 z-0 w-full h-full">
                <Image
                    src={popularbanner}
                    alt="Background Pattern"
                    fill
                    className="object-cover w-full h-full"
                    priority
                />
            </div>

            <div className="container px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Popular Immigration Business Plans
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Choose a business plan for the visa you're applying for, and let's get started on your journey to building your dream in the United States.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                    {/* Left Card - E-2 Visa */}
                    <div className="group cursor-pointer">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:bg-primary group-hover:text-white border-2 border-white group-hover:border-transparent">
                            <div className="relative">
                                <Image
                                    src={popular1}
                                    alt="E-2 Visa Business Plan"
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                                {/* Hover Icon */}
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 md:pr-38">
                                    E-2 Visa Business Plan
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Center Card - Our Solutions (Always Highlighted) */}
                    <div className="group">
                        <div className="bg-primary rounded-xl shadow-lg overflow-hidden relative h-48 md:h-[374px]">
                            {/* Action Icon */}
                            <div className="absolute top-4 right-4 z-10">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <FaArrowUpRightFromSquare className="text-primary text-sm" />
                                </div>
                            </div>

                            <div className="p-6 text-white">
                                <h3 className="text-xl font-bold pr-10">
                                    Our Solutions E-2 Visa Business Plan
                                </h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Card - EB-2 NIW Visa */}
                    <div className="group cursor-pointer">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:bg-primary group-hover:text-white border-2 border-white group-hover:border-transparent">
                            <div className="relative">
                                <Image
                                    src={popular2}
                                    alt="EB-2 NIW Visa Business Plan"
                                    className="w-full h-48 md:h-64 object-cover"
                                />
                                {/* Hover Icon */}
                                <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                        <FaArrowUpRightFromSquare className="text-primary text-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300 md:pr-32">
                                    EB-2 NIW Visa Business Plan
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Banner Image */}
            <Image className='absolute inset-0 w-full h-full object-cover opacity-80' src={popularbanner} alt='subscribe_shape' />
        </section>
    )
}

export default Popular