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
        usaImmigration: [
            { name: "E-2 Business plan", href: "/e-2-business-plan" },
            { name: "Business plan L-1", href: "/business-plan-l-1" },
            { name: "Business plan EB2", href: "/business-plan-eb2" },
            { name: "Compliant EB-5", href: "/compliant-eb-5" },
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

                            {/* Mega Menu*/}
                            <div className="absolute mt-20 z-40 inset-0 w-full h-[80vh] bg-[#EEEEEE] shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6 overflow-y-auto">
                                <div className="container mx-auto px-2 grid grid-cols-1 xl:grid-cols-2 gap-10">
                                    <div>
                                        {/* Canada Immigration */}
                                        <div>
                                            <h4 className="bg-white px-5 py-2 inline-block rounded mb-6 font-semibold">
                                                Canada Immigration:
                                            </h4>
                                            <div className="space-y-6 ml-4">
                                                {servicesData.canadaImmigration.map(
                                                    (category, index) => (
                                                        <div
                                                            key={index}
                                                            className="group/category relative w-fit"
                                                        >
                                                            <ul className="flex items-center gap-2 cursor-pointer">
                                                                <li className="group-hover/category:text-primary transition-colors duration-300">
                                                                    {category.title}
                                                                </li>
                                                                <GoChevronRight className="text-sm transform group-hover/category:rotate-90 transition-transform duration-300" />
                                                            </ul>

                                                            {/* Hover menu */}
                                                            <div className="absolute left-full top-0 w-96 bg-white shadow-xl border border-gray-200 rounded-lg p-4 opacity-0 invisible group-hover/category:opacity-100 group-hover/category:visible transition-all duration-300 z-50">
                                                                <h6 className="text-primary mb-3 text-base border-b border-gray-100 pb-2">
                                                                    {category.title}
                                                                </h6>
                                                                <ul className="space-y-2">
                                                                    {category.items.map((item) => (
                                                                        <li key={item.name}>
                                                                            <Link
                                                                                href={item.href}
                                                                                className="group/item block px-3 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md relative transition-all duration-200"
                                                                            >
                                                                                {item.name}
                                                                                <span className="absolute left-3 bottom-1 w-4 h-[1px] bg-primary opacity-0 group-hover/item:w-[calc(100%-24px)] group-hover/item:opacity-100 transition-all duration-500 ease-in-out"></span>
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* USA Immigration */}
                                        <div className="mt-12">
                                            <h4 className="bg-white px-5 py-2 inline-block rounded mb-6 font-semibold">
                                                USA Immigration:
                                            </h4>
                                            <ul className="space-y-6 ml-4">
                                                {servicesData.usaImmigration.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="group/megaMenu text-black w-fit hover:text-primary relative transition-colors duration-300 block"
                                                        >
                                                            {item.name}
                                                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        {/* Advisory */}
                                        <div>
                                            <h4 className="bg-white px-5 py-2 inline-block rounded mb-6 font-semibold">
                                                Advisory:
                                            </h4>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ml-4">
                                                <div>
                                                    <h4>Start Up</h4>
                                                    <ul className="space-y-6 mt-5">
                                                        {servicesData.advisory.startUp.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="group/megaMenu w-fit text-black hover:text-primary relative transition-colors duration-300 block"
                                                                >
                                                                    {item.name}
                                                                    <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h4>Small Business</h4>
                                                    <ul className="space-y-6 mt-5">
                                                        {servicesData.advisory.smallBusiness.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className="group/megaMenu w-fit text-black hover:text-primary relative transition-colors duration-300 block"
                                                                >
                                                                    {item.name}
                                                                    <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* M&A */}
                                        <div className="mt-12">
                                            <h4 className="bg-white px-5 py-2 inline-block rounded mb-6 font-semibold">
                                                M&A:
                                            </h4>
                                            <ul className="space-y-6 ml-4">
                                                {servicesData.ma.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="group/megaMenu w-fit text-black hover:text-primary relative transition-colors duration-300 block"
                                                        >
                                                            {item.name}
                                                            <span className="absolute left-0 bottom-0 w-7 h-[2px] bg-primary opacity-100 group-hover/megaMenu:w-full transition-all duration-700 ease-in-out"></span>
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
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

export default Navbar;