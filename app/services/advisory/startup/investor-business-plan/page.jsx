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

// Suggested images for Investor Business Plan
import investorPlanBanner from "@/public/images/services/advisory/startup/investor-plan/banner.png";
import ventureFunding from "@/public/images/services/advisory/startup/investor-plan/invest.png";

const InvestorBusinessPlanPage = () => {
    return (
        <>
            {/* BANNER: For Investor Business Plan */}
            <Banner
                title="Investor Business Plan - Secure Funding & Partnerships"
                breadcrumb="Advisory / Investor Business Plan"
            />

            <Section2
                title='Professional Business Plans That Attract Investment'
                p1="An investor-grade business plan is fundamentally different from standard business plans. It must demonstrate not just viability, but exceptional growth potential, defensible competitive advantages, and clear exit strategies. Investors see hundreds of opportunities - your plan needs to stand out with compelling storytelling backed by rigorous financial analysis."
                p2="We specialize in creating investor-focused business plans that speak the language of venture capitalists, angel investors, and private equity firms. Our plans are designed to answer the critical questions investors ask while showcasing your venture's potential for exceptional returns."
                src={investorPlanBanner}
            />

            <Pricing
                startingPrice="C$ 4,200"
                daysUntilDraft="12-18 business days"
                rushServiceText="Rush service available for funding rounds"
                numberOfPages="30-50 pages + Executive Summary"
                packageTitle="Premium Investor Business Plan Package"
                packageSubtitle="Comprehensive Documentation for Funding Success"
                includedFeatures={[
                    "Executive Summary optimized for investor attention (2-3 pages)",
                    "Detailed Company Description with unique value proposition",
                    "Market Analysis demonstrating significant opportunity size",
                    "Competitive Landscape with defensible advantages",
                    "Go-to-Market Strategy with customer acquisition plan",
                    "Management Team profiles highlighting relevant experience",
                    "Product/Service Roadmap and development timeline",
                    "Financial Projections (5-year detailed P&L, Cash Flow, Balance Sheet)",
                    "Use of Funds breakdown and capital allocation strategy",
                    "Exit Strategy with multiple scenarios and timelines",
                    "Risk Analysis with mitigation strategies",
                    "Two rounds of revisions with investor perspective feedback"
                ]}
                whatIncludedTitle="What Makes Our Investor Plans Different"
                whatIncludedSubtitle="Designed Specifically for Investment Audiences"
                whatIncludedFeatures={[
                    "Investor Psychology: Understanding what different investor types look for",
                    "Return Focus: Clear demonstration of ROI potential and exit multiples",
                    "Scalability Emphasis: Showing potential for rapid growth and market capture",
                    "Team Credibility: Highlighting management's ability to execute",
                    "Defensibility: Demonstrating sustainable competitive advantages",
                    "Due Diligence Ready: Comprehensive data supporting all claims"
                ]}
                processTitle="Our Investor Plan Development Process"
                processSubtitle="7 Steps to Funding Success"
                processSteps={[
                    "Investor Profile Analysis: Understanding your target investor type",
                    "Deep Business Discovery: Uncovering your unique advantages and metrics",
                    "Market Opportunity Quantification: Validating the investment thesis",
                    "Financial Modeling: Creating investor-grade financial projections",
                    "Strategic Narrative Development: Crafting compelling investment story",
                    "Document Creation: Building comprehensive, professional plan",
                    "Investor Presentation Support: Preparing for pitches and meetings"
                ]}
            />

            <Video
                title="Crafting Business Plans That Secure Investment"
                videoId="XXXXXXXXX" // Find a video about investor pitching success
            />

            <Section2
                title='Strategically Crafted for Investment Success'
                p1='Traditional business plans often fail to address the specific concerns and evaluation criteria of professional investors. Angel investors, venture capitalists, and private equity firms have distinct investment theses, risk tolerance, and return expectations that must be addressed directly in your business plan.'
                p2='Our investor business plans are built around key investment criteria:'
                p3="Market Size: Demonstrating a large, accessible total addressable market (TAM). Scalability: Showing potential for rapid growth without proportional cost increases. Defensibility: Clear competitive moats and barriers to entry. Management Quality: Proven team with relevant domain expertise. Traction: Evidence of market validation and early success metrics. Financial Returns: Projected ROI that justifies the investment risk."
                p4="With our investor-focused approach, you'll have a business plan that not only documents your business concept but actively sells your vision to the right investors, increasing your chances of securing the funding needed for rapid growth."
                src={ventureFunding}
                variant='right'
            />

            <Faq
                title="Investor Business Plan FAQs"
                subtitle="Common questions about investor-grade business plans"
                faqs={[
                    {
                        question: "What's the difference between an investor business plan and a regular business plan?",
                        answer: "Investor plans focus on growth potential, scalability, and returns, while regular plans focus on operational viability. Investor plans emphasize market opportunity, competitive advantages, and exit strategies that demonstrate potential for high returns."
                    },
                    {
                        question: "How detailed should the financial projections be for investors?",
                        answer: "Extremely detailed. Investors expect monthly projections for years 1-2, quarterly for years 3-5, with clear assumptions behind every number. You must be able to defend every assumption during due diligence."
                    },
                    {
                        question: "What investor types do you have experience targeting?",
                        answer: "We've created plans for angel investors, venture capital firms, private equity, family offices, and corporate venture arms. Each requires slightly different emphasis and presentation style."
                    },
                    {
                        question: "How important is the executive summary for investor business plans?",
                        answer: "Critical. Most investors only read the executive summary initially. It must be compelling enough to secure a meeting and comprehensive enough to cover all key investment criteria in 2-3 pages maximum."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Attract Serious Investment?"
                subtitle="Speak with our investor relations experts to create a business plan that demonstrates your growth potential and secures the funding you need to scale."
            />
        </>
    )
}

export default InvestorBusinessPlanPage