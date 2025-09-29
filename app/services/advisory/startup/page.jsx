import React from 'react'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Rush from '@/components/service/Rush'
import AllImmigration from '@/components/service/usimmigration/AllImmigration' // reuseable for service listings
import Banner from '@/components/service/usimmigration/Banner'
import Popular from '@/components/service/usimmigration/Popular'
import Secret from '@/components/service/usimmigration/Secret'
import Step from '@/components/service/usimmigration/Step'
import Why from '@/components/service/usimmigration/Why'
import VisaPlan from '@/components/service/usimmigration/VisaPlan'
import PopularVisa from '@/components/service/usimmigration/PopularVisa'

// images (replace with your actual startup advisory category images)
import banner from "@/public/images/services/advisory/startup/startup-banner.png";
import secretbanner from "@/public/images/services/advisory/startup/startup-secret.png";
import popularbanner from "@/public/images/service/popular.png";
import popular1 from "@/public/images/services/advisory/startup/popular1.png";
import popular2 from "@/public/images/services/advisory/startup/popular2.png";

const StartUpAdvisory = () => {
    return (
        <>
            {/* Hero Banner */}
            <Banner
                title="Your Complete Partner for Start-Up Advisory & Business Growth."
                description="From early ideation to scaling globally, we provide expert advisory, strategic planning, and pitch support for entrepreneurs at every stage. Let us transform your vision into an investor-ready, growth-focused venture."
                src={banner}
                btnLink='#all-advisory'
                btnCn=''
                btnText='Explore Our Services'
            />

            {/* Strategic Advisory Intro */}
            <Secret
                title="Expert Guidance for Every Stage of Your Start-Up Journey"
                content="Building a successful start-up requires more than a great idea—it takes strategy, financial foresight, and market validation. Our Start-Up Advisory services cover everything from crafting pitch decks and business plans to securing investor funding and scaling internationally. With years of expertise across multiple industries, we guide founders through the complexities of fundraising, strategy, and execution—positioning your business for long-term success."
                imageSrc={secretbanner}
                imageAlt="Start-Up Advisory Services - Expert Business Growth Plans"
            />

            <Rush contactLink="/contact" />

            {/* Popular Services */}
            <Popular
                title="Explore Popular Start-Up Advisory Services"
                description="Whether you’re preparing to raise your seed round, seeking Series A investors, or entering a new market, our tailored advisory services will accelerate your success."
                card1={{
                    image: popular1,
                    title: "Pitch Deck Development",
                    description: "Investor-ready pitch decks designed to tell your story, showcase your business model, and capture funding opportunities.",
                    alt: "Pitch Deck Services",
                    href: "/services/advisory/startup/pitch-deck"
                }}
                card2={{
                    image: popular2,
                    title: "Financial Model",
                    description: "Comprehensive financial models with detailed projections, cash flow analysis, and scenario planning for startup success.",
                    alt: "Financial Forecasting",
                    href: "/services/advisory/startup/financial-model"
                }}
                centerCard={{
                    title: "Investor Business Plan",
                    description: "Professional business plans specifically designed to attract investors and secure funding for your startup.",
                    href: "/services/advisory/startup/investor-business-plan"
                }}
                backgroundImage={popularbanner}
            />

            {/* All Advisory Services Listing */}
            <AllImmigration
                title="All Start-Up Advisory Services"
                sectionId="all-advisory"
                businessPlans={[
                    {
                        id: 1,
                        title: "Financial Model",
                        description: "Comprehensive financial models with detailed projections, cash flow analysis, and scenario planning for startup success.",
                        href: "/services/advisory/startup/financial-model"
                    },
                    {
                        id: 3,
                        title: "Pitch Deck",
                        description: "Compelling pitch decks that effectively communicate your vision, market opportunity, and growth potential to investors.",
                        href: "/services/advisory/startup/pitch-deck"
                    },
                    {
                        id: 2,
                        title: "Investor Business Plan",
                        description: "Professional business plans specifically designed to attract investors and secure funding for your startup.",
                        href: "/services/advisory/startup/investor-business-plan"
                    },
                    {
                        id: 4,
                        title: "Strategic Business Plan",
                        description: "Comprehensive strategic business plans that outline your roadmap for growth, market entry, and competitive positioning.",
                        href: "/services/advisory/startup/strategic-business-plan"
                    },
                    {
                        id: 5,
                        title: "Executive Summary",
                        description: "Concise executive summaries that capture the essence of your business and attract potential investors and partners.",
                        href: "/services/advisory/startup/executive-summary"
                    },
                    {
                        id: 6,
                        title: "Capital Raise",
                        description: "Strategic guidance and support for raising capital from various sources including VCs, angels, and institutional investors.",
                        href: "/services/advisory/startup/capital-raise"
                    },
                    {
                        id: 7,
                        title: "Debt Financing",
                        description: "Expert assistance in securing debt financing through traditional lenders, alternative funding sources, and structured financing.",
                        href: "/services/advisory/startup/debt-financing"
                    }
                ]}
            />

            {/* Trust Building Sections */}
            <Testimonial />
            <Why />
            <Step />
            <Subscribe />
            <VisaPlan />
            <PopularVisa />
        </>
    )
}

export default StartUpAdvisory
