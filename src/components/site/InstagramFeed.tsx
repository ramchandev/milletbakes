"use client";

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";

export function InstagramFeed() {
  return (
    <div className="rounded-2xl overflow-hidden parchment-border bg-surface-container-lowest warm-card-shadow">
      <iframe
        title={`${INSTAGRAM_HANDLE} Instagram feed`}
        className="w-full min-h-[720px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.instagram.com/millet_bakes/embed"
      />
      <div className="p-4 text-center border-t border-outline-variant/30">
        <a
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition"
          href={INSTAGRAM_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Follow {INSTAGRAM_HANDLE} on Instagram
        </a>
      </div>
    </div>
  );
}
