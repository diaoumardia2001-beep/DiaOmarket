import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface ProductBreadcrumbProps {
  productName: string;
}

export const ProductBreadcrumb: React.FC<ProductBreadcrumbProps> = ({
  productName,
}) => {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-text-secondary select-none text-left">
      <Link to="/" className="hover:text-primary font-semibold transition-colors">
        Accueil
      </Link>
      <ChevronRight className="h-3 w-3 text-text-muted shrink-0" />
      <Link
        to="/marketplace"
        className="hover:text-primary font-semibold transition-colors"
      >
        Marketplace
      </Link>
      <ChevronRight className="h-3 w-3 text-text-muted shrink-0" />
      <span className="text-text-muted font-bold truncate max-w-[200px] sm:max-w-none">
        {productName}
      </span>
    </nav>
  );
};
export default ProductBreadcrumb;
