import React from 'react'
import bannercardicon1 from "@/public/images/home/bannercardicon1.svg"
import bannercardicon2 from "@/public/images/home/bannercardicon2.svg"
import bannercardicon3 from "@/public/images/home/bannercardicon3.svg"
import Image from 'next/image'

const BannerCard = () => {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-3 gap-4 section-padding'>
            <Card icon={bannercardicon1} iconalt='bannercardicon1' title='Visa Applicants' description='It is long established fact that reader will distracted by the readable content' />
            <Card icon={bannercardicon2} iconalt='bannercardicon2' title='Immigration Attorneys' description='It is long established fact that reader will distracted by the readable content' />
            <Card icon={bannercardicon3} iconalt='bannercardicon3' title='Small Business advisor' description='It is long established fact that reader will distracted by the readable content' />
        </div>
    )
}

export default BannerCard

export const Card = ({ icon, iconalt, title, description }) => {
    return (
        <div className='flex justify-between items-center gap-4 group hover:bg-primary p-5 rounded-xl transition-all duration-300'>
            <div className='w-14 bg-primary group-hover:border-2 group-hover:border-white h-14 flex items-center justify-center rounded-full flex-shrink-0'>
                <Image src={icon} alt={iconalt} width={20} />
            </div>
            <div className='space-y-2'>
                <h4 className='group-hover:text-white'>{title}</h4>
                <p className='group-hover:!text-white'>{description}</p>
            </div>
        </div>
    )
}