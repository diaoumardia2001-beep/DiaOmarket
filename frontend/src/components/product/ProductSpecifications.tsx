import React from "react";
import type { Product } from "../../types/product";

interface ProductSpecificationsProps {
  product: Product;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  product,
}) => {
  const {
    brand,
    name,
    condition,
    storage,
    ram,
    color,
    screen,
    battery,
    os,
    network,
  } = product;

  // Key-value specifications list to render dynamically
  const specs = [
    { label: "Marque", value: brand },
    { label: "Modèle", value: name },
    { label: "État du produit", value: condition },
    { label: "Stockage interne", value: storage || "128 Go" },
    { label: "Mémoire RAM", value: ram || "6 Go" },
    { label: "Couleur", value: color || "Noir" },
    { label: "Taille de l'écran", value: screen || "6,1 pouces" },
    { label: "Capacité batterie", value: battery || "3500 mAh" },
    { label: "Système d'exploitation", value: os || "Android" },
    { label: "Compatibilité réseau", value: network || "5G" },
  ];

  return (
    <div className="bg-bg-light border border-border-light rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm text-left">
      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider pb-3 border-b border-border-light-subtle">
        Fiche Technique
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
        {specs.map((spec, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between py-2.5 border-b border-border-light-subtle text-xs"
          >
            <span className="font-bold text-text-muted">{spec.label}</span>
            <span className="font-semibold text-text-primary text-right pl-2">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductSpecifications;
