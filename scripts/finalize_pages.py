#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
GEN = ROOT / "src" / "generated"
OUT = ROOT / "src" / "components" / "pages"
OUT.mkdir(parents=True, exist_ok=True)

FILL_STYLE = '{ fontVariationSettings: \'"FILL" 1\' }'


def body_of(name: str) -> str:
    text = (GEN / name).read_text()
    start = text.find("return (\n    <>") + len("return (\n    <>")
    end = text.rfind("    </>\n  );")
    body = text[start:end]
    body = body.replace(
        'style="font-variation-settings: &quot;FILL&quot; 1;"',
        f"style={FILL_STYLE}",
    )
    body = body.replace(
        "style=\"font-variation-settings: 'FILL' 1;\"",
        f"style={FILL_STYLE}",
    )
    body = re.sub(
        r"onClick=\{\(\) => dispatchWhatsAppOrder\(\); toggleCartDrawer\(\)\}",
        "onClick={() => { dispatchWhatsAppOrder(); }}",
        body,
    )
    return body


home_body = body_of("HomeMarkup.tsx")
home_body = re.sub(
    r"\{/\* CART FLYOUT DRAWER \(MODAL OVERLAY\) \*/\}.*?\{/\* FOOTER COMPONENT \*/\}",
    "",
    home_body,
    flags=re.S,
)
home_body = home_body.replace(
    '<span className="w-6 text-center font-bold font-title-lg text-sm" id="qty-ragi">1</span>',
    '<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.ragi}</span>',
)
home_body = home_body.replace(
    '<span className="w-6 text-center font-bold font-title-lg text-sm" id="qty-granola">1</span>',
    '<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.granola}</span>',
)
home_body = home_body.replace(
    '<span className="w-6 text-center font-bold font-title-lg text-sm" id="qty-wellness">0</span>',
    '<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.wellness}</span>',
)
home_body = home_body.replace(
    '<span id="sum-qty-ragi" className="">1</span>',
    '<span className="">{qty.ragi}</span>',
)
home_body = home_body.replace(
    '<span className="font-semibold text-primary" id="sum-val-ragi">₹280</span>',
    '<span className="font-semibold text-primary">{formatINR(qty.ragi * 280)}</span>',
)
home_body = home_body.replace(
    '<span id="sum-qty-granola" className="">1</span>',
    '<span className="">{qty.granola}</span>',
)
home_body = home_body.replace(
    '<span className="font-semibold text-primary" id="sum-val-granola">₹350</span>',
    '<span className="font-semibold text-primary">{formatINR(qty.granola * 350)}</span>',
)
home_body = home_body.replace(
    '<span id="sum-qty-wellness" className="">0</span>',
    '<span className="">{qty.wellness}</span>',
)
home_body = home_body.replace(
    '<span className="font-semibold text-primary" id="sum-val-wellness">₹0</span>',
    '<span className="font-semibold text-primary">{formatINR(qty.wellness * 650)}</span>',
)
home_body = home_body.replace(
    '<span className="font-headline-md text-headline-md text-primary font-extrabold" id="total-price">₹630</span>',
    '<span className="font-headline-md text-headline-md text-primary font-extrabold">{formatINR(hamperTotal)}</span>',
)
home_body = home_body.replace(
    '<textarea className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm placeholder:text-outline" id="order-note" placeholder="e.g. Happy Birthday Deepa! Enjoy these pure ragi treats from Chennai." rows="2"></textarea>',
    '<textarea className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm placeholder:text-outline" placeholder="e.g. Happy Birthday Deepa! Enjoy these pure ragi treats from Chennai." rows={2} value={note} onChange={(event) => setNote(event.target.value)} />',
)
home_body = home_body.replace(
    '<input className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" id="customer-name" placeholder="Your Name or Recipient" type="text" />',
    '<input className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" placeholder="Your Name or Recipient" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />',
)
home_body = home_body.replace(
    '<select className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" id="delivery-destination">',
    '<select className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" value={destination} onChange={(event) => setDestination(event.target.value)}>',
)
home_body = home_body.replace(
    '<input checked className="text-primary focus:ring-secondary" name="packaging" type="radio" value="kraft" />',
    '<input checked={packaging === "kraft"} className="text-primary focus:ring-secondary" name="packaging" type="radio" value="kraft" onChange={() => setPackaging("kraft")} />',
)
home_body = home_body.replace(
    '<input className="text-primary focus:ring-secondary" name="packaging" type="radio" value="tin" />',
    '<input checked={packaging === "tin"} className="text-primary focus:ring-secondary" name="packaging" type="radio" value="tin" onChange={() => setPackaging("tin")} />',
)
home_body = home_body.replace(
    '<label className="cursor-pointer border-2 border-secondary bg-surface-container-low p-4 rounded-2xl flex flex-col justify-between">',
    '<label className={`cursor-pointer p-4 rounded-2xl flex flex-col justify-between ${packaging === "kraft" ? "border-2 border-secondary bg-surface-container-low" : "border border-outline-variant/40 hover:border-secondary"}`}>',
)
home_body = home_body.replace(
    '<label className="cursor-pointer border border-outline-variant/40 hover:border-secondary p-4 rounded-2xl flex flex-col justify-between">',
    '<label className={`cursor-pointer p-4 rounded-2xl flex flex-col justify-between ${packaging === "tin" ? "border-2 border-secondary bg-surface-container-low" : "border border-outline-variant/40 hover:border-secondary"}`}>',
)

# featured filters
home_body = home_body.replace(
    """<div className="flex flex-wrap gap-2">
<button className="px-4 py-2 rounded-full bg-primary text-background font-label-md text-label-md">All Delights</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition">Cookies</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition">Granola Jars</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition">Tea Cakes</button>
<button className="px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition">Hampers</button>
</div>""",
    """<div className="flex flex-wrap gap-2">
{["All Delights", "Cookies", "Granola Jars", "Tea Cakes", "Hampers"].map((label) => (
<button key={label} type="button" onClick={() => setFilter(label)} className={filter === label ? "px-4 py-2 rounded-full bg-primary text-background font-label-md text-label-md" : "px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition"}>{label}</button>
))}
</div>""",
)

# add data categories to product cards - wrap first 5 cards
# We'll add hidden class via comments replacements on card wrappers - simpler to add className conditions on known headings
card_map = {
    "Card 1: Ragi Chocolate Cookies": "Cookies",
    "Card 2: Artisanal Millet Granola Jar": "Granola Jars",
    "Card 3: Evening Wellness Snacks Box": "Hampers",
    "Card 4: Decadent Millet Chocolate Fudge Cake": "Tea Cakes",
    "Card 5: Roasted Almond Millet Tea Cake": "Tea Cakes",
    "Card 6: Corporate Gifting & Custom Bundle": "Hampers",
}
for comment, cat in card_map.items():
    home_body = home_body.replace(
        f"{{/* {comment} */}}\n<div className=\"",
        f"{{/* {comment} */}}\n<div className={{`${{filter === \"All Delights\" || filter === \"{cat}\" ? \"\" : \"hidden \"}}",
    )

(OUT / "HomePage.tsx").write_text(
    '''"use client";

import { useMemo, useState } from "react";
import { HAMPER_KEYS } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";
import { formatINR, openWhatsApp } from "@/lib/site";

export default function HomePage() {
  const cart = useCart();
  const [qty, setQty] = useState({ ragi: 1, granola: 1, wellness: 0 });
  const [note, setNote] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [destination, setDestination] = useState("Chennai Local (Same-Day / Next-Day)");
  const [packaging, setPackaging] = useState("kraft");
  const [filter, setFilter] = useState("All Delights");

  const hamperTotal = useMemo(
    () => qty.ragi * 280 + qty.granola * 350 + qty.wellness * 650 + (packaging === "tin" ? 90 : 0),
    [packaging, qty],
  );

  function updateQty(item: "ragi" | "granola" | "wellness", delta: number) {
    setQty((current) => {
      const next = Math.max(0, current[item] + delta);
      cart.setQty(HAMPER_KEYS[item], next);
      return { ...current, [item]: next };
    });
  }

  function addToCart(itemName: string, price: number) {
    cart.addItem(itemName, price);
    if (itemName.includes("Ragi")) updateQty("ragi", 1);
    else if (itemName.includes("Granola")) updateQty("granola", 1);
    else if (itemName.includes("Wellness")) updateQty("wellness", 1);
  }

  function dispatchWhatsAppOrder() {
    const totalUnits = qty.ragi + qty.granola + qty.wellness;
    if (totalUnits === 0) {
      window.alert("Please add at least one delicious bake to your order!");
      return;
    }
    const name = customerName || "Valued Customer";
    openWhatsApp(
      `*Hello Millet Bakes!* I would like to place a handcrafted fresh order:\\n\\n• Ragi Chocolate Cookies: ${qty.ragi} box(es)\\n• Millet Granola Jar: ${qty.granola} jar(s)\\n• Wellness Snack Hamper: ${qty.wellness} box(es)\\n\\n*Customer Name:* ${name}\\n*Delivery Route:* ${destination}\\n*Gift Note:* ${note || "None"}\\n*Packaging:* ${packaging === "tin" ? "Festive Tin" : "Artisanal Kraft Bakery Box"}\\n*Estimated Value:* ${formatINR(hamperTotal)}\\n\\nPlease share payment details and fresh dispatch schedule. Thank you!`,
    );
  }

  return (
    <div className="flex-1 reveal">
'''
    + home_body
    + """
    </div>
  );
}
"""
)

