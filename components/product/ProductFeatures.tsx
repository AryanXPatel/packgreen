import React from 'react';
import { Truck, Package, PaintBrush } from '@phosphor-icons/react';

const features = [
    {
        icon: Package,
        title: 'Multiple Sizes Available',
        desc: 'Choose from a range of sizes to suit your menu. From 8oz to 32oz options.',
        highlighted: false,
    },
    {
        icon: PaintBrush,
        title: 'Custom Printing Available',
        desc: 'Add your logo and branding. Offset, digital, and flexographic printing options.',
        highlighted: true,
    },
    {
        icon: Truck,
        title: 'Fast Australia-Wide Delivery',
        desc: 'Reliable delivery to all Australian states and territories. Bulk and single case orders.',
        highlighted: false,
    },
];

export const ProductFeatures: React.FC = () => {
    return (
        <div className="mb-24">
            <h2 className="text-3xl font-semibold tracking-tighter text-pack-text mb-8">Product features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((f, idx) => (
                    <div key={idx} className={`rounded-3xl p-8 lg:p-10 flex flex-col items-start hover:-translate-y-1 transition-transform cursor-pointer ${f.highlighted ? 'bg-pack-green shadow-lg text-white' : 'bg-white shadow-sm border border-pack-border/10'}`}>
                        <f.icon size={32} className={f.highlighted ? 'text-white mb-6' : 'text-pack-text mb-6'} />
                        <h3 className={`text-xl font-semibold mb-3 tracking-tight ${f.highlighted ? 'text-white' : 'text-pack-text'}`}>{f.title}</h3>
                        <p className={`text-[15px] font-medium leading-relaxed ${f.highlighted ? 'text-white/80' : 'text-pack-gray'}`}>{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
