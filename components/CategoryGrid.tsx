import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    "Cake Tray & Seafood Tray", "Cardboard Boxes", "Carry Box", "Chemicals",
    "Coffee Cups & Lids", "Cold Cups & Lids", "Foil Container", "Food Wraps",
    "Garbage Bags", "Gloves", "Greaseproof Paper Wrap", "Kraft Container & Bowl",
    "Kraft Corrugated Clamshells & Trays", "Napkins", "Pizza Boxes", "Plastic Bag",
    "Plates & Bowls", "PP Plastic Containers & Lids", "Show bowl clear",
    "Straws & Cutlery & Skewers", "Sugarcane Clamshells", "Takeaway Bags",
    "Thermal Roll", "Washroom Products", "White Corrugated Clamshells & Trays", "Wipes"
];

export const CategoryGrid: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto bg-pack-bg overflow-hidden relative">
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
                <h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-pack-text leading-[1.0] mb-6 max-w-4xl text-balance">
                    Everything your business needs. One supplier.
                </h2>
                <p className="text-pack-gray text-lg md:text-xl font-medium leading-relaxed max-w-2xl text-balance">
                    26 product categories. Custom printed or stock. Delivered Australia-wide.
                </p>
            </div>

            {/* Elegant Masonry/Flex Wrap Pill Container */}
            <div className="relative z-10 max-w-5xl mx-auto flex flex-wrap justify-center gap-3 md:gap-4">
                {categories.map((category, idx) => (
                    <Link
                        to="/products"
                        key={idx}
                        className="group bg-white border border-pack-border/60 hover:border-pack-green/50 px-6 py-3 rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer flex items-center gap-2"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-pack-gray/30 group-hover:bg-pack-green transition-colors"></span>
                        <span className="text-sm md:text-base font-semibold tracking-tight text-pack-text group-hover:text-pack-green transition-colors">
                            {category}
                        </span>
                    </Link>
                ))}
            </div>

            {/* Soft background aesthetic glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pack-green/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
        </section>
    );
};
