import Link from "next/link";
import { LOGO_SRC } from "@/lib/site";

export default function StoryPage() {
  return (
    <div className="flex-1 reveal">

{/* TopNavBar (Shared Component) */}

<main>
{/* Section 1: Hero Section */}
<section className="parchment-pattern py-16 md:py-24 border-b border-outline-variant/30 relative overflow-hidden">
{/* Decorative faint warm glow */}
<div className="absolute -top-24 right-0 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-7 max-w-3xl">
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40 mb-6">
<span className="material-symbols-outlined text-secondary text-sm fill">spa</span>
<span className="font-headline uppercase text-[11px] font-extrabold tracking-widest text-primary-container">Handcrafted in Chennai</span>
</div>
<h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1] tracking-tight mb-6">
            From Passion to Purpose: <br />
<span className="text-secondary italic font-normal">The Millet Bakes Journey</span>
</h1>
<p className="font-body text-base md:text-lg text-on-surface-variant leading-relaxed mb-8">
            Born out of a humble kitchen counter in Ayanavaram, Chennai, Millet Bakes was envisioned to resurrect the lost nutrient heritage of ancient South Indian grains. We replace industrial refined white flours and processed chemical sweeteners with sprouted finger millets (Ragi), golden foxtail, barnyard grains, and pure country palm jaggery—baked warm into everyday indulgences that nourish mind, heart, and body.
          </p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-outline-variant/40">
<div className="flex flex-col">
<span className="font-headline text-2xl md:text-3xl font-bold text-primary">100%</span>
<span className="text-xs uppercase font-semibold text-outline tracking-wider">Ancient Millets</span>
</div>
<div className="flex flex-col">
<span className="font-headline text-2xl md:text-3xl font-bold text-secondary">0%</span>
<span className="text-xs uppercase font-semibold text-outline tracking-wider">Refined Maida</span>
</div>
<div className="flex flex-col">
<span className="font-headline text-2xl md:text-3xl font-bold text-primary">Pure</span>
<span className="text-xs uppercase font-semibold text-outline tracking-wider">Palm Jaggery</span>
</div>
<div className="flex flex-col">
<span className="font-headline text-2xl md:text-3xl font-bold text-tertiary-container">Fresh</span>
<span className="text-xs uppercase font-semibold text-outline tracking-wider">Small-Batch Baked</span>
</div>
</div>
</div>
<div className="lg:col-span-5 flex justify-center lg:justify-end">
<div className="relative w-56 sm:w-72 lg:w-80 xl:w-[22rem] aspect-square flex items-center justify-center">
<div className="absolute inset-6 rounded-full bg-secondary-container/25 blur-2xl pointer-events-none" />
<div className="relative w-full h-full rounded-full bg-surface-container-lowest/80 border border-outline-variant/40 warm-card-shadow flex items-center justify-center p-8 md:p-10">
<img
                alt="Millet Bakes logo"
                className="w-full h-full object-contain"
                src={LOGO_SRC}
              />
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section 2: Founder Spotlight Feature */}
<section className="py-20 bg-surface-container-low/50 relative">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="bg-surface rounded-2xl border border-outline-variant/40 p-8 md:p-14 shadow-sm relative overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
{/* Founder Portrait Frame */}
<div className="lg:col-span-5 relative flex justify-center">
<div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden border-4 border-surface-container-high shadow-md">
<img alt="Santhiya Karthikeyan Founder &amp; Chief Baker" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo2JJYABvIudYCmoELIkU-tUuoGswvo5YgHiyC7ZUuBxITT7TnPI5hL5HdDXKfk_rwj-v_ULleEqTd4ep_YYXhoBLBpKJGTM9cTAHEk_2MgwGZfandvBBesnQdxOGmXx7ALQwj44HPyZgqQwEFZm8tqTJxPQCcA7-yDIwu2rJU6w7-5_5AfDtxSnfNX2DGHcDOdYKQg1V3c_gb8DOIQc175atqPBIWGd2YFlrszayLTA0NjYu_n0ttYXg_PaEhVpj3sP8" />
{/* Stamped Seal Badge */}
<div className="absolute bottom-4 left-4 bg-primary-container/90 backdrop-blur-md text-on-primary-container px-3.5 py-2 rounded-xl text-left border border-outline-variant/30">
<p className="font-headline text-xs font-bold text-on-primary uppercase tracking-wider">Santhiya Karthikeyan</p>
<p className="text-[11px] text-primary-fixed-dim">Founder &amp; Chief Baker</p>
</div>
</div>
</div>
{/* Founder Narrative */}
<div className="lg:col-span-7 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 text-secondary font-headline text-xs uppercase font-bold tracking-widest mb-3">
<span className="material-symbols-outlined text-sm">verified</span>
<span className="">The Visionary Baker</span>
</div>
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">
                "Baking should heal, sustain, and delight—not compromise your health."
              </h2>
<p className="text-on-surface-variant font-body text-base leading-relaxed mb-6">
                Santhiya Karthikeyan founded Millet Bakes with a clear, heartfelt conviction: everyday sweet treats shouldn't rely on chemical preservatives, maida, or processed white sugar spikes. As an active member of <strong className="text-primary font-semibold">BNI Chennai</strong> and a clean-eating educator, Santhiya engineered original, craveable recipes combining traditional cold-pressed ingredients with wholesome grains.
              </p>
<blockquote className="bg-surface-container-low rounded-xl p-5 border-l-4 border-secondary text-on-surface mb-6 italic text-sm md:text-base leading-relaxed">
                “Every bake begins with ancient grains from responsible local farmers and unrefined jaggery—bringing wellness back to everyday indulgences.”
              </blockquote>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">location_on</span>
<div>
<h4 className="font-headline text-sm font-bold text-primary">Ayanavaram, Chennai</h4>
<p className="text-xs text-on-surface-variant">Artisan bakehouse roots</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">groups</span>
<div>
<h4 className="font-headline text-sm font-bold text-primary">BNI Chennai Network</h4>
<p className="text-xs text-on-surface-variant">Community-led wellness</p>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-2xl mt-0.5">favorite</span>
<div>
<h4 className="font-headline text-sm font-bold text-primary">Diabetic-Friendly</h4>
<p className="text-xs text-on-surface-variant">Low GI whole-grain craft</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Section 3: The Three Pillars of Craft */}
<section className="py-20 parchment-pattern border-y border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-headline text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2">Our Culinary Integrity</span>
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary mb-4">The Three Pillars of Craft</h2>
<p className="text-on-surface-variant text-sm md:text-base">We stand firmly against synthetic stabilizers, emulsifiers, or processed substitutes. Here is how we bake honesty into every tray.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Pillar 1 */}
<div className="bg-surface rounded-2xl p-8 border border-outline-variant/40 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-200">
<div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6 border border-outline-variant/30">
<span className="material-symbols-outlined text-3xl">grain</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">100% Ancient Heritage Grains</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              We exclusively use sprouted Finger Millet (Ragi), Kodo, and Foxtail grains. Naturally packed with dietary fiber, iron, calcium, and complex carbs that release balanced energy without the sudden glucose plunge.
            </p>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center gap-2 text-xs font-semibold text-secondary">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">Zero Refined Maida Ever</span>
</div>
</div>
{/* Pillar 2 */}
<div className="bg-surface rounded-2xl p-8 border border-outline-variant/40 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-200">
<div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6 border border-outline-variant/30">
<span className="material-symbols-outlined text-3xl">cookie</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Zero Refined Sugar &amp; Preservatives</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Our golden sweetness comes from organic, mineral-rich palm jaggery, unsweetened real date purées, and rich cocoa liquor. No artificial essence, no food colorants, and zero chemical shelf-extenders.
            </p>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center gap-2 text-xs font-semibold text-secondary">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">100% Unrefined Jaggery Craft</span>
</div>
</div>
{/* Pillar 3 */}
<div className="bg-surface rounded-2xl p-8 border border-outline-variant/40 shadow-sm flex flex-col hover:-translate-y-1 transition-transform duration-200">
<div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-6 border border-outline-variant/30">
<span className="material-symbols-outlined text-3xl">agriculture</span>
</div>
<h3 className="font-headline text-xl font-bold text-primary mb-3">Farm-to-Oven Sourcing</h3>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4">
              Direct and transparent partnerships with sustainable agricultural collectives across Tamil Nadu and Karnataka ensure pesticide-free harvests, fair prices to farming families, and immaculate grain purity.
            </p>
<div className="mt-auto pt-4 border-t border-surface-container flex items-center gap-2 text-xs font-semibold text-secondary">
<span className="material-symbols-outlined text-sm">check_circle</span>
<span className="">Direct Fair Trade Partnerships</span>
</div>
</div>
</div>
</div>
</section>
{/* Section 4: Timeline / The Millet Bakes Story */}
<section className="py-20 bg-surface">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="font-headline text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2">The Evolution</span>
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary">Milestones in Mindful Baking</h2>
</div>
<div className="relative border-l-2 border-outline-variant/40 max-w-3xl mx-auto pl-8 sm:pl-12 space-y-12">
{/* Milestone 1 */}
<div className="relative group">
<div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold ring-4 ring-surface">
              1
            </div>
<div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
<span className="font-headline text-xs font-bold text-secondary uppercase tracking-wider">Phase I • The Genesis</span>
<h3 className="font-headline text-xl font-bold text-primary mt-1 mb-2">Home Kitchen Experiments</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">
                Motivated by family health requirements and a deep curiosity for regional ingredients, Santhiya began perfecting low-glycemic, naturally sweet millet brownies, cookies, and tea-cakes without wheat or refined sugars.
              </p>
</div>
</div>
{/* Milestone 2 */}
<div className="relative group">
<div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface">
              2
            </div>
<div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
<span className="font-headline text-xs font-bold text-secondary uppercase tracking-wider">Phase II • Networking &amp; Validation</span>
<h3 className="font-headline text-xl font-bold text-primary mt-1 mb-2">BNI Chennai &amp; Community Health Advocacy</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">
                Joining the BNI Chennai business ecosystem propelled Millet Bakes from friendly samplings to full commercial catering. Community events, dietary roundtables, and health conclaves validated the overwhelming demand for authentic, sugar-free artisan bakes.
              </p>
</div>
</div>
{/* Milestone 3 */}
<div className="relative group">
<div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-secondary text-on-secondary flex items-center justify-center text-xs font-bold ring-4 ring-surface">
              3
            </div>
<div className="bg-surface-container-low p-6 rounded-2xl border border-outline-variant/30">
<span className="font-headline text-xs font-bold text-secondary uppercase tracking-wider">Phase III • Corporate &amp; Hands-On Learning</span>
<h3 className="font-headline text-xl font-bold text-primary mt-1 mb-2">Corporate Gifting Hampers &amp; Live Workshops</h3>
<p className="text-on-surface-variant text-sm leading-relaxed">
                Expanded into wellness-first corporate gifting boxes, festive milestone hampers, and interactive corporate team baking masterclasses designed to inspire connection and tangible lifestyle improvements.
              </p>
</div>
</div>
</div>
</div>
</section>
{/* Section 5: Behind The Bakes / Artisan Process Gallery */}
<section className="py-20 parchment-pattern border-t border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<span className="font-headline text-xs uppercase font-extrabold tracking-widest text-secondary block mb-2">Behind The Scenes</span>
<h2 className="font-headline text-3xl md:text-4xl font-extrabold text-primary">Artisan Craft in Motion</h2>
</div>
<p className="text-on-surface-variant text-sm max-w-md mt-4 md:mt-0">
            A glimpse into our communal tastings, bake expos, corporate workshops, and signature artisan chocolate ragi biscuits.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Image 1: Signature Ragi Cookies Poster/Art */}
