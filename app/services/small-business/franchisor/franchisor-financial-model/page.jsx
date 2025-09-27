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

// Suggested images for Franchisor Financial Model
import financialModelBanner from "@/public/images/services/small-business/franchisor/financialmodel/model-banner.png";
import franchiseEconomics from "@/public/images/services/small-business/franchisor/financialmodel/economics.png";

const FranchisorFinancialModelPage = () => {
    return (
        <>
            {/* BANNER: For Franchisor Financial Model */}
            <Banner
                title="Franchisor Financial Model - Data-Driven Franchise Expansion"
                breadcrumb="Business Planning / Franchisor Master Business Plan / Financial Model"
            />

            <Section2
                title='Precision Financial Modeling for Franchise System Success'
                p1="A robust financial model is the backbone of any successful franchise system. It demonstrates to investors, lenders, and potential franchisees that your franchise concept is financially viable, scalable, and profitable. Our franchisor financial models provide the detailed financial intelligence needed to make informed expansion decisions."
                p2="We create comprehensive financial models specifically designed for franchise systems, incorporating unique revenue streams like franchise fees, royalty structures, marketing fund contributions, and multi-unit economics. Our models help you forecast growth, optimize pricing, and demonstrate long-term profitability."
                src={financialModelBanner}
            />

            <Pricing
                startingPrice="C$ 3,200"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available for investor meetings"
                numberOfPages="Excel model + 15-20 page report"
                packageTitle="Comprehensive Franchisor Financial Model Package"
                packageSubtitle="Data-Driven Financial Intelligence for Franchise Growth"
                includedFeatures={[
                    "5-Year Integrated Financial Statements (P&L, Balance Sheet, Cash Flow)",
                    "Franchise Unit Economics Analysis (per location profitability)",
                    "Royalty Revenue Modeling with different growth scenarios",
                    "Franchise Fee Income Projections with sales cycle modeling",
                    "Marketing Fund Management and Allocation Strategy",
                    "Break-Even Analysis for Franchise System Operations",
                    "Sensitivity Analysis with best-case/worst-case scenarios",
                    "Key Performance Indicators (KPIs) Dashboard",
                    "Franchisee Performance Benchmarks and Metrics",
                    "Interactive Excel Model with customizable inputs"
                ]}
                whatIncludedTitle="What's Included in Your Financial Model"
                whatIncludedSubtitle="Comprehensive Financial Intelligence for Decision-Making"
                whatIncludedFeatures={[
                    "Revenue Stream Modeling: Franchise fees, royalties, product sales, training fees",
                    "Cost Structure Analysis: Franchisor support costs, legal, marketing, operations",
                    "Unit Economics: Detailed profitability per franchise location type",
                    "Growth Scenarios: Conservative, moderate, and aggressive expansion plans",
                    "Investment Analysis: ROI calculations for franchise system development",
                    "Cash Flow Management: Working capital requirements and timing"
                ]}
                processTitle="Our Financial Modeling Process"
                processSubtitle="6 Steps to Financial Clarity"
                processSteps={[
                    "Data Collection: Comprehensive review of your current financials and expansion goals",
                    "Assumptions Development: Building realistic growth and operational assumptions",
                    "Model Architecture: Creating the integrated financial framework",
                    "Scenario Analysis: Testing different growth strategies and market conditions",
                    "Validation & Testing: Ensuring model accuracy and reliability",
                    "Training & Delivery: Walkthrough of model functionality and interpretation"
                ]}
            />

            <Video
                title="Mastering Franchise Financial Modeling"
                videoId="XXXXXXXXX" // Find a video about franchise financial planning
            />

            <Section2
                title='Advanced Financial Intelligence for Franchise Systems'
                p1='Franchise financial modeling requires specialized knowledge of multi-unit economics, recurring revenue streams, and scalable cost structures. Standard financial models fail to capture the unique dynamics of franchise systems.'
                p2='Our franchisor financial models include critical franchise-specific elements:'
                p3="Royalty Stream Modeling: Projecting recurring revenue based on franchisee sales performance. Franchise Sales Pipeline: Modeling the timing and conversion rates of franchise sales. Territory Optimization: Financial analysis of different market expansion strategies. Franchisee Support Costing: Detailed costing of training, marketing, and operational support. System-Wide Profitability: Consolidated financials showing overall system health."
                p4="With our franchise financial expertise, you'll have a model that not only forecasts numbers but provides strategic insights for optimizing your franchise system's financial performance."
                src={franchiseEconomics}
                variant='right'
            />

            <Faq
                title="Franchisor Financial Model FAQs"
                subtitle="Common questions about franchise financial modeling"
                faqs={[
                    {
                        question: "What financial metrics are most important for franchisors?",
                        answer: "Key metrics include: Royalty-to-support cost ratio, franchise sales conversion rate, average franchisee profitability, system-wide EBITDA, customer acquisition costs, and unit economic margins."
                    },
                    {
                        question: "How do you model different growth scenarios?",
                        answer: "We create conservative, moderate, and aggressive scenarios based on franchise sales timelines, territory expansion pace, market conditions, and franchisee performance benchmarks from your industry."
                    },
                    {
                        question: "What assumptions should be included in a franchisor financial model?",
                        answer: "Critical assumptions include: franchise sales cycle length, franchisee failure rates, royalty percentages, marketing fund contributions, support staff ratios, and geographic expansion timing."
                    },
                    {
                        question: "How detailed should unit economics be in the model?",
                        answer: "Unit economics should include revenue per location, cost of goods sold, labor costs, occupancy expenses, and operating margins. We typically model 2-3 location types (standard, premium, express) if applicable."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Build Your Franchise Financial Model?"
                subtitle="Speak with our franchise financial experts to create a data-driven model that supports your expansion goals and attracts investors."
            />
        </>
    )
}

export default FranchisorFinancialModelPage