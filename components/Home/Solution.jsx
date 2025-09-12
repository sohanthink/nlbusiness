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
                <h2 className='text-center py-14 z-10 md:px-80'>Our Core Immigration Services</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <Card
                        src={solution1}
                        heading='Immigration Business Plans'
                        description='The cornerstone of your visa application. Our custom business plans demonstrate the viability of your venture and its benefit to Canada, meticulously tailored for programs like Start-Up Visa, Self-Employed, or Provincial Nominee.'
                    />
                    <Card
                        src={solution2}
                        heading='Franchisor Master Business Plans'
                        description='Expand your franchise into the Canadian market. We create master business plans that help franchisors meet immigration requirements for transferring key staff and managers to Canada.'
                    />
                    <Card
                        src={solution3}
                        heading='Corporate Immigration Support'
                        description='Seamless global mobility for your team. We support businesses with the documentation needed to secure work permits and visas for essential employees, ensuring compliance and a smooth transition.'
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