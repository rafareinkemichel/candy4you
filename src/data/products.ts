export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cupcake",
    price: 3.99,
    description: "Delicious vanilla cupcake with buttercream frosting",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=300",
    category: "Cupcakes"
  },
  {
    id: 2,
    name: "Banana Split Supreme",
    price: 8.99,
    description: "Fresh banana with three scoops of ice cream and toppings",
    image: "https://images.unsplash.com/photo-1553787499-6f5f30505ec5?auto=format&fit=crop&q=80&w=300",
    category: "Ice Cream"
  },
  {
    id: 3,
    name: "Chocolate Boat",
    price: 12.99,
    description: "Rich chocolate boat filled with assorted truffles",
    image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&q=80&w=300",
    category: "Chocolate"
  },
  {
    id: 4,
    name: "Rainbow Lollipop",
    price: 2.99,
    description: "Colorful swirled giant lollipop",
    image: "https://images.unsplash.com/photo-1575224526797-5730d09d781d?auto=format&fit=crop&q=80&w=300",
    category: "Lollipops"
  },
  {
    id: 5,
    name: "Gummy Bears Mix",
    price: 4.99,
    description: "Assorted fruit-flavored gummy bears",
    image: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?auto=format&fit=crop&q=80&w=300",
    category: "Candies"
  },
  {
    id: 6,
    name: "Rainbow Layer Cake",
    price: 29.99,
    description: "Six-layer rainbow cake with vanilla frosting",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=300",
    category: "Cakes"
  },
  {
    id: 7,
    name: "French Macarons",
    price: 15.99,
    description: "Assorted French macarons in pastel colors",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=300",
    category: "Gourmet"
  },
  {
    id: 8,
    name: "Truffled Brownies",
    price: 18.99,
    description: "Rich chocolate brownies with truffle filling",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=300",
    category: "Gourmet"
  },
  {
    id: 9,
    name: "Gourmet Brigadeiros",
    price: 16.99,
    description: "Brazilian chocolate truffles with premium toppings",
    image: "https://images.unsplash.com/photo-1597019558926-3eef445fdf60?auto=format&fit=crop&q=80&w=300",
    category: "Gourmet"
  },
  {
    id: 10,
    name: "Berry Cheesecake",
    price: 22.99,
    description: "New York style cheesecake with fresh berries",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=300",
    category: "Gourmet"
  }
];