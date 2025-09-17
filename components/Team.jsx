import React from "react";
import Image from "next/image";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

import teambg from "@/public/images/home/teambg.png"
import team1 from "@/public/images/home/team1.png"
import team2 from "@/public/images/home/team2.png"
import team3 from "@/public/images/home/team3.png"

const Team = ({ about = false }) => {
    const teamMembers = [
        {
            name: "Sarah Mitchell",
            role: "Senior Business Plan Strategist",
            expertise: "LMIA & PNP Specialist",
            image: team1,
            bio: "15+ years of experience writing investor-ready business plans. Specialized in Canadian immigration programs including LMIA, PNP, and Start-Up Visa applications.",
            linkedin: "https://linkedin.com/in/sarah-mitchell-business",
            experience: "15+ Years Experience"
        },
        {
            name: "Michael Chen",
            role: "Immigration Business Consultant",
            expertise: "EB-5 & E-2 Visa Expert",
            image: team2,
            bio: "Former immigration lawyer turned business plan consultant. Expert in US investor visas with 200+ successful EB-5 and E-2 applications.",
            linkedin: "https://linkedin.com/in/michael-chen-immigration",
            experience: "12+ Years Experience"
        },
        {
            name: "Emily Rodriguez",
            role: "Financial Planning Director",
            expertise: "Market Research & Financial Modeling",
            image: team3,
            bio: "CPA with expertise in financial projections and market analysis. Helps entrepreneurs create compelling financial narratives for visa applications.",
            linkedin: "https://linkedin.com/in/emily-rodriguez-cpa",
            experience: "10+ Years Experience"
        },
    ];

    return (
        <section className="relative section-padding bg-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 w-full h-full">
                <Image
                    src={teambg}
                    alt="Background pattern"
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>

            <div className="container relative z-10">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="mb-4">
                        Meet Our Expert Team
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our seasoned professionals bring decades of combined experience in immigration law, business planning, and financial consulting to help you achieve your dreams.
                    </p>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard key={index} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;

export const TeamMemberCard = ({ member }) => {
    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="relative w-full h-[300px]">
                <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                />

                {/* Experience Badge */}
                <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {member.experience}
                    </span>
                </div>

                {/* LinkedIn Icon */}
                <div className="absolute top-4 right-4">
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-300"
                    >
                        <FaLinkedinIn className="text-white text-lg" />
                    </a>
                </div>

                {/* Gradient Overlay for better text readability */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            <div className="p-6 space-y-4">
                {/* Name and Role */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                    </h3>
                    <p className="text-primary font-semibold text-base mb-1">
                        {member.role}
                    </p>
                    <p className="text-sm text-gray-600 font-medium">
                        {member.expertise}
                    </p>
                </div>

                {/* Bio */}
                <div className="border-t pt-4">
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                        {member.bio}
                    </p>
                </div>

                {/* LinkedIn CTA */}
                <div className="text-center pt-2">
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                    >
                        <FaLinkedinIn className="text-base" />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};