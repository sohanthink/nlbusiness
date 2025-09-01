import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";


const Section2 = ({ src, title, p1, p2, p3, variant = "left" }) => {
    // Determine layout based on variant
    const isRightVariant = variant === "right";

    return (
        <section className="container section-padding bg-gray-50/30">
            <div className={`flex md:flex-row flex-col items-center justify-between gap-8 md:gap-12 ${isRightVariant ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Section */}
                <div className="md:w-1/2 w-full space-y-8">
                    <div className="space-y-4 md:space-y-7">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {title}
                        </h2>
                        {
                            p1 && (
                                <p>{p1}</p>
                            )
                        }
                        {
                            p2 && (
                                <p>{p2}</p>
                            )
                        }
                        {
                            p3 && (
                                <p>{p3}</p>
                            )
                        }
                    </div>
                </div>

                {/* Image Section */}
                <div className={`md:w-1/2 w-full flex ${isRightVariant ? 'justify-start' : 'justify-end'}`}>
                    <div className="relative group">
                        <Image
                            src={src}
                            alt="Why choose us - Professional team collaboration"
                            height={500}
                            className="w-full h-[360px] md:h-[500px] object-cover"
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

export default Section2;