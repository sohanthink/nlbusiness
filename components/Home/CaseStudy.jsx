"use client";

import React from 'react'
import Image from 'next/image'
import Button from '../common/Button'
import { FaArrowRight, FaCheckCircle, FaUsers, FaDollarSign, FaChartLine } from 'react-icons/fa'
import Link from 'next/link'

import caseStudyImage1 from "@/public/images/home/videobanner.png"
import caseStudyImage2 from "@/public/images/home/videobanner2.png"

const CaseStudy = () => {
    const renderIcon = (iconType) => {
        switch (iconType) {
            case 'check':
                return <FaCheckCircle className="text-primary text-2xl mx-auto mb-2" />;
            case 'dollar':
                return <FaDollarSign className="text-primary text-2xl mx-auto mb-2" />;
            case 'users':
                return <FaUsers className="text-primary text-2xl mx-auto mb-2" />;
            case 'trending':
                return <FaChartLine className="text-primary text-2xl mx-auto mb-2" />;
            default:
                return <FaCheckCircle className="text-primary text-2xl mx-auto mb-2" />;
        }
    };

    const caseStudies = [
        {
            id: 1,
            title: "Tech Startup Success",
            subtitle: "Start-Up Visa Program - Canada",
            description: "A revolutionary AI-powered healthcare platform that secured government backing and investor funding through our comprehensive business plan.",
            image: caseStudyImage1,
            results: [
                { icon: "check", label: "Visa Approved", value: "8 months" },
                { icon: "dollar", label: "Funding Raised", value: "$2.5M" },
                { icon: "users", label: "Jobs Created", value: "25+" }
            ],
            industry: "Healthcare Technology",
            program: "Start-Up Visa",
            link: "/case-studies/tech-startup"
        },
        {
            id: 2,
            title: "Restaurant Chain Expansion",
            subtitle: "E-2 Treaty Investor Visa - USA",
            description: "Multi-location restaurant concept that successfully demonstrated substantial investment and job creation potential.",
            image: caseStudyImage2,
            results: [
                { icon: "check", label: "Visa Approved", value: "6 months" },
                { icon: "trending", label: "Revenue Growth", value: "150%" },
                { icon: "users", label: "Employees", value: "40+" }
            ],
            industry: "Food & Beverage",
            program: "E-2 Investor Visa",
            link: "/case-studies/restaurant-expansion"
        }
    ];

    return (
        <section className="section-padding bg-gray-50">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="mb-4">Success Stories That Inspire</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Real businesses, real results. See how our expertly crafted business plans have helped entrepreneurs achieve their immigration and investment goals.
                    </p>
                </div>

                {/* Case Studies Grid */}
                <div className="space-y-16">
                    {caseStudies.map((study, index) => (
                        <div key={study.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>

                            {/* Image Column */}
                            <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-[300px] md:h-[400px] object-cover"
                                    />
                                    {/* Industry Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {study.industry}
                                        </span>
                                    </div>
                                    {/* Program Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {study.program}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                                    <p className="text-primary font-semibold text-lg mb-4">{study.subtitle}</p>
                                    <p className="text-gray-600 text-lg leading-relaxed">{study.description}</p>
                                </div>

                                {/* Results Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {study.results.map((result, idx) => (
                                        <div key={idx} className="bg-white rounded-lg p-4 shadow-md text-center">
                                            {renderIcon(result.icon)}
                                            <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                                            <div className="text-sm text-gray-600">{result.label}</div>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA Button */}
                                <div className="pt-4">
                                    <Link
                                        href={study.link}
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                                    >
                                        View Full Case Study
                                        <FaArrowRight className="text-sm" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-primary rounded-2xl p-8 md:p-12 text-white">
                        <h3 className="text-3xl font-bold mb-4 !text-white">Ready to Write Your Success Story?</h3>
                        <p className="text-xl mb-6 opacity-90">
                            Join hundreds of entrepreneurs who have achieved their dreams with our expert business plans.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                text="START YOUR PLAN"
                                link="/contact"
                                cn="bg-white text-primary hover:bg-gray-100"
                            />
                            <Button
                                text="VIEW ALL CASE STUDIES"
                                link="/case-studies"
                                cn="border-2 border-white text-white hover:bg-white hover:text-primary"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CaseStudy