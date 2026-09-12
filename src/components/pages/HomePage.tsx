"use client";

import { useMemo, useState } from "react";
import { HAMPER_KEYS } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";
import { emailLead } from "@/lib/submit-lead-client";
import { formatINR, isValidPhone, openWhatsApp } from "@/lib/site";

export default function HomePage() {
  const cart = useCart();
  const [qty, setQty] = useState({ ragi: 0, granola: 0, wellness: 0 });
  const [note, setNote] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [destination, setDestination] = useState("Chennai Local (Same-Day / Next-Day)");
  const [packaging, setPackaging] = useState("kraft");
  const [filter, setFilter] = useState("All Delights");
  const [sending, setSending] = useState(false);

  const hamperTotal = useMemo(
    () => qty.ragi * 280 + qty.granola * 350 + qty.wellness * 650 + (packaging === "tin" ? 90 : 0),
    [packaging, qty],
  );

  function updateQty(item: "ragi" | "granola" | "wellness", delta: number) {
    const next = Math.max(0, qty[item] + delta);
    setQty({ ...qty, [item]: next });
    cart.setQty(HAMPER_KEYS[item], next);
  }

  function addToCart(itemName: string, price: number) {
    if (itemName.includes("Ragi")) updateQty("ragi", 1);
    else if (itemName.includes("Granola")) updateQty("granola", 1);
    else if (itemName.includes("Wellness")) updateQty("wellness", 1);
    else cart.addItem(itemName, price);
  }

  async function dispatchWhatsAppOrder() {
    const totalUnits = qty.ragi + qty.granola + qty.wellness;
    if (totalUnits === 0) {
      window.alert("Please add at least one delicious bake to your order!");
      return;
    }
    if (!isValidPhone(cart.phone)) {
      window.alert("Please enter a valid WhatsApp / phone number.");
      return;
    }
    const name = customerName || "Valued Customer";
    const packagingLabel = packaging === "tin" ? "Festive Tin" : "Artisanal Kraft Bakery Box";
    const message = `*Hello Millet Bakes!* I would like to place a handcrafted fresh order:\n\n• Ragi Chocolate Cookies: ${qty.ragi} box(es)\n• Millet Granola Jar: ${qty.granola} jar(s)\n• Wellness Snack Hamper: ${qty.wellness} box(es)\n\n*Customer Name:* ${name}\n*Phone / WhatsApp:* ${cart.phone}\n*Delivery Route:* ${destination}\n*Gift Note:* ${note || "None"}\n*Packaging:* ${packagingLabel}\n*Estimated Value:* ${formatINR(hamperTotal)}\n\nPlease share payment details and fresh dispatch schedule. Thank you!`;

    setSending(true);
    try {
      await emailLead({
        type: "order",
        subject: `Website order — ${name}`,
        fields: {
          Customer: name,
          Phone: cart.phone,
          "Ragi chocolate cookies": `${qty.ragi} box(es)`,
          "Millet granola jar": `${qty.granola} jar(s)`,
          "Wellness snack hamper": `${qty.wellness} box(es)`,
          Packaging: packagingLabel,
          "Delivery route": destination,
          "Gift note": note || "None",
          "Estimated value": formatINR(hamperTotal),
        },
      });
      openWhatsApp(message);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not send the order email. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex-1 reveal">

{/* TOP APP BAR */}

{/* HERO SECTION */}
<section className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24 border-b border-outline-variant/30" id="hero">
<div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/* Text & Brand Messaging */}
<div className="lg:col-span-7 flex flex-col items-start gap-6">
{/* Artisan Seal & Micro Stamp */}
<div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant/50 stamp-badge">
<span className="material-symbols-outlined text-secondary" data-icon="spa">spa</span>
<span className="font-label-stamp text-label-stamp text-primary uppercase tracking-wider">100% Ancient Grain • Zero Refined Sugar</span>
</div>
<div className="space-y-2">
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight uppercase leading-none">
            PURE MILLET. <br />
<span className="text-secondary">ZERO MAIDA.</span> <br />
            ZERO GUILT.
          </h1>
<p className="font-headline-sm text-headline-sm text-on-primary-container font-semibold">
            BAKED WITH MILLETS &amp; LOVE ♡
          </p>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Handcrafted wholesome cookies, crunchy granola jars, and festive wellness hampers freshly baked in Chennai using pure country jaggery and slow-stoneground millets.
        </p>
{/* Value Pills */}
<div className="flex flex-wrap gap-2.5 pt-2">
<span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md flex items-center gap-1.5 border border-outline-variant/40">
<span className="material-symbols-outlined text-base text-secondary" data-icon="grain">grain</span> 100% Ancient Grains
          </span>
<span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md flex items-center gap-1.5 border border-outline-variant/40">
<span className="material-symbols-outlined text-base text-secondary" data-icon="block">block</span> No Refined Sugar
          </span>
<span className="px-3.5 py-1.5 rounded-full bg-surface-container-high text-primary font-label-md text-label-md flex items-center gap-1.5 border border-outline-variant/40">
<span className="material-symbols-outlined text-base text-secondary" data-icon="eco">eco</span> No Preservatives
          </span>

</div>
{/* Dual CTA */}
<div className="flex flex-wrap items-center gap-4 pt-4">
<a className="px-8 py-3.5 rounded-full bg-primary text-background font-label-lg text-label-lg hover:bg-primary-container transition shadow-md flex items-center gap-2" href="#menu">
<span className="">Explore Healthy Menu</span>
<span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
</a>
<a className="px-8 py-3.5 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-on-secondary-container transition shadow-sm flex items-center gap-2" href="https://wa.me/916383100431?text=Hi%20Millet%20Bakes,%20I%20would%20like%20to%20place%20a%20fresh%20order!" target="_blank">
<span className="material-symbols-outlined" data-icon="send">send</span>
<span className="">Order Now (WhatsApp)</span>
</a>
</div>
{/* Fresh Batch Ticker */}
<div className="mt-4 flex items-center gap-3 text-on-surface-variant font-label-md text-label-md">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-green-600 animate-ping"></span>
<span className="">Next Fresh Stone-Oven Batch Dispatches: <strong>Today, 4:00 PM (Chennai Express)</strong></span>
</div>
</div>
{/* Hero Visual Composition with Provided Assets */}
<div className="lg:col-span-5 relative">
<div className="relative mx-auto max-w-md lg:max-w-none">
{/* Main Hero Image Showcase */}
<div className="relative rounded-3xl overflow-hidden bg-surface-container-low parchment-border p-4 warm-card-shadow">
<img alt="Millet Bakes Artisan Quality Seal and Handcrafted Loaf Collection" className="w-full h-[420px] object-contain rounded-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC25ZQR1UFdiB5rHHntlnA7FMDbkZHFetPwl10PAENTkpMqeSviW5ZxrtsXU5MUsdGK0rD0BFoIsSiNdEru3YHlWIf55WrkW50nZPX9ebkORgVEWQPMyS2DbbGSy_jAgDgzFq7nM91_9OvrNgj2bTy0CFE3tNlK_rL8gmv9LhqQwDYcrPYRVNnmtbFcKe0bqvRTEr88bDuJ5bNbIPeHce_VZMea5siFX1Q4lX8m8UzpOwpFfR_9k7blMkhJltgtcDOhFvU" />
{/* Stamped Overlaid Quality Badge */}
<div className="absolute bottom-8 left-8 bg-surface-container-lowest/95 backdrop-blur-sm p-4 rounded-2xl parchment-border warm-card-shadow max-w-[240px]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="verified">verified</span>
<span className="font-title-lg text-sm text-primary">Stoneground Purity</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Crushed country palm jaggery, pure cocoa, and naturally nutrient-dense millets.</p>
</div>
<div className="absolute -top-3 -right-3 bg-secondary text-on-secondary px-4 py-2 rounded-full font-label-stamp text-label-stamp tracking-wider uppercase shadow-md rotate-3">
              Direct from Chennai Oven
            </div>
</div>
</div>
</div>
</div>
</section>
{/* DAILY BAKE STRIP TICKER */}
<section className="bg-surface-container-high py-4 border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 text-primary">
<div className="flex items-center gap-3">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-extrabold">DAILY HARVEST BAKE</span>
<span className="w-1.5 h-1.5 rounded-full bg-outline-variant"></span>
<span className="font-body-sm text-body-sm font-semibold">Sprouted Ragi Flour • Foxtail Millet • Organic Palm Sugar • Coldpressed Oils</span>
</div>
<div className="flex items-center gap-6 font-label-md text-label-md">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-secondary" data-icon="local_shipping">local_shipping</span> Chennai Next-Day Delivery</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-sm text-secondary" data-icon="inventory_2">inventory_2</span> Eco-Friendly Glass &amp; Kraft Tins</span>
</div>
</div>
</section>
{/* FEATURED PRODUCT ORDER SHOWCASE */}
<section className="py-20 max-w-7xl mx-auto px-6 md:px-12" id="menu">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">FRESH FROM THE HEARTH</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-1">Featured Artisanal Menu</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-xl">Every recipe is meticulously balanced with native millets to deliver decadent, melt-in-the-mouth texture without refined grains or industrial white sugar.</p>
</div>
{/* Category Filter Pills */}
<div className="flex flex-wrap gap-2">
{["All Delights", "Cookies", "Granola Jars", "Tea Cakes", "Hampers"].map((label) => (
<button key={label} type="button" onClick={() => setFilter(label)} className={filter === label ? "px-4 py-2 rounded-full bg-primary text-background font-label-md text-label-md" : "px-4 py-2 rounded-full bg-surface-container-high text-primary hover:bg-surface-variant font-label-md text-label-md transition"}>{label}</button>
))}
</div>
</div>
{/* Product Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{/* Card 1: Ragi Chocolate Cookies */}
<div className={`${filter === "All Delights" || filter === "Cookies" ? "" : "hidden "}bg-surface-container-lowest rounded-2xl parchment-border warm-card-shadow warm-card-shadow-hover transition duration-200 flex flex-col overflow-hidden`}>
<div className="relative bg-surface-container-low p-4 h-72 flex items-center justify-center overflow-hidden">
<img alt="Ragi Chocolate Cookies by Millet Bakes" className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZy35oki0vh4InC_iheQz7PVSyTEVv9WOJHbrb4_vGAZj8_Kg61Q1XxZqS4jA0vPHG9VXi7nzCvM0Nwb0WKMqzaxh6l2sRLvGGApPitqzV1SHYylYvUkZPstYU5Z8xdY9BX_zJe4-V-3SH2RDZvMBlsU_Ed4i7XYajJ7fyVrfO97LAf3JQhqLarsV78IZxN2cM-_PrrhaHfDH-ZfB9iIE8hRJZFt0kx7TD5SC2euqn5ZSqlpIYZ0qurz1Yh7mXdquVRK8" />
<span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-stamp text-label-stamp uppercase tracking-wider">
            Bestseller
          </span>
<span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-surface-container-lowest text-on-tertiary-fixed-variant font-label-stamp text-label-stamp uppercase border border-outline-variant/30">
            No Maida
          </span>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Sprouted Ragi Special</span>
<span className="font-label-stamp text-label-stamp text-on-surface-variant">Box of 8 Cookies</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Ragi Chocolate Cookies</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Crunchy outside, wholesome inside. Made with pure sprouted ragi flour and rich dark cocoa, sweetened with organic jaggery.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block uppercase">Price</span>
<span className="font-title-lg text-xl text-primary font-bold">₹280</span>
</div>
<button className="px-5 py-2.5 rounded-full bg-primary-container text-background hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition active:scale-95" onClick={() => addToCart('Ragi Chocolate Cookies', 280)}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
<span className="">Add to Order</span>
</button>
</div>
</div>
</div>
{/* Card 2: Artisanal Millet Granola Jar */}
<div className={`${filter === "All Delights" || filter === "Granola Jars" ? "" : "hidden "}bg-surface-container-lowest rounded-2xl parchment-border warm-card-shadow warm-card-shadow-hover transition duration-200 flex flex-col overflow-hidden`}>
<div className="relative bg-surface-container-low p-4 h-72 flex items-center justify-center overflow-hidden">
<img alt="Artisanal Millet Granola Jar with nuts and seeds" className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC40nkwDPTJ3lQIE_2CAvQBOLebXO_hODorYAOLP2NqSEhiqRgzOFjFELsVb5W-Nm7TsRXruBRrVj5mSt5SzOcWi30zVglZyI3hAMqWfpFSzW3mzrqqUzwM3PeAL-tuROZDxsWaEflKF8CO-cuQkdeJ97xACXSaxNK7QPnG5GyFWbvDerjEh9dPXMh4xO-hMvnBI_xs45ftFCZBMVQm1N1bK46To1t_iTV6-ijxkpm3Tp2y-B2vsl_qgAdC40ZQl8OksvM" />
<span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-tertiary-container text-tertiary-fixed font-label-stamp text-label-stamp uppercase tracking-wider">
            High Protein
          </span>
<span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-stamp text-label-stamp uppercase border border-outline-variant/30">
            Sugar Free
          </span>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Breakfast &amp; Snacking</span>
<span className="font-label-stamp text-label-stamp text-on-surface-variant">400g Jar</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Artisanal Millet Granola Jar</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Everyday energy packed with roasted almonds, melon seeds, sprouted foxtail millets, and gentle jaggery crunch.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block uppercase">Price</span>
<span className="font-title-lg text-xl text-primary font-bold">₹350</span>
</div>
<button className="px-5 py-2.5 rounded-full bg-primary-container text-background hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition active:scale-95" onClick={() => addToCart('Artisanal Millet Granola Jar', 350)}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
<span className="">Add to Order</span>
</button>
</div>
</div>
</div>
{/* Card 3: Evening Wellness Snacks Box */}
<div className={`${filter === "All Delights" || filter === "Hampers" ? "" : "hidden "}bg-surface-container-lowest rounded-2xl parchment-border warm-card-shadow warm-card-shadow-hover transition duration-200 flex flex-col overflow-hidden`}>
<div className="relative bg-surface-container-low p-4 h-72 flex items-center justify-center overflow-hidden">
<img alt="Evening Wellness Snacks Box Hamper by Millet Bakes" className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF0YbmLmI2CiZPN4W1Ys027DN-KD5-Yf3Q0i0i1pt7CIIHEJ96v_Y4QNSWUyRw1zqJVM96oxouh3I6obtdP5CrEbDYtYgByMamDMX9__-68HPfSa4sYvmy1Bg47-E6cI0v0sgah10O-Dyiwc95hw4Kd3cgcvbxgcN3ET6R-DzHOAPl5FurCbLnLCq_NRflcFiqKTCKq133D0sKQo33OzWw6MYSfyY75dgXLwUdaOa7Vnn6W_hCGth5vyvlcbOnV1axjQw" />
<span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-stamp text-label-stamp uppercase tracking-wider">
            Gift Edition
          </span>
<span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-stamp text-label-stamp uppercase border border-outline-variant/30">
            Customizable
          </span>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Corporate &amp; Festive</span>
<span className="font-label-stamp text-label-stamp text-on-surface-variant">Curated Box</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Evening Wellness Snacks Box</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Wholesome bites for evening cravings. Includes millet crackers, mini cookie packs, and roasted spiced nut clusters.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block uppercase">Price</span>
<span className="font-title-lg text-xl text-primary font-bold">₹650</span>
</div>
<button className="px-5 py-2.5 rounded-full bg-primary-container text-background hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition active:scale-95" onClick={() => addToCart('Evening Wellness Snacks Box', 650)}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
<span className="">Add to Order</span>
</button>
</div>
</div>
</div>
{/* Card 4: Decadent Millet Chocolate Fudge Cake */}
<div className={`${filter === "All Delights" || filter === "Tea Cakes" ? "" : "hidden "}bg-surface-container-lowest rounded-2xl parchment-border warm-card-shadow warm-card-shadow-hover transition duration-200 flex flex-col overflow-hidden`}>
<div className="relative bg-surface-container-low p-4 h-72 flex items-center justify-center overflow-hidden">
<img alt="Decadent Millet Chocolate Fudge Cake by Millet Bakes" className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0Y9SN5HX4h0nxplXvrT6sGUYe6jvNsUSkWAIEU233HXYwDZRi4jK_5veH3q25Anlgjye8LMesveVr5VZ_DFucW669ezeEPmns91wWiRc_jcLke75HD3OYvcO2s-DXpiM62hKLRVTF79xjkmH8-cfiPUXkQFG45GFOgyvgW4DyDFwJ5uxja1L8UCvGPsvm3q2X5JZRG7n_p58U3F7mbbvImH72THQybSmRm_ATSZOQruyGuTGTQZu7A-slz167hfpkjWg" />
<span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-primary text-background font-label-stamp text-label-stamp uppercase tracking-wider">
            Signature Cake
          </span>
<span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-stamp text-label-stamp uppercase border border-outline-variant/30">
            500g
          </span>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Celebration Special</span>
<span className="font-label-stamp text-label-stamp text-on-surface-variant">Eggless / Zero Maida</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Decadent Millet Chocolate Fudge Cake</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Moist, rich, artisanal chocolate indulgence made with sprouted ragi flour and slow-simmered palm jaggery ganache.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block uppercase">Price</span>
<span className="font-title-lg text-xl text-primary font-bold">₹850</span>
</div>
<button className="px-5 py-2.5 rounded-full bg-primary-container text-background hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition active:scale-95" onClick={() => addToCart('Decadent Millet Chocolate Fudge Cake', 850)}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
<span className="">Add to Order</span>
</button>
</div>
</div>
</div>
{/* Card 5: Roasted Almond Millet Tea Cake */}
<div className={`${filter === "All Delights" || filter === "Tea Cakes" ? "" : "hidden "}bg-surface-container-lowest rounded-2xl parchment-border warm-card-shadow warm-card-shadow-hover transition duration-200 flex flex-col overflow-hidden`}>
<div className="relative bg-surface-container-low p-4 h-72 flex items-center justify-center overflow-hidden">
<img alt="Roasted Almond Millet Tea Cake Loaf" className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDX47r6e-cFeh5UwSP_J0atDOYpsKfTv9JU4o8BbQEAf84YXQ6nG0fojJRz1s7lVeGO8n5nktcqIWTztF-1Y67GZH6H2-hTFUxDO-6TaqpNtb6FipMf4XFROlVRH0VHiYQ8d9PjMIr5KfPAXOSgS1_2m5hn1ggRJGuUAMnfd6wtMo7aIm8n6ZM5ZeD02JItgN6tBn70LaYsIa3_gYOOsGzyWZfrtOcc_-M7Aj-mEklntvsP7qOktKmvervSC5IXrM00xd0" />
<span className="absolute top-6 left-6 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-stamp text-label-stamp uppercase tracking-wider">
            Tea Time Essential
          </span>
<span className="absolute top-6 right-6 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-label-stamp text-label-stamp uppercase border border-outline-variant/30">
            Loaf
          </span>
</div>
<div className="p-6 flex flex-col flex-grow justify-between">
<div>
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-secondary uppercase tracking-wider">Ancient Grain Sponge</span>
<span className="font-label-stamp text-label-stamp text-on-surface-variant">Daily Fresh</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Roasted Almond Millet Tea Cake</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
              Rustic sponge baked with golden foxtail millet, crowned with crisp toasted almonds, lightly infused with cardamom.
            </p>
</div>
<div className="pt-6 mt-6 border-t border-outline-variant/30 flex items-center justify-between">
<div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block uppercase">Price</span>
<span className="font-title-lg text-xl text-primary font-bold">₹420</span>
</div>
<button className="px-5 py-2.5 rounded-full bg-primary-container text-background hover:bg-primary font-label-md text-label-md flex items-center gap-2 transition active:scale-95" onClick={() => addToCart('Roasted Almond Millet Tea Cake', 420)}>
<span className="material-symbols-outlined text-sm" data-icon="add_shopping_cart">add_shopping_cart</span>
<span className="">Add to Order</span>
</button>
</div>
</div>
</div>
{/* Card 6: Corporate Gifting & Custom Bundle */}
<div className={`${filter === "All Delights" || filter === "Hampers" ? "" : "hidden "}bg-primary-container text-background rounded-2xl parchment-border p-8 flex flex-col justify-between warm-card-shadow`}><div className="">
<div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-sm">
<span className="material-symbols-outlined" data-icon="featured_seasonal_and_gifts">featured_seasonal_and_gifts</span>
</div>
<span className="font-label-stamp text-label-stamp text-secondary-fixed uppercase tracking-wider font-bold">Enterprise &amp; Events</span>
<h3 className="font-headline-md text-headline-md text-white mt-2 font-bold">Custom Hamper &amp; Bulk Orders</h3>
<p className="font-body-md text-body-md text-amber-100/90 mt-3">
            Hosting a corporate wellness seminar or curating wedding favors? We handcraft personalized tins, custom sleeves, and doorstep bulk logistics across India.
          </p>
<ul className="mt-6 space-y-2.5 text-sm text-white/95">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container" data-icon="check_circle">check_circle</span> <span className="">Custom brand embossed seals</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container" data-icon="check_circle">check_circle</span> <span className="">Volume pricing for 25+ units</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container" data-icon="check_circle">check_circle</span> <span className="">Certified batch lab reports available</span></li>
</ul>
</div>
<div className="pt-8">
<a className="w-full block text-center px-6 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition font-label-md text-label-md font-bold shadow-md hover:scale-105 active:scale-95" href="#hamper-builder">
            Launch Hamper Customizer
          </a>
</div></div>
</div>
</section>
{/* INTERACTIVE ORDER CAPTURE & CUSTOM HAMPER BUILDER */}
<section className="py-20 bg-surface-container-low border-y border-outline-variant/30" id="hamper-builder">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-14">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">TAILOR YOUR HARVEST BOX</span>
<h2 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight mt-1">Interactive Order Builder</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant mt-3">
          Mix &amp; match fresh bakes, pick custom gift messaging, select delivery dates in Chennai or pan-India shipping, and dispatch your order straight to our baking team on WhatsApp.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Left: Form Selections (8 Cols) */}
<div className="lg:col-span-8 bg-surface-container-lowest p-6 md:p-10 rounded-3xl parchment-border warm-card-shadow space-y-8">
{/* Step 1: Select Baked Delights */}
<div>
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-6">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-full bg-primary text-background font-bold flex items-center justify-center font-label-md text-label-md">1</span>
<h3 className="font-title-lg text-title-lg text-primary">Choose Your Fresh Bakes</h3>
</div>
<span className="font-label-md text-label-md text-secondary font-semibold">Live Pricing</span>
</div>
<div className="space-y-4">
{/* Item Row 1 */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img alt="Ragi cookies item" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2M5RZolQaIc3MEP3GDnbP5OH5G5eUIA1cuJf4ccvA8LOK1qD-yBhEJQ6I35aUOw16Tj3LzCps6f-NZhkkFw4pkdFMHQjHsGPg8fvX2GtdOI8DnJQKW22dPPiR2u4-bjNn3WJqZ4Slapt0WjIab9Bb3mlx5SK4yUhuYU6lu_wU1w3PORqx-Je_TW3S0oRxPzyM8ZO--bVthAeng5SXSLyFCqLeBlbL3casVTpereB3XxMCE3xjmyRHvFOiNlotVFPvk9E" />
</div>
<div>
<h4 className="font-title-lg text-sm text-primary">Ragi Chocolate Cookies</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">₹280 / box (8 pcs)</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center font-bold text-primary" onClick={() => updateQty('ragi', -1)} type="button">-</button>
<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.ragi}</span>
<button className="w-8 h-8 rounded-full bg-primary text-background hover:bg-primary-container flex items-center justify-center font-bold" onClick={() => updateQty('ragi', 1)} type="button">+</button>
</div>
</div>
{/* Item Row 2 */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img alt="Granola jar item" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC9Id6V2fjKnzmWZst-h4neEvNLsDmV_wLMzDutImQ7ehkug8dUgpFmFRUPLBnoYghVC85N4OJV-90hX0GkY6HY3ksYUghPh209CUmTntjL5cn7RAhGJuouJxVs921FFn2vxdfD5PUqQtfk7O0l_H67bVES-Ug1gM0b0Els4lOirNlU6IXYctTr4vb8aNyRwn9YTRXZOe_KaIQAYc8PYRNNJBqCDSjvdIqBYpAmxgqS9IWx4y7y9oFKljPyrgq8T8iek4" />
</div>
<div>
<h4 className="font-title-lg text-sm text-primary">Millet Granola Jar</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">₹350 / 400g jar</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center font-bold text-primary" onClick={() => updateQty('granola', -1)} type="button">-</button>
<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.granola}</span>
<button className="w-8 h-8 rounded-full bg-primary text-background hover:bg-primary-container flex items-center justify-center font-bold" onClick={() => updateQty('granola', 1)} type="button">+</button>
</div>
</div>
{/* Item Row 3 */}
<div className="flex items-center justify-between p-4 rounded-xl bg-surface-container-low border border-outline-variant/30">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden flex-shrink-0">
<img alt="Wellness snack box item" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwp0hRL9Pp1KBe4V3pOj7r42_qKpgN8hkooYrcCmzfOPHx7W67FCle3xF8RBJqz8QiCdR6Tizx_SYe6j0hYKJS14TsVuKNScB0TlUZMkcyuLBlaKB8cxIRVQoV7ZUzTmjEOlBP55OkavdPZXtHHUzAz-nc7RzEAlJmReP09j6w2JbNz-5meKpr4iYzqKFczyqP6KGULX1Q7O9yAxC3c4Bw872TegYLNSHtrNlsNajDCElv_Q3CqfqMhFNZz7l4xlg0P5M" />
</div>
<div>
<h4 className="font-title-lg text-sm text-primary">Evening Wellness Snacks Box</h4>
<span className="font-body-sm text-body-sm text-on-surface-variant">₹650 / gift hamper</span>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full bg-surface-container-high hover:bg-surface-variant flex items-center justify-center font-bold text-primary" onClick={() => updateQty('wellness', -1)} type="button">-</button>
<span className="w-6 text-center font-bold font-title-lg text-sm">{qty.wellness}</span>
<button className="w-8 h-8 rounded-full bg-primary text-background hover:bg-primary-container flex items-center justify-center font-bold" onClick={() => updateQty('wellness', 1)} type="button">+</button>
</div>
</div>
</div>
</div>
{/* Step 2: Packaging & Customizations */}
<div>
<div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-6">
<span className="w-8 h-8 rounded-full bg-primary text-background font-bold flex items-center justify-center font-label-md text-label-md">2</span>
<h3 className="font-title-lg text-title-lg text-primary">Packaging Style &amp; Personal Note</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className={`cursor-pointer p-4 rounded-2xl flex flex-col justify-between ${packaging === "kraft" ? "border-2 border-secondary bg-surface-container-low" : "border border-outline-variant/40 hover:border-secondary"}`}>
<div className="flex items-center justify-between">
<span className="font-title-lg text-sm text-primary">Artisanal Kraft Bakery Box</span>
<input checked={packaging === "kraft"} className="text-primary focus:ring-secondary" name="packaging" type="radio" value="kraft" onChange={() => setPackaging("kraft")} />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Unbleached eco-pulp paper with hand-stamped seed paper sleeve. (Complimentary)</p>
</label>
<label className={`cursor-pointer p-4 rounded-2xl flex flex-col justify-between ${packaging === "tin" ? "border-2 border-secondary bg-surface-container-low" : "border border-outline-variant/40 hover:border-secondary"}`}>
<div className="flex items-center justify-between">
<span className="font-title-lg text-sm text-primary">Festive Tin + Ribbon (+₹90)</span>
<input checked={packaging === "tin"} className="text-primary focus:ring-secondary" name="packaging" type="radio" value="tin" onChange={() => setPackaging("tin")} />
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Vintage embossed metal keepsake tin with handwritten jute tag.</p>
</label>
</div>
<div className="mt-4">
<label className="block font-label-md text-label-md text-primary mb-1">Handwritten Gift Note (Optional):</label>
<textarea className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm placeholder:text-outline" placeholder="e.g. Happy Birthday Deepa! Enjoy these pure ragi treats from Chennai." rows={2} value={note} onChange={(event) => setNote(event.target.value)} />
</div>
</div>
{/* Step 3: Delivery Location & Timeline */}
<div>
<div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4 mb-6">
<span className="w-8 h-8 rounded-full bg-primary text-background font-bold flex items-center justify-center font-label-md text-label-md">3</span>
<h3 className="font-title-lg text-title-lg text-primary">Delivery Details</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block font-label-md text-label-md text-primary mb-1">Recipient Name</label>
<input className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" placeholder="Your Name or Recipient" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)} />
</div>
<div>
<label className="block font-label-md text-label-md text-primary mb-1">Phone / WhatsApp <span className="text-error">*</span></label>
<input className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" inputMode="tel" placeholder="+91 98765 43210" required type="tel" value={cart.phone} onChange={(event) => cart.setPhone(event.target.value)} />
</div>
<div className="md:col-span-2">
<label className="block font-label-md text-label-md text-primary mb-1">Delivery Destination</label>
<select className="w-full rounded-xl border border-outline-variant/60 focus:border-secondary focus:ring-2 focus:ring-secondary/20 p-3 bg-surface-container-lowest font-body-sm text-body-sm" value={destination} onChange={(event) => setDestination(event.target.value)}>
<option value="Chennai Local (Same-Day / Next-Day)">Chennai Local (Same-Day / Next-Day Delivery)</option>
<option value="Tamil Nadu Outstation (2-3 Days)">Rest of Tamil Nadu Express (2-3 Days)</option>
<option value="Pan-India Metro (Air Cargo 3-4 Days)">Pan-India Metro Cargo (Air Dispatch)</option>
</select>
</div>
</div>
</div>
</div>
{/* Right: Live Summary & Direct WhatsApp Checkout (4 Cols) */}
<div className="lg:col-span-4 bg-surface-container-lowest rounded-3xl parchment-border warm-card-shadow p-6 md:p-8 sticky top-28 space-y-6">
<div className="flex items-center gap-3 border-b border-outline-variant/30 pb-4">
<div className="w-10 h-10 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
</div>
<div>
<h3 className="font-title-lg text-title-lg text-primary">Order Summary</h3>
<span className="font-label-stamp text-label-stamp text-secondary">Millet Bakes Kitchen</span>
</div>
</div>
{/* Live Items Calculation List */}
<div className="space-y-3 font-body-sm text-body-sm border-b border-outline-variant/30 pb-4">
<div className="flex justify-between items-center text-on-surface-variant">
<span className="">Ragi Cookies (<span className="">{qty.ragi}</span>x)</span>
<span className="font-semibold text-primary">{formatINR(qty.ragi * 280)}</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="">Granola Jar (<span className="">{qty.granola}</span>x)</span>
<span className="font-semibold text-primary">{formatINR(qty.granola * 350)}</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="">Wellness Box (<span className="">{qty.wellness}</span>x)</span>
<span className="font-semibold text-primary">{formatINR(qty.wellness * 650)}</span>
</div>
<div className="flex justify-between items-center text-on-surface-variant">
<span className="">Packaging &amp; Stamped Seal</span>
<span className="font-semibold text-green-700">Free</span>
</div>
</div>
{/* Total Calculation */}
<div className="space-y-1">
<div className="flex justify-between items-baseline">
<span className="font-title-lg text-lg text-primary font-bold">Estimated Total</span>
<span className="font-headline-md text-headline-md text-primary font-extrabold">{formatINR(hamperTotal)}</span>
</div>
<span className="font-label-stamp text-label-stamp text-on-surface-variant block">*Taxes and local delivery factored at confirmation</span>
</div>
{/* Order Capture Action */}
<div className="space-y-3 pt-2">
<button className="w-full py-4 rounded-full bg-secondary text-on-secondary hover:bg-on-secondary-container transition font-label-lg text-label-lg font-bold flex items-center justify-center gap-2 shadow-md active:scale-98 disabled:opacity-60 disabled:cursor-not-allowed" disabled={sending || !isValidPhone(cart.phone) || qty.ragi + qty.granola + qty.wellness === 0} onClick={() => dispatchWhatsAppOrder()}>
<span className="material-symbols-outlined text-xl" data-icon="send">send</span>
<span className="">{sending ? "Sending…" : "Place Order via WhatsApp"}</span>
</button>
{!isValidPhone(cart.phone) ? (
<p className="text-center font-label-stamp text-label-stamp text-secondary">Enter a valid phone number to place the order.</p>
) : null}
<p className="text-center font-label-stamp text-label-stamp text-on-surface-variant uppercase tracking-wider">
              Direct DM: +91 63831 00431 / @millet_bakes
            </p>
</div>
{/* Trust Badges */}
<div className="p-4 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
<div className="flex items-center gap-2 text-xs font-semibold text-primary">
<span className="material-symbols-outlined text-secondary text-sm" data-icon="verified_user">verified_user</span>
<span className="">100% Guaranteed Freshness</span>
</div>
<p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
              Baked freshly upon order confirmation. Packaged in vacuum-sealed food-grade tins and unbleached Kraft boxes.
            </p>
</div>
</div>
</div>
</div>
</section>
{/* STORY & CRAFT HERITAGE (EDITORIAL SHOWCASE) */}
<section className="py-20 max-w-7xl mx-auto px-6 md:px-12" id="our-story">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden bg-surface-container-low parchment-border">
<img alt="Fresh loaf cake baked with ancient millets" className="w-full h-56 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7mHr9vZafMqtbplsilVd0kg3TFC2eDUbx3pY0hDxgBYfMcKc87FSW14Bkdz359sxYaQnDIpelM4D43cLtbjPKYrUutJBVYPTbzgO2nw9QIQaP-Nu5rdS7UYZL0WygJ5r-Ui2I2vRzk1ovztJb5-71CxQljCzTQFS13ST8nSn1XVpS1DzjD3rydOCF2I8LspjKsTXzNsCKVRgxHvNV2yqSAtdFZ1-1BhNt_LgkAHQ8zEAHXTw5zL0Nk9puGfJQHlQvYPQ" />
</div>
<div className="rounded-2xl overflow-hidden bg-surface-container-low parchment-border">
<img alt="Handcrafted ragi cookies cooling on tray" className="w-full h-44 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNfaZ3Dwv64C9h4CZi74mqMqaSFd7_CMSoyyJtA8I9hjupNhR4C0auRaUu7H10qCj6XLoNMfTEiTbaQCLqbN-_vfjG3fnKgvbZIqTET2qCz6hiZP403ohuzsGXoW4shNympXrSV0sMuPAR-a3GNJ_O0gG-W9EbKnxci6VwmIRnSx0h6wbuuxOFck4R23WE1DfZiByEQhrAu1K5dR9InxtfsLtFIsV5FpdYfAUjL21PGWO6KiJhNz8yURxb_LoLdUH4TXc" />
</div>
</div>
<div className="space-y-4 pt-8">
<div className="rounded-2xl overflow-hidden bg-surface-container-low parchment-border">
<img alt="Decadent wholesome celebration cake" className="w-full h-44 object-cover hover:scale-105 transition duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZiysMppMOWc-ydzQgGkmNZAhpjjOxMDja4oRfrW3qg_m7_tihRE0JU29BKGY0JbjTj1aS5qa_bOvQ2yHbA12EkcDUQkxd6h6qLFFQH5llHXJZa3XTMx2kD9Nt2CEwK-VU17fAsMLt7ZCdzpH0JFZx9XdKTNmyrHUggJepV64l1eIvedep52oRfo7apxTer2j3q3zJ5VUwN5z3PgPNb5AI11Sp4lmBTWWnO4cU6lyivTp_as5k_UACWHbfT1nm2Qjbc_I" />
</div>
<div className="p-6 rounded-2xl bg-primary-container text-background flex flex-col justify-center">
<span className="font-display-lg text-4xl font-extrabold text-secondary-fixed">100%</span>
<span className="font-title-lg text-sm mt-1">Refined Flour Free Bakery</span>
<p className="font-body-sm text-xs text-amber-100/70 mt-2">Reviving South India's sacred climate-resilient grains through modern patisserie technique.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-6 flex flex-col items-start gap-6">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">ROOTS &amp; PHILOSOPHY</span>
<h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight">
          Handcrafted in Chennai with Ancient Grain Reverence
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">
          Millet Bakes was born out of a simple, uncompromising culinary belief: sweet indulgences should heal, fuel, and comfort rather than burden the body with artificial syrups and bleached flours.
        </p>
<p className="font-body-md text-body-md text-on-surface-variant">
          Every cookie dough is folded by hand in small artisan batches. We source heirloom Finger Millet (Ragi), Kodo, and Barnyard millets straight from organic farmer collectives in Tamil Nadu and Karnataka. No chemical stabilisers, no palm oils, and no shortcuts.
        </p>
<div className="grid grid-cols-2 gap-4 w-full pt-2">
<div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30">
<span className="material-symbols-outlined text-secondary text-2xl" data-icon="water_drop">water_drop</span>
<h4 className="font-title-lg text-sm text-primary mt-2">Zero Palm Oil</h4>
<p className="font-body-sm text-xs text-on-surface-variant mt-1">Only pure cold-pressed coconut oil and farm butter.</p>
</div>
<div className="p-4 rounded-xl bg-surface-container border border-outline-variant/30">
<span className="material-symbols-outlined text-secondary text-2xl" data-icon="nature_people">nature_people</span>
<h4 className="font-title-lg text-sm text-primary mt-2">Direct Farmer Sourcing</h4>
<p className="font-body-sm text-xs text-on-surface-variant mt-1">Ethically procured heritage millets and jaggery blocks.</p>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 w-full"><img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeZPr3nxqoSfvzINZr0fBcaOaltsUsZcRYia66ZdQAx7CGrIv0X5TnoeWb2NCUezRnsDJwQ768ViHP-8LtUz04sxXw2iJ-OrURiC28LEPis948HaoI1D1z9MCYzU5_VZRwJr5A8vXKCKT1e9i462dbcdVhW2wzQH-TE8bS4u_ysEWpA2pvZ0R9otUunX_qwfdFO8KZVUKrxFdHZR4YRu-OHPW0LhleUfoZu74wI0YOO54jp_25GcF-9CM-DMwe71YZV-g" alt="Santhiya Karthikeyan - Founder &amp; Baker" className="w-16 h-16 rounded-full object-cover border-2 border-secondary flex-shrink-0 shadow-sm" /><div><h4 className="font-title-lg text-base text-primary font-bold">Santhiya Karthikeyan</h4><span className="font-label-stamp text-xs text-secondary uppercase tracking-wider block font-semibold">Founder &amp; Baker</span><p className="font-body-sm text-xs text-on-surface-variant mt-0.5">Championing traditional millet superfoods and refined-sugar-free baking across Tamil Nadu.</p></div></div><div className="pt-2">
<a className="font-label-lg text-label-lg text-secondary hover:text-on-secondary-container font-bold flex items-center gap-2" href="/corporate">
<span className="">Enquire about our Corporate Baking Workshops</span>
<span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* COMMUNITY & INSTAGRAM REVIEWS */}
<section className="py-16 bg-surface-container-high/50 border-t border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row items-baseline justify-between mb-10">
<div>
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">COMMUNITY LOVE</span>
<h2 className="font-headline-md text-headline-md text-primary mt-1">From Chennai Homes to Corporate Desks</h2>
</div>
<a className="font-label-md text-label-md text-secondary font-bold hover:underline flex items-center gap-1 mt-2 md:mt-0" href="https://instagram.com/millet_bakes" target="_blank"><svg className="w-4 h-4 text-secondary fill-current flex-shrink-0" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg><span className="">Follow @millet_bakes on Instagram</span><span className="material-symbols-outlined text-sm" data-icon="open_in_new">open_in_new</span></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Review 1 */}
<div className="bg-surface-container-lowest p-6 rounded-2xl parchment-border warm-card-shadow">
<div className="flex items-center gap-1 text-secondary mb-3">
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
            "The Ragi Chocolate Cookies are unbelievable! I gave them to my kids who usually refuse healthy snacks, and they finished the box in one sitting without knowing it's 100% millet!"
          </p>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<span className="font-title-lg text-sm text-primary">Dr. Nandhini R.</span>
