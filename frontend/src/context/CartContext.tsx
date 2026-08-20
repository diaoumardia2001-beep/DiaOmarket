/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import type { Product } from "../types/product";
import { parsePrice } from "../utils/price";

export interface CartItem {
  product: Product;
  quantity: number;
  selectedStorage?: string;
  selectedColor?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity: number, selectedStorage?: string, selectedColor?: string) => void;
  removeItem: (productId: string, selectedStorage?: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, quantity: number, selectedStorage?: string, selectedColor?: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const savedCart = localStorage.getItem("diao_cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch {
      return [];
    }
  });

  // Sync cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("diao_cart", JSON.stringify(items));
  }, [items]);

  // Add an item to the cart
  const addItem = (product: Product, quantity: number, selectedStorage?: string, selectedColor?: string) => {
    setItems((prevItems) => {
      // Find if item already exists with matching variations
      const existingIndex = prevItems.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedStorage === selectedStorage &&
          item.selectedColor === selectedColor
      );

      if (existingIndex > -1) {
        // Increment quantity
        const newItems = [...prevItems];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          quantity: newItems[existingIndex].quantity + quantity,
        };
        return newItems;
      }

      // Add as new line item
      return [...prevItems, { product, quantity, selectedStorage, selectedColor }];
    });
  };

  // Remove an item from the cart
  const removeItem = (productId: string, selectedStorage?: string, selectedColor?: string) => {
    setItems((prevItems) =>
      prevItems.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedStorage === selectedStorage &&
            item.selectedColor === selectedColor
          )
      )
    );
  };

  // Update item quantity
  const updateQuantity = (
    productId: string,
    quantity: number,
    selectedStorage?: string,
    selectedColor?: string
  ) => {
    if (quantity < 1) return; // Do not allow quantity under 1
    
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId &&
        item.selectedStorage === selectedStorage &&
        item.selectedColor === selectedColor
          ? { ...item, quantity }
          : item
      )
    );
  };

  // Clear all items from the cart
  const clearCart = () => {
    setItems([]);
  };

  // Compute total number of items
  const totalItems = useMemo(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  // Compute subtotal (value sum of unit prices * quantities)
  const subtotal = useMemo(() => {
    return items.reduce((sum, item) => {
      const priceNum = parsePrice(item.product.price);
      return sum + priceNum * item.quantity;
    }, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
export default CartContext;
