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


import feasibilityBanner from "@/public/images/services/small-business/feasibility/banner.png";
import marketResearch from "@/public/images/services/small-business/feasibility/presentation.png";

const FeasibilityStudyPage = () => {
    return (
        <>
            <Banner
                title="Feasibility Study - Validate Your Business Idea"
                breadcrumb="Small Business / Feasibility Study"
            />

            <Section2
                title='Comprehensive Business Validation Analysis'
                p1="Before investing significant time and resources into a new business venture, a feasibility study provides the critical analysis needed to determine if your idea is viable. This comprehensive assessment examines market demand, operational requirements, financial projections, and potential risks to give you confidence in your business direction."
                p2="We conduct thorough feasibility studies that provide data-driven insights into your business concept's potential for success. Our studies help you make informed decisions, avoid costly mistakes, and build a solid foundation for your business planning."
                src={feasibilityBanner}
            />

            <Pricing
                startingPrice="C$ 3,200"
                daysUntilDraft="12-16 business days"
                rushServiceText="Extended timeline for comprehensive research"
                numberOfPages="30-50 page report"
                packageTitle="Feasibility Study Package"
                packageSubtitle="Complete Business Validation"
                includedFeatures={[
                    "Executive summary with key findings and recommendations",
                    "Market analysis and demand assessment",
                    "Competitive landscape evaluation",
                    "Technical and operational feasibility",
                    "Financial viability analysis",
                    "Risk assessment and mitigation strategies",
                    "Regulatory and compliance review",
                    "Location analysis (if applicable)",
                    "Implementation timeline and requirements",
                    "Go/No-Go decision framework"
                ]}
                whatIncludedTitle="Study Components"
                whatIncludedSubtitle="Comprehensive Business Analysis"
                whatIncludedFeatures={[
                    "Primary and secondary market research",
                    "SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)",
                    "Financial projection modeling",
                    "Sensitivity analysis for key assumptions",
                    "Industry benchmarking and best practices",
                    "Actionable recommendations and next steps"
                ]}
                processTitle="Our Feasibility Study Process"
                processSubtitle="6 Steps to Business Validation"
                processSteps={[
                    "Project Scoping: Define study objectives and parameters",
                    "Data Collection: Gather market, operational, and financial data",
                    "Analysis: Evaluate all aspects of business feasibility",
                    "Financial Modeling: Project costs, revenues, and profitability",
                    "Risk Assessment: Identify and evaluate potential challenges",
                    "Reporting: Deliver comprehensive findings and recommendations"
                ]}
            />

            <Video
                title="The Importance of Feasibility Studies"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Data-Driven Business Decision Making'
                p1='Many business failures result from insufficient upfront research and validation. A feasibility study provides the objective analysis needed to determine if your business concept has a realistic chance of success before you commit significant resources. It answers the critical question: "Should we proceed with this business idea?"'
                p2='Our feasibility studies examine all critical dimensions:'
                p3="Market Viability: Is there sufficient demand for your product/service? Technical Feasibility: Can you deliver your solution effectively? Financial Sustainability: Will the business generate adequate returns? Operational Practicality: Do you have the resources and capabilities? Legal Compliance: Are there regulatory barriers or requirements? Risk Management: What could go wrong and how to mitigate it?"
                p4="With our feasibility study expertise, you'll have the confidence to move forward with promising opportunities or pivot away from concepts that lack sufficient potential, saving you time, money, and frustration in the long run."
                src={marketResearch}
                variant='right'
            />

            <Faq
                title="Feasibility Study FAQs"
                subtitle="Common questions about business validation"
                faqs={[
                    {
                        question: "What's the difference between a feasibility study and a business plan?",
                        answer: "A feasibility study determines if a business idea is viable, while a business plan outlines how to implement a viable idea. The study answers 'Should we do this?' while the plan answers 'How will we do this?'"
                    },
                    {
                        question: "When should I conduct a feasibility study?",
                        answer: "Before developing a full business plan or making significant financial commitments. Ideally during the concept validation phase when you're still evaluating whether to pursue the business opportunity."
                    },
                    {
                        question: "How accurate are feasibility study projections?",
                        answer: "We provide realistic ranges based on market data and conservative assumptions. While not guarantees, our projections are grounded in research and industry benchmarks to give you reliable guidance for decision-making."
                    },
                    {
                        question: "Can a feasibility study help secure funding?",
                        answer: "Absolutely. Lenders and investors view feasibility studies as evidence of thorough due diligence. They demonstrate that you've objectively evaluated the business concept and understand the risks and opportunities."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Validate Your Business Idea?"
                subtitle="Speak with our feasibility study experts to get data-driven insights about your business concept's potential for success."
            />
        </>
    )
}

export default FeasibilityStudyPage