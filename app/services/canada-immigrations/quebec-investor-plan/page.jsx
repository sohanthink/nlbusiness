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


import quebecBanner from "@/public/images/services/canada/quebec-investor/quebec-banner.png";
import quebecInvestor from "@/public/images/services/canada/quebec-investor/quebec-investor.png";

const QuebecInvestorPage = () => {
    return (
        <>
            {/* BANNER: For Québec Investor Program */}
            <Banner
                title="Québec Investor Program (Currently Suspended)."
                breadcrumb="Canada Immigration / Québec Investor Program (Suspended)"
                note="Program Notice: The Québec Investor Program is currently suspended pending revisions. This information is provided for reference only."
            />

            <Section2
                title='Understanding the Québec Investor Program Framework.'
                p1="The Québec Investor Program has historically sought experienced investors with significant net worth to make passive investments in Québec's economy. While the program is currently suspended pending revisions, understanding its framework remains valuable for potential future applicants or those considering alternative investment immigration options."
                p2="We provide comprehensive guidance on the Québec Investor Program's requirements and historical framework, along with information about alternative options for investor immigration to Canada. While we cannot currently prepare applications for this suspended program, we can help you understand its structure and prepare for potential future opportunities."
                src={quebecBanner}
                warning={true}
                warningText="Please note: The Québec Investor Program is not currently accepting applications. This information is for educational purposes only."
            />

            <Pricing
                startingPrice="Consultation Only"
                daysUntilDraft="N/A - Program Suspended"
                rushServiceText="Alternative program consultation available"
                numberOfPages="N/A"
                packageTitle="Québec Investor Program Consultation Package"
                packageSubtitle="Understanding the Program Framework for Future Opportunities"
                includedFeatures={[
                    "Historical program overview and requirements analysis",
                    "Net worth assessment guidance for investor immigration",
                    "Investment structure explanation for Québec's program",
                    "Alternative investor immigration options assessment",
                    "Program revision expectations and potential timeline estimates",
                    "Preparation checklist for when the program reopens",
                    "French language requirements explanation for Québec",
                    "Settlement plan guidance for Québec"
                ]}
                whatIncludedTitle="Program Consultation Services"
                whatIncludedSubtitle="Preparing for Potential Future Opportunities"
                whatIncludedFeatures={[
                    "Program Analysis: Detailed review of historical Québec Investor Program requirements",
                    "Eligibility Assessment: Evaluation of your profile against previous program criteria",
                    "Alternative Options: Identification of other potential immigration pathways",
                    "Investment Planning: Guidance on structuring investments for immigration purposes",
                    "Document Preparation: Advice on gathering necessary documentation for future applications",
                    "Market Insight: Information about Québec's investment environment and economy"
                ]}
                processTitle="Our Consultation Process"
                processSubtitle="Preparing for Potential Immigration Opportunities"
                processSteps={[
                    "Discover: Comprehensive consultation on your investor profile and objectives",
                    "Analyze: Assessment of your eligibility based on historical program criteria",
                    "Explore: Discussion of alternative immigration options currently available",
                    "Plan: Development of a preparation strategy for potential program reopening",
                    "Prepare: Guidance on document gathering and profile enhancement",
                    "Monitor: Ongoing updates about program status changes and new opportunities"
                ]}
                disclaimer="Please note: We cannot process Québec Investor Program applications at this time as the program is suspended. This service provides consultation and preparation guidance only."
            />

            <Video
                title="Understanding Québec's Investment Environment."
                videoId="XXXXXXXXX" // Find a video about investment opportunities in Québec
            />

            <Section2
                title='Historical Program Framework (For Reference).'
                p1='The Québec Investor Program required applicants to have significant business experience and substantial net worth. While currently suspended, understanding its historical framework provides insight into Québec approach to investor immigration.'
                p2='The previous program requirements included:'
                p3="Minimum net worth of CAD $2,000,000 acquired legally; Minimum of two years of management experience in qualified businesses; Investment of CAD $1,200,000 into a government-guaranteed investment for five years (interest-free); Intention to settle in Québec; While not always mandatory, French language proficiency strengthened applications."
                p4="We provide comprehensive information about this historical framework while being transparent about the program's current suspended status. We can also guide you toward alternative investment immigration options that may be available through other Canadian provinces or federal programs."
                src={quebecInvestor}
                variant='right'
                warning={true}
                warningText="Program Suspension: The Québec Investor Program is not currently accepting applications. The information provided reflects historical requirements that may change when the program reopens."
            />

            <Faq
                title="Québec Investor Program FAQs."
                subtitle="Common questions about the suspended program"
                faqs={[
                    {
                        question: "Is the Québec Investor Program currently open?",
                        answer: "No, the Québec Investor Program is currently suspended pending revisions. The government has not announced when it might reopen or what changes will be made to the program requirements."
                    },
                    {
                        question: "What were the investment requirements before the suspension?",
                        answer: "Previously, investors needed to make a CAD $1,200,000 investment for a period of five years through a government-approved financial intermediary. The investment was guaranteed by the Québec government and returned without interest after five years."
                    },
                    {
                        question: "Are there alternative investor immigration options for Québec?",
                        answer: "While the Investor Program is suspended, other options may include the Québec Entrepreneur Program, certain temporary work permits that can lead to permanent residence, or investor programs in other Canadian provinces with eventual mobility to Québec."
                    },
                    {
                        question: "Will French language requirements be part of the revised program?",
                        answer: "While not confirmed, it is expected that any revised program will place greater emphasis on French language skills, aligning with Québec's broader immigration policies that prioritize French proficiency."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Explore Alternative Investment Immigration Options."
                subtitle="While the Québec Investor Program is suspended, other pathways may be available. Speak with our immigration experts to discuss alternative options for investor immigration to Canada."
            />
        </>
    )
}

export default QuebecInvestorPage