import React, { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
  User,
} from "lucide-react";
import { Container } from "../ui/Container";

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bg-dark border-b border-border-dark py-3 sticky top-0 z-navigation">
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Branding */}
          <a
            href="/"
            aria-label="Accueil DiaO"
            className="flex shrink-0 items-center"
          >
            <img
              src="/logo-DiaO-police-arrondie.png"
              alt="DiaO - Tout se trouve. Tout se vend."
              className="
                h-10
                sm:h-11
                lg:h-12
                w-auto
                max-w-[170px]
                sm:max-w-[190px]
                lg:max-w-[210px]
                object-contain
              "
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-text-on-dark text-sm font-semibold relative after:absolute after:-bottom-[18px] after:left-0 after:right-0 after:h-[2px] after:bg-primary transition-colors"
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

          {/* Desktop Right Zone */}
          <div className="hidden md:flex items-center gap-6 grow justify-end max-w-2xl">
            {/* Search Bar */}
            <div className="relative w-full max-w-xs lg:max-w-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-text-on-dark-muted" />
              </span>

              <input
                type="text"
                placeholder="Rechercher un smartphone, une marque..."
                className="
                  w-full
                  pl-9
                  pr-4
                  py-2
                  bg-bg-surface
                  border
                  border-border-dark
                  rounded-md
                  text-xs
                  font-medium
                  text-text-on-dark
                  placeholder-text-on-dark-muted
                  focus:outline-none
                  focus:border-primary
                  transition-colors
                "
              />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 shrink-0">
              {/* Favoris */}
              <button
                type="button"
                className="p-2 text-text-on-dark-secondary hover:text-text-on-dark transition-colors relative cursor-pointer"
                aria-label="Favoris"
              >
                <Heart className="h-5 w-5" />
              </button>

              {/* Panier */}
              <button
                type="button"
                className="p-2 text-text-on-dark-secondary hover:text-text-on-dark transition-colors relative cursor-pointer"
                aria-label="Panier"
              >
                <ShoppingBag className="h-5 w-5" />

                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[8px] font-extrabold text-white">
                  1
                </span>
              </button>

              {/* Connexion */}
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  border
                  border-border-dark
                  rounded-md
                  text-xs
                  font-semibold
                  text-text-on-dark
                  bg-bg-surface
                  hover:bg-bg-surface-secondary
                  transition-all
                  active:scale-95
                  cursor-pointer
                "
              >
                <User className="h-3.5 w-3.5" />
                <span>Se connecter</span>
              </button>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Cart */}
            <button
              type="button"
              className="p-2 text-text-on-dark-secondary hover:text-text-on-dark transition-colors relative"
              aria-label="Panier"
            >
              <ShoppingBag className="h-5 w-5" />

              <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[8px] font-extrabold text-white">
                1
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              className="p-2 text-text-on-dark-secondary hover:text-text-on-dark focus:outline-none cursor-pointer transition-colors"
              aria-label={
                isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-bg-surface border-t border-border-dark mt-3 py-4">
          <Container>
            <div className="space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-4 w-4 text-text-on-dark-muted" />
                </span>

                <input
                  type="text"
                  placeholder="Rechercher un smartphone, une marque..."
                  className="
                    w-full
                    pl-9
                    pr-4
                    py-2.5
                    bg-bg-dark
                    border
                    border-border-dark
                    rounded-md
                    text-xs
                    font-medium
                    text-text-on-dark
                    placeholder-text-on-dark-muted
                    focus:outline-none
                    focus:border-primary
                    transition-colors
                  "
                />
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                <a
                  href="#"
                  className="px-3 py-2.5 rounded-md text-sm font-semibold text-text-on-dark bg-bg-surface-secondary"
                >
                  Accueil
                </a>

                <a
                  href="#"
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-text-on-dark-secondary hover:text-text-on-dark hover:bg-bg-surface-secondary transition-colors"
                >
                  Marketplace
                </a>

                <a
                  href="#"
                  className="px-3 py-2.5 rounded-md text-sm font-medium text-text-on-dark-secondary hover:text-text-on-dark hover:bg-bg-surface-secondary transition-colors"
                >
                  Boutiques
                </a>
              </nav>

              {/* Mobile Secondary Actions */}
              <div className="pt-4 border-t border-border-dark flex flex-col gap-2">
                <button
                  type="button"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    py-2.5
                    border
                    border-border-dark
                    rounded-md
                    text-xs
                    font-semibold
                    text-text-on-dark
                    bg-bg-dark
                    hover:bg-bg-surface-secondary
                    transition-all
                  "
                >
                  <Heart className="h-4 w-4" />
                  <span>Mes favoris</span>
                </button>

                <button
                  type="button"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    px-4
                    py-2.5
                    border
                    border-border-dark
                    rounded-md
                    text-xs
                    font-semibold
                    text-text-on-dark
                    bg-bg-dark
                    hover:bg-bg-surface-secondary
                    transition-all
                  "
                >
                  <User className="h-4 w-4" />
                  <span>Se connecter</span>
                </button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};