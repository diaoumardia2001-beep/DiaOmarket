import React, { useState, useMemo } from "react";
import { SlidersHorizontal, RotateCcw, X, Check, Search } from "lucide-react";
import { Container } from "../components/ui/Container";
import { ProductCard } from "../components/marketplace/ProductCard";
import { mockProducts } from "../data/products";
import type { Product } from "../types/product";

type PriceRange = "all" | "under-200" | "200-400" | "400-600" | "over-600";
type SortOption = "pertinence" | "prix-croissant" | "prix-decroissant" | "mieux-notes";

export const Marketplace: React.FC = () => {
  // Search & Navigation States
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Tous");
  
  // Sidebar Filters States
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCondition, setSelectedCondition] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange>("all");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  
  // Sort State
  const [sortBy, setSortBy] = useState<SortOption>("pertinence");

  // Responsive Mobile Filters Toggle
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Parse price string to number for sorting and price range filtering
  const getNumericPrice = (priceStr: string): number => {
    return parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
  };

  // Filter Logic
  const filteredProducts = useMemo<Product[]>(() => {
    return mockProducts.filter((product) => {
      // 1. Search Query (matches name, brand, seller)
      if (searchQuery.trim() !== "") {
        const query = searchQuery.toLowerCase();
        const matchesQuery =
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.seller.toLowerCase().includes(query);
        if (!matchesQuery) return false;
      }

      // 2. Quick Category Chips
      if (activeCategory !== "Tous") {
        if (activeCategory === "iPhone" && product.brand !== "Apple") return false;
        if (activeCategory === "Samsung" && product.brand !== "Samsung") return false;
        if (activeCategory === "Pixel" && product.brand !== "Google") return false;
        if (activeCategory === "Xiaomi" && product.brand !== "Xiaomi") return false;
      }

      // 3. Sidebar Brand
      if (selectedBrand && product.brand !== selectedBrand) return false;

      // 4. Sidebar Condition
      if (selectedCondition && product.condition !== selectedCondition) return false;

      // 5. Sidebar Verified Seller
      if (verifiedOnly && !product.verified) return false;

      // 6. Sidebar Location
      if (selectedLocation && product.location !== selectedLocation) return false;

      // 7. Sidebar Price Range
      if (selectedPriceRange !== "all") {
        const price = getNumericPrice(product.price);
        if (selectedPriceRange === "under-200" && price >= 200000) return false;
        if (selectedPriceRange === "200-400" && (price < 200000 || price > 400000)) return false;
        if (selectedPriceRange === "400-600" && (price < 400000 || price > 600000)) return false;
        if (selectedPriceRange === "over-600" && price <= 600000) return false;
      }

      return true;
    });
  }, [searchQuery, activeCategory, selectedBrand, selectedCondition, verifiedOnly, selectedLocation, selectedPriceRange]);

  // Sorting Logic
  const sortedProducts = useMemo<Product[]>(() => {
    const productsCopy = [...filteredProducts];
    if (sortBy === "prix-croissant") {
      return productsCopy.sort((a, b) => getNumericPrice(a.price) - getNumericPrice(b.price));
    }
    if (sortBy === "prix-decroissant") {
      return productsCopy.sort((a, b) => getNumericPrice(b.price) - getNumericPrice(a.price));
    }
    if (sortBy === "mieux-notes") {
      return productsCopy.sort((a, b) => b.rating - a.rating);
    }
    return productsCopy; // pertinence (default order)
  }, [filteredProducts, sortBy]);

  // Reset Filters Function
  const handleResetFilters = () => {
    setSearchQuery("");
    setActiveCategory("Tous");
    setSelectedBrand(null);
    setSelectedCondition(null);
    setSelectedPriceRange("all");
    setVerifiedOnly(false);
    setSelectedLocation(null);
    setSortBy("pertinence");
  };

  // Remove a single active filter chip
  const removeFilter = (filterType: string) => {
    if (filterType === "brand") setSelectedBrand(null);
    if (filterType === "condition") setSelectedCondition(null);
    if (filterType === "price") setSelectedPriceRange("all");
    if (filterType === "verified") setVerifiedOnly(false);
    if (filterType === "location") setSelectedLocation(null);
    if (filterType === "category") setActiveCategory("Tous");
    if (filterType === "search") setSearchQuery("");
  };

  // Determine if any filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      searchQuery !== "" ||
      activeCategory !== "Tous" ||
      selectedBrand !== null ||
      selectedCondition !== null ||
      selectedPriceRange !== "all" ||
      verifiedOnly ||
      selectedLocation !== null
    );
  }, [searchQuery, activeCategory, selectedBrand, selectedCondition, selectedPriceRange, verifiedOnly, selectedLocation]);

  return (
    <div className="bg-bg-light-secondary min-h-screen py-10">
      <Container className="space-y-8">
        
        {/* Marketplace Header */}
        <div className="space-y-4 border-b border-border-light pb-6 text-left">
          <div className="space-y-1.5">
            {/* Breadcrumb */}
            <div className="text-[10px] sm:text-xs font-bold text-text-muted uppercase tracking-wider">
              Accueil / <span className="text-primary-light">Marketplace</span>
            </div>
            <h1 className="text-h1 text-text-primary tracking-tight">Marketplace</h1>
            <p className="w-full text-text-secondary text-sm font-medium">
              Trouvez le smartphone qui vous correspond parmi les offres disponibles sur DiaO.
            </p>
          </div>

          {/* Prominent Search Bar */}
          <div className="relative w-full max-w-2xl">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <Search className="h-5 w-5 text-text-muted" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un smartphone, une marque ou une boutique..."
              className="w-full pl-11 pr-10 py-3.5 bg-bg-light border border-border-light rounded-xl text-xs sm:text-sm font-medium text-text-primary placeholder-text-muted focus:outline-none focus:border-primary transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-text-muted hover:text-text-primary cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>

        {/* Toolbar & Active Chips */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4 bg-bg-light border border-border-light rounded-xl p-4 shadow-sm">
            
            {/* Quick Category Chips */}
            <div className="flex flex-wrap gap-2">
              {["Tous", "iPhone", "Samsung", "Pixel", "Xiaomi"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-bg-light-secondary text-text-secondary border border-border-light hover:bg-border-light-subtle"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sorting & Mobile Filters Toggle */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              
              {/* Mobile Filter Button */}
              <button
                type="button"
                onClick={() => setShowMobileFilters(!showMobileFilters)}
                className="flex lg:hidden items-center gap-2 px-4 py-2 border border-border-light rounded-lg text-xs font-bold text-text-secondary bg-bg-light hover:bg-bg-light-secondary cursor-pointer"
              >
                <SlidersHorizontal className="h-4 w-4" />
                <span>Filtres</span>
              </button>

              {/* Sorting Select */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-text-muted whitespace-nowrap">Trier par :</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="bg-bg-light border border-border-light rounded-lg px-3 py-2 text-xs font-bold text-text-secondary focus:outline-none focus:border-primary cursor-pointer"
                >
                  <option value="pertinence">Pertinence</option>
                  <option value="prix-croissant">Prix croissant</option>
                  <option value="prix-decroissant">Prix décroissant</option>
                  <option value="mieux-notes">Mieux notés</option>
                </select>
              </div>

            </div>
          </div>

          {/* Active Filters Chips Area */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center gap-2 pt-1 text-left">
              <span className="text-xs font-bold text-text-muted">Filtres actifs :</span>
              
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Recherche : {searchQuery}
                  <button type="button" onClick={() => removeFilter("search")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {activeCategory !== "Tous" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Catégorie : {activeCategory}
                  <button type="button" onClick={() => removeFilter("category")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {selectedBrand && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Marque : {selectedBrand}
                  <button type="button" onClick={() => removeFilter("brand")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {selectedCondition && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  État : {selectedCondition}
                  <button type="button" onClick={() => removeFilter("condition")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {selectedPriceRange !== "all" && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Prix : {
                    selectedPriceRange === "under-200" ? "Moins de 200 000 FCFA" :
                    selectedPriceRange === "200-400" ? "200 000 – 400 000 FCFA" :
                    selectedPriceRange === "400-600" ? "400 000 – 600 000 FCFA" : "Plus de 600 000 FCFA"
                  }
                  <button type="button" onClick={() => removeFilter("price")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {verifiedOnly && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Vendeurs vérifiés
                  <button type="button" onClick={() => removeFilter("verified")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              {selectedLocation && (
                <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary-subtle text-primary border border-primary/20 rounded-full text-[10px] font-bold">
                  Commune : {selectedLocation}
                  <button type="button" onClick={() => removeFilter("location")} className="hover:text-primary-dark">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}

              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-[10px] font-extrabold text-danger hover:underline ml-2"
              >
                <RotateCcw className="h-3 w-3" />
                <span>Tout effacer</span>
              </button>
            </div>
          )}
        </div>

        {/* Main Grid Section (Sidebar + Product Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Filters Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 bg-bg-light border border-border-light rounded-xl p-5 shadow-sm text-left">
            <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider pb-3 border-b border-border-light-subtle">
              Filtres
            </h2>

            {/* Brand Filter */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-text-secondary uppercase">Marque</h3>
              <div className="flex flex-col gap-2">
                {["Apple", "Samsung", "Google", "Xiaomi"].map((brand) => (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                    className="flex items-center justify-between text-left text-xs font-semibold text-text-secondary hover:text-text-primary py-1 transition-colors cursor-pointer"
                  >
                    <span>{brand}</span>
                    {selectedBrand === brand && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Condition Filter */}
            <div className="space-y-3 pt-4 border-t border-border-light-subtle">
              <h3 className="text-xs font-bold text-text-secondary uppercase">État</h3>
              <div className="flex flex-col gap-2">
                {["Neuf", "Reconditionné", "Occasion"].map((cond) => (
                  <button
                    key={cond}
                    type="button"
                    onClick={() => setSelectedCondition(selectedCondition === cond ? null : cond)}
                    className="flex items-center justify-between text-left text-xs font-semibold text-text-secondary hover:text-text-primary py-1 transition-colors cursor-pointer"
                  >
                    <span>{cond}</span>
                    {selectedCondition === cond && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="space-y-3 pt-4 border-t border-border-light-subtle">
              <h3 className="text-xs font-bold text-text-secondary uppercase">Prix</h3>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Tous les prix", value: "all" },
                  { label: "Moins de 200k FCFA", value: "under-200" },
                  { label: "200k - 400k FCFA", value: "200-400" },
                  { label: "400k - 600k FCFA", value: "400-600" },
                  { label: "Plus de 600k FCFA", value: "over-600" },
                ].map((range) => (
                  <button
                    key={range.value}
                    type="button"
                    onClick={() => setSelectedPriceRange(range.value as PriceRange)}
                    className="flex items-center justify-between text-left text-xs font-semibold text-text-secondary hover:text-text-primary py-1 transition-colors cursor-pointer"
                  >
                    <span>{range.label}</span>
                    {selectedPriceRange === range.value && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="space-y-3 pt-4 border-t border-border-light-subtle">
              <h3 className="text-xs font-bold text-text-secondary uppercase">Commune</h3>
              <div className="flex flex-col gap-2">
                {["Cocody", "Marcory", "Plateau", "Yopougon", "Treichville"].map((loc) => (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => setSelectedLocation(selectedLocation === loc ? null : loc)}
                    className="flex items-center justify-between text-left text-xs font-semibold text-text-secondary hover:text-text-primary py-1 transition-colors cursor-pointer"
                  >
                    <span>{loc}</span>
                    {selectedLocation === loc && <Check className="h-4 w-4 text-primary shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Verified Seller Toggle */}
            <div className="pt-4 border-t border-border-light-subtle">
              <label className="flex items-center gap-2 text-xs font-bold text-text-primary cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="rounded border-border-light text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                />
                <span>Vendeurs vérifiés uniquement</span>
              </label>
            </div>
          </aside>

          {/* Mobile Filters Dropdown Container */}
          {showMobileFilters && (
            <div className="lg:hidden col-span-1 bg-bg-light border border-border-light rounded-xl p-5 shadow-md space-y-6 text-left animate-fadeIn">
              <div className="flex items-center justify-between border-b border-border-light-subtle pb-3">
                <h2 className="text-sm font-bold text-text-primary uppercase tracking-wider">
                  Filtres
                </h2>
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 rounded-full hover:bg-bg-light-secondary text-text-muted"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Mobile Brand */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-text-secondary uppercase">Marque</h3>
                <div className="flex flex-wrap gap-2">
                  {["Apple", "Samsung", "Google", "Xiaomi"].map((brand) => (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => setSelectedBrand(selectedBrand === brand ? null : brand)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        selectedBrand === brand
                          ? "bg-primary text-white"
                          : "bg-bg-light-secondary text-text-secondary border border-border-light"
                      }`}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Condition */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-text-secondary uppercase">État</h3>
                <div className="flex flex-wrap gap-2">
                  {["Neuf", "Reconditionné", "Occasion"].map((cond) => (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => setSelectedCondition(selectedCondition === cond ? null : cond)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        selectedCondition === cond
                          ? "bg-primary text-white"
                          : "bg-bg-light-secondary text-text-secondary border border-border-light"
                      }`}
                    >
                      {cond}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Price */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-text-secondary uppercase">Prix</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Tous", value: "all" },
                    { label: "Moins de 200k", value: "under-200" },
                    { label: "200k - 400k", value: "200-400" },
                    { label: "400k - 600k", value: "400-600" },
                    { label: "Plus de 600k", value: "over-600" },
                  ].map((range) => (
                    <button
                      key={range.value}
                      type="button"
                      onClick={() => setSelectedPriceRange(range.value as PriceRange)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        selectedPriceRange === range.value
                          ? "bg-primary text-white"
                          : "bg-bg-light-secondary text-text-secondary border border-border-light"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Location */}
              <div className="space-y-2">
                <h3 className="text-xs font-bold text-text-secondary uppercase">Commune</h3>
                <div className="flex flex-wrap gap-2">
                  {["Cocody", "Marcory", "Plateau", "Yopougon", "Treichville"].map((loc) => (
                    <button
                      key={loc}
                      type="button"
                      onClick={() => setSelectedLocation(selectedLocation === loc ? null : loc)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                        selectedLocation === loc
                          ? "bg-primary text-white"
                          : "bg-bg-light-secondary text-text-secondary border border-border-light"
                      }`}
                    >
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Verified Toggle */}
              <div className="flex items-center gap-2 pt-2 border-t border-border-light-subtle">
                <input
                  type="checkbox"
                  id="mobile-verified"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="rounded border-border-light text-primary focus:ring-primary h-4 w-4 cursor-pointer"
                />
                <label htmlFor="mobile-verified" className="text-xs font-bold text-text-primary cursor-pointer select-none">
                  Vendeurs vérifiés uniquement
                </label>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowMobileFilters(false)}
                  className="w-full py-2.5 rounded-lg bg-primary text-white text-xs font-bold shadow-sm"
                >
                  Appliquer les filtres
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleResetFilters();
                    setShowMobileFilters(false);
                  }}
                  className="w-full py-2.5 rounded-lg border border-border-light text-text-secondary text-xs font-bold bg-bg-light"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          )}

          {/* Product Grid Area (Occupies remaining width) */}
          <div className="lg:col-span-9 space-y-6">
            
            {/* Products Count Indicator */}
            <div className="flex justify-between items-center text-xs font-bold text-text-muted text-left pl-1">
              <span>{sortedProducts.length} {sortedProducts.length > 1 ? "produits trouvés" : "produit trouvé"}</span>
            </div>

            {/* Grid display */}
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="flex flex-col items-center justify-center py-20 px-4 bg-bg-light border border-border-light rounded-2xl shadow-sm text-center space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary-subtle flex items-center justify-center text-primary">
                  <SlidersHorizontal className="h-6 w-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-text-primary">Aucun produit trouvé</h3>
                  <p className="text-xs text-text-secondary max-w-sm">
                    Essayez de modifier vos filtres, votre recherche ou de réinitialiser le catalogue.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border-light rounded-xl text-xs font-bold text-text-primary bg-bg-light hover:bg-bg-light-secondary transition-all cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Réinitialiser les filtres</span>
                </button>
              </div>
            )}

          </div>

        </div>

      </Container>
    </div>
  );
};
export default Marketplace;
