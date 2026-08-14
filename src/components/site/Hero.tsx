import heroThali from "@/assets/hero-thali.jpg";
import { brand, waLink } from "@/lib/brand";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-cream pb-16 pt-28 md:pb-24 md:pt-36">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-warm)" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            🍲 {brand.secondaryTagline}
          </span>
          <h1 className="mt-5 text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.9rem]">
            {brand.tagline}
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground md:text-lg">
            Fresh, hygienic aur ghar jaisa delicious khana — ab daily aapke doorstep par.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#order"
              className="rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
            >
              Order Your Tiffin
            </a>
            <a
              href="#menu"
              className="rounded-full border border-accent/40 bg-card px-6 py-3.5 text-sm font-semibold text-accent shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              View Menu
            </a>
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Freshly Prepared • Hygienic • Daily Delivery
          </p>
        </div>

        <div className="relative reveal">
          <div className="overflow-hidden rounded-[2rem] shadow-lift">
            <img
              src={heroThali}
              alt="Fresh home-style Indian thali tiffin with roti, sabzi, dal, rice, salad and pickle"
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
            <p className="text-sm font-semibold text-foreground">Aaj ka tiffin ready hai</p>
            <p className="text-xs text-muted-foreground">Roti • Sabzi • Dal • Rice • Salad</p>
          </div>
          <a
            href={waLink("Namaste! Aaj ka tiffin book karna hai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -top-3 right-3 hidden rounded-full bg-card px-4 py-2 text-xs font-semibold text-accent shadow-soft md:block"
          >
            Quick order on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}