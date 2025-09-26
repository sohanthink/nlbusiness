import React from 'react'
import Banner from '@/components/service/innerpages/Banner'
import Section2 from '@/components/service/innerpages/Section2'
import Pricing from '@/components/service/innerpages/Pricing'
import Video from '@/components/service/innerpages/Video'
import Step from '@/components/service/usimmigration/Step'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Blog from '@/components/common/Blog'
import Contact from '@/components/service/innerpages/Contact'
import Faq from '@/components/service/innerpages/Faq'

// Suggested images for Franchisor Business Plan
import franchisorBanner from "@/public/images/services/small-business/franchisor/franchisor-master/franchisor-banner.png";
import franchisorStrategy from "@/public/images/services/small-business/franchisor/franchisor-master/franchisor-strategy.png";

const FranchisorPage = () => {
    return (
        <>
            {/* BANNER: For Franchisor Master Business Plan */}
            <Banner
                title="Franchisor Master Business Plan - Scale Your Brand Nationally"
                breadcrumb="Business Planning / Franchisor Master Business Plan"
            />

            <Section2
                title='Strategic Blueprint for Franchise Expansion Success'
                p1="Expanding your business through franchising requires a comprehensive master plan that demonstrates scalability, operational excellence, and long-term profitability. Your franchisor business plan must convince potential franchisees, investors, and regulatory bodies that your franchise model is proven, replicable, and financially sound."
                p2="We develop sophisticated franchisor business plans that address the unique requirements of franchise expansion. Our expertise covers franchise disclosure documents (FDD), territory analysis, franchisee support systems, and growth strategies that align with your brand's vision and market opportunities."
                src={franchisorBanner}
            />

            <Pricing
                startingPrice="C$ 4,500"
                daysUntilDraft="15-20 business days"
                rushServiceText="Rush service available for franchise expos"
                numberOfPages="40-60+ pages"
                packageTitle="Comprehensive Franchisor Master Business Plan Package"
                packageSubtitle="Your Strategic Roadmap for Successful Franchise Expansion"
                includedFeatures={[
                    "Executive Summary tailored for investors and franchise prospects",
                    "Detailed Franchise Concept & Brand Positioning Analysis",
                    "Market Analysis for Multi-Territory Expansion Strategy",
                    "Franchise System Development & Operations Manual Outline",
                    "Financial Projections (5-Year P&L, Cash Flow, Balance Sheet)",
                    "Franchisee Support & Training Program Structure",
                    "Marketing & Lead Generation Strategy for Franchise Sales",
                    "Legal Compliance & Franchise Disclosure Document (FDD) Guidance",
                    "Three rounds of revisions with franchise expertise"
                ]}
                whatIncludedTitle="What's Included in Your Franchisor Plan"
                whatIncludedSubtitle="Designed for Franchise System Success"
                whatIncludedFeatures={[
                    "Franchise Model Development: Proven systems for replication",
                    "Territory Analysis: Strategic market selection and expansion sequencing",
                    "Financial Modeling: Royalty structures, franchise fees, and unit economics",
                    "Operations Manual Framework: Standardized processes for consistency",
                    "Franchisee Recruitment Strategy: Attracting qualified candidates",
                    "Risk Assessment: Mitigation strategies for franchise system challenges"
                ]}
                processTitle="Our Franchisor Business Plan Process"
                processSubtitle="6 Key Steps to Franchise System Excellence"
                processSteps={[
                    "Brand Assessment: Comprehensive analysis of your franchise readiness",
                    "Market Research: Territory analysis and competitive landscape",
                    "System Development: Creating scalable operational frameworks",
                    "Financial Modeling: Royalty structures and unit economics",
                    "Document Creation: Developing comprehensive franchise documents",
                    "Implementation Strategy: Launch timeline and franchisee support systems"
                ]}
            />

            <Video
                title="Mastering Franchise Expansion Strategies"
                videoId="XXXXXXXXX" // Find a video about franchising success stories
            />

            <Section2
                title='Professionally Crafted for Franchise System Success'
                p1='A franchisor business plan requires specialized knowledge of franchise regulations, unit economics, and multi-location management. Generic business plans fail to address the unique challenges of franchise system development and expansion.'
                p2='Our franchisor plans are built on industry best practices and include:'
                p3="Proven Franchise Models: Systems that have been successfully replicated across multiple markets. Royalty Structure Optimization: Balanced pricing that benefits both franchisor and franchisees. Training Program Development: Comprehensive systems for franchisee success. Marketing Fund Management: Strategies for brand development and local marketing support. Technology Infrastructure: Systems for multi-unit operations and performance monitoring."
                p4="With our franchise expertise, you'll have a plan that demonstrates to investors and potential franchisees that your concept is ready for successful national expansion."
                src={franchisorStrategy}
                variant='right'
            />

            <Faq
                title="Franchisor Business Plan FAQs"
                subtitle="Common questions about franchise expansion planning"
                faqs={[
                    {
                        question: "What should a franchisor business plan include that's different from a regular business plan?",
                        answer: "It must include franchise-specific elements like royalty structures, franchise disclosure requirements, territory exclusivity terms, franchisee training programs, multi-unit financial projections, and franchise system operational standards."
                    },
                    {
                        question: "How many franchise units should I project in my business plan?",
                        answer: "Typically, we project conservative growth of 3-5 units in year one, 8-12 in year two, and 15-20 by year three, adjusted based on your industry, capital, and market conditions."
                    },
                    {
                        question: "Do I need legal documents along with the business plan?",
                        answer: "While we provide FDD guidance and framework, you'll need franchise legal counsel to prepare binding legal documents. We coordinate with your legal team to ensure alignment."
                    },
                    {
                        question: "How do you determine optimal franchise fees and royalty rates?",
                        answer: "We analyze industry benchmarks, your support costs, market positioning, and competitive landscape to recommend fees that attract quality franchisees while ensuring system profitability."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Franchise Your Business?"
                subtitle="Speak with our franchise development experts to create a master plan that positions your brand for successful national expansion."
            />
        </>
    )
}

export default FranchisorPage