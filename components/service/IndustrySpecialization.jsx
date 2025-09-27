"use client";
import React from 'react';
import {
    FaHospital,
    FaUtensils,
    FaCar,
    FaLaptop,
    FaHome,
    FaGraduationCap,
    FaShoppingCart,
    FaIndustry,
    FaPlane,
    FaDumbbell,
    FaPaintBrush,
    FaSeedling,
    FaChartLine,
    FaUsers,
    FaCog
} from 'react-icons/fa';

const IndustrySpecialization = () => {
    const industries = [
        {
            id: 'healthcare',
            name: 'Healthcare & Medical',
            icon: <FaHospital className="text-3xl" />,
            color: 'from-red-500 to-red-600',
            challenges: [
                'Regulatory compliance requirements',
                'HIPAA and patient data security',
                'Medical device approvals',
                'Healthcare facility licensing'
            ],
            description: 'Comprehensive business plans for medical practices, clinics, hospitals, and healthcare technology companies.'
        },
        {
            id: 'food-beverage',
            name: 'Food & Beverage',
            icon: <FaUtensils className="text-3xl" />,
            color: 'from-orange-500 to-orange-600',
            challenges: [
                'Food safety regulations',
                'Restaurant licensing and permits',
                'Supply chain management',
                'Health department compliance'
            ],
            description: 'Strategic planning for restaurants, food trucks, catering services, and food manufacturing businesses.'
        },
        {
            id: 'automotive',
            name: 'Automotive & Transportation',
            icon: <FaCar className="text-3xl" />,
            color: 'from-blue-500 to-blue-600',
            challenges: [
                'Vehicle registration and licensing',
                'Environmental regulations',
                'Safety compliance standards',
                'Fleet management optimization'
            ],
            description: 'Business solutions for auto dealerships, repair shops, transportation services, and automotive technology.'
        },
        {
            id: 'technology',
            name: 'Technology & Software',
            icon: <FaLaptop className="text-3xl" />,
            color: 'from-purple-500 to-purple-600',
            challenges: [
                'Intellectual property protection',
                'Data privacy regulations',
                'Cybersecurity compliance',
                'Software licensing agreements'
            ],
            description: 'Innovation-focused plans for software companies, tech startups, IT services, and digital platforms.'
        },
        {
            id: 'real-estate',
            name: 'Real Estate & Construction',
            icon: <FaHome className="text-3xl" />,
            color: 'from-green-500 to-green-600',
            challenges: [
                'Building permits and zoning',
                'Environmental impact assessments',
                'Construction safety regulations',
                'Property development approvals'
            ],
            description: 'Development strategies for real estate agencies, construction companies, and property management firms.'
        },
        {
            id: 'education',
            name: 'Education & Training',
            icon: <FaGraduationCap className="text-3xl" />,
            color: 'from-indigo-500 to-indigo-600',
            challenges: [
                'Educational licensing requirements',
                'Curriculum accreditation standards',
                'Student data protection',
                'Quality assurance compliance'
            ],
            description: 'Educational business plans for schools, training centers, online learning platforms, and educational technology.'
        },
        {
            id: 'retail',
            name: 'Retail & E-commerce',
            icon: <FaShoppingCart className="text-3xl" />,
            color: 'from-pink-500 to-pink-600',
            challenges: [
                'Inventory management systems',
                'Payment processing compliance',
                'Customer data protection',
                'Supply chain optimization'
            ],
            description: 'Retail strategies for brick-and-mortar stores, online marketplaces, and omnichannel retail businesses.'
        },
        {
            id: 'manufacturing',
            name: 'Manufacturing & Industrial',
            icon: <FaIndustry className="text-3xl" />,
            color: 'from-gray-600 to-gray-700',
            challenges: [
                'Quality control standards',
                'Environmental regulations',
                'Workplace safety compliance',
                'Supply chain management'
            ],
            description: 'Industrial business plans for manufacturing companies, production facilities, and industrial equipment suppliers.'
        },
        {
            id: 'hospitality',
            name: 'Hospitality & Tourism',
            icon: <FaPlane className="text-3xl" />,
            color: 'from-cyan-500 to-cyan-600',
            challenges: [
                'Tourism licensing requirements',
                'Hotel and restaurant permits',
                'Safety and health regulations',
                'Seasonal business planning'
            ],
            description: 'Hospitality strategies for hotels, travel agencies, restaurants, and tourism-related businesses.'
        },
        {
            id: 'fitness',
            name: 'Fitness & Wellness',
            icon: <FaDumbbell className="text-3xl" />,
            color: 'from-yellow-500 to-yellow-600',
            challenges: [
                'Health and safety regulations',
                'Equipment certification standards',
                'Liability insurance requirements',
                'Membership management systems'
            ],
            description: 'Wellness business plans for gyms, fitness centers, spas, and health and wellness services.'
        },
        {
            id: 'creative',
            name: 'Creative & Media',
            icon: <FaPaintBrush className="text-3xl" />,
            color: 'from-rose-500 to-rose-600',
            challenges: [
                'Intellectual property rights',
                'Content licensing agreements',
                'Copyright protection',
                'Creative project management'
            ],
            description: 'Creative business strategies for design agencies, media companies, advertising firms, and creative studios.'
        },
        {
            id: 'agriculture',
            name: 'Agriculture & Farming',
            icon: <FaSeedling className="text-3xl" />,
            color: 'from-lime-500 to-lime-600',
            challenges: [
                'Agricultural regulations',
                'Environmental sustainability',
                'Food safety standards',
                'Farm-to-market logistics'
            ],
            description: 'Agricultural business plans for farms, agricultural technology, food processing, and sustainable farming operations.'
        }
    ];

    return (
        <section className="w-full py-20 bg-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                        <FaChartLine className="text-2xl text-primary" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Expertise</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We specialize in creating tailored business solutions across diverse industries,
                        understanding the unique challenges and opportunities each sector presents.
                    </p>
                </div>

                {/* Industries Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                    {industries.map((industry, index) => (
                        <div
                            key={industry.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
                        >
                            {/* Industry Header */}
                            <div className={`bg-gradient-to-r ${industry.color} p-6 text-white relative overflow-hidden`}>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                                <div className="relative z-10">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                            {industry.icon}
                                        </div>
                                        <h3 className="text-lg font-bold">{industry.name}</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Industry Content */}
                            <div className="p-6">
                                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {industry.description}
                                </p>

                                {/* Challenges List */}
                                <div className="space-y-2">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Challenges:</h4>
                                    {industry.challenges.map((challenge, challengeIndex) => (
                                        <div key={challengeIndex} className="flex items-start space-x-2">
                                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${industry.color} rounded-full mt-2 flex-shrink-0`}></div>
                                            <span className="text-xs text-gray-600 leading-relaxed">{challenge}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48"></div>

                    <div className="relative z-10">
                        <div className="text-center mb-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
                                <FaUsers className="text-2xl text-primary" />
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">
                                Proven Track Record Across Industries
                            </h3>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                Our expertise spans multiple sectors, delivering successful business plans that meet industry-specific requirements and regulations.
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">180+</div>
                                <div className="text-lg text-gray-300">Industries Served</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
                                <div className="text-lg text-gray-300">Business Plans Created</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                                <div className="text-lg text-gray-300">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                {/* <div className="mt-16 text-center">
                    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                            <FaCog className="text-2xl text-primary" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Don't See Your Industry Listed?
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                            We work across all industries and can create custom business solutions tailored to your specific sector requirements and challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get Custom Solution
                            </a>
                            <a
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                            >
                                Learn More About Us
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default IndustrySpecialization;
