import React from 'react';
import { ArrowRight, CheckCircle, Package, Truck, PaintBrush } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

export const EditorialHero: React.FC = () => {
    return (
        <section className="relative px-6 md:px-10 lg:px-12 pt-12 pb-20 md:pt-16 md:pb-28 max-w-[1600px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                {/* Left: Text Content */}
                <div className="flex-1 max-w-2xl">
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-pack-border shadow-sm mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-pack-green animate-pulse"></span>
                        <span className="text-xs font-bold tracking-widest uppercase text-pack-gray">
                            Australia's Food Packaging Partner
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-[80px] font-semibold tracking-tighter text-pack-text leading-[0.95] mb-6 animate-fade-in-up [animation-delay:100ms] text-balance">
                        The packaging behind Australia's favourite food brands.
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-pack-gray font-medium leading-relaxed mb-10 animate-fade-in-up [animation-delay:200ms] max-w-xl">
                        Custom printed and stock food packaging for cafes, restaurants, and takeaway businesses. From a single location to 200+ stores nationwide.
                    </p>

                    {/* CTA Group */}
                    <div className="flex flex-col sm:flex-row items-start gap-4 mb-10 animate-fade-in-up [animation-delay:300ms]">
                        <a href="#enquiry" className="w-full sm:w-auto px-8 py-4 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors flex items-center justify-center gap-3 group">
                            Get a Free Quote
                            <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link to="/products" className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-pack-text border border-pack-border font-semibold text-sm hover:border-pack-text transition-colors shadow-sm text-center">
                            Browse Products
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap items-center gap-6 animate-fade-in-up [animation-delay:400ms]">
                        {[
                            { icon: Package, text: '26+ Product Categories' },
                            { icon: Truck, text: 'Australia-Wide Delivery' },
                            { icon: PaintBrush, text: 'Custom Printing Available' },
                        ].map((badge, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-pack-gray">
                                <badge.icon size={16} weight="bold" className="text-pack-green" />
                                <span className="font-medium">{badge.text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Product Imagery */}
                <div className="flex-1 w-full max-w-[600px] animate-fade-in-up [animation-delay:300ms]">
                    <div className="relative w-full aspect-[4/3] rounded-[2.5rem] bg-[#EAE8E3] overflow-hidden">
                        {/* Main product image */}
                        <img
                            src="https://packgreenpackaging.com.au/wp-content/uploads/2024/07/KSB16E.jpg"
                            alt="Food packaging products - kraft containers and cups"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>

                        {/* Floating accent card */}
                        <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-4 shadow-xl flex items-center gap-3 z-10">
                            <div className="w-10 h-10 rounded-full bg-pack-green/10 flex items-center justify-center">
                                <CheckCircle weight="fill" className="w-5 h-5 text-pack-green" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-pack-text">Trusted Supplier</p>
                                <p className="text-xs text-pack-gray">500+ businesses served</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
