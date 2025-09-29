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

// Suggested images for Executive Summary
import executiveSummaryBanner from "@/public/images/services/advisory/startup/summary/banner.png";
import summaryPresentation from "@/public/images/services/advisory/startup/summary/presentation.png";

const ExecutiveSummaryPage = () => {
    return (
        <>
            {/* BANNER: For Executive Summary */}
            <Banner
                title="Executive Summary - Your Business Story in 2 Minutes"
                breadcrumb="Advisory / Executive Summary"
            />

            <Section2
                title='The Most Important Page of Your Business Plan'
                p1="An executive summary is often the only part of your business plan that busy investors, lenders, or executives will read. It must capture attention immediately, communicate your core value proposition clearly, and compel the reader to take action. A powerful executive summary can mean the difference between securing a meeting and being overlooked."
                p2="We specialize in crafting compelling executive summaries that distill complex business concepts into clear, persuasive narratives. Our summaries are optimized for different audiences - investors, banks, corporate partners, or internal stakeholders - ensuring your key messages resonate with the right decision-makers."
                src={executiveSummaryBanner}
            />

            <Pricing
                startingPrice="C$ 950"
                daysUntilDraft="3-5 business days"
                rushServiceText="24-hour rush service available"
                numberOfPages="1-3 pages (optimized for impact)"
                packageTitle="Professional Executive Summary Package"
                packageSubtitle="Your Gateway to Business Opportunities"
                includedFeatures={[
                    "Audience-Tailored Opening Hook",
                    "Clear Problem-Solution Statement",
                    "Compelling Value Proposition",
                    "Market Opportunity Summary",
                    "Business Model Overview",
                    "Competitive Advantage Highlights",
                    "Management Team Snapshot",
                    "Financial Highlights & Key Metrics",
                    "Clear Call-to-Action",
                    "Two Different Writing Styles (Choose Your Preference)",
                    "Three Rounds of Revisions",
                    "Multiple Format Deliverables (PDF, Word, Presentation Slide)"
                ]}
                whatIncludedTitle="What Makes Our Executive Summaries Effective"
                whatIncludedSubtitle="Crafted for Maximum Impact in Minimum Time"
                whatIncludedFeatures={[
                    "Strategic Framing: Positioning your business for specific audience interests",
                    "Benefit-Focused Language: Emphasizing what matters to the reader",
                    "Data Visualization: Incorporating key metrics and graphics for quick comprehension",
                    "Persuasive Structure: Logical flow that builds to a compelling conclusion",
                    "Professional Tone: Balancing credibility with engagement",
                    "Action-Oriented: Clear next steps that drive desired outcomes"
                ]}
                processTitle="Our Executive Summary Creation Process"
                processSubtitle="5 Steps to Persuasive Communication"
                processSteps={[
                    "Audience Analysis: Understanding reader priorities and decision criteria",
                    "Core Message Extraction: Identifying your most compelling points",
                    "Structure Design: Creating logical flow for maximum impact",
                    "Draft Creation: Writing concise, powerful content",
                    "Polish & Optimize: Refining language and strengthening persuasiveness"
                ]}
            />

            <Video
                title="Crafting Executive Summaries That Get Results"
                videoId="XXXXXXXXX" // Find a video about executive summary best practices
            />

            <Section2
                title='More Than a Summary - Your Strategic First Impression'
                p1='Many businesses make the mistake of treating the executive summary as just a condensed version of their business plan. In reality, it needs to stand alone as a complete, persuasive document that works even if the reader never sees the full plan. It should tell a compelling story that makes the reader want to learn more.'
                p2='Our executive summaries are built around proven persuasive frameworks:'
                p3="The Hook: Immediate attention-grabbing opening that addresses reader interests. Problem-Solution Fit: Clear articulation of the problem and why your solution matters. Evidence-Based Claims: Supporting your value proposition with credible data and metrics. Unique Differentiation: Highlighting what sets you apart from alternatives. Social Proof: Incorporating testimonials, partnerships, or early traction. Clear Ask: Specific, actionable next steps for the reader."
                p4="With our executive summary expertise, you'll have a powerful tool that opens doors, secures meetings, and positions your business for success - whether you're seeking investment, partnerships, or internal approval for strategic initiatives."
                src={summaryPresentation}
                variant='right'
            />

            <Faq
                title="Executive Summary FAQs"
                subtitle="Common questions about professional executive summaries"
                faqs={[
                    {
                        question: "How long should an executive summary be?",
                        answer: "Ideal length is 1-2 pages, absolutely maximum 3 pages. Busy executives and investors typically spend 2-5 minutes reviewing an executive summary, so every word must count. We focus on density of impact, not length."
                    },
                    {
                        question: "Should the executive summary be written before or after the full business plan?",
                        answer: "We recommend writing it after the business plan is complete, but thinking about it from the beginning. This ensures it accurately reflects the full plan while maintaining the strategic perspective needed to stand alone as a persuasive document."
                    },
                    {
                        question: "How do you tailor executive summaries for different audiences?",
                        answer: "Investors want growth potential and returns, lenders want security and cash flow, corporate partners want strategic fit, and internal stakeholders want operational impact. We emphasize different aspects of your business based on who's reading and what they care about most."
                    },
                    {
                        question: "What's the most common mistake businesses make in executive summaries?",
                        answer: "Including too much operational detail and not enough strategic vision. The executive summary should focus on the 'why' and 'what' - why this opportunity matters and what makes it compelling. Save the 'how' for the full business plan."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Make Your Best First Impression?"
                subtitle="Speak with our executive summary specialists to create a compelling narrative that opens doors and creates opportunities for your business."
            />
        </>
    )
}

export default ExecutiveSummaryPage