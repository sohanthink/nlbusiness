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


import opinionOfValueBanner from "@/public/images/services/advisory/ma/opinion-of-value/banner.png";
import opinionOfValueDocument from "@/public/images/services/advisory/ma/opinion-of-value/document.png";

const OpinionOfValuePage = () => {
    return (
        <>
            <Banner
                title="Opinion of Value - Understand Your Business's True Market Worth"
                breadcrumb="Advisory / M&A / Opinion of Value"
            />

            <Section2
                title='Make Your Next Strategic Move with Confidence'
                p1="An Opinion of Value, or Broker's Opinion of Value (BOV), is a comprehensive analysis that determines a realistic market valuation range for your business. It is the single most important piece of information for any owner considering a future exit, strategic acquisition, or internal ownership transfer. It provides a data-driven, objective baseline to guide your decision-making."
                p2="We provide a detailed and defensible Opinion of Value that goes beyond simple formulas. By analyzing your historical financials, normalizing for non-recurring expenses, and benchmarking against real-time market data and comparable transactions, we deliver a clear picture of what your business is worth in the eyes of potential acquirers today."
                src={opinionOfValueBanner}
            />

            <Pricing
                startingPrice="C$ 3,000"
                daysUntilDraft="5-7 business days"
                rushServiceText="Accelerated service available for time-sensitive decisions"
                numberOfPages="15-25 Page Comprehensive Report"
                packageTitle="Opinion of Value Package"
                packageSubtitle="A Clear, Defensible Assessment of Your Company's Market Value"
                includedFeatures={[
                    "Normalization of Financial Statements (Adjusted EBITDA & SDE)",
                    "Analysis of Key Business Value Drivers, Risks, and Opportunities",
                    "Valuation using Market-Based Approaches (Comparable M&A Transactions)",
                    "Valuation using Income-Based Approaches (SDE/EBITDA Multiples)",
                    "Industry Benchmarking & Current Market Condition Analysis",
                    "A Clear, Defensible Valuation Range (e.g., $X.Xm - $Y.Ym)",
                    "Comprehensive Written Report Explaining All Methodologies & Assumptions",
                    "A 60-Minute Debriefing Call to Discuss Findings and Next Steps"
                ]}
                whatIncludedTitle="Common Use Cases"
                whatIncludedSubtitle="Informing Your Most Critical Business Decisions"
                whatIncludedFeatures={[
                    "Pre-Sale M&A Planning & Timing",
                    "Strategic Growth Planning",
                    "Shareholder & Partnership Buyouts",
                    "Succession & Estate Planning",
                    "Capital Raising & Financing Support",
                    "Setting a Realistic Asking Price"
                ]}
                processTitle="Our Valuation Process"
                processSubtitle="A Structured 4-Step Approach to Clarity"
                processSteps={[
                    "Discovery & Objective Setting: Understanding your business and the purpose of the valuation.",
                    "Financial & Operational Data Collection: Securely gathering necessary documents (P&Ls, balance sheets, etc.).",
                    "In-depth Analysis & Valuation: Applying proven methodologies and market data.",
                    "Report Delivery & Strategic Debrief: Presenting the findings and discussing their implications for your goals."
                ]}
            />

            <Video
                title="How Are Private Businesses Valued in M&A?"
                videoId="XXXXXXXXX" // Find a video explaining SDE, EBITDA multiples etc.
            />

            <Section2
                title='More Than a Number, It’s a Strategic Roadmap'
                p1='A professional Opinion of Value is far more than a simple calculation; it’s a diagnostic tool for your business. It reveals your company’s strengths and weaknesses from a buyer’s perspective, highlighting areas where you can enhance value before a sale. It helps set realistic expectations among all stakeholders and forms the foundation of a successful exit strategy.'
                p2='Understanding your valuation empowers you to negotiate effectively, plan your personal financial future, and decide on the optimal time to go to market. It is the first step towards transforming the abstract idea of "selling your business" into a concrete, manageable, and profitable project.'
                src={opinionOfValueDocument}
                variant='right'
            />

            <Faq
                title="Opinion of Value FAQs"
                subtitle="Understanding the Valuation Process"
                faqs={[
                    {
                        question: "Is this a formal appraisal for legal or tax purposes?",
                        answer: "No. An Opinion of Value is prepared for M&A and strategic planning purposes. While it uses rigorous methodologies, it is distinct from a Certified Valuation Appraisal (CVA) required for IRS purposes, litigation, or SBA loans. Our report provides a realistic 'market value' for a potential transaction."
                    },
                    {
                        question: "What is the difference between EBITDA and SDE?",
                        answer: "EBITDA (Earnings Before Interest, Taxes, Depreciation, Amortization) is a standard metric for larger companies. SDE (Seller's Discretionary Earnings) is often used for smaller, owner-operated businesses. It starts with EBITDA and adds back the owner's salary and other personal benefits run through the company to show the total earning potential for a new owner."
                    },
                    {
                        question: "How is this different from a free valuation from a business broker?",
                        answer: "Free estimates are typically high-level sales tools designed to secure a listing. Our Opinion of Value is an unbiased, paid service involving a detailed financial analysis, multiple valuation methodologies, and a comprehensive written report, providing a much more accurate and defensible number."
                    },
                    {
                        question: "What key documents will I need to provide?",
                        answer: "Typically, we require the last 3-5 years of financial statements (Profit & Loss, Balance Sheet), corporate tax returns, an interim P&L for the current year, and answers to a detailed questionnaire about your operations."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Discover Your Business's True Value?"
                subtitle="Contact our team for a confidential consultation and take the first step towards making informed, strategic decisions for your company's future."
            />
        </>
    )
}

export default OpinionOfValuePage