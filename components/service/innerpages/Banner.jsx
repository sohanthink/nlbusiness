import React from 'react'
import Image from 'next/image'
import innerpagebannerlogo from '@/public/images/service/innerpages/innerpagebannerlogo.png'

const Banner = ({ title, breadcrumb }) => {
    return (
        <div className="bg-white py-20 md:py-32">
            {/* Banner Section */}
            <div className="relative bg-white">
                <div className="container">
                    <div className="relative z-10">
                        {/* Main Title */}
                        <h1 className='py-2'>
                            {title}
                        </h1>
                        {/* Breadcrumb Navigation */}
                        <nav className="my-4">
                            <ol className="underline flex items-center space-x-2 text-sm text-gray-600">
                                <li>
                                    <a href="/" className="hover:text-purple-600 transition-colors">
                                        Home
                                    </a>
                                </li>
                                <li className="text-gray-400">/</li>
                                <li className="text-purple-600">{breadcrumb}</li>
                            </ol>
                        </nav>

                    </div>

                    {/* Background Watermark */}
                    <div className="absolute top-0 md:-top-15 right-52 pointer-events-none">
                        <Image
                            src={innerpagebannerlogo}
                            alt="Background Logo"
                            width={500}
                            className="object-contain w-[500px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner