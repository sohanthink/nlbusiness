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


import quebecBanner from "@/public/images/services/canada/quebec-self-employed/quebec-banner.png";
import quebecSelfEmployed from "@/public/images/services/canada/quebec-self-employed/quebec-investor.png";

const QuebecSelfEmployedPage = () => {
    return (
        <>

            <Banner
                title="Québec Self-Employed Worker Program Business Plan."
                breadcrumb="Canada Immigration / Québec Self-Employed Worker Program Business Plan."
            />

            <Section2
                title='Your Professional Blueprint for Québec Self-Employment Success.'
                p1="The Québec Self-Employed Worker Program targets individuals with the experience, skills, and financial capacity to create their own employment by practicing a profession or trade in Québec. This program is ideal for entrepreneurs, freelancers, artists, and skilled tradespeople who wish to establish themselves in Québec's unique cultural and economic landscape."
                p2="We develop comprehensive business plans specifically tailored to the requirements of Québec's Self-Employed Worker Program. Our expertise includes demonstrating your professional qualifications, proving the viability of your self-employment project, and showcasing how your skills will contribute to Québec's cultural or economic development—all while addressing the province's specific French language requirements and cultural context."
                src={quebecBanner}
            />

            <Pricing
                startingPrice="C$ 3,500"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available (French translation included)"
                numberOfPages="Custom + French Translation"
                packageTitle="Comprehensive Self-Employment Business Plan Package"
                packageSubtitle="A Strategic Roadmap for Your Québec Self-Employment Application"
                includedFeatures={[
                    "Executive Summary tailored to Québec's self-employment criteria",
                    "Professional Profile & Qualifications showcasing your expertise",
                    "Detailed Business Description for your self-employment project",
                    "Québec-Specific Market Analysis for your profession or trade",
                    "Marketing & Client Acquisition Strategy for the Québec market",
                    "Operations Plan including legal structure and compliance requirements",
                    "2-Year Financial Projections (Income Statements, Cash Flow)",
                    "Settlement and Integration Plan for living in Québec",
                    "Professional French translation of your business plan",
                    "Two rounds of revisions with Québec immigration compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your Self-Employment Plan"
                whatIncludedSubtitle="Designed to Meet Québec's Unique Self-Employment Criteria"
                whatIncludedFeatures={[
                    "Program Compliance: Addressing all Québec self-employment program requirements",
                    "Professional Qualifications: Highlighting your experience and credentials",
                    "Financial Capacity: Demonstrating your ability to support yourself and dependents",
                    "Market Understanding: Showing knowledge of your industry in Québec",
                    "Cultural Integration: Addressing French language requirements and Québec culture",
                    "Professional Presentation: Bilingual document meeting Québec immigration standards"
                ]}
                processTitle="Our Collaborative Self-Employment Process"
                processSubtitle="6 Key Steps to Your Québec Selection"
                processSteps={[
                    "Discover: Comprehensive consultation on your professional background and self-employment project",
                    "Research & Analyze: Deep dive into your industry in Québec, including regulatory requirements",
                    "Develop & Draft: Creation of your comprehensive, profession-focused business plan",
                    "Translate & Adapt: Professional French translation and cultural adaptation",
                    "Review & Refine: Collaborative review process with strategic revisions",
                    "Finalize & Deliver: Polished, submission-ready bilingual document optimized for approval"
                ]}
            />

            <Video
                title="Explore Self-Employment Opportunities in Québec."
                videoId="XXXXXXXXX" // Find a video about self-employment in Québec
            />

            <Section2
                title='Strategically Developed for the Québec Self-Employed Worker Program.'
                p1='The Québec Self-Employed Worker Program requires a business plan that demonstrates not only the viability of your professional project but also your understanding of Québec unique cultural and linguistic context. A generic business plan will not address the specific requirements of this program.'
                p2='At Business Venture Canada, we specialize in developing plans that align with Québec expectations for self-employed workers:'
                p3="Professional Qualifications: Clearly demonstrating your experience and expertise in your field. Financial Self-Sufficiency: Proving you have sufficient funds to establish yourself and your family. Market Understanding: Showing knowledge of your industry's landscape in Québec. Cultural Integration: Addressing how you will adapt to Québec's French-speaking environment. Contribution to Québec: Explaining how your skills will benefit the province's cultural or economic development."
                p4="With our expertise, you can submit an application that demonstrates your professional capabilities, understanding of Québec's unique context, and your commitment to successful self-employment in la belle province."
                src={quebecSelfEmployed}
                variant='right'
            />

            <Faq
                title="Québec Self-Employed Worker Program FAQs."
                subtitle="Common questions about self-employment immigration to Québec"
                faqs={[
                    {
                        question: "What are the eligibility requirements for the Québec Self-Employed Worker Program?",
                        answer: "To qualify, you must: have at least two years of experience as self-employed in your profession or trade; possess minimum net assets of CAD $100,000 (if settling outside Montréal) or CAD $200,000 (if settling in Montréal); intend to practice your profession in Québec; and score sufficient points in Québec's selection grid, which includes factors like education, experience, age, language skills, and your connection to Québec."
                    },
                    {
                        question: "Do I need to demonstrate French language proficiency?",
                        answer: "While not always an official requirement, demonstrating French language ability significantly strengthens your application. Québec prioritizes French-speaking immigrants, and showing at least intermediate French proficiency (level B1/B2) will greatly improve your chances of selection."
                    },
                    {
                        question: "What types of professions qualify for this program?",
                        answer: "The program accepts a wide range of professions including but not limited to: artists, writers, consultants, tradespeople, therapists, designers, and other professionals who work independently. Your profession must be legal in Québec and you must meet any regulatory requirements for practicing it in the province."
                    },
                    {
                        question: "How much money do I need to show for this program?",
                        answer: "You must demonstrate sufficient funds to support yourself and your family members for at least the first three months after your arrival. The current requirements are approximately CAD $3,400 for a single applicant, plus additional amounts for family members. You must also show proof of assets as mentioned above."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Start Your Self-Employment Journey in Québec Today."
                subtitle="Have questions about the Québec Self-Employed Worker Program or establishing yourself as an independent professional in Québec? Speak with our immigration experts for a free consultation."
            />
        </>
    )
}

export default QuebecSelfEmployedPage