import React from "react";
import Image from "next/image";

import visaplan from "@/public/images/service/visaplan.png";

const VisaPlan = () => {

    return (
        <section className="section-padding bg-gray/15">
            <div className="container flex md:flex-row flex-col items-center justify-between gap-8 lg:gap-12">
                {/* Left Content */}
                <div className="md:w-1/2 w-full space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Sample Visa Business Plans
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed md:pr-20">
                            Explore a selection of our work and see firsthand the quality, care, and commitment we bring to every project. Each immigration business plan is crafted to match your unique needs.                       </p>
                    </div>
                </div>

                {/* Right Image */}
                <div className="md:w-1/2 w-full flex justify-end">
                    <div className="relative group">
                        <Image
                            src={visaplan}
                            alt="Why choose us - Professional team collaboration"
                            width={500}
                            height={700}
                            className="w-full h-[300px] md:h-[500px] object-cover"
                            priority={false}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisaPlan;