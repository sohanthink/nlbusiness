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

// IMPORTANT: Replace these placeholder imports with your actual Nova Scotia-specific images
import novaScotiaBanner from "@/public/images/services/canada/nsnp/ns-banner.png";
import novaScotiaInvestor from "@/public/images/services/canada/nsnp/ns-investor.png";
import Faq from '@/components/service/innerpages/Faq'

const Nsnppage = () => {
    return (
        <>
            {/* BANNER: Updated for NSNP */}
            <Banner
                title="NSNP Entrepreneur Stream Business Plan."
                breadcrumb="Canada Immigration / Nova Scotia Nominee Program (NSNP) Business Plan."
            />

            <Section2
                title='Your Strategic Blueprint for Nova Scotia Business Success.'
                p1="The Nova Scotia Nominee Program (NSNP) Entrepreneur Stream targets experienced business owners who can establish operations that contribute to the province's growing and diverse economy. Your business plan must demonstrate not just viability, but how your venture aligns with Nova Scotia's economic priorities and community needs."
                p2="We develop NSNP-specific business plans that leverage Nova Scotia's unique advantages. Our research focuses on the province's key sectors including ocean technology, digital innovation, tourism, and export opportunities, ensuring your application meets the specific criteria NSNP officers evaluate."
                src={novaScotiaBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive NSNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Nova Scotia Application"
                includedFeatures={[
                    "Executive Summary tailored to Nova Scotia's economic development goals",
                    "Detailed Company Description & Legal Structure for Nova Scotia business",
                    "Nova Scotia-Specific Market Analysis (ocean tech, digital media, tourism, export)",
                    "Job Creation Plan for Nova Scotians, aligned with NSNP requirements",
                    "Marketing & Operations Strategy for the Atlantic Canadian market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for NS economy",
                    "Settlement and Community Integration Plan",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your NSNP Plan"
                whatIncludedSubtitle="Designed to Meet Nova Scotia's Immigration Objectives"
                whatIncludedFeatures={[
                    "NSNP Compliance: Addressing all program requirements and application questions",
                    "Economic Alignment: Demonstrating how your business supports key NS sectors and regional needs",
                    "Community Impact: Showcasing how your business will benefit local communities",
                    "Management Plan: Outlining your experience and active management role in Nova Scotia",
                    "Investment Analysis: Clear breakdown of your investment and its economic impact",
                    "Professional Formatting: A polished, persuasive document for NSNP officials"
                ]}
                processTitle="Our Collaborative NSNP Process"
                processSubtitle="5 Key Steps to Your Nova Scotia Nomination"
                processSteps={[
                    "Discover: In-depth consultation on your business concept and Nova Scotia strategy",
                    "Research & Analyze: Our experts research NS economy, your target sector, and local opportunities",
                    "Develop & Draft: We create your comprehensive, requirement-specific business plan",
                    "Review & Refine: We share the draft for your feedback and make strategic revisions",
                    "Finalize & Deliver: You receive a polished, submission-ready document for your application"
                ]}
            />

            <Video
                title="Explore Business Opportunities in Nova Scotia."
                videoId="XXXXXXXXX" // Find a video about business/investment in Nova Scotia
            />

            <Section2
                title='Strategically Developed for the NSNP Entrepreneur Stream.'
                p1='The NSNP Entrepreneur Stream seeks business owners who can demonstrate both financial capability and a genuine understanding of Nova Scotia economic landscape. A generic business plan will not address the specific opportunities and challenges of operating in this dynamic province.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Nova Scotia strategic priorities:'
                p3="Economic Contribution: Proposing a business that supports key sectors like ocean technology, digital innovation, or value-added exports. Regional Development: Demonstrating how your venture will benefit specific communities across Nova Scotia. Job Creation: Providing a realistic plan for creating sustainable employment for Nova Scotians. Active Management: Outlining your hands-on role in daily operations within the province. Market Understanding: Showing deep knowledge of Nova Scotia business environment and consumer market."
                p4="With our expertise, you can submit an application that demonstrates you're not just an investor, but a committed business owner ready to contribute to Nova Scotia growing economy."
                src={novaScotiaInvestor}
                variant='right'
            />

            <Faq
                title="NSNP Entrepreneur Stream FAQs"
                subtitle="Common questions about Nova Scotia immigration business plans"
                faqs={[
                    {
                        question: "What are the financial requirements for the NSNP Entrepreneur Stream?",
                        answer: "You need a minimum net worth of CAD $600,000 and must invest at least CAD $150,000 of your own funds into a Nova Scotia business."
                    },
                    {
                        question: "Do I need to visit Nova Scotia before applying?",
                        answer: "Yes, an exploratory visit is mandatory. You must spend at least 5 business days in Nova Scotia researching your business concept."
                    },
                    {
                        question: "Why is a professional business plan important for my application?",
                        answer: "Your business plan must demonstrate economic benefit to Nova Scotia, realistic financial projections, and job creation potential. A professionally prepared plan significantly increases your chances of approval with immigration officials."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Nova Scotia Business Journey Today."
                subtitle="Have questions about the NSNP Entrepreneur Stream or how to establish your business in Nova Scotia? Speak with our Atlantic Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default Nsnppage