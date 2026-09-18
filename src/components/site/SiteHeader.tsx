"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { HEADER_WHATSAPP_HREF, LOGO_SRC, NAV_LINKS } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const { itemCount, toggleDrawer } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <nav className="max-w-7xl mx-auto px-3 sm:px-6 md:px-12 h-16 md:h-24 flex items-center justify-between gap-2">
        <Link href="/" className="flex items-center gap-2 md:gap-3 py-1 min-w-0">
          <img
            src={LOGO_SRC}
            alt=""
            className="h-11 md:h-16 w-auto object-contain drop-shadow-sm shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-bold text-[17px] leading-tight md:text-2xl tracking-tight text-primary font-headline truncate">
              Millet Bakes
            </span>
            <span className="text-[9px] md:text-[10px] tracking-widest uppercase font-semibold text-secondary truncate">
              Ancient Grain Craft
            </span>
          </div>
        </Link>
        <div className="hidden md:flex items-center gap-5 lg:gap-8 font-medium text-sm text-on-surface-variant">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  active
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "hover:text-secondary transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-1.5 sm:gap-3 md:gap-4 shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-primary hover:text-secondary transition-colors"
            aria-label="Shopping Bag"
            onClick={toggleDrawer}
          >
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            <span className="absolute top-1 right-1 bg-secondary text-on-secondary text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {itemCount}
            </span>
          </button>
          <a
            href={HEADER_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-primary hover:text-secondary transition-colors"
            aria-label="WhatsApp Order"
          >
            <span className="material-symbols-outlined text-2xl">chat</span>
          </a>
          <a
            href={HEADER_WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-container text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-sm hover:shadow transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>WhatsApp Order</span>
          </a>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center min-h-11 min-w-11 p-2 text-primary hover:text-secondary transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
      {menuOpen ? (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-4 py-4 flex flex-col gap-1 font-medium text-sm text-on-surface-variant">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`min-h-11 flex items-center px-2 rounded-lg ${
                pathname === link.href ? "text-secondary font-bold" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      ) : null}
    </header>
  );
}
