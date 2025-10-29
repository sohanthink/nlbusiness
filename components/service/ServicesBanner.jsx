import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import banner from "@/public/images/service/servicebanner.png";

const ServicesBanner = () => {
    return (
        <section className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-primary/15 to-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
            </div>



            <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-primary text-sm font-medium backdrop-blur-sm">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
                            Professional M&A Advisory Services
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-5xl !text-gray-300 lg:text-6xl font-light leading-tight">
                            Strategic Business
                            <span className="block bg-gradient-to-r from-primary/80 to-primary/40 bg-clip-text text-transparent font-light">
                                Excellence
                            </span>
                        </h1>

                        {/* Subheading */}
                        <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                            Transform your business with our comprehensive M&A advisory, financial modeling, and strategic consulting services.
                            We help companies maximize value and achieve their growth objectives.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                link="#services"
                                cn="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-1"
                                text="Explore Our Services"
                            />

                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Schedule Consultation
                            </Link>
                        </div>

                        {/* Enhanced Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8">
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-white mb-1">100+</div>
                                <div className="text-sm text-gray-300">M&A Transactions</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-white mb-1">$200K+</div>
                                <div className="text-sm text-gray-300">Deal Value</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-3xl font-bold text-white mb-1">98%</div>
                                <div className="text-sm text-gray-300">Client Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Enhanced Image Section */}
                    <div className="relative">
                        <div className="relative z-10">
                            <Image
                                src={banner}
                                alt="M&A Advisory Services"
                                className="w-full h-[600px] object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-2xl backdrop-blur-sm border border-primary/30 animate-bounce delay-300"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20 animate-bounce delay-700"></div>
                        <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/30 rounded-full backdrop-blur-sm animate-pulse delay-1000"></div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor" className="text-slate-800"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor" className="text-slate-800"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor" className="text-slate-800"></path>
                </svg>
            </div>
        </section >
    );
};

export default ServicesBanner;
