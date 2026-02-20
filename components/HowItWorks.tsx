import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';

const steps = [
    {
        num: '01',
        title: 'Tell us what you need',
        desc: 'Call, email, or fill out the form below. What products you use, how much you go through, and whether you need printing.',
    },
    {
        num: '02',
        title: 'We send you a quote',
        desc: 'Within 24 hours, you get a detailed quote with product specs, quantities, and lead times. No hidden costs.',
    },
    {
        num: '03',
        title: 'Approve the artwork',
        desc: 'For custom printing, we send digital proofs for your sign-off. Stock items? Skip straight to step four.',
    },
    {
        num: '04',
        title: 'We deliver',
        desc: 'Australia-wide delivery. Palletised, labelled, and ready for your storeroom.',
    },
];

export const HowItWorks: React.FC = () => {
    return (
        <section className="py-24 md:py-32 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="inline-block text-pack-green font-bold tracking-[0.15em] uppercase text-xs mb-4">
                    How It Works
                </span>
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text leading-[1.05]">
                    Four steps. That's it.
                </h2>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
                {steps.map((step, idx) => (
                    <div key={idx} className="relative">
                        {/* Connecting line (desktop only, not on last) */}
                        {idx < steps.length - 1 && (
                            <div className="hidden lg:block absolute top-8 left-[calc(100%+0.5rem)] w-[calc(100%-2rem)] border-t border-dashed border-pack-border"></div>
                        )}

                        {/* Number */}
                        <span className="block font-display text-5xl md:text-6xl text-pack-yellow leading-none mb-6 select-none">
                            {step.num}
                        </span>

                        {/* Content */}
                        <h3 className="text-lg font-bold tracking-tight text-pack-text mb-3">
                            {step.title}
                        </h3>
                        <p className="text-sm text-pack-gray leading-relaxed">
                            {step.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center">
                <a
                    href="#enquiry"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors group"
                >
                    Start Your Enquiry
                    <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </section>
    );
};
