import React from 'react';
import { Printer, Palette, TrendingUp, CheckCircle2, ArrowRight, Layers, Zap } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="branding" className="mx-2 md:mx-4 my-12">
      <div className="bg-pg-deep rounded-[2rem] md:rounded-[2.5rem] text-white relative overflow-hidden noise-bg">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pg-emerald/8 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-pg-lime/5 rounded-full blur-[80px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <span className="inline-block text-pg-emerald font-bold tracking-[0.15em] uppercase text-xs mb-4">For Brands</span>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold mb-6 leading-[1.1] tracking-tight">
                Stand out with{' '}
                <span className="text-gradient">Custom Printing</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                Don't just serve food, serve an experience. We help businesses of all sizes create custom printed packaging customers love to share.
              </p>
              
              <div className="space-y-3.5 mb-10">
                {[
                  "Low Minimum Order Quantities (MOQ)",
                  "Free Design Support & Mockups",
                  "Fast Turnaround Times",
                  "Food-safe Ink & Materials"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-pg-emerald/15 flex items-center justify-center flex-shrink-0 group-hover:bg-pg-emerald/25 transition-colors">
                      <CheckCircle2 className="w-3.5 h-3.5 text-pg-emerald" />
                    </div>
                    <span className="text-gray-300 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <a href="#enquiry" className="group flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-white text-pg-dark hover:bg-pg-emerald hover:text-white transition-all self-start shadow-lg hover:shadow-xl">
                <span className="font-display font-bold">Get a Quote</span>
                <div className="w-10 h-10 bg-pg-forest rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-white" />
                </div>
              </a>
            </div>

            {/* Right — Service Cards (2x2 staggered) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="bg-white/[0.06] p-6 md:p-7 rounded-2xl backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-pg-lime/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Printer className="w-5 h-5 text-pg-lime" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Custom Printing</h3>
                <p className="text-gray-400 text-sm leading-relaxed">High-quality printing on cups, bags, bowls and more. Your logo, front and center.</p>
              </div>
              
              <div className="bg-white/[0.06] p-6 md:p-7 rounded-2xl backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300 sm:mt-8 group">
                <div className="w-11 h-11 rounded-xl bg-orange-400/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5 text-orange-400" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Bespoke Design</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Need unique structural design? We engineer packaging that fits your product perfectly.</p>
              </div>
              
              <div className="bg-white/[0.06] p-6 md:p-7 rounded-2xl backdrop-blur-sm border border-white/[0.08] hover:bg-white/[0.1] transition-all duration-300 group">
                <div className="w-11 h-11 rounded-xl bg-sky-400/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-5 h-5 text-sky-400" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Wholesale Supply</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Competitive tiered pricing for bulk orders. Reliable stock management for franchises.</p>
              </div>
              
              <div className="bg-gradient-to-br from-pg-emerald to-emerald-600 p-6 md:p-7 rounded-2xl sm:mt-8 flex flex-col justify-between group hover:shadow-xl hover:shadow-pg-emerald/20 transition-all">
                <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-1">Start your project</h3>
                  <p className="text-white/70 text-sm mb-4">Let's create something your customers will remember.</p>
                  <a href="#enquiry" className="inline-flex w-full items-center justify-center gap-2 bg-white/20 hover:bg-white/30 py-2.5 rounded-xl transition-colors font-bold text-sm">
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

