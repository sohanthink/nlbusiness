import Image from 'next/image'
import React from 'react'

import solutionbanner from "@/public/images/home/solution.png"
import Button from '../common/Button'
import Link from 'next/link'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


import solution1 from "@/public/images/home/solution1.png"
import solution2 from "@/public/images/home/solution2.png"
import solution3 from "@/public/images/home/solution3.png"



const Solution = () => {
    return (
        <div className='relative section-padding'>
            <Image src={solutionbanner} alt='solutionbanner' className='w-full h-full object-cover absolute top-0 left-0 -z-10' />
            <div className='container'>
                <h2 className='text-center py-14 z-10 md:px-80'>Tailored Solutions for Every Stage of Your Journey</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <Card src={solution1} heading='Immigration Business Plans' description='To obtain Canadian Permanent Residency, you must apply for and receive a Canada Immigration (Permanent Resident) Visa' link='/solution' />
                    <Card src={solution2} heading='Franchisor Master Business Plans' description='Many people outside Canada mistakenly call a Canada Immigration (Permanent Resident) Visa a "Canada Green Card," ' link='/solution' />
                    <Card src={solution3} heading='Commercial Business Plans' description='We proudly provide corporate clients with comprehensive immigration services tailored to support their business needs.' link='/solution' />
                </div>
            </div>
        </div>
    )
}

export default Solution

export const Card = ({ src, heading, description, link, }) => {

    return (
        <Link href={link}>
            <div className="rounded-2xl overflow-hidden flex-col bg-white shadow-sm hover:drop-shadow-xl transition-all duration-200">
                <div className="relative">
                    <Image
                        src={src}
                        alt="card Image"
                        width={300}
                        height={300}
                        className="object-cover h-64 w-full"
                    />
                </div>
                <div className="p-5 space-y-4">
                    <h3 className="text-black">
                        {heading}
                    </h3>
                    <p>
                        {description}
                    </p>
                    <div className='flex items-center gap-3 font-bold text-black'>
                        <MdKeyboardDoubleArrowRight className='h-10 w-10 bg-primary text-white p-3 text-lg rounded-lg' />
                        Read More
                    </div>
                </div>
            </div>
        </Link>
    )
}