import React from 'react'

const WhyChooseUs = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Global Immigration Expertise",
            description: "Our specialists possess in-depth knowledge of business immigration programs across multiple countries including Canada, USA, UK, Australia, and beyond. We stay current with changing regulations to ensure your application meets all requirements."
        },
        {
            id: 2,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-4 0H9m4 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v12m4 0V9m0 0h2m-2 0H9m2 0h2m2 12h2m-2 0V9m0 0h2" />
                </svg>
            ),
            title: "Investor-Focused Business Plans",
            description: "We develop comprehensive, market-driven business plans that satisfy immigration authorities while providing actionable roadmaps for your venture. Our financial projections are meticulously researched and defensible."
        },
        {
            id: 3,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Dedicated Strategic Partnership",
            description: "You're assigned a senior consultant who provides end-to-end guidance throughout your journey. We become an extension of your team, offering strategic insights beyond documentation to position your application for success."
        }
    ]

    return (
        <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-primary/5 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-primary/5"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-l from-primary/10 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
                        Why Global Investors Choose
                        <span className="block bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mt-2">
                            Business Venture Canada
                        </span>
                    </h2>
                    <p className="text-xl text-gray max-w-4xl mx-auto leading-relaxed">
                        We provide more than documentation—we deliver strategic immigration business solutions that
                        bridge entrepreneurship with global mobility.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={feature.id} className="group">
                            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 h-full flex flex-col relative overflow-hidden">
                                {/* Background Gradient on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/20 rounded-2xl mb-8 group-hover:from-primary/20 group-hover:to-primary/30 transition-all duration-500 relative z-10">
                                    <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-black mb-6 group-hover:text-primary transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray leading-relaxed flex-grow text-lg">
                                        {feature.description}
                                    </p>

                                    {/* Decorative Element */}
                                    <div className="mt-8 w-16 h-1.5 bg-gradient-to-r from-primary to-primary/60 rounded-full group-hover:w-20 transition-all duration-500"></div>
                                </div>

                                {/* Floating Elements */}
                                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Bottom CTA */}
                <div className="text-center mt-20">
                    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-3xl p-12 md:p-16 border border-primary/20 relative overflow-hidden">
                        {/* Background Elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/15 rounded-full blur-xl"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
                                Ready to Launch Your Global Venture?
                            </h3>
                            <p className="text-xl text-gray mb-10 max-w-3xl mx-auto leading-relaxed">
                                Join our roster of successful international entrepreneurs and investors who have
                                leveraged our expertise to turn their global ambitions into reality.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                                <button className="primary-button inline-flex items-center px-8 py-4 text-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                                    <span>Schedule Consultation</span>
                                    <svg className="w-5 h-5 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </button>
                                <button className="inline-flex items-center px-8 py-4 bg-white text-primary border-2 border-primary/30 hover:border-primary/50 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                    <span>View Our Services</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs