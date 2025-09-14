import Image from "next/image";
import React from "react";

import banner from "@/public/images/home/banner.png";
import textshape from "@/public/images/home/textshape.svg";
import bottomshape from "@/public/images/home/bottomshape.svg";
import shape2 from "@/public/images/home/shape2.svg";
import Button from "@/components/common/Button";

const Banner = () => {
    return (
        <section className="h-[90vh] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-purple-100/40 -z-19"></div>

            {/* <Image src={bottomshape} alt="bottomshape" className="absolute -bottom-36 left-0 -z-10" /> */}
            <Image src={shape2} alt="bottomshape" className="absolute bottom-16 left-[38%] -z-10 hidden md:block w-[200px] h-[200px]" />

            <div className="container flex justify-center items-center h-full">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 relative text-center md:text-left">
                        {/* <Image src={textshape} alt="textshape" className="absolute top-28 md:top-56 left-52 w-42 md:w-[80%] md:h-7 -z-10 hidden md:block opacity-20" /> */}
                        <h1 className="mt-6 md:mt-0 z-10 text-center md:text-left">Strategic Business Plans for Global Ventures and Visa Success
                        </h1>
                        <p className="my-5 md:my-6">Business Venture Canada is your expert partner for crafting data-driven business plans that achieve two critical goals: securing international visas and launching profitable, scalable enterprises. We turn ambitious visions into validated, investment-ready strategies. </p>
                        <Button link='#' cn='' text='Get a Free Strategy Session' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="">
                            <Image src={banner} alt="banner" className="w-full md:h-[650px] h-[300px] object-contain" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
