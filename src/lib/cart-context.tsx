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
  drawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  toggleDrawer: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STARTER_ITEMS: CartItem[] = PRODUCTS.slice(0, 3).map((product, index) => ({
  ...product,
  qty: index === 2 ? 0 : 1,
}));

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(STARTER_ITEMS);
  const [packaging, setPackagingState] = useState({
    label: "Eco Kraft Box",
    cost: 0,
  });
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
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, qty) } : item,
      ),
    );
  }, []);

  const changeQty = useCallback((id: string, delta: number) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item,
      ),
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
      drawerOpen,
      openDrawer: () => setDrawerOpen(true),
      closeDrawer: () => setDrawerOpen(false),
      toggleDrawer: () => setDrawerOpen((open) => !open),
    };
  }, [addItem, changeQty, drawerOpen, items, packaging, setQty]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
