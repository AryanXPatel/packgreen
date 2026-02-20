import React from 'react';
import { ArrowRight, Leaf, Recycle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Card 1 — Quality first */}
        <div className="group bg-pg-cream rounded-[1.75rem] p-8 md:p-10 relative overflow-hidden hover:shadow-lg transition-all cursor-pointer min-h-[280px] flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-pg-dark tracking-wide border border-gray-200/50">001</span>
            </div>
            <div className="w-10 h-10 bg-pg-emerald rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="relative z-10 max-w-[70%]">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-pg-dark leading-tight">
              Quality packaging your customers can feel
            </h3>
          </div>
          {/* Decorative image */}
          <div className="absolute -bottom-4 -right-4 w-44 h-44 md:w-56 md:h-56 opacity-20 group-hover:opacity-30 transition-opacity">
            <Leaf className="w-full h-full text-pg-forest" />
          </div>
        </div>
        
        {/* Card 2 — Sustainability */}
        <div className="group bg-pg-forest rounded-[1.75rem] p-8 md:p-10 relative overflow-hidden hover:shadow-lg transition-all cursor-pointer min-h-[280px] flex flex-col justify-between text-white">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
              <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-bold text-white tracking-wide border border-white/10">002</span>
            </div>
            <div className="w-10 h-10 bg-pg-lime rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ArrowRight className="w-5 h-5 text-pg-forest" />
            </div>
          </div>
          <div className="relative z-10 max-w-[70%]">
            <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight">
              Practical options without compromising on performance
            </h3>
          </div>
          {/* Decorative */}
          <div className="absolute -bottom-4 -right-4 w-44 h-44 md:w-56 md:h-56 opacity-10 group-hover:opacity-20 transition-opacity">
            <Recycle className="w-full h-full text-pg-lime" />
          </div>
        </div>
      </div>
    </section>
  );
};

