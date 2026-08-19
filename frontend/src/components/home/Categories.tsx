import React from "react";
import { Smartphone, ChevronRight } from "lucide-react";
import { Container } from "../ui/Container";

interface Category {
  id: string;
  name: string;
  count: string;
  image?: string;
  icon?: React.ReactNode;
  gradientClass?: string;
}

export const Categories: React.FC = () => {
  const categories: Category[] = [
    {
      id: "iphone",
      name: "iPhone",
      count: "1 248 produits",
      image: "/cat_iphone.jpg",
    },
    {
      id: "samsung",
      name: "Samsung",
      count: "856 produits",
      image: "/cat_samsung.jpg",
    },
    {
      id: "google-pixel",
      name: "Google Pixel",
      count: "243 produits",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      gradientClass: "from-secondary-light to-primary-light",
    },
    {
      id: "xiaomi",
      name: "Xiaomi",
      count: "538 produits",
      icon: <Smartphone className="h-6 w-6 text-white" />,
      gradientClass: "from-brand-orange to-danger-light",
    },
    {
      id: "accessoires",
      name: "Accessoires",
      count: "1 250 produits",
      image: "/cat_accessories.jpg",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-bg-dark via-bg-surface/90 to-bg-light-secondary pt-16 pb-20">
      
      <Container>
        {/* Section Header */}
        <div className="space-y-2 mb-10 text-left">
          <h2 className="text-h2 text-text-on-dark tracking-tight">
            Explorez par catégorie
          </h2>
          <p className="text-text-on-dark-secondary text-sm font-medium max-w-xl">
            Trouvez rapidement le smartphone ou l'accessoire qui vous correspond.
          </p>
        </div>

        {/* Categories List (Horizontal scroll on mobile, Grid on desktop) */}
        <div className="flex overflow-x-auto lg:grid lg:grid-cols-5 gap-5 pb-4 lg:pb-0 snap-x scrollbar-none">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col justify-between p-5 bg-bg-light border border-border-light rounded-2xl shadow-sm hover:shadow-md hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 min-w-[200px] w-[200px] lg:w-auto snap-start shrink-0 cursor-pointer"
            >
              <div className="space-y-4">
                {/* Visual Area (Image or Gradient Icon) */}
                <div className="h-28 w-full rounded-xl overflow-hidden flex items-center justify-center bg-bg-light-secondary border border-border-light-subtle relative">
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-[80%] object-contain transform group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradientClass} flex items-center justify-center`}>
                      {category.icon}
                    </div>
                  )}
                </div>

                {/* Metadata */}
                <div>
                  <h3 className="font-bold text-text-primary text-sm tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-[11px] text-text-muted font-semibold mt-0.5">
                    {category.count}
                  </p>
                </div>
              </div>

              {/* Bottom Arrow Indicator */}
              <div className="flex items-center gap-1 text-[10px] font-bold text-primary hover:text-primary-dark pt-4 mt-auto">
                <span>Découvrir</span>
                <ChevronRight className="h-3 w-3 transform group-hover:translate-x-0.5 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
};
export default Categories;
