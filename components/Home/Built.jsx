import Image from "next/image";
import React from "react";

import builtbanner from "@/public/images/home/builtbanner.png";
import icon1 from "@/public/images/home/builticon1.svg";
import icon2 from "@/public/images/home/builticon2.svg";

const Built = () => {
    return (
        <section className="container section-padding">
            <div className="flex md:flex-row flex-col items-center gap-2 ">
                <div className="md:w-1/2 w-full">
                    <Image
                        src={builtbanner}
                        alt="builtbanner"
                        className="md:w-[75%] w-full h-full object-cover"
                    />
                </div>
                <div className="md:w-1/2 w-full space-y-7 pt-5 md:pt-0">
                    <h2 className="!text-black">Built for Your Success, Backed by Our Expertise</h2>
                    <p className="text-gray">
                        At NL Immigration, we understand that your application is more than paperwork—it's your future. Our team of expert writers and immigration specialists dedicates itself to crafting personalized, thoroughly researched business plans that meet the strict standards of Canadian immigration officials. We don't use templates; we build convincing narratives.
                    </p>
                    <div className="space-y-5">
                        <div className="flex justify-between gap-5 ">
                            <Image src={icon1} alt="icon1" width={50} height={50} className="w-14 h-14 bg-primary p-3 rounded-full" />
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="font-bold text-xl">Comprehensive Visa Strategy:</h3>
                                <p className="text-gray">
                                    We analyze your profile and goals to recommend the strongest possible pathway for your application.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <Image src={icon2} alt="icon2" width={50} height={50} className="w-14 h-14 bg-primary p-3 rounded-full" />
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="font-bold text-xl">Meticulous Document Preparation:</h3>
                                <p className="text-gray">
                                    From business plans to letters of intent, every document is crafted for clarity, compliance, and impact.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="primary-button bg-dark">Learn more</button>
                </div>
            </div>
        </section>
    );
};

export default Built;