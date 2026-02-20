import React from 'react';
import { Coffee, Package, ShoppingBag, UtensilsCrossed, Salad, GlassWater, Scroll, MoreHorizontal } from 'lucide-react';

const categories = [
  { label: 'Coffee Cups', icon: Coffee },
  { label: 'Containers', icon: Package },
  { label: 'Bags & Carry', icon: ShoppingBag },
  { label: 'Clamshells', icon: Package },
  { label: 'Bowls & Plates', icon: Salad },
  { label: 'Cold Cups', icon: GlassWater },
  { label: 'Cutlery', icon: UtensilsCrossed },
  { label: 'Wraps & Paper', icon: Scroll },
  { label: 'More Items', icon: MoreHorizontal },
];

export const BrowseByCategory: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
      <div className="text-center mb-12">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-pg-dark tracking-tight">
          Browse by Category
        </h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Explore our extensive range of food packaging solutions for every need.
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-3 md:gap-4">
        {categories.map(({ label, icon: Icon }, i) => (
          <a
            key={label}
            href="#products"
            className="group flex flex-col items-center gap-3 p-4 md:p-5 bg-white rounded-2xl md:rounded-3xl border border-gray-100 hover:border-pg-emerald/30 hover:bg-pg-emerald/5 hover:shadow-lg hover:shadow-pg-emerald/5 transition-all duration-300 cursor-pointer animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="w-11 h-11 md:w-12 md:h-12 rounded-2xl bg-pg-forest/5 flex items-center justify-center text-pg-forest group-hover:bg-pg-emerald group-hover:text-white group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
              <Icon className="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <span className="text-[10px] md:text-xs font-bold text-center text-gray-600 group-hover:text-pg-forest uppercase tracking-wider leading-tight transition-colors">
              {label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};
