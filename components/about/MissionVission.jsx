import React from 'react'
import Image from 'next/image'
import mission from '@/public/images/home/about/mission.png'
import vission from '@/public/images/home/about/Vission.png'

const MissionVission = ({ variant = 'mission', title, content, image }) => {
    // Default content for mission
    const defaultMissionContent = {
        title: "Our Mission: To Pave Your Path to Success",
        content: [
            "At Business Venture Canada, our mission is to empower global entrepreneurs and investors by providing unparalleled strategic guidance and meticulous execution for business immigration. We demystify the complexities of international relocation and investment, turning formidable challenges into achievable milestones.",
            " We are dedicated to being more than consultants; we are your venture partners, committed to building a foundation for your success and ensuring your journey is seamless, secure, and strategically sound."
        ],
        image: mission
    }

    // Default content for vision
    const defaultVisionContent = {
        title: "Our Vision: Empowering Dreams, Building Futures",
        content: [
            "Our vision is a world without barriers to ambition. We aspire to be the world's most trusted catalyst for global business mobility, recognized for turning diverse dreams of immigration into tangible success stories. We see a future where every qualified entrepreneur and investor can access opportunity, contribute to growing economies, and achieve their fullest potential—and we are the architects making that vision a reality."
        ],
        image: vission
    }

    // Get content based on variant
    const getContent = () => {
        if (variant === 'vision') {
            return {
                title: title || defaultVisionContent.title,
                content: content || defaultVisionContent.content,
                image: image || defaultVisionContent.image
            }
        }
        return {
            title: title || defaultMissionContent.title,
            content: content || defaultMissionContent.content,
            image: image || defaultMissionContent.image
        }
    }

    const { title: sectionTitle, content: sectionContent, image: sectionImage } = getContent()

    return (
        <section className="section-padding bg-white">
            <div className="container">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${variant === 'vision' ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Content */}
                    <div className={`space-y-6 ${variant === 'vision' ? 'lg:order-2' : 'lg:order-1'}`}>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                            {sectionTitle}
                        </h2>
                        {Array.isArray(sectionContent) ? (
                            sectionContent.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 text-lg leading-relaxed">
                                    {paragraph}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {sectionContent}
                            </p>
                        )}
                    </div>

                    {/* Image */}
                    <div className={`${variant === 'vision' ? 'lg:order-1' : 'lg:order-2'}`}>
                        <Image src={sectionImage} alt={variant} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionVission