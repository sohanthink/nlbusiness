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

// Suggested images for Bank Loan Business Plan
import bankLoanBanner from "@/public/images/services/small-business/bank-loan/banner.png";
import loanApplication from "@/public/images/services/small-business/bank-loan/loan-application.png";

const BankLoanBusinessPlanPage = () => {
    return (
        <>
            {/* BANNER: For Bank Loan Business Plan */}
            <Banner
                title="Bank Loan Business Plan - Secure Small Business Funding"
                breadcrumb="Small Business / Bank Loan Business Plan"
            />

            <Section2
                title='Professional Loan Applications for Small Business Success'
                p1="Securing a bank loan for your small business requires more than just a good credit score. Lenders need to see a comprehensive business plan that demonstrates your understanding of the market, proven management capabilities, and most importantly, your ability to generate consistent cash flow to repay the loan. A professionally crafted bank loan business plan significantly increases your approval chances and can help you secure better terms."
                p2="We specialize in creating bank-approved business plans specifically designed for small businesses seeking traditional financing. Our plans address the specific concerns of commercial loan officers while highlighting your business's strengths and mitigating potential risk factors that lenders carefully evaluate."
                src={bankLoanBanner}
            />

            <Pricing
                startingPrice="C$ 1,800"
                daysUntilDraft="7-12 business days"
                rushServiceText="Quick turnaround for time-sensitive loan opportunities"
                numberOfPages="25-40 pages + Financial Appendices"
                packageTitle="Small Business Bank Loan Plan Package"
                packageSubtitle="Complete Documentation for Loan Approval"
                includedFeatures={[
                    "Bank-Friendly Executive Summary focusing on repayment ability",
                    "Detailed Loan Request with specific amount and purpose",
                    "3-Year Financial Projections (Income Statement, Cash Flow, Balance Sheet)",
                    "Personal Financial Statements for all business owners",
                    "Collateral Documentation and valuation summaries",
                    "Debt Service Coverage Ratio (DSCR) analysis",
                    "Market Analysis demonstrating business viability",
                    "Management Experience highlighting relevant background",
                    "Risk Assessment with practical mitigation strategies",
                    "Use of Funds breakdown with detailed allocation",
                    "Loan Repayment Schedule with principal/interest calculations",
                    "Business Tax Returns and financial history compilation",
                    "Bank-specific formatting and compliance requirements"
                ]}
                whatIncludedTitle="Small Business Loan Specialization"
                whatIncludedSubtitle="Tailored for Main Street Business Needs"
                whatIncludedFeatures={[
                    "Startup Loan Focus: Emphasizing management experience and market research",
                    "Expansion Loan Focus: Demonstrating historical performance and growth potential",
                    "Equipment Financing: Asset justification and depreciation planning",
                    "Working Capital Loans: Cash flow management and seasonal needs",
                    "Commercial Mortgages: Property analysis and location advantages",
                    "Line of Credit: Revolving credit management strategy"
                ]}
                processTitle="Our Bank Loan Plan Process"
                processSubtitle="6 Steps to Loan Application Success"
                processSteps={[
                    "Loan Assessment: Determining optimal loan type and amount for your needs",
                    "Financial Documentation: Compiling and organizing required financial records",
                    "Cash Flow Analysis: Creating realistic debt service projections",
                    "Risk Evaluation: Identifying and addressing potential lender concerns",
                    "Plan Development: Crafting comprehensive, lender-focused documentation",
                    "Application Preparation: Creating complete bank submission package"
                ]}
            />

            <Video
                title="Small Business Loan Success Stories"
                videoId="XXXXXXXXX" // Find a video about small business loan approvals
            />

            <Section2
                title='Bank-Approved Documentation for Small Business Owners'
                p1='Many small business owners struggle with loan applications because they lack the financial sophistication or time to create professional loan packages. Banks need to see clear, organized documentation that addresses their primary concern: will this business generate enough stable cash flow to repay the loan consistently, even during economic downturns or seasonal fluctuations?'
                p2='Our small business bank loan plans focus on critical lender requirements:'
                p3="Proven Management: Your experience and industry knowledge that reduces operational risk. Market Understanding: Clear demonstration of customer demand and competitive positioning. Financial Discipline: Conservative financial management and realistic projections. Collateral Security: Adequate assets to secure the loan with proper valuation. Contingency Planning: Preparedness for unexpected challenges and market changes. Community Impact: How your business contributes to local economic development."
                p4="With our small business banking expertise, you'll have a professional loan application that speaks the language of commercial lenders, addresses their risk assessment criteria, and positions your business as a safe, reliable borrowing candidate worthy of approval."
                src={loanApplication}
                variant='right'
            />

            <Faq
                title="Small Business Bank Loan FAQs"
                subtitle="Common questions about business loan applications"
                faqs={[
                    {
                        question: "What credit score do I need for a small business bank loan?",
                        answer: "Most banks prefer credit scores of 680+ for business loans, with 720+ for the best rates. However, we help structure applications that can overcome slightly lower scores by emphasizing strong cash flow, substantial collateral, or industry experience."
                    },
                    {
                        question: "How much of my own money do I need to invest in the business?",
                        answer: "Banks typically want to see 15-25% owner equity injection for startups, and 10-20% for existing businesses. This demonstrates your commitment and reduces the bank's risk exposure. We help structure your equity contribution to meet lender expectations."
                    },
                    {
                        question: "What if my business is seasonal or has fluctuating revenue?",
                        answer: "We address seasonality directly by showing historical patterns, cash reserves planning, and demonstrating that even in slow seasons, you maintain adequate debt service coverage. Lenders understand seasonality but want to see you've planned for it."
                    },
                    {
                        question: "How long does the bank loan approval process typically take?",
                        answer: "Traditional bank loans can take 2-8 weeks from application to funding. SBA loans often take 60-90 days. Having a complete, professional business plan upfront can significantly reduce processing time by addressing questions before they're asked."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Secure Your Small Business Loan?"
                subtitle="Speak with our small business financing experts to create a bank-approved business plan that maximizes your chances of loan approval with favorable terms."
            />
        </>
    )
}

export default BankLoanBusinessPlanPage