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


import nlBanner from "@/public/images/services/canada/nlpnp/nl-banner.png";
import nlInvestor from "@/public/images/services/canada/nlpnp/nl-investor.png";

const NlpnpPage = () => {
    return (
        <>
            <Banner
                title="NLPNP International Entrepreneur Category Business Plan."
                breadcrumb="Canada Immigration / Newfoundland & Labrador Provincial Nominee Program (NLPNP) Business Plan."
            />

            <Section2
                title='Your Gateway to Business in Newfoundland & Labrador'
                p1="The Newfoundland & Labrador Provincial Nominee Program (NLPNP) International Entrepreneur Category is designed for experienced businesspeople who will actively manage a business that addresses specific economic and community needs in this distinct province. Your business plan must be more than a proposal; it must be a compelling argument for how your venture will contribute to the long-term vitality and diversification of the NL economy."
                p2="We develop NLPNP-specific business plans that are deeply rooted in the province's unique opportunities and challenges. Our research focuses on NL's priority sectors, demographic trends, and the critical importance of community integration, ensuring your application demonstrates a genuine commitment to becoming a business leader in Newfoundland & Labrador."
                src={nlBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                packageTitle="Comprehensive NLPNP Business Plan Package"
                packageSubtitle="A Strategic Investment for Your Newfoundland & Labrador Application"
                includedFeatures={[
                    "Executive Summary tailored to NL's economic diversification goals and your community impact",
                    "Detailed Company Description & Legal Structure for a Newfoundland & Labrador business",
                    "Newfoundland & Labrador-Specific Market Analysis (e.g., ocean technology, aquaculture, tourism, tech)",
                    "Job Creation & Retention Plan for Newfoundlanders and Labradorians",
                    "Marketing & Operations Strategy for the isolated and seasonal NL market",
                    "5-Year Financial Projections (Income Statements, Cash Flow) realistic for the provincial economy",
                    "Settlement & Community Integration Plan outlining your active role in the local community",
                    "Two rounds of revisions"
                ]}
                whatIncludedTitle="What's Included in Your NLPNP Plan"
                whatIncludedSubtitle="Designed for the Unique NLPNP Evaluation Criteria"
                whatIncludedFeatures={[
                    "NLPNP Compliance: Meticulously addressing all factors of the program's scorecard and guidelines",
                    "Economic Diversification Focus: Clearly demonstrating how your business reduces reliance on traditional sectors",
                    "Community Impact Assessment: Showcasing the benefit your business brings to a specific community in NL",
                    "Management & Residency Plan: Outlining your relevant experience and firm intention to reside and manage the business day-to-day in NL",
                    "Investment Analysis: A transparent breakdown of your investment, its use, and its economic multiplier effect in the province",
                    "Professional Formatting & Design: A high-quality, persuasive document for NLPNP officials"
                ]}
                processTitle="Our Collaborative NLPNP Process"
                processSubtitle="5 Key Steps to Your Newfoundland & Labrador Nomination"
                processSteps={[
                    "Discover: In-depth consultation to understand your business concept and its fit within Newfoundland & Labrador's communities.",
                    "Research & Analyze: Our experts conduct targeted research on NL's economy, your specific sector, and regional opportunities.",
                    "Develop & Draft: We create the first draft of your comprehensive, community-focused business plan.",
                    "Review & Refine: We share the draft with you for feedback and make meticulous revisions to strengthen your case.",
                    "Finalize & Deliver: You receive a polished, professional, and submission-ready document for your NLPNP application."
                ]}
            />

            <Video
                title="Discover the Unique Opportunities in Newfoundland & Labrador"
                videoId="XXXXXXXXX" // Find a video specifically about business/investment in NL
            />

            <Section2
                title='Strategically Developed for the NLPNP International Entrepreneur Category'
                p1='The Newfoundland & Labrador Provincial Nominee Program is highly selective, seeking entrepreneurs who possess a genuine understanding of the province’s unique economic opportunities and challenges. A generic business plan will fail to address the specific criteria that NLPNP officers prioritize.'
                p2='At Business Venture Canada, we specialize in developing comprehensive business plans that are meticulously aligned with the NLPNP’s strategic goals:'
                p3="Economic Diversification: Proposing a business that strengthens and diversifies the provincial economy beyond its traditional mainstays. Community Commitment: Demonstrating a tangible plan to integrate into, hire from, and support a specific community in Newfoundland or Labrador. Job Creation & Retention: Providing a credible plan to create sustainable year-round jobs that help retain population and strengthen local economies."
                p4="Our targeted approach ensures your application demonstrates not just financial investment, but a genuine commitment to becoming a long-term community partner contributing to the prosperity of Newfoundland & Labrador."
                src={nlInvestor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />
            <Contact
                title="Start Your Newfoundland & Labrador Business Journey Today"
                subtitle="Have questions about the NLPNP International Entrepreneur Category and how to make a compelling case for your business? Speak directly with our Atlantic Canada immigration experts for a free consultation."
            />
        </>
    )
}

export default NlpnpPage