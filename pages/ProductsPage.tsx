import React, { useState, useMemo } from 'react';
import { Funnel, X } from '@phosphor-icons/react';
import { PromoBanner } from '../components/PromoBanner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductsSidebar } from '../components/catalog/ProductsSidebar';
import { ProductGrid } from '../components/catalog/ProductGrid';
import { products } from '../data/products';

export const ProductsPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [activeMaterial, setActiveMaterial] = useState('All');
    const [activePrinting, setActivePrinting] = useState('All');
    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    // Derive unique values from actual product data
    const categories = useMemo(() => {
        const cats = [...new Set(products.map(p => p.category))];
        cats.sort();
        return cats;
    }, []);

    const materials = useMemo(() => {
        const mats = [...new Set(products.map(p => p.material))];
        mats.sort();
        return mats;
    }, []);

    // Filter products
    const filtered = useMemo(() => {
        return products.filter(p => {
            if (activeCategory !== 'All' && p.category !== activeCategory) return false;
            if (activeMaterial !== 'All' && p.material !== activeMaterial) return false;
            if (activePrinting === 'Printable' && !p.tags.includes('Custom Print Available')) return false;
            if (activePrinting === 'Stock Only' && p.tags.includes('Custom Print Available')) return false;
            return true;
        });
    }, [activeCategory, activeMaterial, activePrinting]);

    const hasActiveFilters = activeCategory !== 'All' || activeMaterial !== 'All' || activePrinting !== 'All';

    const clearFilters = () => {
        setActiveCategory('All');
        setActiveMaterial('All');
        setActivePrinting('All');
    };

    const sidebarProps = {
        categories,
        materials,
        activeCategory,
        activeMaterial,
        activePrinting,
        onCategoryChange: setActiveCategory,
        onMaterialChange: setActiveMaterial,
        onPrintingChange: setActivePrinting,
    };

    return (
        <div className="flex flex-col min-h-screen bg-pack-bg">
            <PromoBanner />
            <Header />

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 py-16">

                {/* Header Area */}
                <div className="flex flex-col items-center justify-center text-center mb-16 max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text mb-4">
                        Our Products
                    </h1>
                    <p className="text-pack-gray text-lg font-medium tracking-tight">
                        Browse our full range of food packaging products.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    {/* Left Sidebar - desktop */}
                    <div className="hidden lg:block w-64 shrink-0">
                        <ProductsSidebar {...sidebarProps} />
                    </div>

                    {/* Product Grid Area */}
                    <div className="flex-1 w-full">
                        {/* Mobile filter bar + result count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-sm text-pack-gray">
                                {filtered.length === products.length
                                    ? <span>Showing all <strong className="text-pack-text">{products.length}</strong> products</span>
                                    : <span>Showing <strong className="text-pack-text">{filtered.length}</strong> of {products.length} products</span>
                                }
                            </p>

                            <div className="flex items-center gap-3">
                                {hasActiveFilters && (
                                    <button
                                        onClick={clearFilters}
                                        className="text-sm font-medium text-pack-green hover:text-pack-green-hover transition-colors flex items-center gap-1"
                                    >
                                        Clear filters
                                        <X size={14} weight="bold" />
                                    </button>
                                )}

                                {/* Mobile filter toggle */}
                                <button
                                    onClick={() => setMobileFiltersOpen(true)}
                                    className="lg:hidden flex items-center gap-2 px-4 py-2.5 rounded-full border border-pack-border text-sm font-medium text-pack-text hover:border-pack-text transition-colors"
                                >
                                    <Funnel size={16} weight="bold" />
                                    Filters
                                    {hasActiveFilters && (
                                        <span className="w-2 h-2 rounded-full bg-pack-green"></span>
                                    )}
                                </button>
                            </div>
                        </div>

                        <ProductGrid products={filtered} />
                    </div>

                </div>
            </main>

            {/* Mobile filter sheet */}
            {mobileFiltersOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    <div
                        className="absolute inset-0 bg-black/20"
                        onClick={() => setMobileFiltersOpen(false)}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-pack-bg rounded-t-[2rem] max-h-[80vh] overflow-y-auto shadow-2xl">
                        <div className="sticky top-0 bg-pack-bg px-6 py-5 border-b border-pack-border/50 flex items-center justify-between rounded-t-[2rem]">
                            <h3 className="font-semibold text-lg text-pack-text">Filters</h3>
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="p-2 -mr-2 text-pack-text hover:text-pack-green transition-colors"
                            >
                                <X size={20} weight="bold" />
                            </button>
                        </div>
                        <div className="px-6 py-6">
                            <ProductsSidebar {...sidebarProps} />
                        </div>
                        <div className="sticky bottom-0 bg-pack-bg px-6 py-4 border-t border-pack-border/50 flex gap-3">
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="flex-1 px-6 py-3 rounded-full border border-pack-border text-sm font-semibold text-pack-text hover:border-pack-text transition-colors"
                                >
                                    Clear All
                                </button>
                            )}
                            <button
                                onClick={() => setMobileFiltersOpen(false)}
                                className="flex-1 px-6 py-3 rounded-full bg-pack-green text-white text-sm font-semibold hover:bg-pack-green-hover transition-colors"
                            >
                                Show {filtered.length} Products
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};
