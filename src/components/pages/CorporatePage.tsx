"use client";

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
      `*Corporate Inquiry - Millet Bakes*\n\nCompany: ${company}\nContact: ${person}\nEmail: ${email}\nPhone: ${phone}\nTeam Size: ${teamSize}\nOffering: ${workshopType}\nDate: ${date || "Flexible"}\nLocation: ${city}\nNotes: ${notes || "None"}\n\nPlease share workshop availability and a tasting proposal.`,
    );
    window.alert("Thank you! Your corporate inquiry has been submitted. Our team will contact you shortly.");
    event.currentTarget.reset();
  }

  return (
    <div className="flex-1 reveal">

{/* TopNavBar (Shared Component) */}

{/* Main Content Canvas */}
<main className="w-full overflow-hidden">
{/* HERO SECTION */}
<section className="relative pt-10 pb-16 md:pt-16 md:pb-24 border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/* Left: Editorial Content */}
<div className="lg:col-span-6 flex flex-col items-start gap-6">
{/* Badge / Artisan Stamp */}
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-fixed/50 border border-secondary/20">
<span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
<span className="font-label-stamp text-label-stamp text-secondary uppercase tracking-widest">Chennai &amp; PAN-India Team Experiences</span>
</div>
{/* Main Headline */}
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary tracking-tight">
              Inspiring Connection, Valuable Learning &amp; Healthy Bakes
            </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              Engaging hands-on corporate culinary experiences, employee wellness masterclasses, and tailored artisanal gift hampers for your team. Empower your workforce with ancient grain mindfulness.
            </p>
{/* Key Feature Badges */}
<div className="flex flex-wrap gap-2 pt-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8EFEA] text-[#4E6E58] font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">eco</span>
                Zero Refined Sugar
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F9ECE5] text-[#C86D46] font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">grain</span>
                100% Ancient Millets
              </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-[14px]">groups</span>
                Teams from 10 to 200+
              </span>
</div>
{/* Call to Actions */}
<div className="flex flex-wrap gap-4 pt-4">
<a className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-[#2B150E] transition-all shadow-[0_4px_16px_-2px_rgba(58,29,19,0.12)]" href="#booking-inquiry">
                Book a Team Session
              </a>
<a className="inline-flex items-center justify-center px-7 py-3.5 rounded-full border border-primary text-primary font-label-lg text-label-lg hover:bg-surface-container transition-all" href="#offerings">
                Explore Masterclasses
              </a>
</div>
{/* Quick Trust Metric */}
<div className="pt-4 border-t border-outline-variant/30 flex items-center gap-6 text-on-surface-variant">
<div>
<span className="font-headline-md text-headline-md text-primary font-bold block">50+</span>
<span className="font-label-md text-label-md">Corporate Clients</span>
</div>
<div className="w-px h-10 bg-outline-variant/40"></div>
<div>
<span className="font-headline-md text-headline-md text-primary font-bold block">2,500+</span>
<span className="font-label-md text-label-md">Participants</span>
</div>
<div className="w-px h-10 bg-outline-variant/40"></div>
<div>
<span className="font-headline-md text-headline-md text-secondary font-bold block">100%</span>
<span className="font-label-md text-label-md">Maida-Free</span>
</div>
</div>
</div>
{/* Right: Visual Collage / Feature Showcase Card */}
<div className="lg:col-span-6 relative">
<div className="relative bg-surface-container-lowest p-4 md:p-6 rounded-2xl border border-outline-variant/40 shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)]">
{/* Parchment Texture / Warm Tone Accent Header */}
<div className="flex items-center justify-between pb-4 border-b border-outline-variant/20 mb-4">
<div className="flex items-center gap-2">
<span className="w-3 h-3 rounded-full bg-secondary"></span>
<span className="font-label-stamp text-label-stamp uppercase tracking-wider text-on-surface-variant">Live Onsite Workshop Gallery</span>
</div>
<span className="font-label-md text-label-md text-secondary font-semibold">Symposium &amp; Corporate Pop-ups</span>
</div>
{/* Main Showcase Image: Corporate Event & Tasting table */}
<div className="overflow-hidden rounded-xl bg-surface-container relative group">
<img className="w-full h-80 md:h-[420px] object-cover transition-transform duration-500 group-hover:scale-105" alt="A lively and vibrant corporate wellness baking workshop scene hosted by Millet Bakes. Indian corporate employees and professionals smile while engaging in hands-on organic grain pastry prep around rustic wooden counters. The setup is styled with terracotta bowls, golden jaggery powder, roasted millet snacks, and elegant eco-friendly presentation boxes in warm natural sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuADm50eq_4x8Wffjd7hfnJyguAvG3N--MGDKOzLDge45Enz-eWEUOSd7_a5Oo-Se_pzZswa12y2mc1fpPSXvM532vwcvfEnmnVkdlvmk_Kgtglx3VsjOorvtB8WppmMQiNLP8A45zERnnPB3v5QETv0iW0cGWvImJtnZZDej6Yqy_ah7cz7XtpWwD5YFUKvUwCaZSaXvZ9Is7jnlrihlxbG-WybQI6L-zPkIEVQHn_JO0SDKwIdWfGuUQ" />
{/* Floating Artisan Seal Badge */}
<div className="absolute bottom-4 right-4 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-xl border border-outline-variant/30 shadow-md flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary-container text-primary-fixed flex items-center justify-center font-bold text-lg">
                    🌾
                  </div>
<div>
<span className="font-label-stamp text-label-stamp uppercase text-secondary block font-bold">Millet Bakes Stamp</span>
<span className="font-body-sm text-body-sm text-primary font-bold">100% Jaggery &amp; Millets</span>
</div>
</div>
</div>
{/* Mini Sub-Grid of Corporate Moments */}
<div className="grid grid-cols-3 gap-3 mt-3">
<div className="bg-surface-container-low rounded-lg p-2.5 border border-outline-variant/20 flex flex-col justify-center text-center">
<span className="material-symbols-outlined text-secondary mx-auto mb-1 text-[20px]">cookie</span>
<span className="font-label-md text-label-md font-bold text-primary">Ragi Cookies</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Hands-on Mixing</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 border border-outline-variant/20 flex flex-col justify-center text-center">
<span className="material-symbols-outlined text-secondary mx-auto mb-1 text-[20px]">nutrition</span>
<span className="font-label-md text-label-md font-bold text-primary">Zero Sugar</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Desk Snack Hacks</span>
</div>
<div className="bg-surface-container-low rounded-lg p-2.5 border border-outline-variant/20 flex flex-col justify-center text-center">
<span className="material-symbols-outlined text-secondary mx-auto mb-1 text-[20px]">featured_seasonal_and_gifts</span>
<span className="font-label-md text-label-md font-bold text-primary">Custom Hampers</span>
<span className="font-body-sm text-body-sm text-on-surface-variant text-[11px]">Eco Branding</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 2: THE 3 DISTINCT WORKSHOP & GIFTING OFFERINGS */}
<section className="py-16 md:py-24 bg-surface-container-low/50" id="offerings">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold mb-2 block">Curated Corporate Engagements</span>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Designed for Team Wellness, Connection &amp; Mindful Living
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-4">
            Whether boosting office culture with experiential team baking or celebrating quarterly milestones with healthy luxury gifting, our programs deliver wholesome impact.
          </p>
</div>
{/* Bento Grid Offerings */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
{/* Offering 1: Ancient Grains Baking Masterclass */}
<div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
<div>
<div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-6">
<span className="material-symbols-outlined text-[28px]">cooking</span>
</div>
<span className="inline-block font-label-stamp text-label-stamp uppercase text-secondary mb-2">Signature Experience</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Hands-on Ancient Grains Baking Masterclass</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Teams learn to work with native ragi, foxtail millet, and natural country jaggery. An interactive sensory session demystifying ancient grain chemistry.
              </p>
<div className="space-y-3 pt-4 border-t border-outline-variant/20">
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Custom apron, chef hat &amp; individual ingredient kits</span>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Illustrated recipe keepsake cards &amp; temperature guides</span>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Generous take-home baked treat box for every attendee</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Duration: 2.5 - 3 Hours</span>
<a className="font-label-lg text-label-lg text-secondary font-bold hover:underline inline-flex items-center gap-1" href="#booking-inquiry">
                Inquire <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
{/* Offering 2: Corporate Desk Wellness & Mindful Snacking (Features Image 5) */}
<div className="md:col-span-6 lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
<div>
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary-container mb-6">
<span className="material-symbols-outlined text-[28px]">spa</span>
</div>
<span className="inline-block font-label-stamp text-label-stamp uppercase text-[#4E6E58] mb-2">Nutritional Wellness</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Corporate Desk Wellness &amp; Mindful Snacking</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
                An interactive health talk and tasting session on swapping ultra-processed 4 PM office snacks with wholesome energy boosters and roasted superfood bites.
              </p>
{/* Image 5 Integration (Evening Wellness Snacks Box Context) */}
<div className="my-4 rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container">
<img alt="Evening Wellness Snacks Box presentation by Millet Bakes" className="w-full h-44 object-cover object-center" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPoexSKjvzKdrLW58n1sWjFGSfdC6o8uzJzH0iTvUIsrcnNNIGb65qc44I1iCSneWeqr1lC8FtMliA6JI2eqpjah-0NpawDsBfgP-fyTLqsTUZLPFy4ZGcKtqBi0HrS80E5AAU8CKTgKUlqALf2bkM67pIpuhoWGwkzAarbonV8N2YaUARbxsIwRW25xqs13Ys2skJ7qEqLnc3spcBuw2Hoo_03nuCkHYTRMz7fHpMyOwuegSCgZ5YHd_gzr8wH_2Bdtg" />
</div>
<div className="space-y-3 pt-2">
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Live demonstration: Millet granola &amp; raw super-seed clusters</span>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Evening Wellness Snack Box gift sample for each employee</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Duration: 60 - 90 Mins</span>
<a className="font-label-lg text-label-lg text-secondary font-bold hover:underline inline-flex items-center gap-1" href="#booking-inquiry">
                Inquire <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
{/* Offering 3: Bespoke Executive Gifting & Custom Hampers */}
<div className="md:col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary-fixed mb-6">
<span className="material-symbols-outlined text-[28px]">redeem</span>
</div>
<span className="inline-block font-label-stamp text-label-stamp uppercase text-secondary mb-2">Corporate Gifting</span>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Bespoke Executive Gifting &amp; Custom Hampers</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Premium zero-sugar artisan hampers curated for festival gifting, leadership onboarding, conference delegates, and employee milestone rewards.
              </p>
<div className="space-y-3 pt-4 border-t border-outline-variant/20">
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Custom foil-stamped corporate logo &amp; personalized thank-you note</span>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Handcrafted millet brownies, dry-fruit crunchies &amp; seed brittle</span>
</div>
<div className="flex items-start gap-2.5">
<span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">check_circle</span>
<span className="font-body-sm text-body-sm text-on-surface">Climate-conscious sustainable corrugated and tin packaging</span>
</div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-outline-variant/20 flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Min Order: 15 Units</span>
<a className="font-label-lg text-label-lg text-secondary font-bold hover:underline inline-flex items-center gap-1" href="#booking-inquiry">
                Download Catalog <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</div>
</section><section className="py-16 md:py-24 bg-surface border-t border-outline-variant/30" id="workshop-flow">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold mb-2 block">Typical Workshop Flow &amp; Hands-on Agenda</span>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        Inside a Millet Bakes Workshop: The Hands-on Journey
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
        A thoughtfully paced 2.5 to 3-hour immersive culinary masterclass crafted to inspire teamwork, sensory discovery, and guilt-free baking mastery right at your office or offsite venue.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Step 01 */}
      <div className="relative bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.08)] transition-all group">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-10 h-10 rounded-full bg-secondary-fixed text-secondary font-display font-extrabold flex items-center justify-center text-sm">01</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">15 Mins</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-3">
            <span className="material-symbols-outlined text-[22px]">psychiatry</span>
          </div>
          <h3 className="font-headline-sm text-[18px] text-primary mb-2 font-bold">Warm Welcome &amp; Ancient Grain Sensory Bar</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Touch, smell, and identify traditional millets (Sprouted Ragi, Foxtail, Kodo, Barnyard) and raw unrefined palm jaggery; understanding their glycemic benefits and cultural roots.
          </p>
        </div>
        <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-secondary font-label-md text-label-md font-semibold">
          <span className="material-symbols-outlined text-[16px]">grain</span>
          <span className="">Sensory Exploration</span>
        </div>
      </div>
      {/* Step 02 */}
      <div className="relative bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.08)] transition-all group">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-10 h-10 rounded-full bg-tertiary-fixed text-tertiary-container font-display font-extrabold flex items-center justify-center text-sm">02</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">45 Mins</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-[#4E6E58] mb-3">
            <span className="material-symbols-outlined text-[22px]">science</span>
          </div>
          <h3 className="font-headline-sm text-[18px] text-primary mb-2 font-bold">Artisan Science &amp; Dough Crafting</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Hands-on formulation under Master Baker Santhiya. Measuring, kneading, emulsifying with cold-pressed oils, and mastering zero-maida, zero-refined-sugar gluten-smart dough consistency.
          </p>
        </div>
        <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-[#4E6E58] font-label-md text-label-md font-semibold">
          <span className="material-symbols-outlined text-[16px]">cookie</span>
          <span className="">Emulsifying &amp; Kneading</span>
        </div>
      </div>
      {/* Step 03 */}
      <div className="relative bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.08)] transition-all group">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-10 h-10 rounded-full bg-secondary-container/60 text-secondary font-display font-extrabold flex items-center justify-center text-sm">03</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">45 Mins</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary mb-3">
            <span className="material-symbols-outlined text-[22px]">oven_gen</span>
          </div>
          <h3 className="font-headline-sm text-[18px] text-primary mb-2 font-bold">Bake, Shape &amp; Collaborative Team Challenge</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Teams shape signature dark ragi chocolate cookies or tea cake loaves, experiment with natural spice infusions, and bake in portable clean convection setups.
          </p>
        </div>
        <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-secondary font-label-md text-label-md font-semibold">
          <span className="material-symbols-outlined text-[16px]">groups</span>
          <span className="">Team Creative Bake</span>
        </div>
      </div>
      {/* Step 04 */}
      <div className="relative bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.08)] transition-all group">
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-10 h-10 rounded-full bg-primary-fixed text-primary font-display font-extrabold flex items-center justify-center text-sm">04</span>
            <span className="px-2.5 py-1 rounded-full bg-surface-container font-label-md text-label-md text-on-surface-variant">30 Mins</span>
          </div>
          <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary mb-3">
            <span className="material-symbols-outlined text-[22px]">local_cafe</span>
          </div>
          <h3 className="font-headline-sm text-[18px] text-primary mb-2 font-bold">Tasting Circle, Packaging &amp; Mindful Takeaway</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Plating, sensory tasting evaluation, custom eco-kraft box packaging, recipe keepsake signing, and open Q&amp;A with founder Santhiya Karthikeyan.
          </p>
        </div>
        <div className="mt-6 pt-3 border-t border-outline-variant/20 flex items-center gap-1.5 text-primary font-label-md text-label-md font-semibold">
          <span className="material-symbols-outlined text-[16px]">redeem</span>
          <span className="">Gift Box &amp; Tasting</span>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="py-16 md:py-24 bg-surface-container-low" id="team-takeaways">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold mb-2 block">What Your Team Takes Home: Beyond the Oven</span>
      <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
        What Employees Take Back: More Than Just Fresh Bakes
      </h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-4 leading-relaxed">
        A nourishing transformation that bridges nutritional wisdom, personal accomplishment, and genuine team camaraderie.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-surface-container-lowest p-7 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-tertiary-fixed flex items-center justify-center text-tertiary-container mb-5">
            <span className="material-symbols-outlined text-[26px]">menu_book</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">Ancient Grain Wisdom &amp; Lifelong Baking Basics</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Deep foundational knowledge of demystifying millets, unrefined sweeteners, and practical techniques to replicate wholesome, guilt-free bakes in their own home kitchens.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <span className="font-label-stamp text-label-stamp uppercase text-[#4E6E58] font-bold">Practical Skills for Life</span>
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-surface-container-lowest p-7 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary mb-5">
            <span className="material-symbols-outlined text-[26px]">diversity_1</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">Deep Sense of Teamwork &amp; Shared Camaraderie</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Stepping away from screens to collaborate hands-on. Baking dissolves departmental silos, sparks laughter, and builds authentic human connection through shared sensory craft.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <span className="font-label-stamp text-label-stamp uppercase text-secondary font-bold">Screen-Free Bonding</span>
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-surface-container-lowest p-7 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary-fixed mb-5">
            <span className="material-symbols-outlined text-[26px]">award_star</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">A Resounding Feeling of Self-Accomplishment</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            The unmatched pride of taking raw, wholesome grains and crafting delectable, golden treats from scratch with one's own hands—experiencing instant creative fulfillment.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <span className="font-label-stamp text-label-stamp uppercase text-primary font-bold">Tangible Creative Joy</span>
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-surface-container-lowest p-7 rounded-2xl border border-outline-variant/40 flex flex-col justify-between hover:shadow-[0_12px_28px_-4px_rgba(58,29,19,0.1)] transition-all">
        <div>
          <div className="w-12 h-12 rounded-xl bg-[#F9ECE5] flex items-center justify-center text-[#C86D46] mb-5">
            <span className="material-symbols-outlined text-[26px]">sentiment_very_satisfied</span>
          </div>
          <h3 className="font-title-lg text-title-lg text-primary mb-3 font-bold">Pure Happiness &amp; Tangible Take-Home Goodies</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Every participant carries home their personalized freshly-baked treat box, an embossed recipe keepsake card, and a lasting renewed mindset toward mindful daily snacking.
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-outline-variant/20">
          <span className="font-label-stamp text-label-stamp uppercase text-[#C86D46] font-bold">Wholesome Souvenirs</span>
        </div>
      </div>
    </div>
  </div>
</section>
{/* SECTION 3: SOCIAL PROOF, STATS & EXPERIENCE HIGHLIGHTS */}
<section className="py-16 md:py-20 border-y border-outline-variant/30 bg-surface">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
{/* Proof Points & Client Logos Concept */}
<div className="lg:col-span-5">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold mb-2 block">Proven Impact in Workplace Wellness</span>
<h2 className="font-headline-md text-headline-md text-primary mb-4">
              Trusted by IT Leaders, Innovators &amp; Creative Agencies
            </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-8 leading-relaxed">
              We have conducted high-energy live baking sessions and wellness installations across major IT corridors, tech hubs in Chennai, and national corporate summits.
            </p>
<div className="space-y-4">
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
<span className="material-symbols-outlined text-secondary text-[24px]">verified_user</span>
<div>
<h4 className="font-title-lg text-title-lg text-primary">Turnkey Onsite Logistics</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">We bring portable induction ovens, certified food-grade cook stations, and ingredients directly to your cafeteria or conference room.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
<span className="material-symbols-outlined text-secondary text-[24px]">workspace_premium</span>
<div>
<h4 className="font-title-lg text-title-lg text-primary">Certified Dietary Inclusivity</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">100% vegetarian, eggless, diabetic-friendly, and naturally gluten-conscious recipe configurations available for diverse teams.</p>
</div>
</div>
</div>
</div>
{/* Visual Bento of Participant Impressions */}
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
{/* Testimonial 1 */}
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-secondary mb-3">
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic mb-4">
                  "Our engineering squad spent the entire afternoon making ragi brownies. It broke all department silos, and everyone went home with a warm, healthy box. Best team outing ever!"
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20">
<span className="font-title-lg text-title-lg text-primary block">Priya Ramanathan</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">People Ops Lead, SaaS Unicorn Chennai</span>
</div>
</div>
{/* Testimonial 2 */}
<div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 flex flex-col justify-between">
<div>
<div className="flex gap-1 text-secondary mb-3">
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
<span className="material-symbols-outlined text-[18px] fill">star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic mb-4">
                  "The customized Diwali wellness boxes with our company embossing earned glowing compliments from executive clients. Completely zero refined sugar, yet incredibly decadent."
                </p>
</div>
<div className="pt-4 border-t border-outline-variant/20">
<span className="font-title-lg text-title-lg text-primary block">Karthik Sundaram</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Director of Client Success, FinTech Global</span>
</div>
</div>
{/* Photo Highlight 1 */}
<div className="relative rounded-xl overflow-hidden h-48 border border-outline-variant/30 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Close up artisanal corporate gift hamper box by Millet Bakes featuring golden foil labels, packed with glass jars of ancient grain seed trail mix, hand-wrapped ragi cookies, and a custom wellness greeting card on warm burlap parchment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtqVuoBre3IjwV1XKyaHchcjGA1qot681tJWHA6V81IQq_L7BGyMnQVt6F1C8nCkFPSxaC7Shw0eyT-Hxn_RUWqdeckoo6HnLNGCSeYWj6dnKlpYvVwAQq_3GybtFV2fmnckfgTDJs7rSR-MxKHcsVGmPWmqSHs-YiNhWovgOoBRvkN387KjOtBtNS23lrBBartzEaKy12maIXxDbtdzVZRpbij12uSINg0UnS84_qpUbSioro2f3xXQ" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
<span className="text-on-primary font-label-md text-label-md">Custom Client Hampers</span>
</div>
</div>
{/* Photo Highlight 2 */}
<div className="relative rounded-xl overflow-hidden h-48 border border-outline-variant/30 group">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" alt="Corporate workshop room with diverse employees in baking aprons cheerfully holding up freshly baked millet muffins and artisanal bread loaves, laughing together during a team building activity under warm ambient indoor lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmuK98B8I6OBe1Oesc4E1T9VcVdg98BKD9hDM1d2CxC46mCoaNrT2oQ4XD_Ib9B4BtBmPaKF972T7PHyoAJZjJt5yXWjd3a6pc8gcmH28ONencvBpWuf9CI3aKfN4LtUcW4khLDx2hvehy9grQ5WzYYFowkuOgVkdcwCREQneEgwvuwZR3BPLfybO8iV5-3LeMkPC3iHePiUFnjRr7pxwgZ0I8HnjAX3dHjKi7F8gAYqYl47Pbuu3ug" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-4">
<span className="text-on-primary font-label-md text-label-md">Interactive Team Sessions</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 4: INQUIRY & BOOKING FORM */}
<section className="py-16 md:py-24 bg-surface-container-low" id="booking-inquiry">
<div className="max-w-4xl mx-auto px-6 md:px-12">
{/* Header */}
<div className="text-center mb-12">
<span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary font-bold mb-2 block">Corporate Bookings &amp; Inquiries</span>
<h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Plan Your Team's Culinary Experience
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-xl mx-auto">
            Fill in your team details below. Our corporate wellness coordinator will get in touch within 24 hours with custom packages and sample menus.
          </p>
</div>
{/* Form Card with warm tactile styling */}
<div className="bg-surface-container-lowest p-8 md:p-12 rounded-3xl border border-outline-variant/40 shadow-[0_12px_28px_-4px_rgba(58,29,19,0.08)]">
<form className="space-y-6" onSubmit={submitInquiry}>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Company Name */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="companyName">Company / Organization Name *</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="companyName" name="companyName" placeholder="e.g. Acme Technologies India" required type="text" />
</div>
{/* Contact Person */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="contactPerson">Contact Person Name *</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="contactPerson" name="contactPerson" placeholder="e.g. Ananya Sharma" required type="text" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Work Email */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="workEmail">Work Email *</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="workEmail" name="workEmail" placeholder="ananya@company.com" required type="email" />
</div>
{/* Phone / WhatsApp */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="phone">Phone / WhatsApp Number *</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="phone" name="phone" placeholder="+91 98765 43210" required type="tel" />
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Team Size Selector */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="teamSize">Estimated Team Size *</label>
<select className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="teamSize" name="teamSize" required defaultValue="">
<option disabled value="">Select participant count</option>
<option value="10-25">10 - 25 Participants (Intimate Masterclass)</option>
<option value="25-50">25 - 50 Participants (Department Workshop)</option>
<option value="50-100">50 - 100 Participants (Company Offsite)</option>
<option value="100+">100+ Participants (Enterprise / Festival Gifting)</option>
</select>
</div>
{/* Workshop Type */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="workshopType">Preferred Engagement *</label>
<select className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="workshopType" name="workshopType" required defaultValue="">
<option disabled value="">Select service</option>
<option value="onsite-masterclass">On-Site Office Baking Masterclass</option>
<option value="baking-studio">External Studio Culinary Experience</option>
<option value="desk-wellness">Desk Wellness &amp; Mindful Snacking Talk</option>
<option value="corporate-hampers">Bespoke Corporate Gift Hampers</option>
<option value="hybrid">Combined Workshop &amp; Wellness Hampers</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Tentative Date */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="tentativeDate">Tentative Event Date</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="tentativeDate" name="tentativeDate" type="date" />
</div>
{/* Location / City */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="locationCity">Office Location / City *</label>
<input className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="locationCity" name="locationCity" placeholder="e.g. OMR Chennai, Bengaluru, or Remote" required type="text" />
</div>
</div>
{/* Custom Requests */}
<div>
<label className="block font-label-lg text-label-lg text-primary mb-2" htmlFor="customRequests">Specific Requirements or Dietary Notes</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-[#DCCBC0] bg-surface-container-lowest text-on-surface placeholder:text-[#948278] focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" id="customRequests" name="customRequests" placeholder="Tell us about special dietary preferences (gluten-free, vegan, diabetic), custom branding on hampers, or preferred schedules..." rows={3}></textarea>
</div>
{/* Submit CTA */}
<div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
<button className="w-full sm:w-auto px-10 py-4 rounded-full bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container hover:text-primary-fixed transition-all active:scale-[0.98] shadow-md" type="submit">
                Submit Corporate Request
              </button>
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-[16px] text-secondary">lock</span>
                No spam. Your company details are kept confidential.
              </span>
</div>
</form>
</div>
{/* Direct Contact Banner */}
<div className="mt-8 bg-primary-container text-on-primary-container p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-outline/20">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-fixed/20 flex items-center justify-center text-primary-fixed shrink-0">
<span className="material-symbols-outlined text-[24px]">phone_in_talk</span>
</div>
<div>
<span className="font-title-lg text-title-lg text-on-primary block">Need an urgent corporate hamper quote?</span>
<span className="font-body-sm text-body-sm text-on-primary-container">Call or WhatsApp our founder at +91 63831 00431 or DM @millet_bakes</span>
</div>
</div>
<a className="px-6 py-3 rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:bg-[#B45D38] transition-all whitespace-nowrap" href="https://wa.me/916383100431?text=Hi%20Millet%20Bakes,%20I'd%20like%20to%20inquire%20about%20a%20corporate%20workshop%20and%20wellness%20gifting." rel="noopener noreferrer" target="_blank">
            WhatsApp Founder
          </a>
</div>
</div>
</section>
</main>
{/* Footer (Shared Component) */}

    </div>
  );
}
