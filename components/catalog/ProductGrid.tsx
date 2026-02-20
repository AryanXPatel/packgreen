import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Package } from '@phosphor-icons/react';
import type { Product } from '../../data/products';

interface ProductGridProps {
    products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
    return (
        <div>
            {/* Enquiry Banner */}
            <div className="mb-8 bg-pack-green/5 border border-pack-green/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                    <p className="font-semibold text-pack-text text-sm">Need help finding the right products?</p>
                    <p className="text-pack-gray text-sm">Our packaging specialists can recommend the perfect fit for your business.</p>
                </div>
                <a href="/#enquiry" className="px-6 py-3 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors whitespace-nowrap flex items-center gap-2">
                    Get a Free Quote
                    <ArrowRight weight="bold" size={14} />
                </a>
            </div>

            {/* Product Grid */}
            {products.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
                    {products.map((p) => (
                        <Link to={`/product/${p.id}`} key={p.id} className="col-span-1 flex flex-col cursor-pointer group">
                            {/* Image Container */}
                            <div className="bg-[#EAE8E3] rounded-[2rem] aspect-[4/5] mb-4 overflow-hidden relative border border-pack-border/30">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                />
                            </div>

                            {/* Meta Data */}
                            <div className="px-2">
                                <h4 className="font-semibold text-[15px] tracking-tight text-pack-text mb-1 group-hover:text-pack-green transition-colors">{p.title}</h4>
                                <p className="text-[13px] font-medium text-pack-gray mb-2">{p.desc}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {p.tags.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-[11px] font-medium text-pack-green bg-pack-green/5 px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="w-16 h-16 rounded-full bg-pack-green/5 flex items-center justify-center mx-auto mb-4">
                        <Package size={28} className="text-pack-green/40" />
                    </div>
                    <h3 className="text-lg font-semibold text-pack-text mb-2">No products match your filters</h3>
                    <p className="text-sm text-pack-gray">Try adjusting your category or material selection.</p>
                </div>
            )}
        </div>
    );
};
