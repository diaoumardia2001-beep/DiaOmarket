import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Trash2 } from "lucide-react";
import { Container } from "../components/ui/Container";
import { CartItem } from "../components/cart/CartItem";
import { CartSummary } from "../components/cart/CartSummary";
import { useCart } from "../context/CartContext";

export const Cart: React.FC = () => {
  const { items, updateQuantity, removeItem, clearCart, subtotal } = useCart();

  // Cart empty state UI
  if (items.length === 0) {
    return (
      <div className="bg-bg-light-secondary min-h-[75vh] flex items-center justify-center py-20">
        <Container className="text-center space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full bg-primary-subtle text-primary flex items-center justify-center">
            <ShoppingCart className="h-7 w-7" />
          </div>

          <div className="space-y-2">
            <h1 className="text-h1 text-text-primary">Votre panier est vide</h1>
            <p className="text-sm text-text-secondary max-w-sm mx-auto">
              Ajoutez des produits depuis la Marketplace pour commencer votre commande.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Explorer la Marketplace</span>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-bg-light-secondary min-h-screen py-10">
      <Container className="space-y-8">
        
        {/* Cart Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border-light pb-6 text-left">
          <div className="space-y-1.5">
            {/* Breadcrumb */}
            <div className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">
              Accueil / <span className="text-primary-light">Mon panier</span>
            </div>
            <h1 className="text-h1 text-text-primary tracking-tight">Votre panier</h1>
            <p className="text-text-secondary text-sm font-medium">
              Vérifiez vos articles avant de passer à la commande.
            </p>
          </div>

          {/* Clear Cart Button */}
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Voulez-vous vraiment vider votre panier ?")) {
                clearCart();
              }
            }}
            className="flex items-center gap-1.5 text-xs font-bold text-text-muted hover:text-danger cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
          >
            <Trash2 className="h-4 w-4" />
            <span>Vider le panier</span>
          </button>
        </div>

        {/* Responsive Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Cart Items List */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item, idx) => (
              <CartItem
                key={`${item.product.id}-${item.selectedStorage}-${item.selectedColor}-${idx}`}
                item={item}
                onUpdateQuantity={(newQty) =>
                  updateQuantity(item.product.id, newQty, item.selectedStorage, item.selectedColor)
                }
                onRemove={() =>
                  removeItem(item.product.id, item.selectedStorage, item.selectedColor)
                }
              />
            ))}
          </div>

          {/* Right Column - Order Summary Box (Sticky) */}
          <div className="lg:col-span-4 w-full">
            <CartSummary subtotal={subtotal} />
          </div>

        </div>

      </Container>
    </div>
  );
};
export default Cart;
