import React from 'react';
import { Package, Coffee, ShoppingBag, UtensilsCrossed, Sparkles, Box, ChevronRight, Salad } from 'lucide-react';
import { CategoryProps } from '../types';

const CategoryCard: React.FC<CategoryProps> = ({ title, items, icon: Icon, color, itemCount }) => {
  return (
    <div className="group bg-white rounded-[1.75rem] p-7 md:p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 border border-gray-100/80 hover:border-pg-emerald/20 flex flex-col h-full cursor-pointer relative overflow-hidden">
      {/* Hover background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-pg-emerald/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:rounded-2xl ${color}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="font-display text-xl font-bold text-pg-dark mb-4 group-hover:text-pg-forest transition-colors">{title}</h3>
        
        <ul className="space-y-2.5 mb-6 flex-1">
          {items.slice(0, 5).map((item, idx) => (
            <li key={idx} className="flex items-center gap-2.5 text-gray-500 text-sm">
              <div className="w-1 h-1 rounded-full bg-gray-300 group-hover:bg-pg-emerald transition-colors flex-shrink-0"></div>
              {item}
            </li>
          ))}
          {itemCount > 5 && (
              <li className="text-pg-emerald font-bold text-sm pt-1">+ {itemCount - 5} more items</li>
          )}
        </ul>

        <div className="flex items-center gap-2 text-pg-forest font-bold text-sm group-hover:text-pg-emerald group-hover:gap-3 transition-all pt-2 border-t border-gray-50">
          Browse Category <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};

export const ProductCategories: React.FC = () => {
  const categories: CategoryProps[] = [
    {
      title: "Food Containers",
      icon: Package,
      color: "bg-orange-500",
      itemCount: 12,
      items: ["Cardboard Clamshells & Trays", "Lunch Boxes & Noodle Boxes", "Chip Boxes & Cartons", "Snack Boxes", "Sugarcane Clamshells", "Pizza Boxes", "Foil Containers", "Cake & Seafood Trays", "Kraft Corrugated Clamshells", "White Corrugated Clamshells", "Kraft Containers & Bowls", "PP Plastic Containers & Lids"]
    },
    {
      title: "Cups & Drinkware",
      icon: Coffee,
      color: "bg-sky-500",
      itemCount: 14,
      items: ["Aqueous Double Wall Cups", "Aqueous Single Wall Cups", "PE Single Wall Cups", "Cup Holders & Sleeves", "Coffee Cup Lids", "PET Cold Cups", "PP Cold Cups", "Paper Cold Cups", "Ice Cream Cups & Lids", "Portion Cups", "Show Bowl Clear"]
    },
    {
      title: "Bags & Carry",
      icon: ShoppingBag,
      color: "bg-amber-600",
      itemCount: 9,
      items: ["SOS Paper Bags", "Flat & Satchel Bags", "Foil Lined Bags", "GPL Bags", "Takeaway Paper Bags with Handle", "Carry Boxes", "Plastic Bags"]
    },
    {
      title: "Tableware & Wraps",
      icon: UtensilsCrossed,
      color: "bg-pg-forest",
      itemCount: 11,
      items: ["Greaseproof Paper Wrap", "Gingham Printed Greaseproof", "Newsprint Greaseproof", "Food Wraps", "1ply Luncheon Napkins", "2ply Cocktail Napkins", "Quilted GT Fold Dinner Napkins", "Straws & Cutlery & Skewers"]
    },
    {
      title: "Hygiene & Supplies",
      icon: Sparkles,
      color: "bg-violet-500",
      itemCount: 10,
      items: ["Latex Gloves", "Nitrile Gloves", "Vinyl Gloves", "Garbage Bags", "Wipes", "Washroom Products", "Chemicals", "Thermal Rolls"]
    },
    {
      title: "Kraft & Bowls",
      icon: Salad,
      color: "bg-stone-600",
      itemCount: 8,
      items: ["Kraft Round Salad Bowls", "Kraft Container & Bowls", "Plates & Bowls", "Kraft Corrugated Trays", "Show Bowl Clear", "Paper Cold Cups"]
    }
  ];

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
        <div>
          <span className="inline-block text-pg-emerald font-bold tracking-[0.15em] uppercase text-xs mb-2">Our Range</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-pg-dark tracking-tight">
            Everything your<br className="hidden md:block" /> business needs.
          </h2>
        </div>
        <a href="#enquiry" className="bg-pg-cream text-pg-forest px-6 py-3 rounded-full font-bold text-sm hover:bg-pg-forest hover:text-white transition-all border border-pg-forest/10 hover:border-transparent flex items-center gap-2 shadow-sm">
          <span className="material-symbols-outlined text-lg">download</span>
          Download Full Catalog
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, idx) => (
          <CategoryCard key={idx} {...cat} />
        ))}
      </div>
    </section>
  );
};

