import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PromoBanner } from '../components/PromoBanner';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ProductHero } from '../components/product/ProductHero';
import { ProductFeatures } from '../components/product/ProductFeatures';
import { ProductDetailsSplit } from '../components/product/ProductDetailsSplit';
import { EnquiryForm } from '../components/EnquiryForm';
import { getProductById, getRelatedProducts } from '../data/products';

export const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = id ? getProductById(Number(id)) : undefined;
    const relatedProducts = product ? getRelatedProducts(product.id, 4) : [];

    if (!product) {
        return (
            <div className="flex flex-col min-h-screen bg-pack-bg">
                <PromoBanner />
                <Header />
                <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 py-20 md:py-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text mb-4">
                        Product not found
                    </h1>
                    <p className="text-pack-gray text-[15px] font-medium mb-8">
                        Sorry, we couldn't find the product you're looking for.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-pack-green text-white font-bold text-sm hover:bg-pack-green-hover transition-colors"
                    >
                        Browse All Products
                    </Link>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-pack-bg">
            <PromoBanner />
            <Header />

            <main className="flex-1 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-12 py-10 md:py-16">
                <ProductHero product={product} />
                <ProductFeatures />
                <ProductDetailsSplit relatedProducts={relatedProducts} />
            </main>

            <EnquiryForm />

            <Footer />
        </div>
    );
};
