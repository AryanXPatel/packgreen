// Centralized product data for PackGreen
// Images sourced from packgreenpackaging.com.au (real product photos)

const PG = 'https://packgreenpackaging.com.au/wp-content/uploads';

export interface Product {
    id: number;
    title: string;
    slug: string;
    desc: string;
    img: string;
    tags: string[];
    specs: { label: string; value: string }[];
    material: string;
    category: string;
}

export const products: Product[] = [
    {
        id: 1,
        title: 'Coffee Cups & Lids',
        slug: 'coffee-cups-lids',
        desc: 'Single wall, double wall, and ripple cups',
        img: `${PG}/2024/07/2-1.png`,
        tags: ['Hot Drinks', 'Custom Print Available'],
        specs: [
            { label: 'Product Code', value: 'SW-8-WH' },
            { label: 'Sizes Available', value: '8oz, 10oz, 12oz, 16oz' },
            { label: 'Colour', value: 'White / Kraft Brown' },
            { label: 'Material', value: 'Single Wall Paper with PE Lining' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '1000' },
        ],
        material: 'Paper',
        category: 'Cups',
    },
    {
        id: 2,
        title: 'Kraft Containers & Bowls',
        slug: 'kraft-containers-bowls',
        desc: 'Salad bowls, soup containers, noodle boxes',
        img: `${PG}/2024/07/KSB16E.jpg`,
        tags: ['Hot Food', 'Cold Food', 'Microwave Safe'],
        specs: [
            { label: 'Product Code', value: 'KSB-16-KR' },
            { label: 'Sizes Available', value: '8oz, 12oz, 16oz, 25oz, 32oz, 42oz' },
            { label: 'Colour', value: 'Kraft Brown' },
            { label: 'Material', value: 'Kraft Paper with PE Lining' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '300' },
        ],
        material: 'Kraft Paper',
        category: 'Containers',
    },
    {
        id: 3,
        title: 'Sugarcane Clamshells',
        slug: 'sugarcane-clamshells',
        desc: 'Burger boxes, meal containers, 3-compartment',
        img: `${PG}/2024/08/40090066_2-ecoware-hamburger-box.webp`,
        tags: ['Hot Food', 'Microwave Safe', 'Freezer Safe'],
        specs: [
            { label: 'Product Code', value: 'SC-9-CL' },
            { label: 'Sizes Available', value: '6", 8", 9" Clamshell' },
            { label: 'Colour', value: 'Natural White' },
            { label: 'Material', value: 'Sugarcane Bagasse' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '200' },
        ],
        material: 'Sugarcane',
        category: 'Containers',
    },
    {
        id: 4,
        title: 'Pizza Boxes',
        slug: 'pizza-boxes',
        desc: '8 inch to 15 inch, printed and plain',
        img: `${PG}/2024/07/pizza.png`,
        tags: ['Hot Food', 'Custom Print Available'],
        specs: [
            { label: 'Product Code', value: 'PZ-13-BR' },
            { label: 'Sizes Available', value: '8", 9", 11", 13", 15"' },
            { label: 'Colour', value: 'Brown Kraft' },
            { label: 'Material', value: 'Corrugated Cardboard' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '50' },
        ],
        material: 'Cardboard',
        category: 'Boxes',
    },
    {
        id: 5,
        title: 'Takeaway Bags',
        slug: 'takeaway-bags',
        desc: 'Kraft paper bags, plastic carry bags',
        img: `${PG}/2024/07/BE-SOS12-scaled-533x800-1.jpg`,
        tags: ['Takeaway', 'Custom Print Available'],
        specs: [
            { label: 'Product Code', value: 'SOS-12-KR' },
            { label: 'Sizes Available', value: 'SOS 8, 12, 16, 20' },
            { label: 'Colour', value: 'Brown Kraft' },
            { label: 'Material', value: 'Kraft Paper' },
            { label: 'Qty / Pack', value: '250' },
            { label: 'Qty / Carton', value: '500' },
        ],
        material: 'Kraft Paper',
        category: 'Bags',
    },
    {
        id: 6,
        title: 'Cold Cups & Lids',
        slug: 'cold-cups-lids',
        desc: 'PET cups, PP cups, dome and flat lids',
        img: `${PG}/2024/08/PET425.jpg`,
        tags: ['Cold Drinks', 'Smoothies', 'Juices'],
        specs: [
            { label: 'Product Code', value: 'PET-425' },
            { label: 'Sizes Available', value: '10oz, 12oz, 16oz, 20oz, 24oz' },
            { label: 'Colour', value: 'Clear' },
            { label: 'Material', value: 'PET Plastic' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '1000' },
        ],
        material: 'Plastic',
        category: 'Cups',
    },
    {
        id: 7,
        title: 'Napkins & Cutlery',
        slug: 'napkins-cutlery',
        desc: 'Lunch napkins, dinner napkins, wooden cutlery',
        img: `${PG}/2024/07/CUL-2LKGT.jpg`,
        tags: ['Takeaway', 'Dine-In'],
        specs: [
            { label: 'Product Code', value: 'NAP-2L-KR' },
            { label: 'Types', value: 'Lunch, Dinner, Cocktail' },
            { label: 'Colour', value: 'White / Kraft Brown' },
            { label: 'Material', value: '2-Ply Recycled Paper' },
            { label: 'Qty / Pack', value: '200' },
            { label: 'Qty / Carton', value: '2000' },
        ],
        material: 'Paper',
        category: 'Accessories',
    },
    {
        id: 8,
        title: 'Plates & Bowls',
        slug: 'plates-bowls',
        desc: 'Paper plates, sugarcane bowls, party plates',
        img: `${PG}/2024/08/YP10__30074.jpg`,
        tags: ['Hot Food', 'Cold Food', 'Events'],
        specs: [
            { label: 'Product Code', value: 'SC-10-RP' },
            { label: 'Sizes Available', value: '7", 9", 10" Round' },
            { label: 'Colour', value: 'Natural White' },
            { label: 'Material', value: 'Sugarcane Bagasse' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '500' },
        ],
        material: 'Sugarcane',
        category: 'Plates',
    },
    {
        id: 9,
        title: 'Food Wraps',
        slug: 'food-wraps',
        desc: 'Greaseproof paper, aluminium foil, baking paper',
        img: `${PG}/2024/07/GP2W-1.jpg`,
        tags: ['Wrapping', 'Baking', 'Food Prep'],
        specs: [
            { label: 'Product Code', value: 'GP-2W' },
            { label: 'Sizes Available', value: 'Half cut, Third cut, Full' },
            { label: 'Colour', value: 'White' },
            { label: 'Material', value: 'Greaseproof Paper' },
            { label: 'Qty / Pack', value: '800' },
            { label: 'Qty / Carton', value: '800' },
        ],
        material: 'Paper',
        category: 'Wraps',
    },
    {
        id: 10,
        title: 'Gloves',
        slug: 'gloves',
        desc: 'Vinyl, nitrile, and latex disposable gloves',
        img: `${PG}/2024/08/51KpW2pYeuS._AC_UF8941000_QL80_.jpg`,
        tags: ['Food Prep', 'Hygiene'],
        specs: [
            { label: 'Product Code', value: 'NIT-BLK-M' },
            { label: 'Sizes Available', value: 'S, M, L, XL' },
            { label: 'Colour', value: 'Black / Blue' },
            { label: 'Material', value: 'Nitrile (Powder Free)' },
            { label: 'Qty / Box', value: '100' },
            { label: 'Qty / Carton', value: '1000' },
        ],
        material: 'Nitrile',
        category: 'Hygiene',
    },
    {
        id: 11,
        title: 'Foil Containers',
        slug: 'foil-containers',
        desc: 'Trays, containers, and lids for hot food',
        img: `${PG}/2024/08/18-MRE511.jpg`,
        tags: ['Hot Food', 'Oven Safe', 'Freezer Safe'],
        specs: [
            { label: 'Product Code', value: 'FC-1060-R' },
            { label: 'Sizes Available', value: '440ml, 700ml, 1060ml, 2100ml' },
            { label: 'Colour', value: 'Silver' },
            { label: 'Material', value: 'Aluminium' },
            { label: 'Qty / Pack', value: '10' },
            { label: 'Qty / Carton', value: '500' },
        ],
        material: 'Aluminium',
        category: 'Containers',
    },
    {
        id: 12,
        title: 'Garbage Bags',
        slug: 'garbage-bags',
        desc: 'Kitchen, heavy duty, and bin liners',
        img: `${PG}/2024/08/CJ40009.jpg`,
        tags: ['Kitchen', 'Heavy Duty'],
        specs: [
            { label: 'Product Code', value: 'GB-82L-HD' },
            { label: 'Sizes Available', value: '36L, 56L, 82L, 120L, 240L' },
            { label: 'Colour', value: 'Black' },
            { label: 'Material', value: 'HDPE / LDPE' },
            { label: 'Qty / Pack', value: '50' },
            { label: 'Qty / Carton', value: '250' },
        ],
        material: 'Plastic',
        category: 'Waste',
    },
];

// Helper to find product by ID
export const getProductById = (id: number): Product | undefined =>
    products.find(p => p.id === id);

// Get related products (same category, excluding current)
export const getRelatedProducts = (productId: number, limit = 4): Product[] => {
    const current = getProductById(productId);
    if (!current) return products.slice(0, limit);

    const sameCategory = products.filter(p => p.category === current.category && p.id !== productId);
    const others = products.filter(p => p.category !== current.category && p.id !== productId);
    return [...sameCategory, ...others].slice(0, limit);
};

// Featured products for homepage
export const featuredProducts = [
    { ...products[1], featuredDesc: 'Kraft paper bowls with PE lining' },    // Kraft Bowls
    { ...products[0], featuredDesc: 'Single wall, double wall & ripple' },   // Coffee Cups
    { ...products[2], featuredDesc: 'Natural sugarcane bagasse' },           // Sugarcane Clamshells
    { ...products[4], featuredDesc: 'Kraft paper bags for takeaway' },       // Takeaway Bags
];
