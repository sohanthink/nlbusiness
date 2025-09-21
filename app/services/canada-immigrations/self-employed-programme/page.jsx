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


import selfEmployedBanner from "@/public/images/services/canada/self-employed/self-employed-banner.png";
import selfEmployedCultural from "@/public/images/services/canada/self-employed/self-employed-cultural.png";

const SelfEmployedPage = () => {
    return (
        <>
            {/* BANNER: For Self-Employed Persons Program */}
            <Banner
                title="Self-Employed Persons Program Business Plan."
                breadcrumb="Canada Immigration / Self-Employed Persons Program Business Plan."
            />

            <Section2
                title="Your Professional Blueprint for Canada\' s Self-Employed Persons Program."
                p1="Canada's Self-Employed Persons Program targets individuals with relevant experience in cultural activities, athletics, or farm management who can make a significant contribution to Canada's cultural or athletic life. This program is designed for artists, musicians, writers, athletes, coaches, and other cultural professionals who wish to be self-employed in Canada."
                p2="We develop comprehensive business plans specifically tailored to demonstrate how your self-employment will contribute significantly to Canada's cultural or athletic landscape. Our expertise includes showcasing your professional accomplishments, proving the viability of your self-employment project, and creating a compelling narrative that aligns with Canada's immigration objectives for cultural enrichment."
                src={selfEmployedBanner}
            />

            <Pricing
                startingPrice="C$ 3,200"
                daysUntilDraft="10-14 business days"
                rushServiceText="Rush service available"
                numberOfPages="Comprehensive + Portfolio Supplement"
                packageTitle="Self-Employed Persons Program Business Plan Package"
                packageSubtitle="A Strategic Roadmap for Cultural and Athletic Professionals"
                includedFeatures={[
                    "Executive Summary highlighting your cultural/athletic contributions",
                    "Professional Profile showcasing your experience and accomplishments",
                    "Detailed Career History with evidence of self-employment experience",
                    "Contribution Statement explaining your significance to Canadian culture/athletics",
                    "Business Description for your self-employment activities in Canada",
                    "Market Analysis for your cultural/athletic field in Canada",
                    "Marketing & Client Acquisition Strategy",
                    "2-Year Financial Projections with realistic income expectations",
                    "Settlement Plan demonstrating your ability to establish in Canada",
                    "Portfolio Supplement guidance (digital or physical portfolio)",
                    "Two rounds of revisions with program compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your Self-Employment Plan"
                whatIncludedSubtitle="Designed to Demonstrate Cultural/Athletic Contribution"
                whatIncludedFeatures={[
                    "Program Compliance: Addressing all Self-Employed Persons Program requirements",
                    "Experience Documentation: Strategically presenting your relevant experience",
                    "Contribution Demonstration: Showing how you'll enrich Canadian culture/athletics",
                    "Financial Viability: Proving your ability to support yourself through your profession",
                    "Settlement Capacity: Demonstrating your plan for establishing in Canada",
                    "Professional Presentation: Comprehensive document meeting immigration standards"
                ]}
                processTitle="Our Collaborative Self-Employment Process"
                processSubtitle="6 Key Steps to Demonstrating Your Contribution"
                processSteps={[
                    "Discover: In-depth consultation on your professional background and accomplishments",
                    "Document: Compilation and organization of your experience evidence",
                    "Develop & Draft: Creation of your contribution-focused business plan",
                    "Design & Enhance: Development of supporting materials and portfolio guidance",
                    "Review & Refine: Strategic revisions to strengthen your contribution narrative",
                    "Finalize & Deliver: Polished, submission-ready package optimized for success"
                ]}
            />

            <Video
                title="Contributing to Canada's Cultural Landscape."
                videoId="XXXXXXXXX" // Find a video about cultural contributions in Canada
            />

            <Section2
                title="Strategically Developed for Canada\' s Self-Employed Persons Program."
                p1='The Self-Employed Persons Program requires a business plan that demonstrates not only your professional experience but also your potential to make a significant contribution to Canadian cultural or athletic life. A standard business plan will not adequately address the unique requirements of this culturally-focused program.'
                p2="At Business Venture Canada, we specialize in developing plans that meet the program\'s specific criteria:"
                p3="Relevant Experience: Documenting at least 2 years of experience in cultural activities or athletics. Significant Contribution: Demonstrating how you'll enrich Canada's cultural/athletic landscape. Self-Employment Intent: Proving your plan to be self-employed in Canada in your field. Financial Self-Sufficiency: Showing your ability to support yourself and dependents. Adaptability: Illustrating your plan for successfully settling in Canada."
                p4="With our expertise, you can submit an application that demonstrates your professional accomplishments, outlines your contribution potential, and meets the specific requirements of Canada's Self-Employed Persons Program."
                src={selfEmployedCultural}
                variant='right'
            />

            <Faq
                title="Self-Employed Persons Program FAQs."
                subtitle="Common questions about Canada's Self-Employed Persons Program"
                faqs={[
                    {
                        question: "What are the eligibility requirements for the Self-Employed Persons Program?",
                        answer: "To qualify, you must: have relevant experience in cultural activities, athletics, or farm management; be willing and able to be self-employed in Canada; meet medical, security, and financial requirements; and score at least 35 points on the selection grid. Relevant experience means at least 2 years of self-employment in cultural/athletic activities or participation at a world-class level in athletics."
                    },
                    {
                        question: "What qualifies as 'cultural activities' for this program?",
                        answer: "Cultural activities include: writers, visual artists, musicians, dancers, actors, directors, technical support roles in cultural fields, photographers, designers, and other creative professionals. The key is demonstrating that your work has cultural significance and that you have been self-employed in this field."
                    },
                    {
                        question: "How do I demonstrate my 'significant contribution' to Canada?",
                        answer: "You must show how your work will enrich Canada's cultural or athletic landscape. This can include: bringing unique artistic perspectives, preserving cultural traditions, enhancing Canada's international cultural reputation, training Canadian artists/athletes, or increasing participation in cultural/athletic activities. Evidence can include letters of reference, media coverage, awards, and a compelling business plan."
                    },
                    {
                        question: "How much money do I need to show for this program?",
                        answer: "There is no set amount, but you must demonstrate sufficient funds to support yourself and your family members for your initial establishment in Canada. The current suggested amounts are approximately CAD $13,000 for a single applicant, plus additional amounts for family members. You must also show proof of funds to invest in your self-employment venture if required."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Share Your Talents with Canada Today."
                subtitle="Have questions about Canada's Self-Employed Persons Program or demonstrating your cultural/athletic contributions? Speak with our immigration experts for a free consultation."
            />
        </>
    )
}

export default SelfEmployedPage