import React from 'react';
import { ArrowRight, EnvelopeSimple } from '@phosphor-icons/react';
import type { Product } from '../../data/products';

interface ProductHeroProps {
    product: Product;
}

export const ProductHero: React.FC<ProductHeroProps> = ({ product }) => {
    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-20">
            {/* Left Image Gallery */}
            <div className="w-full lg:w-[55%] xl:w-[60%]">
                <div className="bg-[#F2F0E9] rounded-3xl p-8 lg:p-16 flex items-center justify-center aspect-square lg:aspect-[4/3] overflow-hidden mb-4">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-full max-w-md lg:max-w-xl object-contain mix-blend-multiply"
                    />
                </div>
            </div>

            {/* Right: Product Info + Enquiry */}
            <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text mb-4 leading-tight">
                    {product.title}
                </h1>
                <p className="text-pack-gray text-[15px] font-medium leading-relaxed mb-8 max-w-sm">
                    {product.desc}
                </p>

                {/* Suitable For Tags */}
                {product.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                        {product.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-full bg-pack-green/10 text-pack-green text-xs font-bold">
                                {tag}
                            </span>
                        ))}
                    </div>
                )}

                {/* Specs Table */}
                {product.specs.length > 0 && (
                    <div className="border border-pack-border/30 rounded-2xl overflow-hidden mb-8">
                        {product.specs.map((spec, idx) => (
                            <div key={idx} className={`flex items-center justify-between px-6 py-3.5 text-sm ${idx !== product.specs.length - 1 ? 'border-b border-pack-border/20' : ''}`}>
                                <span className="font-medium text-pack-gray">{spec.label}</span>
                                <span className="font-bold text-pack-text">{spec.value}</span>
                            </div>
                        ))}
                    </div>
                )}

                {/* Action Button */}
                <div className="flex flex-col gap-3">
                    <a href="/#enquiry" className="flex items-center justify-center gap-3 w-full py-4 rounded-full bg-pack-green text-white font-bold text-sm hover:bg-pack-green-hover transition-colors group">
                        <EnvelopeSimple size={18} weight="bold" />
                        Product Enquiry
                        <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </div>
    );
};
