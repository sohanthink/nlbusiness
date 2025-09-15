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

import newBrunswickBanner from "@/public/images/services/canada/new-brunswick/nb-banner.png";
import newBrunswickInvestor from "@/public/images/services/canada/new-brunswick/nb-investor.png"; // Example: A professional in a key NB industry

const NbpnpPage = () => {
    return (
        <>
            <Banner
                title="NBPNP Entrepreneurial Stream Business Plan"
                breadcrumb="Canada Immigration / New Brunswick Provincial Nominee Program (NBPNP) Business Plan"
            />

            <Section2
                title='Your Strategic Blueprint for New Brunswick Business Success'
                p1="The New Brunswick Provincial Nominee Program (NBPNP) Entrepreneurial Stream seeks to attract entrepreneurs who will establish a business that aligns with the province's economic priorities and who have a genuine intention to reside in New Brunswick. Your business plan is the primary tool to demonstrate this commitment and the viability of your venture within the local market."
                p2="We create NBPNP-specific business plans that are deeply researched and strategically crafted. Our focus is on New Brunswick's key growth sectors, demographic needs, and the specific factors that NBPNP officers evaluate, ensuring your application stands out by showing a clear understanding of the province's unique opportunities."
                src={newBrunswickBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive NBPNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your New Brunswick Application"
                includedFeatures={[
                    "Executive Summary tailored to NBPNP's economic goals and your connection to NB",
                    "Detailed Company Description & Legal Structure for a New Brunswick business",
                    "New Brunswick-Specific Market & Industry Analysis (e.g., cybersecurity, forestry, ocean tech)",
                    "Job Creation Plan for New Brunswickers, aligned with NBPNP requirements",
                    "Marketing & Operations Strategy for the Atlantic Canadian market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for NB",
                    "Settlement Plan section outlining your intention to reside in the province",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your NBPNP Plan"
                whatIncludedSubtitle="Designed to Meet the Core Requirements of the Stream"
                whatIncludedFeatures={[
                    "NBPNP Compliance: Ensuring your plan addresses all program criteria and application questions",
                    "Connection to NB: A compelling narrative demonstrating your knowledge of and commitment to New Brunswick",
                    "Economic Alignment: Showcasing how your business supports key NB sectors and addresses local needs",
                    "Management Plan: Outlining your relevant experience and active, day-to-day management role in NB",
                    "Investment Justification: A clear breakdown of your investment and its economic impact in the community",
                    "Professional Formatting & Design: A polished, persuasive document for NBPNP officials"
                ]}
                processTitle="Our Collaborative NBPNP Process"
                processSubtitle="5 Key Steps to Your New Brunswick Nomination"
                processSteps={[
                    "Discover: In-depth consultation on your business concept, background, and strategy for connecting to NB.",
                    "Research & Analyze: Our experts research New Brunswick's economy, your target sector, and local community needs.",
                    "Develop & Draft: We create the first draft of your comprehensive, requirement-specific business plan.",
                    "Review & Refine: We share the draft with you for feedback and make meticulous revisions.",
                    "Finalize & Deliver: You receive a polished, professional, and submission-ready document for your NBPNP application."
                ]}
            />

            <Video
                title="Explore the Opportunities in New Brunswick"
                videoId="XXXXXXXXX" // Find a video specifically about business/investment in New Brunswick
            />

            <Section2
                title='Strategically Developed for the NBPNP Entrepreneurial Stream'
                p1='The NBPNP Entrepreneurial Stream places a strong emphasis on the applicant’s connection to New Brunswick and the business’s alignment with provincial economic needs. A generic business plan will not sufficiently address these critical, province-specific factors.'
                p2='At Business Venture Canada, we specialize in developing plans that are precisely calibrated to the NBPNP’s framework:'
                p3="Provincial Connection: Articulating a genuine intention to settle in New Brunswick and contribute to the community. Economic Contribution: Demonstrating how your business will support key sectors such as information technology, advanced manufacturing, or value-added agriculture. Job Creation: Providing a detailed and realistic plan for creating sustainable employment for New Brunswickers. Investment & Viability: Justifying your investment amount with a clear financial model that proves long-term sustainability in the NB market. Active Management: Outlining your plan to actively manage the business on a daily basis from within the province."
                p4="With our expertise, you can submit an application that convincingly demonstrates you are not just an investor, but a future community member committed to New Brunswick’s growth and prosperity."
                src={newBrunswickInvestor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your New Brunswick Business Journey Today"
                subtitle="Have questions about the NBPNP Entrepreneurial Stream or how to establish a connection to the province? Speak directly with our Atlantic Canada immigration experts for a free consultation to discuss your vision."
            />
        </>
    )
}

export default NbpnpPage