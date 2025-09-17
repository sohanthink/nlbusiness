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

import nwtBanner from "@/public/images/services/canada/ntnp/nwt-banner.png";
import nwtInvestor from "@/public/images/services/canada/ntnp/nwt-investor.png";

const Ntnppage = () => {
    return (
        <>
            <Banner
                title="NTNP Business Stream Business Plan."
                breadcrumb="Canada Immigration / Northwest Territories Nominee Program (NTNP) Business Plan"
            />

            <Section2
                title='Your Strategic Blueprint for Northwest Territories Business Success.'
                p1="The Northwest Territories Nominee Program (NTNP) Business Stream seeks entrepreneurs who can establish businesses that address the unique economic needs and challenges of Canada's northern territories. Your business plan must demonstrate not just viability, but how your venture will contribute to the sustainable development of remote communities and the territory's economic resilience."
                p2="We develop NTNP-specific business plans that understand the unique northern economy and remote community needs. Our research focuses on the territory's key sectors including northern tourism, resource development support services, transportation, and essential community services, ensuring your application meets the specific criteria NTNP officers prioritize for northern development."
                src={nwtBanner}
            />

            <Pricing
                startingPrice="C$ 3,800"
                daysUntilDraft="12-18 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive NTNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Northern Business Application"
                includedFeatures={[
                    "Executive Summary tailored to NWT's economic development priorities",
                    "Detailed Company Description & Legal Structure for northern business compliance",
                    "NWT-Specific Market Analysis (northern tourism, resource services, transportation)",
                    "Community Impact Plan showing benefits to northern and Indigenous communities",
                    "Marketing & Operations Strategy for remote northern markets",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for northern economy",
                    "Settlement and Community Integration Plan for northern living",
                    "Two rounds of revisions with NTNP compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your NTNP Plan"
                whatIncludedSubtitle="Designed to Meet NWT's Northern Development Goals"
                whatIncludedFeatures={[
                    "NTNP Compliance: Addressing all program requirements and northern development criteria",
                    "Northern Economic Understanding: Demonstrating knowledge of remote market dynamics",
                    "Community Benefit: Showcasing how your business supports northern community needs",
                    "Management Adaptability: Outlining your experience and readiness for northern operations",
                    "Investment Analysis: Comprehensive breakdown of investment and northern economic impact",
                    "Professional Presentation: Comprehensive document meeting NTNP standards"
                ]}
                processTitle="Our Collaborative NTNP Process"
                processSubtitle="5 Key Steps to Your Northwest Territories Nomination"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and northern strategy",
                    "Research & Analyze: Deep dive into NWT's economy, remote community needs, and northern logistics",
                    "Develop & Draft: Creation of your comprehensive, northern-focused business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for NTNP success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for NTNP approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Northwest Territories."
                videoId="XXXXXXXXX" // Find a video about business/investment in NWT
            />

            <Section2
                title='Strategically Developed for the NTNP Business Stream.'
                p1='The NTNP Business Stream requires business plans that understand the unique challenges and opportunities of operating in Canada far north. A generic business plan will not address the specific remote community needs and northern economic priorities of this territory.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Northwest Territories strategic priorities:'
                p3="Northern Community Support: Addressing essential service gaps in remote communities. Economic Resilience: Creating sustainable businesses that withstand northern challenges. Indigenous Partnership: Opportunities for collaboration with Indigenous communities. Resource Development Support: Services that support responsible resource extraction. Northern Tourism: Developing sustainable tourism that respects northern environment and culture."
                p4="With our expertise, you can submit an application that demonstrates your understanding of northern business realities and your commitment to sustainable development in the Northwest Territories."
                src={nwtInvestor}
                variant='right'
            />

            <Faq
                title="NTNP Business Stream FAQs"
                subtitle="Common questions about Northwest Territories immigration business plans"
                faqs={[
                    {
                        question: "What are the minimum investment requirements for NTNP?",
                        answer: "Minimum investment of CAD $300,000 for businesses in Yellowknife, or CAD $150,000 for businesses outside Yellowknife. Minimum personal net worth of CAD $500,000 is required."
                    },
                    {
                        question: "Do I need to visit Northwest Territories before applying?",
                        answer: "Yes, an exploratory visit is mandatory. You must spend time in the territory researching your business concept and understanding northern community needs."
                    },
                    {
                        question: "How many jobs must I create for northern residents?",
                        answer: "You must create at least one full-time job for a Canadian citizen or permanent resident, with priority given to northern and Indigenous residents."
                    },
                    {
                        question: "Why is northern business experience crucial for NTNP?",
                        answer: "The Northwest Territories has unique logistical challenges, remote community dynamics, and northern economic conditions. Your business plan must demonstrate understanding of these factors and show how you'll adapt your business model for northern success."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Northwest Territories Business Journey Today."
                subtitle="Have questions about the NTNP Business Stream or operating in Canada's north? Speak with our Northern Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default Ntnppage