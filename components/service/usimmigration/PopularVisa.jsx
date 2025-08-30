'use client'

import React, { useState } from 'react'

const PopularVisa = () => {
    const [selectedCategory, setSelectedCategory] = useState('Ability to Pay Document')
    const [hoveredCard, setHoveredCard] = useState(null)

    const categories = [
        { id: 1, name: 'Ability to Pay Document', count: 3 },
        { id: 2, name: 'E-1 Visa Business Plan', count: 4 },
        { id: 3, name: 'E-2 Visa Business Plan', count: 5 },
        { id: 4, name: 'E-3 Visa Business Plan', count: 3 },
        { id: 5, name: 'E-4 Visa Business Plan', count: 4 },
        { id: 6, name: 'E-5 Visa Business Plan', count: 2 },
        { id: 7, name: 'E-6 Visa Business Plan', count: 3 },
        { id: 8, name: 'E-7 Visa Business Plan', count: 4 },
    ]

    // Different content for each category
    const getCategoryContent = (categoryName) => {
        switch (categoryName) {
            case 'Ability to Pay Document':
                return [
                    {
                        id: 1,
                        title: 'Financial Statement Analysis (with Cash Flow Projections)',
                        company: 'Financial Experts Inc.',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Bank Statement Verification Document',
                        company: 'Banking Solutions LLC',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Financial Experts Inc.',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Asset Verification Report (with Property Valuations)',
                        company: 'Asset Management Pro',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Income Documentation Package',
                        company: 'Income Verification Services',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Credit History Analysis Report',
                        company: 'Credit Analysis Group',
                        isSample: false
                    }
                ]

            case 'E-1 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-1 Treaty Trader Business Plan (with Market Analysis)',
                        company: 'Trade Consulting Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'International Trade Business Strategy',
                        company: 'Global Trade Solutions',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Trade Consulting Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Import/Export Business Development Plan',
                        company: 'Import Export Experts',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Cross-Border Trade Operations Plan',
                        company: 'Border Trade Consultants',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'International Commerce Strategy Document',
                        company: 'Commerce Solutions Inc.',
                        isSample: false
                    }
                ]

            case 'E-2 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-2 Investment Business Plan (with Financial Projections)',
                        company: 'Investment Planning Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Business Investment Strategy Document',
                        company: 'Strategic Investment Group',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Investment Planning Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Capital Investment Business Plan',
                        company: 'Capital Management LLC',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Investment Portfolio Development Plan',
                        company: 'Portfolio Solutions Inc.',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Business Expansion Investment Strategy',
                        company: 'Expansion Consultants',
                        isSample: false
                    }
                ]

            case 'E-3 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-3 Professional Business Plan (with Employment Strategy)',
                        company: 'Professional Services Inc.',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Specialty Occupation Business Development',
                        company: 'Specialty Consultants',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Professional Services Inc.',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Professional Practice Business Plan',
                        company: 'Practice Management Pro',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Specialized Skills Business Strategy',
                        company: 'Skills Development Group',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Professional Expertise Business Plan',
                        company: 'Expertise Solutions LLC',
                        isSample: false
                    }
                ]

            case 'E-4 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-4 Religious Worker Business Plan (with Community Impact)',
                        company: 'Religious Services Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Religious Organization Development Plan',
                        company: 'Religious Development Group',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Religious Services Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Religious Institution Business Strategy',
                        company: 'Institution Management LLC',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Religious Community Service Plan',
                        company: 'Community Services Inc.',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Religious Worker Visa Business Plan',
                        company: 'Visa Services Pro',
                        isSample: false
                    }
                ]

            case 'E-5 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-5 Immigrant Investor Business Plan (with Investment Analysis)',
                        company: 'Investment Visa Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'See the sample for Investment Visa Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 3,
                        title: 'Immigrant Investor Business Strategy',
                        company: 'Investor Solutions Group',
                        isSample: false
                    },
                    {
                        id: 4,
                        title: 'Investment-Based Immigration Plan',
                        company: 'Immigration Investment LLC',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Investor Visa Business Development',
                        company: 'Visa Development Pro',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Investment Immigration Strategy',
                        company: 'Immigration Strategy Inc.',
                        isSample: false
                    }
                ]

            case 'E-6 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-6 Treaty Investor Business Plan (with Investment Strategy)',
                        company: 'Treaty Investment Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Treaty Investor Business Development',
                        company: 'Treaty Development Group',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Treaty Investment Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'International Investment Business Plan',
                        company: 'International Investment LLC',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Treaty-Based Business Strategy',
                        company: 'Treaty Strategy Inc.',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Investment Treaty Business Plan',
                        company: 'Treaty Business Pro',
                        isSample: false
                    }
                ]

            case 'E-7 Visa Business Plan':
                return [
                    {
                        id: 1,
                        title: 'E-7 Special Immigrant Business Plan (with Specialized Skills)',
                        company: 'Special Immigrant Pro',
                        isSample: false
                    },
                    {
                        id: 2,
                        title: 'Special Immigrant Business Development',
                        company: 'Special Development Group',
                        isSample: false
                    },
                    {
                        id: 3,
                        title: 'See the sample for Special Immigrant Pro',
                        company: '',
                        isSample: true
                    },
                    {
                        id: 4,
                        title: 'Specialized Skills Business Plan',
                        company: 'Specialized Skills LLC',
                        isSample: false
                    },
                    {
                        id: 5,
                        title: 'Special Immigrant Visa Strategy',
                        company: 'Special Visa Solutions',
                        isSample: false
                    },
                    {
                        id: 6,
                        title: 'Specialized Business Immigration Plan',
                        company: 'Special Immigration Pro',
                        isSample: false
                    }
                ]

            default:
                return []
        }
    }

    const currentContent = getCategoryContent(selectedCategory)

    return (
        <section className='bg-gray/15'>
            <div className="flex container section-padding">
                {/* Left Panel */}
                <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col">
                    <div className="p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Documents & Plans</h2>
                        <div className="space-y-2 max-h-96 overflow-y-auto">
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${selectedCategory === category.name
                                        ? 'bg-primary text-white'
                                        : 'bg-gray/10 hover:bg-gray-200'
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm font-medium">{category.name}</span>
                                        <span className="text-xs">{category.count}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className="flex-1 p-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-6">Most Popular</h1>
                    <div className="grid grid-cols-2 gap-4">
                        {currentContent.map((plan) => (
                            <div
                                key={plan.id}
                                onMouseEnter={() => setHoveredCard(plan.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className={`relative p-4 rounded-lg cursor-pointer transition-all duration-300 ${plan.isSample
                                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                                    : 'bg-white hover:shadow-lg border border-gray-200'
                                    }`}
                            >
                                {plan.isSample && (
                                    <div className="absolute top-2 right-2">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                )}

                                {hoveredCard === plan.id && !plan.isSample && (
                                    <div className="absolute inset-0 bg-purple-600 bg-opacity-90 rounded-lg flex items-center justify-center">
                                        <div className="text-white text-center p-4">
                                            <h3 className="font-semibold text-sm mb-2">{plan.title}</h3>
                                            <p className="text-xs opacity-90">{plan.company}</p>
                                        </div>
                                    </div>
                                )}

                                <div className={`${hoveredCard === plan.id && !plan.isSample ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                                    <h3 className={`text-sm font-medium mb-2 ${plan.isSample ? 'text-white' : 'text-gray-900'}`}>
                                        {plan.title}
                                    </h3>
                                    {plan.company && (
                                        <p className={`text-lg font-bold ${plan.isSample ? 'text-white' : 'text-gray-800'}`}>
                                            {plan.company}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PopularVisa