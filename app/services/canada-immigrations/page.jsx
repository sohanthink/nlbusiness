import React from 'react'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Rush from '@/components/service/Rush'
import AllImmigration from '@/components/service/usimmigration/AllImmigration'
import Banner from '@/components/service/usimmigration/Banner'
import Consultation from '@/components/service/usimmigration/Consultation'
import Popular from '@/components/service/usimmigration/Popular'
import PopularVisa from '@/components/service/usimmigration/PopularVisa'
import Secret from '@/components/service/usimmigration/Secret'
import Step from '@/components/service/usimmigration/Step'
import VisaPlan from '@/components/service/usimmigration/VisaPlan'
import Why from '@/components/service/usimmigration/Why'

import banner from "@/public/images/service/servicebanner.png";
import secretbanner from "@/public/images/service/secretbanner.png";
import popularbanner from "@/public/images/service/popular.png";
import popular1 from "@/public/images/service/popular1.png";
import popular2 from "@/public/images/service/popular2.png";


const CanadaImmigrations = () => {
    return (
        <>
            <Banner title="Your Complete Partner for Canadian Business Immigration."
                description="From the Atlantic shores of Newfoundland to the vibrant markets of British Columbia, we provide expert business plans and application support for every major Provincial, Quebec, and Federal business immigration program. Your Canadian venture starts with our expertise."
                src={banner}
                btnLink='#all-immigration'
                btnCn=''
                btnText='Explore Our Programs'
            />
            <Secret
                title="Navigating Canada's Complex Immigration Landscape"
                content="Canada's business immigration system is a patchwork of unique opportunities—each province and territory has its own programs with specific economic goals and requirements. This complexity is where Business Venture Canada excels. Our team of experts possesses deep, current knowledge of every program on the map, from the Alberta Entrepreneur Stream to the Quebec Investor Program and the Federal Start-Up Visa. We don't just write business plans; we architect strategic applications that are meticulously tailored to align with the specific economic and immigration objectives of your chosen destination. We transform your ambition into a compelling, approval-ready case for immigration officials."
                imageSrc={secretbanner}
                imageAlt="Canada Immigration Services - Expert Business Plans"
            />
            <Rush contactLink="#consultation" />
            <Popular
                title="Explore Popular Pathways to Canada"
                description="Whether you aim to launch a tech startup in Ontario, invest in a franchise in Manitoba, or continue your professional practice in Quebec, we have the expertise to guide you."
                card1={{
                    image: popular1,
                    title: "Provincial Nominee Programs (PNPs)",
                    description: "Target your investment to a specific province. We specialize in crafting plans for BC, Ontario, Alberta, Saskatchewan, Manitoba, and all other provincial entrepreneur streams.",
                    alt: "Provincial Nominee Programs",
                    href: "/services/canada-immigrations#provincial-programs"
                }}
                card2={{
                    image: popular2,
                    title: "Quebec Business Immigration",
                    description: "Navigate the distinct immigration system of Quebec. We provide expert guidance and business plans for the Entrepreneur, Investor, and Self-Employed programs.",
                    alt: "Quebec Business Immigration",
                    href: "/services/canada-immigrations#quebec-programs"
                }}
                centerCard={{
                    title: "Federal Start-Up Visa Program",
                    description: "For innovative entrepreneurs. We develop the business plan and strategy needed to secure support from a designated Canadian venture capital fund, angel investor group, or business incubator.",
                    href: "/services/canada-immigrations#federal-programs"
                }}
                backgroundImage={popularbanner}
            />
            <AllImmigration
                title="All Canada Business Immigration Programs"
                sectionId="all-immigration"
                businessPlans={[
                    // Provincial & Territorial Programs
                    {
                        id: 1,
                        title: "Alberta Immigrant Nominee Program (AINP) – Entrepreneur Stream",
                        description: "Target your investment to Alberta province with our specialized business plan for the AINP Entrepreneur Stream.",
                        href: "/services/canada-immigrations/ainp-business-plan"
                    },
                    {
                        id: 2,
                        title: "BC Provincial Nominee Program (BC PNP) – Entrepreneur Immigration",
                        description: "Navigate British Columbia's entrepreneur immigration with our expert business planning services.",
                        href: "/services/canada-immigrations/bcpnp-business-plan"
                    },
                    {
                        id: 3,
                        title: "Manitoba Provincial Nominee Program (MPNP) – Business Investor Stream",
                        description: "Secure your Manitoba business investment with our comprehensive MPNP business plan.",
                        href: "/services/canada-immigrations/manitoba-business"
                    },
                    {
                        id: 4,
                        title: "Ontario Immigrant Nominee Program (OINP) – Entrepreneur Stream",
                        description: "Launch your business in Ontario with our OINP Entrepreneur Stream business plan.",
                        href: "/services/canada-immigrations/ontario-entrepreneur"
                    },
                    {
                        id: 5,
                        title: "Saskatchewan Immigrant Nominee Program (SINP) – Entrepreneur Category",
                        description: "Explore Saskatchewan opportunities with our SINP Entrepreneur Category business plan.",
                        href: "/services/canada-immigrations/saskatchewan-entrepreneur"
                    },
                    {
                        id: 6,
                        title: "Nova Scotia Nominee Program (NSNP) – Entrepreneur Stream",
                        description: "Discover Nova Scotia business opportunities with our NSNP Entrepreneur Stream plan.",
                        href: "/services/canada-immigrations/nova-scotia-entrepreneur"
                    },
                    {
                        id: 7,
                        title: "New Brunswick Provincial Nominee Program (NBPNP) – Entrepreneurial Stream",
                        description: "Build your business in New Brunswick with our NBPNP Entrepreneurial Stream plan.",
                        href: "/services/canada-immigrations/new-brunswick-entrepreneur"
                    },
                    {
                        id: 8,
                        title: "Newfoundland & Labrador Provincial Nominee Program (NLPNP)",
                        description: "Start your business in Newfoundland & Labrador with our NLPNP International Entrepreneur plan.",
                        href: "/services/canada-immigrations/newfoundland-entrepreneur"
                    },
                    // Quebec Programs
                    {
                        id: 9,
                        title: "Québec Entrepreneur Program – Start-up",
                        description: "Navigate Quebec's distinct immigration system with our Quebec Entrepreneur Program business plan.",
                        href: "/services/canada-immigrations/quebec-entrepreneur"
                    },
                    {
                        id: 10,
                        title: "Québec Investor Program",
                        description: "Explore Quebec investment opportunities with our Quebec Investor Program business plan.",
                        href: "/services/canada-immigrations/quebec-investor"
                    },
                    {
                        id: 11,
                        title: "Québec Self-Employed Worker Program",
                        description: "Continue your professional practice in Quebec with our Self-Employed Worker Program plan.",
                        href: "/services/canada-immigrations/quebec-self-employed"
                    },
                    // Federal Programs
                    {
                        id: 12,
                        title: "Start-Up Visa Program (for innovative entrepreneurs)",
                        description: "Launch your innovative startup in Canada with our Federal Start-Up Visa Program business plan.",
                        href: "/services/canada-immigrations/startup-visa"
                    },
                    {
                        id: 13,
                        title: "Self-Employed Persons Program",
                        description: "Continue your cultural or athletic career in Canada with our Self-Employed Persons Program plan.",
                        href: "/services/canada-immigrations/self-employed"
                    },
                    // Additional Provincial Programs
                    {
                        id: 14,
                        title: "Prince Edward Island Provincial Nominee Program (PEI PNP)",
                        description: "Make your business impact in PEI with our PEI PNP Business Impact Category plan.",
                        href: "/services/canada-immigrations/pei-business"
                    },
                    {
                        id: 15,
                        title: "Northwest Territories Nominee Program (NTNP) – Business Stream",
                        description: "Explore Northern opportunities with our NTNP Business Stream business plan.",
                        href: "/services/canada-immigrations/nwt-business"
                    },
                    {
                        id: 16,
                        title: "Yukon Business Nominee Program (YBNP)",
                        description: "Start your business in Yukon with our YBNP business planning services.",
                        href: "/services/canada-immigrations/yukon-business"
                    }
                ]}
            />
            <Testimonial />
            <Why />
            <Step />
            <Subscribe />
            <VisaPlan />
            <PopularVisa />
            <Consultation />
        </>
    )
}

export default CanadaImmigrations