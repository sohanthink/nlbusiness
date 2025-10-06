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

// Suggested images for Grant Business Plan
import grantBanner from "@/public/images/services/small-business/grant/banner.png";
import fundingSuccess from "@/public/images/services/small-business/grant/funding-success.png";

const GrantBusinessPlanPage = () => {
    return (
        <>
            {/* BANNER: For Grant Business Plan */}
            <Banner
                title="Grant Business Plan - Secure Non-Repayable Funding"
                breadcrumb="Small Business / Grant Business Plan"
            />

            <Section2
                title='Winning Grant Applications for Small Businesses'
                p1="Grant funding provides non-repayable capital that can accelerate your business growth without debt or equity dilution. However, grant applications require specialized business plans that demonstrate community impact, alignment with funder objectives, and sustainable operations beyond the grant period."
                p2="We create compelling grant business plans that speak to funder priorities while showcasing your business's potential for positive impact and long-term viability. Our plans are tailored to specific grant programs and scoring criteria."
                src={grantBanner}
            />

            <Pricing
                startingPrice="C$ 2,200"
                daysUntilDraft="10-14 business days"
                rushServiceText="Rush service for grant deadlines"
                numberOfPages="20-35 pages"
                packageTitle="Grant Business Plan Package"
                packageSubtitle="Complete Grant Application Support"
                includedFeatures={[
                    "Grant-specific executive summary focused on impact",
                    "Community needs assessment and benefits analysis",
                    "Detailed project budget with grant fund allocation",
                    "Alignment strategy with funder mission and objectives",
                    "Sustainability plan for operations beyond grant period",
                    "Measurable outcomes and success indicators",
                    "Evaluation framework and reporting structure",
                    "Risk assessment and mitigation strategies",
                    "Timeline with project milestones and deliverables",
                    "Two rounds of revisions with grant expert feedback"
                ]}
                whatIncludedTitle="Grant-Specific Expertise"
                whatIncludedSubtitle="Tailored for Funding Success"
                whatIncludedFeatures={[
                    "Funder alignment and scoring optimization",
                    "Impact measurement and community benefit focus",
                    "Budget compliance and grant requirement adherence",
                    "Professional narrative writing for review committees",
                    "Success metrics that demonstrate value for money",
                    "Long-term sustainability planning"
                ]}
                processTitle="Our Grant Writing Process"
                processSubtitle="6 Steps to Successful Funding"
                processSteps={[
                    "Grant Program Analysis: Review criteria and scoring rubrics",
                    "Impact Strategy Development: Align business with funder goals",
                    "Document Creation: Craft compelling grant narrative",
                    "Budget Development: Create compliant financial plans",
                    "Compliance Review: Ensure all requirements are met",
                    "Final Polish: Optimize for maximum scoring potential"
                ]}
            />

            <Video
                title="Successful Grant Writing Strategies"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Grant-Focused Business Planning'
                p1='Grant applications require a different approach than traditional business plans. Funders prioritize community benefits, social impact, and alignment with their specific mission over pure profitability. Your grant business plan must demonstrate how your project creates public value and addresses specific community needs.'
                p2='Our grant plans focus on critical success factors:'
                p3="Community Impact: Job creation, local economic development, social value creation. Funder Alignment: Direct connection to grant program objectives and priorities. Sustainability: Operations continuing after grant funds are expended. Measurable Outcomes: Clear metrics for success and impact tracking. Budget Justification: Detailed explanation of how every dollar creates value. Risk Management: Proactive identification and mitigation of potential challenges."
                p4="We help you demonstrate how your business creates value beyond financial returns, making your application stand out to grant review committees and increasing your chances of securing non-repayable funding for growth and innovation."
                src={fundingSuccess}
                variant='right'
            />

            <Faq
                title="Grant Business Plan FAQs"
                subtitle="Common grant application questions"
                faqs={[
                    {
                        question: "What makes a grant business plan different from traditional business plans?",
                        answer: "Grant plans emphasize community impact and alignment with funder goals rather than investor returns. They focus on how funds will create public benefit, address specific needs, and deliver sustainable outcomes that align with the funder's mission."
                    },
                    {
                        question: "How do you demonstrate sustainability after the grant period ends?",
                        answer: "We show revenue diversification strategies, long-term funding plans, operational efficiency measures, and community support systems that ensure your project continues producing benefits long after grant funds are expended."
                    },
                    {
                        question: "What types of grants do you have experience with?",
                        answer: "We've successfully prepared plans for government small business grants, community development funds, innovation grants, environmental sustainability programs, women entrepreneurship funds, minority business grants, and industry-specific funding programs across various sectors."
                    },
                    {
                        question: "How important is the budget section in a grant application?",
                        answer: "Extremely important. Grant reviewers scrutinize budgets to ensure funds are allocated efficiently and appropriately. We create detailed, justified budgets that show exactly how each dollar will be spent to achieve the project's objectives and demonstrate value for money."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Secure Grant Funding?"
                subtitle="Speak with our grant specialists to create a winning application that demonstrates your business's impact and alignment with funder priorities."
            />
        </>
    )
}

export default GrantBusinessPlanPage