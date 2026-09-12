"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { readLeadHandoff, type LeadHandoff } from "@/lib/lead-handoff";
import { openWhatsApp } from "@/lib/site";

export function ThankYouLead({
  storageKey,
  stamp,
  title,
  homeHref,
  homeLabel,
}: {
  storageKey: string;
  stamp: string;
  title: string;
  homeHref: string;
  homeLabel: string;
}) {
  const [handoff, setHandoff] = useState<LeadHandoff | null>(null);

  useEffect(() => {
    setHandoff(readLeadHandoff(storageKey));
  }, [storageKey]);

  function sendWhatsApp() {
    openWhatsApp(
      handoff?.message ||
        "Hello Millet Bakes! I just submitted a form on the website and would like to share the details with you.",
    );
  }

  return (
    <main className="flex-1 parchment-pattern">
      <section className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center">
        <span className="font-stamp text-[11px] font-extrabold uppercase tracking-widest text-secondary block mb-3">
          {stamp}
        </span>
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary tracking-tight">
          {title}
        </h1>
        <p className="font-body text-sm md:text-base text-on-surface-variant mt-5 leading-relaxed max-w-2xl mx-auto">
          Email is sent, but you can still use WhatsApp to send these details to us directly.
        </p>
        {handoff?.fields ? (
          <div className="mt-10 text-left bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-6 md:p-8 warm-card-shadow">
            <p className="font-headline font-bold text-primary mb-4">Your details</p>
            <dl className="space-y-3">
              {Object.entries(handoff.fields).map(([label, value]) => (
                <div key={label}>
                  <dt className="font-label text-xs uppercase tracking-wider text-outline font-bold">
                    {label}
                  </dt>
                  <dd className="font-body text-sm text-on-surface mt-0.5 whitespace-pre-wrap">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
        <div className="mt-10 flex flex-col items-center gap-4">
          <button
            className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-3.5 rounded-full font-label font-bold text-sm shadow-md transition-all active:scale-[0.98]"
            onClick={sendWhatsApp}
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">chat</span>
            Click to Send in WhatsApp
          </button>
          <Link
            className="text-sm text-on-surface-variant hover:text-secondary transition-colors"
            href={homeHref}
          >
            {homeLabel}
          </Link>
        </div>
      </section>
    </main>
  );
}
