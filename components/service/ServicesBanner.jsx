import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import banner from "@/public/images/service/servicebanner.png";

const ServicesBanner = () => {
    return (
        <section className="h-[90vh] w-full relative">
            {/* Background Gradient - matching your brand */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-primary/10 -z-19"></div>

            <div className="container flex justify-center items-center h-full">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 relative text-center md:text-left">
                        {/* Main Heading */}
                        <h1 className="mt-6 md:mt-0 z-10 text-center md:text-left">
                            Comprehensive Business Plan
                            <span className="block text-primary">Solutions</span>
                        </h1>

                        {/* Subheading */}
                        <p className="my-5 md:my-6 text-gray">
                            Professional business plans for immigration, funding, and business growth.
                            Expert-crafted strategies that turn your vision into reality.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button
                                link="#services"
                                cn="mr-4"
                                text="Browse All Services"
                            />

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary font-bold font-manrope transition-all duration-300 transform hover:bg-primary hover:text-white active:scale-95 text-sm md:text-[15px] rounded-full"
                            >
                                Get Free Consultation
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200">
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-black font-manrope">500+</div>
                                <div className="text-sm text-gray">Business Plans</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-black font-manrope">95%</div>
                                <div className="text-sm text-gray">Success Rate</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-2xl font-bold text-black font-manrope">24/7</div>
                                <div className="text-sm text-gray">Support</div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <div className="">
                            <Image
                                src={banner}
                                alt="Business Plan Services"
                                className="w-full md:h-[650px] h-[300px] object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesBanner;
