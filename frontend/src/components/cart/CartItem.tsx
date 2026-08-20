import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShieldCheck } from "lucide-react";
import type { CartItem as CartItemType } from "../../context/CartContext";
import { parsePrice, formatPrice } from "../../utils/price";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
}

export const CartItem: React.FC<CartItemProps> = ({
  item,
  onUpdateQuantity,
  onRemove,
}) => {
  const { product, quantity, selectedStorage, selectedColor } = item;
  const { id, name, image, seller, verified, condition, price } = product;

  const unitPriceNum = parsePrice(price);
  const lineTotalNum = unitPriceNum * quantity;

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-bg-light border border-border-light rounded-2xl shadow-sm text-left">
      {/* Product Image & Description */}
      <div className="flex items-center gap-4 flex-grow min-w-0">
        {/* Product Image Thumbnail */}
        <Link
          to={`/products/${id}`}
          className="h-16 w-16 sm:h-20 sm:w-20 rounded-xl bg-bg-light-secondary border border-border-light-subtle flex items-center justify-center p-2 shrink-0 hover:opacity-90 transition-opacity"
        >
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain select-none"
          />
        </Link>

        {/* Text descriptions */}
        <div className="space-y-1 min-w-0 flex-grow">
          <Link
            to={`/products/${id}`}
            className="font-extrabold text-sm sm:text-base text-text-primary hover:text-primary transition-colors line-clamp-1 block"
          >
            {name}
          </Link>
          
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-secondary">
            <span className="font-semibold">{seller}</span>
            {verified && (
              <ShieldCheck className="h-3.5 w-3.5 text-success shrink-0" />
            )}
            <span className="text-text-muted">•</span>
            <span className="bg-bg-light-secondary px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-text-muted">
              {condition}
            </span>
          </div>

          {/* Selected Variations */}
          <div className="flex flex-wrap gap-2 pt-0.5">
            {selectedStorage && (
              <span className="bg-primary-subtle text-primary border border-primary/10 px-2 py-0.5 rounded-lg text-[10px] font-bold">
                {selectedStorage}
              </span>
            )}
            {selectedColor && (
              <span className="bg-bg-light-secondary text-text-secondary border border-border-light px-2 py-0.5 rounded-lg text-[10px] font-bold">
                {selectedColor}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing & Control Block */}
      <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-border-light-subtle">
        {/* Quantity Controls */}
        <div className="flex items-center border border-border-light rounded-xl overflow-hidden bg-bg-light-secondary select-none">
          <button
            type="button"
            onClick={() => onUpdateQuantity(quantity - 1)}
            disabled={quantity <= 1}
            className={`p-2.5 text-text-secondary hover:bg-bg-light transition-colors ${
              quantity <= 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"
            }`}
            aria-label="Diminuer la quantité de 1"
          >
            <Minus className="h-3.5 w-3.5" />
          </button>
          
          <span className="w-8 text-center text-xs font-bold text-text-primary">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => onUpdateQuantity(quantity + 1)}
            className="p-2.5 text-text-secondary hover:bg-bg-light transition-colors cursor-pointer"
            aria-label="Augmenter la quantité de 1"
          >
            <Plus className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Pricing Column */}
        <div className="text-right min-w-[90px]">
          <div className="text-[10px] text-text-muted font-bold leading-none mb-1">
            {formatPrice(unitPriceNum)} / u
          </div>
          <div className="font-extrabold text-sm sm:text-base text-price leading-none">
            {formatPrice(lineTotalNum)}
          </div>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={onRemove}
          className="p-2 text-text-muted hover:text-danger active:scale-95 transition-all cursor-pointer rounded-lg hover:bg-danger/5"
          aria-label={`Supprimer ${name} du panier`}
        >
          <Trash2 className="h-4.5 w-4.5" />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
