import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import solutionbanner from "@/public/images/home/solution.png"

import solution1 from "@/public/images/home/solution1.png"
import solution2 from "@/public/images/home/solution2.png"
import solution3 from "@/public/images/home/solution3.png"

const Solution = () => {
    return (
        <div className='relative section-padding'>
            <Image src={solutionbanner} alt='solutionbanner' className='w-full h-full object-cover absolute top-0 left-0 -z-10' />
            <div className='container'>
                <h2 className='text-center py-14 z-10 md:px-80'>Our Expert Planning Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <Card
                        src={solution1}
                        heading='Immigration Business Plans'
                        description='Your pathway to a new life. Custom, compliant business plans for a wide range of global visa programs, including Start-Up Visas, Entrepreneur programs, and E-2 Treaty Investor visas.'
                        bullets={['EB-5 Investor Visa', 'Start-Up Visa', 'LMIA Programs', 'Intra-company Transfer']}
                        ctaText='Learn More'
                        ctaLink='/services/usa-immigrations'
                    />
                    <Card
                        src={solution2}
                        heading='Investor & Startup Business Plans'
                        description='Fuel your growth and secure capital. Persuasive and detailed plans designed to attract venture capital, bank loans, angel investors, and strategic partners.'
                        bullets={['Venture Capital Funding', 'Angel Investor Pitch', 'Bank Loan Applications', 'Strategic Partnerships']}
                        ctaText='Request Sample'
                        ctaLink='/contact'
                    />
                    <Card
                        src={solution3}
                        heading='Corporate Strategic Plans'
                        description='Guide your business expansion. Comprehensive plans for market entry, franchising, new product launches, and long-term strategic direction.'
                        bullets={['Market Entry Strategy', 'Franchise Development', 'Product Launch Plans', 'Strategic Direction']}
                        ctaText='Learn More'
                        ctaLink='/services'
                    />
                </div>
            </div>
        </div>
    )
}

export default Solution

export const Card = ({ src, heading, description, bullets, ctaText, ctaLink }) => {
    return (
        <div className="rounded-2xl overflow-hidden flex flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200 h-full">
            <div className="relative">
                <Image
                    src={src}
                    alt="card Image"
                    width={300}
                    height={300}
                    className="object-cover h-64 w-full"
                />
            </div>
            <div className="p-6 space-y-4 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900">
                    {heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
                {bullets && (
                    <ul className="space-y-2">
                        {bullets.map((bullet, index) => (
                            <li key={index} className="text-sm text-gray-700 flex items-center">
                                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                                {bullet}
                            </li>
                        ))}
                    </ul>
                )}
                {ctaText && ctaLink && (
                    <div className="mt-auto pt-4">
                        <Link
                            href={ctaLink}
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 text-center w-full"
                        >
                            {ctaText}
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}