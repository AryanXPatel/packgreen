import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

const PG = 'https://packgreenpackaging.com.au/wp-content/uploads';

const industries = [
    {
        title: 'Cafes & Coffee Shops',
        desc: 'Cups, lids, napkins, takeaway bags — everything behind the counter.',
        img: `${PG}/2024/07/2-1.png`,
    },
    {
        title: 'Restaurants & Takeaway',
        desc: 'Containers, clamshells, cutlery packs for dine-in and delivery.',
        img: `${PG}/2024/07/KSB16E.jpg`,
    },
    {
        title: 'Franchise Networks',
        desc: 'Consistent custom-printed packaging across every location.',
        img: `${PG}/2024/07/pizza.png`,
    },
    {
        title: 'Bakeries & Patisseries',
        desc: 'Cake trays, greaseproof wrap, kraft bags for pastries and bread.',
        img: `${PG}/2024/07/GP2W-1.jpg`,
    },
    {
        title: 'Events & Catering',
        desc: 'Bulk plates, bowls, cutlery, and serving ware for any size function.',
        img: `${PG}/2024/08/YP10__30074.jpg`,
    },
];

export const WhoWeSupply: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            {/* Section Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
                <div className="max-w-2xl">
                    <span className="inline-block text-pack-green font-bold tracking-[0.15em] uppercase text-xs mb-4">
                        Who We Supply
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold tracking-tighter text-pack-text leading-[1.05] text-balance">
                        From single-store cafes to 200-location franchises.
                    </h2>
                </div>
                <p className="text-pack-gray text-lg font-medium leading-relaxed max-w-md lg:pb-1">
                    Same product quality, same service, whether you order 50 units or 50,000.
                </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[220px] md:auto-rows-[240px]">
                {/* Featured Card: Cafes & Coffee - spans 2 cols, 2 rows */}
                <div className="md:col-span-2 md:row-span-2 bg-[#E8E4DB] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group">
                    <div className="relative z-10">
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-pack-text mb-3">
                            {industries[0].title}
                        </h3>
                        <p className="text-pack-gray text-base leading-relaxed max-w-sm">
                            {industries[0].desc}
                        </p>
                    </div>
                    <img
                        src={industries[0].img}
                        alt={industries[0].title}
                        className="absolute bottom-0 right-0 w-[45%] h-[70%] object-contain opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 mix-blend-multiply"
                    />
                </div>

                {/* Card 2: Restaurants */}
                <div className="bg-[#E2E6DF] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group">
                    <h3 className="text-xl font-bold tracking-tight text-pack-text mb-2">
                        {industries[1].title}
                    </h3>
                    <p className="text-sm text-pack-gray leading-relaxed">{industries[1].desc}</p>
                    <img
                        src={industries[1].img}
                        alt={industries[1].title}
                        className="absolute -bottom-2 -right-2 w-24 h-24 object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-500 mix-blend-multiply"
                    />
                </div>

                {/* Card 3: Franchises */}
                <div className="bg-pack-green rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-2">
                        {industries[2].title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed">{industries[2].desc}</p>
                    <img
                        src={industries[2].img}
                        alt={industries[2].title}
                        className="absolute -bottom-2 -right-2 w-24 h-24 object-contain opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                    />
                </div>

                {/* Card 4: Bakeries */}
                <div className="bg-[#F4EBE3] rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative group">
                    <h3 className="text-xl font-bold tracking-tight text-pack-text mb-2">
                        {industries[3].title}
                    </h3>
                    <p className="text-sm text-pack-gray leading-relaxed">{industries[3].desc}</p>
                    <img
                        src={industries[3].img}
                        alt={industries[3].title}
                        className="absolute -bottom-2 -right-2 w-24 h-24 object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-500 mix-blend-multiply"
                    />
                </div>

                {/* Card 5: Events - spans 2 cols */}
                <div className="md:col-span-2 bg-[#EAECEB] rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between overflow-hidden relative group">
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold tracking-tight text-pack-text mb-2">
                            {industries[4].title}
                        </h3>
                        <p className="text-sm text-pack-gray leading-relaxed max-w-sm">{industries[4].desc}</p>
                    </div>
                    <Link
                        to="/products"
                        className="mt-4 md:mt-0 flex items-center gap-2 text-sm font-semibold text-pack-green hover:gap-3 transition-all"
                    >
                        View Full Catalogue
                        <ArrowRight weight="bold" size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
