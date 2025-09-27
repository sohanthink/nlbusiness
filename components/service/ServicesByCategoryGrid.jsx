"use client";
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaMapMarkerAlt, FaRocket, FaBullhorn, FaHandshake, FaBuilding, FaUsers, FaChartLine, FaLightbulb } from 'react-icons/fa';

const ServicesByCategoryGrid = () => {
    const serviceCategories = [
        {
            id: 'canada-immigrations',
            title: 'Canada Immigration',
            subtitle: 'Navigate Your Journey to Canada',
            icon: <FaMapMarkerAlt className="text-4xl" />,
            color: 'from-red-500 via-red-600 to-red-700',
            description: 'Professional business plans for all Canadian immigration programs including Provincial Nominee Programs, Quebec programs, and federal streams.',
            features: ['Provincial Nominee Programs', 'Quebec Immigration', 'Federal Programs', 'Startup Visa'],
            href: '/services/canada-immigrations'
        },
        {
            id: 'usa-immigrations',
            title: 'USA Immigration',
            subtitle: 'Launch Your American Dream',
            icon: <FaRocket className="text-4xl" />,
            color: 'from-blue-500 via-blue-600 to-blue-700',
            description: 'Comprehensive business plans for US immigration including E-2, L-1, EB-2, and EB-5 visa programs with USCIS compliance.',
            features: ['E-2 Treaty Investor', 'L-1 Intracompany Transfer', 'EB-2 National Interest', 'EB-5 Investor Program'],
            href: '/services/usa-immigrations'
        },
        {
            id: 'advisory',
            title: 'Startup Advisory',
            subtitle: 'Fuel Your Entrepreneurial Vision',
            icon: <FaLightbulb className="text-4xl" />,
            color: 'from-green-500 via-green-600 to-green-700',
            description: 'Strategic advisory services for startups including financial modeling, investor business plans, and pitch deck development.',
            features: ['Financial Modeling', 'Investor Business Plans', 'Pitch Deck Development', 'Strategic Planning'],
            href: '/services/advisory'
        },
        {
            id: 'digital-marketing',
            title: 'Digital Marketing',
            subtitle: 'Amplify Your Brand Presence',
            icon: <FaBullhorn className="text-4xl" />,
            color: 'from-purple-500 via-purple-600 to-purple-700',
            description: 'Complete digital marketing solutions including content writing, logo design, website development, and SEO strategies.',
            features: ['Content Writing', 'Logo & Brand Design', 'Website Development', 'SEO & Digital Strategy'],
            href: '/services/digital-marketing'
        },
        {
            id: 'ma-advisory',
            title: 'M&A Advisory',
            subtitle: 'Navigate Complex Transactions',
            icon: <FaHandshake className="text-4xl" />,
            color: 'from-orange-500 via-orange-600 to-orange-700',
            description: 'Expert M&A advisory services including CIM development, buyers list creation, due diligence support, and valuation services.',
            features: ['Confidential Information Memorandum', 'Buyers List Development', 'Due Diligence Support', 'Valuation Services'],
            href: '/services/ma-advisory'
        },
        {
            id: 'small-business',
            title: 'Small Business Plans',
            subtitle: 'Secure Funding & Growth',
            icon: <FaBuilding className="text-4xl" />,
            color: 'from-teal-500 via-teal-600 to-teal-700',
            description: 'Comprehensive business plans for small businesses including bank loans, grants, SBA loans, and landlord presentations.',
            features: ['Bank Loan Business Plans', 'Grant Business Plans', 'SBA Loan Plans', 'Landlord Decks'],
            href: '/services/small-business'
        },
        {
            id: 'franchise',
            title: 'Franchise Development',
            subtitle: 'Scale Your Business Empire',
            icon: <FaUsers className="text-4xl" />,
            color: 'from-indigo-500 via-indigo-600 to-indigo-700',
            description: 'Complete franchise development services including master business plans, financial models, and franchisee acquisition strategies.',
            features: ['Franchisor Master Business Plan', 'Financial Modeling', 'Franchisee Pitch Decks', 'Operations Manuals'],
            href: '/services/franchise'
        }
    ];

    return (
        <section id="services" className="w-full py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <FaChartLine className="text-2xl text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Services</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive business solutions tailored to your immigration, funding, and growth needs.
                        Professional services designed to turn your vision into reality.
                    </p>
                </div>

                {/* Service Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {serviceCategories.map((category, index) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group block"
                        >
                            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
                                {/* Category Header */}
                                <div className={`bg-gradient-to-r ${category.color} p-8 text-white relative overflow-hidden`}>
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>

                                    <div className="relative z-10">
                                        <div className="flex items-center space-x-4 mb-4">
                                            <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                                                <p className="text-lg opacity-90">{category.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Category Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 mb-6">
                                        {category.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full`}></div>
                                                <span className="text-sm text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-semibold text-gray-900">Explore Services</span>
                                        <div className={`p-2 bg-gradient-to-r ${category.color} text-white rounded-full group-hover:scale-110 transition-transform duration-300`}>
                                            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Enhanced Call to Action */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48"></div>

                    <div className="relative z-10 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                            <FaLightbulb className="text-2xl text-primary" />
                        </div>
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Business?
                        </h3>
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Our expert team is here to guide you through the process and help you select the perfect solution for your business needs. Let's turn your vision into reality.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get Free Consultation
                                <FaArrowRight className="ml-3" />
                            </Link>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 backdrop-blur-sm"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesByCategoryGrid;