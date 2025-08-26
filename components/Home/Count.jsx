import React from "react";

const Count = () => {
    const stats = [
        {
            id: 1,
            number: "40,000+",
            label: "Business Plans"
        },
        {
            id: 2,
            number: "75+",
            label: "Client Countries"
        },
        {
            id: 3,
            number: "220+",
            label: "Industries"
        },
        {
            id: 4,
            number: "$300M+",
            label: "Funding for Clients"
        }
    ];

    return (
        <section className="bg-primary py-12 md:py-16">
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={stat.id} className="text-start md:text-center text-white relative">
                            {/* Vertical divider - only show between items */}
                            {index > 0 && (
                                <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-gray-300/90 rotate-30" />
                            )}

                            <div className="space-y-2">
                                <h2 className="!text-white">
                                    {stat.number}
                                </h2>
                                <h4 className="!text-white">
                                    {stat.label}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Count;