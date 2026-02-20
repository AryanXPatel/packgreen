import React, { useState, useEffect } from 'react';
import { List, X, Phone, ArrowRight } from '@phosphor-icons/react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isHomePage = location.pathname === '/';

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    /**
     * Returns the correct href for anchor links.
     * On the homepage, use #section directly.
     * On other pages, use /#section to navigate home first.
     */
    const getAnchorHref = (sectionId: string) => {
        return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
    };

    const navLinks = [
        { label: 'Products', to: '/products', type: 'route' as const },
        { label: 'Custom Printing', anchor: 'custom-printing', type: 'anchor' as const },
        { label: 'About', anchor: 'why-packgreen', type: 'anchor' as const },
        { label: 'Contact', anchor: 'enquiry', type: 'anchor' as const },
    ];

    const handleMobileNavClick = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-pack-bg sticky top-0 z-40">
            {/* Top Nav */}
            <div className="px-6 md:px-10 lg:px-12 py-5 flex items-center justify-between gap-4 border-b border-black/5">
                {/* Hamburger toggle - mobile only */}
                <div className="flex-1 flex items-center md:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 -ml-2 text-pack-text hover:text-pack-green transition-colors"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
                    </button>
                </div>

                {/* Phone number - desktop only (takes the left flex space) */}
                <div className="flex-1 hidden md:flex items-center gap-2">
                    <Phone size={16} className="text-pack-gray" />
                    <span className="text-sm font-medium text-pack-gray">1300 PACK GRN</span>
                </div>

                {/* Logo - always centred */}
                <div className="flex items-center gap-2 flex-shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pack-text">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <Link to="/" className="text-xl font-semibold tracking-tight">PackGreen</Link>
                </div>

                {/* CTA - right side */}
                <div className="flex-1 flex justify-end items-center">
                    <a
                        href={getAnchorHref('enquiry')}
                        className="px-5 py-2.5 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors hidden sm:inline-flex items-center gap-2"
                    >
                        Get a Free Quote
                    </a>
                    {/* Compact CTA on very small screens (visible below sm, hidden on sm+) */}
                    <a
                        href={getAnchorHref('enquiry')}
                        className="px-4 py-2 rounded-full bg-pack-green text-white font-semibold text-xs hover:bg-pack-green-hover transition-colors sm:hidden"
                    >
                        Quote
                    </a>
                </div>
            </div>

            {/* Secondary Nav - desktop only */}
            <nav className="px-6 md:px-10 lg:px-12 py-4 hidden md:flex items-center justify-center gap-6 lg:gap-8 overflow-x-auto whitespace-nowrap border-b border-black/5">
                {navLinks.map((link) =>
                    link.type === 'route' ? (
                        <Link
                            key={link.label}
                            to={link.to!}
                            className={`text-[13px] font-medium transition-colors hover:text-pack-text ${
                                location.pathname === link.to
                                    ? 'text-pack-text border-b border-pack-text pb-1 -mb-[17px]'
                                    : 'text-pack-gray'
                            }`}
                        >
                            {link.label}
                        </Link>
                    ) : (
                        <a
                            key={link.label}
                            href={getAnchorHref(link.anchor!)}
                            className="text-[13px] font-medium text-pack-gray transition-colors hover:text-pack-text"
                        >
                            {link.label}
                        </a>
                    )
                )}
            </nav>

            {/* Mobile menu overlay */}
            <div
                className={`fixed inset-0 top-0 z-50 md:hidden transition-opacity duration-300 ${
                    mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className="absolute inset-0 bg-black/20"
                    onClick={() => setMobileMenuOpen(false)}
                />

                {/* Menu panel */}
                <div
                    className={`absolute top-0 left-0 w-full max-w-sm h-full bg-pack-bg shadow-2xl transform transition-transform duration-300 ease-out ${
                        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    {/* Mobile menu header */}
                    <div className="flex items-center justify-between px-6 py-5 border-b border-black/5">
                        <div className="flex items-center gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-pack-text">
                                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-xl font-semibold tracking-tight">PackGreen</span>
                        </div>
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="p-2 -mr-2 text-pack-text hover:text-pack-green transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={24} weight="bold" />
                        </button>
                    </div>

                    {/* Mobile nav links */}
                    <nav className="px-6 py-6 flex flex-col gap-1">
                        {/* Featured catalogue link */}
                        <Link
                            to="/products"
                            onClick={handleMobileNavClick}
                            className="flex items-center justify-between mb-4 p-4 rounded-2xl bg-pack-green/5 border border-pack-green/10 group"
                        >
                            <div>
                                <span className="text-xs font-bold tracking-wider uppercase text-pack-green">Browse</span>
                                <span className="block text-lg font-semibold text-pack-text group-hover:text-pack-green transition-colors">Our Catalogue</span>
                                <span className="text-sm text-pack-gray">26 product categories</span>
                            </div>
                            <ArrowRight size={20} weight="bold" className="text-pack-green group-hover:translate-x-1 transition-transform" />
                        </Link>

                        {navLinks.filter(l => l.type !== 'route').map((link) => (
                            <a
                                key={link.label}
                                href={getAnchorHref(link.anchor!)}
                                onClick={handleMobileNavClick}
                                className="text-lg font-medium py-3 px-4 rounded-2xl text-pack-text hover:bg-black/5 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Mobile menu footer */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-8 border-t border-black/5">
                        {/* Phone */}
                        <a
                            href="tel:1300722547"
                            className="flex items-center gap-3 text-pack-text mb-6"
                        >
                            <div className="w-10 h-10 rounded-full bg-pack-green/10 flex items-center justify-center">
                                <Phone size={18} className="text-pack-green" />
                            </div>
                            <div>
                                <span className="text-sm text-pack-gray block">Call us</span>
                                <span className="text-base font-semibold">1300 PACK GRN</span>
                            </div>
                        </a>

                        {/* CTA */}
                        <a
                            href={getAnchorHref('enquiry')}
                            onClick={handleMobileNavClick}
                            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-full bg-pack-green text-white font-semibold text-sm hover:bg-pack-green-hover transition-colors"
                        >
                            Get a Free Quote
                            <ArrowRight size={16} weight="bold" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};
