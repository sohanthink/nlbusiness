import React from 'react'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Rush from '@/components/service/Rush'
import AllImmigration from '@/components/service/usimmigration/AllImmigration'
import Banner from '@/components/service/usimmigration/Banner'
import Popular from '@/components/service/usimmigration/Popular'
import PopularVisa from '@/components/service/usimmigration/PopularVisa'
import Secret from '@/components/service/usimmigration/Secret'
import Step from '@/components/service/usimmigration/Step'
import VisaPlan from '@/components/service/usimmigration/VisaPlan'
import Why from '@/components/service/usimmigration/Why'

import banner from "@/public/images/services/small-business/franchisor/franchisor-banner.png";
import secretbanner from "@/public/images/services/small-business/franchisor/franchisor-secret.png";
import popularbanner from "@/public/images/service/popular.png";
import popular1 from "@/public/images/services/small-business/franchisor/franchisor-plan.png";
import popular2 from "@/public/images/services/small-business/franchisor/financial-model.png";

const FranchisorAdvisory = () => {
    return (
        <>
            <Banner
                title="Franchisor Advisory & Business Development Services"
                description="Transform your successful business into a scalable franchise system. Our comprehensive franchisor advisory services include master business planning, financial modeling, and franchisee acquisition strategies to build your franchise network effectively."
                src={banner}
                btnLink='#all-services'
                btnCn=''
                btnText='Explore Franchisor Services'
            />

            <Secret
                title="Build Your Franchise Empire with Expert Guidance"
                content="Successful franchising requires more than just a great business concept—it demands strategic planning, robust financial modeling, and effective franchisee recruitment. Our franchisor advisory services provide the complete framework you need to scale your business through franchising. We specialize in developing franchise systems that are financially viable, legally compliant, and attractive to qualified franchisees. Whether you're launching your first franchise or expanding an existing network, our expertise ensures your franchise development strategy is built for sustainable growth and long-term success."
                imageSrc={secretbanner}
                imageAlt="Franchisor Advisory Services - Business Scaling Experts"
            />

            <Rush contactLink="/contact" />

            <Popular
                title="Comprehensive Franchisor Development Solutions"
                description="From initial franchise concept to multi-unit expansion, we provide the essential tools and strategies for successful franchise development."
                card1={{
                    image: popular1,
                    title: "Franchisor Master Business Plan",
                    description: "Strategic blueprint detailing your franchise concept, market positioning, expansion roadmap, and operational systems for scalable growth.",
                    alt: "Franchisor Master Business Plan",
                    href: "/services/advisory/franchisor-master-business-plan"
                }}
                card2={{
                    image: popular2,
                    title: "Franchisor Financial Modeling",
                    description: "Comprehensive financial projections, unit economics, royalty structures, and investment analysis for franchise system viability.",
                    alt: "Franchisor Financial Model",
                    href: "/services/advisory/franchisor-financial-model"
                }}
                centerCard={{
                    title: "Franchisee Acquisition Pitch Deck",
                    description: "Professional presentation materials and recruitment strategies designed to attract and convert qualified franchisee candidates.",
                    href: "/services/advisory/franchisee-pitch-deck"
                }}
                backgroundImage={popularbanner}
            />

            {/* <AllImmigration
                title="Franchisor Advisory Services"
                sectionId="all-services"
                businessPlans={[
                    // Core Franchisor Services
                    {
                        id: 1,
                        title: "Franchisor Master Business Plan",
                        description: "Complete strategic framework for franchise development, expansion strategy, and operational systems.",
                        href: "/services/advisory/franchisor-master-business-plan"
                    },
                    {
                        id: 2,
                        title: "Franchisor Financial Model & Projections",
                        description: "Robust financial modeling including unit economics, royalty streams, and franchisee profitability analysis.",
                        href: "/services/advisory/franchisor-financial-model"
                    },
                    {
                        id: 3,
                        title: "Franchisee Pitch Deck & Recruitment Materials",
                        description: "Compelling presentation tools and marketing materials for effective franchisee acquisition.",
                        href: "/services/advisory/franchisee-pitch-deck"
                    },
                ]}
            /> */}

            <Testimonial />
            <Why />
            <Step />
            <Subscribe />
            <VisaPlan />
            <PopularVisa />
        </>
    )
}

export default FranchisorAdvisory