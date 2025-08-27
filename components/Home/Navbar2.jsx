"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaChevronDown, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import logo from "@/public/logo.png";
import Image from "next/image";

const Navbar2 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
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
    };

    const menuItems = [
        { name: "Home", href: "/" },
        {
            name: "Pages",
            href: "#",
            submenu: [
                { name: "About Us", href: "/about" },
                { name: "Our Team", href: "/teams" },
                { name: "Contact Us", href: "/contact" },
                { name: "Testimonials", href: "/testimonials" },
                { name: "Blog", href: "/blogs" },
                { name: "Careers", href: "/careers" },
                { name: "Our Events", href: "/events" },
            ],
        },
        { name: "Blog", href: "/blogs" },
    ];

    const servicesData = {
        // Canada Immigration
        canadaImmigration: [
            {
                title: "Business Idea Selection",
                items: [
                    { name: "Business Concept Exploration", href: "/business-concept" },
                    { name: "Strategic Assessment", href: "/baseline-discovery" },
                    { name: "Strategic Research", href: "/strategic-research" },
                ],
            },
            {
                title: "Start-Up Programs",
                items: [
                    {
                        name: "Start-Up Visa Application",
                        href: "/start-up-visa-application",
                    },
                    {
                        name: "Self-Employment Business Proposal",
                        href: "/self-employment-business-proposal",
                    },
                    {
                        name: "Intra-Company Transfer Immigration Plan",
                        href: "/intra-company-transfer-immigration-plan",
                    },
                ],
            },
            {
                title: "Provincial Programs",
                items: [
                    {
                        name: "AAIP-Compliant Business Plan",
                        href: "/aaip-business-plans",
                    },
                    {
                        name: "BC PNP Business Planning",
                        href: "/bc-pnp-business-planning",
                    },
                    {
                        name: "BC PNP Regional Business Plan",
                        href: "/bc-pnp-entrepreneur-immigration",
                    },
                    {
                        name: "BC PNP Entrepreneur Stream",
                        href: "/bc-pnp-entrepreneur-stream",
                    },
                    {
                        name: "Manitoba MPNP Business Plan",
                        href: "/plan-mpnp-entrepreneur-pathway",
                    },
                    {
                        name: "Manitoba MPNP Business Concept",
                        href: "/concept-mpnp-entrepreneur-pathway",
                    },
                    {
                        name: "Nova Scotia NSNP Business Plan",
                        href: "/nsnp-business-plan",
                    },
                    {
                        name: "Northwest Territories Business Plan",
                        href: "/nwt-nominee-program",
                    },
                    {
                        name: "New Brunswick Immigration Stream",
                        href: "/nb-immigration-stream",
                    },
                    { name: "Newfoundland and Labrador PNP", href: "/nl-pnp" },
                    {
                        name: "Yukon Entrepreneur Stream",
                        href: "/yukon-entrepreneur-stream",
                    },
                ],
            },
            {
                title: "Work Permits",
                items: [
                    {
                        name: "LMIA Owner-Operator Stream",
                        href: "/lmia-owner-operator-stream",
                    },
                    {
                        name: "C10 Significant Benefit Work Permit",
                        href: "/c10-significant-benefit-work-permit",
                    },
                    {
                        name: "C11 Entrepreneur Work Permit",
                        href: "/c11-entrepreneur-work-permit",
                    },
                    {
                        name: "FTA-Based Entrepreneurial",
                        href: "/fta-based-entrepreneurial",
                    },
                ],
            },
        ],

        // USA Immigration
        usaImmigration: [
            { name: "E-2 Visa Business Plan", href: "/e-2-business-plan" },
            { name: "L-1 Visa Business Plan", href: "/business-plan-l-1" },
            { name: "EB-2 NIW Business Plan", href: "/business-plan-eb2" },
            { name: "EB-5 Business Plan", href: "/compliant-eb-5" },
            { name: "Regional Center Business Plan", href: "/regional-center-business-plan" },
        ],

        // UK Immigration
        ukImmigration: [
            { name: "Innovator Founder Visa Business Plan", href: "/innovator-founder" },
            { name: "Expansion Worker Visa Business Plan", href: "/expansion-worker" },
        ],

        // UAE Immigration
        uaeImmigration: [
            { name: "Golden Visa Business Plan", href: "/golden-visa" },
            { name: "Green Visa for Work Business Plan", href: "/green-visa-work" },
        ],

        // Advisory Services
        advisory: {
            startUp: [
                { name: "Pitch Deck", href: "/pitch-deck" },
                { name: "Investor Business Plan", href: "/investor-business-plan" },
                { name: "Financial Model", href: "/financial-model" },
            ],
            ma: [
                { name: "Confidential Information Memo (CIM)", href: "/cim" },
                { name: "Teaser", href: "/teaser" },
                { name: "Valuation", href: "/valuation" },
            ],
        },

        // Small Business
        smallBusiness: [
            { name: "SBA/Bank Loan Business Plan", href: "/sba-loan-business-plan" },
            { name: "Financial Model for SMEs", href: "/financial-model-smes" },
            { name: "Landlord Deck", href: "/landlord-deck" },
            { name: "Grant Business Plan", href: "/grant-business-plan" },
        ],

        // Other Services
        otherServices: [
            { name: "Market Research", href: "/market-research" },
            { name: "Digital Marketing", href: "/digital-marketing" },
        ]
    };

    return (
        <nav className="bg-white w-full top-0 z-50 duration-50 bg-dark" ref={menuRef}>
            <div className="container mx-auto px-4 lg:px-2">
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
                                    className="md:w-[70px] md:h-[70px] shadow-lg hover:shadow-2xl transition-all duration-300"
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
                                    className="px-4 py-12 font-semibold text-sm text-black flex items-center gap-1 hover:text-gray-300 transition-colors duration-300"
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
                        <div className="group">
                            <Link
                                href={"#"}
                                className="px-4 py-12 font-semibold text-sm text-black flex items-center gap-1 hover:text-gray-300 transition-colors duration-300"
                            >
                                Service <FaChevronDown className="text-xs" />
                            </Link>

                            {/* Enhanced Mega Menu - Single View Layout */}
                            <div className="absolute mt-20 z-40 left-0 w-full bg-white shadow-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-8">
                                <div className="container mx-auto">
                                    <div className="grid grid-cols-4 gap-8">
                                        {/* Column 1: Immigration Services */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Immigration Services</h3>

                                            {/* U.S. Immigration */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center mr-2">
                                                        <span className="text-white font-bold text-xs">US</span>
                                                    </span>
                                                    U.S. Immigration
                                                </h4>
                                                <ul className="space-y-2">
                                                    {servicesData.usaImmigration.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link href="#" className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline flex items-center">
                                                            View all <FaArrowRight className="ml-1 text-xs" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* UK Immigration */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center mr-2">
                                                        <span className="text-white font-bold text-xs">UK</span>
                                                    </span>
                                                    UK Immigration
                                                </h4>
                                                <ul className="space-y-2">
                                                    {servicesData.ukImmigration.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* UAE Immigration */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                                                    <span className="w-5 h-5 bg-green-600 rounded-sm flex items-center justify-center mr-2">
                                                        <span className="text-white font-bold text-xs">UAE</span>
                                                    </span>
                                                    UAE Immigration
                                                </h4>
                                                <ul className="space-y-2">
                                                    {servicesData.uaeImmigration.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Column 2: Canada Immigration */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                                                <span className="w-5 h-5 bg-red-600 rounded-sm flex items-center justify-center mr-2">
                                                    <span className="text-white font-bold text-xs">CA</span>
                                                </span>
                                                Canada Immigration
                                            </h3>

                                            {servicesData.canadaImmigration.map((category, index) => (
                                                <div key={index} className="mb-6">
                                                    <h4 className="font-semibold text-gray-800 mb-3">{category.title}</h4>
                                                    <ul className="space-y-2">
                                                        {category.items.slice(0, 4).map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="text-sm text-gray-700 hover:text-red-600 transition-colors duration-200 flex items-center group/item"
                                                                >
                                                                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                        {category.items.length > 4 && (
                                                            <li>
                                                                <Link href="#" className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline flex items-center">
                                                                    View all <FaArrowRight className="ml-1 text-xs" />
                                                                </Link>
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Column 3: Advisory Services */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Advisory</h3>

                                            {/* Start-Up */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3">Start-Up</h4>
                                                <ul className="space-y-2">
                                                    {servicesData.advisory.startUp.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link href="#" className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline flex items-center">
                                                            View all <FaArrowRight className="ml-1 text-xs" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* M&A */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3">M&A</h4>
                                                <ul className="space-y-2">
                                                    {servicesData.advisory.ma.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-purple-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Small Business */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3">Small Business</h4>
                                                <ul className="space-y-2">
                                                    {servicesData.smallBusiness.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-green-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link href="#" className="text-sm text-blue-600 font-medium mt-2 inline-block hover:underline flex items-center">
                                                            View all <FaArrowRight className="ml-1 text-xs" />
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Column 4: Other Services & Contact */}
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Other Services</h3>

                                            {/* Other Services */}
                                            <div className="mb-6">
                                                <ul className="space-y-2">
                                                    {servicesData.otherServices.map((item) => (
                                                        <li key={item.name}>
                                                            <Link
                                                                href={item.href}
                                                                className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center group/item"
                                                            >
                                                                <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Master Franchise */}
                                            <div className="mb-6">
                                                <h4 className="font-semibold text-gray-800 mb-3">Master Franchise</h4>
                                                <Link href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200 flex items-center group/item">
                                                    <FaArrowRight className="text-xs mr-2 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200" />
                                                    Explore Franchise Opportunities
                                                </Link>
                                            </div>

                                            {/* Contact Info */}
                                            <div className="bg-gray-50 p-4 rounded-lg mt-8">
                                                <h4 className="font-semibold text-gray-800 mb-2">Need Help?</h4>
                                                <p className="text-sm text-gray-600 mb-3">Our experts are ready to assist you</p>
                                                <div className="flex items-center text-blue-600 font-medium mb-2">
                                                    <FaPhoneAlt className="mr-2 text-sm" />
                                                    <span>1-844 (566-7839)</span>
                                                </div>
                                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors duration-300 mt-2">
                                                    Become a Partner
                                                </button>
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

                    {/* Mobile menu button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden relative p-2 text-white hover:text-gray-300 focus:outline-none transition-colors duration-300 z-50"
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        <div className="relative w-6 h-6">
                            <span
                                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3" : "top-1"
                                    }`}
                            ></span>
                            <span
                                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "opacity-0" : "top-3"
                                    }`}
                            ></span>
                            <span
                                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${isMenuOpen ? "-rotate-45 top-3" : "top-5"
                                    }`}
                            ></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
                        onClick={closeMenu}
                    ></div>
                )}

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed top-0 right-0 h-full w-80 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                        } overflow-y-auto`}
                >
                    <div className="p-6 pt-20">
                        {/* Mobile Menu Items */}
                        <div className="space-y-1">
                            {menuItems.map((item) => (
                                <div key={item.name}>
                                    {item.submenu ? (
                                        <div>
                                            <button
                                                onClick={() => toggleSubmenu(item.name)}
                                                className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                                            >
                                                {item.name}
                                                <FaChevronDown
                                                    className={`text-sm transform transition-transform duration-300 ${activeSubmenu === item.name ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </button>
                                            <div
                                                className={`overflow-hidden transition-all duration-300 ${activeSubmenu === item.name
                                                    ? "max-h-96 opacity-100"
                                                    : "max-h-0 opacity-0"
                                                    }`}
                                            >
                                                <div className="pl-4 py-2 space-y-1">
                                                    {item.submenu.map((sub) => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                                            onClick={closeMenu}
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            {/* Mobile Services Menu */}
                            <div>
                                <button
                                    onClick={() => toggleSubmenu("SERVICES")}
                                    className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg font-semibold transition-all duration-300"
                                >
                                    SERVICES
                                    <FaChevronDown
                                        className={`text-sm transform transition-transform duration-300 ${activeSubmenu === "SERVICES" ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${activeSubmenu === "SERVICES"
                                        ? "max-h-[600px] opacity-100"
                                        : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pl-4 py-2 space-y-4">
                                        {/* Canada Immigration Mobile */}
                                        <div>
                                            <h5 className="text-black mb-2">Canada Immigration</h5>
                                            <div className="space-y-1 pl-2">
                                                {servicesData.canadaImmigration
                                                    .slice(0, 3)
                                                    .map((category) =>
                                                        category.items.slice(0, 2).map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="block px-3 py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                                                                onClick={closeMenu}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        ))
                                                    )}
                                            </div>
                                        </div>

                                        {/* USA Immigration Mobile */}
                                        <div>
                                            <h5 className="text-black mb-2">USA Immigration</h5>
                                            <div className="space-y-1 pl-2">
                                                {servicesData.usaImmigration.slice(0, 3).map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-3 py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                                                        onClick={closeMenu}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Advisory Mobile */}
                                        <div>
                                            <h5 className="text-black mb-2">Advisory</h5>
                                            <div className="space-y-1 pl-2">
                                                {servicesData.advisory.startUp
                                                    .slice(0, 3)
                                                    .map((item) => (
                                                        <Link
                                                            key={item.name}
                                                            href={item.href}
                                                            className="block px-3 py-1 text-sm text-gray-600 hover:text-primary transition-colors duration-200"
                                                            onClick={closeMenu}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Get Started Button */}
                        <div className="mt-8 pt-6 border-t border-gray-200">
                            <Link
                                href="/"
                                className="block w-full text-center primary-button px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                                onClick={closeMenu}
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar2;