export interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  price: string;
  oldPrice?: string;
  condition: "Neuf" | "Occasion" | "Reconditionné";
  seller: string;
  verified: boolean;
  rating: number;
  location: "Cocody" | "Marcory" | "Plateau" | "Yopougon" | "Treichville";
  featured?: boolean;
  
  // Etape 6 Specs
  description?: string;
  storage?: string;
  ram?: string;
  color?: string;
  screen?: string;
  battery?: string;
  os?: string;
  network?: string;
  deliveryAvailable?: boolean;
  paymentOnDelivery?: boolean;
}
