"use client";
import React from 'react'
import ServicesBanner from '@/components/service/ServicesBanner'
import ServicesByCategoryGrid from '@/components/service/ServicesByCategoryGrid'
import IndustrySpecialization from '@/components/service/IndustrySpecialization'
import Why from '@/components/Home/Why';
import Step from '@/components/service/usimmigration/Step';
import Testimonial from '@/components/Home/Testimonial';
import Blog from '@/components/common/Blog';

const page = () => {
    return (
        <>
            <ServicesBanner />
            <ServicesByCategoryGrid />
            <Why />
            <Step />
            <Testimonial />
            <IndustrySpecialization />
            <Blog />
        </>
    )
}

export default page