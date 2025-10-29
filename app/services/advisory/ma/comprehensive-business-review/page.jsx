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

import comprehensiveReviewBanner from "@/public/images/services/advisory/ma/comprehensive-business-review/banner.png";
import comprehensiveReviewDocument from "@/public/images/services/advisory/ma/comprehensive-business-review/document.png";

const ComprehensiveBusinessReviewPage = () => {
    return (
        <>
            <Banner
                title="Comprehensive Business Review - Strategic Assessment for Growth"
                breadcrumb="Advisory / M&A / Comprehensive Business Review"
            />

            <Section2
                title="Transform Your Business with a Complete Strategic Assessment"
                p1="A Comprehensive Business Review is a thorough, multi-dimensional analysis of your company's current state, identifying strengths, weaknesses, opportunities, and threats across all operational areas. This strategic assessment provides a clear roadmap for growth, efficiency improvements, and value maximization. It's the foundation for making informed decisions about your business's future direction."
                p2="Our comprehensive approach examines every aspect of your business - from financial performance and operational efficiency to market position and competitive advantages. We provide actionable insights and strategic recommendations that can significantly enhance your company's value, whether you're planning for growth, preparing for sale, or seeking to optimize current operations."
                src={comprehensiveReviewBanner}
            />

            <Pricing
                startingPrice="C$ 5,000"
                daysUntilDraft="7-10 business days"
                rushServiceText="Expedited service available for urgent strategic planning"
                numberOfPages="25-40 Page Comprehensive Analysis"
                packageTitle="Comprehensive Business Review Package"
                packageSubtitle="A Complete Strategic Assessment of Your Business Operations"
                includedFeatures={[
                    "Financial Performance Analysis & Benchmarking",
                    "Operational Efficiency Assessment",
                    "Market Position & Competitive Analysis",
                    "SWOT Analysis & Strategic Opportunities",
                    "Management & Organizational Structure Review",
                    "Technology & Systems Evaluation",
                    "Customer Base & Revenue Stream Analysis",
                    "Risk Assessment & Mitigation Strategies",
                    "Growth Opportunities Identification",
                    "Strategic Recommendations & Action Plan",
                    "Value Enhancement Opportunities",
                    "Executive Summary & Key Findings"
                ]}
                whatIncludedTitle="Strategic Applications"
                whatIncludedSubtitle="Maximizing Your Business Potential"
                whatIncludedFeatures={[
                    "Pre-Sale Value Optimization",
                    "Strategic Growth Planning",
                    "Operational Efficiency Improvements",
                    "M&A Preparation & Positioning",
                    "Succession Planning & Transition",
                    "Investment & Capital Raising Support",
                    "Performance Benchmarking",
                    "Risk Management Enhancement"
                ]}
                processTitle="Our Comprehensive Review Process"
                processSubtitle="A Systematic 6-Step Approach to Business Excellence"
                processSteps={[
                    "Initial Assessment & Scope Definition: Understanding your business objectives and review parameters.",
                    "Data Collection & Analysis: Gathering financial, operational, and market data from multiple sources.",
                    "Financial Deep Dive: Analyzing profitability, cash flow, working capital, and financial health metrics.",
                    "Operational Review: Examining processes, efficiency, technology, and organizational structure.",
                    "Market & Competitive Analysis: Assessing market position, competitive advantages, and growth opportunities.",
                    "Strategic Recommendations: Developing actionable insights and a comprehensive improvement roadmap."
                ]}
            />

            <Video
                title="What Makes a Comprehensive Business Review Valuable?"
                videoId="XXXXXXXXX" // Find a video about business analysis and strategic planning
            />

            <Section2
                title="More Than Analysis, It's Your Strategic Blueprint"
                p1="A comprehensive business review goes far beyond traditional financial analysis. It provides a 360-degree view of your business, uncovering hidden opportunities and identifying areas for improvement that can significantly impact your bottom line. This holistic approach ensures that every aspect of your business is aligned with your strategic objectives and market opportunities."
                p2="The insights gained from this review become your strategic blueprint for the next 12-24 months. Whether you're preparing for a sale, seeking investment, or simply looking to optimize operations, this comprehensive assessment provides the data-driven foundation for all your strategic decisions. It's an investment in your business's future success."
                src={comprehensiveReviewDocument}
                variant='right'
            />

            <Faq
                title="Comprehensive Business Review FAQs"
                subtitle="Understanding the Strategic Assessment Process"
                faqs={[
                    {
                        question: "How is this different from a standard financial audit?",
                        answer: "While a financial audit focuses on accuracy and compliance, our comprehensive business review analyzes strategic performance, operational efficiency, market position, and growth opportunities. It's forward-looking and strategic, providing actionable insights for business improvement and value enhancement."
                    },
                    {
                        question: "What types of businesses benefit most from this review?",
                        answer: "This review is valuable for businesses of all sizes planning for growth, sale, or optimization. It's particularly beneficial for companies considering M&A transactions, seeking investment, undergoing leadership transitions, or looking to identify operational improvements and growth opportunities."
                    },
                    {
                        question: "How long does the comprehensive review process take?",
                        answer: "Our standard process takes 7-10 business days, including data collection, analysis, and report preparation. The timeline depends on the complexity of your business, availability of data, and scope of the review. Rush services are available for urgent strategic planning needs."
                    },
                    {
                        question: "What deliverables will I receive?",
                        answer: "You'll receive a comprehensive 25-40 page report including executive summary, detailed analysis across all business areas, strategic recommendations, implementation roadmap, and supporting data. We also provide a 90-minute presentation and Q&A session to discuss findings and next steps."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Unlock Your Business's Full Potential?"
                subtitle="Contact our advisory team to discuss how a comprehensive business review can provide the strategic insights you need to optimize performance and maximize value."
            />
        </>
    )
}

export default ComprehensiveBusinessReviewPage