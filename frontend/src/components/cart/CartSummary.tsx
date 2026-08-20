import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { formatPrice } from "../../utils/price";

interface CartSummaryProps {
  subtotal: number;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ subtotal }) => {
  return (
    <div className="bg-bg-light border border-border-light rounded-2xl p-5 sm:p-6 space-y-6 shadow-sm text-left sticky top-8">
      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider pb-3 border-b border-border-light-subtle">
        Résumé de la commande
      </h3>

      <div className="space-y-3.5 text-xs font-semibold">
        {/* Subtotal line */}
        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Sous-total</span>
          <span className="text-text-primary font-bold">{formatPrice(subtotal)}</span>
        </div>

        {/* Delivery line */}
        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Livraison</span>
          <span className="text-text-muted italic text-[11px]">À calculer au checkout</span>
        </div>

        {/* Divider */}
        <div className="border-t border-border-light-subtle pt-3.5" />

        {/* Total line */}
        <div className="flex justify-between items-end">
          <span className="text-sm font-extrabold text-text-primary">Total</span>
          <span className="text-xl font-extrabold text-price leading-none">
            {formatPrice(subtotal)}
          </span>
        </div>
      </div>

      {/* Trust Notice */}
      <div className="bg-bg-light-secondary rounded-xl p-3 border border-border-light text-[10px] text-text-secondary leading-relaxed font-medium">
        En Côte d'Ivoire, les tarifs de livraison varient selon la commune et sont à régler directement auprès du livreur ou du vendeur.
      </div>

      {/* Call to Actions */}
      <div className="space-y-3 pt-2">
        {/* Checkout Link */}
        <Link
          to="/checkout"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-xs sm:text-sm font-bold shadow-sm transition-all cursor-pointer hover:shadow-primary/10 active:scale-98"
        >
          <span>Passer la commande</span>
          <ArrowRight className="h-4 w-4" />
        </Link>

        {/* Continue Shopping Link */}
        <Link
          to="/marketplace"
          className="w-full flex items-center justify-center gap-2 px-6 py-3.5 border border-border-light hover:bg-bg-light-secondary text-text-secondary hover:text-text-primary rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer active:scale-98"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Continuer mes achats</span>
        </Link>
      </div>
    </div>
  );
};
export default CartSummary;
