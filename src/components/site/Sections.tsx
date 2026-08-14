import { useState } from "react";
import galleryTiffin from "@/assets/gallery-tiffin.jpg";
import galleryThali from "@/assets/gallery-thali.jpg";
import galleryRoti from "@/assets/gallery-roti.jpg";
import galleryDal from "@/assets/gallery-dal.jpg";
import gallerySabzi from "@/assets/gallery-sabzi.jpg";
import galleryPacking from "@/assets/gallery-packing.jpg";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import { brand, faqs, plans, reviews, todaysMenu, waLink } from "@/lib/brand";

function Heading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</span>
      )}
      <h2 className="mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-sm text-muted-foreground md:text-base">{sub}</p>}
    </div>
  );
}

const whyCards = [
  { icon: "🍛", title: "Ghar Jaisa Taste", text: "Traditional recipes and comforting homemade flavours." },
  { icon: "🥗", title: "Freshly Prepared", text: "Fresh food prepared daily with quality ingredients." },
  { icon: "🧼", title: "Hygienic & Clean", text: "Prepared and packed with proper hygiene and care." },
  { icon: "🛵", title: "Daily Delivery", text: "Fresh tiffin delivered conveniently to your doorstep." },
  { icon: "❤️", title: "Made With Care", text: "Food prepared with the warmth and care of a home kitchen." },
];

