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

// IMPORTANT: Replace these placeholder imports with your actual Québec-specific images
import quebecBanner from "@/public/images/services/canada/quebec/qc-banner.png";
import quebecInvestor from "@/public/images/services/canada/quebec/qc-investor.png";

const QuebecEntrepreneurPage = () => {
    return (
        <>
            {/* BANNER: For Québec Entrepreneur Program */}
            <Banner
                title="Québec Entrepreneur Program Business Plan."
                breadcrumb="Canada Immigration / Québec Entrepreneur Program Business Plan."
            />

            <Section2
                title='Your Strategic Blueprint for Québec Business Success.'
                p1="The Québec Entrepreneur Program offers three distinct pathways for experienced businesspeople: starting a new business, acquiring an existing business, or launching an innovative venture. Each stream requires a business plan that demonstrates not just viability, but how your enterprise will contribute to Québec's unique economy while respecting its distinct cultural and linguistic character."
                p2="We develop Québec-specific business plans that understand the province's unique economic landscape and immigration requirements. Our expertise covers all three program streams, ensuring your application meets the specific criteria that Québec immigration officers prioritize for economic development and cultural integration."
                src={quebecBanner}
            />

            <Pricing
                startingPrice="C$ 4,500"
                daysUntilDraft="14-20 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive Québec Entrepreneur Business Plan Package."
                packageSubtitle="A Strategic Investment for Your Québec Application"
                includedFeatures={[
                    "Executive Summary tailored to Québec's economic priorities (in French & English)",
                    "Detailed Company Description & Legal Structure for Québec business compliance",
                    "Québec-Specific Market Analysis (technology, manufacturing, creative industries)",
                    "Job Creation Plan for Québec residents, aligned with program requirements",
                    "Marketing & Operations Strategy for Québec's distinct market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for Québec economy",
                    "Language and Cultural Integration Plan",
                    "Two rounds of revisions with Québec immigration compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your Québec Entrepreneur Plan."
                whatIncludedSubtitle="Designed to Meet Québec's Unique Immigration Goals"
                whatIncludedFeatures={[
                    "Program Stream Compliance: Addressing requirements for Start-up, Acquisition, or Innovative Business streams",
                    "Economic Contribution: Demonstrating how your business supports Québec's strategic sectors",
                    "Cultural Understanding: Showcasing knowledge of Québec's unique business environment",
                    "Management Expertise: Outlining your experience and active operational role in Québec",
                    "Investment Analysis: Comprehensive breakdown of investment and economic impact",
                    "Bilingual Presentation: Professional document available in French and English"
                ]}
                processTitle="Our Collaborative Québec Entrepreneur Process."
                processSubtitle="5 Key Steps to Your Québec Selection"
                processSteps={[
                    "Discover: Comprehensive consultation on your business concept and Québec strategy",
                    "Research & Analyze: Deep dive into Québec's economy, regional opportunities, and sector trends",
                    "Develop & Draft: Creation of your comprehensive, program-specific business plan",
                    "Review & Refine: Collaborative review process with strategic revisions for Québec success",
                    "Finalize & Deliver: Polished, submission-ready document optimized for Québec approval"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Québec."
                videoId="XXXXXXXXX" // Find a video about business/investment in Québec
            />

            <Section2
                title='Strategically Developed for Québec Entrepreneur Program.'
                p1='The Québec Entrepreneur Program has unique requirements that reflect the province distinct cultural and economic identity. A generic business plan will not address the specific linguistic, cultural, and economic priorities that Québec immigration authorities expect.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Québec strategic priorities:'
                p3="French Language Integration: Demonstrating commitment to Québec's official language. Cultural Adaptation: Showing understanding of Québec's unique business culture. Economic Innovation: Supporting knowledge-based and innovative industries. Regional Development: Creating opportunities outside major urban centers. Job Creation: Providing sustainable employment for Québec residents while respecting language laws."
                p4="With our expertise, you can submit an application that proves you understand and respect Québec's distinct character while demonstrating your ability to contribute to the province's economic vitality."
                src={quebecInvestor}
                variant='right'
            />

            <Step />
            <Faq
                title="Québec Entrepreneur Program FAQs."
                subtitle="Common questions about Québec immigration business plans"
                faqs={[
                    {
                        question: "What are the financial requirements for the Québec Entrepreneur Program?",
                        answer: "Requirements vary by stream: Start-up requires CAD $300,000 net worth and CAD $100,000 settlement fund; Acquisition requires CAD $900,000 net worth and CAD $300,000 business investment; Innovative Business has variable requirements based on project scope."
                    },
                    {
                        question: "Is French language proficiency required?",
                        answer: "While not always mandatory, demonstrated French language ability significantly strengthens your application. We include language integration strategies in all our Québec business plans."
                    },
                    {
                        question: "What are the three program streams?",
                        answer: "The program offers: Start-up (new business), Acquisition (purchase existing business), and Innovative Business (high-tech or innovative ventures). Each has different requirements and selection criteria."
                    },
                    {
                        question: "Why is Québec-specific business knowledge crucial?",
                        answer: "Québec has a unique civil law system, language requirements, and distinct business culture. Your business plan must demonstrate understanding of these factors and show how you'll successfully integrate into Québec's business environment."
                    }
                ]}
            />

            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Québec Business Journey Today."
                subtitle="Have questions about the Québec Entrepreneur Program streams? Speak with our Québec immigration experts for a free consultation."
            />
        </>
    )
}

export default QuebecEntrepreneurPage