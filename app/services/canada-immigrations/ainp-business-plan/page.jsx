import React from 'react'
import Banner from '@/components/service/innerpages/Banner'
import Section2 from '@/components/service/innerpages/Section2'

import investor from "@/public/images/service/innerpages/investor.png";
import Pricing from '@/components/service/innerpages/Pricing'
import Video from '@/components/service/innerpages/Video'
import Step from '@/components/service/usimmigration/Step'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Blog from '@/components/common/Blog'
import Contact from '@/components/service/innerpages/Contact'

import alberta from "@/public/images/services/canada/alberta/albertabanner.png";


const Ainp = () => {
    return (
        <>
            <Banner title="Alberta Entrepreneur Stream Business Plan" breadcrumb="Canada Immigration / Alberta Immigrant Nominee Program (AINP) Business Plan." />
            <Section2
                title='Your Blueprint for Alberta Business Success'
                p1="The Alberta Immigrant Nominee Program (AINP) Entrepreneur Stream requires more than just a business idea—it demands a compelling case for your venture's economic benefit to Alberta. Our business plans are meticulously crafted to meet the AINP's specific criteria, demonstrating how your investment will create jobs, diversify the local economy, and thrive in the Alberta market."
                p2="We don't use templates. We conduct in-depth research on Alberta's economic priorities, your target industry, and local competition to build a robust, credible, and approval-ready application that speaks directly to AINP officers."
                src={alberta}
            />
            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive AINP Business Plan Package"
                packageSubtitle="Transparent Investment in Your Future"
                includedFeatures={[
                    "Executive Summary tailored to AINP goals",
                    "Detailed Company Description & Legal Structure",
                    "Alberta-Specific Market & Industry Analysis",
                    "Job Creation Plan for Albertans",
                    "Marketing & Operations Strategy for Alberta",
                    "5-Year Financial Projections (Income Statements, Cash Flow, Balance Sheets)",
                    "Documentation Review Support for your overall application",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your AINP Plan"
                whatIncludedSubtitle="Everything You Need for a Strong Application"
                whatIncludedFeatures={[
                    "Compliance with AINP Guidelines: Ensuring all AINP-specific questions are answered",
                    "Economic Benefit Argument: A strong section dedicated to how your business benefits Alberta",
                    "Local Market Analysis: Data-driven research on your specific city/region in Alberta",
                    "Management Plan: Outline of your experience and role in the business",
                    "Risk Analysis & Mitigation: Showing foresight and planning to AINP officers",
                    "Professional Formatting & Design: A document that makes a powerful first impression"
                ]}
                processTitle="Our Collaborative AINP Process"
                processSubtitle="5 Key Steps to AINP Success"
                processSteps={[
                    "Discover: Deep-dive consultation on your business concept, background, and AINP goals",
                    "Research & Analyze: Our experts research Alberta's economy, your industry, and local competition",
                    "Develop & Draft: We create the first draft of your comprehensive business plan",
                    "Review & Refine: We share the draft with you for feedback and make revisions",
                    "Finalize & Deliver: You receive a polished, professional, and print-ready document"
                ]}
            />
            <Video
                title="Learn About Our History"
                videoId="eoqe1xcvgx0"
            />
            <Section2
                title='Strategically Developed for the AINP Entrepreneur Stream'
                p1='The AINP has unique requirements focused on economic diversification, job creation, and long-term viability. A generic business plan will not suffice. At Business Venture Canada, our team includes specialists who understand the nuances of the Alberta economy and the expectations of AINP officers.'
                p2='We address every critical element of the program:'
                p3="Substantial Investment: Justifying your investment amount and its use within the Alberta business. Economic Benefit: Clearly articulating how your business meets Alberta's economic priorities. Job Creation: Providing a realistic and detailed plan for hiring Canadian citizens or permanent residents. Business Viability: Building a rock-solid case with realistic financial projections and a practical operational plan."
                p4="With our support, you can confidently present a business plan that proves you are not just investing in a business, but you are investing in Alberta's future."
                src={investor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />
            <Contact
                title="Start Your Alberta Business Journey Today"
                subtitle="Have questions about the AINP stream? Unsure of your business idea's viability? Speak directly with our Alberta immigration business plan experts for a free consultation."
            />
        </>
    )
}

export default Ainp