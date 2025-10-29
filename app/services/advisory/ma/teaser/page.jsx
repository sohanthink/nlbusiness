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

import teaserBanner from "@/public/images/services/advisory/ma/teaser/banner.png";
import teaserDocument from "@/public/images/services/advisory/ma/teaser/document.png";

const TeaserPage = () => {
    return (
        <>
            <Banner
                title="M&A Teaser - Your Gateway to Strategic Opportunities"
                breadcrumb="Advisory / M&A / Teaser"
            />

            <Section2
                title="Unlock Your Company' s Potential with a Professional M&A Teaser"
                p1="An M&A Teaser is your company's first impression in the mergers and acquisitions market. This concise, compelling document serves as a confidential introduction to potential buyers, highlighting your business's key strengths, financial performance, and growth opportunities without revealing sensitive details. It's the perfect tool to gauge market interest and attract serious acquirers."
                p2="Our expertly crafted teasers combine strategic storytelling with financial rigor to present your business in the most compelling light. We understand what buyers are looking for and how to position your company to maximize interest and valuation. A well-written teaser can significantly accelerate your M&A process and attract higher-quality prospects."
                src={teaserBanner}
            />

            <Pricing
                startingPrice="C$ 2,500"
                daysUntilDraft="3-5 business days"
                rushServiceText="Express service available for urgent opportunities"
                numberOfPages="8-12 Page Professional Teaser"
                packageTitle="M&A Teaser Package"
                packageSubtitle="A Compelling Introduction to Your Business for Potential Acquirers"
                includedFeatures={[
                    "Executive Summary with Key Value Propositions",
                    "Company Overview & Business Model Analysis",
                    "Financial Highlights & Growth Trajectory",
                    "Market Position & Competitive Advantages",
                    "Growth Opportunities & Strategic Initiatives",
                    "Management Team & Organizational Structure",
                    "Investment Highlights & Value Drivers",
                    "Confidentiality & Next Steps Framework"
                ]}
                whatIncludedTitle="Strategic Applications"
                whatIncludedSubtitle="Maximizing Your M&A Opportunities"
                whatIncludedFeatures={[
                    "Pre-Market Testing & Interest Gauge",
                    "Strategic Buyer Outreach Programs",
                    "Private Equity & Financial Buyer Attraction",
                    "Competitive Sale Process Initiation",
                    "Partnership & Joint Venture Opportunities",
                    "Succession Planning & Family Transfers"
                ]}
                processTitle="Our Teaser Development Process"
                processSubtitle="A Strategic 4-Step Approach to Market Positioning"
                processSteps={[
                    "Strategic Assessment: Understanding your business model, market position, and growth story.",
                    "Financial Analysis: Extracting key metrics and trends that appeal to potential buyers.",
                    "Market Positioning: Crafting compelling narratives that highlight your unique value proposition.",
                    "Document Creation: Producing a polished, professional teaser ready for market distribution."
                ]}
            />

            <Video
                title="What Makes a Successful M&A Teaser?"
                videoId="XXXXXXXXX" // Find a video about M&A teasers and market positioning
            />

            <Section2
                title="More Than a Document, It' s Your Strategic Advantage"
                p1="A professional M&A teaser is your company's calling card in the mergers and acquisitions world. It serves multiple strategic purposes: testing market appetite, attracting the right type of buyers, setting proper valuation expectations, and positioning your business for maximum competitive advantage. The quality of your teaser directly impacts the quality of interest you receive."
                p2="Think of it as your business's elevator pitch to the entire M&A market. A well-crafted teaser not only generates interest but also filters for serious, qualified buyers who understand your industry and can appreciate your company's true value. It's the foundation upon which successful transactions are built."
                src={teaserDocument}
                variant='right'
            />

            <Faq
                title="M&A Teaser FAQs"
                subtitle="Understanding the Teaser Development Process"
                faqs={[
                    {
                        question: "How is a teaser different from a full CIM (Confidential Information Memorandum)?",
                        answer: "A teaser is a high-level, 8-12 page overview designed to generate initial interest without revealing sensitive details. A CIM is a comprehensive 50-100+ page document with detailed financials, operations, and strategic information. The teaser comes first to gauge interest, then qualified buyers receive the full CIM."
                    },
                    {
                        question: "What information should be included vs. excluded in a teaser?",
                        answer: "Include: company overview, business model, key financial highlights, market position, growth opportunities, and management team. Exclude: detailed financial statements, customer lists, proprietary processes, specific revenue breakdowns, and any confidential operational details."
                    },
                    {
                        question: "How long does the teaser development process typically take?",
                        answer: "Our standard process takes 3-5 business days, including data collection, analysis, writing, and design. Rush services are available for urgent opportunities. The timeline depends on the complexity of your business and the amount of information readily available."
                    },
                    {
                        question: "Can we use the teaser for multiple purposes beyond M&A?",
                        answer: "Absolutely. A well-crafted teaser can be adapted for strategic partnerships, joint ventures, capital raising, succession planning, and even internal strategic planning. The core value proposition and positioning work translates across multiple business development activities."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Position Your Business for Maximum Market Appeal?"
                subtitle="Contact our M&A advisory team to discuss how a professional teaser can accelerate your strategic opportunities and attract the right buyers for your business."
            />
        </>
    )
}

export default TeaserPage