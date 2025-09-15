import React from 'react'

import pricingshape from "@/public/images/service/innerpages/pricingshape.png"


const Pricing = ({
    startingPrice = "C$ 3,500",
    daysUntilDraft = "10-15 business days",
    rushServiceText = "Rush service available",
    numberOfPages = "Custom",
    packageTitle = "Comprehensive Business Plan Package",
    packageSubtitle = "Transparent Investment in Your Future",
    includedFeatures = [
        "Executive Summary tailored to your goals",
        "Detailed Company Description & Legal Structure",
        "Market & Industry Analysis",
        "Job Creation Plan",
        "Marketing & Operations Strategy",
        "5-Year Financial Projections",
        "Documentation Review Support",
        "Two rounds of revisions"
    ],
    whatIncludedTitle = "What's Included in Your Plan",
    whatIncludedSubtitle = "Everything You Need for a Strong Application",
    whatIncludedFeatures = [
        "Compliance with Program Guidelines",
        "Economic Benefit Argument",
        "Local Market Analysis",
        "Management Plan",
        "Risk Analysis & Mitigation",
        "Professional Formatting & Design"
    ],
    processTitle = "Our Collaborative Process",
    processSubtitle = "5 Key Steps to Success",
    processSteps = [
        "Discover: Deep-dive consultation on your business concept and goals",
        "Research & Analyze: Our experts research your industry and local competition",
        "Develop & Draft: We create the first draft of your comprehensive business plan",
        "Review & Refine: We share the draft with you for feedback and make revisions",
        "Finalize & Deliver: You receive a polished, professional, and print-ready document"
    ],

}) => {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Starting Price Card */}
                    <div className="relative z-10 bg-white shadow-lg p-8 border-t-4 border-black">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={pricingshape.src}
                                alt="Pricing background shape"
                                className="absolute bottom-0 right-0 w-50"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Starting Price</h3>

                        <div className="text-4xl font-bold text-primary mb-6">{startingPrice}</div>

                        <div className="mb-6">
                            <h4 className="text-gray font-medium mb-2">Days Until First Draft</h4>
                            <div className="bg-gray/10 rounded-lg px-4 py-2">
                                <span className="text-gray text-sm">{daysUntilDraft}</span>
                            </div>
                        </div>

                        <button className="w-full bg-primary text-white py-3 px-4 rounded-lg mb-6 flex items-center justify-center gap-2">
                            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                                <span className="text-primary text-xs font-bold">24</span>
                            </div>
                            <span>{rushServiceText}</span>
                        </button>

                        <div>
                            <h4 className="text-gray font-medium mb-2">Number of Pages</h4>
                            <div className="bg-gray-100 rounded-lg px-4 py-2">
                                <span className="text-gray text-sm">{numberOfPages}</span>
                            </div>
                        </div>
                    </div>

                    {/* Included Card */}
                    <div className="relative z-10 bg-white shadow-lg p-8 border-t-4 border-primary">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={pricingshape.src}
                                alt="Pricing background shape"
                                className="absolute bottom-0 right-0 w-50"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray mb-6">Included:</h3>

                        <ul className="space-y-3">
                            {includedFeatures.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3  text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 10 Step Process Card */}
                    <div className="relative z-10 bg-white shadow-lg p-8 border-t-4 border-black">
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={pricingshape.src}
                                alt="Pricing background shape"
                                className="absolute bottom-0 right-0 w-50"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">{processTitle}:</h3>

                        <ul className="space-y-3">
                            {processSteps.map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-5 h-5 flex-shrink-0 bg-black rounded-full flex items-center justify-center">
                                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-gray">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Pricing