"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { emailLead } from "@/lib/submit-lead-client";
import { formatINR, openWhatsApp } from "@/lib/site";

export function CartDrawer() {
  const { items, subtotal, packaging, drawerOpen, closeDrawer, changeQty } = useCart();
  const [sending, setSending] = useState(false);
  const activeItems = items.filter((item) => item.qty > 0);
  const total = subtotal + packaging.cost;

  async function checkout() {
    if (activeItems.length === 0) {
      window.alert("Please add at least one delicious bake to your order!");
      return;
    }

    const lines = activeItems
      .map((item, index) => `${index + 1}. ${item.name} (${item.spec}) x ${item.qty} = ${formatINR(item.price * item.qty)}`)
      .join("\n");
    const estimated = formatINR(total);
    const message = `*NEW ORDER - MILLET BAKES*\n\n*Items Ordered:*\n${lines}\n\n*Packaging:* ${packaging.label} (+${formatINR(packaging.cost)})\n*Estimated Total:* ${estimated}\n\nKindly confirm dispatch slot & share payment QR code. Thank you!`;

    setSending(true);
    try {
      await emailLead({
        type: "order",
        subject: "Website cart order",
        fields: {
          Items: lines,
          Packaging: `${packaging.label} (+${formatINR(packaging.cost)})`,
          "Estimated total": estimated,
        },
      });
      openWhatsApp(message);
      closeDrawer();
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not send the order email. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (!drawerOpen) return null;

  return (
    <div
      aria-labelledby="slide-over-title"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
    >
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />
      <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="pointer-events-auto w-screen max-w-md bg-surface-container-lowest p-6 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">shopping_basket</span>
                <h2 id="slide-over-title" className="font-title-lg text-title-lg text-primary">
                  Your Fresh Order
                </h2>
              </div>
              <button
                type="button"
                className="p-2 rounded-full hover:bg-surface-container text-on-surface-variant"
                onClick={closeDrawer}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="py-6 space-y-4 font-body-sm text-body-sm max-h-[614px] overflow-y-auto">
              {activeItems.length === 0 ? (
                <p className="text-xs text-outline py-4 text-center">
                  Your oven basket is currently empty. Add fresh bakes from the menu!
                </p>
              ) : (
                activeItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-2 border-b border-outline-variant/20"
                  >
                    <div>
                      <span className="font-bold text-primary">{item.name}</span>
                      <div className="text-xs text-on-surface-variant">
                        {formatINR(item.price)} x {item.qty}
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          type="button"
                          className="w-6 h-6 rounded-full bg-surface-container hover:bg-surface-variant"
                          onClick={() => changeQty(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="w-5 text-center font-bold">{item.qty}</span>
                        <button
                          type="button"
                          className="w-6 h-6 rounded-full bg-primary text-background"
                          onClick={() => changeQty(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <span className="font-bold">{formatINR(item.price * item.qty)}</span>
                  </div>
                ))
              )}
            </div>
          </div>
          <div className="pt-6 border-t border-outline-variant/30 space-y-4">
            <div className="flex justify-between items-baseline font-title-lg text-lg text-primary">
              <span>Total Value</span>
              <span className="font-bold text-xl">{formatINR(total)}</span>
            </div>
            <button
              type="button"
              className="w-full py-3.5 rounded-full bg-secondary text-on-secondary hover:bg-on-secondary-container transition font-label-md text-label-md font-bold flex items-center justify-center gap-2 disabled:opacity-60"
              disabled={sending}
              onClick={checkout}
            >
              <span className="material-symbols-outlined text-sm">send</span>
              <span>{sending ? "Sending…" : "Checkout on WhatsApp"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
