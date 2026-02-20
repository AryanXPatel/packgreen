import React from 'react';
import { Star, MapPin, Award, Clock } from 'lucide-react';

export const StatsGrid: React.FC = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
        
        {/* Large stat - Left */}
        <div className="md:col-span-5 bg-pg-forest rounded-[1.75rem] p-8 md:p-10 text-white relative overflow-hidden group hover:shadow-2xl hover:shadow-pg-forest/20 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-pg-emerald/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 h-full flex flex-col justify-between min-h-[200px]">
            <div className="flex items-center gap-2 text-pg-emerald">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide">Australian Owned</span>
            </div>
            <div>
              <div className="font-display text-6xl md:text-7xl font-extrabold text-white mb-2">
                5,000<span className="text-pg-emerald">+</span>
              </div>
              <p className="text-white/60 text-lg">Businesses served across Australia</p>
            </div>
          </div>
        </div>

        {/* Right column - 2 stacked */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          
          {/* Stat card */}
          <div className="bg-white rounded-[1.75rem] p-8 border border-gray-100 group hover:border-pg-emerald/20 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
              <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
            </div>
            <div className="font-display text-4xl md:text-5xl font-extrabold text-pg-dark mb-1">
              4.8<span className="text-amber-400">★</span>
            </div>
            <p className="text-gray-500 text-sm">Customer satisfaction rating</p>
          </div>
          
          {/* Stat card */}
          <div className="bg-white rounded-[1.75rem] p-8 border border-gray-100 group hover:border-pg-emerald/20 hover:shadow-lg transition-all">
            <div className="w-10 h-10 rounded-xl bg-pg-emerald/10 flex items-center justify-center mb-4">
              <Award className="w-5 h-5 text-pg-emerald" />
            </div>
            <div className="font-display text-4xl md:text-5xl font-extrabold text-pg-dark mb-1">
              500<span className="text-pg-emerald">+</span>
            </div>
            <p className="text-gray-500 text-sm">Products in our range</p>
          </div>
          
          {/* Wide bottom card */}
          <div className="sm:col-span-2 bg-gradient-to-r from-pg-cream to-white rounded-[1.75rem] p-8 border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center gap-6 group hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-pg-forest flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-pg-lime" />
            </div>
            <div className="flex-1">
              <div className="font-display text-2xl font-extrabold text-pg-dark mb-1">Next Day Delivery</div>
              <p className="text-gray-500 text-sm">Standard items dispatched same day for orders before 2pm AEST. Express options available Australia-wide.</p>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs font-bold text-pg-forest bg-pg-forest/5 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-pg-emerald animate-pulse"></span>
                Same Day Dispatch
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
