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

// IMPORTANT: Replace these placeholder imports with your actual Yukon-specific images
import yukonBanner from "@/public/images/services/canada/ybnp/yt-banner.png";
import yukonInvestor from "@/public/images/services/canada/ybnp/yt-investor.png";

const Ybnppage = () => {
    return (
        <>
            {/* BANNER: For YBNP */}
            <Banner
                title="Yukon Business Nominee Program (YBNP) Business Plan."
                breadcrumb="Canada Immigration / Yukon Business Nominee Program (YBNP) Business Plan."
            />

            <Section2
                title='Your Strategic Blueprint for Yukon Business Success.'
                p1="The Yukon Business Nominee Program (YBNP) seeks entrepreneurs who can establish businesses that address the unique needs of Canada's western Arctic territory while respecting its pristine environment and vibrant communities. Your business plan must demonstrate not just viability, but how your venture will contribute to Yukon's sustainable economic development and community wellbeing."
                p2="We develop YBNP-specific business plans that understand Yukon's unique northern character and economic opportunities. Our research focuses on the territory's key sectors including tourism, resource development support, northern technology, and essential services, ensuring your application meets the specific criteria YBNP officers prioritize for sustainable northern development."
                src={yukonBanner}
            />

            <Pricing
                startingPrice="C$ 3,800"
                daysUntilDraft="12-18 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive YBNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Yukon Business Application"
                includedFeatures={[
                    "Executive Summary tailored to Yukon's economic development priorities",
                    "Detailed Company Description & Legal Structure for northern business compliance",
                    "Yukon-Specific Market Analysis (tourism, resource services, northern technology)",
                    "Community Impact Plan showing benefits to Yukon communities",
                    "Marketing & Operations Strategy for remote northern markets",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for northern economy",
                    "Settlement and Community Integration Plan for Yukon living",
                    "Two rounds of revisions with YBNP compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your YBNP Plan"
                whatIncludedSubtitle="Designed to Meet Yukon's Northern Development Goals"
                whatIncludedFeatures={[
                    "YBNP Compliance: Addressing all program requirements and territory-specific criteria",
                    "Northern Economic Understanding: Demonstrating knowledge of Yukon's unique market dynamics",
                    "Community Benefit: Showcasing how your business supports northern community needs",
                    "Environmental Considerations: Addressing Yukon's pristine environment and sustainability",
                    "Investment Analysis: Comprehensive breakdown of investment and territorial economic impact",
                    "Professional Presentation: Comprehensive document meeting YBNP standards"
                ]}
                processTitle="Our Collaborative YBNP Process"
                processSubtitle="5 Key Steps to Your Yukon Nomination"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and Yukon strategy",
                    "Research & Analyze: Deep dive into Yukon's economy, community needs, and northern logistics",
                    "Develop & Draft: Creation of your comprehensive, territory-focused business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for YBNP success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for YBNP approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Yukon."
                videoId="XXXXXXXXX" // Find a video about business/investment in Yukon
            />

            <Section2
                title='Strategically Developed for the Yukon Business Nominee Program.'
                p1='The YBNP requires business plans that understand the unique opportunities and challenges of operating in Canada western Arctic. A generic business plan will not address the specific needs of Yukon communities and the territory economic priorities.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Yukon strategic priorities:'
                p3="Sustainable Tourism: Developing responsible tourism that respects Yukon's pristine environment. Community Essential Services: Addressing service gaps in Whitehorse and rural communities. Resource Support Services: Services that support responsible resource development. Northern Technology: Innovative solutions for northern challenges. Indigenous Collaboration: Opportunities for partnership with Yukon First Nations."
                p4="With our expertise, you can submit an application that demonstrates your understanding of Yukon's unique business environment and your commitment to sustainable development in the territory."
                src={yukonInvestor}
                variant='right'
            />

            <Faq
                title="Yukon Business Nominee Program FAQs."
                subtitle="Common questions about Yukon immigration business plans"
                faqs={[
                    {
                        question: "What are the minimum investment requirements for YBNP?",
                        answer: "Minimum investment of CAD $300,000 for businesses in Whitehorse, or CAD $200,000 for businesses outside Whitehorse. Minimum personal net worth of CAD $500,000 is required."
                    },
                    {
                        question: "Do I need to visit Yukon before applying?",
                        answer: "Yes, an exploratory visit is mandatory. You must spend time in the territory researching your business concept and understanding Yukon community needs."
                    },
                    {
                        question: "How many jobs must I create for Yukon residents?",
                        answer: "You must create at least one full-time job for a Canadian citizen or permanent resident, with priority given to Yukon residents and First Nations people."
                    },
                    {
                        question: "Why is understanding Yukon's environment important for YBNP?",
                        answer: "Yukon has a pristine natural environment that is crucial to its identity and tourism industry. Your business plan must demonstrate environmental responsibility and show how you'll operate sustainably in this sensitive northern ecosystem."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Yukon Business Journey Today."
                subtitle="Have questions about the YBNP or operating in Canada's western Arctic? Speak with our Northern Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default Ybnppage