import Link from "next/link";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "@/lib/site";
import { InstagramFeed } from "@/components/site/InstagramFeed";

const STUDIO_PHOTOS = [
  {
    src: "/gallery/cookies-stack.jpg",
    alt: "Stack of freshly baked millet cookies",
  },
  {
    src: "/gallery/oat-cookies.jpg",
    alt: "Oat cookie with chocolate chips",
  },
  {
    src: "/gallery/brownies-grid.jpg",
    alt: "Salted chocolate brownies cut into squares",
  },
  {
    src: "/gallery/wheat-brownies.jpg",
    alt: "Fudgy wheat brownies with a crinkle top",
  },
  {
    src: "/gallery/brownie-stack.jpg",
    alt: "Stacked chocolate chip brownies",
  },
  {
    src: "/gallery/handmade-cookies.jpg",
    alt: "Handmade millet cookies baked in a small batch",
  },
  {
    src: "/gallery/granola-jars.jpg",
    alt: "Millet granola jars from the Chennai studio",
  },
];

export default function GalleryPage() {
  return (
    <div className="flex-1 reveal">
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 border-b border-outline-variant/30 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">
            From the oven
          </span>
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-primary tracking-tight mt-2">
            Photo Gallery
          </h1>
          <p className="font-body text-base md:text-lg text-on-surface-variant mt-3 max-w-2xl leading-relaxed">
            Fresh millet cookies, granola jars, cakes, and hampers from the Ayanavaram kitchen — plus the latest from{" "}
            <a className="text-secondary font-semibold underline underline-offset-2" href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
              {INSTAGRAM_HANDLE}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <h2 className="font-headline text-2xl font-bold text-primary mb-6">Bakery snapshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STUDIO_PHOTOS.map((photo) => (
            <figure key={photo.src} className="rounded-2xl overflow-hidden parchment-border bg-surface-container-lowest warm-card-shadow">
              <img alt={photo.alt} className="w-full h-64 object-cover" src={photo.src} />
              <figcaption className="p-4 text-sm text-on-surface-variant">{photo.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low border-y border-outline-variant/30 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-headline text-2xl font-bold text-primary mb-2">Instagram</h2>
          <p className="font-body text-on-surface-variant mb-8">
            Daily bakes, workshops, and gifting from{" "}
            <a className="text-secondary font-semibold underline underline-offset-2" href={INSTAGRAM_URL} rel="noopener noreferrer" target="_blank">
              {INSTAGRAM_URL.replace("https://", "")}
            </a>
            .
          </p>
          <InstagramFeed />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 text-center">
        <Link className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-container transition" href="/shop">
          Shop the menu
        </Link>
      </section>
    </div>
  );
}
