export type ProductCategory = "cookies" | "granola" | "cakes" | "hampers";

export type Product = {
  id: string;
  name: string;
  price: number;
  spec: string;
  category: ProductCategory;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "ragi-cookies",
    name: "Ragi Chocolate Cookies",
    price: 280,
    spec: "Box of 8 pcs",
    category: "cookies",
    description:
      "Crunchy sprouted ragi chocolate cookies sweetened with palm jaggery and dark cocoa. Box of 8, baked in Chennai.",
  },
  {
    id: "granola",
    name: "Artisanal Millet Granola",
    price: 350,
    spec: "400g Jar",
    category: "granola",
    description:
      "Roasted foxtail millet granola with almonds, melon seeds, and gentle jaggery crunch in a 400g jar.",
  },
  {
    id: "wellness",
    name: "Evening Wellness Snacks Box",
    price: 650,
    spec: "Curated Box",
    category: "hampers",
    description:
      "Curated evening snack box with roasted spiced millets, cacao almond clusters, and jaggery biscuits.",
  },
  {
    id: "fudge-cake",
    name: "Decadent Millet Fudge Cake",
    price: 850,
    spec: "500g Cake",
    category: "cakes",
    description:
      "Moist millet fudge cake with ragi sponge and palm jaggery chocolate ganache. 500g, Chennai same-day ready.",
  },
  {
    id: "almond-cake",
    name: "Roasted Almond Tea Cake",
    price: 420,
    spec: "450g Loaf",
    category: "cakes",
    description:
      "Roasted almond tea cake loaf made with ancient grains and no refined sugar. 450g loaf.",
  },
  {
    id: "corporate-hamper",
    name: "Corporate Wellness Hamper",
    price: 1250,
    spec: "Artisan Gift Box",
    category: "hampers",
    description:
      "Artisan corporate wellness hamper of millet cookies, granola, and jaggery treats for team and festive gifting.",
  },
];

export const HAMPER_KEYS = {
  ragi: "ragi-cookies",
  granola: "granola",
  wellness: "wellness",
} as const;

export function resolveProduct(name: string, price?: number, spec?: string): Product {
  const lowered = name.toLowerCase();
  const found = PRODUCTS.find((product) => {
    const productName = product.name.toLowerCase();
    return (
      productName === lowered ||
      lowered.includes(productName) ||
      productName.includes(lowered) ||
      (lowered.includes("ragi") && product.id === "ragi-cookies") ||
      (lowered.includes("granola") && product.id === "granola") ||
      (lowered.includes("wellness") && product.id === "wellness") ||
      (lowered.includes("fudge") && product.id === "fudge-cake") ||
      ((lowered.includes("almond") || lowered.includes("tea cake")) &&
        product.id === "almond-cake") ||
      (lowered.includes("corporate") && product.id === "corporate-hamper")
    );
  });

  if (found) {
    return {
      ...found,
      name,
      price: price ?? found.price,
      spec: spec ?? found.spec,
    };
  }

  return {
    id: name.toLowerCase().replace(/\s+/g, "-"),
    name,
    price: price ?? 0,
    spec: spec ?? "Made to order",
    category: "cookies",
    description: `${name} baked to order at Millet Bakes in Chennai.`,
  };
}
