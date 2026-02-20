import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pack-green text-white rounded-t-[3rem] px-6 md:px-10 lg:px-12 py-24 pb-12 mt-32 max-w-[1600px] mx-auto overflow-hidden relative">

      {/* Background Graphic Element */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[80%] aspect-square bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-32 relative z-10">

        {/* Brand Column */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <div>
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-balance">
              Ready to find the right packaging for your business?
            </h3>
            <p className="text-white/70 text-lg max-w-sm leading-relaxed mb-8">
              Join 500+ food businesses across Australia who trust us for quality, range, and reliability.
            </p>

            <a href="/#enquiry" className="px-8 py-5 rounded-full bg-pack-yellow text-pack-text font-bold tracking-tight hover:bg-white transition-colors flex items-center gap-3 group w-max">
              Get a Free Quote
              <ArrowRight weight="bold" className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Links Navigation */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Products</span>
          <Link to="/products" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">Coffee Cups</Link>
          <Link to="/products" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">Takeaway Containers</Link>
          <Link to="/products" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">Pizza Boxes</Link>
          <a href="/#custom-printing" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">Custom Printing</a>
          <Link to="/products" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">All Products</Link>
        </div>

        {/* Company */}
        <div className="lg:col-span-3 flex flex-col gap-4">
          <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2">Company</span>
          <a href="/#enquiry" className="font-semibold text-lg hover:text-pack-yellow transition-colors inline-block w-max">Contact</a>
        </div>

      </div>

      {/* Brand Footer Logomark */}
      <div className="w-full pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        <h1 className="text-[10vw] md:text-[11vw] font-display leading-[0.7] tracking-tighter text-pack-yellow opacity-90 select-none">
          PACKGREEN
        </h1>

        <span className="text-sm font-semibold text-white/50">&copy; 2026 PackGreen Packaging</span>
      </div>

    </footer>
  );
};
