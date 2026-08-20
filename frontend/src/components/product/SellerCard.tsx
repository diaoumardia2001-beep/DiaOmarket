import React from "react";
import { ShieldCheck, Star, MapPin, Store, MessageSquare } from "lucide-react";

interface SellerCardProps {
  sellerName: string;
  verified: boolean;
  location: string;
  rating: number;
}

export const SellerCard: React.FC<SellerCardProps> = ({
  sellerName,
  verified,
  location,
  rating,
}) => {
  // Generate first letter as avatar fallback
  const firstLetter = sellerName.charAt(0).toUpperCase();

  return (
    <div className="bg-bg-light border border-border-light rounded-2xl p-5 space-y-4 shadow-sm text-left">
      <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider pb-2 border-b border-border-light-subtle">
        Vendeur
      </h3>

      <div className="flex items-start gap-4">
        {/* CSS avatar with gradient */}
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-extrabold text-lg shadow-sm shrink-0">
          {firstLetter}
        </div>

        {/* Seller Info */}
        <div className="space-y-1 min-w-0">
          <div className="flex items-center gap-1.5 min-w-0">
            <h4 className="font-extrabold text-text-primary text-sm truncate">
              {sellerName}
            </h4>
            {verified && (
              <span className="inline-flex items-center text-success shrink-0" title="Vendeur vérifié par DiaO">
                <ShieldCheck className="h-4 w-4" />
              </span>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-[11px] text-text-secondary">
            <Star className="h-3 w-3 fill-rating text-rating shrink-0" />
            <span className="font-bold">{rating.toFixed(1)}</span>
            <span className="text-text-muted">Évaluation</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-[11px] text-text-muted">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{location}, Abidjan</span>
          </div>
        </div>
      </div>

      {/* Trust Info */}
      {verified && (
        <p className="text-[10px] text-success font-bold uppercase tracking-wider bg-success/5 border border-success/15 rounded-lg p-2 flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5" />
          <span>Boutique certifiée DiaO</span>
        </p>
      )}

      {/* Actions */}
      <div className="grid grid-cols-2 gap-3 pt-2">
        <button
          type="button"
          onClick={() => alert(`Redirection vers la boutique de ${sellerName} (Simulé)`)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 border border-border-light rounded-xl text-xs font-bold text-text-secondary hover:text-text-primary hover:bg-bg-light-secondary transition-all cursor-pointer"
        >
          <Store className="h-3.5 w-3.5" />
          <span>Boutique</span>
        </button>
        
        <button
          type="button"
          onClick={() => alert(`Lancement de la messagerie avec ${sellerName} (Simulé)`)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 border border-border-light rounded-xl text-xs font-bold text-text-secondary hover:text-text-primary hover:bg-bg-light-secondary transition-all cursor-pointer"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Contacter</span>
        </button>
      </div>

    </div>
  );
};
export default SellerCard;
