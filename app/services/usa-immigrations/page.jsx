"use client";
import React from 'react'
import Image from 'next/image'
import banner from "@/public/images/service/servicebanner.png";

const usaImmigration = () => {
    return (
        <>
            <section className="w-full relative py-10">
                <div className="container flex justify-center items-center h-full">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                        <div className="w-full md:w-1/2 relative text-center md:text-left">
                            <h1 className="mt-6 md:mt-0 z-10 text-center md:text-left">
                                Empowering Entrepreneurs in Their Life Changing Endeavors.
                            </h1>
                            <p className="my-5 md:my-6">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, amet iusto at voluptate id laborum suscipit aliquam perspiciatis molestiae tenetur voluptatibus in aut, earum vitae itaque sequi ut ad atque obcaecati eos iste quas corporis?
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <Image src={banner} alt="banner" className="w-full md:h-[600px] h-[300px] object-contain" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default usaImmigration