import Testimonial from '@/components/Home/Testimonial'
import Rush from '@/components/service/Rush'
import AllImmigration from '@/components/service/usimmigration/AllImmigration'
import Banner from '@/components/service/usimmigration/Banner'
import Popular from '@/components/service/usimmigration/Popular'
import Secret from '@/components/service/usimmigration/Secret'
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
        </>
    )
}

export default usaImmigration