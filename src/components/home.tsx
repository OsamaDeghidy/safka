import React from "react";
import Header from "./Header";
import BannerSection from "./BannerSection";
import ProductGrid from "./ProductGrid";
import CategorySection from "./CategorySection";
import Footer from "./Footer";

interface HomeProps {
  onSearchSubmit?: (searchTerm: string) => void;
  onAddToCart?: (productId: string) => void;
  onBuyNow?: (bannerId: number) => void;
}

const Home = ({
  onSearchSubmit = (searchTerm: string) =>
    console.log(`Search submitted: ${searchTerm}`),
  onAddToCart = (productId: string) =>
    console.log(`Add to cart clicked: ${productId}`),
  onBuyNow = (bannerId: number) => console.log(`Buy now clicked: ${bannerId}`),
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchSubmit={onSearchSubmit} />

      {/* Main content with padding for fixed header */}
      <main className="pt-20">
        <BannerSection onBuyNow={onBuyNow} />

        {/* Featured Products */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Products
            </h2>
            <ProductGrid onAddToCart={onAddToCart} />
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <CategorySection />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
