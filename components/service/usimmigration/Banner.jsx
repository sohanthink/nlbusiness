import Image from "next/image";
import React from "react";

import Button from "@/components/common/Button";

import { FcGoogle } from "react-icons/fc";
import { IoIosStar } from "react-icons/io";

import logo1 from '@/public/images/home/partner/logo1.png'
import logo2 from '@/public/images/home/partner/logo2.png'
import logo3 from '@/public/images/home/partner/logo3.png'
import logo4 from '@/public/images/home/partner/logo4.png'
import logo5 from '@/public/images/home/partner/logo5.png'
import logo6 from '@/public/images/home/partner/logo6.png'



const Banner = ({ title, description, src, btnLink, btnCn, btnText }) => {
    const partnerLogos = [
        {
            id: 1,
            src: logo1,
            alt: "Partner Logo 1"
        },
        {
            id: 2,
            src: logo2,
            alt: "Partner Logo 2"
        },
        {
            id: 3,
            src: logo3,
            alt: "Partner Logo 3"
        },
        {
            id: 4,
            src: logo4,
            alt: "Partner Logo 4"
        },
        {
            id: 5,
            src: logo5,
            alt: "Partner Logo 5"
        },
        {
            id: 6,
            src: logo6,
            alt: "Partner Logo 6"
        }
    ];

    return (
        <section className="w-full relative mt-24 py-10">
            <div className="container flex justify-center items-center h-full">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 relative text-center md:text-left">
                        <h1 className="mt-6 md:mt-0 z-10 text-center md:text-left">{title}
                        </h1>
                        <p className="my-5 md:my-6">{description}</p>
                        <Button link={btnLink} cn={btnCn} text={btnText} />
                        <div className="flex items-center gap-3 mt-7 flex-wrap">
                            <FcGoogle className="text-2xl" />
                            <div className="flex items-center gap-1">
                                <IoIosStar className="text-amber-300" />
                                <IoIosStar className="text-amber-300" />
                                <IoIosStar className="text-amber-300" />
                                <IoIosStar className="text-amber-300" />
                                <IoIosStar className="text-amber-300" />
                            </div>
                            <span className="text-sm md:text-base">5.0 | Based on 581 reviews</span>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src={src} alt="banner" className="w-full md:h-[600px] h-[300px] object-contain" />
                    </div>
                </div>
            </div>
            {/* Partner Logos Section */}
            <div className="py-20 container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
                    {partnerLogos.map((logo) => (
                        <div key={logo.id} className="flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                className="max-w-full h-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                                width={120}
                                height={60}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Banner;
