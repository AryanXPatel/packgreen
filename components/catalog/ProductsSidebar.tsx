import React from 'react';

interface ProductsSidebarProps {
    categories: string[];
    materials: string[];
    activeCategory: string;
    activeMaterial: string;
    activePrinting: string;
    onCategoryChange: (category: string) => void;
    onMaterialChange: (material: string) => void;
    onPrintingChange: (printing: string) => void;
}

const RadioItem = ({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) => (
    <button
        onClick={onChange}
        className="flex items-center gap-3 cursor-pointer group mb-3 text-left"
    >
        <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${checked ? 'border-pack-green' : 'border-gray-300 group-hover:border-pack-green/50'}`}>
            {checked && <div className="w-2 h-2 rounded-full bg-pack-green"></div>}
        </div>
        <span className={`text-[13px] font-medium transition-colors ${checked ? 'text-pack-text' : 'text-pack-gray group-hover:text-pack-green'}`}>{label}</span>
    </button>
);

export const ProductsSidebar: React.FC<ProductsSidebarProps> = ({
    categories,
    materials,
    activeCategory,
    activeMaterial,
    activePrinting,
    onCategoryChange,
    onMaterialChange,
    onPrintingChange,
}) => {
    return (
        <div className="flex flex-col gap-10 lg:sticky lg:top-24 lg:pr-4 lg:pb-20 lg:overflow-y-auto lg:max-h-[85vh]">
            {/* Category */}
            <div>
                <h4 className="font-semibold text-sm mb-4 tracking-tight">Category</h4>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => onCategoryChange('All')}
                        className={`text-left text-[13px] font-medium transition-colors ${activeCategory === 'All' ? 'text-pack-text font-bold' : 'text-pack-gray hover:text-pack-green'}`}
                    >
                        All Products
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => onCategoryChange(cat)}
                            className={`text-left text-[13px] font-medium transition-colors ${activeCategory === cat ? 'text-pack-text font-bold' : 'text-pack-gray hover:text-pack-green'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Material Type */}
            <div>
                <h4 className="font-semibold text-sm mb-4 tracking-tight">Material</h4>
                <div className="flex flex-col">
                    <RadioItem
                        label="All Materials"
                        checked={activeMaterial === 'All'}
                        onChange={() => onMaterialChange('All')}
                    />
                    {materials.map(mat => (
                        <RadioItem
                            key={mat}
                            label={mat}
                            checked={activeMaterial === mat}
                            onChange={() => onMaterialChange(mat)}
                        />
                    ))}
                </div>
            </div>

            {/* Custom Printing */}
            <div>
                <h4 className="font-semibold text-sm mb-4 tracking-tight">Custom Printing</h4>
                <div className="flex flex-col">
                    <RadioItem
                        label="All Products"
                        checked={activePrinting === 'All'}
                        onChange={() => onPrintingChange('All')}
                    />
                    <RadioItem
                        label="Printable"
                        checked={activePrinting === 'Printable'}
                        onChange={() => onPrintingChange('Printable')}
                    />
                    <RadioItem
                        label="Stock Only"
                        checked={activePrinting === 'Stock Only'}
                        onChange={() => onPrintingChange('Stock Only')}
                    />
                </div>
            </div>
        </div>
    );
};
