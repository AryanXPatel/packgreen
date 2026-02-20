import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const reasons = [
    {
        num: '01',
        title: 'Scale when you need it',
        desc: 'Whether you run one cafe or 200 franchise locations, we handle the same product quality at any volume. No minimum orders that don\u2019t make sense.',
    },
    {
        num: '02',
        title: 'Your brand, printed',
        desc: 'Offset, digital, or flexographic \u2014 we match the printing method to your run size. Your logo on every cup, bag, and box your customers touch.',
    },
    {
        num: '03',
        title: 'Actually in stock',
        desc: 'We warehouse locally in Australia. Stock items ship same day. No waiting weeks for a container from overseas.',
    },
    {
        num: '04',
        title: 'People who know packaging',
        desc: 'Call us and talk to someone who knows the difference between PE-lined and PLA-lined. We\u2019ll recommend the right product, not the most expensive one.',
    },
];

export const WhyPackGreen: React.FC = () => {
    return (
        <section id="why-packgreen" className="py-24 md:py-32 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left: Editorial Headline */}
                <div className="lg:w-[40%] lg:sticky lg:top-32 lg:self-start">
                    <span className="inline-block text-pack-green font-bold tracking-[0.15em] uppercase text-xs mb-4">
                        Why PackGreen
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter text-pack-text leading-[1.05] mb-6 text-balance">
                        One supplier for everything behind the counter.
                    </h2>
                    <p className="text-pack-gray text-lg font-medium leading-relaxed mb-8">
                        We don't do everything. We do food packaging, and we do it properly.
                    </p>
                    <a
                        href="#enquiry"
                        className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors group"
                    >
                        Get a Free Quote
                        <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Right: Value Props */}
                <div className="lg:w-[60%]">
                    {reasons.map((reason, idx) => (
                        <div
                            key={idx}
                            className={`py-10 ${idx < reasons.length - 1 ? 'border-b border-pack-border' : ''} ${idx === 0 ? 'pt-0' : ''}`}
                        >
                            <div className="flex gap-6 md:gap-8">
                                {/* Number */}
                                <span className="font-display text-3xl md:text-4xl text-pack-green/20 leading-none pt-1 select-none">
                                    {reason.num}
                                </span>

                                {/* Content */}
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-pack-text mb-3">
                                        {reason.title}
                                    </h3>
                                    <p className="text-pack-gray text-base leading-relaxed max-w-lg">
                                        {reason.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
