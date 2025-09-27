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

// Suggested images for Franchise Pitch Deck
import pitchDeckBanner from "@/public/images/services/small-business/franchisor/pitch-deck/pitchdeck-banner.png";
import franchisePresentation from "@/public/images/services/small-business/franchisor/pitch-deck/presentation.png";

const FranchisePitchDeckPage = () => {
    return (
        <>
            {/* BANNER: For Franchise Pitch Deck */}
            <Banner
                title="Franchise Pitch Deck - Attract Quality Franchisees"
                breadcrumb="Business Planning / Franchisor Master Business Plan / Pitch Deck"
            />

            <Section2
                title='Compelling Franchise Sales Presentations That Convert'
                p1="Your pitch deck is the first impression potential franchisees have of your opportunity. It needs to instantly communicate your brand's value proposition, profitability potential, and support system in a visually compelling way. A professional franchise pitch deck can significantly increase your conversion rates and attract higher-quality franchise partners."
                p2="We design investor-grade pitch decks specifically for franchise sales, combining compelling storytelling with data-driven insights. Our decks are optimized to address franchisee concerns, demonstrate proven success, and showcase your unique competitive advantages in the franchise marketplace."
                src={pitchDeckBanner}
            />

            <Pricing
                startingPrice="C$ 2,800"
                daysUntilDraft="8-12 business days"
                rushServiceText="Rush service available for franchise expos"
                numberOfPages="15-25 slides"
                packageTitle="Professional Franchise Pitch Deck Package"
                packageSubtitle="Convert More Qualified Franchise Candidates"
                includedFeatures={[
                    "Executive Summary Slide (30-second elevator pitch)",
                    "Brand Story & Market Opportunity Presentation",
                    "Franchise Concept & Unique Value Proposition",
                    "Financial Performance Highlights & Unit Economics",
                    "Franchisee Support & Training System Overview",
                    "Territory Availability & Expansion Strategy",
                    "Franchisee Success Stories & Testimonials",
                    "Investment Requirements & ROI Projections",
                    "Next Steps & Call-to-Action Sequence",
                    "Two design concepts to choose from",
                    "Unlimited revisions until perfect"
                ]}
                whatIncludedTitle="What's Included in Your Pitch Deck"
                whatIncludedSubtitle="Designed to Accelerate Franchise Sales"
                whatIncludedFeatures={[
                    "Visual Storytelling: Compelling narrative that resonates with franchise candidates",
                    "Data Visualization: Clear presentation of financials and performance metrics",
                    "Brand Alignment: Consistent with your franchise identity and values",
                    "Franchisee-Focused: Addresses candidate concerns and questions proactively",
                    "Conversion Optimized: Strategic flow designed to move candidates to next step",
                    "Multi-Format Delivery: PowerPoint, PDF, and print-ready versions"
                ]}
                processTitle="Our Pitch Deck Creation Process"
                processSubtitle="5 Steps to Franchise Sales Excellence"
                processSteps={[
                    "Discovery & Strategy: Deep dive into your franchise value proposition",
                    "Content Development: Crafting compelling messaging and storytelling",
                    "Visual Design: Creating professional, brand-aligned slide designs",
                    "Review & Refinement: Collaborative feedback and optimization",
                    "Final Delivery & Training: Deck handover and presentation coaching"
                ]}
            />

            <Video
                title="Crafting Irresistible Franchise Pitches"
                videoId="XXXXXXXXX" // Find a video about franchise sales techniques
            />

            <Section2
                title='Professionally Designed to Win Quality Franchisees'
                p1="A generic PowerPoint presentation won''t cut it in today''s competitive franchise market. Potential franchisees evaluate multiple opportunities and need to quickly understand why your franchise stands out. Your pitch deck must answer their key questions before they even ask them."
                p2='Our franchise-specific pitch decks include critical elements that drive conversions:'
                p3="Proven Success Metrics: Demonstrating existing franchisee performance and satisfaction. Clear Investment Picture: Transparent breakdown of costs, fees, and ROI timeline. Comprehensive Support System: Showing how you help franchisees succeed from day one. Market Differentiation: Highlighting what makes your franchise unique and defensible. Growth Story: Presenting your brand's trajectory and future expansion plans."
                p4="With our franchise pitch deck expertise, you'll have a powerful sales tool that not only attracts more candidates but helps you close higher-quality franchise partners who are aligned with your brand vision."
                src={franchisePresentation}
                variant='right'
            />

            <Faq
                title="Franchise Pitch Deck FAQs"
                subtitle="Common questions about franchise sales presentations"
                faqs={[
                    {
                        question: "How many slides should a franchise pitch deck include?",
                        answer: "Typically 15-25 slides. Enough to cover key information but concise enough to maintain attention. The deck should take 20-30 minutes to present with time for questions."
                    },
                    {
                        question: "What's the most important slide in a franchise pitch deck?",
                        answer: "The financial performance slide showing unit economics, ROI timeline, and existing franchisee results. This addresses the #1 concern of potential franchisees - profitability."
                    },
                    {
                        question: "Should the pitch deck include franchisee testimonials?",
                        answer: "Absolutely! Real franchisee success stories and testimonials build credibility and trust. Include 2-3 compelling testimonials with photos and specific results."
                    },
                    {
                        question: "How do you handle sensitive financial information in the deck?",
                        answer: "We present enough data to demonstrate viability without disclosing proprietary information. We use ranges, percentages, and anonymized performance data that protects your confidential business information."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Accelerate Your Franchise Sales?"
                subtitle="Speak with our franchise marketing experts to create a pitch deck that attracts ideal franchise partners and accelerates your expansion."
            />
        </>
    )
}

export default FranchisePitchDeckPage