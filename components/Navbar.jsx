"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const menuRef = useRef(null);

    // Handle responsive behavior
    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);

            // Close mobile menu when switching to desktop
            if (!mobile) {
                setIsMenuOpen(false);
                setActiveSubmenu(null);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Handle clicks outside menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
                setActiveSubmenu(null);
            }
        };

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            // Prevent body scroll when menu is open
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "unset";
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setActiveSubmenu(null);
    };

    const toggleSubmenu = (menuName) => {
        setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
        setIsMegaMenuOpen(false);
    };

    const handleMegaMenuItemClick = () => {
        setIsMegaMenuOpen(false);
    };

    const menuItems = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blogs" },
        { name: "Contact Us", href: "/contact" },
    ];

    const servicesData = {
        canadaImmigration: [
            { name: "Alberta Immigrant Nominee Program (AINP)", href: "/services/canada-immigrations/ainp-business-plan" },
            { name: "BC Provincial Nominee Program (BC PNP)", href: "/services/canada-immigrations/bcpnp-business-plan" },
            { name: "Québec Entrepreneur Program", href: "/services/canada-immigrations/quebec-entrepreneur-program" },
            { name: "Québec Investor Program (may be suspended or revised)", href: "/services/canada-immigrations/quebec-investor-plan" },
            { name: "Self-Employed Persons Program", href: "/services/canada-immigrations/self-employed-programme" },
        ],
        ukImmigration: [
            { name: "Innovator Founder Visa Business Plan", href: "/services/uk-immigrations/innovator-founder-visa-business-plan" },
            { name: "Expansion Worker Visa Business Plan", href: "/services/uk-immigrations/expansion-worker-visa-business-plan" },
        ],
        uaeImmigration: [
            { name: "Golden Visa Business Plan", href: "/services/uae-immigrations/golden-visa-business-plan" },
            { name: "Green Visa for Work Business Plan", href: "/services/uae-immigrations/green-visa-work-business-plan" },
        ],
        usaImmigration: [
            { name: "E-2 Business plan", href: "/services/usa-immigrations/e2-visa-business-plan" },
            { name: "Business plan L-1", href: "/services/usa-immigrations/l1-visa-business-plan" },
            { name: "Business plan EB2", href: "/services/usa-immigrations/eb2-visa-business-plan" },
            { name: "Compliant EB-5", href: "/services/usa-immigrations/eb5-visa-business-plan" },
        ],
        advisory: {
            startUp: [
                { name: "Fueling the Rise", href: "/fueling-the-rise" },
                { name: "A Pitch Deck", href: "/a-pitch-deck" },
                { name: "Strategic Business Plan", href: "/strategic-business-plan" },
                {
                    name: "Strategic Financial projection",
                    href: "/strategic-financial-projection",
                },
            ],
            smallBusiness: [
                {
                    name: "Blueprints for Small Business",
                    href: "/blueprints-for-small-business",
                },
                { name: "Loan Ready Business", href: "/loan-ready-business" },
                { name: "SMB Financial", href: "/smb-financial" },
                { name: "Real Estate Deck", href: "/real-estate-deck" },
                { name: "Business plan for grant", href: "/business-plan-for-grant" },
            ],
        },
        ma: [
            {
                name: "Private Company Investment",
                href: "/privet-company-investment",
            },
            { name: "Strategic Teaser", href: "/strategic-teaser" },
            { name: "Independent Value", href: "/independent-value" },
            { name: "Market Intelligence", href: "/market-intelligence" },
        ],
    };

    return (
        <nav className="w-[90%] fixed mt-5 md:mt-10 bg-white rounded-lg top-0 z-50 duration-50 bg-dark left-1/2 transform -translate-x-1/2" ref={menuRef}>
            <div className="mx-6 px-4 md:mx-auto">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo - Left Side */}
                    <Link
                        href="/"
                        className="flex-shrink-0 flex items-center group z-50 relative"
                    >
                        <div className="flex items-center space-x-3 transform transition-all duration-300 group-hover:scale-105">
                            <div className="relative">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={60}
                                    height={60}
                                    quality={100}
                                    className="md:w-[70px] md:h-[70px]"
                                />
                            </div>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex ml-20 space-x-6">
                        {menuItems.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="px-4 py-12 font-semibold text-base text-black flex items-center gap-1 hover:text-gray-300 transition-colors duration-300"
                                >
                                    {item.name}
                                    {item.submenu && <FaChevronDown className="text-xs" />}
                                </Link>

                                {/* Dropdown */}
                                {item.submenu && (
                                    <div className="absolute left-3 top-20 mt-1 w-48 bg-white shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 rounded-lg overflow-hidden">
                                        <ul className="py-2">
                                            {item.submenu.map((sub) => (
                                                <li key={sub.name}>
                                                    <Link
                                                        href={sub.href}
                                                        className="group/submenu block px-4 py-2 text-sm text-gray-800 hover:text-primary hover:bg-gray-50 relative transition-colors duration-200"
                                                    >
                                                        {sub.name}
                                                        <span className="absolute left-4 bottom-0 w-7 h-[1px] bg-primary opacity-0 group-hover/submenu:w-4/5 group-hover/submenu:opacity-100 transition-all duration-700"></span>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Desktop Services Mega Menu */}
                        <div className="relative">
                            <button
                                onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                                onMouseEnter={() => setIsMegaMenuOpen(true)}
                                className="px-4 py-12 font-semibold text-base text-black flex items-center gap-1 hover:text-gray-300 transition-colors duration-300"
                            >
                                Services <FaChevronDown className={`text-xs transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Mega Menu*/}
                            <div
                                className={`fixed left-1/2 top-24 transform -translate-x-1/2 z-[60] w-screen max-w-[95%] bg-[#f8fbff] shadow-2xl transition-all duration-300 p-6 overflow-hidden rounded-lg ${isMegaMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                                onMouseLeave={() => setIsMegaMenuOpen(false)}
                            >
                                <div className="container mx-auto px-8 h-full">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
                                        {/* Column 1 - Immigration Services */}
                                        <div className="space-y-6">

                                            {/* Canada Immigration */}
                                            <div>
                                                <Link href="/services/canada-immigrations" className="block">
                                                    <div className="flex items-center gap-2 mb-3 hover:text-blue-600 transition-colors duration-200">
                                                        <div className="w-4 h-4 bg-blue-600 p-3 rounded-sm flex items-center justify-center">
                                                            <span className="text-white font-bold text-xs">CA</span>
                                                        </div>
                                                        <h3 className="text-base font-bold text-gray-900 underline pb-2 border-b border-gray-200">
                                                            Canada Immigration
                                                        </h3>
                                                        <GoChevronRight className="text-gray-400 text-xs" />
                                                    </div>
                                                </Link>
                                                <ul className="space-y-2 ml-6">
                                                    {servicesData.canadaImmigration.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                onClick={handleMegaMenuItemClick}
                                                                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link
                                                            href="/services/canada-immigrations#all-immigration"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* U.S. Immigration */}
                                            <div>
                                                <Link href="/services/usa-immigrations" className="block">
                                                    <div className="flex items-center gap-2 mb-3 hover:text-red-600 transition-colors duration-200">
                                                        <div className="w-4 h-4 bg-red-600 p-3 rounded-sm flex items-center justify-center">
                                                            <span className="text-white font-bold text-xs">US</span>
                                                        </div>
                                                        <h3 className="text-base font-bold text-gray-900 underline pb-2 border-b border-gray-200">
                                                            U.S. Immigration
                                                        </h3>
                                                        <GoChevronRight className="text-gray-400 text-xs" />
                                                    </div>
                                                </Link>
                                                <ul className="space-y-2 ml-6">
                                                    {servicesData.usaImmigration.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                onClick={handleMegaMenuItemClick}
                                                                className="text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 block py-1"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link
                                                            href="/services/usa-immigrations#all-immigration"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>


                                        </div>

                                        {/* Column 2 - Advisory Services */}
                                        <div className="space-y-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                                Advisory
                                            </h3>

                                            {/* Start-Up Advisory */}
                                            <div>
                                                <Link href="/services/advisory/startup" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-green-600 transition-colors duration-200 cursor-pointer">
                                                        Start-Up Advisory
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/startup/financial-model"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Financial Model
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/startup/investor-business-plan"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Investor Business Plan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/startup"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Digital Marketing */}
                                            <div>
                                                <Link href="/services/digital-services" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                                        Digital Services
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/digital-services/website-development"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Website Development & Management
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/digital-services/graphics-design"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Graphics Design
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/digital-services"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* M&A Firms */}
                                            <div>
                                                <Link href="/services/advisory/ma" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-purple-600 transition-colors duration-200 cursor-pointer">
                                                        M&A Firms
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/ma/cim"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Confidential Information Memorandum (CIM)
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/ma/buyers-list"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Buyers List
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/ma"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Premium Market Research */}
                                            {/* <div>
                                                <Link href="/services/advisory/market-research" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                                                        Premium Market Research
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/market-research/market-overview"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Market Overview
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/market-research/competitive-analysis"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-orange-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Competitive Analysis
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/advisory/market-research"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div> */}

                                        </div>

                                        {/* Column 3 - Small Business */}
                                        <div className="space-y-6">
                                            <h3 className="text-base font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                                Small Business
                                            </h3>
                                            {/* Business Plans for Small Business */}
                                            <div>
                                                <Link href="/services/small-business" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-green-600 transition-colors duration-200 cursor-pointer">
                                                        Business Plans for Small Business
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/bank-loan-business-plan"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Bank Loan Business Plan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/grant-business-plan"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Grant Business Plan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/landlord-deck"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Landlord Deck
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/business-plans"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Franchisor Master Business Plan Package */}
                                            <div>
                                                <Link href="/services/small-business/franchisor" className="block">
                                                    <h4 className="font-extrabold text-gray-800 mb-2 text-base hover:text-blue-600 transition-colors duration-200 cursor-pointer">
                                                        Franchisor Master Business Plan Package
                                                    </h4>
                                                </Link>
                                                <ul className="space-y-2">
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/franchisor/franchisor-master-business-plan"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Franchisor Master Business Plan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/franchisor/franchisor-financial-model"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 block py-1"
                                                        >
                                                            Franchisor Financial Model
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            href="/services/small-business/franchisor#popular"
                                                            onClick={handleMegaMenuItemClick}
                                                            className="text-sm text-red-600 hover:text-red-700 font-medium block py-1"
                                                        >
                                                            View all →
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Social Media Buttons */}
                                            <div className="mt-6 pt-4 border-t border-gray-200">
                                                <h4 className="text-sm font-medium text-gray-700 mb-3">Follow Us</h4>
                                                <div className="flex space-x-2">
                                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-200">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-blue-400 hover:text-white transition-colors duration-200">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.665 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.427 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors duration-200">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors duration-200">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                                        </svg>
                                                    </a>
                                                    <a href="#" className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors duration-200">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Info Bar */}
                                    <div className="mt-8 pt-6 border-t border-gray-200">
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                            <div className="flex items-center gap-3 text-gray-700">
                                                <span className="text-sm font-medium">We're here to help! Call now:</span>
                                                <div className="flex items-center gap-2">
                                                    <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                                    </svg>
                                                    <span className="text-sm font-semibold">
                                                        <a href="tel:+14372565623" className="text-black text-sm  transition-colors duration-300">+1 (437) 256-5623</a>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-px h-6 bg-gray-300"></div>
                                                <div className="flex items-center gap-3">
                                                    <span className="text-sm text-gray-700">Looking for more services?</span>
                                                    <Link
                                                        href="/services"
                                                        onClick={handleMegaMenuItemClick}
                                                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors duration-200"
                                                    >
                                                        Check All Our Services
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Get Started Button */}
                    <div className="hidden lg:block">
                        <Link
                            href="/"
                            className="primary-button"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile menu button (Hamburger/X) */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden relative p-2 text-black hover:text-gray-300 focus:outline-none transition-colors duration-300 z-50"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            {isMenuOpen ? (
                                // X icon when menu is open
                                <>
                                    <span className="absolute block h-0.5 w-6 bg-current top-3 left-0 transform rotate-45"></span>
                                    <span className="absolute block h-0.5 w-6 bg-current top-3 left-0 transform -rotate-45"></span>
                                </>
                            ) : (
                                // Hamburger icon when menu is closed
                                <>
                                    <span className="absolute block h-0.5 w-6 bg-current top-1"></span>
                                    <span className="absolute block h-0.5 w-6 bg-current top-3"></span>
                                    <span className="absolute block h-0.5 w-6 bg-current top-5"></span>
                                </>
                            )}
                        </div>
                    </button>
                </div>


                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50">
                        <div className="px-4 py-6">
                            {/* Mobile Menu Items */}
                            <div className="space-y-2">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Mobile Contact Info */}
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                    <div className="flex items-center gap-3 text-gray-700 mb-2">
                                        <span className="text-sm font-medium">Need help? Call us:</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                        </svg>
                                        <span className="text-sm font-semibold">+1 (437) 256-5623</span>
                                    </div>
                                </div>

                                {/* Mobile Get Started Button */}
                                <Link
                                    href="/contact"
                                    className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                                    onClick={closeMenu}
                                >
                                    Get Free Consultation
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;









