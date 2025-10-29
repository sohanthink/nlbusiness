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

import financialModelingBanner from "@/public/images/services/advisory/ma/financial-modeling/banner.png";
import financialModelingDocument from "@/public/images/services/advisory/ma/financial-modeling/document.png";

const FinancialModelingPage = () => {
    return (
        <>
            <Banner
                title="Financial Modeling - Strategic Financial Planning for M&A Success"
                breadcrumb="Advisory / M&A / Financial Modeling"
            />

            <Section2
                title="Build Confidence with Professional Financial Models"
                p1="Financial modeling is the cornerstone of strategic decision-making in M&A transactions. Our sophisticated financial models provide accurate projections, scenario analysis, and valuation insights that guide critical business decisions. Whether you're preparing for a sale, evaluating an acquisition, or planning strategic growth, our models deliver the financial clarity you need to succeed."
                p2="Our financial modeling expertise combines industry best practices with deep M&A experience to create robust, flexible models that withstand due diligence scrutiny. We build models that not only project future performance but also provide sensitivity analysis, stress testing, and multiple valuation approaches to ensure you have comprehensive financial intelligence for your strategic initiatives."
                src={financialModelingBanner}
            />

            <Pricing
                startingPrice="C$ 4,500"
                daysUntilDraft="5-7 business days"
                rushServiceText="Accelerated modeling available for time-sensitive transactions"
                numberOfPages="Interactive Excel Model + 15-25 Page Analysis"
                packageTitle="Financial Modeling Package"
                packageSubtitle="Comprehensive Financial Models for Strategic Decision Making"
                includedFeatures={[
                    "3-Statement Financial Model (P&L, Balance Sheet, Cash Flow)",
                    "Revenue & Cost Projections with Multiple Scenarios",
                    "Working Capital & Cash Flow Analysis",
                    "Debt Capacity & Leverage Analysis",
                    "DCF Valuation Model with Sensitivity Analysis",
                    "M&A Transaction Modeling (Buyer & Seller Perspectives)",
                    "Scenario Planning (Base, Upside, Downside Cases)",
                    "Key Performance Indicators & Metrics Dashboard",
                    "Assumption Documentation & Methodology",
                    "Model Validation & Error Checking",
                    "Executive Summary & Key Findings",
                    "90-Minute Model Walkthrough & Training Session"
                ]}
                whatIncludedTitle="Strategic Applications"
                whatIncludedSubtitle="Maximizing Financial Intelligence for M&A Success"
                whatIncludedFeatures={[
                    "M&A Transaction Analysis & Valuation",
                    "Strategic Planning & Budgeting",
                    "Capital Raising & Investment Analysis",
                    "Due Diligence Support & Preparation",
                    "Performance Monitoring & KPI Tracking",
                    "Risk Assessment & Stress Testing",
                    "Exit Planning & Value Optimization",
                    "Investment Committee Presentations"
                ]}
                processTitle="Our Financial Modeling Process"
                processSubtitle="A Rigorous 5-Step Approach to Financial Excellence"
                processSteps={[
                    "Data Collection & Assumption Development: Gathering historical financials and developing realistic assumptions.",
                    "Model Architecture & Design: Building flexible, scalable models with proper structure and formulas.",
                    "Financial Statement Integration: Creating integrated 3-statement models with proper linkages.",
                    "Scenario Analysis & Sensitivity Testing: Developing multiple scenarios and stress testing assumptions.",
                    "Validation & Documentation: Thorough testing, error checking, and comprehensive documentation."
                ]}
            />

            <Video
                title="Why Financial Modeling is Critical for M&A Success"
                videoId="XXXXXXXXX" // Find a video about financial modeling in M&A
            />

            <Section2
                title="More Than Numbers, It's Your Strategic Compass"
                p1="A well-built financial model is more than a spreadsheet - it's your strategic compass for navigating complex business decisions. Our models provide the analytical foundation for understanding how different scenarios will impact your business, enabling you to make informed decisions with confidence. They serve as living documents that evolve with your business and provide ongoing strategic insights."
                p2="In M&A transactions, financial models are often the deciding factor between success and failure. They help buyers understand the true value and potential of an acquisition, while sellers use them to demonstrate their company's worth and growth prospects. Our models are built to withstand the scrutiny of sophisticated investors and provide the credibility needed to close deals successfully."
                src={financialModelingDocument}
                variant='right'
            />

            <Faq
                title="Financial Modeling FAQs"
                subtitle="Understanding Financial Model Development"
                faqs={[
                    {
                        question: "What's the difference between a financial model and a business plan?",
                        answer: "A financial model is a dynamic, interactive spreadsheet that allows you to test different scenarios and assumptions. A business plan is a narrative document that tells your business story. Our financial models complement business plans by providing the quantitative foundation and scenario analysis that supports strategic narratives."
                    },
                    {
                        question: "How accurate are financial projections in these models?",
                        answer: "Our models are built using industry-standard methodologies and realistic assumptions based on historical performance and market data. While no projection can be 100% accurate, our models provide the most reliable estimates possible by incorporating multiple scenarios, sensitivity analysis, and conservative assumptions that account for various market conditions."
                    },
                    {
                        question: "Can the model be updated as my business changes?",
                        answer: "Absolutely. Our models are designed to be flexible and easily updatable. We provide training on how to modify assumptions and update the model as your business evolves. We also offer ongoing support and model updates as part of our service to ensure your financial intelligence remains current and relevant."
                    },
                    {
                        question: "What level of Excel expertise is required to use these models?",
                        answer: "Our models are designed to be user-friendly with clear documentation and intuitive structure. Basic Excel knowledge is sufficient for most updates. We provide comprehensive training and documentation, and our models include built-in instructions and validation checks to prevent errors. Advanced users can access more sophisticated features and customization options."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Build Your Strategic Financial Foundation?"
                subtitle="Contact our financial modeling experts to discuss how professional financial models can enhance your M&A strategy and provide the analytical foundation for your most important business decisions."
            />
        </>
    )
}

export default FinancialModelingPage