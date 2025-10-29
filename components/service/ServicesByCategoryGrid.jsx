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
            icon: <FaMapMarkerAlt className="text-2xl" />,
            color: 'bg-red-500',
            description: 'Professional business plans for all Canadian immigration programs including Provincial Nominee Programs, Quebec programs, and federal streams.',
            features: ['Provincial Nominee Programs', 'Quebec Immigration', 'Federal Programs', 'Startup Visa'],
            href: '/services/canada-immigrations'
        },
        {
            id: 'usa-immigrations',
            title: 'USA Immigration',
            subtitle: 'Launch Your American Dream',
            icon: <FaRocket className="text-2xl" />,
            color: 'bg-blue-500',
            description: 'Comprehensive business plans for US immigration including E-2, L-1, EB-2, and EB-5 visa programs with USCIS compliance.',
            features: ['E-2 Treaty Investor', 'L-1 Intracompany Transfer', 'EB-2 National Interest', 'EB-5 Investor Program'],
            href: '/services/usa-immigrations'
        },
        {
            id: 'advisory',
            title: 'Startup Advisory',
            subtitle: 'Fuel Your Entrepreneurial Vision',
            icon: <FaLightbulb className="text-2xl" />,
            color: 'bg-green-500',
            description: 'Strategic advisory services for startups including financial modeling, investor business plans, and pitch deck development.',
            features: ['Financial Modeling', 'Investor Business Plans', 'Pitch Deck Development', 'Strategic Planning'],
            href: '/services/advisory/startup'
        },
        {
            id: 'digital-services',
            title: 'Digital Services',
            subtitle: 'Amplify Your Brand Presence',
            icon: <FaBullhorn className="text-2xl" />,
            color: 'bg-purple-500',
            description: 'Complete digital marketing solutions including content writing, logo design, website development, and SEO strategies.',
            features: ['Content Writing', 'Logo & Brand Design', 'Website Development', 'SEO & Digital Strategy'],
            href: '/services/digital-services'
        },
        {
            id: 'advisory-ma',
            title: 'M&A Advisory',
            subtitle: 'Navigate Complex Transactions',
            icon: <FaHandshake className="text-2xl" />,
            color: 'bg-orange-500',
            description: 'Expert M&A advisory services including CIM development, buyers list creation, due diligence support, and valuation services.',
            features: ['Confidential Information Memorandum', 'Buyers List Development', 'Due Diligence Support', 'Valuation Services'],
            href: '/services/advisory/ma'
        },
        {
            id: 'small-business',
            title: 'Small Business Plans',
            subtitle: 'Secure Funding & Growth',
            icon: <FaBuilding className="text-2xl" />,
            color: 'bg-teal-500',
            description: 'Comprehensive business plans for small businesses including bank loans, grants, SBA loans, and landlord presentations.',
            features: ['Bank Loan Business Plans', 'Grant Business Plans', 'SBA Loan Plans', 'Landlord Decks'],
            href: '/services/small-business'
        },
        {
            id: 'franchise',
            title: 'Franchise Development',
            subtitle: 'Scale Your Business Empire',
            icon: <FaUsers className="text-2xl" />,
            color: 'bg-indigo-500',
            description: 'Complete franchise development services including master business plans, financial models, and franchisee acquisition strategies.',
            features: ['Franchisor Master Business Plan', 'Financial Modeling', 'Franchisee Pitch Decks', 'Operations Manuals'],
            href: '/services/small-business/franchisor'
        }
    ];

    return (
        <section id="services" className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                        <FaChartLine className="text-xl text-primary" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive business solutions tailored to your immigration, funding, and growth needs.
                    </p>
                </div>

                {/* Service Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {serviceCategories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="group block"
                        >
                            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-gray-300">
                                {/* Category Header */}
                                <div className={`${category.color} p-6 text-white rounded-t-xl`}>
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="p-2 bg-white/20 rounded-lg">
                                            {category.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">{category.title}</h3>
                                            <p className="text-sm opacity-90">{category.subtitle}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Category Content */}
                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {category.description}
                                    </p>

                                    {/* Features List */}
                                    <div className="space-y-2 mb-4">
                                        {category.features.slice(0, 3).map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className={`w-1.5 h-1.5 ${category.color} rounded-full`}></div>
                                                <span className="text-xs text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between pt-2">
                                        <span className="text-sm font-medium text-gray-900">Explore Services</span>
                                        <div className={`p-1.5 ${category.color} text-white rounded-full group-hover:scale-110 transition-transform duration-200`}>
                                            <FaArrowRight className="text-xs" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="bg-primary rounded-xl p-8 text-white text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mb-4">
                        <FaLightbulb className="text-xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">
                        Ready to Transform Your Business?
                    </h3>
                    <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
                        Our expert team is here to guide you through the process and help you select the perfect solution for your business needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
                        >
                            Get Free Consultation
                            <FaArrowRight className="ml-2" />
                        </Link>
                        <Link
                            href="/about"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesByCategoryGrid;