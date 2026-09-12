"use client";

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
      .join("\n");
    openWhatsApp(
      `*NEW ORDER - MILLET BAKES (Website Pantry)*\n\n*Items Ordered:*\n${lines}\n\n*Packaging:* ${cart.packaging.label} (+${formatINR(cart.packaging.cost)})\n*Delivery Mode:* ${delivery}${notes ? `\n*Notes/Custom Message:* ${notes}` : ""}\n*Estimated Total:* ${formatINR(cart.subtotal + cart.packaging.cost)}\n\nKindly confirm dispatch slot & share payment QR code. Thank you!`,
    );
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
  { id: "all", label: "All Treats (6)" },
  { id: "cookies", label: "Crunchy Cookies" },
  { id: "cakes", label: "Guilt-Free Cakes" },
  { id: "granola", label: "Granola & Breakfast" },
  { id: "hampers", label: "Gift Hampers & Snack Boxes" },
].map((pill) => (
<button key={pill.id} type="button" onClick={() => setCategory(pill.id)} className={category === pill.id ? "category-btn active px-5 py-2 rounded-full font-label text-xs md:text-sm font-bold bg-primary text-on-primary transition-all whitespace-nowrap shadow-sm" : "category-btn px-5 py-2 rounded-full font-label text-xs md:text-sm font-semibold bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-all whitespace-nowrap"}>{pill.label}</button>
))}
</div>
</div>
</section>
{/* Catalog & Sticky Cart Split View */}
<div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
{/* Layout: 8 cols catalog, 4 cols live WhatsApp order console */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
{/* Product Grid Column (8 cols) */}
<section className="lg:col-span-8">
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
{/* The Artisan Bento Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="product-grid">
{/* Item 1: Ragi Chocolate Cookies */}
<article id="ragi-cookies" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="cookies" hidden={category !== "all" && category !== "cookies"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt="Ragi Chocolate Cookies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv080aJCLY0MNQMuCpzCMVQi_x8WusRCBOUo8s2NPewveYDlePYXFMAHL2mw0qoBGKLKD_Z1yafXyQB2_QRWKCJ29nvXT_4FmoulSzvaKa9nSircITn1arcfVJdK9gy8AWycdoyglMVh4yWRG6Y7KIWPElnsYoiDqeKhBqfo_jbczTGAlfaR-V8utybHBqFqhKDuzaAVl2oprU6_sfZnbCf7Wg0lXVs_OFMLiIBfRNcHnxTuDRkE7RkruPGZnLqlEWZ3Y" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-primary text-on-primary tracking-wide">ZERO MAIDA</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-secondary-fixed text-on-secondary-fixed tracking-wide">RAGI RICH</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">Box of 8 pcs</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Ragi Chocolate Cookies</h3>
<p className="text-xs text-outline mt-0.5 font-label">Sprouted Finger Millet • Dutch Cocoa • Country Jaggery</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹280</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    Crunchy artisan exterior with a wholesome chewy cocoa melt. Crafted with hand-milled ragi, dark cocoa, cold-pressed coconut oil, and sweetened strictly with palm jaggery.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">check_circle</span>
<span className="">100% Preservative-Free</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Ragi Chocolate Cookies', 280, 'Box of 8 pcs')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
{/* Item 2: Artisanal Millet Granola */}
<article id="granola" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="granola" hidden={category !== "all" && category !== "granola"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt="Artisanal Millet Granola" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoBf7z2oVNLrzlhDwqgIBkPTlY2qqwsY0SnmT7SAh6LRpXdQd-E1llQlU8b_Iwgcd9KoySXXeEHGFPrEJ7-HDWBzgYWzO39dWQfRBEAaXHVWJcg5qjusuVG5ejod_GgljfpnlGIuRvnrF7byHSHCzhvYoZtcG0d_-Jla9XUD6zHu1mWmE8fkc5OBb1hxaP9M5yKZr_v9xdoTch5O9xfcBiSryThEIBURmaaVleSBXvPCE0xyFqGUtyqGQ9VdBQ0mur64s" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-secondary-fixed text-on-secondary-fixed tracking-wide">SUGAR FREE</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-tertiary-fixed text-on-tertiary-fixed tracking-wide">HIGH FIBER</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">400g Jar</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Artisanal Millet Granola</h3>
<p className="text-xs text-outline mt-0.5 font-label">Toasted Foxtail • Jumbo Oats • Pumpkin Seeds • Almonds</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹350</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    Slow oven-roasted clusters of ancient millet flakes, pumpkin &amp; sunflower seeds, roasted almonds, and natural sun-dried raisins. Crisp, energetic breakfast staple.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">bolt</span>
<span className="">Sustained Energy</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Artisanal Millet Granola', 350, '400g Jar')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
{/* Item 3: Evening Wellness Snacks Box */}
<article id="wellness" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="hampers" hidden={category !== "all" && category !== "hampers"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt="Evening Wellness Snacks Box" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwpbsF3XL5pq3_R6mKkXJzYrW65a61NLGR8FDFnjXyaLbeQ0ZX_98aiqgqKN_rb01XzFuSX7tWkXb4CgtNQ-C2e0_9bLcEMIKwDK2qS2HjcI2TYGP1nCnR0EfLFB3yr8-uouK2xh1E-OirOI_VBvHfDoLhILCKgz0bBo3QWTdZbtzfWDu6v7Vt9XJEmsAKlTp3WHR7afIX_dAYIlo3Sxl3GShpLMZSe4QBxtL3vQs1B19bmJaxaTg77-LEbC5ioOmNBXI" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-primary-container text-on-primary-container tracking-wide">BESTSELLER</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-surface-container-highest text-on-surface-variant tracking-wide">CUSTOMIZABLE</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">Curated Box</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Evening Wellness Snacks Box</h3>
<p className="text-xs text-outline mt-0.5 font-label">Savory Millet Ribbon Crisps • Seed Clusters • Mini Ragi Bites</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹650</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    Wholesome bites for evening chai cravings. Includes 3 portioned pouches of savory roasted spiced millets, dark cacao almond clusters, and crunchy jaggery biscuits.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">card_giftcard</span>
<span className="">Gift Sleeve Included</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Evening Wellness Snacks Box', 650, 'Curated Box')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
{/* Item 4: Decadent Millet Chocolate Fudge Cake */}
<article id="fudge-cake" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="cakes" hidden={category !== "all" && category !== "cakes"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt="Decadent Millet Chocolate Fudge Cake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOOfY1ozNgt_NRtqRnQ_XfHmu5tpMWcc_b-zWAEDHbNdjxBvW88J73kPlRTMDg2LHCyBBSYeW0NNyzbOguIusyJ14VvhohEF7SpYwFUXYwQnMk80MSzs-SC84pKkifkDzJaeTVCoHyS90o85oJ3U4lbwZRp93oX7wD7zgpqqD97QNu_o5wdZWaVtebksI5bf07Bh2_WQ9TOoPLaOScX-ah4zdiaeqrmMewWu1wuKbar8n3rzdI_FZUK74O6f3xXj1Te6E" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-primary text-on-primary tracking-wide">SIGNATURE CAKE</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-secondary text-on-secondary tracking-wide">ORGANIC JAGGERY</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">500g Cake</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Decadent Millet Fudge Cake</h3>
<p className="text-xs text-outline mt-0.5 font-label">Sprouted Ragi &amp; Little Millet • Cocoa Ganache • Edible Beads</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹850</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    Zero white flour, zero refined sugar. A moist, melt-in-the-mouth cocoa sponge layered with rich dark chocolate ganache whipped with pure coconut milk and palm jaggery.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-secondary">celebration</span>
<span className="">Chennai Same-Day Ready</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Decadent Millet Fudge Cake', 850, '500g Cake')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
{/* Item 5: Roasted Almond Millet Tea Cake */}
<article id="almond-cake" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="cakes" hidden={category !== "all" && category !== "cakes"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img alt="Roasted Almond Millet Tea Cake" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdWhPze32q3kKSyd9om-NbKVTpab11-c_67uhbytQBmIDHQ9p3K76m1UoxJiF_H9WOg6BkFqrydzzJatsvHa-J413VoLElkUUyI7yC7mT0ELpPX5EYqQEcQEXZ9MUKkqzh6JOV8xOT3-1h1-sd41lI7Qw143t4zKSTrxzhhm196VdXs3UHKaXJqRIwAfjxFyZ8Vzskvb_nGjuxXS51xrWvI_uQuzFj3VxfW0WXzTdpDYY-iVW6Ir4tzXC8o_54gSAhe8A" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-surface-container-high text-on-surface-variant tracking-wide">TEA TIME SPECIAL</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-tertiary-fixed text-on-tertiary-fixed tracking-wide">DAIRY-FREE OPTION</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">450g Loaf</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Roasted Almond Tea Cake</h3>
<p className="text-xs text-outline mt-0.5 font-label">Foxtail Flour • Crushed California Almonds • Green Cardamom</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹420</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    A fragrant, naturally golden tea loaf with aromatic crushed cardamom pods, toasted almond slivers, and raw wild honey glaze. Soft, crumbly, and naturally satiating.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">local_cafe</span>
<span className="">Perfect with Black Tea</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Roasted Almond Tea Cake', 420, '450g Loaf')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
{/* Item 6: Festive & Corporate Wellness Hamper */}
<article id="corporate-hamper" className="product-card group bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between" data-item-cat="hampers" hidden={category !== "all" && category !== "hampers"}>
<div>
<div className="relative overflow-hidden aspect-[4/3] bg-surface-container-high">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="An elegant, artisanal corporate wellness gift hamper from Millet Bakes containing rustic jars of ancient grain granola, sealed Kraft boxes of ragi cookies, and roasted nut clusters on warm parchment paper. Warm amber sunlight illuminates the textured packaging, burlap ribbons, and hand-stamped wax seals. The colors feature rich cocoa brown, natural kraft tones, and earthy terracotta." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2MzLShL-Gxjfyi8ZWc_SkSUYHOWKnTwVeLStoZVGfSthFnnasd7cTf9HV-TuBNL_sTFujcuK2G0XJD-2_ZAuzNnbRZbd2sJ-GYdkf4Zeu1SFE1EOcuLRpz3bJ79Zrf9xjWK_OpfUNZD1nx-_bSoXPNrc16lKDEMf7MrX7W59lvofBjrAXkQkNWwp-bLw4UzoHU_xxjgnVeWPZLFhVdqE_phABDcw39nEviqCMzXjsfp4aSGms_CEByw" />
<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-secondary text-on-secondary tracking-wide">GIFT HAMPER</span>
<span className="px-2.5 py-0.5 rounded-full text-[10px] font-headline font-bold bg-primary-fixed text-on-primary-fixed tracking-wide">LUXURY PACKAGING</span>
</div>
<span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-md px-2 py-0.5 rounded text-[11px] font-label font-bold text-primary">Artisan Gift Box</span>
</div>
<div className="p-5">
<div className="flex items-start justify-between gap-2">
<div>
<h3 className="font-headline text-lg font-bold text-primary group-hover:text-secondary transition-colors">Corporate Wellness Hamper</h3>
<p className="text-xs text-outline mt-0.5 font-label">Granola Jar + Ragi Cookies + Herb Crackers + Seed Bar</p>
</div>
<span className="font-headline text-lg font-extrabold text-secondary">₹1,250</span>
</div>
<p className="text-xs text-on-surface-variant mt-3 leading-relaxed font-body">
                    A thoughtfully assembled gift experience for employees, clients, or festive family gatherings. Comes in a gold-embossed reusable tin with personalized artisan message cards.
                  </p>
</div>
</div>
<div className="p-5 pt-0 border-t border-outline-variant/20 mt-4 flex items-center justify-between">
<div className="flex items-center gap-1.5 text-xs text-outline">
<span className="material-symbols-outlined text-[16px] text-tertiary">groups</span>
<span className="">Bulk Customization</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary text-on-primary hover:bg-secondary transition-colors text-xs font-label font-bold shadow-sm active:scale-95" onClick={() => addToCart('Corporate Wellness Hamper', 1250, 'Artisan Gift Box')}>
<span className="material-symbols-outlined text-[16px]">add</span> Add to Order
                </button>
</div>
</article>
</div>
</section>
{/* Live Sticky WhatsApp Order Console (4 cols) */}
<aside className="lg:col-span-4 sticky top-28 space-y-6">
<div className="bg-surface-container-lowest rounded-2xl border-2 border-primary/15 p-6 shadow-md relative overflow-hidden">
{/* Header Stamp */}
<div className="flex items-center justify-between border-b border-outline-variant/30 pb-4 mb-5">
<div className="flex items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-base">shopping_bag</span>
</div>
<div>
<h2 className="font-headline font-bold text-base text-primary">Your Oven Basket</h2>
<p className="text-[11px] text-outline font-label">Direct Baker Dispatch • Chennai</p>
</div>
</div>
<span className="text-xs font-headline font-bold bg-secondary-fixed text-on-secondary-fixed px-2 py-0.5 rounded-full">{cart.itemCount} item{cart.itemCount === 1 ? "" : "s"}</span>
</div>
{/* Item Summary List */}
<div className="space-y-3.5 max-h-60 overflow-y-auto pr-1">
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
{/* Custom Options: Packaging Selection */}
<div className="mt-5 pt-4 border-t border-outline-variant/30 space-y-3">
<label className="block text-xs font-headline font-bold text-primary">Packaging Choice</label>
<div className="grid grid-cols-2 gap-2 text-xs">
<label className="flex items-center gap-2 p-2 rounded-lg border border-secondary/40 bg-secondary-fixed/10 cursor-pointer">
<input checked={cart.packaging.cost === 0} className="text-secondary focus:ring-secondary" name="packaging" onChange={() => cart.setPackaging("Eco Kraft Box", 0)} type="radio" value="Eco Kraft Box" />
<div>
<div className="font-semibold text-primary text-[11px]">Eco Kraft Box</div>
<div className="text-[10px] text-outline">Included (Free)</div>
</div>
</label>
<label className="flex items-center gap-2 p-2 rounded-lg border border-outline-variant/50 hover:border-secondary/40 cursor-pointer">
<input checked={cart.packaging.cost === 90} className="text-secondary focus:ring-secondary" name="packaging" onChange={() => cart.setPackaging("Heritage Tin", 90)} type="radio" value="Heritage Tin" />
<div>
<div className="font-semibold text-primary text-[11px]">Heritage Tin</div>
<div className="text-[10px] text-secondary font-bold">+₹90</div>
</div>
</label>
</div>
{/* Delivery Destination Selector */}
<div className="pt-2">
<label className="block text-xs font-headline font-bold text-primary mb-1.5">Delivery Destination</label>
<select className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0" value={delivery} onChange={(event) => setDelivery(event.target.value)}>
<option value="Chennai Express (Same Day / ₹80)">Chennai Local Express (Same-Day / Next-Day)</option>
<option value="Pan-India Standard Courier (₹120)">Pan-India Secure Air Courier (2-3 Days)</option>
<option value="Self-Pickup from Chennai Bakehouse (Free)">Self-Pickup from Kodambakkam Studio (Free)</option>
</select>
</div>
{/* Custom Note Input */}
<div className="pt-1">
<label className="block text-xs font-headline font-bold text-primary mb-1">Custom Note / Dietary Instruction</label>
<textarea className="w-full text-xs font-body border border-outline-variant/60 rounded-lg p-2 bg-surface text-on-surface focus:border-secondary focus:ring-0 resize-none placeholder:text-outline/70" placeholder="e.g. Please write 'Happy Birthday Appa!' on cake card. Extra crunchy cookies if possible." rows={2} value={notes} onChange={(event) => setNotes(event.target.value)} />
</div>
</div>
{/* Price Breakdown Calculation */}
<div className="mt-4 pt-4 border-t border-outline-variant/30 space-y-1.5 text-xs">
<div className="flex justify-between text-on-surface-variant">
<span className="">Items Subtotal</span>
<span className="font-semibold">{formatINR(cart.subtotal)}</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Selected Packaging</span>
<span className="font-semibold">{formatINR(cart.packaging.cost)}</span>
</div>
<div className="flex justify-between text-on-surface-variant">
<span className="">Freshness Packing &amp; Tax</span>
<span className="text-tertiary font-semibold">FREE</span>
</div>
<div className="flex justify-between text-base font-headline font-extrabold text-primary pt-2 border-t border-outline-variant/20">
<span className="">Estimated Total</span>
<span className="text-secondary font-extrabold">{formatINR(cart.subtotal + cart.packaging.cost)}</span>
</div>
</div>
{/* WhatsApp Primary CTA Action Button */}
<button className="w-full mt-5 bg-primary hover:bg-primary-container text-on-primary py-3.5 px-4 rounded-full font-label font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-98 group" onClick={() => dispatchWhatsAppOrder()}>
<span className="material-symbols-outlined text-[20px] text-tertiary-fixed group-hover:scale-110 transition-transform">chat</span>
<span className="">Complete Order via WhatsApp</span>
</button>
<p className="text-[10px] text-center text-outline mt-2 font-body">Instant baker confirmation • Direct UPI payment via WhatsApp</p>
{/* Baker Support Direct Contact */}
<div className="mt-4 p-2.5 rounded-lg bg-surface-container-low border border-outline-variant/30 flex items-center gap-2 text-[11px] text-on-surface-variant">
<span className="material-symbols-outlined text-secondary text-base">support_agent</span>
<span className="">Questions? Call or message Santhiya at <a className="font-bold underline text-primary" href="tel:+916383100431">+91 63831 00431</a></span>
</div>
</div>
{/* Artisan Quality Seal Block */}
<div className="bg-surface-container-low rounded-xl p-5 border border-outline-variant/30 flex items-center gap-4">
<div className="w-16 h-16 shrink-0 rounded-full border-2 border-dashed border-secondary flex flex-col items-center justify-center text-center p-1 bg-surface">
<span className="material-symbols-outlined text-secondary text-base">bakery_dining</span>
<span className="font-headline text-[7px] font-extrabold uppercase leading-none tracking-tighter text-primary">CHENNAI BAKE</span>
</div>
<div>
<h3 className="font-headline font-bold text-xs text-primary">Made to Order Everyday</h3>
<p className="text-[11px] text-on-surface-variant mt-1 leading-snug">We never hold shelf stock. Your cakes and cookies enter the oven only after order verification.</p>
</div>
</div>
</aside>
</div>
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
