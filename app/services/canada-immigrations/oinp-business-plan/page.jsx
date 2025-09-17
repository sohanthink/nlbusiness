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

import ontarioBanner from "@/public/images/services/canada/oinp/on-banner.png";
import ontarioInvestor from "@/public/images/services/canada/oinp/on-investor.png";

const Oinppage = () => {
    return (
        <>
            {/* BANNER: For OINP Entrepreneur Stream */}
            <Banner
                title="OINP Entrepreneur Stream Business Plan"
                breadcrumb="Canada Immigration / Ontario Immigrant Nominee Program (OINP) Business Plan"
            />

            <Section2
                title='Your Strategic Blueprint for Ontario Business Success'
                p1="The Ontario Immigrant Nominee Program (OINP) Entrepreneur Stream targets experienced business leaders who can establish or purchase a business in Ontario that will drive economic growth and create jobs in Canada's largest provincial economy. Your business plan must demonstrate not just viability, but how your venture will significantly contribute to Ontario's diverse and competitive market."
                p2="We develop OINP-specific business plans that leverage Ontario's economic strengths. Our research focuses on the province's key sectors including technology, advanced manufacturing, life sciences, and financial services, ensuring your application meets the high standards OINP officers expect from successful applicants."
                src={ontarioBanner}
            />

            <Pricing
                startingPrice="C$ 4,200"
                daysUntilDraft="12-18 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive OINP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Ontario Application"
                includedFeatures={[
                    "Executive Summary tailored to Ontario's economic development priorities",
                    "Detailed Company Description & Legal Structure for Ontario business compliance",
                    "Ontario-Specific Market Analysis (tech, manufacturing, life sciences, financial services)",
                    "Job Creation Plan for Ontarians, aligned with OINP requirements",
                    "Marketing & Operations Strategy for the competitive Ontario market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for Ontario's economy",
                    "Business Implementation Timeline and Settlement Plan",
                    "Two rounds of revisions with OINP compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your OINP Plan"
                whatIncludedSubtitle="Designed to Meet Ontario's High Immigration Standards"
                whatIncludedFeatures={[
                    "OINP Compliance: Addressing all program requirements and scoring criteria",
                    "Economic Impact Analysis: Demonstrating how your business contributes to Ontario's GDP",
                    "Market Differentiation: Showcasing competitive advantages in Ontario's dense market",
                    "Management Excellence: Outlining your executive experience and active management role",
                    "Investment Validation: Comprehensive breakdown of investment and economic impact",
                    "Professional Presentation: Investor-grade document meeting OINP standards"
                ]}
                processTitle="Our Collaborative OINP Process"
                processSubtitle="5 Key Steps to Your Ontario Nomination"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and Ontario market strategy",
                    "Research & Analyze: Deep dive into Ontario's economy, your specific sector, and regional opportunities",
                    "Develop & Draft: Creation of your comprehensive, points-maximizing business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for OINP success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for OINP approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Ontario"
                videoId="XXXXXXXXX" // Find a video about business/investment in Ontario
            />

            <Section2
                title='Strategically Developed for the OINP Entrepreneur Stream'
                p1='The OINP Entrepreneur Stream is highly competitive and seeks established business owners who can demonstrate significant economic impact in Ontario diverse economy. A generic business plan will not address the sophisticated requirements of Canada largest provincial market.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Ontario strategic economic priorities:'
                p3="Economic Impact: Proposing a business that generates significant revenue and contributes to Ontario's knowledge economy. Job Creation: Providing a substantial plan for creating permanent, high-quality jobs for Ontarians. Investment Scale: Demonstrating meaningful capital investment that aligns with Ontario's market requirements. Innovation Focus: Showcasing how your business brings innovation to Ontario's competitive landscape. Market Expertise: Demonstrating deep understanding of Ontario's business environment and consumer demographics."
                p4="With our expertise, you can submit an application that proves you're not just an investor, but a serious business leader ready to make a significant impact in Ontario's dynamic economy."
                src={ontarioInvestor}
                variant='right'
            />

            <Faq
                title="OINP Entrepreneur Stream FAQs"
                subtitle="Common questions about Ontario immigration business plans"
                faqs={[
                    {
                        question: "What are the minimum investment requirements for the OINP Entrepreneur Stream?",
                        answer: "Minimum investment requirements vary: CAD $200,000 if business is inside GTA, CAD $200,000 if outside GTA, or CAD $200,000 if in ICT/digital communications sector anywhere in Ontario."
                    },
                    {
                        question: "What net worth is required for the OINP program?",
                        answer: "Minimum net worth requirements: CAD $800,000 if business inside GTA, CAD $400,000 if outside GTA, or CAD $400,000 if in ICT/digital communications sector anywhere in Ontario."
                    },
                    {
                        question: "How many jobs must I create for Ontarians?",
                        answer: "You must create at least two permanent full-time jobs for Canadian citizens or permanent residents if your business is inside GTA, or one job if outside GTA."
                    },
                    {
                        question: "Why is Ontario-specific business planning crucial?",
                        answer: "Ontario has Canada's most competitive market. Your business plan must demonstrate deep understanding of local market conditions, competition, and economic opportunities to stand out in the selection process."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Ontario Business Journey Today"
                subtitle="Have questions about the OINP Entrepreneur Stream or how to establish your business in Ontario? Speak with our Ontario immigration experts for a free consultation."
            />
        </>
    )
}

export default Oinppage