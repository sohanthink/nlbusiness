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


import landlordDeckBanner from "@/public/images/services/small-business/landlord/banner.png";
import leasePresentation from "@/public/images/services/small-business/landlord/presentation.png";

const LandlordDeckPage = () => {
    return (
        <>
            <Banner
                title="Landlord Deck - Secure Your Ideal Retail Space"
                breadcrumb="Small Business / Landlord Deck"
            />

            <Section2
                title='Professional Property Presentations for Lease Success'
                p1="Securing the right retail or commercial space requires more than just financial qualifications - it demands a compelling landlord deck that demonstrates your business's viability, customer appeal, and long-term success potential. Property owners want tenants who will enhance their property value and maintain consistent occupancy."
                p2="We create professional landlord decks that showcase your business concept, customer demographics, and growth potential to property owners and leasing agents. Our decks position you as an ideal tenant who will contribute to the property's success and appeal."
                src={landlordDeckBanner}
            />

            <Pricing
                startingPrice="C$ 1,500"
                daysUntilDraft="5-8 business days"
                rushServiceText="Quick turnaround for time-sensitive lease opportunities"
                numberOfPages="10-15 slides"
                packageTitle="Professional Landlord Deck Package"
                packageSubtitle="Compelling Property Presentations"
                includedFeatures={[
                    "Executive summary of your business concept",
                    "Brand story and market positioning",
                    "Customer demographics and traffic analysis",
                    "Financial strength and lease payment capability",
                    "Store design and layout visualizations",
                    "Marketing and customer acquisition strategy",
                    "Community impact and neighborhood benefits",
                    "Management team experience and credentials",
                    "Comparable location success stories",
                    "Two design concepts with unlimited revisions"
                ]}
                whatIncludedTitle="Landlord Deck Specialization"
                whatIncludedSubtitle="Designed for Property Owner Approval"
                whatIncludedFeatures={[
                    "Property value enhancement focus",
                    "Tenant quality demonstration",
                    "Lease negotiation preparation",
                    "Location suitability analysis",
                    "Visual storytelling approach",
                    "Professional branding alignment"
                ]}
                processTitle="Our Landlord Deck Process"
                processSubtitle="5 Steps to Lease Approval"
                processSteps={[
                    "Location Strategy: Analyze target properties and owner priorities",
                    "Business Story: Develop compelling narrative for property owners",
                    "Visual Design: Create professional, brand-aligned presentation",
                    "Financial Proof: Demonstrate lease payment capability",
                    "Final Delivery: Polish and optimize for maximum impact"
                ]}
            />

            <Video
                title="Winning Commercial Lease Strategies"
                videoId="XXXXXXXXX"
            />

            <Section2
                title='Property-Owner Focused Presentations'
                p1="Landlords evaluate potential tenants based on their ability to pay rent consistently, attract quality foot traffic, and enhance the overall property value. A generic business presentation won''t address the specific concerns property owners have about tenant selection and property management."
                p2='Our landlord decks address key property owner priorities:'
                p3="Financial Stability: Demonstrated ability to meet lease obligations long-term. Customer Appeal: Business concept that attracts desirable demographics. Property Enhancement: Store design that improves overall location appeal. Neighborhood Fit: Alignment with surrounding businesses and community. Low Maintenance: Professional operations that minimize landlord involvement. Long-Term Potential: Business model with sustainable growth trajectory."
                p4="With our landlord deck expertise, you'll have a powerful tool that not only secures your ideal space but often helps negotiate better lease terms by positioning your business as a valuable asset to the property."
                src={leasePresentation}
                variant='right'
            />

            <Faq
                title="Landlord Deck FAQs"
                subtitle="Common questions about commercial lease presentations"
                faqs={[
                    {
                        question: "What do landlords look for in a tenant presentation?",
                        answer: "Landlords prioritize financial stability, business concept strength, customer appeal, lease term flexibility, and how your business will enhance their property value and attract other quality tenants."
                    },
                    {
                        question: "How important are visual elements in a landlord deck?",
                        answer: "Extremely important. Professional store renderings, customer demographic visuals, and brand-aligned design show you're serious about creating an attractive, well-maintained space that enhances the property."
                    },
                    {
                        question: "Should I include financial information in my landlord deck?",
                        answer: "Yes, but focus on demonstrating lease payment capability rather than detailed financials. Show bank balances, revenue projections, and evidence of financial responsibility without revealing sensitive business information."
                    },
                    {
                        question: "How can a landlord deck help negotiate better lease terms?",
                        answer: "A professional deck positions you as a high-quality tenant, which can lead to lower security deposits, rent concessions, tenant improvement allowances, or more flexible lease terms as landlords compete for your business."
                    }
                ]}
            />

            <Step />
            <Testimonial />
            <Subscribe />
            <Blog />

            <Contact
                title="Ready to Secure Your Ideal Space?"
                subtitle="Speak with our commercial leasing experts to create a landlord deck that wins property owner approval and gets you the best lease terms."
            />
        </>
    )
}

export default LandlordDeckPage