import React from 'react'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Rush from '@/components/service/Rush'
import AllImmigration from '@/components/service/usimmigration/AllImmigration'
import Banner from '@/components/service/usimmigration/Banner'
import Popular from '@/components/service/usimmigration/Popular'
import Secret from '@/components/service/usimmigration/Secret'
import Step from '@/components/service/usimmigration/Step'
import Why from '@/components/service/usimmigration/Why'
import VisaPlan from '@/components/service/usimmigration/VisaPlan'
import PopularVisa from '@/components/service/usimmigration/PopularVisa'

// images (replace with your actual small business images)
import banner from "@/public/images/services/small-business/banner.png";
import secretbanner from "@/public/images/services/small-business/secret.png";
import popular1 from "@/public/images/services/small-business/popular1.png";
import popular2 from "@/public/images/services/small-business/popular2.png";

const SmallBusiness = () => {
    return (
        <>
            {/* Hero Banner */}
            <Banner
                title="Your Complete Partner for Small Business Growth."
                description="From securing funding to building financial models and presentations, we provide expert support for small and midsize businesses to thrive. Let us help you transform your vision into measurable success."
                src={banner}
                btnLink='#all-small-business'
                btnCn=''
                btnText='Explore Our Services'
            />

            {/* Intro Section */}
            <Secret
                title="Tailored Solutions for Small and Midsize Businesses"
                content="Running a small business is both exciting and challenging. Whether you’re applying for a loan, preparing an investor pitch, or seeking grants, having the right documents and strategy is critical. Our team specializes in creating business plans, financial models, feasibility studies, and professional presentations designed to meet lender, investor, and stakeholder requirements. We help entrepreneurs present their businesses with clarity and confidence."
                imageSrc={secretbanner}
                imageAlt="Small Business Advisory Services"
            />

            <Rush contactLink="/contact" />

            {/* Popular Services */}
            <Popular
                title="Explore Popular Small Business Services"
                description="Our most requested services for small and midsize businesses, designed to secure funding and communicate your value effectively."
                card1={{
                    image: popular1,
                    title: "Bank Loan Business Plans",
                    description: "Professional, lender-ready business plans that meet bank requirements and maximize your approval chances.",
                    alt: "Bank Loan Business Plan",
                    href: "/services/small-business#bank-loan"
                }}
                card2={{
                    image: popular2,
                    title: "Investor Presentations",
                    description: "Compelling investor presentations that highlight your business potential and attract funding.",
                    alt: "Investor Presentation",
                    href: "/services/small-business#investor-presentation"
                }}
                centerCard={{
                    title: "Financial Models",
                    description: "Accurate, transparent financial models for small and midsize businesses to forecast growth and profitability.",
                    href: "/services/small-business#financial-model"
                }}
            />

            {/* All Small Business Services */}
            <AllImmigration
                title="All Small Business Services"
                sectionId="all-small-business"
                businessPlans={[
                    {
                        id: 1,
                        title: "Bank Loan Business Plan",
                        description: "Secure funding with detailed, lender-focused business plans tailored to bank requirements.",
                        href: "/services/small-business/bank-loan-plan"
                    },
                    {
                        id: 2,
                        title: "Grant Business Plan",
                        description: "Well-structured grant business plans designed to win government or private funding opportunities.",
                        href: "/services/small-business/grant-plan"
                    },
                    {
                        id: 3,
                        title: "Landlord Deck",
                        description: "Persuasive landlord decks that highlight your business value and secure prime locations.",
                        href: "/services/small-business/landlord-deck"
                    },
                    {
                        id: 4,
                        title: "Financial Model for Small and Midsize Businesses",
                        description: "Accurate financial models with 3–5 year projections, revenue forecasts, and cash flow analysis.",
                        href: "/services/small-business/financial-model"
                    },
                    {
                        id: 5,
                        title: "Investor Presentation",
                        description: "Engaging investor presentations tailored for seed, angel, or venture capital funding rounds.",
                        href: "/services/small-business/investor-presentation"
                    },
                    {
                        id: 6,
                        title: "Feasibility Study",
                        description: "In-depth feasibility studies to validate your business idea and reduce risks before launch.",
                        href: "/services/small-business/feasibility-study"
                    },
                    {
                        id: 7,
                        title: "Corporate Presentation",
                        description: "Professional corporate presentations to communicate your brand and strategy with stakeholders.",
                        href: "/services/small-business/corporate-presentation"
                    },
                    {
                        id: 8,
                        title: "Non-Profit Business Plans",
                        description: "Impact-driven business plans for non-profits to win grants, donors, and stakeholder support.",
                        href: "/services/small-business/nonprofit-plan"
                    }
                ]}
            />

            {/* Trust Sections */}
            <Testimonial />
            <Why />
            <Step />
            <Subscribe />
            <VisaPlan />
            <PopularVisa />
        </>
    )
}

export default SmallBusiness
