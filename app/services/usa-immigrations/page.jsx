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
import React from 'react'

const usaImmigration = () => {
    return (
        <>
            <Banner />
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

export default usaImmigration