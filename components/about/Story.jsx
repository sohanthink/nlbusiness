import React from 'react'
import Image from 'next/image'

const Story = () => {
    return (
        <section className="section-padding bg-white">
            <div className="container">
                {/* First Row: Title and Text */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Left: Title */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            From a Simple Idea to Your Trusted Partner
                        </h2>
                    </div>

                    {/* Right: Text Paragraph */}
                    <div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            A journey of a thousand miles begins with a single step. Let this video be your first. See firsthand how <b>Business Venture Canada</b> transforms complex immigration and business landscapes into clear, actionable pathways. Watch as we guide ambitious entrepreneurs and investors like you through the process of turning a vision for a new life into a thriving reality in Canada, the USA, and beyond. This isn't just about paperwork; it's about people, potential, and prosperity.
                        </p>
                    </div>
                </div>

                {/* Second Row: Video Section */}
                <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* Video/Image Placeholder */}
                        <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-br from-gray-100 to-gray-200">
                            {/* Team Image Placeholder - You can replace this with actual image */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-sm">Team Image</p>
                                </div>
                            </div>

                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg">
                                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Subtle overlay for better button visibility */}
                            <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"></div>
                    <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-primary/10 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}

export default Story