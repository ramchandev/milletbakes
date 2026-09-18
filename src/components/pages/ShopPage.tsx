"use client";

import { useState } from "react";
import Link from "next/link";
import { PRODUCTS, formatProductTitle } from "@/lib/catalog";
import { useCart } from "@/lib/cart-context";
import { formatINR } from "@/lib/site";

export default function ShopPage() {
  const cart = useCart();
  const [category, setCategory] = useState("all");
  const visibleProducts = PRODUCTS.filter(
    (product) => category === "all" || product.category === category,
  );
  const visibleCount = visibleProducts.length;

  function addToCart(name: string, price: number, spec: string) {
    cart.addItem(name, price, spec);
    cart.openDrawer();
  }

  return (
    <div className="flex-1 flex flex-col reveal">

{/* Top Announcement Bar */}
<div className="bg-primary text-on-primary py-2 px-4 text-xs font-label tracking-wider flex justify-center items-center gap-3">
<span className="inline-flex items-center gap-1 font-bold text-secondary-container">
<span className="material-symbols-outlined text-[14px]">local_fire_department</span> Small-Batch Baking
    </span>
<span className="hidden sm:inline text-on-primary-container">•</span>
<span className="">Zero Refined Sugar • 100% Sprouted Ancient Grains • Chennai Fresh Doorstep Delivery</span>
<span className="hidden md:inline text-on-primary-container">•</span>
<span className="hidden md:inline text-secondary-fixed font-semibold">Pre-order by 4 PM for Next Day Dispatch</span>
</div>
{/* Shared Component: TopNavBar */}
{/* Active state mapped precisely to 'Shop & Order' per protocol */}

{/* Main Content Canvas */}
<main className="flex-grow">
{/* Hero / Pantry Header */}
<section className="relative bg-surface-container-low border-b border-outline-variant/20 pt-10 pb-12 overflow-hidden">
{/* Subdued hearth pattern watermark */}
<div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-headline font-bold uppercase tracking-wider mb-3">
<span className="material-symbols-outlined text-[14px] fill">spa</span> 100% Ancient Grain Craft
            </div>
<h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tight leading-tight">
              Wholesome Artisanal Pantry
            </h1>
<p className="font-body text-base md:text-lg text-on-surface-variant mt-3 leading-relaxed">
              Freshly stoneground finger millet (Ragi), foxtail, and unrefined country jaggery. Baked daily in limited small-batches right out of our Chennai studio kitchen.
            </p>
</div>
{/* Quick stats / Pantry guarantees */}
<div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/40 shadow-sm">
<div className="flex items-center gap-2 border-r border-outline-variant/40 pr-4">
<span className="material-symbols-outlined text-secondary text-2xl">eco</span>
<div>
<div className="font-headline font-bold text-xs text-primary">0% MAIDA</div>
<div className="text-[11px] text-outline">Whole millets only</div>
</div>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-2xl">science</span>
<div>
<div className="font-headline font-bold text-xs text-primary">ZERO CHEMICALS</div>
<div className="text-[11px] text-outline">Pure, natural ingredients</div>
</div>
</div>
</div>
</div>
{/* Filter Navigation Pills */}
<div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-8 no-scrollbar scroll-smooth" id="category-pills">
{[
  { id: "all", label: `All Treats (${PRODUCTS.length})` },
  { id: "cookies", label: "Crunchy Cookies" },
  { id: "cakes", label: "Guilt-Free Cakes" },
  { id: "granola", label: "Granola & Breakfast" },
].map((pill) => (
<button key={pill.id} type="button" onClick={() => setCategory(pill.id)} className={category === pill.id ? "category-btn active px-5 py-2 rounded-full font-label text-xs md:text-sm font-bold bg-primary text-on-primary transition-all whitespace-nowrap shadow-sm" : "category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap"}>{pill.label}</button>
))}
</div>
</div>
</section>
{/* Catalog */}
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
<section>
<div className="flex items-center justify-between pb-6 border-b border-outline-variant/30 mb-6">
<span className="font-headline font-bold text-base text-on-surface">Displaying {visibleCount} handcrafted creation{visibleCount === 1 ? "" : "s"}</span>
<div className="flex items-center gap-2 text-xs font-label text-outline">
<span className="">Sort by:</span>
<select className="bg-transparent border border-outline-variant/50 rounded-md py-1 px-2.5 text-xs text-on-surface focus:border-secondary focus:ring-0 font-body">
<option>Curated Artisan Specials</option>
<option>Price: Low to High</option>
<option>Highest Fiber Content</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="product-grid">
{visibleProducts.map((product) => (
<article key={product.id} id={product.id} className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt={formatProductTitle(product)} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={product.image} />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
{(product.tags ?? []).slice(0, 2).map((tag, index) => (
<span key={tag} className={index === 0 ? "px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-primary text-on-primary tracking-wide" : "px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-secondary-fixed text-on-secondary-fixed tracking-wide"}>{tag}</span>
))}
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">{product.spec}</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">{product.name}</h3>
{product.tamilName ? <p className="text-xs text-secondary mt-0.5 font-label">{product.tamilName}</p> : null}
<p className="text-xs text-outline mt-0.5 font-label">{product.subtitle}</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary shrink-0">{formatINR(product.price)}</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">{product.description}</p>
{product.highlights?.length ? (
<ul className="mt-3 space-y-1 text-[11px] text-on-surface-variant">
{product.highlights.map((item) => (
<li key={item} className="flex items-start gap-2">
<span className="material-symbols-outlined highlight-check text-secondary">check_circle</span>
<span className="leading-5">{item}</span>
</li>
))}
</ul>
) : null}
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between gap-2">
<div className="flex items-center gap-1.5 text-xs text-outline min-w-0">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span className="truncate">{product.highlights?.[0] || "Freshly baked with care"}</span>
</div>
<button type="button" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95 shrink-0" onClick={() => addToCart(product.name, product.price, product.spec)}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
</button>
</div>
</article>
))}
{category === "all" ? (
<div className="bg-primary-container text-background rounded-xl parchment-border overflow-hidden flex flex-col justify-between warm-card-shadow">
<img alt="Millet Bakes custom hamper with brownies, granola, and gifting tins" className="w-full h-52 object-cover" src="/custom-hamper.jpg" />
<div className="p-8 flex flex-col flex-grow justify-between">
<div>
<div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-sm">
<span className="material-symbols-outlined">featured_seasonal_and_gifts</span>
</div>
<span className="font-label-stamp text-label-stamp text-secondary-fixed uppercase tracking-wider font-bold">Enterprise &amp; Events</span>
<h3 className="font-headline text-xl md:text-2xl text-white mt-2 font-bold">Custom Hamper &amp; Bulk Orders</h3>
<p className="font-body text-sm text-amber-100/90 mt-3 leading-relaxed">
Hosting a corporate wellness seminar or curating wedding favors? We handcraft personalized tins, custom sleeves, and doorstep bulk logistics across India.
</p>
<ul className="mt-6 space-y-2.5 text-sm text-white/95">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span> <span>Custom brand embossed seals</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span> <span>Volume pricing for 25+ units</span></li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-secondary-container">check_circle</span> <span>Certified batch lab reports available</span></li>
</ul>
</div>
<div className="pt-8">
<Link className="w-full block text-center px-6 py-3.5 rounded-full bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-container transition font-label text-sm font-bold shadow-md hover:scale-105 active:scale-95" href="/corporate">
Enquire for Corporate Gifting
</Link>
</div>
</div>
</div>
) : null}
</div>
</section>
</div>
{/* Wholesome Value & Transparency Pillars */}
<section className="bg-surface-container-low border-y border-outline-variant/30 py-16">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="text-xs font-headline font-bold tracking-widest text-secondary uppercase">Pure Ancient Grain Philosophy</span>
<h2 className="font-headline text-2xl md:text-3xl font-extrabold text-primary mt-1">Why Families Trust Millet Bakes</h2>
<p className="font-body text-sm text-on-surface-variant mt-2">Every recipe is meticulously balanced with native millets to support slow glucose absorption and clean vitality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/30 flex items-center justify-center text-secondary mb-4">
<span className="material-symbols-outlined text-2xl">grain</span>
</div>
<h3 className="font-headline font-bold text-sm text-primary">No Maida, Ever</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">We refuse white flour and refined starches. Our base is 100% stoneground finger millet, pearl millet, and foxtail.</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-tertiary-fixed/30 flex items-center justify-center text-tertiary mb-4">
<span className="material-symbols-outlined text-2xl">nature</span>
</div>
<h3 className="font-headline font-bold text-sm text-primary">Organic Country Jaggery</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Sweetened with mineral-dense palm jaggery, date molasses, and wild raw honey. Absolutely zero white refined crystals.</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-secondary-container/30 flex items-center justify-center text-on-secondary-container mb-4">
<span className="material-symbols-outlined text-2xl">sanitizer</span>
</div>
<h3 className="font-headline font-bold text-sm text-primary">Zero Palm Oil &amp; Trans-Fats</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Baked exclusively with pure butter, cold-pressed cold coconut oil, and cold-pressed sesame oil. Heart-friendly baking.</p>
</div>
<div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
<div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary mb-4">
<span className="material-symbols-outlined text-2xl">verified</span>
</div>
<h3 className="font-headline font-bold text-sm text-primary">FSSAI Certified Kitchen</h3>
<p className="text-xs text-on-surface-variant mt-2 leading-relaxed">Complies with state food safety hygiene norms. Handcrafted under rigorous small-batch sanitization protocols.</p>
</div>
</div>
</div>
</section>
{/* Custom Corporate Hamper CTA Banner */}
<section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
<div className="bg-primary-container text-on-primary rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"><div className="max-w-xl z-10"><span className="px-3.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-headline font-bold uppercase tracking-wider shadow-sm">Corporate &amp; Festive Gifting</span><h2 className="font-headline text-2xl md:text-4xl font-extrabold text-white mt-4 leading-tight tracking-tight">Elevate Your Corporate Wellness with Ancient Grain Hampers</h2><p className="font-body text-sm md:text-base text-secondary-fixed mt-3 leading-relaxed">Custom brand branding sleeves, personalized founder notes, and curated sweet-savory gift tins. Delivered seamlessly across Chennai and India for Diwali, New Year, and team achievements.</p><div className="mt-6 flex flex-wrap gap-4"><a className="bg-secondary hover:bg-secondary-container text-white px-6 py-3 rounded-full font-label text-xs md:text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2" href="https://wa.me/916383100431?text=Hi%20Santhiya,%20we%20want%20to%20inquire%20about%20bulk%20corporate%20gifting%20hampers." target="_blank"><span className="material-symbols-outlined text-base">chat</span> Request Corporate Catalog</a><a className="border-2 border-secondary-fixed text-secondary-fixed hover:bg-secondary-fixed hover:text-on-secondary-fixed px-6 py-3 rounded-full font-label text-xs md:text-sm font-bold transition-all flex items-center gap-2" href="tel:+916383100431"><span className="material-symbols-outlined text-base">call</span> Schedule Tasting Call</a></div></div><div className="relative z-10 w-full md:w-80 bg-surface-container-lowest text-on-surface p-6 rounded-2xl shadow-xl border border-outline-variant/40"><div className="flex items-center gap-3 border-b border-outline-variant/30 pb-3.5"><span className="material-symbols-outlined text-secondary text-3xl">workspaces</span><div><div className="font-headline font-bold text-sm text-primary">Team Wellness Kits</div><div className="text-[11px] font-semibold text-secondary mt-0.5">MOQ: 15 Hampers</div></div></div><ul className="text-xs space-y-2.5 mt-4 text-on-surface font-body"><li className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-secondary text-base">check_circle</span><span className="">Co-branded logo banderoles</span></li><li className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-secondary text-base">check_circle</span><span className="">Dietary customisation (Keto/Vegan)</span></li><li className="flex items-center gap-2 font-medium"><span className="material-symbols-outlined text-secondary text-base">check_circle</span><span className="">Direct individual doorstep dispatch</span></li></ul></div></div>
</section>
</main>
{/* Shared Component: Footer */}

{/* Client-side Interactions */}

    </div>
  );
}
