export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  specs?: string[];
}

export const products: Product[] = [
  {
    id: 8,
    name: "Arla Mozzarella Cheese 8 x 2.3kg",
    description: "High-quality mozzarella cheese for pizzas and culinary use.",
    image: "/assets/images/Arla.png",
    specs: ["8 x 2.3kg"]
  },
  {
    id: 1,
    name: "Lurpak Butter 20 x 200g (Salted & Unsalted)",
    description: "Premium Danish butter known for its rich taste and quality.",
    image: "/assets/images/unsalted.png",
    specs: ["Salted and Unsalted", "Pack of 20 x 200g"]
  },
  {
    id: 3,
    name: "Malta Max Cans 24 x 330ml",
    description: "Refreshing non-alcoholic malt drink in convenient cans.",
    image: "/assets/images/Maltamax.png",
    specs: ["24 cans per pack", "Each 33cl"]
  },
  {
    id: 2,
    name: "Powermalt Bottles 24 x 33cl",
    description: "Energy-packed malt beverage, perfect for refreshment.",
    image: "/assets/images/Power-Malt.png",
    specs: ["Pack of 24 bottles", "Each 33cl"]
  },
  {
    id: 4,
    name: "Peak UHT Milk 12 x 500ml",
    description: "Fresh, creamy UHT milk perfect for home and business use.",
    image: "/assets/images/peak-500ml.jpeg",
    specs: ["12 cartons per pack", "Each 500ml"]
  },
  {
    id: 5,
    name: "Peak UHT Milk 12 x 1ltr",
    description: "Long-life UHT milk with rich, natural taste.",
    image: "/assets/images/peak-1ltr.webp",
    specs: ["12 cartons per pack", "Each 1L"]
  },
  {
    id: 6,
    name: "Peak Evaporated Milk 48 x 160g",
    description: "Trusted evaporated milk with creamy consistency.",
    image: "/assets/images/peak-evaporated.png",
    specs: ["48 tins per pack", "Each 160g"]
  },
  {
    id: 7,
    name: "Omela Evaporated Milk 48 x 160g",
    description: "Smooth, creamy evaporated milk ideal for beverages and desserts.",
    image: "/assets/images/omela.jpg",
    specs: ["48 tins per pack", "Each 160g"]
  }
];
