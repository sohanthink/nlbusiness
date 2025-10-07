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


import investorPresBanner from "@/public/images/services/small-business/investor/banner.png";
import pitchMeeting from "@/public/images/services/small-business/investor/presentation.png";

const InvestorPresentationPage = () => {
    return (
        <>
            <Banner
                title="Investor Presentation - Compelling Pitch Decks"
                breadcrumb="Small Business / Investor Presentation"
            />

            <Section2
                title='Professional Pitch Decks That Secure Funding'
                p1="A powerful investor presentation is your gateway to securing the capital needed for growth. In today's competitive funding landscape, you have just 10-15 minutes to capture investor attention and convince them your business is worth their time and money. A well-crafted pitch deck can make the difference between funding success and rejection."
                p2="We create investor-grade presentations that combine compelling storytelling with data-driven insights. Our decks are designed to quickly communicate your value proposition, demonstrate market opportunity, and showcase your team's ability to execute on the vision."
                src={investorPresBanner}
            />

            <Pricing
                startingPrice="C$ 2,800"
                daysUntilDraft="7-10 business days"
                rushServiceText="Fast turnaround for investor meetings"
                numberOfPages="12-18 slides"
                packageTitle="Investor Presentation Package"
                packageSubtitle="Complete Pitch Deck Solution"
                includedFeatures={[
                    "Compelling problem-solution narrative",
                    "Market size and opportunity analysis",
                    "Business model and revenue streams",
                    "Competitive landscape and differentiation",
                    "Traction and milestones achieved",
                    "Financial highlights and projections",
                    "Team expertise and credentials",
                    "Funding requirements and use of funds",
                    "Growth strategy and future roadmap",
                    "Two design concepts with unlimited revisions"
                ]}
                whatIncludedTitle="Presentation Specialization"
                whatIncludedSubtitle="Designed for Investor Engagement"
                whatIncludedFeatures={[
                    "Investor psychology optimization",
                    "Visual storytelling techniques",
                    "Data visualization best practices",
                    "Q&A preparation support",
                    "Delivery coaching tips",
                    "Multiple format delivery"
                ]}
                processTitle="Our Presentation Process"
                processSubtitle="5 Steps to Pitch Perfection"
                processSteps={[
                    "Story Development: Craft compelling investment narrative",
                    "Content Strategy: Structure key messages for impact",
                    "Visual Design: Create professional, engaging slides",
                    "Review & Refine: Optimize for clarity and persuasion",
                    "Final Delivery: Provide presentation-ready materials"
                ]}
            />

            <Video
                title="Mastering Investor Presentations"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Investor-Focused Storytelling'
                p1='Investors see hundreds of pitch decks each month. To stand out, your presentation must immediately communicate why your business represents a unique opportunity for exceptional returns. Generic templates and crowded slides will quickly lose investor interest and undermine your credibility.'
                p2='Our investor presentations focus on what matters most:'
                p3="Clear Value Proposition: Immediate understanding of your unique solution. Massive Market Opportunity: Demonstrating significant growth potential. Proven Traction: Evidence of customer demand and market validation. Strong Team: Right experience to execute the business plan. Defensible Position: Sustainable competitive advantages. Compelling Returns: Clear path to investor profitability."
                p4="With our investor presentation expertise, you'll have a powerful tool that not only secures meetings but helps you close funding rounds by building investor confidence in your vision and execution capabilities."
                src={pitchMeeting}
                variant='right'
            />

            <Faq
                title="Investor Presentation FAQs"
                subtitle="Common questions about pitch decks"
                faqs={[
                    {
                        question: "How many slides should an investor presentation include?",
                        answer: "Ideal length is 12-15 slides maximum. Investors prefer concise, focused presentations that can be delivered in 10-15 minutes. Every slide should serve a specific purpose and move the story forward."
                    },
                    {
                        question: "What's the most important slide in a pitch deck?",
                        answer: "The problem-solution slide is critical as it establishes why your business exists. However, the financials slide often determines if investors take the next step, as it shows the return potential and business scalability."
                    },
                    {
                        question: "Should I include detailed financials in the presentation?",
                        answer: "Include key highlights and projections only. Save detailed financial models for follow-up meetings. Focus on showing revenue growth, margins, and key metrics that demonstrate business model viability."
                    },
                    {
                        question: "How do you tailor presentations for different investor types?",
                        answer: "Angel investors focus more on the team and vision, VCs on scalability and market size, while strategic investors emphasize synergies. We customize the emphasis and messaging based on your target investor profile."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Impress Investors?"
                subtitle="Speak with our presentation experts to create a compelling pitch deck that secures meetings and drives funding success."
            />
        </>
    )
}

export default InvestorPresentationPage