import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, RefreshCw } from "lucide-react";
import { Container } from "../components/ui/Container";
import { ProductBreadcrumb } from "../components/product/ProductBreadcrumb";
import { ProductGallery } from "../components/product/ProductGallery";
import { ProductInfo } from "../components/product/ProductInfo";
import { SellerCard } from "../components/product/SellerCard";
import { DeliveryInfo } from "../components/product/DeliveryInfo";
import { ProductSpecifications } from "../components/product/ProductSpecifications";
import { ProductCard } from "../components/marketplace/ProductCard";
import { mockProducts } from "../data/products";

export const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find product by URL ID
  const product = useMemo(() => {
    return mockProducts.find((p) => p.id === id);
  }, [id]);

  // Find up to 4 similar products (excluding the current product)
  const similarProducts = useMemo(() => {
    if (!product) return [];
    return mockProducts
      .filter((p) => p.id !== product.id)
      .slice(0, 4);
  }, [product]);

  // Product not found layout
  if (!product) {
    return (
      <div className="bg-bg-light-secondary min-h-[75vh] flex items-center justify-center py-20">
        <Container className="text-center space-y-6">
          <div className="h-16 w-16 mx-auto rounded-full bg-danger/10 flex items-center justify-center text-danger">
            <RefreshCw className="h-8 w-8 animate-spin duration-3000" />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-h1 text-text-primary">Produit introuvable</h1>
            <p className="text-sm text-text-secondary max-w-sm mx-auto">
              Cette annonce n'est plus disponible ou n'existe pas.
            </p>
          </div>

          <Link
            to="/marketplace"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl shadow-sm transition-colors cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Retour à la Marketplace</span>
          </Link>
        </Container>
      </div>
    );
  }

  return (
    <div className="bg-bg-light-secondary min-h-screen py-8">
      <Container className="space-y-8">
        
        {/* Breadcrumb Header */}
        <ProductBreadcrumb productName={product.name} />

        {/* Main Details Area: Left Gallery, Right Commercial Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column — Gallery */}
          <div className="lg:col-span-7 w-full">
            <ProductGallery image={product.image} name={product.name} />
          </div>

          {/* Right Column — Info, Seller, & Delivery */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <ProductInfo product={product} />
            
            <SellerCard
              sellerName={product.seller}
              verified={product.verified}
              location={product.location}
              rating={product.rating}
            />

            <DeliveryInfo
              deliveryAvailable={product.deliveryAvailable}
              paymentOnDelivery={product.paymentOnDelivery}
            />
          </div>

        </div>

        {/* Description Section */}
        {product.description && (
          <div className="bg-bg-light border border-border-light rounded-2xl p-6 sm:p-8 space-y-4 text-left shadow-sm">
            <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider pb-3 border-b border-border-light-subtle">
              Description du produit
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed max-w-4xl whitespace-pre-line font-medium">
              {product.description}
            </p>
          </div>
        )}

        {/* Specifications Section */}
        <ProductSpecifications product={product} />

        {/* Similar Products (You Might Also Like) */}
        {similarProducts.length > 0 && (
          <div className="space-y-6 pt-6">
            <div className="text-left pb-3 border-b border-border-light">
              <h3 className="text-h2 text-text-primary tracking-tight">
                Vous pourriez aussi aimer
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {similarProducts.map((simProduct) => (
                <ProductCard key={simProduct.id} product={simProduct} />
              ))}
            </div>
          </div>
        )}

      </Container>
    </div>
  );
};
export default ProductDetails;
