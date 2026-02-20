import React from 'react';
import { Phone, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-pg-forest text-white py-2.5 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pg-deep via-pg-forest to-pg-deep opacity-50"></div>
      <div className="max-w-7xl mx-auto flex items-center justify-between relative z-10">
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-white/70">
          <Phone className="w-3.5 h-3.5" />
          <span>1300 PACK GRN</span>
        </div>
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide mx-auto md:mx-0">
          <Truck className="w-4 h-4 text-pg-emerald animate-pulse-soft" />
          <span>Free delivery on orders over $500</span>
          <span className="mx-2 text-white/30">|</span>
          <span className="text-pg-lime font-bold">Australia-wide shipping</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs font-medium text-white/70">
          <a href="#enquiry" className="hover:text-white transition-colors">Get a Quote</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white transition-colors">Track Order</a>
        </div>
      </div>
    </div>
  );
};