<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="Millet Bakes Signature Ragi Chocolate Cookies" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDedmYtah_UJfP6vlvoZ67JEmyrFeaj-PdRXYOgGXSrMaqVEIQk3ua3XJtbiAfRJjOsBCWVFq3wFY6ukeccEBxel40ErayQFNGKIQU_OkM5XXXzAt8EslSvuVERIiMjNQtUINyIgW20I68Z4h76mFX-e651uPFfY28yMquNOn0U-9eTYGWJyW2MbFGvynmL2WSRGzKXt0c9XGx7phF_NAj1rDD5HXPy9E4TnLz91vSDovc__g_FXV5t0SRQqLWG1ELvdrA" />
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-1">
<span className="font-headline text-base font-bold text-primary">Signature Ragi Biscuits</span>
<span className="text-[11px] font-bold text-secondary bg-surface-container px-2 py-0.5 rounded-full">No Maida</span>
</div>
<p className="text-xs text-on-surface-variant">Carved with love, dark cocoa, and whole sprouted finger millet.</p>
</div>
</div>
{/* Image 2: Corporate Workshops & BNI Expo Collage */}
<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[3/4] overflow-hidden bg-surface-container">
<img alt="Corporate Workshops and Learning Expo Sessions" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJUbKEjEaduLHcjyhGE2aZSQrZTBnhwhxuRkUhs0bhQxDbeSxQT5Ys-jXPD2-w0QDKxL9xP-Vh3g1bJDNjHtJa0QcHTGqg7HIjs8ai7uNJ7HXLMr_yGigFw1l7cjysRotfG8wwLCar_zHGsB5mO5DKUMSL4lrixqGMO5RgafmE6sbGPTMWvwo31Iby_fgvMFkmcD1WVBfaP0b0-Bxfrtf7mBv6vbxWhXrR3XtLNZek4cQ61P1FV9jX138eSxPrj76fAc4" />
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-1">
<span className="font-headline text-base font-bold text-primary">Corporate Masterclasses</span>
<span className="text-[11px] font-bold text-secondary bg-surface-container px-2 py-0.5 rounded-full">BNI Chennai</span>
</div>
<p className="text-xs text-on-surface-variant">Interactive learning, festive bakes, and health-first networking.</p>
</div>
</div>
{/* Image 3: Fresh Baking & Oven Handcrafted Process */}
<div className="group relative rounded-2xl overflow-hidden border border-outline-variant/40 bg-surface shadow-sm hover:shadow-md transition-shadow">
<div className="aspect-[3/4] overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Close up of artisanal baker dusting stone-ground millet flour on rustic wooden kitchen table surrounded by palm jaggery, raw cacao nibs, and freshly baked dark crust cookies in warm natural bakery lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNF7tO5FOMj6uWO9RoS7Ha5qv7qythJR3JtMJZlGfS_3Gx5RDB6hPug9wYxkYcQXY5FQaYNbqx2gbdadyA-SCo_u-KomOWy_AAyIT1ofxgxa0IdbLUnpcGSh23NI2AgfPlmdmywRpj7PnfScdJwj4o8G5M5c1u4_YEDUgZasrfW6ASMfW2Rfu580tsn-pBqfEaBNG8r3IDcC9gwzcCZraL-WNt-6XMElEXMLn81UwqUoRi97uaRUebBQ" />
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-1">
<span className="font-headline text-base font-bold text-primary">Handcrafted Daily</span>
<span className="text-[11px] font-bold text-secondary bg-surface-container px-2 py-0.5 rounded-full">Small Batch</span>
</div>
<p className="text-xs text-on-surface-variant">Oven-fresh trays prepared upon order to guarantee maximum vitality.</p>
</div>
</div>
</div>
</div>
</section>
{/* Section 6: Call to Action */}
<section className="py-16 md:py-20 bg-primary-container text-on-primary-container relative overflow-hidden">
{/* Ambient decorative rings */}
<div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full border border-outline/20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
<div className="max-w-2xl mx-auto">
<span className="text-secondary-fixed text-xs uppercase font-extrabold tracking-widest mb-3 block">Indulge Consciously</span>
<h2 className="font-headline text-3xl md:text-5xl font-extrabold text-on-primary mb-6 leading-tight">
            Taste the Difference of Pure Millet &amp; Palm Jaggery
          </h2>
<p className="text-on-primary-container font-body text-base mb-10">
            Ready to swap empty calories for nourishing ancient bakes? Explore our ready-to-dispatch gift hampers or connect with Santhiya for corporate wellness masterclasses.
          </p>
<div className="flex flex-wrap items-center justify-center gap-4">
{/* Explore Shop CTA */}
<Link className="px-8 py-3.5 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary font-headline text-sm font-bold tracking-wide transition-all duration-200 shadow-md active:scale-95 flex items-center gap-2" href="/shop">
<span className="material-symbols-outlined text-lg">storefront</span>
<span className="">Explore Our Bakes</span>
</Link>
{/* Corporate Workshops CTA */}
<Link className="px-7 py-3.5 rounded-full bg-transparent hover:bg-primary/40 text-on-primary border border-outline-variant/60 font-headline text-sm font-semibold tracking-wide transition-all duration-200 active:scale-95 flex items-center gap-2" href="/corporate">
<span className="material-symbols-outlined text-lg">school</span>
<span className="">Book Corporate Workshop</span>
</Link>
{/* WhatsApp Direct Action */}
<a className="px-7 py-3.5 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container font-headline text-sm font-bold tracking-wide transition-all duration-200 shadow-sm active:scale-95 flex items-center gap-2" href="https://wa.me/916383100431" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-secondary text-lg">chat</span>
<span className="">WhatsApp: +91 63831 00431</span>
</a>
</div>
</div>
</div>
</section>
</main>
{/* Footer (Shared Component) */}

    </div>
  );
}
