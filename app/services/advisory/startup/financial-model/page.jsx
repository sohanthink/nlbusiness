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

// Suggested images for Financial Model Advisory
import financialModelBanner from "@/public/images/services/advisory/startup/financial-model/financial-model-banner.png";
import financialAnalysis from "@/public/images/services/advisory/startup/financial-model/financial-analysis.png";

const FinancialModelAdvisoryPage = () => {
    return (
        <>
            {/* BANNER: For Financial Model Advisory */}
            <Banner
                title="Financial Model Advisory - Data-Driven Business Decisions"
                breadcrumb="Advisory / Financial Model Advisory"
            />

            <Section2
                title='Professional Financial Modeling for Strategic Growth'
                p1="A robust financial model is more than just spreadsheets - it's the strategic foundation for your business decisions, investor presentations, and growth planning. Our financial model advisory service provides you with comprehensive, dynamic financial models that accurately project your business performance and guide your strategic direction."
                p2="We create sophisticated financial models tailored to your specific industry and business stage. Whether you're seeking investment, planning expansion, or optimizing operations, our models provide the financial intelligence you need to make informed decisions and demonstrate credibility to stakeholders."
                src={financialModelBanner}
            />

            <Pricing
                startingPrice="C$ 2,900"
                daysUntilDraft="10-14 business days"
                rushServiceText="Rush service available for investor deadlines"
                numberOfPages="Excel model + 20-30 page analysis report"
                packageTitle="Comprehensive Financial Model Advisory Package"
                packageSubtitle="Strategic Financial Intelligence for Business Growth"
                includedFeatures={[
                    "3-Statement Financial Model (Income Statement, Balance Sheet, Cash Flow)",
                    "5-Year Monthly and Annual Financial Projections",
                    "Revenue Model with Multiple Growth Scenarios",
                    "Cost Structure Analysis and Optimization Recommendations",
                    "Break-Even Analysis and Profitability Timeline",
                    "Working Capital and Cash Flow Management Strategy",
                    "Sensitivity Analysis with Best/Worst Case Scenarios",
                    "Key Performance Indicators (KPIs) Dashboard",
                    "Investment Analysis and ROI Calculations",
                    "Executive Summary with Strategic Recommendations",
                    "Interactive Excel Model with User-Friendly Inputs"
                ]}
                whatIncludedTitle="What's Included in Your Financial Model"
                whatIncludedSubtitle="Comprehensive Financial Analysis and Strategy"
                whatIncludedFeatures={[
                    "Scenario Planning: Multiple growth scenarios with associated risks and opportunities",
                    "Industry Benchmarking: Comparison against industry standards and competitors",
                    "Investment Readiness: Models optimized for investor and lender requirements",
                    "Operational Insights: Identification of key drivers and performance levers",
                    "Risk Assessment: Comprehensive risk analysis and mitigation strategies",
                    "Strategic Recommendations: Actionable insights based on financial analysis"
                ]}
                processTitle="Our Financial Modeling Process"
                processSubtitle="6 Steps to Financial Clarity"
                processSteps={[
                    "Discovery & Data Collection: In-depth analysis of your business and objectives",
                    "Assumptions Development: Building realistic, data-driven assumptions",
                    "Model Architecture: Creating the integrated financial framework",
                    "Analysis & Scenario Testing: Running multiple scenarios and sensitivity analysis",
                    "Validation & Quality Assurance: Ensuring accuracy and reliability",
                    "Delivery & Training: Comprehensive walkthrough and implementation guidance"
                ]}
            />

            <Video
                title="Mastering Financial Modeling for Business Success"
                videoId="XXXXXXXXX" // Find a video about financial modeling importance
            />

            <Section2
                title='Advanced Financial Intelligence for Strategic Decisions'
                p1='Many businesses operate with basic spreadsheets that lack the sophistication needed for strategic decision-making. Our financial models go beyond simple projections to provide dynamic, scenario-based analysis that accounts for market variables, operational constraints, and growth opportunities.'
                p2='Our financial model advisory delivers critical insights including:'
                p3="Cash Flow Management: Detailed cash flow projections to prevent liquidity issues. Investment Analysis: ROI calculations and capital allocation optimization. Growth Planning: Data-driven expansion strategies with associated risks and rewards. Performance Monitoring: Key metrics and dashboard for ongoing performance tracking. Risk Management: Identification of financial vulnerabilities and mitigation strategies."
                p4="With our financial modeling expertise, you'll have a powerful tool that not only forecasts your financial future but provides the strategic insights needed to navigate market changes, secure funding, and drive sustainable growth."
                src={financialAnalysis}
                variant='right'
            />

            <Faq
                title="Financial Model Advisory FAQs"
                subtitle="Common questions about professional financial modeling"
                faqs={[
                    {
                        question: "What's the difference between a financial model and basic financial projections?",
                        answer: "Financial projections are static estimates, while financial models are dynamic tools that show how changes in assumptions impact outcomes. Models include interconnected financial statements, scenario analysis, and sensitivity testing for comprehensive decision-making."
                    },
                    {
                        question: "How detailed should the revenue model be in a financial model?",
                        answer: "Revenue models should be granular enough to capture key drivers (price, volume, customer acquisition, retention) but not so detailed that they become unwieldy. We typically model 3-5 key revenue streams with clear assumptions for each."
                    },
                    {
                        question: "What industries do you have financial modeling experience in?",
                        answer: "We have extensive experience across multiple sectors including technology, retail, manufacturing, professional services, healthcare, and franchise businesses. Each industry requires specific modeling approaches we're equipped to handle."
                    },
                    {
                        question: "How do you ensure the financial model remains useful after delivery?",
                        answer: "We provide training on how to update and maintain the model, include clear documentation of all assumptions and formulas, and create user-friendly input sections that allow for easy updates as your business evolves."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Build Your Strategic Financial Model?"
                subtitle="Speak with our financial modeling experts to create a dynamic financial tool that drives your business decisions and growth strategy."
            />
        </>
    )
}

export default FinancialModelAdvisoryPage