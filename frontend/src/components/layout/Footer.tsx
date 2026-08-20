import React from "react";
import { Container } from "../ui/Container";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark border-t border-border-dark text-text-on-dark-secondary py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-border-dark">
          
          {/* Logo Column */}
          <div className="md:col-span-2 lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark shadow-sm shadow-brand-orange/20">
                <span className="text-white font-extrabold text-lg italic">D</span>
              </div>
              <span className="font-extrabold text-text-on-dark text-xl tracking-tight leading-none">
                Dia<span className="text-brand-orange">O</span>
              </span>
            </div>
            <p className="text-xs text-text-on-dark-muted font-medium">
              Tout se trouve. Tout se vend.
            </p>
            <p className="text-xs text-text-on-dark-muted max-w-md">
              La marketplace de confiance en Côte d'Ivoire pour acheter et vendre des smartphones et accessoires en toute sécurité.
            </p>
          </div>

          {/* Column 1: Acheter */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-text-on-dark mb-4">Acheter</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Marketplace
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Téléphones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Accessoires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Comment acheter ?
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Vendre */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold text-text-on-dark mb-4">Vendre</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Devenir Vendeur
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Créer ma Boutique
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Règles de vente
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: À propos */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold text-text-on-dark mb-4">À propos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Qui sommes-nous ?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Conditions Générales
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-text-on-dark transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-on-dark-muted">
          <span>© 2026 DiaO. Tous droits réservés.</span>
          
          {/* Country indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-bg-surface border border-border-dark text-text-on-dark-secondary">
            <span className="text-sm">🇨🇮</span>
            <span className="font-semibold text-[10px]">Côte d'Ivoire (FCFA)</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
