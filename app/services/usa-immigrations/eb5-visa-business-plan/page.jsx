import React from 'react'
import Banner from '@/components/service/innerpages/Banner'
import Section2 from '@/components/service/innerpages/Section2'

import e2visasection2 from "@/public/images/service/innerpages/e2visasection2.png";
import investor from "@/public/images/service/innerpages/investor.png";
import Pricing from '@/components/service/innerpages/Pricing'
import Video from '@/components/service/innerpages/Video'
import Step from '@/components/service/usimmigration/Step'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Blog from '@/components/common/Blog'
import Contact from '@/components/service/innerpages/Contact'


const EB5 = () => {
    return (
        <>
            <Banner title="USCIS-Ready Eb-5 Visa Business Plan" breadcrumb="eb5-Visa-Business-plan" />
            <Section2
                title='Crafting a Winning E-2 Visa Journey'
                p1='Customized for your U.S. business venture, your E-2 visa business plan will present a clear picture of your vision, operations, and financial projections—fully aligned with immigration requirements.'
                p2='Our professionally developed plans have helped small businesses secure vital approvals—from SBA loans to commercial leases—backed by expertise across more than 180 industries '
                p3="We've written thousands of business plans for entrepreneurs like you, tailored to what lenders, grant boards, and franchise teams actually want. With experience in over 180 industries, we know how to get you approved."
                src={e2visasection2}
            />
            <Pricing
                startingPrice="C$ 35,00"
                daysUntilDraft="10-15 business days"
                rushServiceText="Rush service available"
                numberOfPages="Custom"
                includedFeatures={[
                    "Professional Graphic Design",
                    "Personalized Business Plan",
                    "Unlimited Revisions",
                    "Flat Rate Pricing",
                    "Industry Expertise",
                    "Dedicated Team"
                ]}
                processSteps={[
                    "Gather applicant information",
                    "Propose 15-20 ideas",
                    "Brainstorming Session",
                    "Narrow ideas to top 5",
                    "Research & evaluation of top ideas",
                    "Recommend best 1-2 ideas",
                    "Deliverable: Business Idea Selection Report",
                    "Client makes a decision"
                ]}
            />
            <Video
                title="Learn About Our History"
                videoId="eoqe1xcvgx0"
            />
            <Section2
                title='Strategically Developed for E-2 Visa Investors'
                p1='If you re planning to move to the United States to purchase or launch a new business venture, the E-2 Investor Visa could be your path forward.
            At Joorney, we specialize in developing professional immigration business plans tailored to the E-2 Visa process. Each plan is crafted to align with USCIS requirements, addressing crucial criteria such as marginality, substantial investment, source of funds, and business model type.'
                p2='Our dedicated team of writers and project managers brings experience across 180+ industries and has supported clients from over 65 countries. With over 1,500 entrepreneurs relying on our immigration services annually, we know what it takes to build a business plan that earns approval.'
                p3="Backed by more than 30 specialists and deep knowledge across 120+ sectors, we deliver customized, visa-compliant plans that reflect the strength and viability of your investment—helping you take the next confident step toward your American dream."
                src={investor}
                variant='right'
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />
            <Contact />
        </>
    )
}

export default EB5