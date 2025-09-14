import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";

import whybanner from "@/public/images/service/whybanner.png";
import whyicon1 from "@/public/images/service/whyicon1.svg";
import whyicon2 from "@/public/images/service/whyicon2.svg";
import whyicon3 from "@/public/images/service/whyicon3.svg";
import whyicon4 from "@/public/images/service/whyicon4.svg";
import whyicon5 from "@/public/images/service/whyicon5.svg";
import whyicon6 from "@/public/images/service/whyicon6.svg";

const Why = () => {
    const features = [
        {
            id: 1,
            title: "Nationwide Program Expertise",
            icon: whyicon1
        },
        {
            id: 2,
            title: "Province-Specific Strategy",
            icon: whyicon2
        },
        {
            id: 3,
            title: "Rigorous Market Research",
            icon: whyicon3
        },
        {
            id: 4,
            title: "IRCC & PNP Compliance",
            icon: whyicon4
        },
        {
            id: 5,
            title: "End-to-End Support",
            icon: whyicon5
        },
        {
            id: 6,
            title: "Highest Approval Standards",
            icon: whyicon6
        }
    ];

    const FeatureCard = ({ feature }) => {
        return (
            <div className="flex items-center gap-5 group hover:bg-gray-50 rounded-lg transition-colors duration-300">
                <div className="flex-shrink-0">
                    <div className="w-10 h-10 p-2 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Image
                            src={feature.icon}
                            alt={feature.title}
                            width={24}
                            height={24}
                            className="w-6 h-6"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <h4 className="group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                    </h4>
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
                            Why We Are Canada's Business Immigration Experts
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed md:pr-20">
                            Our specialized team combines deep knowledge of Canadian immigration law with extensive business planning expertise. We understand the unique requirements of each province and territory, ensuring your application meets the highest standards for approval.
                        </p>
                    </div>

                    {/* Features List */}
                    <div className="space-y-4 md:space-y-8">
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
                            height={700}
                            className="w-full h-[400px] md:h-[700px] object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300"
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