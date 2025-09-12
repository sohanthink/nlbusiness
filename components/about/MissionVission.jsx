import React from 'react'
import Image from 'next/image'
import mission from '@/public/images/home/about/mission.png'
import vission from '@/public/images/home/about/Vission.png'

const MissionVission = ({ variant = 'mission', title, content, image }) => {
    // Default content for mission
    const defaultMissionContent = {
        title: "Our Mission: To Pave Your Path to Success",
        content: [
            "Our mission is to provide unparalleled expertise and personalized support to aspiring immigrants and entrepreneurs. We are dedicated to crafting powerful, customized business plans and immigration documents that not only meet strict legal requirements but also tell your unique story compellingly.",
            "We succeed only when you do."
        ],
        image: mission
    }

    // Default content for vision
    const defaultVisionContent = {
        title: "Our Vision: Empowering Dreams, Building Futures",
        content: [
            "Our vision is to be the leading force in immigration consulting, transforming lives through exceptional service and innovative solutions. We envision a world where every dream of immigration and entrepreneurship is supported by expert guidance and unwavering commitment.",
            "Building bridges to new opportunities, one success story at a time."
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