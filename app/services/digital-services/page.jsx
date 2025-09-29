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

// images (replace with real ones later)
import banner from "@/public/images/services/digital-services/banner.png";
import secretbanner from "@/public/images/services/digital-services/secret.png";
import popular1 from "@/public/images/services/digital-services/popular1.png";
import popular2 from "@/public/images/services/digital-services/popular2.png";

const DigitalServices = () => {
    return (
        <>
            {/* Hero Banner */}
            <Banner
                title="Your Complete Partner for Digital Services & Online Growth."
                description="From websites to marketing campaigns, we deliver end-to-end digital solutions that strengthen your brand, attract customers, and accelerate business growth."
                src={banner}
                btnLink='#all-digital-services'
                btnCn=''
                btnText='Explore Our Services'
            />

            {/* Intro Section */}
            <Secret
                title="Creative & Strategic Digital Solutions"
                content="In today’s competitive market, your digital presence defines your business success. We specialize in designing websites, creating impactful visuals, producing engaging videos, and executing SEO-driven marketing campaigns. Whether you’re launching a new venture or scaling an existing business, our digital services are crafted to boost visibility, credibility, and revenue."
                imageSrc={secretbanner}
                imageAlt="Digital Services - Website, Design, Marketing"
            />

            <Rush contactLink="/contact" />

            {/* Popular Services */}
            <Popular
                title="Explore Popular Digital Services"
                description="Our most in-demand digital solutions that help businesses stand out, attract customers, and grow faster."
                card1={{
                    image: popular1,
                    title: "Website Design & Management",
                    description: "Modern, responsive websites designed to engage users and drive conversions, with full management support.",
                    alt: "Website Design and Management",
                    href: "/services/digital-services#website"
                }}
                card2={{
                    image: popular2,
                    title: "Graphics Design",
                    description: "Creative and professional graphic design for branding, marketing, and communication.",
                    alt: "Graphics Design",
                    href: "/services/digital-services#graphics"
                }}
                centerCard={{
                    title: "SEO & Marketing",
                    description: "Comprehensive SEO and digital marketing strategies to increase visibility, traffic, and sales.",
                    href: "/services/digital-services#seo"
                }}
            />

            {/* All Digital Services */}
            <AllImmigration
                title="All Digital Services"
                sectionId="all-digital-services"
                businessPlans={[
                    {
                        id: 1,
                        title: "Website Design & Management",
                        description: "Custom websites that are fast, secure, and scalable, plus ongoing support and maintenance.",
                        href: "/services/digital-services/website"
                    },
                    {
                        id: 2,
                        title: "Graphics Design",
                        description: "Logos, brand kits, marketing collateral, and custom visuals designed to strengthen your brand identity.",
                        href: "/services/digital-services/graphics"
                    },
                    {
                        id: 3,
                        title: "Video Editing",
                        description: "High-quality video editing for ads, promos, social media, and corporate presentations.",
                        href: "/services/digital-services/video-editing"
                    },
                    {
                        id: 4,
                        title: "SEO & Marketing",
                        description: "Search engine optimization, content marketing, and ad campaigns tailored to your target audience.",
                        href: "/services/digital-services/seo"
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

export default DigitalServices
