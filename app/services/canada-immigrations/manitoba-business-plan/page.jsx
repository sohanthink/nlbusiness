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

// IMPORTANT: Replace these placeholder imports with your actual Manitoba-specific images
import manitobaBanner from "@/public/images/services/canada/manitoba/mb-banner.png";
import manitobaInvestor from "@/public/images/services/canada/manitoba/mb-investor.png";

const Mpnppage = () => {
    return (
        <>
            {/* BANNER: Updated for MPNP */}
            <Banner
                title="MPNP Business Investor Stream Business Plan"
                breadcrumb="Canada Immigration / Manitoba Provincial Nominee Program (MPNP) Business Plan"
            />

            {/* SECTION 2: Content updated for MPNP - Focus on Exploratory Visit and "Prairie Advantage" */}
            <Section2
                title='Your Strategic Plan for Manitoba Business Success'
                p1="The Manitoba Provincial Nominee Program (MPNP) Business Investor Stream has a unique pathway, including an Exploratory Visit to the province. Your business plan is not just a document for immigration; it's the strategic foundation for that visit and your eventual application. It must demonstrate a viable business that will contribute to Manitoba's diverse and thriving economy."
                p2="We develop MPNP-specific plans that go beyond templates. Our research focuses on Manitoba's key economic sectors, regional opportunities outside Winnipeg, and the specific criteria MPNP officers look for—such as economic benefit, job creation, and feasibility in the Manitoba context."
                src={manitobaBanner}
            />

            {/* PRICING: All content updated for MPNP context */}
            <Pricing
                startingPrice="C$ 3,600"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive MPNP Business Plan Package"
                packageSubtitle="Invest in a Plan Built for Manitoba's Economy"
                includedFeatures={[
                    "Executive Summary tailored to MPNP and Manitoba's economic goals",
                    "Detailed Company Description & Legal Structure for Manitoba",
                    "Manitoba-Specific Market & Industry Analysis (e.g., manufacturing, agri-food, ICT)",
                    "Job Creation Plan for Manitobans, aligned with MPNP requirements",
                    "Marketing & Operations Strategy for the Manitoba market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for Manitoba",
                    "Strategic section to support your mandatory Exploratory Visit",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your MPNP Plan"
                whatIncludedSubtitle="Addressing the Core Principles of the MPNP Stream"
                whatIncludedFeatures={[
                    "MPNP Compliance: Ensuring your plan addresses all factors of the MPNP scorecard",
                    "Exploratory Visit Support: Guidance on how to use your plan to conduct effective meetings and research in Manitoba",
                    "Regional Focus: Highlighting opportunities in specific regions (e.g., Central Plains, Parkland) if applicable",
                    "Management Plan: Outlining your relevant experience and active management role in Manitoba",
                    "Investment Justification: A clear breakdown of your investment and its impact on the local economy",
                    "Professional Formatting & Design: A polished, persuasive document for MPNP officials and potential partners"
                ]}
                processTitle="Our Collaborative MPNP Process"
                processSubtitle="5 Key Steps to Your Manitoba Nomination"
                processSteps={[
                    "Discover: Deep-dive consultation on your concept, background, and MPNP strategy, including Exploratory Visit plans.",
                    "Research & Analyze: Our experts research Manitoba's economy, your target sector, and regional opportunities.",
                    "Develop & Draft: We create the first draft of your comprehensive, score-maximizing business plan.",
                    "Review & Refine: We share the draft with you for feedback and make strategic revisions.",
                    "Finalize & Deliver: You receive a polished, professional, and submission-ready document for your MPNP application."
                ]}
            />

            <Video
                title="Discover the Opportunities in Manitoba"
                videoId="eoqe1xcvgx0" // Find a video specifically about business/investment in Manitoba
            />

            {/* SECTION 2 (Right Variant): Content updated for MPNP - Focus on the pathway and scorecard */}
            <Section2
                title='Strategically Developed for the MPNP Business Investor Stream'
                p1='The MPNP Business Investor Stream uses a unique EOI-based system with a mandatory Exploratory Visit. Your business plan is a critical tool throughout this entire process, from planning your visit to submitting your final application. A generic plan will fail to address Manitoba-specific economic drivers and the program’s detailed scorecard.'
                p2='At Business Venture Canada, we specialize in crafting plans that directly speak to the MPNP’s criteria:'
                p3="Pathway to PR: Clearly outlining your business concept and its alignment with your Exploratory Visit findings. Economic Priorities: Demonstrating how your business supports key Manitoba sectors like manufacturing, agri-food, or information and communication technology. Regional Development: Showcasing the benefit of investing in communities outside of Winnipeg, if applicable. Job Creation: Providing a detailed and credible plan for creating sustainable jobs for Manitobans. Investment & Ownership: Justifying your investment amount and personal equity contribution as required by the stream."
                p4="With our targeted support, you can confidently navigate the MPNP process with a business plan that proves you are a serious investor prepared to build a successful future in Manitoba."
                src={manitobaInvestor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            {/* CONTACT: Updated for MPNP */}
            <Contact
                title="Start Your Manitoba Business Journey Today"
                subtitle="Have questions about the MPNP Business Investor Stream or the Exploratory Visit? Speak directly with our Manitoba immigration experts for a free consultation to discuss your business idea and strategy."
            />
        </>
    )
}

export default Mpnppage