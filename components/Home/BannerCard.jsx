import React from 'react'
import bannercardicon1 from "@/public/images/home/bannercardicon1.svg"
import bannercardicon2 from "@/public/images/home/bannercardicon2.svg"
import bannercardicon3 from "@/public/images/home/bannercardicon3.svg"
import Image from 'next/image'

const BannerCard = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 section-padding mt-14 md:mt-0'>
            <Card icon={bannercardicon1} iconalt='bannercardicon1' title='Visa Applicants' description='Navigate the complex visa process with confidence. We handle the intricate business plans and supporting documents, so you can focus on preparing for your new life in Canada.' index={0} />

            <Card icon={bannercardicon2} iconalt='bannercardicon2' title='Immigration Attorneys & Consultants' description='Trusted by professionals to elevate their service offering. We provide your clients with flawless, ready-to-submit business plans, strengthening your petitions and saving you valuable time.' index={1} />
            <Card icon={bannercardicon3} iconalt='bannercardicon3' title='Entrepreneurs & Small Business Owners' description=' Launch and grow your Canadian business with a solid foundation. Our plans are not just for visas—they are actionable roadmaps for your financial success.' index={2} />
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