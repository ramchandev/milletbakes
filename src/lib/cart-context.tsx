"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PRODUCTS, resolveProduct, type Product } from "@/lib/catalog";

export type CartItem = Product & { qty: number };

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  packaging: { label: string; cost: number };
  setPackaging: (label: string, cost: number) => void;
  addItem: (name: string, price?: number, spec?: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  changeQty: (id: string, delta: number) => void;
  phone: string;
  setPhone: (phone: string) => void;
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [packaging, setPackagingState] = useState({
    label: "Eco Kraft Box",
    cost: 0,
  });
  const [phone, setPhone] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const addItem = useCallback((name: string, price?: number, spec?: string, qty = 1) => {
    const product = resolveProduct(name, price, spec);
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id || item.name === product.name);
      if (existing) {
        return current.map((item) =>
          item.id === existing.id ? { ...item, qty: item.qty + qty } : item,
        );
      }
      return [...current, { ...product, qty }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    const nextQty = Math.max(0, qty);
    setItems((current) => {
      const existing = current.find((item) => item.id === id);
      if (!existing) {
        const product = PRODUCTS.find((item) => item.id === id);
        if (!product || nextQty === 0) return current;
        return [...current, { ...product, qty: nextQty }];
      }
      if (nextQty === 0) {
        return current.filter((item) => item.id !== id);
      }
      return current.map((item) =>
        item.id === id ? { ...item, qty: nextQty } : item,
      );
    });
  }, []);

  const changeQty = useCallback((id: string, delta: number) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (item.id !== id) return [item];
        const nextQty = Math.max(0, item.qty + delta);
        return nextQty === 0 ? [] : [{ ...item, qty: nextQty }];
      }),
    );
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const itemCount = items.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
    return {
      items,
      itemCount,
      subtotal,
      packaging,
      setPackaging: (label, cost) => setPackagingState({ label, cost }),
      addItem,
      setQty,
      changeQty,
      phone,
      setPhone,
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      toggleDrawer: () => setDrawerOpen((open) => !open),
    };
  }, [addItem, changeQty, drawerOpen, items, packaging, phone, setQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
