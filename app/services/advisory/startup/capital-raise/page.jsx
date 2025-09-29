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


// Suggested images for Capital Raise
import capitalRaiseBanner from "@/public/images/services/advisory/startup/capital/banner.png";
import fundingStrategy from "@/public/images/services/advisory/startup/capital/presentation.png";

const CapitalRaisePage = () => {
    return (
        <>
            {/* BANNER: For Capital Raise */}
            <Banner
                title="Capital Raise Business Plan - Secure Your Growth Funding"
                breadcrumb="Advisory / Capital Raise Business Plan"
            />

            <Section2
                title='Professional Capital Raise Documentation for Investors'
                p1="Raising capital requires more than just a good business idea - it demands a comprehensive capital raise plan that demonstrates your business's investment readiness, growth potential, and ability to deliver returns. Whether you're seeking equity investment, debt financing, or alternative funding, your capital raise plan must speak the language of sophisticated investors and financial institutions."
                p2="We specialize in creating compelling capital raise business plans that are tailored to specific funding types and investor profiles. Our plans combine rigorous financial analysis with persuasive storytelling to position your business as a compelling investment opportunity with clear risk-mitigated growth pathways."
                src={capitalRaiseBanner}
            />

            <Pricing
                startingPrice="C$ 5,800"
                daysUntilDraft="14-20 business days"
                rushServiceText="Expedited service for funding deadlines"
                numberOfPages="40-70 pages + Investor Materials"
                packageTitle="Comprehensive Capital Raise Business Plan Package"
                packageSubtitle="Complete Investor-Grade Documentation Suite"
                includedFeatures={[
                    "Executive Summary optimized for investor attention",
                    "Investment Thesis with clear value proposition",
                    "Detailed Use of Funds breakdown by category and timeline",
                    "Capitalization Table (pre and post-money scenarios)",
                    "5-Year Financial Projections with monthly detail for Year 1",
                    "Valuation Analysis using multiple methodologies",
                    "Investor Returns Analysis (IRR, ROI, Multiple on Invested Capital)",
                    "Risk Assessment with specific mitigation strategies",
                    "Exit Strategy with multiple scenarios and timelines",
                    "Due Diligence Package preparation",
                    "Investor Presentation Deck (Pitch Deck)",
                    "Data Room organization guidance",
                    "Three investor profile targeting strategies"
                ]}
                whatIncludedTitle="Capital Raise Specialized Components"
                whatIncludedSubtitle="Tailored for Different Funding Types"
                whatIncludedFeatures={[
                    "Equity Funding Focus: Emphasizing growth potential and exit multiples",
                    "Debt Financing Focus: Highlighting cash flow stability and collateral",
                    "VC/PE Targeting: Scalability and market domination potential",
                    "Angel Investor Focus: Innovation and early traction demonstration",
                    "Strategic Investor Focus: Partnership synergies and strategic value",
                    "Crowdfunding Approach: Community engagement and social proof"
                ]}
                processTitle="Our Capital Raise Planning Process"
                processSubtitle="7 Steps to Funding Success"
                processSteps={[
                    "Funding Strategy Assessment: Determining optimal funding type and amount",
                    "Investor Targeting: Identifying ideal investor profiles and platforms",
                    "Valuation Analysis: Establishing fair and compelling valuation",
                    "Financial Modeling: Creating investor-grade financial projections",
                    "Document Suite Development: Building comprehensive capital raise materials",
                    "Pitch Preparation: Developing compelling presentation and Q&A preparation",
                    "Investor Outreach Strategy: Creating targeted approach and follow-up system"
                ]}
            />

            <Video
                title="Mastering the Capital Raise Process"
                videoId="XXXXXXXXX" // Find a video about successful fundraising
            />

            <Section2
                title='Strategic Capital Planning for Optimal Funding Outcomes'
                p1='Many businesses approach capital raising with generic materials that fail to address specific investor concerns or market conditions. A successful capital raise requires understanding the current investment landscape, positioning your business appropriately, and providing the rigorous analysis that sophisticated investors demand in today competitive environment.'
                p2='Our capital raise plans address critical investor evaluation criteria:'
                p3="Market Timing: Why now is the right time for this investment. Team Execution Capability: Proven ability to deliver on projections. Defensible Position: Sustainable competitive advantages and barriers to entry. Capital Efficiency: How effectively you'll deploy investor funds. Return Potential: Clear path to 3-10x returns for equity investors. Risk Management: Comprehensive understanding and mitigation of key risks."
                p4="With our capital raise expertise, you'll have a complete funding toolkit that not only documents your business opportunity but actively positions you as a sophisticated investment partner capable of delivering exceptional returns while managing risk effectively."
                src={fundingStrategy}
                variant='right'
            />

            <Faq
                title="Capital Raise Business Plan FAQs"
                subtitle="Common questions about fundraising documentation"
                faqs={[
                    {
                        question: "How much detail should be included in the 'Use of Funds' section?",
                        answer: "Extremely detailed. Investors want to see exactly how their money will be deployed, with specific allocations for marketing, hiring, technology, operations, and contingencies. We typically break it down by category, quarter, and specific initiatives with clear expected outcomes for each expenditure."
                    },
                    {
                        question: "What valuation methodologies do you use in capital raise plans?",
                        answer: "We typically use 3-4 methodologies including DCF (Discounted Cash Flow), comparable company analysis, precedent transactions, and for early-stage companies, the Berkus Method or Risk Factor Summation. This provides investors with multiple validation points for your valuation."
                    },
                    {
                        question: "How do you tailor plans for different funding rounds?",
                        answer: "Seed rounds emphasize team, product, and market opportunity. Series A focuses on product-market fit and scalable customer acquisition. Series B+ emphasizes market expansion, operational scaling, and path to profitability. Debt financing focuses on cash flow stability and collateral coverage."
                    },
                    {
                        question: "What's the difference between a capital raise plan and a standard investor business plan?",
                        answer: "Capital raise plans are more comprehensive and include specific fundraising components like detailed use of funds, capitalization tables, investor returns analysis, due diligence preparation, and investor outreach strategy. They're designed specifically for active fundraising campaigns rather than general business planning."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Launch Your Capital Raise?"
                subtitle="Speak with our fundraising experts to create a compelling capital raise plan that attracts the right investors and secures the funding you need for growth."
            />
        </>
    )
}

export default CapitalRaisePage