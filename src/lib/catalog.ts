export type ProductCategory = "cookies" | "granola" | "cakes" | "hampers";

export type Product = {
  id: string;
  name: string;
  tamilName?: string;
  price: number;
  spec: string;
  category: ProductCategory;
  description: string;
  image: string;
  subtitle?: string;
  tags?: string[];
  highlights?: string[];
};

export const PRODUCTS: Product[] = [
  {
    id: "foxtail-millet-cookies",
    name: "Foxtail Millet Cookies",
    tamilName: "தினை குக்கீ",
    price: 400,
    spec: "250g",
    category: "cookies",
    subtitle: "Foxtail Millet (Thinai) • Naatu Sakkarai",
    description:
      "A wholesome and delicious cookie made with nutritious Foxtail Millet (Thinai). Foxtail millet naturally provides dietary fibre, plant-based protein and essential minerals such as iron. Baked without eggs and sweetened with traditional naatu sakkarai, these cookies offer a delightfully crisp texture with the natural goodness of millet in every bite.",
    image: "/products/foxtail-millet-cookies.jpg",
    tags: ["100% Eggless", "Thinai"],
    highlights: [
      "Made with Foxtail Millet (Thinai)",
      "Contains dietary fibre and plant-based protein",
      "Foxtail millet is a natural source of iron",
      "Sweetened with naatu sakkarai",
      "100% Eggless",
      "Freshly baked with care",
    ],
  },
  {
    id: "oats-raisin-cookies",
    name: "Oats and Raisin Cookies",
    tamilName: "ஓட்ஸ் உலர் திராட்சை குக்கீ",
    price: 400,
    spec: "250g",
    category: "cookies",
    subtitle: "Wholesome Oats • Raisins • Naatu Sakkarai",
    description:
      "A soft and comforting cookie made with wholesome oats, wheat flour and naturally sweet raisins. Oats naturally contain dietary fibre, including beta-glucan soluble fibre. Sweetened with traditional naatu sakkarai and baked without eggs, these cookies have lightly crisp edges with a deliciously soft and chewy centre.",
    image: "/products/oats-raisin-cookies.png",
    tags: ["100% Eggless", "Oats"],
    highlights: [
      "Made with wholesome oats and wheat",
      "Filled with naturally sweet raisins",
      "Oats naturally contain dietary fibre",
      "Sweetened with naatu sakkarai",
      "100% Eggless",
      "Lightly crisp outside and soft at the centre",
      "Freshly baked with care",
    ],
  },
  {
    id: "granola",
    name: "Millet Granola",
    tamilName: "சிறுதானிய கிரனோலா",
    price: 850,
    spec: "500g",
    category: "granola",
    subtitle: "Crunchy • Nutritious • Wholesome",
    description:
      "A crunchy everyday granola made with wholesome millet grains, rolled oats, almonds, seeds, raisins, and coconut. Packed with real nutrition for sustained energy, this jar is rich in fibre and nutrients, made with 100% natural ingredients, and completely sugar-free — clean snacking that is perfect for all ages.",
    image: "/products/millet-granola.jpg",
    tags: ["Sugar Free", "High Fiber"],
    highlights: [
      "Made with 100% natural ingredients",
      "Rich in nutrients and high in fibre",
      "Sugar-free healthy snacking",
      "Sustained everyday energy",
      "Clean ingredients — perfect for all ages",
      "Crunchy, nutritious, and wholesome",
    ],
  },
  {
    id: "wheat-brownie",
    name: "Wheat Brownie",
    tamilName: "கோதுமை பிரவுனி",
    price: 550,
    spec: "250g",
    category: "cakes",
    subtitle: "Wheat Flour • Couverture Chocolate • Egg Based",
    description:
      "A rich and indulgent chocolate brownie made with wholesome wheat flour, premium pure couverture chocolate, traditional naatu sakkarai and pure butter. Wheat naturally provides dietary fibre along with essential nutrients, while couverture chocolate lends an intense chocolate flavour and a beautifully smooth finish. Baked to perfection, this brownie has a soft, moist and cakey texture with rich chocolate goodness in every bite—a thoughtfully made treat for every chocolate lover.",
    image: "/products/wheat-brownie.png",
    tags: ["Egg Based", "No Maida"],
    highlights: [
      "Made with wholesome wheat flour",
      "Crafted using premium pure couverture chocolate",
      "Sweetened with traditional naatu sakkarai",
      "Made with pure butter",
      "No maida",
      "Soft, moist and cakey texture",
      "Rich and intense chocolate flavour",
      "Freshly baked with care",
    ],
  },
  {
    id: "wheat-chocolate-cake",
    name: "Protein & Fibre-Rich Wheat Chocolate Cake",
    tamilName: "கோதுமை சாக்லேட் கேக்",
    price: 1000,
    spec: "500g",
    category: "cakes",
    subtitle: "Wheat • Couverture Chocolate • Protein & Fibre",
    description:
      "A deliciously rich chocolate cake thoughtfully made with wheat and protein- and fibre-rich ingredients. Crafted using pure couverture chocolate, this cake has a soft, moist crumb with a deep and satisfying chocolate flavour. A wholesome twist on the classic chocolate cake—perfect for fitness enthusiasts and anyone looking for a more mindful celebration treat without compromising on taste.",
    image: "/products/wheat-chocolate-cake.jpg",
    tags: ["Protein", "High Fibre"],
    highlights: [
      "Made with wheat",
      "Enriched with protein and dietary fibre",
      "Crafted using pure couverture chocolate",
      "Soft and moist texture",
      "Rich chocolate flavour",
      "Freshly baked and thoughtfully customised",
    ],
  },
];

export const HOME_FILTERS = [
  "All Delights",
  "Cookies",
  "Granola Jars",
  "Tea Cakes",
] as const;

export function productMatchesHomeFilter(product: Product, filter: string) {
  if (filter === "All Delights") return true;
  if (filter === "Cookies") return product.category === "cookies";
  if (filter === "Granola Jars") return product.category === "granola";
  if (filter === "Tea Cakes") return product.category === "cakes";
  if (filter === "Hampers") return product.category === "hampers";
  return true;
}

export function formatProductTitle(product: Product) {
  return product.tamilName ? `${product.name} (${product.tamilName})` : product.name;
}

export function resolveProduct(name: string, price?: number, spec?: string): Product {
  const lowered = name.toLowerCase();
  const found = PRODUCTS.find((product) => {
    const productName = product.name.toLowerCase();
    return (
      productName === lowered ||
      lowered.includes(productName) ||
      productName.includes(lowered) ||
      product.id === lowered ||
      (product.tamilName && lowered.includes(product.tamilName.toLowerCase())) ||
      (lowered.includes("foxtail") && product.id === "foxtail-millet-cookies") ||
      (lowered.includes("thinai") && product.id === "foxtail-millet-cookies") ||
      (lowered.includes("granola") && product.id === "granola") ||
      ((lowered.includes("oats") || lowered.includes("raisin")) &&
        product.id === "oats-raisin-cookies") ||
      (lowered.includes("brownie") && product.id === "wheat-brownie") ||
      ((lowered.includes("chocolate cake") || lowered.includes("wheat chocolate")) &&
        product.id === "wheat-chocolate-cake")
    );
  });

  if (found) {
    return {
      ...found,
      name: found.name,
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
    image: "/millet-bakes-logo.png",
  };
}
