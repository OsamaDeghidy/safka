import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  categories?: {
    id: string;
    name: string;
    products: Array<{
      id: string;
      title: string;
      price: number;
      image: string;
      description: string;
      discount?: number;
    }>;
  }[];
}

const CategorySection = ({
  categories = [
    {
      id: "laptops",
      name: "Laptops",
      products: [
        {
          id: "1",
          title: "Business Laptop Pro",
          price: 5999.99,
          image:
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=500&fit=crop",
          description: "Powerful laptop for business professionals",
          discount: 15,
        },
        {
          id: "2",
          title: "Developer Workstation",
          price: 7999.99,
          image:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop",
          description: "High-performance developer laptop",
          discount: 10,
        },
      ],
    },
    {
      id: "accessories",
      name: "Accessories",
      products: [
        {
          id: "3",
          title: "Wireless Mouse",
          price: 199.99,
          image:
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
          description: "Ergonomic wireless mouse",
          discount: 20,
        },
        {
          id: "4",
          title: "Mechanical Keyboard",
          price: 499.99,
          image:
            "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",
          description: "Premium mechanical keyboard",
          discount: 5,
        },
      ],
    },
    {
      id: "cloud",
      name: "Cloud Services",
      products: [
        {
          id: "5",
          title: "Cloud Storage Plus",
          price: 299.99,
          image:
            "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&h=500&fit=crop",
          description: "1TB secure cloud storage",
          discount: 25,
        },
        {
          id: "6",
          title: "Enterprise Cloud Suite",
          price: 999.99,
          image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=500&fit=crop",
          description: "Complete cloud solution for enterprises",
          discount: 30,
        },
      ],
    },
  ],
}: CategorySectionProps) => {
  return (
    <div className="w-full max-w-[1400px] mx-auto p-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Shop by Category
      </h2>
      <Tabs defaultValue={categories[0]?.id} className="w-full">
        <TabsList className="mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card>
              <CardContent className="p-6">
                <ScrollArea className="w-full">
                  <div className="flex space-x-4 pb-4">
                    {category.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        image={product.image}
                        description={product.description}
                        discount={product.discount}
                      />
                    ))}
                  </div>
                  <ScrollBar orientation="horizontal" />
                </ScrollArea>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default CategorySection;
