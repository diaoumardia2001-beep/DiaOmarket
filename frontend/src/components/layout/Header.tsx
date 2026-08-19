import React, { useState } from "react";
import { Search, Heart, ShoppingBag, Menu, X, User } from "lucide-react";
import { Container } from "../ui/Container";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bg-dark border-b border-border-dark py-4 sticky top-0 z-navigation">
      <Container>
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange to-brand-orange-dark shadow-sm shadow-brand-orange/20">
              <span className="text-white font-extrabold text-lg italic">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-text-on-dark text-xl tracking-tight leading-none">
                Dia<span className="text-brand-orange">O</span>
              </span>
              <span className="text-[9px] text-text-on-dark-muted font-medium tracking-wide mt-0.5">
                Tout se trouve. Tout se vend.
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-text-on-dark text-sm font-semibold hover:text-primary-light transition-colors"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-text-on-dark-secondary text-sm font-medium hover:text-text-on-dark transition-colors"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-text-on-dark-secondary text-sm font-medium hover:text-text-on-dark transition-colors"
            >
              Boutiques
            </a>
          </nav>

          {/* Desktop Right Zone (Search & Actions) */}
          <div className="hidden md:flex items-center gap-6 grow justify-end max-w-2xl">
            {/* Search Bar */}
            <div className="relative w-full max-w-xs lg:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-text-on-dark-muted" />
              </span>
              <input
                type="text"
                placeholder="Rechercher sur DiaO..."
                className="w-full pl-9 pr-4 py-2 bg-bg-surface border border-border-dark rounded-md text-xs font-medium text-text-on-dark placeholder-text-on-dark-muted focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {/* Icons Actions */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Favoris */}
              <button
                className="p-2 text-text-on-dark-secondary hover:text-text-on-dark transition-colors relative cursor-pointer"
                aria-label="Favoris"
              >
                <Heart className="h-5 w-5" />
              </button>

              {/* Panier */}
              <button
                className="p-2 text-text-on-dark-secondary hover:text-text-on-dark transition-colors relative cursor-pointer"
                aria-label="Panier"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[8px] font-extrabold text-white">
                  1
                </span>
              </button>

              {/* Connexion */}
              <button className="flex items-center gap-2 px-4 py-2 border border-border-dark rounded-md text-xs font-semibold text-text-on-dark bg-bg-surface hover:bg-bg-surface-secondary transition-all active:scale-98 cursor-pointer">
                <User className="h-3.5 w-3.5" />
                <span>Se connecter</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions & Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              className="p-2 text-text-on-dark-secondary"
              aria-label="Panier"
            >
              <ShoppingBag className="h-5 w-5" />
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-text-on-dark-secondary hover:text-text-on-dark focus:outline-none cursor-pointer"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-border-dark mt-4 py-4 px-4 space-y-4 animate-fadeIn">
          {/* Mobile Search */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-text-on-dark-muted" />
            </span>
            <input
              type="text"
              placeholder="Rechercher sur DiaO..."
              className="w-full pl-9 pr-4 py-2 bg-bg-dark border border-border-dark rounded-md text-xs font-medium text-text-on-dark placeholder-text-on-dark-muted focus:outline-none"
            />
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col gap-3">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-semibold text-text-on-dark bg-bg-surface-secondary"
            >
              Accueil
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-text-on-dark-secondary hover:text-text-on-dark"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-text-on-dark-secondary hover:text-text-on-dark"
            >
              Boutiques
            </a>
          </nav>

          {/* Mobile CTA */}
          <div className="pt-4 border-t border-border-dark flex flex-col gap-2">
            <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border-dark rounded-md text-xs font-semibold text-text-on-dark bg-bg-dark hover:bg-bg-surface-secondary transition-all">
              <User className="h-3.5 w-3.5" />
              <span>Se connecter</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