export function Why() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          eyebrow="Why Radha's Tiffin?"
          title="Ghar ka khana, roz ki fikr ke bina"
          sub="Simple food, honest cooking and delivery you can depend on."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyCards.map((c) => (
            <article
              key={c.title}
              className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl">{c.icon}</span>
              <h3 className="mt-3 text-lg text-foreground">{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Plans() {
  return (
    <section id="plans" className="bg-gradient-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading
          eyebrow="Our Tiffin Plans"
          title="Choose the plan that fits your day"
          sub="Prices shown are placeholders — update them anytime."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <article
              key={p.name}
              className={`flex flex-col rounded-3xl border bg-card p-7 transition-transform hover:-translate-y-1 ${
                p.featured ? "border-primary/40 shadow-lift md:-mt-3" : "border-border shadow-soft"
              }`}
            >
              {p.featured && (
                <span className="mb-3 w-fit rounded-full bg-gradient-warm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-xl text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-primary">{p.price}</span>
                <span className="text-sm text-muted-foreground">{p.per}</span>
              </p>
              <ul className="mt-5 flex-1 space-y-2 text-sm text-foreground">
                {p.items.map((i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent">✓</span>
                    {i}
                  </li>
                ))}
              </ul>
              <a
                href={waLink(`Namaste! Mujhe ${p.name} chahiye. Details bhej dijiye.`)}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${
                  p.featured
                    ? "bg-gradient-warm text-primary-foreground shadow-soft"
                    : "border border-accent/40 text-accent"
                }`}
              >
                {p.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <Heading eyebrow="Today's Menu" title="Today's Special 🍽️" sub="Menu badalta rehta hai — seasonal aur fresh." />
        <div className="mt-10 rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-9">
          <ul className="divide-y divide-border">
            {todaysMenu.map((m, i) => (
              <li key={m.item} className="flex items-center gap-4 py-3.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">
                  <span className="block text-base font-semibold text-foreground">{m.item}</span>
                  <span className="block text-xs text-muted-foreground">{m.note}</span>
                </span>
              </li>
            ))}
          </ul>
          <a
            href={waLink("Namaste! Full menu bhej dijiye please.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 block rounded-full bg-gradient-warm px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-soft"
          >
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  );
}

const gallery = [
  { src: galleryThali, alt: "Home-style Indian thali with roti, rice, dal and sabzi" },
  { src: galleryTiffin, alt: "Stack of steel tiffin boxes ready for delivery" },
  { src: galleryRoti, alt: "Stack of fresh soft chapatis with ghee" },
  { src: galleryDal, alt: "Bowl of home-style dal tadka" },
  { src: gallerySabzi, alt: "Seasonal sabzi with steamed rice" },
  { src: galleryPacking, alt: "Hygienically packed tiffin parcel ready to go" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-gradient-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="Food Gallery" title="Taste the Difference" sub="Roz ki thali, roti se packaging tak." />
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {gallery.map((g) => (
            <figure key={g.alt} className="group overflow-hidden rounded-3xl shadow-soft">
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                width={900}
                height={900}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Choose Your Plan", text: "Select Daily, Weekly or Monthly Tiffin." },
  { n: "02", title: "Place Your Order", text: "Order through WhatsApp or the website." },
  { n: "03", title: "Fresh Food is Prepared", text: "Your meal is freshly prepared with care." },
  { n: "04", title: "Delivered to Your Doorstep", text: "Enjoy fresh ghar-jaisa food without the hassle." },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="How It Works" title="Char simple steps" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <article key={s.n} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-primary/35">{s.n}</span>
              <h3 className="mt-2 text-lg text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const serves = [
  { icon: "🎓", title: "Students", text: "Affordable and convenient daily meals." },
  { icon: "💼", title: "Working Professionals", text: "Healthy home-style lunch/dinner at work or home." },
  { icon: "🏠", title: "Families", text: "Fresh meals when you need a convenient option." },
  { icon: "👴", title: "Senior Citizens", text: "Simple, comforting and home-style food." },
];

export function WhoWeServe() {
  return (
    <section className="bg-gradient-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="Who We Serve" title="Har ghar, har din" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serves.map((s) => (
            <article
              key={s.title}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="text-3xl">{s.icon}</span>
              <h3 className="mt-3 text-base text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="Customer Reviews" title="Jo khaya, wahi bola" sub="Placeholder reviews — replace with your real customer feedback." />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.text} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <span className="text-sm tracking-widest text-primary">★★★★★</span>
              <p className="mt-3 text-base text-foreground">“{r.text}”</p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — {r.author}
                <span className="block text-xs">{r.meta}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Delivery() {
  return (
    <section id="delivery" className="bg-gradient-cream py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <Heading eyebrow="Delivery Area" title="Fresh Tiffin, Right at Your Doorstep 🛵" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg text-foreground">Delivery Locations</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {brand.deliveryAreas.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-accent">📍</span>
                  {a}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg text-foreground">Delivery Timings</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {brand.deliveryTimings.map((t) => (
                <li key={t.label}>
                  <span className="font-semibold text-foreground">{t.label}:</span> {t.value}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-border bg-card p-6 shadow-soft">
            <h3 className="text-lg text-foreground">Delivery Charges</h3>
            <p className="mt-3 text-sm text-muted-foreground">{brand.deliveryCharges}</p>
          </article>
        </div>
        <div className="mt-8 text-center">
          <a
            href={waLink("Namaste! Kya aap meri location par delivery karte hain? Meri location: ")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift"
          >
            Check Delivery Availability
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2">
        <figure className="overflow-hidden rounded-[2rem] shadow-lift">
          <img
            src={aboutKitchen}
            alt="Fresh rotis being rolled in a clean home kitchen"
            loading="lazy"
            width={1200}
            height={1200}
            className="h-full w-full object-cover"
          />
        </figure>
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</span>
          <h2 className="mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl">Food That Feels Like Home ❤️</h2>
          <p className="mt-4 text-sm text-muted-foreground md:text-base">
            {brand.name} started with one simple thought — jo log ghar se door hain, unhe ghar ka khana milna
            chahiye. Har tiffin ek home kitchen mein banta hai, roz fresh, saaf-safai ke saath.
          </p>
          <p className="mt-3 text-sm text-muted-foreground md:text-base">
            Simple recipes, quality ingredients, no shortcuts. Students, working professionals, families aur senior
            citizens — sabke liye comforting, hygienic aur bharosemand khana, roz time par delivered.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {["Fresh daily cooking", "Hygienic packing", "Home-style recipes", "On-time delivery"].map((t) => (
              <li key={t} className="rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-soft">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gradient-cream py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <Heading eyebrow="FAQ" title="Aapke sawaal, hamare jawab" />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-base font-semibold text-foreground">{f.q}</span>
                <span className="text-primary">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-warm px-6 py-14 text-center shadow-lift md:px-12">
        <h2 className="text-2xl text-primary-foreground sm:text-3xl md:text-4xl">
          Ghar ki yaad aaye, toh ghar ka taste order kijiye ❤️
        </h2>
        <p className="mt-4 text-sm text-primary-foreground/85 md:text-base">
          Fresh • Homemade • Hygienic • Delivered Daily
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#order"
            className="rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary shadow-soft"
          >
            Order Your Tiffin
          </a>
          <a
            href={waLink("Namaste! Tiffin order karna hai.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-primary-foreground/60 px-7 py-3.5 text-sm font-semibold text-primary-foreground"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}