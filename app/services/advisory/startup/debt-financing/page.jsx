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

// Suggested images for Debt Financing
import debtFinancingBanner from "@/public/images/services/advisory/startup/debt/banner.png";
import loanApproval from "@/public/images/services/advisory/startup/debt/presentation.png";

const DebtFinancingPage = () => {
    return (
        <>
            {/* BANNER: For Debt Financing */}
            <Banner
                title="Debt Financing Business Plan - Secure Business Loans & Credit"
                breadcrumb="Advisory / Debt Financing Business Plan"
            />

            <Section2
                title='Professional Loan Documentation for Lenders and Financial Institutions'
                p1="Debt financing requires a fundamentally different approach than equity fundraising. Lenders prioritize security, cash flow stability, and risk mitigation over growth potential and returns. Your debt financing business plan must demonstrate your ability to service debt obligations consistently, provide adequate collateral coverage, and maintain financial discipline through various economic conditions."
                p2="We specialize in creating lender-focused business plans that address the specific requirements of banks, credit unions, alternative lenders, and SBA loan programs. Our plans emphasize cash flow predictability, asset coverage, and conservative financial management that gives lenders confidence in your ability to repay."
                src={debtFinancingBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Expedited service for time-sensitive loan applications"
                numberOfPages="30-50 pages + Financial Appendices"
                packageTitle="Comprehensive Debt Financing Business Plan Package"
                packageSubtitle="Lender-Approved Documentation for Loan Success"
                includedFeatures={[
                    "Executive Summary focused on loan repayment capability",
                    "Detailed Loan Request with specific terms and use of funds",
                    "Cash Flow Analysis demonstrating debt service capability",
                    "Collateral Schedule with current valuations",
                    "Personal Financial Statements for principals",
                    "Debt Service Coverage Ratio (DSCR) analysis",
                    "Loan Repayment Schedule with principal and interest breakdown",
                    "Risk Assessment with specific mitigation strategies",
                    "Financial Projections (3-5 years) with conservative assumptions",
                    "Industry and Market Analysis supporting business viability",
                    "Management Team profiles emphasizing financial experience",
                    "SBA Loan Compliance documentation (if applicable)",
                    "Two rounds of revisions with lender perspective feedback"
                ]}
                whatIncludedTitle="Debt Financing Specialized Components"
                whatIncludedSubtitle="Tailored for Different Lending Scenarios"
                whatIncludedFeatures={[
                    "Bank Loan Focus: Emphasizing stability and collateral coverage",
                    "SBA Loan Preparation: Meeting specific government program requirements",
                    "Equipment Financing: Asset-based lending documentation",
                    "Line of Credit: Working capital management demonstration",
                    "Commercial Mortgage: Real estate collateral and cash flow analysis",
                    "Alternative Lending: Online lender and fintech requirements"
                ]}
                processTitle="Our Debt Financing Planning Process"
                processSubtitle="6 Steps to Loan Approval"
                processSteps={[
                    "Lender Assessment: Identifying optimal lending sources and programs",
                    "Financial Health Analysis: Evaluating current financial position and creditworthiness",
                    "Cash Flow Modeling: Creating conservative debt service projections",
                    "Collateral Documentation: Compiling and valuing security assets",
                    "Risk Mitigation Planning: Addressing lender concerns proactively",
                    "Application Package Preparation: Creating complete lender submission"
                ]}
            />

            <Video
                title="Securing Business Loans with Professional Documentation"
                videoId="XXXXXXXXX" // Find a video about business loan success
            />

            <Section2
                title='Lender-Focused Documentation for Loan Success'
                p1='Many businesses struggle with loan applications because they approach lenders with equity-focused materials that emphasize growth over stability. Lenders are risk-averse and need to see proven cash flow, adequate collateral, and conservative financial management. Your debt financing plan must address their primary concern: will you repay the loan on time, in full, regardless of business conditions?'
                p2='Our debt financing plans are built around critical lender evaluation criteria:'
                p3="Cash Flow Strength: Consistent ability to cover debt payments with comfortable margin. Collateral Coverage: Ample assets securing the loan with conservative valuations. Management Experience: Proven track record of financial discipline and industry knowledge. Industry Stability: Operating in sectors with predictable revenue patterns. Financial Controls: Robust accounting systems and financial management practices. Contingency Planning: Preparedness for economic downturns or unexpected challenges."
                p4="With our debt financing expertise, you'll have a comprehensive loan application package that positions your business as a low-risk borrower, addresses lender concerns proactively, and significantly increases your chances of approval with favorable terms and rates."
                src={loanApproval}
                variant='right'
            />

            <Faq
                title="Debt Financing Business Plan FAQs"
                subtitle="Common questions about loan application documentation"
                faqs={[
                    {
                        question: "What is Debt Service Coverage Ratio (DSCR) and why is it critical?",
                        answer: "DSCR measures your ability to pay debt obligations from operating income. Most lenders require minimum DSCR of 1.25x-1.35x, meaning your cash flow should be 25-35% higher than your debt payments. We optimize your financial projections to demonstrate strong DSCR throughout the loan term."
                    },
                    {
                        question: "How detailed should the collateral documentation be?",
                        answer: "Extremely detailed. Include current appraisals, ownership documents, lien positions, depreciation schedules, and liquidation values. For equipment, include serial numbers and condition reports. For real estate, include property surveys and environmental assessments if required."
                    },
                    {
                        question: "What's the difference between SBA loan plans and conventional bank loan plans?",
                        answer: "SBA plans require specific formatting, additional personal financial documentation, demonstrated community impact, and must show the business couldn't obtain financing elsewhere. Conventional bank plans focus more on pure financial strength and collateral coverage without government program requirements."
                    },
                    {
                        question: "How conservative should financial projections be for lenders?",
                        answer: "Very conservative. Lenders prefer realistic or slightly pessimistic projections over optimistic ones. We typically use industry-average growth rates, include contingency buffers, and demonstrate strong performance even in downside scenarios. Overly optimistic projections raise red flags for experienced lenders."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Secure Your Business Financing?"
                subtitle="Speak with our debt financing specialists to create a lender-approved business plan that maximizes your chances of loan approval with optimal terms."
            />
        </>
    )
}

export default DebtFinancingPage