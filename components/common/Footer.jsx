import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPlane } from 'react-icons/fa'

import banner from "@/public/images/footer.png";
import logo from "@/public/logowhite.png";

const Footer = () => {
    const countries = [
        { name: "United States", url: "/services/usa-immigrations" },
        { name: "United Kingdom", url: "/services/uk-immigrations" },
        { name: "Canada", url: "/services/canada-immigrations" },
        { name: "New Zealand", url: "/services/new-zealand-immigrations" },
        { name: "Singapore", url: "/services/singapore-immigrations" }
    ];

    const visaTypes = [
        "Students Visa",
        "Business Visa",
        "Family Visa",
        "Travel Visa",
        "Work Visa"
    ];

    const socialIcons = [
        { icon: FaFacebookF, href: "#" },
        { icon: FaTwitter, href: "#" },
        { icon: FaInstagram, href: "#" },
        { icon: FaYoutube, href: "#" },
        { icon: FaPinterestP, href: "#" }
    ];

    return (
        <footer className="relative bg-gray-900 text-white section-padding overflow-hidden">
            {/* Background with shapes */}
            <div className="absolute inset-0">
                <Image
                    src={banner}
                    alt="Footer background"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="relative z-10">
                {/* Main Footer Content */}
                <div className="container py-7">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

                        {/* Company Branding */}
                        <div className="lg:col-span-1 space-y-6">
                            <div>
                                <Image
                                    src={logo}
                                    alt="Business Venture Canada"
                                    width={40}
                                    height={40}
                                    className="w-24"
                                />
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed">
                                Emigre Law Chambers provides the simplest solution for processing your all types of visa.
                            </p>

                            {/* Social Media Icons */}
                            <div className="flex space-x-3">
                                {socialIcons.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.href}
                                            className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300"
                                        >
                                            <IconComponent className="text-white text-sm" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Countries */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">Countries</h3>
                            <ul className="space-y-2">
                                {countries.map((country, index) => (
                                    <li key={index}>
                                        <Link
                                            href={country.url}
                                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {country.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Visa Types */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">Visas Types</h3>
                            <ul className="space-y-2">
                                {visaTypes.map((visa, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                                        >
                                            {visa}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">Contact us</h3>
                            <div className="space-y-3">
                                <div className="flex items-center space-x-3">
                                    <FaEnvelope className="text-gray-400 text-sm" />
                                    <span className="text-gray-300 text-sm">emigrelaw@gmail.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <FaPhone className="text-gray-400 text-sm" />
                                    <span className="text-gray-300 text-sm">0313-1444-125</span>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <FaMapMarkerAlt className="text-gray-400 text-sm mt-1" />
                                    <span className="text-gray-300 text-sm">High Q Tower jail road lahore</span>
                                </div>
                            </div>
                        </div>

                        {/* Working Hours */}
                        <div className="space-y-4">
                            <h3 className="font-bold text-lg mb-4">We're here for you</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300 text-sm">Monday - Saturday:</p>
                                <p className="text-gray-300 text-sm">10:00am - 06:00pm</p>
                            </div>

                            {/* Airplane Icon */}
                            <div className="relative mt-6">
                                <FaPlane className="text-gray-600 text-2xl transform rotate-45" />
                                <div className="absolute top-2 left-6 w-16 h-px bg-gray-600 transform rotate-12"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div>
                    <div className="container py-6">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-gray-400 text-sm">
                                Emigre Law Chambers © 2025 All Right Reserved
                            </div>
                            <div className="flex items-center space-x-4 text-gray-400 text-sm">
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    License Agreements
                                </a>
                                <div className="w-px h-4 bg-gray-600"></div>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Privacy Policy
                                </a>
                                <div className="w-px h-4 bg-gray-600"></div>
                                <a href="#" className="hover:text-white transition-colors duration-300">
                                    Terms & Conditions
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer