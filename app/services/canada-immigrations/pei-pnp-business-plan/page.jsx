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

// IMPORTANT: Replace these placeholder imports with your actual PEI-specific images
import peiBanner from "@/public/images/services/canada/peipnp/pei-banner.png";
import peiInvestor from "@/public/images/services/canada/peipnp/pei-investor.png";

const Peipnppage = () => {
    return (
        <>
            {/* BANNER: For PEI PNP Business Impact Category */}
            <Banner
                title="PEI PNP Business Impact Category Business Plan"
                breadcrumb="Canada Immigration / Prince Edward Island Provincial Nominee Program (PEI PNP) Business Plan"
            />

            <Section2
                title='Your Strategic Blueprint for Prince Edward Island Business Success'
                p1="The Prince Edward Island Provincial Nominee Program (PEI PNP) Business Impact Category seeks entrepreneurs who can establish businesses that contribute to the island's economic growth and community development. Your business plan must demonstrate not just viability, but how your venture will make a meaningful impact on PEI's unique island economy and tight-knit communities."
                p2="We develop PEI PNP-specific business plans that understand the island's special economic character. Our research focuses on PEI's key sectors including tourism, agriculture, fisheries, technology, and renewable energy, ensuring your application meets the specific community-focused criteria PEI immigration officers prioritize."
                src={peiBanner}
            />

            <Pricing
                startingPrice="C$ 3,400"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive PEI PNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Island Business Application"
                includedFeatures={[
                    "Executive Summary tailored to PEI's economic development goals",
                    "Detailed Company Description & Legal Structure for PEI business compliance",
                    "PEI-Specific Market Analysis (tourism, agriculture, fisheries, technology)",
                    "Community Impact Plan showing benefits to Island residents",
                    "Marketing & Operations Strategy for PEI's seasonal economy",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for island economy",
                    "Settlement and Community Integration Plan for island life",
                    "Two rounds of revisions with PEI PNP compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your PEI PNP Plan"
                whatIncludedSubtitle="Designed to Meet PEI's Community-Focused Immigration Goals"
                whatIncludedFeatures={[
                    "PEI PNP Compliance: Addressing all program requirements and expression of interest criteria",
                    "Community Impact Focus: Demonstrating how your business benefits local Island communities",
                    "Island Market Understanding: Showcasing knowledge of PEI's unique economic character",
                    "Management Commitment: Outlining your experience and active community involvement plan",
                    "Investment Validation: Clear breakdown of investment and local economic impact",
                    "Professional Presentation: Comprehensive document meeting PEI PNP standards"
                ]}
                processTitle="Our Collaborative PEI PNP Process"
                processSubtitle="5 Key Steps to Your Prince Edward Island Nomination"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and PEI community strategy",
                    "Research & Analyze: Deep dive into PEI's economy, seasonal patterns, and community needs",
                    "Develop & Draft: Creation of your comprehensive, community-focused business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for PEI success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for PEI PNP approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Prince Edward Island"
                videoId="XXXXXXXXX" // Find a video about business/investment in PEI
            />

            <Section2
                title='Strategically Developed for the PEI PNP Business Impact Category'
                p1='The PEI PNP Business Impact Category prioritizes entrepreneurs who understand the island unique economic environment and can demonstrate genuine commitment to community development. A generic business plan will not address the specific community-focused requirements of this island province.'
                p2='At Business Venture Canada, we specialize in developing plans that align with PEI strategic community priorities:'
                p3="Community Benefit: Proposing a business that addresses local needs and enhances island life. Economic Diversification: Supporting sectors beyond traditional industries to strengthen island economy. Year-Round Employment: Creating sustainable jobs that extend beyond seasonal tourism. Local Sourcing: Demonstrating commitment to using local suppliers and services. Quality of Life: Enhancing the island experience for both residents and visitors through your business offerings."
                p4="With our expertise, you can submit an application that proves you're not just an investor, but a future community member ready to contribute to Prince Edward Island's sustainable growth and unique way of life."
                src={peiInvestor}
                variant='right'
            />

            <Faq
                title="PEI PNP Business Impact Category FAQs"
                subtitle="Common questions about Prince Edward Island immigration business plans"
                faqs={[
                    {
                        question: "What are the minimum investment requirements for PEI PNP?",
                        answer: "The minimum investment is CAD $150,000 in your PEI business, and you must have a minimum personal net worth of CAD $600,000."
                    },
                    {
                        question: "Do I need to visit Prince Edward Island before applying?",
                        answer: "Yes, an exploratory visit is mandatory. You must spend time on the island researching your business concept and understanding the local community needs."
                    },
                    {
                        question: "How many jobs must I create for Island residents?",
                        answer: "You must create at least one full-time job for a Canadian citizen or permanent resident (excluding yourself and family members)."
                    },
                    {
                        question: "Why is community impact so important for PEI PNP?",
                        answer: "PEI values businesses that contribute to community development and quality of life. Your business plan must demonstrate how you'll integrate into and benefit the local island community beyond just financial investment."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Prince Edward Island Business Journey Today"
                subtitle="Have questions about the PEI PNP Business Impact Category or how to establish your business on the island? Speak with our Atlantic Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default Peipnppage