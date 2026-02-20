import React from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { featuredProducts } from '../data/products';

const cardColors = ['bg-[#F2EDDF]', 'bg-[#EAECEB]', 'bg-[#E2E6DF]', 'bg-[#F4EBE3]'];

export const MarthaPeachFeature: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-14 gap-4">
                <div>
                    <span className="inline-block text-pack-green font-bold tracking-[0.15em] uppercase text-xs mb-4">Our Selection</span>
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text leading-[1.05]">
                        Popular with our customers
                    </h2>
                </div>
                <Link to="/products" className="flex items-center gap-2 px-6 py-3 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors group">
                    View Full Catalogue
                    <ArrowRight weight="bold" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProducts.map((product, idx) => (
                    <Link to={`/product/${product.id}`} key={product.id} className="group flex flex-col rounded-[2rem] bg-white overflow-hidden hover-card border border-pack-border/30">
                        {/* Product Image */}
                        <div className={`relative w-full aspect-square ${cardColors[idx] || cardColors[0]} flex items-center justify-center p-6 overflow-hidden`}>
                            <img
                                src={product.img}
                                alt={product.title}
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="p-6 flex flex-col flex-1">
                            <h3 className="text-lg font-bold tracking-tight text-pack-text mb-1">{product.title}</h3>
                            <p className="text-sm text-pack-gray mb-4">{product.featuredDesc || product.desc}</p>
                            <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-pack-green group-hover:gap-3 transition-all">
                                View Range
                                <ArrowRight weight="bold" className="w-4 h-4" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
