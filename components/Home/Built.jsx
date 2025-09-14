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
                    <h2 className="!text-black"> One Plan, Two Objectives: Immigration Compliance and Business Growth</h2>
                    <p className="text-gray">
                        Whether your goal is to secure a visa or secure funding, the foundation is the same: a credible, persuasive, and financially sound business plan. Our team of senior analysts and strategists combines expertise in international immigration law with sharp business acumen. We don't just write documents; we build strategic roadmaps for your success.
                    </p>
                    <div className="space-y-5">
                        <div className="flex justify-between gap-5 ">
                            <Image src={icon1} alt="icon1" width={50} height={50} className="w-14 h-14 bg-primary p-3 rounded-full" />
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="font-bold text-xl">Dual-Purpose Expertise:</h3>
                                <p className="text-gray">
                                    Plans are crafted to satisfy government immigration officers and discerning investors simultaneously.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-between gap-5">
                            <Image src={icon2} alt="icon2" width={50} height={50} className="w-14 h-14 bg-primary p-3 rounded-full" />
                            <div className="space-y-2 md:space-y-4">
                                <h3 className="font-bold text-xl">Market-Led Financial Modeling:</h3>
                                <p className="text-gray">
                                    We develop realistic, defensible financial projections—including P&L, Cash Flow, and Balance Sheets—based on real-world data.
                                </p>
                            </div>
                        </div>
                    </div>
                    <button className="primary-button bg-dark">Explore Our Methodology</button>
                </div>
            </div>
        </section>
    );
};

export default Built;