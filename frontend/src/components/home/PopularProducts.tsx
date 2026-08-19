import React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { ProductCard } from "../marketplace/ProductCard";
import { mockProducts } from "../../data/products";

export const PopularProducts: React.FC = () => {
  return (
    <section className="bg-bg-light-secondary py-16 border-b border-border-light-subtle">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="space-y-2 text-left">
            <h2 className="text-h2 text-text-primary tracking-tight">
              Produits populaires
            </h2>
            <p className="text-text-secondary text-sm font-medium">
              Découvrez les smartphones les plus recherchés sur DiaO.
            </p>
          </div>
          
          {/* Desktop "Voir tout" Link */}
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors group shrink-0"
          >
            <span>Voir tout</span>
            <ArrowRight className="h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Grid of Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile "Voir tout" Button */}
        <div className="mt-8 flex sm:hidden">
          <a
            href="#"
            className="w-full flex items-center justify-center gap-2 py-3 border border-border-light rounded-xl text-xs font-bold text-text-secondary hover:text-text-primary bg-bg-light transition-colors"
          >
            <span>Voir tous les produits</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </Container>
    </section>
  );
};
export default PopularProducts;
