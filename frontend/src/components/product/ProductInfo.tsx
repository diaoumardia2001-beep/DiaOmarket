import React, { useState } from "react";
import { Star, ShoppingCart, Percent, Heart, MessageSquare, Check } from "lucide-react";
import type { Product } from "../../types/product";
import { useCart } from "../../context/CartContext";

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  const {
    brand,
    name,
    rating,
    condition,
    price,
    oldPrice,
  } = product;

  // Variant States (Local selections)
  const [selectedStorage, setSelectedStorage] = useState("256 Go");
  const [selectedColor, setSelectedColor] = useState("Gris");
  const [isLiked, setIsLiked] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const { addItem } = useCart();

  // Helper to parse numeric values for savings computation
  const getNumericPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  };

  // Compute savings if old price exists
  const savings = oldPrice ? getNumericPrice(oldPrice) - getNumericPrice(price) : 0;

  return (
    <div className="space-y-6 text-left w-full">
      {/* Brand & Badges */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            {brand}
          </span>
          <span className="bg-bg-light-secondary border border-border-light text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider text-text-secondary">
            État : {condition}
          </span>
        </div>
        
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight leading-tight">
          {name}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-rating text-rating shrink-0" />
          <span className="text-sm font-bold text-text-primary">{rating.toFixed(1)}</span>
          <span className="text-xs text-text-muted font-medium">(Avis clients)</span>
        </div>
      </div>

      {/* Pricing Block */}
      <div className="bg-bg-light border border-border-light rounded-2xl p-5 space-y-3 shadow-sm">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-extrabold text-price">
            {price}
          </span>
          {oldPrice && (
            <span className="text-base text-text-muted line-through">
              {oldPrice}
            </span>
          )}
        </div>
        
        {oldPrice && savings > 0 && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-success/10 text-success text-xs font-bold">
            <Percent className="h-3.5 w-3.5" />
            <span>Économisez {savings.toLocaleString()} FCFA</span>
          </div>
        )}
      </div>

      {/* Variant Selection (Decorative) */}
      <div className="space-y-4 pt-2">
        {/* Storage Options */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-text-secondary uppercase">Stockage</span>
          <div className="flex gap-2">
            {["128 Go", "256 Go", "512 Go"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setSelectedStorage(st)}
                className={`px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedStorage === st
                    ? "border-primary bg-primary-subtle text-primary"
                    : "border-border-light text-text-secondary bg-bg-light hover:bg-bg-light-secondary"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Color Options */}
        <div className="space-y-2">
          <span className="text-xs font-bold text-text-secondary uppercase">Couleur</span>
          <div className="flex gap-2">
            {["Noir", "Gris", "Titane"].map((col) => (
              <button
                key={col}
                type="button"
                onClick={() => setSelectedColor(col)}
                className={`px-4 py-2 border rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedColor === col
                    ? "border-primary bg-primary-subtle text-primary"
                    : "border-border-light text-text-secondary bg-bg-light hover:bg-bg-light-secondary"
                }`}
              >
                {col}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Commercial Actions CTAs */}
      <div className="flex flex-col sm:flex-row gap-3 pt-4">
        {/* Add to Cart */}
        <button
          type="button"
          onClick={() => {
            addItem(product, 1, selectedStorage, selectedColor);
            setIsAdding(true);
            setTimeout(() => setIsAdding(false), 2000);
          }}
          className={`flex-grow flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-white transition-all cursor-pointer active:scale-98 ${
            isAdding ? "bg-success hover:bg-success-dark shadow-success/10" : "bg-primary hover:bg-primary-dark shadow-card-hover hover:shadow-primary/20"
          }`}
        >
          {isAdding ? (
            <>
              <Check className="h-4 w-4" />
              <span>Ajouté !</span>
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              <span>Ajouter au panier</span>
            </>
          )}
        </button>

        {/* Make Offer */}
        <button
          type="button"
          onClick={() => {
            const offerPrice = prompt("Saisissez le montant de votre offre (FCFA) :");
            if (offerPrice) alert(`Votre offre de ${offerPrice} FCFA a été envoyée au vendeur.`);
          }}
          className="flex-grow flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-text-primary bg-bg-light border border-border-light hover:bg-bg-light-secondary transition-all cursor-pointer active:scale-98"
        >
          <MessageSquare className="h-4 w-4 text-text-secondary" />
          <span>Faire une offre</span>
        </button>

        {/* Favorites Heart */}
        <button
          type="button"
          onClick={() => setIsLiked(!isLiked)}
          className="px-4 py-4 rounded-xl bg-bg-light border border-border-light text-text-muted hover:text-danger active:scale-95 transition-all cursor-pointer"
          aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart className={`h-5 w-5 ${isLiked ? "fill-danger text-danger" : ""}`} />
        </button>
      </div>
    </div>
  );
};
export default ProductInfo;