<span className="font-body-sm text-xs text-on-surface-variant">Anna Nagar, Chennai</span>
</div>
</div>
{/* Review 2 */}
<div className="bg-surface-container-lowest p-6 rounded-2xl parchment-border warm-card-shadow">
<div className="flex items-center gap-1 text-secondary mb-3">
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
            "We ordered 120 Evening Wellness Hampers for our Diwali corporate client gifts. The feedback was sensational. Crisp packaging, personalized greeting cards, and stellar taste."
          </p>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<span className="font-title-lg text-sm text-primary">Karthik V.</span>
<span className="font-body-sm text-xs text-on-surface-variant">Fintech Lead, OMR</span>
</div>
</div>
{/* Review 3 */}
<div className="bg-surface-container-lowest p-6 rounded-2xl parchment-border warm-card-shadow">
<div className="flex items-center gap-1 text-secondary mb-3">
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
<span className="material-symbols-outlined text-sm fill" data-icon="star">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic">
            "The Millet Granola Jar is now an irreplaceable staple on my breakfast table. Roasted almonds and that subtle hint of jaggery give steady morning energy without the glucose crash."
          </p>
<div className="mt-4 pt-4 border-t border-outline-variant/30 flex items-center justify-between">
<span className="font-title-lg text-sm text-primary">Sruthi Menon</span>
<span className="font-body-sm text-xs text-on-surface-variant">Adyar, Chennai</span>
</div>
</div>
</div>
</div>
</section>


{/* LIGHTWEIGHT INTERACTIVITY LOGIC */}

    </div>
  );
}
