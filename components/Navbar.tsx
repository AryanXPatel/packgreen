import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Package } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100' : 'bg-white/80 backdrop-blur-md'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-[72px]">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="w-10 h-10 bg-pg-forest rounded-xl flex items-center justify-center group-hover:bg-pg-emerald transition-colors duration-300">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl tracking-tight text-pg-forest leading-none">
                Pack<span className="text-pg-emerald">Green</span>
              </span>
              <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-pg-gray/60 leading-none mt-0.5">Australia</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 bg-gray-50/80 p-1.5 rounded-full border border-gray-100/50">
            <a href="#" className="bg-pg-forest text-white px-5 py-2 rounded-full text-sm font-bold transition-all">Home</a>
            <a href="#products" className="text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-pg-forest hover:shadow-sm transition-all">Products</a>
            <a href="#branding" className="text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-pg-forest hover:shadow-sm transition-all">Custom Branding</a>
            <a href="#about" className="text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-pg-forest hover:shadow-sm transition-all">About</a>
            <a href="#enquiry" className="text-gray-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-pg-forest hover:shadow-sm transition-all">Contact</a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex w-10 h-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-pg-forest transition-colors">
              <Search className="w-[18px] h-[18px]" />
            </button>
            <a href="#enquiry" className="hidden sm:flex bg-pg-forest text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-pg-emerald transition-colors shadow-lg shadow-pg-forest/20 hover:shadow-pg-emerald/30 items-center gap-2">
              Get a Quote
            </a>
            
            {/* Mobile Toggle */}
            <button 
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-700"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 pt-4 animate-fade-up">
          <div className="flex flex-col gap-1">
            <a href="#" className="px-4 py-3 rounded-xl text-pg-forest font-bold bg-gray-50">Home</a>
            <a href="#products" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50">Products</a>
            <a href="#branding" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50">Custom Branding</a>
            <a href="#about" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50">About</a>
            <a href="#enquiry" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-xl text-gray-600 font-medium hover:bg-gray-50">Contact</a>
          </div>
          <a href="#enquiry" onClick={() => setMobileOpen(false)} className="mt-4 w-full bg-pg-forest text-white py-3 rounded-full font-bold text-center block">
            Get a Quote
          </a>
        </div>
      )}
    </nav>
  );
};

