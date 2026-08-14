import { useState } from "react";
import { brand, plans, waLink } from "@/lib/brand";

const inputClass =
  "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/50";

export function OrderForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    plan: plans[0]?.name ?? "Daily Tiffin",
    meal: "Lunch",
    quantity: "1",
    address: "",
    startDate: "",
    message: "",
  });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Namaste ${brand.name}! Tiffin order karna hai.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Plan: ${form.plan}`,
      `Meal: ${form.meal}`,
      `Quantity: ${form.quantity}`,
      `Address: ${form.address}`,
      `Start Date: ${form.startDate}`,
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(waLink(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="order" className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Order / Enquiry</span>
          <h2 className="mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl">Aaj hi tiffin book kijiye</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Form bhariye — aapki details seedha WhatsApp par chali jaayengi.
          </p>
        </div>

        <form
          onSubmit={submit}
          className="mt-10 grid gap-4 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8"
        >
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Name</span>
            <input required value={form.name} onChange={set("name")} placeholder="Aapka naam" className={inputClass} />
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Phone Number</span>
            <input
              required
              type="tel"
              value={form.phone}
              onChange={set("phone")}
              placeholder="10-digit mobile number"
              className={inputClass}
            />
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Choose Plan</span>
            <select value={form.plan} onChange={set("plan")} className={inputClass}>
              {plans.map((p) => (
                <option key={p.name} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Lunch / Dinner</span>
            <select value={form.meal} onChange={set("meal")} className={inputClass}>
              <option>Lunch</option>
              <option>Dinner</option>
              <option>Both</option>
            </select>
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Quantity</span>
            <input type="number" min="1" value={form.quantity} onChange={set("quantity")} className={inputClass} />
          </label>
          <label className="text-sm">
            <span className="mb-1.5 block font-medium text-foreground">Preferred Start Date</span>
            <input type="date" value={form.startDate} onChange={set("startDate")} className={inputClass} />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="mb-1.5 block font-medium text-foreground">Delivery Address</span>
            <textarea
              required
              rows={2}
              value={form.address}
              onChange={set("address")}
              placeholder="House / flat, area, landmark"
              className={inputClass}
            />
          </label>
          <label className="text-sm sm:col-span-2">
            <span className="mb-1.5 block font-medium text-foreground">Additional Message</span>
            <textarea
              rows={3}
              value={form.message}
              onChange={set("message")}
              placeholder="Less spice, no onion-garlic, extra roti..."
              className={inputClass}
            />
          </label>

          <button
            type="submit"
            className="sm:col-span-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]"
          >
            Send Order on WhatsApp
          </button>

          <div className="sm:col-span-2 flex flex-wrap justify-center gap-3 text-sm">
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="rounded-full border border-border px-5 py-2.5 font-semibold text-foreground"
            >
              Call Now
            </a>
            <a
              href={waLink("Namaste! Tiffin ke baare mein baat karni hai.")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/40 px-5 py-2.5 font-semibold text-accent"
            >
              WhatsApp Us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}