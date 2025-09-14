import MissionVission from '@/components/about/MissionVission'
import Story from '@/components/about/Story'
import WhyNL from '@/components/about/WhyChooseUs'
import Subscribe from '@/components/common/Subscribe'
import Testimonial from '@/components/Home/Testimonial'
import Banner from '@/components/service/innerpages/Banner'
import Team from '@/components/Team'
import React from 'react'

const About = () => {
    return (
        <>
            <Banner title="Your Journey is Our Mission: Building Business Venture Canada on a Foundation of Trust." breadcrumb="about" />
            <Story />
            <MissionVission variant="mission" />
            <MissionVission variant="vision" />
            <WhyNL />
            <Team />
            <Subscribe />
            <Testimonial />
        </>
    )
}

export default About
