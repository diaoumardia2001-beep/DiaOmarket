import React, { useState } from "react";

interface ProductGalleryProps {
  image: string;
  name: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({
  image,
  name,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Simulated gallery images using the primary product image
  const galleryImages = [image, image, image];

  return (
    <div className="space-y-4 w-full">
      {/* Main Image View */}
      <div className="aspect-square w-full rounded-2xl bg-bg-light-secondary border border-border-light flex items-center justify-center p-8 sm:p-12 shadow-sm relative">
        <img
          src={galleryImages[activeImageIndex]}
          alt={`${name} - Vue ${activeImageIndex + 1}`}
          className="max-h-full max-w-full object-contain transition-all duration-300 select-none"
        />
      </div>

      {/* Miniatures List */}
      <div className="flex gap-3 justify-center">
        {galleryImages.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setActiveImageIndex(idx)}
            className={`w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-bg-light-secondary border-2 flex items-center justify-center p-3 transition-all cursor-pointer ${
              activeImageIndex === idx
                ? "border-primary shadow-sm"
                : "border-border-light hover:border-text-muted"
            }`}
            aria-label={`Voir l'image ${idx + 1}`}
          >
            <img
              src={img}
              alt=""
              className="max-h-full max-w-full object-contain select-none"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
export default ProductGallery;
