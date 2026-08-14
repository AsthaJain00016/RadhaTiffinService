import { useEffect, useState } from "react";
import { brand, waLink } from "@/lib/brand";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Plans", href: "#plans" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#order" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        solid ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-warm text-lg text-primary-foreground">
            र
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-base font-bold text-foreground">
              Radha's Tiffin
            </span>
            <span className="block text-[11px] text-muted-foreground">{brand.secondaryTagline}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="hidden rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex"
          >
            Order Now
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden"
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href={waLink("Namaste! Mujhe Radha's Tiffin Services ke baare mein jaankari chahiye.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full text-2xl shadow-lift transition-transform hover:scale-105 md:bottom-8"
      style={{ backgroundColor: "oklch(0.62 0.16 152)" }}
    >
      <span className="text-primary-foreground">💬</span>
    </a>
  );
}

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <a
          href="#order"
          className="flex-1 rounded-full bg-gradient-warm px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft"
        >
          Order Now
        </a>
        <a
          href={waLink("Namaste! Tiffin order karna hai.")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 rounded-full border border-accent px-4 py-3 text-center text-sm font-semibold text-accent"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <h3 className="text-xl">{brand.name}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{brand.tagline}</p>
          <p className="mt-3 text-xs text-muted-foreground">{brand.secondaryTagline}</p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Explore</h4>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-foreground transition-colors hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-widest text-muted-foreground">Reach us</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={waLink("Namaste! Tiffin ke baare mein poochna hai.")} className="hover:text-primary">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-primary">
                {brand.phone}
              </a>
            </li>
            <li>
              <a href={brand.instagram} className="hover:text-primary">
                Instagram
              </a>
            </li>
            <li>
              <a href="#delivery" className="hover:text-primary">
                Delivery Area
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {brand.name}. Made with care in a home kitchen.
      </p>
    </footer>
  );
}