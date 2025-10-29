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

// images (replace with your actual ones later)
import banner from "@/public/images/services/advisory/ma/banner.png";
import secretbanner from "@/public/images/services/advisory/ma/secret.png";

import financialModelingBanner from "@/public/images/services/advisory/ma/financial-modeling/banner.png";
import cimBanner from "@/public/images/services/advisory/ma/cim/cim-banner.png";


const MAFirms = () => {
    return (
        <>
            {/* Hero Banner */}
            <Banner
                title="Trusted M&A Documentation & Advisory Services"
                description="We provide professional materials and advisory support for Mergers & Acquisitions, helping firms and their clients with Confidential Information Memorandums, valuations, buyer lists, financial modeling, and more."
                src={banner}
                btnLink='#all-ma-services'
                btnCn=''
                btnText='Explore Our Services'
            />

            {/* Intro Section */}
            <Secret
                title="Professional Materials for Successful Transactions"
                content="Every M&A deal depends on clear, credible, and compelling documentation. From CIMs to Teasers, Buyers Lists, Valuations, and Comprehensive Business Reviews, we create materials that help you attract investors, engage buyers, and complete deals successfully."
                imageSrc={secretbanner}
                imageAlt="M&A Services"
            />

            <Rush contactLink="/contact" />

            {/* Popular Services */}
            <Popular
                title="Popular M&A Services"
                description="Our most requested services for M&A professionals and firms."
                card1={{
                    image: cimBanner,
                    title: "Confidential Information Memorandum (CIM)",
                    description: "Comprehensive CIMs designed to present your business clearly and attract qualified buyers.",
                    alt: "Confidential Information Memorandum",
                    href: "/services/ma-firms/cim"
                }}
                card2={{
                    image: financialModelingBanner,
                    title: "Financial Modeling",
                    description: "Detailed models and valuations to support negotiations, investor presentations, and due diligence.",
                    alt: "Financial Modeling",
                    href: "/services/ma-firms/financial-modeling"
                }}
                centerCard={{
                    title: "Buyers List",
                    description: "Strategically prepared buyers lists to identify, target, and engage potential acquirers.",
                    href: "/services/advisory/ma/buyers-list"
                }}
            />

            {/* All M&A Services */}
            <AllImmigration
                title="All M&A Firm Services"
                sectionId="all-ma-services"
                businessPlans={[
                    {
                        id: 1,
                        title: "Confidential Information Memorandum (CIM)",
                        description: "Full CIM preparation, including financials, operations, and strategic positioning.",
                        href: "/services/advisory/ma/cim"
                    },
                    {
                        id: 2,
                        title: "Buyers List",
                        description: "Customized list of strategic and financial buyers tailored to your industry and goals.",
                        href: "/services/advisory/ma/buyers-list"
                    },
                    {
                        id: 3,
                        title: "Opinion of Value",
                        description: "Independent assessment of your business’s value, supporting negotiations and investor confidence.",
                        href: "/services/advisory/ma/opinion-of-value"
                    },
                    {
                        id: 4,
                        title: "Financial Modeling",
                        description: "Investor-grade financial models with valuation, scenario analysis, and forecasts.",
                        href: "/services/advisory/ma/financial-modeling"
                    },
                    {
                        id: 5,
                        title: "Teaser",
                        description: "Engaging one- or two-page teaser documents to spark buyer and investor interest.",
                        href: "/services/advisory/ma/teaser"
                    },
                    {
                        id: 6,
                        title: "Comprehensive Business Review",
                        description: "In-depth analysis and reporting covering operations, strategy, and financial health.",
                        href: "/services/advisory/ma/comprehensive-business-review"
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

export default MAFirms
