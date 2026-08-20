import React from "react";
import { Truck, HandCoins, Building2, ShieldAlert } from "lucide-react";

interface DeliveryInfoProps {
  deliveryAvailable?: boolean;
  paymentOnDelivery?: boolean;
}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  deliveryAvailable = true,
  paymentOnDelivery = true,
}) => {
  return (
    <div className="bg-bg-light border border-border-light rounded-2xl p-5 space-y-4 shadow-sm text-left">
      <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider pb-2 border-b border-border-light-subtle">
        Livraison & Retrait
      </h3>

      <div className="space-y-3.5">
        {/* Delivery Item */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg shrink-0 ${deliveryAvailable ? "bg-primary-subtle text-primary" : "bg-bg-light-secondary text-text-muted"}`}>
            <Truck className="h-4.5 w-4.5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-extrabold text-text-primary">
              {deliveryAvailable ? "Livraison à domicile" : "Livraison non disponible"}
            </h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              {deliveryAvailable
                ? "Disponible partout à Abidjan et communes intérieures en 24h à 48h."
                : "Ce vendeur ne propose pas de service de livraison."}
            </p>
          </div>
        </div>

        {/* Payment on Delivery Item */}
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg shrink-0 ${paymentOnDelivery && deliveryAvailable ? "bg-success/15 text-success" : "bg-bg-light-secondary text-text-muted"}`}>
            <HandCoins className="h-4.5 w-4.5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-extrabold text-text-primary">
              {paymentOnDelivery && deliveryAvailable ? "Paiement à la livraison" : "Paiement sécurisé requis"}
            </h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              {paymentOnDelivery && deliveryAvailable
                ? "Payez en espèces ou mobile money uniquement au moment de recevoir votre colis."
                : "Paiement en ligne ou dépôt requis selon les conditions du vendeur."}
            </p>
          </div>
        </div>

        {/* Physical Shop/Store Pickup Item */}
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-secondary-light/10 text-secondary shrink-0">
            <Building2 className="h-4.5 w-4.5" />
          </div>
          <div className="space-y-0.5">
            <h4 className="text-xs font-extrabold text-text-primary">
              Retrait direct en boutique
            </h4>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Récupérez directement votre commande auprès du vendeur pour économiser les frais de port.
            </p>
          </div>
        </div>
      </div>

      {/* Safety assurance */}
      <div className="pt-3 border-t border-border-light-subtle flex items-start gap-2 text-[10px] text-text-muted leading-tight font-medium">
        <ShieldAlert className="h-4 w-4 text-brand-orange shrink-0 mt-0.5" />
        <span>Vérifiez toujours le smartphone avec le vendeur avant d'effectuer tout paiement.</span>
      </div>

    </div>
  );
};
export default DeliveryInfo;
