import React from "react";
import { ShieldCheck, Lock, Truck } from "lucide-react";
import { Container } from "../ui/Container";

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-bg-dark overflow-hidden min-h-[80vh] flex items-center border-b border-border-dark">
      {/* Decorative Halo & Glow Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-60">
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/20 blur-[130px] animate-pulse duration-[8000ms]" />
        <div className="absolute bottom-1/4 right-[30%] w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[120px]" />
      </div>

      <Container className="relative z-content py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Text & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Generation Badge */}
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-primary-subtle text-primary-light border border-primary/25">
              Marketplace tech nouvelle génération
            </span>

            {/* Main Headline */}
            <h1 className="text-display text-text-on-dark tracking-tight leading-[1.1] max-w-2xl">
              Le smartphone idéal,<br />
              <span className="gradient-text-hero">au meilleur prix.</span>
            </h1>

            {/* Description */}
            <p className="text-text-on-dark-secondary text-base sm:text-lg max-w-lg leading-relaxed font-medium">
              Découvrez les meilleures offres de smartphones auprès de vendeurs vérifiés en Côte d’Ivoire.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <button className="flex items-center justify-center px-8 py-4 rounded-md text-sm font-bold text-white bg-primary hover:bg-primary-dark shadow-card-hover hover:shadow-primary/20 active:scale-98 transition-all cursor-pointer">
                Explorer la Marketplace
              </button>
              <button className="flex items-center justify-center px-8 py-4 rounded-md text-sm font-bold text-text-on-dark bg-bg-surface border border-border-dark hover:bg-bg-surface-secondary active:scale-98 transition-all cursor-pointer">
                Devenir vendeur
              </button>
            </div>

            {/* Trust Assurance (3 elements maximum) */}
            <div className="pt-8 border-t border-border-dark/60 w-full max-w-md">
              <div className="grid grid-cols-3 gap-2 text-text-on-dark-secondary">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-success shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase">Vendeurs vérifiés</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-4 w-4 text-brand-orange shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase">Paiement sécurisé</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-secondary-light shrink-0" />
                  <span className="text-[10px] sm:text-xs font-semibold tracking-wide uppercase">Livraison dispo</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column — Phone Showcase & Floating Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5] flex items-center justify-center select-none">
              
              {/* Subtle radial shadow behind the phone */}
              <div className="absolute w-[80%] h-[80%] bg-black/40 rounded-full blur-[80px] z-0" />

              {/* iPhone Image Showcase */}
              <img
                src="/hero_iphone.jpg"
                alt="Showcase iPhone"
                className="w-full h-full object-contain relative z-content animate-float"
              />

              {/* Floating Glassmorphic Product Card */}
              <div className="absolute bottom-16 -left-4 md:-left-8 z-navigation bg-bg-surface/85 backdrop-blur-md border border-border-dark rounded-xl p-4 shadow-xl w-48 animate-float-delayed">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-text-on-dark">iPhone 16 Pro</span>
                    <span className="h-2 w-2 rounded-full bg-success shadow-sm shadow-success/50" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-brand-orange">649 000 FCFA</span>
                  </div>
                  <div className="flex items-center gap-1.5 pt-1 border-t border-border-dark/60">
                    <div className="h-4 w-4 rounded-full bg-success/15 flex items-center justify-center">
                      <ShieldCheck className="h-2.5 w-2.5 text-success" />
                    </div>
                    <span className="text-[9px] font-bold text-success uppercase tracking-wide">Vendeur vérifié</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};
export default Hero;
