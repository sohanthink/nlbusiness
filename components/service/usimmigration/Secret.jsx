import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

import secretbanner from "@/public/images/service/secretbanner.png";

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
        <section className="container section-padding bg-gray-50/30">
            <div className="flex md:flex-row flex-col items-center justify-between gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 w-full space-y-8">
                    <div className="space-y-4 md:space-y-7">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {finalTitle}
                        </h2>
                        {Array.isArray(finalContent) ? (
                            finalContent.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))
                        ) : (
                            <p>{finalContent}</p>
                        )}
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 w-full flex justify-end">
                    <div className="relative group">
                        <Image
                            src={finalImageSrc}
                            alt={finalImageAlt}
                            height={500}
                            className="w-full h-[360px] md:h-[500px] object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            priority={false}
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Secret;