import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import popularbanner from "@/public/images/service/popular.png";

const Popular = ({
    title,
    description,
    card1,
    card2,
    centerCard,
    backgroundImage
}) => {
    // Default values if no props are provided
    const defaultTitle = "Popular Immigration Business Plans";
    const defaultDescription = "Choose a business plan for the visa you're applying for, and let's get started on your journey to building your dream in the United States.";
    const defaultCard1 = {
        image: "/images/service/popular1.png",
        title: "E-2 Visa Business Plan",
        alt: "E-2 Visa Business Plan",
        href: "#"
    };
    const defaultCard2 = {
        image: "/images/service/popular2.png",
        title: "EB-2 NIW Visa Business Plan",
        alt: "EB-2 NIW Visa Business Plan",
        href: "#"
    };
    const defaultCenterCard = {
        title: "Our Solutions E-2 Visa Business Plan",
        href: "#"
    };

    const finalTitle = title || defaultTitle;
    const finalDescription = description || defaultDescription;
    const finalCard1 = card1 || defaultCard1;
    const finalCard2 = card2 || defaultCard2;
    const finalCenterCard = centerCard || defaultCenterCard;
    const finalBackgroundImage = backgroundImage || popularbanner;
    return (
        <section id='popular' className="w-full relative py-16">
            {/* Background Banner Image */}
            <div className="absolute inset-0 opacity-40 z-0 w-full h-full">
                <Image
                    src={finalBackgroundImage}
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
                        {finalTitle}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        {finalDescription}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
                    {/* Left Card */}
                    <Link href={finalCard1.href} className="group cursor-pointer block">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:bg-primary group-hover:text-white border-2 border-white group-hover:border-transparent">
                            <div className="relative">
                                <Image
                                    src={finalCard1.image}
                                    alt={finalCard1.alt}
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
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                                    {finalCard1.title}
                                </h3>
                                {finalCard1.description && (
                                    <p className="text-gray-600 group-hover:text-white/90 mt-2 text-sm">
                                        {finalCard1.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>

                    {/* Center Card - Always Highlighted */}
                    <Link href={finalCenterCard.href} className="group cursor-pointer block">
                        <div className="bg-primary rounded-xl shadow-lg overflow-hidden relative h-48 md:h-[374px] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            {/* Action Icon */}
                            <div className="absolute top-4 right-4 z-10">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                                    <FaArrowUpRightFromSquare className="text-primary text-sm" />
                                </div>
                            </div>

                            <div className="p-6 text-white">
                                <h3 className="text-xl font-bold pr-10">
                                    {finalCenterCard.title}
                                </h3>
                                {finalCenterCard.description && (
                                    <p className="text-white/90 mt-2 text-sm">
                                        {finalCenterCard.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>

                    {/* Right Card */}
                    <Link href={finalCard2.href} className="group cursor-pointer block">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group-hover:bg-primary group-hover:text-white border-2 border-white group-hover:border-transparent">
                            <div className="relative">
                                <Image
                                    src={finalCard2.image}
                                    alt={finalCard2.alt}
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
                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                                    {finalCard2.title}
                                </h3>
                                {finalCard2.description && (
                                    <p className="text-gray-600 group-hover:text-white/90 mt-2 text-sm">
                                        {finalCard2.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            {/* Bottom Banner Image */}
            <Image className='absolute inset-0 w-full h-full object-cover opacity-80' src={finalBackgroundImage} alt='background_pattern' />
        </section>
    )
}

export default Popular