"use client";

import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "@/components/site/CartDrawer";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <SiteHeader />
      {children}
      <SiteFooter />
      <CartDrawer />
    </CartProvider>
  );
}
