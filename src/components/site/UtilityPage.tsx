import Link from "next/link";
import type { ReactNode } from "react";

function isAppRoute(href: string) {
  return href.startsWith("/") && !href.endsWith(".txt") && !href.endsWith(".xml");
}

export function UtilityPage({
  stamp,
  title,
  intro,
  children,
}: {
  stamp: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <main className="flex-1 parchment-pattern">
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <span className="font-stamp text-[11px] font-extrabold uppercase tracking-widest text-secondary block mb-2">
          {stamp}
        </span>
        <h1 className="font-headline font-bold text-3xl md:text-5xl text-primary tracking-tight">
          {title}
        </h1>
        <p className="font-body text-sm md:text-base text-on-surface-variant mt-4 max-w-2xl leading-relaxed">
          {intro}
        </p>
        <div className="mt-10 space-y-8 font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
          {children}
        </div>
      </section>
    </main>
  );
}

export function UtilityLinkList({
  items,
}: {
  items: { href: string; name: string; summary: string }[];
}) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={`${item.href}-${item.name}`}>
          {isAppRoute(item.href) ? (
            <Link
              className="block bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-5 hover:border-secondary/50 transition-colors warm-card-shadow"
              href={item.href}
            >
              <span className="font-headline font-bold text-primary">{item.name}</span>
              <p className="font-body text-sm text-on-surface-variant mt-1 leading-relaxed">
                {item.summary}
              </p>
            </Link>
          ) : (
            <a
              className="block bg-surface-container-lowest rounded-xl border border-outline-variant/40 p-5 hover:border-secondary/50 transition-colors warm-card-shadow"
              href={item.href}
            >
              <span className="font-headline font-bold text-primary">{item.name}</span>
              <p className="font-body text-sm text-on-surface-variant mt-1 leading-relaxed">
                {item.summary}
              </p>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
}
