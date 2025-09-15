import React from 'react'
import Banner from '@/components/service/innerpages/Banner'
import Section2 from '@/components/service/innerpages/Section2'


import bc from "@/public/images/services/canada/bcpnp/bcbanner.png"; // <- Create this image

import investor from "@/public/images/service/innerpages/investor.png";
import Pricing from '@/components/service/innerpages/Pricing'
import Video from '@/components/service/innerpages/Video'
import Step from '@/components/service/usimmigration/Step'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Blog from '@/components/common/Blog'
import Contact from '@/components/service/innerpages/Contact'

const Bcpnp = () => {
    return (
        <>
            {/* BANNER: Updated title and breadcrumb */}
            <Banner
                title="BC Provincial Nominee Program (BC PNP) Business Plan"
                breadcrumb="Canada Immigration / BC Provincial Nominee Program (BC PNP) Business Plan"
            />

            {/* SECTION 2: Content updated for BC PNP */}
            <Section2
                title='Your Gateway to Business Success in British Columbia'
                p1="The BC PNP Entrepreneur Immigration stream seeks experienced entrepreneurs who will actively manage a business that provides significant economic benefit to the province. Our business plans are meticulously crafted to meet the BC PNP's specific, score-based criteria, demonstrating how your investment will create jobs, support regional development, and thrive in BC's dynamic market."
                p2="We move beyond templates to conduct in-depth research on BC's regional priorities, your target industry, and local competition. We build a robust, credible, and strategic application designed to maximize your score in the BC PNP's registration system and secure an invitation to apply."
                src={bc} // Using BC image
            />

            {/* PRICING: All content updated for BC context */}
            <Pricing
                startingPrice="C$ 3,800" // Price might be adjusted for a different program
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive BC PNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your BC Application"
                includedFeatures={[
                    "Executive Summary tailored to BC PNP goals and regional priorities",
                    "Detailed Company Description & Legal Structure for BC",
                    "BC-Specific Market & Industry Analysis (e.g., Tech, Agri-tech, Green Economy)",
                    "Comprehensive Job Creation Plan for British Columbians",
                    "Marketing & Operations Strategy for the BC market",
                    "5-Year Financial Projections (Income Statements, Cash Flow, Balance Sheets)",
                    "Alignment with BC PNP's scorecard factors (e.g., investment, jobs, location)",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your BC PNP Plan"
                whatIncludedSubtitle="Engineered to Maximize Your Registration Score"
                whatIncludedFeatures={[
                    "Compliance with BC PNP Guidelines: Addressing all program-specific requirements and questions",
                    "Economic Benefit Argument: A strong section dedicated to how your business benefits a specific BC region",
                    "Regional Market Analysis: Data-driven research on your target community (e.g., Metro Vancouver, Fraser Valley, Okanagan, North)",
                    "Management Plan: Outline of your experience and active role in day-to-day management in BC",
                    "Risk Analysis & Mitigation: Showing foresight and planning to BC PNP officers",
                    "Professional Formatting & Design: A polished document that makes a powerful first impression"
                ]}
                processTitle="Our Collaborative BC PNP Process"
                processSubtitle="5 Key Steps to Your Invitation to Apply"
                processSteps={[
                    "Discover: Deep-dive consultation on your business concept, background, and BC PNP strategy.",
                    "Research & Analyze: Our experts research BC's regional economies, your specific industry, and local competition.",
                    "Develop & Draft: We create the first draft of your comprehensive, score-maximizing business plan.",
                    "Review & Refine: We share the draft with you for feedback and make strategic revisions.",
                    "Finalize & Deliver: You receive a polished, professional, and submission-ready document."
                ]}
            />

            <Video
                title="Why Choose British Columbia for Your Business"
                videoId="eoqe1xcvgx0" // Consider finding a video specifically about doing business in BC
            />

            {/* SECTION 2 (Right Variant): Content updated for BC PNP */}
            <Section2
                title='Strategically Developed for the BC PNP Entrepreneur Stream'
                p1='The BC PNP is a competitive, points-based system. A generic business plan will not score highly. At Business Venture Canada, our team includes specialists who understand the nuances of the British Columbia economy, regional priorities, and the exact expectations of BC PNP officers.'
                p2='We address every critical element of the program to strengthen your application:'
                p3="Investment & Ownership: Clearly justifying your investment amount and personal equity percentage, as required. Economic Benefit: Articulating how your business aligns with BC's economic priorities (e.g., innovation, exports, regional development). Job Creation: Providing a detailed and credible plan for creating new permanent jobs for Canadians/PRs in BC. Active Management: Demonstrating your plan to actively manage the business from within BC. Business Viability: Building a rock-solid case with realistic financial projections tailored to the BC market."
                p4="With our support, you can confidently present a business plan that proves you are a high-value candidate ready to contribute to British Columbia's future."
                src={investor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            {/* CONTACT: Updated for BC PNP */}
            <Contact
                title="Start Your British Columbia Business Journey Today"
                subtitle="Have questions about the BC PNP stream? Want to strategize on how to maximize your points? Speak directly with our BC immigration business plan experts for a free consultation."
            />
        </>
    )
}

export default Bcpnp