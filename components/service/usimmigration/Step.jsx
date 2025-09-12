import React from 'react'

const Step = () => {
    const steps = [
        {
            id: 1,
            stepId: "STEP_01",
            title: "Strategy & Onboarding",
            description: "It all starts with a conversation. We’ll discuss your vision during a free consultation to ensure we're the perfect fit. Once ready, we formalize your journey with a clear agreement and provide a detailed questionnaire to capture your unique story."
        },
        {
            id: 2,
            stepId: "STEP_02",
            title: "Expert Drafting & Collaboration",
            description: "This is where our expertise comes to life. Our specialists craft your compelling business plan and supporting documents. You’ll receive the first draft for your review, and we work closely with you to refine every detail until it perfectly represents your vision."
        },
        {
            id: 3,
            stepId: "STEP_03",
            title: "Finalization & Submission Ready",
            description: "With your approval on the final draft, we deliver a polished, professional, and print-ready document package. You receive everything you need to confidently submit a strong application to immigration authorities, putting you on the path to approval."
        }
    ];

    return (
        <section className="relative section-padding bg-white overflow-hidden">
            {/* Background World Map Overlay */}
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-50"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Main Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
                        Our Step-By-Step Approach
                    </h2>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Progression Line */}
                    <div className="absolute top-18 left-0 right-0 h-0.5 bg-gray-200/60 z-0"></div>

                    {/* Purple Markers on Line */}
                    <div className="absolute top-17 left-[15%] w-3 h-3 bg-purple-600 rounded-full border-2 border-purple-300 z-50 transform -translate-x-1/2"></div>
                    <div className="absolute top-17 left-1/2 w-3 h-3 bg-purple-600 rounded-full border-2 border-purple-300 z-50 transform -translate-x-1/2"></div>
                    <div className="absolute top-17 left-[85%] w-3 h-3 bg-purple-600 rounded-full border-2 border-purple-300 z-50 transform -translate-x-1/2"></div>

                    {/* Steps Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-20 py-5 md:py-8">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative text-center">
                                {/* Step Identifier */}
                                <div className="mb-4">
                                    <span className="text-sm font-semibold text-purple-900">
                                        {step.stepId}
                                    </span>
                                </div>

                                {/* Large Faded Number Background */}
                                <div className="relative mb-6">
                                    <div className="text-8xl md:text-9xl font-bold text-gray-200 absolute inset-0 flex items-center justify-center -z-10">
                                        {String(step.id).padStart(2, '0')}
                                    </div>
                                </div>

                                {/* Step Title */}
                                <div className="mb-4">
                                    <h3 className="text-xl md:text-2xl font-bold text-purple-900">
                                        {step.title}
                                    </h3>
                                </div>

                                {/* Step Description */}
                                <div className="max-w-xs mx-auto">
                                    <p className="text-gray-700 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Step