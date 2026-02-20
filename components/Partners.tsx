import React from 'react';

const partners = [
  { name: 'Amcor', style: 'font-serif italic' },
  { name: 'Detpak', style: 'font-sans tracking-wide' },
  { name: 'BioPak', style: 'font-mono font-extrabold' },
  { name: 'Anchor', style: 'font-sans tracking-tight' },
  { name: 'Castaway', style: 'font-serif tracking-wide' },
];

export const Partners: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 lg:py-16">
      <div className="text-center mb-10">
        <span className="inline-block text-pg-emerald font-bold tracking-[0.15em] uppercase text-xs mb-2">We are proud of</span>
        <h3 className="font-display text-2xl md:text-3xl font-bold text-pg-dark max-w-xl mx-auto leading-tight">
          Our partnerships with leading brands in the food packaging industry
        </h3>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 lg:gap-14">
        {partners.map(({ name, style }) => (
          <div 
            key={name} 
            className="h-20 w-36 md:w-44 bg-white rounded-2xl border border-gray-100 flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 hover:border-pg-emerald/20 hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <span className={`font-bold text-xl text-gray-800 ${style}`}>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

