import React from 'react';
import { ArrowRight, Star, CheckCircle2, Sparkles, ShieldCheck, Truck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pg-emerald/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pg-lime/5 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-4 lg:pt-16 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 self-start bg-pg-forest/5 border border-pg-forest/10 px-4 py-2 rounded-full animate-fade-up">
              <Star className="w-4 h-4 text-pg-emerald fill-pg-emerald" />
              <span className="text-xs font-bold tracking-wider uppercase text-pg-forest">Australia's Trusted Packaging Supplier</span>
            </div>
            
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-7xl font-extrabold text-pg-dark leading-[1.08] tracking-tight animate-fade-up delay-100">
              Packaging that<br />
              makes your brand{' '}
              <span className="relative inline-block">
                <span className="relative z-10">shine</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 sm:h-4 bg-pg-emerald/20 -rotate-1 rounded-sm"></span>
              </span>
              <br className="hidden sm:block" />
              <span className="hidden sm:inline"> with </span>
              <span className="sm:hidden"> + </span>
              <span className="inline-flex items-center align-baseline border-2 border-pg-forest/15 rounded-full px-4 sm:px-5 py-0.5 sm:py-1 text-pg-forest bg-white/60 backdrop-blur-sm hover:border-pg-emerald hover:bg-pg-emerald/5 transition-all cursor-default">
                every order
              </span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed animate-fade-up delay-200">
              From <strong className="text-pg-dark">coffee cups</strong> to <strong className="text-pg-dark">custom printed boxes</strong>, we supply everything your food service business needs — with next-day delivery across Australia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-up delay-300">
              <a href="#enquiry" className="group flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-pg-forest text-white hover:bg-pg-deep transition-all shadow-xl shadow-pg-forest/20 hover:shadow-2xl hover:shadow-pg-forest/30">
                <span className="font-display font-bold text-base">Get a Quote</span>
                <div className="w-10 h-10 bg-pg-emerald rounded-full flex items-center justify-center group-hover:scale-110 group-hover:bg-pg-lime transition-all">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-pg-forest" />
                </div>
              </a>
              <a href="#products" className="group flex items-center gap-2 px-6 py-3 font-display font-bold text-pg-forest hover:text-pg-emerald transition-colors text-base">
                Browse Products
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 animate-fade-up delay-400">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 className="w-4 h-4 text-pg-emerald" />
                <span className="font-medium">500+ Products</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ShieldCheck className="w-4 h-4 text-pg-emerald" />
                <span className="font-medium">Food Grade Certified</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Truck className="w-4 h-4 text-pg-emerald" />
                <span className="font-medium">Next Day Delivery</span>
              </div>
            </div>
          </div>

          {/* Right — Hero Visual */}
          <div className="lg:col-span-5 relative animate-fade-up delay-200">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-pg-forest/5 to-pg-emerald/10 border border-pg-forest/5">
                <img 
                  src="https://images.unsplash.com/photo-1606791405792-1004f1718d0c?q=80&w=800&auto=format&fit=crop"
                  alt="Food packaging collection showing kraft containers and cups"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-pg-forest/30 via-transparent to-transparent"></div>
                
                {/* Floating badge top-right */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-white/50 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-pg-emerald/10 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-pg-emerald" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pg-dark leading-none">Custom Print</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">Your logo, your brand</div>
                    </div>
                  </div>
                </div>

                {/* Floating badge bottom-left */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-lg border border-white/50" style={{ animationDelay: '2s', animation: 'float 4s ease-in-out infinite' }}>
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-7 h-7 rounded-full bg-pg-emerald/20 flex items-center justify-center text-xs font-bold text-pg-forest border-2 border-white">5K</div>
                    </div>
                    <div>
                      <div className="text-xs font-bold text-pg-dark leading-none">Businesses Served</div>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Side accent card */}
              <div className="absolute -right-4 top-1/3 bg-pg-forest text-white px-5 py-4 rounded-2xl shadow-2xl hidden xl:block animate-slide-in-right delay-500">
                <div className="text-3xl font-display font-extrabold text-pg-lime">100%</div>
                <div className="text-xs text-white/70 font-medium mt-1">Food Safe<br/>Materials</div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Strip */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-200/60">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 whitespace-nowrap">Trusted by leading brands</span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40 grayscale">
              {['McDonald\'s', 'Guzman y Gomez', 'Soul Origin', 'Grill\'d', 'Boost Juice'].map((brand, i) => (
                <span key={i} className="font-display font-extrabold text-lg text-gray-800 whitespace-nowrap">{brand}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

