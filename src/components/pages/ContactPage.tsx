"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { INQUIRY_HANDOFF_KEY, storeLeadHandoff } from "@/lib/lead-handoff";
import { emailLead } from "@/lib/submit-lead-client";

export default function ContactPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState(0);
  const [sending, setSending] = useState(false);

  async function submitInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("full_name") || "");
    const email = String(data.get("email") || "");
    const phone = String(data.get("phone") || "");
    const date = String(data.get("delivery_date") || "Flexible");
    const type = String(data.get("inquiry_type") || "");
    const message = String(data.get("message") || "");
    const preferences = data.getAll("preference").map(String).join(", ") || "None";
    const fields = {
      Name: name,
      Email: email,
      Phone: phone,
      "Delivery / event date": date,
      "Inquiry type": type,
      "Dietary preferences": preferences,
      Message: message,
    };

    setSending(true);
    try {
      await emailLead({
        type: "inquiry",
        subject: `Inquiry: ${type || "Millet Bakes"} — ${name}`,
        replyTo: email,
        fields,
      });
      storeLeadHandoff(INQUIRY_HANDOFF_KEY, {
        fields,
        message: `*Contact Inquiry - Millet Bakes*\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nType: ${type}\nPreferences: ${preferences}\nMessage: ${message}`,
      });
      router.push("/inquiry-thankyou");
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "Could not send the inquiry. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="flex-1 reveal">

{/* TopNavBar (Shared Component) */}

{/* Main Content Canvas */}
<main className="min-h-screen">
{/* Hero / Page Header */}
<section className="relative bg-surface-container-low py-14 md:py-20 border-b border-outline-variant/30">
<div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
{/* Wholesome Botanical Micro Badge */}
<div className="inline-flex items-center gap-2 bg-surface-container-lowest px-4 py-1.5 rounded-full border border-outline-variant/40 shadow-xs mb-6">
<span className="material-symbols-outlined text-secondary text-sm">spa</span>
<span className="font-stamp text-[11px] font-extrabold uppercase tracking-wider text-secondary">Hearth &amp; Harvest Support</span>
</div>
<h1 className="font-headline font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary max-w-3xl mx-auto leading-tight tracking-tight mb-4">
          Get in Touch with Millet Bakes
        </h1>
<p className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Freshly baked inquiries, bespoke corporate wellness gift boxes, sourdough workshops, and customized guilt-free celebration cakes crafted with 100% ancient grains.
        </p>
{/* Quick Proof Highlights */}
<div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8 pt-6 border-t border-outline-variant/20 max-w-4xl mx-auto text-xs md:text-sm font-semibold text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">100% Zero Refined Sugar</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Unbleached Organic Jaggery</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-base">check_circle</span>
<span className="">Handcrafted in Chennai</span>
</div>
</div>
</div>
</section>
{/* Two-Column Contact Section */}
<section className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
{/* Column A: Direct Contact & Founder Connect (5 cols) */}
<div className="lg:col-span-5 space-y-8">
{/* Founder Card */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/40 shadow-sm relative overflow-hidden">
{/* Decorative wheat/dough stamp watermarking */}
<div className="absolute -right-8 -bottom-8 opacity-5 pointer-events-none select-none">
<span className="material-symbols-outlined text-9xl text-primary">bakery_dining</span>
</div>
<div className="flex items-center gap-5 mb-6">
<div className="relative">
<img alt="Santhiya Karthikeyan - Founder &amp; Master Baker" className="w-20 h-20 rounded-full object-cover border-2 border-secondary/40 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNgSrn5El9bwvKs74pLDVzjU09BtdBbmcMagpXNv0b1dTC6fjV7cXZFwaHQVB6fZXL8_5H_vSci3SfOihqYS9WJXlHuvKUTJ5NxKIShlgfsoRSqsYqEsnJ6iASA4fEuE5UoT-P2VVQWGDTiDUbCpT9shMFEAxQSnshhtCIjyEXUPPeYQLWYBoIBAU1JHx_NhtFRPjML1DV-QycolNAC654ss_Zm1cOeNj9tnZpMyAE8Q_qmzGrSCh5YR2hqmXPmxTZSRc" />
<span className="absolute bottom-0 right-0 w-5 h-5 bg-secondary text-white rounded-full flex items-center justify-center text-[11px] shadow">
<span className="material-symbols-outlined text-[13px]">verified</span>
</span>
</div>
<div>
<span className="font-stamp text-[10px] font-bold text-secondary uppercase tracking-widest block mb-0.5">Founder &amp; Master Baker</span>
<h2 className="font-headline font-bold text-xl text-primary">Santhiya Karthikeyan</h2>
<p className="font-body text-xs text-on-surface-variant">Ancient Grain Artisan &amp; Nutrition Advocate</p>
</div>
</div>
<blockquote className="font-body italic text-sm text-on-surface-variant bg-surface-container-low/60 p-4 rounded-lg border-l-2 border-secondary mb-6 leading-relaxed">
              “Whether you have dietary questions or wish to design a bespoke hamper for your team or family celebrations, feel free to reach out directly! Every bake is mixed with reverence for tradition.”
            </blockquote>
<a className="w-full inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full font-label text-sm font-semibold transition-transform active:scale-95 shadow-sm" href="https://wa.me/916383100431" rel="noopener noreferrer" target="_blank">
<span className="material-symbols-outlined text-[20px]">chat</span>
<span className="">Quick WhatsApp Chat</span>
</a>
</div>
{/* Studio & Operating Information Grid */}
<div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/40 shadow-sm space-y-6">
<h3 className="font-headline font-bold text-lg text-primary flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">storefront</span>
<span className="">Studio &amp; Logistics</span>
</h3>
{/* Direct Phone / WhatsApp */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined">call</span>
</div>
<div>
<p className="font-label text-xs uppercase tracking-wider text-outline font-bold">Direct Phone / WhatsApp</p>
<a className="font-headline font-bold text-primary hover:text-secondary transition-colors text-base" href="tel:+916383100431">
                  +91 63831 00431
                </a>
<p className="font-body text-xs text-on-surface-variant mt-0.5">Fastest response for urgent delivery slots</p>
</div>
</div>
{/* Studio Address */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<p className="font-label text-xs uppercase tracking-wider text-outline font-bold">Bakery Studio</p>
<p className="font-body text-sm font-medium text-primary">
                  Ayanavaram, Chennai, Tamil Nadu - 600023
                </p>
<p className="font-body text-xs text-on-surface-variant mt-0.5">Pickups welcome by prior slot booking</p>
</div>
</div>
{/* Operating Hours & Dispatch Schedule */}
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined">schedule</span>
</div>
<div>
<p className="font-label text-xs uppercase tracking-wider text-outline font-bold">Operating Hours</p>
<p className="font-body text-sm font-medium text-primary">
                  Monday to Saturday: 9:00 AM – 7:30 PM
                </p>
<div className="inline-flex items-center gap-1.5 mt-2 bg-secondary-fixed/50 text-on-secondary-fixed-variant px-2.5 py-1 rounded text-xs font-semibold">
<span className="material-symbols-outlined text-[14px]">local_shipping</span>
<span className="">Fresh batches dispatch daily at 4:00 PM</span>
</div>
</div>
</div>
{/* Social Channel */}
<div className="flex items-start gap-4 pt-2 border-t border-outline-variant/30">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined">photo_camera</span>
</div>
<div>
<p className="font-label text-xs uppercase tracking-wider text-outline font-bold">Instagram Community</p>
<a className="font-body text-sm font-semibold text-secondary hover:underline" href="https://instagram.com/millet_bakes" rel="noopener noreferrer" target="_blank">
                  @millet_bakes
                </a>
<p className="font-body text-xs text-on-surface-variant">Daily bake reveals &amp; grain harvesting videos</p>
</div>
</div>
</div>
{/* Artisan Stamp Seal Assurance */}
<div className="p-6 rounded-xl bg-surface-container border border-outline-variant/40 flex items-center gap-4">
<div className="w-14 h-14 rounded-full border-2 border-dashed border-secondary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-2xl text-secondary">grain</span>
</div>
<div>
<p className="font-headline font-bold text-sm text-primary">Pure Millet &amp; Jaggery Standard</p>
<p className="font-body text-xs text-on-surface-variant mt-1">
                Zero refined white flour (Maida), zero palm oils, and zero chemical preservatives in our micro-kitchen.
              </p>
</div>
</div>
</div>
{/* Column B: Interactive Message & Order Inquiry Form (7 cols) */}
<div className="lg:col-span-7">
<div className="bg-surface-container-lowest rounded-xl p-8 md:p-10 border border-outline-variant/40 shadow-sm relative">
<div className="mb-8">
<span className="font-stamp text-[11px] font-bold text-secondary uppercase tracking-widest block mb-1">Direct Hearth Form</span>
<h2 className="font-headline font-bold text-2xl md:text-3xl text-primary">Send an Order or Workshop Inquiry</h2>
<p className="font-body text-sm text-on-surface-variant mt-2">
                Fill in the details below and we will get back to you with custom grain profiles, pricing, and dispatch schedule within 3 business hours.
              </p>
</div>
<form className="space-y-6" onSubmit={submitInquiry}>
{/* Personal Details Row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Full Name */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="full_name">
                    Your Name <span className="text-error">*</span>
</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="full_name" name="full_name" placeholder="e.g. Ananya Sundaram" required type="text" />
</div>
{/* Email Address */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="email">
                    Email Address <span className="text-error">*</span>
</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="email" name="email" placeholder="ananya@example.com" required type="email" />
</div>
</div>
{/* Phone & Delivery Date Row */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
{/* Phone / WhatsApp Number */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="phone">
                    Phone / WhatsApp Number <span className="text-error">*</span>
</label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="phone" name="phone" placeholder="+91 98765 43210" required type="tel" />
</div>
{/* Desired Event / Delivery Date */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="delivery_date">
                    Desired Delivery / Event Date
                  </label>
<input className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="delivery_date" name="delivery_date" type="date" />
</div>
</div>
{/* Inquiry Type Selector */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="inquiry_type">
                  Inquiry Purpose <span className="text-error">*</span>
</label>
<select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="inquiry_type" name="inquiry_type" required>
<option value="Personal Treat Order">Personal Treat Order (Cookies, Granola Jars, Brownies)</option>
<option value="Corporate Workshop">Corporate Workshop (Hands-on Millet Baking for Teams)</option>
<option value="Bulk &amp; Wedding Gifting">Bulk &amp; Wedding Gifting (Customized Hampers &amp; Tins)</option>
<option value="Custom Dietary Formulation">Custom Dietary Formulation (Diabetic, Toddler, Vegan)</option>
<option value="Other General Query">Other General Query</option>
</select>
</div>
{/* Dietary Specifics & Allergies Pills (Multi-selection tags) */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2">
                  Dietary Preferences &amp; Tailoring
                </label>
<div className="flex flex-wrap gap-2.5">
<label className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-secondary-fixed transition-colors">
<input className="rounded text-secondary focus:ring-secondary" name="preference" type="checkbox" value="Gluten-free" />
<span className="">Gluten-free Millets</span>
</label>
<label className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-secondary-fixed transition-colors">
<input defaultChecked className="rounded text-secondary focus:ring-secondary" name="preference" type="checkbox" value="Eggless" />
<span className="">100% Eggless</span>
</label>
<label className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-secondary-fixed transition-colors">
<input className="rounded text-secondary focus:ring-secondary" name="preference" type="checkbox" value="Diabetic-friendly" />
<span className="">Diabetic-friendly (Zero Cane)</span>
</label>
<label className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-secondary-fixed transition-colors">
<input className="rounded text-secondary focus:ring-secondary" name="preference" type="checkbox" value="Vegan" />
<span className="">Dairy-free / Vegan</span>
</label>
<label className="inline-flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full text-xs font-medium cursor-pointer hover:bg-secondary-fixed transition-colors">
<input className="rounded text-secondary focus:ring-secondary" name="preference" type="checkbox" value="Nut-free" />
<span className="">Nut-free Kitchen Batch</span>
</label>
</div>
</div>
{/* Message / Special Instructions */}
<div>
<label className="block font-label text-xs uppercase tracking-wider text-on-surface-variant font-bold mb-2" htmlFor="message">
                  Message, Quantity &amp; Details <span className="text-error">*</span>
</label>
<textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-primary placeholder:text-outline focus:border-secondary focus:ring-1 focus:ring-secondary transition-all outline-none" id="message" name="message" placeholder="Tell us about the number of gift boxes, particular flavors (Ragi Cacao, Foxtail Crunch, Jowar Spiced), or customized corporate branding requirements..." required rows={4}></textarea>
</div>
{/* Submit CTA Button */}
<div className="pt-2">
<button className="w-full bg-primary hover:bg-primary-container text-white py-3.5 px-8 rounded-full font-label font-bold text-sm tracking-wide shadow-md transition-all duration-200 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-60" disabled={sending} type="submit">
<span className="">{sending ? "Sending…" : "Send Inquiry"}</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</button>
<p className="font-body text-center text-xs text-outline mt-3">
                  We reply directly via WhatsApp or Email. No spam, ever.
                </p>
</div>
</form>
</div>
</div>
</div>
</section>
{/* Hamper & Evening Snack Showcase Banner */}
<section className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
<div className="bg-surface-container-low rounded-xl border border-outline-variant/40 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="max-w-xl space-y-3">
<div className="inline-flex items-center gap-1.5 text-secondary font-stamp text-xs font-bold uppercase">
<span className="material-symbols-outlined text-sm">redeem</span>
<span className="">Evening Wellness Snack Boxes</span>
</div>
<h3 className="font-headline font-bold text-2xl md:text-3xl text-primary">
            Curate Custom Corporate or Celebration Hampers
          </h3>
<p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Need customized message sleeves, wooden keepsake boxes, or curated pantry jars for weddings, conferences, or festive gifting? We handle orders from 10 to 5,000+ units.
          </p>
</div>
<div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<a className="text-center px-6 py-3 rounded-full border border-primary text-primary hover:bg-surface-container font-label text-sm font-semibold transition-colors" href="tel:+916383100431">
            Call +91 63831 00431
          </a>
<a className="text-center px-6 py-3 rounded-full bg-secondary hover:bg-secondary/90 text-white font-label text-sm font-semibold transition-transform active:scale-95 shadow-sm" href="https://wa.me/916383100431?text=Hi%20Santhiya,%20I%20am%20interested%20in%20custom%20hampers">
            Request Hamper Catalog
          </a>
</div>
</div>
</section>
{/* Frequently Asked Questions Accordion Section */}
<section className="bg-surface-container-low/60 border-t border-outline-variant/30 py-16 md:py-24">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<div className="text-center mb-12">
<span className="font-stamp text-[11px] font-extrabold uppercase tracking-widest text-secondary block mb-1">Common Inquiries</span>
<h2 className="font-headline font-bold text-3xl md:text-4xl text-primary">Frequently Asked Questions</h2>
<p className="font-body text-sm text-on-surface-variant mt-2 max-w-xl mx-auto">
            Everything you need to know about our slow baking craft, ingredients, and courier logistics.
          </p>
</div>
<div className="space-y-4" id="faq-container">
{/* FAQ Item 1 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs transition-colors">
<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick={() => setOpenFaq(openFaq === 0 ? -1 : 0)} type="button">
<span className="">What is the shelf life and ideal storage for Millet Bakes?</span>
<span className={`material-symbols-outlined transition-transform duration-300 transform text-secondary ${openFaq === 0 ? "rotate-180" : ""}`}>expand_less</span>
</button>
<div className={`px-6 pb-5 pt-0 text-sm font-body text-on-surface-variant leading-relaxed ${openFaq === 0 ? "" : "hidden"}`}>
              Since we bake without chemical stabilizers, our baked artisan cookies and crisps remain fresh and crispy for <strong>35 to 45 days</strong> in an airtight container away from direct sunlight. Fresh sourdough millet loaves and brownies have a shelf life of <strong>4 to 5 days</strong> at room temperature, or up to 10 days if refrigerated.
            </div>
</div>
{/* FAQ Item 2 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs transition-colors">
<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick={() => setOpenFaq(openFaq === 1 ? -1 : 1)} type="button">
<span className="">How do you sweeten your bakes without refined white sugar?</span>
<span className={`material-symbols-outlined transition-transform duration-300 transform text-secondary ${openFaq === 1 ? "rotate-180" : ""}`}>expand_less</span>
</button>
<div className={`px-6 pb-5 pt-0 text-sm font-body text-on-surface-variant leading-relaxed ${openFaq === 1 ? "" : "hidden"}`}>
              We exclusively use single-origin organic jaggery powder, palm jaggery (Karupatti), dates puree, and native raw honey. We strictly exclude high-fructose corn syrup, artificial sweeteners, and bleached white cane sugar. This preserves rich mineral profiles including iron and magnesium.
            </div>
</div>
{/* FAQ Item 3 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs transition-colors">
<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick={() => setOpenFaq(openFaq === 2 ? -1 : 2)} type="button">
<span className="">Do you offer Chennai same-day delivery and Pan-India courier shipping?</span>
<span className={`material-symbols-outlined transition-transform duration-300 transform text-secondary ${openFaq === 2 ? "rotate-180" : ""}`}>expand_less</span>
</button>
<div className={`px-6 pb-5 pt-0 text-sm font-body text-on-surface-variant leading-relaxed ${openFaq === 2 ? "" : "hidden"}`}>
<strong>Within Chennai:</strong> Same-day or next-day direct hyperlocal couriers dispatch fresh from our Ayanavaram kitchen for freshly baked cakes and breads.<br /><br />
<strong>Pan-India Shipping:</strong> Our sealed millet cookie jars, savory crisps, and granola hampers ship across India via air courier, reaching most metros within 48 to 72 hours.
            </div>
</div>
{/* FAQ Item 4 */}
<div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden shadow-xs transition-colors">
<button className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 text-primary font-headline font-semibold text-base md:text-lg focus:outline-none" onClick={() => setOpenFaq(openFaq === 3 ? -1 : 3)} type="button">
<span className="">What are the requirements for corporate workshops and masterclasses?</span>
<span className={`material-symbols-outlined transition-transform duration-300 transform text-secondary ${openFaq === 3 ? "rotate-180" : ""}`}>expand_less</span>
</button>
<div className={`px-6 pb-5 pt-0 text-sm font-body text-on-surface-variant leading-relaxed ${openFaq === 3 ? "" : "hidden"}`}>
              We conduct experiential hands-on workshops for corporate health days, residential communities, and culinary schools. We cater to cohorts starting from 12 participants up to 60+ individuals. We bring ancient grain starter kits, baking ingredients, and step-by-step guidance tailored for beginner bakers.
            </div>
</div>
</div>
</div>
</section>
</main>
{/* Footer (Shared Component) */}

{/* Vanilla JS for Accordion Interaction */}

    </div>
  );
}