shop_body = body_of("ShopMarkup.tsx")
# replace static cart rows with dynamic
shop_body = re.sub(
    r'<div className="space-y-3.5 max-h-60 overflow-y-auto pr-1" id="cart-items-container">.*?</div>\n\{/\* Custom Options',
    '''<div className="space-y-3.5 max-h-60 overflow-y-auto pr-1">
{activeItems.length === 0 ? (
<p className="text-xs text-outline py-4 text-center">Your oven basket is currently empty. Add fresh bakes from the left!</p>
) : activeItems.map((item) => (
<div key={item.id} className="cart-row flex items-center justify-between gap-3 text-xs pb-3 border-b border-outline-variant/20">
<div className="flex-1 min-w-0">
<div className="font-headline font-semibold text-on-surface truncate">{item.name}</div>
<div className="text-[11px] text-outline">{formatINR(item.price)} • {item.spec}</div>
</div>
<div className="flex items-center border border-outline-variant/60 rounded-full bg-surface-container">
<button type="button" onClick={() => cart.changeQty(item.id, -1)} className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-secondary font-bold">-</button>
<span className="qty-display w-6 text-center font-bold text-xs">{item.qty}</span>
<button type="button" onClick={() => cart.changeQty(item.id, 1)} className="w-6 h-6 flex items-center justify-center text-on-surface hover:text-secondary font-bold">+</button>
</div>
<span className="font-bold text-primary w-12 text-right">{formatINR(item.price * item.qty)}</span>
</div>
))}
</div>
{/* Custom Options''',
    shop_body,
    flags=re.S,
)
shop_body = shop_body.replace(
    '<span className="text-xs font-headline font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full" id="basket-badge-count">3 items</span>',
    '<span className="text-xs font-headline font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">{cart.itemCount} item{cart.itemCount === 1 ? "" : "s"}</span>',
)
shop_body = shop_body.replace(
    '<span className="font-semibold" id="cart-subtotal">₹1,480</span>',
    '<span className="font-semibold">{formatINR(cart.subtotal)}</span>',
)
shop_body = shop_body.replace(
    '<span className="font-semibold" id="cart-packaging-fee">₹0</span>',
    '<span className="font-semibold">{formatINR(cart.packaging.cost)}</span>',
)
shop_body = shop_body.replace(
    '<span className="text-secondary font-extrabold" id="cart-grand-total">₹1,480</span>',
    '<span className="text-secondary font-extrabold">{formatINR(cart.subtotal + cart.packaging.cost)}</span>',
)
shop_body = shop_body.replace(
    '<input checked className="text-secondary focus:ring-secondary" name="packaging" onChange={() => updatePackaging(0)} type="radio" value="Eco Kraft Box" />',
    '<input checked={cart.packaging.cost === 0} className="text-secondary focus:ring-secondary" name="packaging" onChange={() => cart.setPackaging("Eco Kraft Box", 0)} type="radio" value="Eco Kraft Box" />',
)
shop_body = shop_body.replace(
    '<input className="text-secondary focus:ring-secondary" name="packaging" onChange={() => updatePackaging(90)} type="radio" value="Heritage Tin" />',
    '<input checked={cart.packaging.cost === 90} className="text-secondary focus:ring-secondary" name="packaging" onChange={() => cart.setPackaging("Heritage Tin", 90)} type="radio" value="Heritage Tin" />',
)
shop_body = shop_body.replace(
    '<select className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0" id="delivery-select">',
    '<select className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0" value={delivery} onChange={(event) => setDelivery(event.target.value)}>',
)
shop_body = shop_body.replace(
    '<textarea className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0 resize-none placeholder:text-outline/70" id="order-notes" placeholder="e.g. Please write \'Happy Birthday Appa!\' on cake card. Extra crunchy cookies if possible." rows="2"></textarea>',
    '<textarea className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0 resize-none placeholder:text-outline/70" placeholder="e.g. Please write \'Happy Birthday Appa!\' on cake card. Extra crunchy cookies if possible." rows={2} value={notes} onChange={(event) => setNotes(event.target.value)} />',
)
shop_body = shop_body.replace(
    '<span className="font-headline font-bold text-base text-on-surface" id="catalog-counter">Displaying 6 handcrafted creations</span>',
    '<span className="font-headline font-bold text-base text-on-surface">Displaying {visibleCount} handcrafted creation{visibleCount === 1 ? "" : "s"}</span>',
)
shop_body = shop_body.replace(
    """<button className="category-btn active px-5 py-2 rounded-full font-label text-xs md:text-sm font-bold bg-primary text-on-primary transition-all whitespace-nowrap shadow-sm" data-category="all">
            All Treats (6)
          </button>
<button className="category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap" data-category="cookies">
            Crunchy Cookies
          </button>
<button className="category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap" data-category="cakes">
            Guilt-Free Cakes
          </button>
<button className="category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap" data-category="granola">
            Granola &amp; Breakfast
          </button>
<button className="category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap" data-category="hampers">
            Gift Hampers &amp; Snack Boxes
          </button>""",
    """{[
  { id: "all", label: "All Treats (6)" },
  { id: "cookies", label: "Crunchy Cookies" },
  { id: "cakes", label: "Guilt-Free Cakes" },
  { id: "granola", label: "Granola & Breakfast" },
  { id: "hampers", label: "Gift Hampers & Snack Boxes" },
].map((pill) => (
<button key={pill.id} type="button" onClick={() => setCategory(pill.id)} className={category === pill.id ? "category-btn active px-5 py-2 rounded-full font-label text-xs md:text-sm font-bold bg-primary text-on-primary transition-all whitespace-nowrap shadow-sm" : "category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap"}>{pill.label}</button>
))}""",
)
shop_body = shop_body.replace(
    'data-item-cat="cookies"',
    'data-item-cat="cookies" hidden={category !== "all" && category !== "cookies"}',
)
shop_body = shop_body.replace(
    'data-item-cat="granola"',
    'data-item-cat="granola" hidden={category !== "all" && category !== "granola"}',
)
shop_body = shop_body.replace(
    'data-item-cat="hampers"',
    'data-item-cat="hampers" hidden={category !== "all" && category !== "hampers"}',
)
shop_body = shop_body.replace(
    'data-item-cat="cakes"',
    'data-item-cat="cakes" hidden={category !== "all" && category !== "cakes"}',
)

