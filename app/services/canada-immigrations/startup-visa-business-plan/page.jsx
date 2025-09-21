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


import startupBanner from "@/public/images/services/canada/start-up/startup-banner.png";
import startupInnovation from "@/public/images/services/canada/start-up/startup-innovation.png";

const StartupVisaPage = () => {
    return (
        <>
            {/* BANNER: For Start-Up Visa Program */}
            <Banner
                title="Start-Up Visa Program Business Plan for Innovative Entrepreneurs."
                breadcrumb="Canada Immigration / Start-Up Visa Program Business Plan."
            />

            <Section2
                title='Your Strategic Blueprint for Canadas Start-Up Visa Success.'
                p1="Canada's Start-Up Visa Program targets innovative entrepreneurs with the potential to build businesses that can compete globally, create jobs for Canadians, and contribute to Canada's economic growth. This program is designed for founders with high-growth potential startups that can secure investment from designated Canadian organizations."
                p2="We develop comprehensive business plans specifically engineered to meet the rigorous standards of Canada's Start-Up Visa Program. Our expertise includes crafting compelling narratives for innovative businesses, demonstrating global scalability, and creating documentation that appeals to designated angel investors, venture capital firms, and business incubators."
                src={startupBanner}
            />

            <Pricing
                startingPrice="C$ 4,500"
                daysUntilDraft="15-20 business days"
                rushServiceText="Rush service available (Investor-ready version included)"
                numberOfPages="Comprehensive + Investor Deck"
                packageTitle="Start-Up Visa Business Plan Package"
                packageSubtitle="A Strategic Roadmap for Innovative Entrepreneurs and Investors"
                includedFeatures={[
                    "Executive Summary designed to capture investor interest immediately",
                    "Innovation Thesis demonstrating technological advancement or unique IP",
                    "Detailed Company Description with legal structure for Canadian incorporation",
                    "Global Market Analysis with scalability demonstration",
                    "Competitive Landscape Analysis with clear differentiation",
                    "Marketing & Customer Acquisition Strategy for rapid growth",
                    "Management Team showcase highlighting founder expertise",
                    "3-5 Year Financial Projections with realistic hockey-stick growth",
                    "Investment Ask & Use of Funds breakdown",
                    "Exit Strategy potential for investor returns",
                    "Professional investor pitch deck companion",
                    "Two rounds of revisions with SUV program compliance checks"
                ]}
                whatIncludedTitle="What's Included in Your Start-Up Visa Plan"
                whatIncludedSubtitle="Engineered to Secure Designated Organization Support"
                whatIncludedFeatures={[
                    "Program Compliance: Addressing all Start-Up Visa program requirements",
                    "Investor Appeal: Crafting narratives that resonate with designated entities",
                    "Innovation Focus: Highlighting technological advancement and unique value propositions",
                    "Scalability Demonstration: Showing global market potential",
                    "Job Creation Projections: Outlining Canadian employment opportunities",
                    "Professional Presentation: Comprehensive document meeting investor standards"
                ]}
                processTitle="Our Collaborative Start-Up Visa Process"
                processSubtitle="7 Key Steps to Securing Designated Organization Support"
                processSteps={[
                    "Discover: Deep dive consultation on your innovation, business model, and founding team",
                    "Research & Analyze: Comprehensive market research and competitive landscape analysis",
                    "Develop & Draft: Creation of your investor-focused business plan and financial model",
                    "Design & Visualize: Development of professional pitch deck and visual materials",
                    "Refine & Optimize: Strategic revisions to strengthen investment appeal",
                    "Compliance Check: Ensuring alignment with Start-Up Visa program requirements",
                    "Finalize & Deliver: Polished, investor-ready package optimized for designated entities"
                ]}
            />

            <Video
                title="Innovating in Canada: The Start-Up Visa Advantage."
                videoId="XXXXXXXXX" // Find a video about Canada's Start-Up Visa program
            />

            <Section2
                title='Strategically Developed for Canadas Start-Up Visa Program.'
                p1='The Start-Up Visa Program requires a business plan that demonstrates not only innovation and viability but also significant growth potential and the ability to attract investment from designated Canadian organizations. A standard business plan will not meet the specific requirements of this competitive program.'
                p2='At Business Venture Canada, we specialize in developing plans that meet the expectations of designated entities:'
                p3="Innovation & Technology: Demonstrating proprietary technology or innovative business models. Scalability: Showing potential for international growth and significant revenue. Job Creation: Outlining substantial employment opportunities for Canadians. Investment Readiness: Proving the business can secure necessary funding. Founder Expertise: Highlighting the founding team's qualifications and experience. Global Competitiveness: Positioning the startup against international competitors."
                p4="With our expertise, you can submit an application that demonstrates your startup's potential, appeals to designated organizations, and meets the rigorous standards of Canada's Start-Up Visa Program."
                src={startupInnovation}
                variant='right'
            />

            <Faq
                title="Start-Up Visa Program FAQs."
                subtitle="Common questions about Canada's Start-Up Visa Program"
                faqs={[
                    {
                        question: "What are the eligibility requirements for the Start-Up Visa Program?",
                        answer: "To qualify, you must: have a qualifying business; get a letter of support from a designated organization; meet language requirements (CLB 5 in English or French); have sufficient settlement funds; and pass security and medical checks. The business must be incorporated and operating in Canada."
                    },
                    {
                        question: "What types of businesses qualify for the Start-Up Visa Program?",
                        answer: "Qualifying businesses must be innovative, have potential for rapid growth, create jobs for Canadians, and be able to compete globally. The program prioritizes technology startups but is open to innovative businesses across sectors. The business cannot be primarily focused on real estate, insurance, or hospitality without innovative angles."
                    },
                    {
                        question: "How much investment do I need for the Start-Up Visa Program?",
                        answer: "The investment requirements vary by designated entity type: Venture capital funds must invest at least $200,000; Angel investor groups must invest at least $75,000; Business incubators must accept the business into their program. Some incubators don't require direct investment but have program fees."
                    },
                    {
                        question: "How long does the Start-Up Visa process take?",
                        answer: "The processing time varies but typically takes 12-36 months from initial application to permanent residence. This includes time to secure designated entity support, submit the application, and process through IRCC. Priority processing is available for some applications."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Launch Your Innovative Startup in Canada Today."
                subtitle="Have questions about Canada's Start-Up Visa Program or securing designated organization support? Speak with our immigration experts for a free consultation."
            />
        </>
    )
}

export default StartupVisaPage