import Image from 'next/image'
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
                    />
                    <Card
                        src={solution2}
                        heading='Investor & Startup Business Plans'
                        description='Fuel your growth and secure capital. Persuasive and detailed plans designed to attract venture capital, bank loans, angel investors, and strategic partners.'
                    />
                    <Card
                        src={solution3}
                        heading='Corporate Strategic Plans'
                        description='Guide your business expansion. Comprehensive plans for market entry, franchising, new product launches, and long-term strategic direction.'
                    />
                </div>
            </div>
        </div>
    )
}

export default Solution

export const Card = ({ src, heading, description }) => {
    return (
        <div className="rounded-2xl overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200 h-full">
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
                <p className="text-gray-600 leading-relaxed flex-grow">
                    {description}
                </p>
            </div>
        </div>
    )
}