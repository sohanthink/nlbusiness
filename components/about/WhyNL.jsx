import React from 'react'

const WhyNL = () => {
    const features = [
        {
            id: 1,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Deep Expertise",
            description: "Our team isn't just made of writers; it's a blend of MBA-level analysts and professionals with direct insight into immigration law. We understand both the business and legal landscapes."
        },
        {
            id: 2,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            ),
            title: "Unmatched Personalization",
            description: "You get a dedicated consultant and a single point of contact. No generic templates, no call centers. Every document tells your unique story with precision and care."
        },
        {
            id: 3,
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Results-Driven Approach",
            description: "Every document is built with one goal: maximizing your chance of approval. We're invested in your success because your success is our success."
        }
    ]

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                        Why Choose <span className="text-primary">NL Immigration?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We don't just write business plans – we craft success stories. Here's what sets us apart from the competition.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {features.map((feature) => (
                        <div key={feature.id} className="group">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20 h-full">
                                {/* Icon */}
                                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <div className="text-primary">
                                        {feature.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {feature.description}
                                </p>

                                {/* Decorative Element */}
                                <div className="mt-6 w-12 h-1 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 rounded-2xl p-8 md:p-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Success Story?
                        </h3>
                        <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                            Join hundreds of successful immigrants who chose NL Immigration for their business plan and immigration journey.
                        </p>
                        <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                            <span>Get Started Today</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyNL