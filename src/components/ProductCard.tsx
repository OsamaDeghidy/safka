import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title?: string;
  price?: number;
  image?: string;
  description?: string;
  discount?: number;
  onAddToCart?: () => void;
}

const ProductCard = ({
  title = "Enterprise Laptop Pro",
  price = 4999.99,
  image = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop",
  description = "High-performance laptop for business professionals",
  discount = 10,
  onAddToCart = () => console.log("Add to cart clicked"),
}: ProductCardProps) => {
  const discountedPrice = price - price * (discount / 100);

  return (
    <Card className="w-[320px] h-[400px] bg-white overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
          {discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-red-500">
              {discount}% OFF
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-blue-600">
            SAR {discountedPrice.toFixed(2)}
          </span>
          {discount > 0 && (
            <span className="text-sm text-gray-400 line-through">
              SAR {price.toFixed(2)}
            </span>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={onAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
