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


const StartUp = () => {
    return (
        <>
            <Banner title="Supporting the Growth of Your Start-up"
                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet iusto at voluptate id laborum suscipit aliquam perspiciatis molestiae tenetur voluptatibus in aut, earum vitae itaque sequi ut ad atque obcaecati eos iste quas corporis? "
                src={banner}
            />
            <Secret />
            <Rush />
            <Popular />
            <AllImmigration />
            <Testimonial />
            <Why />
            <Step />
            <VisaPlan />
            <PopularVisa />
            <Consultation />
            <Subscribe />
        </>
    )
}

export default StartUp