import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  discount?: number;
}

interface ProductGridProps {
  products?: Product[];
  onAddToCart?: (productId: string) => void;
}

const ProductGrid = ({
  products = [
    {
      id: "1",
      title: "Enterprise Laptop Pro",
      price: 4999.99,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
      description: "High-performance laptop for business professionals",
      discount: 10,
    },
    {
      id: "2",
      title: "Business Tablet Elite",
      price: 2999.99,
      image:
        "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&h=500&fit=crop",
      description: "Premium tablet for mobile productivity",
      discount: 15,
    },
    {
      id: "3",
      title: "Pro Wireless Mouse",
      price: 299.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
      description: "Ergonomic wireless mouse for professionals",
    },
    {
      id: "4",
      title: "4K Monitor Ultra",
      price: 1999.99,
      image:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&h=500&fit=crop",
      description: "Ultra-wide 4K monitor for maximum productivity",
      discount: 20,
    },
  ],
  onAddToCart = (productId: string) =>
    console.log(`Add to cart clicked for product ${productId}`),
}: ProductGridProps) => {
  return (
    <div className="w-full max-w-[1400px] min-h-[600px] mx-auto bg-gradient-to-b from-gray-50 to-white p-8 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            description={product.description}
            discount={product.discount}
            onAddToCart={() => onAddToCart(product.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
