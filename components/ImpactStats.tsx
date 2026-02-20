import React from 'react';

const stats = [
    {
        number: '500+',
        label: 'food businesses supplied',
        detail: 'across Australia',
    },
    {
        number: '26',
        label: 'product categories',
        detail: 'from cups to chemicals',
    },
    {
        number: '200+',
        label: 'franchise locations',
        detail: 'running our packaging',
    },
    {
        number: '24hr',
        label: 'quote turnaround',
        detail: 'on all enquiries',
    },
];

export const ImpactStats: React.FC = () => {
    return (
        <section className="mx-6 md:mx-10 lg:mx-12">
            <div className="bg-pack-green rounded-[3rem] py-20 md:py-28 px-8 md:px-16 lg:px-20 max-w-[1600px] mx-auto relative overflow-hidden">
                {/* Subtle background texture */}
                <div className="absolute top-[-30%] right-[-15%] w-[50%] aspect-square rounded-full bg-white/[0.03] blur-3xl"></div>
                <div className="absolute bottom-[-30%] left-[-15%] w-[40%] aspect-square rounded-full bg-pack-yellow/[0.05] blur-3xl"></div>

                <div className="relative z-10">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 md:gap-x-12">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="relative">
                                {/* Divider line on non-first items (desktop) */}
                                {idx > 0 && (
                                    <div className="hidden lg:block absolute -left-6 top-0 bottom-0 w-px bg-white/10"></div>
                                )}

                                <span className="block font-display text-6xl md:text-7xl lg:text-[80px] font-normal text-white leading-none mb-4 tracking-tight">
                                    {stat.number}
                                </span>
                                <span className="block text-sm md:text-base font-semibold text-white/80 mb-1">
                                    {stat.label}
                                </span>
                                <span className="block text-sm text-white/40">
                                    {stat.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
