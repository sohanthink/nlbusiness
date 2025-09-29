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

// Suggested images for Pitch Deck
import pitchDeckBanner from "@/public/images/services/advisory/startup/pitch-deck/banner.png";
import investorPresentation from "@/public/images/services/advisory/startup/pitch-deck/invest.png";

const PitchDeckPage = () => {
    return (
        <>
            {/* BANNER: For Pitch Deck */}
            <Banner
                title="Professional Pitch Deck Development - Win Investors & Secure Funding"
                breadcrumb="Advisory / Pitch Deck"
            />

            <Section2
                title='Compelling Pitch Decks That Convert Investors'
                p1="A great pitch deck is more than just slides—it's a strategic narrative that transforms your business idea into an irresistible investment opportunity. In today's competitive funding landscape, investors see hundreds of pitch decks. Yours needs to stand out with clear storytelling, compelling visuals, and data-driven insights that demonstrate your venture's potential for exceptional returns."
                p2="We specialize in creating investor-grade pitch decks that speak directly to your target audience. Our decks are designed to capture attention in the first 30 seconds, build credibility throughout the presentation, and end with a clear call-to-action that drives investment decisions."
                src={pitchDeckBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="8-12 business days"
                rushServiceText="Rush service available for upcoming investor meetings"
                numberOfPages="12-20 slides + Appendix"
                packageTitle="Premium Pitch Deck Package"
                packageSubtitle="Investor-Ready Presentation That Secures Funding"
                includedFeatures={[
                    "Executive Summary slide with compelling hook (1 slide)",
                    "Problem & Solution with market validation (2-3 slides)",
                    "Market Opportunity with TAM/SAM/SOM analysis (1-2 slides)",
                    "Business Model with revenue streams and unit economics (2 slides)",
                    "Product/Service Demo with key features and benefits (2-3 slides)",
                    "Go-to-Market Strategy with customer acquisition plan (1-2 slides)",
                    "Competitive Analysis with differentiation strategy (1 slide)",
                    "Financial Projections with key metrics and assumptions (2-3 slides)",
                    "Team slide highlighting relevant experience and expertise (1 slide)",
                    "Funding Ask with use of funds breakdown (1 slide)",
                    "Appendix with detailed data and supporting materials (5-10 slides)",
                    "Two rounds of revisions with investor perspective feedback"
                ]}
                whatIncludedTitle="What Makes Our Pitch Decks Different"
                whatIncludedSubtitle="Designed for Maximum Investor Impact"
                whatIncludedFeatures={[
                    "Visual Storytelling: Compelling narrative flow that keeps investors engaged",
                    "Data-Driven Insights: Market research and financial projections that build credibility",
                    "Investor Psychology: Understanding what different investor types respond to",
                    "Professional Design: Clean, modern slides that reflect your brand quality",
                    "Flexible Format: Adaptable for different presentation contexts and time limits",
                    "Follow-up Materials: Supporting documents for due diligence and deeper discussions"
                ]}
                processTitle="Our Pitch Deck Development Process"
                processSubtitle="6 Steps to Investor Success"
                processSteps={[
                    "Investor Research: Understanding your target investor preferences and criteria",
                    "Story Development: Crafting a compelling narrative that highlights your unique value",
                    "Data Collection: Gathering market research, financial data, and competitive intelligence",
                    "Slide Creation: Building visually appealing slides with clear messaging",
                    "Presentation Practice: Preparing you for confident delivery and Q&A sessions",
                    "Follow-up Support: Creating materials for due diligence and ongoing investor relations"
                ]}
            />

            <Video
                title="Creating Pitch Decks That Win Investment"
                videoId="XXXXXXXXX" // Find a video about successful pitch deck presentations
            />

            <Section2
                title='Strategically Designed for Investment Success'
                p1="The average investor spends just 3-5 minutes reviewing a pitch deck before making a decision. Your deck must immediately communicate your value proposition, demonstrate market opportunity, and show clear potential for returns. Generic templates and one-size-fits-all approaches fail because they don' t address the specific concerns and evaluation criteria of professional investors."
                p2='Our pitch decks are built around proven investment criteria:'
                p3="Clear Problem: Demonstrating a real, urgent problem that customers will pay to solve. Scalable Solution: Showing how your product/service can grow without proportional cost increases. Large Market: Proving significant total addressable market with accessible segments. Strong Team: Highlighting management's ability to execute and scale the business. Traction: Evidence of market validation, early customers, or key partnerships. Financial Returns: Projected metrics that justify the investment and show clear exit potential."
                p4="With our investor-focused approach, you'll have a pitch deck that not only presents your business concept but actively sells your vision to the right investors, significantly increasing your chances of securing the funding needed for rapid growth and market expansion."
                src={investorPresentation}
                variant='right'
            />

            <Faq
                title="Pitch Deck FAQs"
                subtitle="Common questions about professional pitch deck development"
                faqs={[
                    {
                        question: "How many slides should my pitch deck have?",
                        answer: "The ideal pitch deck is 12-15 slides for the main presentation, with additional appendix slides for detailed data. This keeps the core presentation focused while providing supporting materials for deeper questions."
                    },
                    {
                        question: "What's the most important slide in a pitch deck?",
                        answer: "The problem/solution slide is crucial as it immediately establishes market need. However, the financial projections slide is often what investors scrutinize most closely, so both require exceptional attention to detail."
                    },
                    {
                        question: "How do you customize pitch decks for different investor types?",
                        answer: "We research your target investors' portfolio, investment thesis, and decision criteria. Angel investors focus more on team and market, while VCs emphasize scalability and returns. We adjust emphasis and language accordingly."
                    },
                    {
                        question: "What if I need to present to different audiences with the same deck?",
                        answer: "We create flexible decks with modular sections that can be easily adapted. The core narrative remains consistent, but we can adjust technical depth, financial detail, and market focus based on your audience."
                    },
                    {
                        question: "How long does it take to create a professional pitch deck?",
                        answer: "Our standard timeline is 8-12 business days, but we offer rush services for urgent investor meetings. The timeline depends on data availability, complexity of your business model, and number of revisions requested."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Create Your Winning Pitch Deck?"
                subtitle="Speak with our pitch deck specialists to develop a compelling presentation that captures investor attention and secures the funding you need to scale your business."
            />
        </>
    )
}

export default PitchDeckPage