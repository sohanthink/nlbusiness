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

// Suggested images for Strategic Buyer List
import buyerListBanner from "@/public/images/services/advisory/ma/buyer-list/banner.png";
import buyerListDocument from "@/public/images/services/advisory/ma/buyer-list/document.png";

const BuyerListPage = () => {
    return (
        <>
            {/* BANNER: For Strategic Buyer List */}
            <Banner
                title="Strategic Buyer List Development - Connecting Your Business with the Right Acquirers."
                breadcrumb="Advisory / M&A / Strategic Buyer List"
            />

            <Section2
                title='Identify and Engage the Ideal Buyers for Your Business'
                p1="A successful business sale begins with identifying the right pool of potential acquirers. A Strategic Buyer List is more than just a directory; it's a meticulously researched and qualified list of companies and investors with the strategic intent and financial capacity to purchase your business. It is the foundational step in any M&A process, designed to maximize competitive tension and achieve the highest possible valuation."
                p2="We specialize in building comprehensive, actionable buyer lists tailored to your unique business and exit goals. Leveraging premium databases, industry networks, and in-depth market analysis, we identify both strategic acquirers (competitors, suppliers, customers) and financial buyers (private equity, family offices) who are the best fit to carry your company's legacy forward."
                src={buyerListBanner}
            />

            <Pricing
                startingPrice="C$ 2,500"
                daysUntilDraft="7-10 business days"
                rushServiceText="Expedited service for urgent M&A mandates"
                numberOfPages="20-40 Qualified Buyer Profiles"
                packageTitle="Strategic Buyer List Package"
                packageSubtitle="Targeted Research to Maximize Acquisition Interest"
                includedFeatures={[
                    "Definition of Ideal Buyer Persona & Strategic Fit Criteria",
                    "Identification of Primary Strategic/Corporate Acquirers",
                    "Identification of Relevant Financial Buyers (Private Equity, Family Offices)",
                    "Initial Vetting for Financial Capacity & Acquisition History",
                    "Key Contact Identification (Corp Dev, M&A, C-Suite)",
                    "Detailed Profiles for Top 10-15 Tier-1 Targets",
                    "Rationale for Inclusion for Each Potential Buyer",
                    "Prioritized Tiering of All Identified Targets (Tier 1, 2, 3)"
                ]}
                whatIncludedTitle="Targeted Buyer Categories"
                whatIncludedSubtitle="A Comprehensive Approach to Sourcing Acquirers"
                whatIncludedFeatures={[
                    "Strategic/Corporate Acquirers in Your Industry",
                    "Private Equity Groups with Relevant Platform Investments",
                    "Family Offices with a Long-Term Investment Horizon",
                    "Companies in Adjacent Markets Seeking Diversification",
                    "International Buyers Seeking North American Entry",
                    "Management Buy-In (MBI) Candidates"
                ]}
                processTitle="Our Buyer List Development Process"
                processSubtitle="A Data-Driven 4-Step Methodology"
                processSteps={[
                    "Strategic Alignment Session: Defining your sale objectives and the ideal buyer profile.",
                    "Multi-Channel Market Research: Using proprietary databases and industry analysis to source a broad list of potential buyers.",
                    "Vetting & Prioritization: Qualifying each target based on strategic fit, financial capacity, and acquisition history.",
                    "List Compilation & Delivery: Delivering a detailed report with buyer profiles, key contacts, and strategic rationale."
                ]}
            />

            <Video
                title="How to Find the Right Buyer for Your Business"
                videoId="XXXXXXXXX" // Find a video from an M&A advisor on buyer identification
            />

            <Section2
                title='Quality Over Quantity: A Strategic Approach'
                p1='A long, untargeted list of potential buyers is ineffective and can damage your sale process by creating confidentiality leaks and wasting valuable time. Our focus is on creating a curated list of high-probability acquirers. This strategic approach ensures that your management team only engages in discussions with serious, well-aligned parties.'
                p2='A well-researched buyer list creates competitive tension, maintains confidentiality by limiting outreach, aligns with your company’s strategic goals, and ultimately saves you hundreds of hours of work. It transforms your M&A approach from reactive to proactive, putting you in control of the process from day one.'
                src={buyerListDocument}
                variant='right'
            />

            <Faq
                title="Strategic Buyer List FAQs"
                subtitle="Understanding the M&A Targeting Process"
                faqs={[
                    {
                        question: "Why do I need a professional buyer list? Can't I just Google potential buyers?",
                        answer: "While you can find some potential buyers online, a professional list is built using access to premium M&A databases, industry networks, and deep analysis. We vet for financial capacity and strategic fit, identify the correct decision-makers, and ensure a confidential, structured approach that saves you time and increases the likelihood of a successful transaction."
                    },
                    {
                        question: "What's the difference between a 'strategic' and a 'financial' buyer?",
                        answer: "A strategic buyer is typically another company in your industry (e.g., a competitor, supplier, or customer) looking for synergies, market share, or technology. A financial buyer is an investment firm, like a private equity group, that is primarily focused on the return on investment (ROI) they can generate from your business."
                    },
                    {
                        question: "How do you ensure confidentiality when creating the list?",
                        answer: "This entire process is conducted with the utmost discretion. We do not contact any potential buyers at this stage. The list is researched and compiled internally and delivered directly and only to you. It serves as your strategic roadmap for future, confidential outreach."
                    },
                    {
                        question: "Does this service include reaching out to the buyers?",
                        answer: "This package is focused solely on the research, identification, and compilation of the Strategic Buyer List. We offer separate M&A advisory services that cover the subsequent steps of confidential marketing, buyer outreach, and negotiation."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Identify Your Ideal Acquirers?"
                subtitle="Contact us today to build a strategic buyer list that kickstarts a successful and competitive M&A process for your business."
            />
        </>
    )
}

export default BuyerListPage