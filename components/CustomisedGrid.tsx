import React from 'react';
import { ArrowRight, Printer, Drop, Factory } from '@phosphor-icons/react';

const printMethods = [
    {
        icon: Printer,
        title: 'Offset Printing',
        desc: 'High-quality, vibrant colours for large production runs. Perfect for consistent brand reproduction.',
    },
    {
        icon: Drop,
        title: 'Digital Printing',
        desc: 'Perfect for short runs and seasonal designs. Fast turnaround with no plate costs.',
    },
    {
        icon: Factory,
        title: 'Flexographic Printing',
        desc: 'Cost-effective for high-volume orders. Ideal for simple logos and repeat patterns.',
    },
];

export const CustomisedGrid: React.FC = () => {
    return (
        <section id="custom-printing" className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            <div className="bg-pack-green rounded-[3rem] p-10 md:p-16 lg:p-20 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-[-20%] left-[-10%] w-[60%] aspect-square rounded-full bg-white/5 blur-3xl mix-blend-overlay"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] aspect-square rounded-full bg-pack-yellow/10 blur-3xl mix-blend-overlay"></div>

                <div className="relative z-10">
                    {/* Section Header */}
                    <div className="max-w-2xl mb-14">
                        <span className="inline-block text-pack-yellow font-bold tracking-[0.15em] uppercase text-xs mb-4">Custom Printing</span>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter text-white leading-[1.05] mb-6 text-balance">
                            Your brand on every cup, box, and bag.
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl font-medium leading-relaxed">
                            Custom printing turns everyday packaging into a branding opportunity. Every takeaway order, every coffee cup, every delivery box tells your story.
                        </p>
                    </div>

                    {/* Print Method Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {printMethods.map((method, idx) => (
                            <div key={idx} className="bg-white rounded-[2rem] p-8 hover-card">
                                <div className="w-14 h-14 rounded-2xl bg-pack-green/10 flex items-center justify-center mb-6">
                                    <method.icon size={28} weight="duotone" className="text-pack-green" />
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-pack-text mb-3">{method.title}</h3>
                                <p className="text-pack-gray text-sm leading-relaxed">{method.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <a href="#enquiry" className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-pack-yellow text-pack-text font-bold text-sm hover:brightness-110 transition-all hover:shadow-xl hover:shadow-pack-yellow/20 group">
                        Start Your Custom Print Project
                        <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};
