import React from 'react';

const steps = [
    { number: "01", title: "Browse & Select", desc: "Explore 26 product categories or tell us what you need." },
    { number: "02", title: "Get Expert Advice", desc: "Our packaging specialists help you find the right fit for your business." },
    { number: "03", title: "Custom Print (Optional)", desc: "Add your logo and branding to any product in our range." },
    { number: "04", title: "Delivered to Your Door", desc: "Fast Australia-wide delivery. From single cases to bulk orders." }
];

export const ProcessSteps: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                <div className="lg:w-1/3">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text leading-[1.0] mb-6">
                        Getting started <br />is simple
                    </h2>
                    <p className="text-pack-gray text-lg mb-8">
                        From your first enquiry to delivery at your door, we make it easy.
                    </p>
                    <a href="#enquiry" className="inline-flex items-center text-pack-text font-bold tracking-tight uppercase text-sm border-b-2 border-pack-green pb-1 hover:text-pack-green transition-colors">
                        Get a free quote today
                    </a>
                </div>

                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 relative">
                    {/* Horizontal connection line for desktop */}
                    <div className="hidden lg:block absolute top-12 left-[5%] w-[90%] h-[1px] bg-pack-border -z-10"></div>

                    {steps.map((step, idx) => (
                        <div key={idx} className="relative bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-pack-border/50 hover-card">
                            <div className="w-24 h-24 rounded-full bg-pack-bg border-4 border-white flex items-center justify-center text-2xl font-display text-pack-green mb-8 shadow-sm">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-pack-text mb-4">{step.title}</h3>
                            <p className="text-pack-gray text-sm md:text-base leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
