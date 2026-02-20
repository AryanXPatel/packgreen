import React from 'react';
import { Package, Truck, PaintBrush, ChartLineUp } from '@phosphor-icons/react';

const valueProps = [
    {
        icon: Package,
        title: '26+ Product Categories',
        desc: 'One supplier for cups, containers, bags, boxes, cutlery, and everything in between.',
    },
    {
        icon: Truck,
        title: 'Australia-Wide Delivery',
        desc: 'Fast, reliable delivery to Sydney, Melbourne, Brisbane, Perth, and everywhere in between.',
    },
    {
        icon: PaintBrush,
        title: 'Custom Printing',
        desc: 'Put your brand on any product. Offset, digital, and flexographic printing from low minimums.',
    },
    {
        icon: ChartLineUp,
        title: 'From 1 Case to Full Loads',
        desc: 'Whether you run one cafe or 200 franchises, we scale with you.',
    },
];

export const EditorialStats: React.FC = () => {
    return (
        <section id="why-packgreen" className="py-24 px-6 md:px-10 lg:px-12 max-w-[1600px] mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-pack-text leading-[1.05] mb-4">
                    Why food businesses choose PackGreen
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {valueProps.map((prop, idx) => (
                    <div key={idx} className="bg-white rounded-[2rem] p-8 border border-pack-border/50 hover-card text-center">
                        <div className="w-16 h-16 rounded-2xl bg-pack-green/10 flex items-center justify-center mx-auto mb-6">
                            <prop.icon size={32} weight="duotone" className="text-pack-green" />
                        </div>
                        <h3 className="text-lg font-bold tracking-tight text-pack-text mb-3">{prop.title}</h3>
                        <p className="text-pack-gray text-sm leading-relaxed">{prop.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
