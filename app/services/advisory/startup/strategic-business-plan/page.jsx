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

// Suggested images for Strategic Business Plan
import strategicPlanBanner from "@/public/images/services/advisory/startup/sttragic/banner.png";
import businessStrategy from "@/public/images/services/advisory/startup/sttragic/business.png";

const StrategicBusinessPlanPage = () => {
    return (
        <>
            {/* BANNER: For Strategic Business Plan */}
            <Banner
                title="Strategic Business Plan - Roadmap for Long-Term Success"
                breadcrumb="Advisory / Strategic Business Plan"
            />

            <Section2
                title='Comprehensive Strategic Planning for Sustainable Growth'
                p1="A strategic business plan goes beyond operational details to provide a clear roadmap for achieving long-term vision and competitive advantage. It aligns your organization around common goals, identifies growth opportunities, and prepares your business for future challenges. Unlike traditional business plans, strategic planning focuses on where you're going and how you'll get there in a competitive marketplace."
                p2="We develop comprehensive strategic business plans that serve as living documents for organizational alignment and decision-making. Our approach combines rigorous market analysis with internal capability assessment to create actionable strategies that drive sustainable growth and competitive differentiation."
                src={strategicPlanBanner}
            />

            <Pricing
                startingPrice="C$ 5,500"
                daysUntilDraft="15-22 business days"
                rushServiceText="Extended timeline for comprehensive strategic analysis"
                numberOfPages="40-60 pages + Executive Dashboard"
                packageTitle="Comprehensive Strategic Business Plan Package"
                packageSubtitle="Your Blueprint for Organizational Alignment and Growth"
                includedFeatures={[
                    "Executive Summary with strategic vision and key initiatives",
                    "SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)",
                    "PESTLE Analysis (Political, Economic, Social, Technological, Legal, Environmental)",
                    "Competitive Intelligence and Market Positioning",
                    "Vision, Mission, and Core Values Definition",
                    "3-5 Year Strategic Objectives and Key Results (OKRs)",
                    "Market Development Strategies (Market Penetration, Development, Product Development, Diversification)",
                    "Operational Excellence Roadmap",
                    "Technology and Digital Transformation Strategy",
                    "Human Capital and Organizational Development Plan",
                    "Risk Management and Contingency Planning",
                    "Performance Metrics and Balanced Scorecard",
                    "Implementation Timeline with Milestones"
                ]}
                whatIncludedTitle="Strategic Planning Components"
                whatIncludedSubtitle="Holistic Approach to Business Success"
                whatIncludedFeatures={[
                    "Environmental Scanning: Comprehensive analysis of internal and external factors",
                    "Strategic Gap Analysis: Identifying gaps between current state and desired future",
                    "Scenario Planning: Preparing for multiple future possibilities",
                    "Resource Allocation Strategy: Optimizing investment across strategic initiatives",
                    "Change Management Plan: Ensuring successful strategy implementation",
                    "Continuous Improvement Framework: Building adaptability into your organization"
                ]}
                processTitle="Our Strategic Planning Process"
                processSubtitle="8 Steps to Strategic Clarity"
                processSteps={[
                    "Current State Assessment: Comprehensive analysis of your business today",
                    "Stakeholder Alignment: Ensuring leadership team buy-in and alignment",
                    "Environmental Analysis: Understanding market trends and competitive forces",
                    "Strategic Direction Setting: Defining vision, mission, and strategic priorities",
                    "Initiative Development: Creating specific programs and projects",
                    "Resource Planning: Aligning budget, people, and technology with strategy",
                    "Implementation Roadmap: Creating detailed execution plan",
                    "Monitoring Framework: Establishing metrics and review processes"
                ]}
            />

            <Video
                title="Mastering Strategic Business Planning"
                videoId="XXXXXXXXX" // Find a video about strategic planning success
            />

            <Section2
                title='Beyond Operational Planning to Strategic Leadership'
                p1='Many businesses have operational plans but lack true strategic direction. A strategic business plan transforms your organization from reactive to proactive, creating a clear path to competitive advantage and market leadership. It ensures all departments and team members are aligned toward common strategic objectives.'
                p2='Our strategic planning methodology focuses on critical success factors:'
                p3="Strategic Alignment: Ensuring all business units work toward common goals. Competitive Advantage: Identifying and leveraging your unique differentiators. Resource Optimization: Allocating resources to highest-impact initiatives. Organizational Capability: Building the skills and systems needed for future success. Innovation Pipeline: Creating systematic approaches to innovation and adaptation. Stakeholder Value: Balancing needs of customers, employees, and shareholders."
                p4="With our strategic planning expertise, you'll have more than a document - you'll have a comprehensive framework for making strategic decisions, allocating resources effectively, and building an organization capable of achieving its long-term vision in an ever-changing business environment."
                src={businessStrategy}
                variant='right'
            />

            <Faq
                title="Strategic Business Plan FAQs"
                subtitle="Common questions about strategic planning"
                faqs={[
                    {
                        question: "What's the difference between a strategic plan and a business plan?",
                        answer: "A business plan focuses on operational execution and is often used for funding. A strategic plan focuses on long-term direction, competitive advantage, and organizational alignment. Strategic plans are living documents that guide decision-making at the highest level."
                    },
                    {
                        question: "How far into the future should a strategic plan look?",
                        answer: "Typically 3-5 years, with annual refresh cycles. The timeframe depends on your industry volatility - technology companies may plan 2-3 years out, while manufacturing might plan 5-7 years. We customize the timeframe based on your business context."
                    },
                    {
                        question: "Who should be involved in the strategic planning process?",
                        answer: "The leadership team must be deeply involved, with input from key stakeholders including board members, senior managers, and sometimes key customers or partners. Strategic planning cannot be delegated - it requires active leadership participation."
                    },
                    {
                        question: "How do you ensure strategic plans get implemented, not just shelved?",
                        answer: "We build implementation frameworks directly into the plan including accountability matrices, performance dashboards, regular review cycles, and change management strategies. The plan becomes a living management tool, not a document that gathers dust."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Chart Your Strategic Course?"
                subtitle="Speak with our strategic planning experts to create a comprehensive roadmap that aligns your organization and drives sustainable competitive advantage."
            />
        </>
    )
}

export default StrategicBusinessPlanPage