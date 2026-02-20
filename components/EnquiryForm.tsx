import React, { useState } from 'react';
import { Send, CheckCircle2, ArrowRight } from 'lucide-react';

const productCategories = [
  "Coffee Cups & Lids",
  "Cold Cups & Lids",
  "Cardboard Boxes & Containers",
  "Sugarcane Clamshells",
  "Kraft Containers & Bowls",
  "Takeaway Bags",
  "Napkins & Cutlery",
  "Gloves",
  "Food Wraps & Greaseproof",
  "Plates & Bowls",
  "Pizza Boxes",
  "Hygiene & Washroom",
  "Custom Printing",
  "Other / Multiple Products"
];

const states = ["NSW", "VIC", "QLD", "WA", "SA", "TAS", "ACT", "NT"];

export const EnquiryForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="enquiry" className="max-w-7xl mx-auto px-4 md:px-8 py-16 lg:py-24">
      <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 shadow-xl shadow-gray-100/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left intro panel */}
          <div className="lg:col-span-2 bg-pack-green p-8 md:p-12 text-white relative overflow-hidden noise-bg">
            <div className="absolute inset-0 bg-gradient-to-br from-pack-green/10 to-transparent pointer-events-none"></div>
            <div className="relative z-10">
              <span className="inline-block text-pack-yellow font-bold tracking-[0.15em] uppercase text-xs mb-4">Product Enquiry</span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
                Let's find the right packaging for your business.
              </h2>
              <p className="text-white/60 leading-relaxed mb-8">
                Tell us about your business and what you need. Our packaging experts will get back to you within 24 hours with a tailored recommendation.
              </p>
              
              <div className="space-y-4">
                {[
                  "No obligation quote",
                  "Expert product recommendations",
                  "Custom printing consultation",
                  "Tailored product recommendations"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-pack-yellow flex-shrink-0" />
                    <span className="text-sm text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xs text-white/40 mb-2">Or reach us directly</p>
                <a href="tel:1300722547" className="text-lg font-display font-bold text-white hover:text-pack-yellow transition-colors">1300 PACK GRN</a>
                <br />
                <a href="mailto:hello@packgreen.com.au" className="text-sm text-white/60 hover:text-white transition-colors">hello@packgreen.com.au</a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="lg:col-span-3 p-8 md:p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 bg-pack-green/10 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-pack-green" />
                </div>
                <h3 className="font-display text-2xl font-bold text-pack-text mb-2">Enquiry Submitted!</h3>
                <p className="text-gray-500 max-w-sm">Our team will review your request and get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Smith"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Business Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Your Business Pty Ltd"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@business.com.au"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Phone *</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="04XX XXX XXX"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">State *</label>
                    <select 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all text-gray-600 appearance-none cursor-pointer"
                    >
                      <option value="">Select State</option>
                      {states.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Product Interest *</label>
                    <select 
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all text-gray-600 appearance-none cursor-pointer"
                    >
                      <option value="">Select Category</option>
                      {productCategories.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">Message</label>
                  <textarea 
                    rows={3}
                    placeholder="Tell us about your requirements, quantities, or any specific products you're looking for..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-pack-green/30 focus:border-pack-green outline-none transition-all resize-none placeholder:text-gray-400"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-gray-400">We respect your privacy.</p>
                  <button 
                    type="submit"
                    className="group flex items-center gap-3 pl-6 pr-2 py-2 bg-pack-green text-white rounded-full font-display font-bold text-sm hover:bg-pack-green-hover transition-all shadow-lg hover:shadow-xl"
                  >
                    Submit Enquiry
                    <div className="w-9 h-9 bg-pack-green-hover group-hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
