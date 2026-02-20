import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';
import type { Product } from '../../data/products';

interface ProductDetailsSplitProps {
    relatedProducts: Product[];
}

export const ProductDetailsSplit: React.FC<ProductDetailsSplitProps> = ({ relatedProducts }) => {
    if (relatedProducts.length === 0) return null;

    return (
        <div className="mb-24">
            <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl font-semibold tracking-tighter text-pack-text">You may also like</h2>
                <Link to="/products" className="flex items-center gap-2 text-sm font-semibold text-pack-green hover:gap-3 transition-all">
                    View All Products
                    <ArrowRight weight="bold" size={14} />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id} className="group flex flex-col cursor-pointer">
                        <div className="bg-[#EAE8E3] rounded-[2rem] aspect-[4/5] mb-4 overflow-hidden border border-pack-border/30 flex items-center justify-center p-6">
                            <img
                                src={p.img}
                                alt={p.title}
                                className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                            />
                        </div>
                        <div className="px-2">
                            <h4 className="font-semibold text-[15px] tracking-tight text-pack-text mb-1 group-hover:text-pack-green transition-colors">{p.title}</h4>
                            <p className="text-[13px] font-medium text-pack-gray">{p.desc}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
