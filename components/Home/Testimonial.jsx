'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CiStar } from "react-icons/ci";
import { FaQuoteRight } from "react-icons/fa";

import Image from 'next/image';
import p1 from '@/public/images/home/p1.png' // Adjust the path as necessary
import p2 from '@/public/images/home/p2.png' // Adjust the path as necessary

import logo1 from '@/public/images/home/partner/logo1.png'
import logo2 from '@/public/images/home/partner/logo2.png'
import logo3 from '@/public/images/home/partner/logo3.png'
import logo4 from '@/public/images/home/partner/logo4.png'
import logo5 from '@/public/images/home/partner/logo5.png'
import logo6 from '@/public/images/home/partner/logo6.png'

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            rating: 5,
            content: "Business Venture Canada transformed our immigration journey. Their AINP business plan was so comprehensive and professionally crafted that it helped us secure our nomination in just 8 months. The team's expertise in Alberta's economic priorities made all the difference.",
            author: "Sarah Chen",
            position: "Entrepreneur",
            company: "Tech Innovations Inc.",
            image: p1
        },
        {
            id: 2,
            rating: 5,
            content: "After struggling with generic business plan templates, we found Business Venture Canada. Their MPNP business plan was tailored specifically for Manitoba's market and helped us navigate the Exploratory Visit successfully. Highly professional and immigration-focused approach.",
            author: "Michael Rodriguez",
            position: "Business Owner",
            company: "Manitoba Ventures",
            image: p2
        },
        {
            id: 3,
            rating: 5,
            content: "The E-2 visa business plan they created for our restaurant chain was exceptional. Every detail was meticulously researched, from market analysis to financial projections. We received our visa approval in record time. Truly immigration business plan experts.",
            author: "Priya Patel",
            position: "Restaurant Owner",
            company: "Spice Garden Group",
            image: p1
        },
    ];

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
        <section className="py-8 md:py-24 bg-[#fefefe]">

            <h2 className='text-center pb-5 md:pb-14'>What customer say about us</h2>
            <div className="container">
                <div className="relative"> {/* Wrapper div */}
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        pagination={{
                            clickable: true,
                            el: '.testimonial-pagination',
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-primary/5 relative m-5 md:m-0 p-8 rounded-lg h-full flex flex-col mb-10">
                                    <div className="flex mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-primary text-3xl"><CiStar />
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray mb-6 flex-grow text-xl">{testimonial.content}</p>
                                    {/* triangle shape */}
                                    <div className="absolute -bottom-12 left-10 w-20 h-12">
                                        <div className="shape bg-primary/5 w-full h-full"></div>
                                    </div>
                                    {/* quote */}
                                    <div className="absolute bottom-4 right-8 text-[#2B4DFF54] text-3xl">
                                        <FaQuoteRight />
                                    </div>
                                </div>
                                <div className="mt-10 pl-14 md:pl-10 pt-5">
                                    <div className="flex items-center">
                                        <div className="bg-gray-200 rounded-full w-15 h-15 flex items-center justify-center mr-4">
                                            <Image src={testimonial.image} alt={testimonial.author} className="rounded-full" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary text-2xl">{testimonial.author}</h4>
                                            <p className="text-gray-600 text-sm">
                                                {testimonial.position} <span className="text-primary">@ {testimonial.company}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Fixed pagination container */}
                    <div className="testimonial-pagination absolute bottom-0 left-0 right-0 flex justify-center"></div>

                </div>

                {/* Partner Logos Section */}
                <div className="mt-10 md:mt-24">
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
            </div>
        </section>
    );
};

export default Testimonial;