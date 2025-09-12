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
            name: "Morgan Davis",
            role: "CTO",
            image: team1,
            social: false
        },
        {
            name: "Jordan Brown",
            role: "CTO",
            image: team2,
            social: true
        },
        {
            name: "Jamie Lee",
            role: "CTO",
            image: team3,
            social: false
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
                <div className="text-center mb-10">
                    <h2>
                        Our Team Member
                    </h2>
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
        <div className="rounded-2xl group">
            <div className="relative w-full h-[250px] md:h-[500px]">
                <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-xl"
                />

                {/* Social Media Icons - Only for middle card */}
                {member.social && (
                    <div className="absolute top-16 right-10 space-y-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <FaLinkedinIn className="text-white text-sm" />
                        </div>
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <FaFacebookF className="text-white text-sm" />
                        </div>
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                            <FaInstagram className="text-white text-sm" />
                        </div>
                    </div>
                )}
            </div>

            <div className="p-3">
                <p>
                    {member.role}
                </p>
                <h3>
                    {member.name}
                </h3>
            </div>
        </div>
    );
};