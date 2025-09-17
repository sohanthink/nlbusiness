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

// IMPORTANT: Replace these placeholder imports with your actual Saskatchewan-specific images
import saskatchewanBanner from "@/public/images/services/canada/sinp/sk-banner.png";
import saskatchewanInvestor from "@/public/images/services/canada/sinp/sk-investor.png";

const Sinppage = () => {
    return (
        <>
            {/* BANNER: For SINP Entrepreneur and Farm Streams */}
            <Banner
                title="SINP Entrepreneur & Farm Stream Business Plans."
                breadcrumb="Canada Immigration / Saskatchewan Immigrant Nominee Program (SINP) Business Plan"
            />

            <Section2
                title='Your Strategic Blueprint for Saskatchewan Business Success.'
                p1="The Saskatchewan Immigrant Nominee Program (SINP) offers two distinct pathways for entrepreneurs: the Entrepreneur Category for business owners and the Farm Owner/Operator Stream for agricultural investments. Both require business plans that demonstrate not just viability, but how your venture will contribute to Saskatchewan's thriving resource-based economy and growing communities."
                p2="We develop SINP-specific business plans that understand Saskatchewan's unique economic landscape. Our research focuses on the province's key sectors including agriculture, mining, energy, manufacturing, and technology, ensuring your application meets the specific criteria SINP officers prioritize for economic development."
                src={saskatchewanBanner}
            />

            <Pricing
                startingPrice="C$ 3,600"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive SINP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Saskatchewan Application"
                includedFeatures={[
                    "Executive Summary tailored to Saskatchewan's economic priorities",
                    "Detailed Company Description & Legal Structure for SK business compliance",
                    "Saskatchewan-Specific Market Analysis (agriculture, resources, technology)",
                    "Job Creation Plan for Saskatchewan residents, aligned with SINP requirements",
                    "Marketing & Operations Strategy for prairie market dynamics",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for SK economy",
                    "Business Establishment Timeline and Community Integration Plan",
                    "Two rounds of revisions with SINP compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your SINP Plan"
                whatIncludedSubtitle="Designed to Meet Saskatchewan's Economic Development Goals"
                whatIncludedFeatures={[
                    "SINP Compliance: Addressing all program requirements and EOI scoring criteria",
                    "Economic Contribution: Demonstrating how your business supports key provincial sectors",
                    "Regional Understanding: Showcasing knowledge of Saskatchewan's business environment",
                    "Management Expertise: Outlining your experience and active operational role",
                    "Investment Analysis: Comprehensive breakdown of investment and economic impact",
                    "Professional Formatting: Investor-ready document meeting SINP standards"
                ]}
                processTitle="Our Collaborative SINP Process"
                processSubtitle="5 Key Steps to Your Saskatchewan Nomination"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and Saskatchewan strategy",
                    "Research & Analyze: Deep dive into SK's economy, regional opportunities, and sector trends",
                    "Develop & Draft: Creation of your comprehensive, points-maximizing business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for SINP success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for SINP approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Saskatchewan"
                videoId="XXXXXXXXX" // Find a video about business/investment in Saskatchewan
            />

            <Section2
                title='Strategically Developed for SINP Entrepreneur & Farm Streams'
                p1='The SINP Entrepreneur Category and Farm Owner/Operator Stream require business plans that understand Saskatchewan resource-based economy and growing diversification efforts. A generic business plan will not address the specific economic priorities of this prairie province.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Saskatchewan strategic economic priorities:'
                p3="Economic Diversification: Supporting businesses beyond traditional resource sectors. Regional Development: Creating opportunities in communities outside major urban centers. Job Creation: Providing sustainable employment in both skilled and entry-level positions. Resource Expertise: Leveraging Saskatchewan's strengths in mining, energy, and potash industries."
                p4="With our expertise, you can submit an application that proves you understand Saskatchewan's economic landscape and are ready to contribute to the province's continued growth and diversification."
                src={saskatchewanInvestor}
                variant='right'
            />

            <Faq
                title="SINP Entrepreneur & Farm Stream FAQs"
                subtitle="Common questions about Saskatchewan immigration business plans"
                faqs={[
                    {
                        question: "What are the minimum investment requirements for SINP Entrepreneur Category?",
                        answer: "Minimum investment is CAD $200,000 in Regina or Saskatoon, or CAD $150,000 in other areas. Minimum net worth required is CAD $500,000."
                    },
                    {
                        question: "What are the requirements for the Farm Owner/Operator Stream?",
                        answer: "Minimum CAD $500,000 net worth, minimum CAD $300,000 equity investment in farm, and proven farming experience. Must purchase and operate a farm in Saskatchewan."
                    },
                    {
                        question: "How does the SINP EOI system work?",
                        answer: "The Expression of Interest system scores applicants based on business experience, investment amount, net worth, business innovation, and export potential. Highest-scoring candidates receive invitations to apply."
                    },
                    {
                        question: "Why is Saskatchewan-specific business knowledge important?",
                        answer: "Saskatchewan has a unique resource-based economy with specific regional opportunities. Your business plan must demonstrate understanding of local market conditions, supply chains, and economic drivers to score highly in the EOI system."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Saskatchewan Business Journey Today."
                subtitle="Have questions about SINP Entrepreneur Category or Farm Owner/Operator Stream? Speak with our Prairie Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default Sinppage