(OUT / "ShopPage.tsx").write_text(
    '''"use client";

import { useMemo, useState } from "react";
import { useCart } from "@/lib/cart-context";
import { formatINR, openWhatsApp } from "@/lib/site";

export default function ShopPage() {
  const cart = useCart();
  const [category, setCategory] = useState("all");
  const [delivery, setDelivery] = useState("Chennai Express (Same Day / ₹80)");
  const [notes, setNotes] = useState("");
  const activeItems = cart.items.filter((item) => item.qty > 0);
  const visibleCount = useMemo(() => {
    const counts = { cookies: 1, granola: 1, cakes: 2, hampers: 2, all: 6 } as const;
    return counts[category as keyof typeof counts] ?? 6;
  }, [category]);

  function addToCart(name: string, price: number, spec: string) {
    cart.addItem(name, price, spec);
  }

  function dispatchWhatsAppOrder() {
    if (activeItems.length === 0) {
      window.alert("Your basket is empty. Please select baked treats to proceed!");
      return;
    }
    const lines = activeItems
      .map((item, index) => `${index + 1}. ${item.name} (${item.spec}) x ${item.qty} = ${formatINR(item.price * item.qty)}`)
      .join("\\n");
    openWhatsApp(
      `*NEW ORDER - MILLET BAKES (Website Pantry)*\\n\\n*Items Ordered:*\\n${lines}\\n\\n*Packaging:* ${cart.packaging.label} (+${formatINR(cart.packaging.cost)})\\n*Delivery Mode:* ${delivery}${notes ? `\\n*Notes/Custom Message:* ${notes}` : ""}\\n*Estimated Total:* ${formatINR(cart.subtotal + cart.packaging.cost)}\\n\\nKindly confirm dispatch slot & share payment QR code. Thank you!`,
    );
  }

  return (
    <div className="flex-1 flex flex-col reveal">
'''
    + shop_body
    + """
    </div>
  );
}
"""
)

