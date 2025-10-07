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

// Suggested images for Non Profit Business Plans
import nonprofitBanner from "@/public/images/services/small-business/nonprofit/banner.png";
import communityImpact from "@/public/images/services/small-business/nonprofit/impact.png";

const NonProfitBusinessPlanPage = () => {
    return (
        <>
            <Banner
                title="Non Profit Business Plans - Secure Funding & Support"
                breadcrumb="Small Business / Non Profit Business Plans"
            />

            <Section2
                title='Strategic Planning for Nonprofit Success'
                p1="Nonprofit organizations require specialized business plans that focus on mission impact, community benefits, and sustainable funding rather than profit generation. Your nonprofit business plan must demonstrate social value, operational efficiency, and long-term viability to attract donors, grants, and community support."
                p2="We create comprehensive nonprofit business plans that speak to funders, board members, and stakeholders while maintaining focus on your mission and community impact. Our plans are designed to secure funding, guide operations, and demonstrate accountability."
                src={nonprofitBanner}
            />

            <Pricing
                startingPrice="C$ 2,800"
                daysUntilDraft="10-14 business days"
                rushServiceText="Extended timeline for comprehensive planning"
                numberOfPages="25-40 pages"
                packageTitle="Nonprofit Business Plan Package"
                packageSubtitle="Complete Organizational Planning"
                includedFeatures={[
                    "Mission, vision, and values statement",
                    "Community needs assessment",
                    "Program descriptions and impact metrics",
                    "Fundraising and development strategy",
                    "Operational and administrative plan",
                    "Board development and governance structure",
                    "Financial projections and budget",
                    "Evaluation and measurement framework",
                    "Stakeholder engagement plan",
                    "Two rounds of revisions with nonprofit expertise"
                ]}
                whatIncludedTitle="Nonprofit Specialization"
                whatIncludedSubtitle="Designed for Social Impact"
                whatIncludedFeatures={[
                    "Donor-focused messaging",
                    "Grant compliance preparation",
                    "Impact measurement frameworks",
                    "Board development guidance",
                    "Fundraising strategy development",
                    "Sustainability planning"
                ]}
                processTitle="Our Nonprofit Planning Process"
                processSubtitle="6 Steps to Organizational Success"
                processSteps={[
                    "Mission Analysis: Clarify purpose and impact goals",
                    "Stakeholder Engagement: Identify key audiences and needs",
                    "Program Planning: Develop service delivery strategies",
                    "Financial Modeling: Create sustainable funding plans",
                    "Impact Measurement: Establish evaluation frameworks",
                    "Plan Integration: Align all organizational components"
                ]}
            />

            <Video
                title="Nonprofit Business Planning Success"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Mission-Driven Business Planning'
                p1='Nonprofit success depends on balancing mission impact with operational sustainability. Unlike for-profit businesses, nonprofits must demonstrate social return on investment while maintaining financial health. Your business plan must satisfy diverse stakeholders including donors, grantmakers, board members, and the communities you serve.'
                p2='Our nonprofit plans address critical success factors:'
                p3="Mission Alignment: Ensuring all activities support core purpose. Sustainable Funding: Diversified revenue streams beyond single sources. Program Effectiveness: Measurable impact and outcomes. Operational Efficiency: Maximizing resources for mission delivery. Community Engagement: Building strong stakeholder relationships. Board Governance: Effective oversight and strategic guidance."
                p4="With our nonprofit expertise, you'll have a comprehensive plan that not only secures funding but serves as a strategic roadmap for achieving your mission, measuring your impact, and building a sustainable organization that creates lasting community change."
                src={communityImpact}
                variant='right'
            />

            <Faq
                title="Nonprofit Business Plan FAQs"
                subtitle="Common questions about nonprofit planning"
                faqs={[
                    {
                        question: "What's the difference between nonprofit and for-profit business plans?",
                        answer: "Nonprofit plans focus on mission impact, community benefits, and sustainable funding rather than profit generation. They emphasize social return on investment, donor relationships, and program effectiveness over shareholder value."
                    },
                    {
                        question: "How do you demonstrate impact in a nonprofit business plan?",
                        answer: "We develop clear logic models, outcome measurements, and evaluation frameworks that show how your programs create meaningful change. This includes both quantitative metrics and qualitative stories of impact."
                    },
                    {
                        question: "What funding sources should a nonprofit business plan address?",
                        answer: "We help you develop strategies for diverse funding including individual donations, foundation grants, corporate sponsorships, government contracts, earned income, and special events to ensure financial sustainability."
                    },
                    {
                        question: "How important is the board section in a nonprofit plan?",
                        answer: "Extremely important. Funders and stakeholders look for strong governance, diverse expertise, and engaged leadership. We help you showcase your board's capabilities and governance structure to build confidence in your organization."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Advance Your Mission?"
                subtitle="Speak with our nonprofit experts to create a comprehensive business plan that secures funding and guides your organization toward greater impact."
            />
        </>
    )
}

export default NonProfitBusinessPlanPage