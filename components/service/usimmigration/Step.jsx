import React from 'react'

const Step = () => {
    const steps = [
        {
            id: 1,
            stepId: "STEP_01",
            title: "Discover & Strategize",
            description: "We dive deep into your objectives, whether for immigration or business growth. We then outline the optimal strategy and provide a clear project plan and timeline."
        },
        {
            id: 2,
            stepId: "STEP_02",
            title: "Analyze & Develop",
            description: "Our experts conduct thorough market research and financial modeling. We draft your plan and engage in a collaborative review process, refining every detail with your input."
        },
        {
            id: 3,
            stepId: "STEP_03",
            title: "Finalize & Empower",
            description: "We deliver a polished, professional, and powerful final document. You are equipped with a strategic tool to achieve your goal—be it visa approval, investment, or successful market entry."
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
                        A Collaborative and Transparent Process
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