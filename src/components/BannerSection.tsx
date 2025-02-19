import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface BannerSectionProps {
  banners?: Array<{
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
  }>;
  onBuyNow?: (id: number) => void;
}

const BannerSection = ({
  banners = [
    {
      id: 1,
      title: "New MacBook Pro M2",
      description: "Experience unprecedented power with the latest M2 chip",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1400&h=600&fit=crop",
      price: 5999.99,
    },
    {
      id: 2,
      title: "Enterprise Server Solutions",
      description: "Power your business with our enterprise-grade servers",
      image:
        "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1400&h=600&fit=crop",
      price: 15999.99,
    },
    {
      id: 3,
      title: "Gaming Laptop Special",
      description: "Ultimate gaming experience with RTX 4090",
      image:
        "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1400&h=600&fit=crop",
      price: 8999.99,
    },
  ],
  onBuyNow = (id: number) => console.log(`Buy now clicked for banner ${id}`),
}: BannerSectionProps) => {
  return (
    <div className="w-full h-[400px] bg-gradient-to-r from-blue-50 to-indigo-50 relative overflow-hidden rounded-2xl mx-auto max-w-[1400px] my-6">
      <Carousel className="w-full h-full">
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem key={banner.id}>
              <Card className="relative w-full h-[400px] overflow-hidden border-none rounded-none">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent">
                  <div className="absolute bottom-10 left-10 text-white max-w-xl">
                    <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                    <p className="text-lg mb-6">{banner.description}</p>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold">
                        SAR {banner.price.toFixed(2)}
                      </span>
                      <Button
                        size="lg"
                        onClick={() => onBuyNow(banner.id)}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default BannerSection;
