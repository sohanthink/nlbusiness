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


import financialModelBanner from "@/public/images/services/small-business/financial-model/banner.png";
import businessAnalysis from "@/public/images/services/small-business/financial-model/presentation.png";

const SmallBusinessFinancialModelPage = () => {
    return (
        <>
            <Banner
                title="Financial Model for Small & Midsize Businesses"
                breadcrumb="Small Business / Financial Model"
            />

            <Section2
                title='Professional Financial Modeling for Growth and Stability'
                p1="Small and midsize businesses need robust financial models to make informed decisions, secure funding, and plan for sustainable growth. Unlike enterprise-level models, SMB financial models must be practical, easy-to-understand, and focused on the key drivers that actually impact your business performance."
                p2="We create customized financial models specifically designed for small and midsize businesses. Our models provide the financial intelligence you need without unnecessary complexity, focusing on the metrics that matter most for your growth and operational decisions."
                src={financialModelBanner}
            />

            <Pricing
                startingPrice="C$ 2,500"
                daysUntilDraft="8-12 business days"
                rushServiceText="Quick setup for urgent decision-making"
                numberOfPages="Excel model + 15-page guide"
                packageTitle="SMB Financial Model Package"
                packageSubtitle="Practical Financial Intelligence"
                includedFeatures={[
                    "3-year financial projections (P&L, Cash Flow, Balance Sheet)",
                    "Revenue model with key business drivers",
                    "Expense breakdown with cost control analysis",
                    "Break-even analysis and profitability timeline",
                    "Cash flow management and working capital planning",
                    "Key performance indicators (KPIs) dashboard",
                    "Scenario analysis for best/worst case planning",
                    "Sensitivity analysis for key assumptions",
                    "Investment and financing need calculations",
                    "User-friendly Excel model with instructions"
                ]}
                whatIncludedTitle="SMB Financial Expertise"
                whatIncludedSubtitle="Designed for Business Owners"
                whatIncludedFeatures={[
                    "Practical business driver focus",
                    "Easy-to-understand outputs",
                    "Actionable insights and recommendations",
                    "Industry-specific benchmarking",
                    "Owner compensation planning",
                    "Tax and cash flow optimization"
                ]}
                processTitle="Our Financial Modeling Process"
                processSubtitle="6 Steps to Financial Clarity"
                processSteps={[
                    "Business Analysis: Understand your operations and key drivers",
                    "Data Collection: Gather historical financial information",
                    "Model Structure: Build customized financial framework",
                    "Assumption Development: Create realistic projections",
                    "Analysis & Testing: Validate model accuracy and usefulness",
                    "Training & Delivery: Ensure you can use and update the model"
                ]}
            />

            <Video
                title="Financial Modeling for Business Growth"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Practical Financial Intelligence for SMBs'
                p1='Many small business owners struggle with complex financial models designed for large corporations. Your financial model should be a practical tool that helps you make better decisions, not a theoretical exercise that gathers dust. We focus on the financial drivers that actually impact your bottom line and growth potential.'
                p2='Our SMB financial models deliver actionable insights:'
                p3="Cash Flow Management: Predict and prevent cash shortages before they happen. Profitability Optimization: Identify opportunities to improve margins and reduce costs. Growth Planning: Model different expansion scenarios and their financial impact. Financing Preparation: Prepare accurate financials for loan or investor meetings. Operational Efficiency: Pinpoint areas for cost reduction and process improvement. Risk Assessment: Identify financial vulnerabilities and create mitigation plans."
                p4="With our small business financial modeling expertise, you'll have a practical tool that becomes an integral part of your management process, helping you make confident decisions and drive sustainable business growth."
                src={businessAnalysis}
                variant='right'
            />

            <Faq
                title="SMB Financial Model FAQs"
                subtitle="Common questions about small business financial modeling"
                faqs={[
                    {
                        question: "How complex should a small business financial model be?",
                        answer: "Complex enough to capture your key business drivers but simple enough that you can understand and use it regularly. We focus on the 5-10 metrics that actually drive your business results, avoiding unnecessary complexity."
                    },
                    {
                        question: "What's the difference between SMB models and corporate financial models?",
                        answer: "SMB models focus on practical decision-making and cash flow management, while corporate models often emphasize shareholder value and complex financing structures. Our SMB models are designed for owner-operators who need actionable insights."
                    },
                    {
                        question: "How often should I update my financial model?",
                        answer: "We recommend monthly updates comparing actual results to projections, with quarterly reforecasting. The model should be a living document that evolves with your business, not a static prediction."
                    },
                    {
                        question: "What if my business has irregular revenue patterns?",
                        answer: "We specialize in modeling seasonal businesses, project-based revenue, and irregular income patterns. We build flexibility into the model to account for your specific business cycles and revenue timing."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Master Your Business Finances?"
                subtitle="Speak with our SMB financial experts to create a practical financial model that drives better decisions and sustainable growth."
            />
        </>
    )
}

export default SmallBusinessFinancialModelPage