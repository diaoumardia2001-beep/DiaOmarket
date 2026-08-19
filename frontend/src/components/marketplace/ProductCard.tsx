import React, { useState } from "react";
import { Heart, Star, MapPin, ShieldCheck } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    name,
    image,
    price,
    oldPrice,
    condition,
    seller,
    verified,
    rating,
    location,
  } = product;

  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-bg-light border border-border-light rounded-2xl shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer">
      
      {/* Image & Badge Area */}
      <div className="relative pt-[100%] bg-bg-light-secondary overflow-hidden flex items-center justify-center border-b border-border-light-subtle">
        {/* Badges Container */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 items-start">
          {/* Promo Badge */}
          {oldPrice && (
            <span className="bg-danger text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
              Promo
            </span>
          )}
          {/* Condition Badge */}
          <span className="bg-bg-light/90 backdrop-blur-sm text-text-secondary border border-border-light text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
            {condition}
          </span>
        </div>

        {/* Favorite Icon */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 z-10 p-2 rounded-full bg-bg-light/90 backdrop-blur-sm border border-border-light text-text-muted hover:text-danger active:scale-90 transition-all shadow-sm cursor-pointer"
          aria-label={isLiked ? "Retirer des favoris" : "Ajouter aux favoris"}
        >
          <Heart className={`h-3.5 w-3.5 transition-colors ${isLiked ? "fill-danger text-danger" : ""}`} />
        </button>

        {/* Product Image */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain transform group-hover:scale-[1.03] transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 flex-grow flex flex-col justify-between space-y-3">
        {/* Title */}
        <div className="space-y-1">
          <h3 className="font-bold text-text-primary text-sm line-clamp-2 min-h-[40px] group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          {/* Seller and Rating */}
          <div className="flex items-center justify-between text-[11px] text-text-secondary">
            <div className="flex items-center gap-1 min-w-0">
              <span className="truncate font-semibold text-text-secondary">{seller}</span>
              {verified && (
                <ShieldCheck className="h-3.5 w-3.5 text-success shrink-0" />
              )}
            </div>
            
            {/* Rating */}
            <div className="flex items-center gap-0.5 shrink-0 pl-1">
              <Star className="h-3 w-3 fill-rating text-rating shrink-0" />
              <span className="font-bold text-text-primary">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>

        {/* Bottom Price & Location */}
        <div className="pt-2 border-t border-border-light-subtle flex items-end justify-between gap-2">
          {/* Price */}
          <div className="flex flex-col">
            {oldPrice && (
              <span className="text-[10px] text-text-muted line-through">
                {oldPrice}
              </span>
            )}
            <span className="text-price-lg font-extrabold leading-none">
              {price}
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-0.5 text-text-muted text-[10px] pb-0.5 shrink-0">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="font-semibold">{location}</span>
          </div>
        </div>

      </div>
    </div>
  );
};
