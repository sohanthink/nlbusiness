import React from 'react'
import bannercardicon1 from "@/public/images/home/bannercardicon1.svg"
import bannercardicon2 from "@/public/images/home/bannercardicon2.svg"
import bannercardicon3 from "@/public/images/home/bannercardicon3.svg"
import Image from 'next/image'

const BannerCard = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 section-padding mt-14 md:mt-0'>
            <Card icon={bannercardicon1} iconalt='bannercardicon1' title='Immigrants & Investors' description='Securing your future in a new country. We develop compelling, immigration-compliant business plans that meet the strict requirements of visa programs in Canada, the USA, UK, Australia, and beyond.' index={0} />

            <Card icon={bannercardicon2} iconalt='bannercardicon2' title="Startups & Entrepreneurs" description="Launching and scaling your venture. We create robust, investor-ready business plans to secure funding, attract partners, and guide your startup's strategy with clarity and confidence." index={1} />
            <Card icon={bannercardicon3} iconalt='bannercardicon3' title='Established Corporations & Franchises' description='Expanding your operations globally. We provide master business plans for market entry, franchising, and strategic growth, supported by meticulous market and financial analysis.' index={2} />
        </div>
    )
}

export default BannerCard

export const Card = ({ icon, iconalt, title, description, index }) => {
    const isSecondCard = index === 1;

    return (
        <div className={`flex justify-between items-center gap-4 group hover:bg-primary px-4 py-5 md:px-5 md:py-8 rounded-xl transition-all duration-300 ${isSecondCard ? 'bg-primary' : ''}`}>
            <div className={`w-14 bg-primary group-hover:border-2 group-hover:border-white h-14 flex items-center justify-center rounded-full flex-shrink-0 ${isSecondCard ? 'border-2 border-white' : ''}`}>
                <Image src={icon} alt={iconalt} width={20} />
            </div>
            <div className='space-y-2'>
                <h4 className={`group-hover:text-white ${isSecondCard ? 'text-white' : ''}`}>{title}</h4>
                <p className={`group-hover:!text-white ${isSecondCard ? '!text-white' : ''}`}>{description}</p>
            </div>
        </div>
    )
}