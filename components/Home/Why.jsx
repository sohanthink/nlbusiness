import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

import whybanner from "@/public/images/home/why.png";

const Why = () => {
    const features = [
        {
            id: 1,
            title: "Custom Plans Built by Experts",
            description: "Our team includes professional business writers, project managers, graphic designers, industry experts.",
            icon: FaCheck
        },
        {
            id: 2,
            title: "7 languages - All in House",
            description: "English, Spanish, Portuguese, French, Chinese, Russian, and Italian for your choosing.",
            icon: FaCheck
        },
        {
            id: 3,
            title: "Quality Work Delivered Quickly",
            description: "We have the fastest delivery time in the industry, including Rush and Super Rush services.",
            icon: FaCheck
        }
    ];

    const FeatureCard = ({ feature }) => {
        const IconComponent = feature.icon;

        return (
            <div className="flex gap-5 group hover:bg-gray-50 p-4 rounded-lg transition-colors duration-300">
                <div className="flex-shrink-0">
                    <IconComponent className="w-10 h-10 bg-primary p-3 rounded-full text-white text-sm group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="space-y-2 md:space-y-3">
                    <h3 className="font-bold text-lg md:text-xl text-gray-900 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            </div>
        );
    };

    return (
        <section className="container section-padding bg-gray-50/30">
            <div className="flex md:flex-row flex-col items-center justify-between gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 w-full space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Why Choose Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We're not just a team—we're a close-knit community united by a single mission: empowering international entrepreneurs and professionals.
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4">
                        {features.map((feature) => (
                            <FeatureCard key={feature.id} feature={feature} />
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 w-full flex justify-end">
                    <div className="relative group">
                        <Image
                            src={whybanner}
                            alt="Why choose us - Professional team collaboration"
                            width={500}
                            height={500}
                            className="w-full md:w-[85%] h-[400px] md:h-[500px] object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                            priority={false}
                        />
                        {/* Subtle overlay on hover */}
                        <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;