story_body = body_of("StoryMarkup.tsx")
story_body = story_body.replace(
    '<a className="px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary font-headline text-sm font-bold tracking-wide transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2" href="#">',
    '<Link className="px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary font-headline text-sm font-bold tracking-wide transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2" href="/shop">',
)
story_body = story_body.replace(
    '<a className="px-7 py-3.5 rounded-full bg-transparent hover:bg-primary/40 text-on-primary border border-outline-variant/60 font-headline text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 flex items-center gap-2" href="#">',
    '<Link className="px-7 py-3.5 rounded-full bg-transparent hover:bg-primary/40 text-on-primary border border-outline-variant/60 font-headline text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 flex items-center gap-2" href="/corporate">',
)

(OUT / "StoryPage.tsx").write_text(
    '''import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="flex-1 reveal">
'''
    + story_body
    + """
    </div>
  );
}
"""
)

corp_body = body_of("CorporateMarkup.tsx")
corp_body = corp_body.replace(
    '<form className="space-y-6" onSubmit={(event) => { event.preventDefault(); }}>',
    '<form className="space-y-6" onSubmit={submitInquiry}>',
)

# give inputs values - replace ids with controlled if possible via onSubmit FormData
# Keep native form + FormData on submit

(OUT / "CorporatePage.tsx").write_text(
    '''"use client";

import type { FormEvent } from "react";
import { openWhatsApp } from "@/lib/site";

export default function CorporatePage() {
  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const company = String(data.get("companyName") || "");
    const person = String(data.get("contactPerson") || "");
    const email = String(data.get("workEmail") || "");
    const phone = String(data.get("phone") || "");
    const teamSize = String(data.get("teamSize") || "");
    const workshopType = String(data.get("workshopType") || "");
    const date = String(data.get("tentativeDate") || "");
    const city = String(data.get("locationCity") || "");
    const notes = String(data.get("customRequests") || "");
    openWhatsApp(
      `*Corporate Inquiry - Millet Bakes*\\n\\nCompany: ${company}\\nContact: ${person}\\nEmail: ${email}\\nPhone: ${phone}\\nTeam Size: ${teamSize}\\nOffering: ${workshopType}\\nDate: ${date || "Flexible"}\\nLocation: ${city}\\nNotes: ${notes || "None"}\\n\\nPlease share workshop availability and a tasting proposal.`,
    );
    window.alert("Thank you! Your corporate inquiry has been submitted. Our team will contact you shortly.");
    event.currentTarget.reset();
  }

  return (
    <div className="flex-1 reveal">
'''
    + corp_body
    + """
    </div>
  );
}
"""
)

# add name attributes matching ids for corporate form
corp_path = OUT / "CorporatePage.tsx"
corp_text = corp_path.read_text()
for field in [
    "companyName",
    "contactPerson",
    "workEmail",
    "phone",
    "teamSize",
    "workshopType",
    "tentativeDate",
    "locationCity",
    "customRequests",
]:
    corp_text = corp_text.replace(f'id="{field}"', f'id="{field}" name="{field}"')
corp_path.write_text(corp_text)

contact_body = body_of("ContactMarkup.tsx")
contact_body = contact_body.replace(
    '<form action="#" className="space-y-6" method="POST" onSubmit={(event) => { event.preventDefault(); }}>',
    '<form className="space-y-6" onSubmit={submitInquiry}>',
)
# FAQ: replace 4 buttons
faq_idx = 0

def faq_sub(match: re.Match[str]) -> str:
    global faq_idx
    i = faq_idx
    faq_idx += 1
    return (
        '<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick={() => setOpenFaq(openFaq === '
        + str(i)
        + " ? -1 : "
        + str(i)
        + ')} type="button">'
    )

contact_body = re.sub(
    r'<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick=\{\(\) => toggleFaq\(this\)\} type="button">',
    faq_sub,
    contact_body,
)

# First FAQ content visible, others hidden - add openFaq conditions on next sibling divs is hard.
# We'll add className toggle by replacing known hidden/block patterns after generation by reading contact html.

(OUT / "ContactPage.tsx").write_text(
    '''"use client";

import { useState, type FormEvent } from "react";
import { openWhatsApp } from "@/lib/site";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState(0);

  function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    openWhatsApp(
      `*Contact Inquiry - Millet Bakes*\\n\\nName: ${data.get("full_name")}\\nEmail: ${data.get("email")}\\nPhone: ${data.get("phone")}\\nDate: ${data.get("delivery_date") || "Flexible"}\\nType: ${data.get("inquiry_type")}\\nMessage: ${data.get("message")}`,
    );
    window.alert("Thank you for reaching out to Millet Bakes! Master Baker Santhiya will connect with you shortly on WhatsApp/Email.");
    event.currentTarget.reset();
  }

  return (
    <div className="flex-1 reveal">
'''
    + contact_body
    + """
    </div>
  );
}
"""
)

print("wrote pages")
