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
            <Image src={bottomshape} alt="bottomshape" className="absolute -bottom-36 left-0 -z-10" />
            <Image src={shape2} alt="bottomshape" className="absolute bottom-24 left-1/3 -z-10 hidden md:block" />

            <div className="container flex justify-center items-center h-full">
                <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                    <div className="w-full md:w-1/2 relative text-center md:text-left">
                        <Image src={textshape} alt="textshape" className="absolute top-28 md:top-52 left-32 w-42 md:w-full md:h-8 -z-10 hidden md:block" />
                        <h1 className="mt-6 md:mt-0 z-10 text-center md:text-left">Empowering
                            Entrepreneurs in
                            Their Life Changing
                            Endeavors.
                        </h1>
                        <p className="my-5 md:my-6">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet iusto at voluptate id laborum suscipit aliquam perspiciatis molestiae tenetur voluptatibus in aut, earum vitae itaque sequi ut ad atque obcaecati eos iste quas corporis? </p>
                        <Button link='#' cn='' text='Get Consultation' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <Image src={banner} alt="banner" className="w-full md:h-[600px] h-[300px] object-contain" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
