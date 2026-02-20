import React from 'react';

const nationalBrands = [
    "Oporto", "Subway", "Boost Juice", "Crust Pizza", "Gloria Jeans", "The Coffee Club"
];

const regionalBrands = [
    "Daadi's Kitchen", "Atmex", "Lezzet", "Brothers Kebab", "Lukumades", "CU5", "Radhe", "Krishan Dwara", "Char'd", "Chef's Cafe", "Speciality Donuts"
];

export const TrustIndicators: React.FC = () => {
    return (
        <section className="py-16 md:py-24 border-y border-pack-border/50 bg-white overflow-hidden flex flex-col items-center">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-pack-text mb-4 text-center">
                Trusted by 500+ food businesses across Australia
            </h2>
            <p className="text-pack-gray text-lg mb-12 text-center max-w-2xl px-6">
                From iconic national franchises to beloved local favourites.
            </p>

            {/* National Brands Marquee (Scrolling Left) */}
            <div className="w-full relative flex overflow-x-hidden mb-8">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
                    {[...nationalBrands, ...nationalBrands, ...nationalBrands].map((partner, idx) => (
                        <span key={idx} className="text-4xl md:text-6xl font-display font-semibold text-pack-text/20 hover:text-pack-green transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>

            {/* Regional Brands Marquee (Scrolling Right) */}
            <div className="w-full relative flex overflow-x-hidden">
                <div className="animate-marquee-reverse whitespace-nowrap flex items-center gap-12 md:gap-20">
                    {[...regionalBrands, ...regionalBrands, ...regionalBrands].map((partner, idx) => (
                        <span key={idx} className="text-3xl md:text-4xl font-sans font-bold tracking-tight text-pack-text/10 hover:text-pack-text transition-colors cursor-default">
                            {partner}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};
