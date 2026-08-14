import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C8z5TZrU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var brand = {
	name: "Radha's Tiffin Services",
	tagline: "घर से दूर... लेकिन घर के स्वाद के करीब ❤️",
	secondaryTagline: "Fresh Tiffin | Daily Delivery",
	phone: "+91 XXXXX XXXXX",
	whatsapp: "91XXXXXXXXXX",
	instagram: "https://instagram.com/",
	deliveryAreas: [
		"Area 1 — placeholder",
		"Area 2 — placeholder",
		"Area 3 — placeholder"
	],
	deliveryTimings: [{
		label: "Lunch",
		value: "12:00 PM – 2:00 PM (editable)"
	}, {
		label: "Dinner",
		value: "7:00 PM – 9:00 PM (editable)"
	}],
	deliveryCharges: "Free within X km • ₹XX beyond that (editable)"
};
var waLink = (text) => `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;
var plans = [
	{
		name: "Daily Tiffin",
		price: "₹XXX",
		per: "/ tiffin",
		blurb: "Perfect for customers who need meals every day.",
		items: [
			"Roti",
			"Sabzi",
			"Dal",
			"Rice",
			"Salad / Pickle"
		],
		cta: "Order Now",
		featured: false
	},
	{
		name: "Weekly Plan",
		price: "₹XXX",
		per: "/ week",
		blurb: "A convenient plan for regular customers.",
		items: [
			"Fresh daily meals",
			"Weekly subscription",
			"Daily delivery"
		],
		cta: "Choose Plan",
		featured: true
	},
	{
		name: "Monthly Plan",
		price: "₹XXXX",
		per: "/ month",
		blurb: "Best value for students, working professionals and regular customers.",
		items: [
			"Regular daily tiffin",
			"Monthly subscription",
			"Hassle-free delivery"
		],
		cta: "Subscribe Now",
		featured: false
	}
];
var todaysMenu = [
	{
		item: "Roti / Chapati",
		note: "Hot & soft, made fresh"
	},
	{
		item: "Seasonal Sabzi",
		note: "Ghar jaisa masala"
	},
	{
		item: "Dal",
		note: "Tadka with desi ghee"
	},
	{
		item: "Steamed Rice",
		note: "Light and fluffy"
	},
	{
		item: "Salad",
		note: "Fresh cut daily"
	},
	{
		item: "Pickle",
		note: "Homemade achaar"
	}
];
var reviews = [
	{
		text: "Bilkul ghar jaisa taste aur food hamesha fresh milta hai.",
		author: "Customer",
		meta: "Placeholder review — editable"
	},
	{
		text: "Working days mein tiffin service ne khana manage karna bahut easy kar diya.",
		author: "Customer",
		meta: "Placeholder review — editable"
	},
	{
		text: "Roti soft, dal ghar jaisi aur delivery time par. Hostel life easy ho gayi.",
		author: "Customer",
		meta: "Placeholder review — editable"
	}
];
var faqs = [
	{
		q: "What type of food do you serve?",
		a: "Simple, home-style vegetarian Indian meals — roti, sabzi, dal, rice, salad and pickle, cooked the way it is made at home."
	},
	{
		q: "Do you provide daily tiffins?",
		a: "Yes, fresh tiffins are prepared and delivered every day at fixed lunch and dinner timings."
	},
	{
		q: "Do you offer weekly/monthly plans?",
		a: "Yes. Daily, weekly and monthly plans are available — the monthly plan offers the best value."
	},
	{
		q: "Which areas do you deliver to?",
		a: "Delivery areas are listed in the Delivery section. Message us on WhatsApp to confirm your location."
	},
	{
		q: "What are the delivery timings?",
		a: "Lunch and dinner delivery windows are shown in the Delivery section and can be updated by us anytime."
	},
	{
		q: "Can I customize my meal?",
		a: "Yes, simple customisations like less spice, no onion-garlic or extra roti can be requested while ordering."
	},
	{
		q: "How can I place an order?",
		a: "Fill the order form on this page and send it on WhatsApp, or simply call us."
	},
	{
		q: "Is advance booking required?",
		a: "For daily tiffin, please order a few hours in advance. Weekly and monthly plans start from your chosen date."
	}
];
var navLinks = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Menu",
		href: "#menu"
	},
	{
		label: "Plans",
		href: "#plans"
	},
	{
		label: "Gallery",
		href: "#gallery"
	},
	{
		label: "Reviews",
		href: "#reviews"
	},
	{
		label: "Contact",
		href: "#order"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [solid, setSolid] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setSolid(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-40 transition-all ${solid ? "bg-background/90 shadow-soft backdrop-blur-md" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-4 py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#home",
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-10 w-10 place-items-center rounded-2xl bg-gradient-warm text-lg text-primary-foreground",
						children: "र"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-[family-name:var(--font-display)] text-base font-bold text-foreground",
							children: "Radha's Tiffin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[11px] text-muted-foreground",
							children: brand.secondaryTagline
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 lg:flex",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-sm text-muted-foreground transition-colors hover:text-primary",
						children: l.label
					}, l.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#order",
						className: "hidden rounded-full bg-gradient-warm px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.03] sm:inline-flex",
						children: "Order Now"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						"aria-label": "Toggle menu",
						onClick: () => setOpen((v) => !v),
						className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card lg:hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg",
							children: open ? "✕" : "☰"
						})
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-4 pb-4 pt-2 lg:hidden",
			children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-secondary",
				children: l.label
			}, l.href))
		})]
	});
}
function WhatsAppFloat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: waLink("Namaste! Mujhe Radha's Tiffin Services ke baare mein jaankari chahiye."),
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat on WhatsApp",
		className: "fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-full text-2xl shadow-lift transition-transform hover:scale-105 md:bottom-8",
		style: { backgroundColor: "oklch(0.62 0.16 152)" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-primary-foreground",
			children: "💬"
		})
	});
}
function StickyMobileCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur-md md:hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#order",
				className: "flex-1 rounded-full bg-gradient-warm px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-soft",
				children: "Order Now"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: waLink("Namaste! Tiffin order karna hai."),
				target: "_blank",
				rel: "noopener noreferrer",
				className: "flex-1 rounded-full border border-accent px-4 py-3 text-center text-sm font-semibold text-accent",
				children: "WhatsApp"
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border bg-secondary/60 pb-24 pt-14 md:pb-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl",
						children: brand.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: brand.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted-foreground",
						children: brand.secondaryTagline
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm uppercase tracking-widest text-muted-foreground",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 grid grid-cols-2 gap-2 text-sm",
					children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: l.href,
						className: "text-foreground transition-colors hover:text-primary",
						children: l.label
					}) }, l.href))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-sm uppercase tracking-widest text-muted-foreground",
					children: "Reach us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Namaste! Tiffin ke baare mein poochna hai."),
							className: "hover:text-primary",
							children: "WhatsApp"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${brand.phone.replace(/\s/g, "")}`,
							className: "hover:text-primary",
							children: brand.phone
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: brand.instagram,
							className: "hover:text-primary",
							children: "Instagram"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#delivery",
							className: "hover:text-primary",
							children: "Delivery Area"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-10 text-center text-xs text-muted-foreground",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				brand.name,
				". Made with care in a home kitchen."
			]
		})]
	});
}
var hero_thali_default = "/assets/hero-thali-BdirYoaq.jpg";
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden bg-gradient-cream pb-16 pt-28 md:pb-24 md:pt-36",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			"aria-hidden": true,
			className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-40 blur-3xl",
			style: { background: "var(--gradient-warm)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:gap-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-soft",
						children: ["🍲 ", brand.secondaryTagline]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-5 text-3xl leading-tight text-foreground sm:text-4xl md:text-[2.9rem]",
						children: brand.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md text-base text-muted-foreground md:text-lg",
						children: "Fresh, hygienic aur ghar jaisa delicious khana — ab daily aapke doorstep par."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-7 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#order",
							className: "rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]",
							children: "Order Your Tiffin"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#menu",
							className: "rounded-full border border-accent/40 bg-card px-6 py-3.5 text-sm font-semibold text-accent shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground",
							children: "View Menu"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground",
						children: "Freshly Prepared • Hygienic • Daily Delivery"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-[2rem] shadow-lift",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_thali_default,
							alt: "Fresh home-style Indian thali tiffin with roti, sabzi, dal, rice, salad and pickle",
							width: 1408,
							height: 1104,
							className: "h-full w-full object-cover"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-5 left-4 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold text-foreground",
							children: "Aaj ka tiffin ready hai"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: "Roti • Sabzi • Dal • Rice • Salad"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Namaste! Aaj ka tiffin book karna hai."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "absolute -top-3 right-3 hidden rounded-full bg-card px-4 py-2 text-xs font-semibold text-accent shadow-soft md:block",
						children: "Quick order on WhatsApp →"
					})
				]
			})]
		})]
	});
}
var inputClass = "w-full rounded-2xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring/50";
function OrderForm() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		plan: plans[0]?.name ?? "Daily Tiffin",
		meal: "Lunch",
		quantity: "1",
		address: "",
		startDate: "",
		message: ""
	});
	const set = (key) => (e) => setForm((f) => ({
		...f,
		[key]: e.target.value
	}));
	const submit = (e) => {
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
			form.message ? `Message: ${form.message}` : ""
		].filter(Boolean).join("\n");
		window.open(waLink(text), "_blank", "noopener,noreferrer");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "order",
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
						children: "Order / Enquiry"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl",
						children: "Aaj hi tiffin book kijiye"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted-foreground",
						children: "Form bhariye — aapki details seedha WhatsApp par chali jaayengi."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-10 grid gap-4 rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:grid-cols-2 md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							value: form.name,
							onChange: set("name"),
							placeholder: "Aapka naam",
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Phone Number"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "tel",
							value: form.phone,
							onChange: set("phone"),
							placeholder: "10-digit mobile number",
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Choose Plan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: form.plan,
							onChange: set("plan"),
							className: inputClass,
							children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: p.name,
								children: p.name
							}, p.name))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Lunch / Dinner"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: form.meal,
							onChange: set("meal"),
							className: inputClass,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Lunch" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dinner" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Both" })
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Quantity"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: "1",
							value: form.quantity,
							onChange: set("quantity"),
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Preferred Start Date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							value: form.startDate,
							onChange: set("startDate"),
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Delivery Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							required: true,
							rows: 2,
							value: form.address,
							onChange: set("address"),
							placeholder: "House / flat, area, landmark",
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-1.5 block font-medium text-foreground",
							children: "Additional Message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: form.message,
							onChange: set("message"),
							placeholder: "Less spice, no onion-garlic, extra roti...",
							className: inputClass
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "sm:col-span-2 rounded-full bg-gradient-warm px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.02]",
						children: "Send Order on WhatsApp"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2 flex flex-wrap justify-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `tel:${brand.phone.replace(/\s/g, "")}`,
							className: "rounded-full border border-border px-5 py-2.5 font-semibold text-foreground",
							children: "Call Now"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink("Namaste! Tiffin ke baare mein baat karni hai."),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "rounded-full border border-accent/40 px-5 py-2.5 font-semibold text-accent",
							children: "WhatsApp Us"
						})]
					})
				]
			})]
		})
	});
}
var gallery_tiffin_default = "/assets/gallery-tiffin-Dzel1QjK.jpg";
var gallery_thali_default = "/assets/gallery-thali-CQ9RNNoy.jpg";
var gallery_roti_default = "/assets/gallery-roti-DqHMzJln.jpg";
var gallery_dal_default = "/assets/gallery-dal-CKaEOiKU.jpg";
var gallery_sabzi_default = "/assets/gallery-sabzi-B9GBFix9.jpg";
var gallery_packing_default = "/assets/gallery-packing-DBQDYMYp.jpg";
var about_kitchen_default = "/assets/about-kitchen-BXLmDN1J.jpg";
function Heading({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-2xl text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted-foreground md:text-base",
				children: sub
			})
		]
	});
}
var whyCards = [
	{
		icon: "🍛",
		title: "Ghar Jaisa Taste",
		text: "Traditional recipes and comforting homemade flavours."
	},
	{
		icon: "🥗",
		title: "Freshly Prepared",
		text: "Fresh food prepared daily with quality ingredients."
	},
	{
		icon: "🧼",
		title: "Hygienic & Clean",
		text: "Prepared and packed with proper hygiene and care."
	},
	{
		icon: "🛵",
		title: "Daily Delivery",
		text: "Fresh tiffin delivered conveniently to your doorstep."
	},
	{
		icon: "❤️",
		title: "Made With Care",
		text: "Food prepared with the warmth and care of a home kitchen."
	}
];
function Why() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Why Radha's Tiffin?",
				title: "Ghar ka khana, roz ki fikr ke bina",
				sub: "Simple food, honest cooking and delivery you can depend on."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: whyCards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl",
							children: c.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-lg text-foreground",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: c.text
						})
					]
				}, c.title))
			})]
		})
	});
}
function Plans() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "plans",
		className: "bg-gradient-cream py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Our Tiffin Plans",
				title: "Choose the plan that fits your day",
				sub: "Prices shown are placeholders — update them anytime."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-3",
				children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: `flex flex-col rounded-3xl border bg-card p-7 transition-transform hover:-translate-y-1 ${p.featured ? "border-primary/40 shadow-lift md:-mt-3" : "border-border shadow-soft"}`,
					children: [
						p.featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-3 w-fit rounded-full bg-gradient-warm px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary-foreground",
							children: "Most popular"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl text-foreground",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: p.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex items-baseline gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-3xl font-bold text-primary",
								children: p.price
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-muted-foreground",
								children: p.per
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 flex-1 space-y-2 text-sm text-foreground",
							children: p.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-accent",
									children: "✓"
								}), i]
							}, i))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: waLink(`Namaste! Mujhe ${p.name} chahiye. Details bhej dijiye.`),
							target: "_blank",
							rel: "noopener noreferrer",
							className: `mt-6 rounded-full px-5 py-3 text-center text-sm font-semibold transition-transform hover:scale-[1.02] ${p.featured ? "bg-gradient-warm text-primary-foreground shadow-soft" : "border border-accent/40 text-accent"}`,
							children: p.cta
						})
					]
				}, p.name))
			})]
		})
	});
}
function Menu() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Today's Menu",
				title: "Today's Special 🍽️",
				sub: "Menu badalta rehta hai — seasonal aur fresh."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-[2rem] border border-border bg-card p-6 shadow-soft md:p-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-border",
					children: todaysMenu.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-4 py-3.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary text-xs font-bold text-primary",
							children: String(i + 1).padStart(2, "0")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-base font-semibold text-foreground",
								children: m.item
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted-foreground",
								children: m.note
							})]
						})]
					}, m.item))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: waLink("Namaste! Full menu bhej dijiye please."),
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-7 block rounded-full bg-gradient-warm px-6 py-3.5 text-center text-sm font-semibold text-primary-foreground shadow-soft",
					children: "View Full Menu"
				})]
			})]
		})
	});
}
var gallery = [
	{
		src: gallery_thali_default,
		alt: "Home-style Indian thali with roti, rice, dal and sabzi"
	},
	{
		src: gallery_tiffin_default,
		alt: "Stack of steel tiffin boxes ready for delivery"
	},
	{
		src: gallery_roti_default,
		alt: "Stack of fresh soft chapatis with ghee"
	},
	{
		src: gallery_dal_default,
		alt: "Bowl of home-style dal tadka"
	},
	{
		src: gallery_sabzi_default,
		alt: "Seasonal sabzi with steamed rice"
	},
	{
		src: gallery_packing_default,
		alt: "Hygienically packed tiffin parcel ready to go"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "gallery",
		className: "bg-gradient-cream py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Food Gallery",
				title: "Taste the Difference",
				sub: "Roz ki thali, roti se packaging tak."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5",
				children: gallery.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
					className: "group overflow-hidden rounded-3xl shadow-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: g.src,
						alt: g.alt,
						loading: "lazy",
						width: 900,
						height: 900,
						className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					})
				}, g.alt))
			})]
		})
	});
}
var steps = [
	{
		n: "01",
		title: "Choose Your Plan",
		text: "Select Daily, Weekly or Monthly Tiffin."
	},
	{
		n: "02",
		title: "Place Your Order",
		text: "Order through WhatsApp or the website."
	},
	{
		n: "03",
		title: "Fresh Food is Prepared",
		text: "Your meal is freshly prepared with care."
	},
	{
		n: "04",
		title: "Delivered to Your Doorstep",
		text: "Enjoy fresh ghar-jaisa food without the hassle."
	}
];
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "How It Works",
				title: "Char simple steps"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: steps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-[family-name:var(--font-display)] text-3xl font-bold text-primary/35",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 text-lg text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: s.text
						})
					]
				}, s.n))
			})]
		})
	});
}
var serves = [
	{
		icon: "🎓",
		title: "Students",
		text: "Affordable and convenient daily meals."
	},
	{
		icon: "💼",
		title: "Working Professionals",
		text: "Healthy home-style lunch/dinner at work or home."
	},
	{
		icon: "🏠",
		title: "Families",
		text: "Fresh meals when you need a convenient option."
	},
	{
		icon: "👴",
		title: "Senior Citizens",
		text: "Simple, comforting and home-style food."
	}
];
function WhoWeServe() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-cream py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Who We Serve",
				title: "Har ghar, har din"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: serves.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition-transform hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl",
							children: s.icon
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-3 text-base text-foreground",
							children: s.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-sm text-muted-foreground",
							children: s.text
						})
					]
				}, s.title))
			})]
		})
	});
}
function Reviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "reviews",
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "Customer Reviews",
				title: "Jo khaya, wahi bola",
				sub: "Placeholder reviews — replace with your real customer feedback."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 md:grid-cols-3",
				children: reviews.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
					className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm tracking-widest text-primary",
							children: "★★★★★"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 text-base text-foreground",
							children: [
								"“",
								r.text,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
							className: "mt-4 text-sm text-muted-foreground",
							children: [
								"— ",
								r.author,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs",
									children: r.meta
								})
							]
						})
					]
				}, r.text))
			})]
		})
	});
}
function Delivery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "delivery",
		className: "bg-gradient-cream py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
					eyebrow: "Delivery Area",
					title: "Fresh Tiffin, Right at Your Doorstep 🛵"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg text-foreground",
								children: "Delivery Locations"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: brand.deliveryAreas.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-accent",
										children: "📍"
									}), a]
								}, a))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg text-foreground",
								children: "Delivery Timings"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-2 text-sm text-muted-foreground",
								children: brand.deliveryTimings.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-semibold text-foreground",
										children: [t.label, ":"]
									}),
									" ",
									t.value
								] }, t.label))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-3xl border border-border bg-card p-6 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg text-foreground",
								children: "Delivery Charges"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm text-muted-foreground",
								children: brand.deliveryCharges
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Namaste! Kya aap meri location par delivery karte hain? Meri location: "),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-block rounded-full bg-gradient-warm px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift",
						children: "Check Delivery Availability"
					})
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
				className: "overflow-hidden rounded-[2rem] shadow-lift",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_kitchen_default,
					alt: "Fresh rotis being rolled in a clean home kitchen",
					loading: "lazy",
					width: 1200,
					height: 1200,
					className: "h-full w-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-semibold uppercase tracking-[0.2em] text-primary",
					children: "About Us"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl text-foreground sm:text-3xl md:text-4xl",
					children: "Food That Feels Like Home ❤️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-muted-foreground md:text-base",
					children: [brand.name, " started with one simple thought — jo log ghar se door hain, unhe ghar ka khana milna chahiye. Har tiffin ek home kitchen mein banta hai, roz fresh, saaf-safai ke saath."]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground md:text-base",
					children: "Simple recipes, quality ingredients, no shortcuts. Students, working professionals, families aur senior citizens — sabke liye comforting, hygienic aur bharosemand khana, roz time par delivered."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 grid grid-cols-2 gap-3 text-sm",
					children: [
						"Fresh daily cooking",
						"Hygienic packing",
						"Home-style recipes",
						"On-time delivery"
					].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-2xl border border-border bg-card px-4 py-3 text-foreground shadow-soft",
						children: t
					}, t))
				})
			] })]
		})
	});
}
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-cream py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl px-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
				eyebrow: "FAQ",
				title: "Aapke sawaal, hamare jawab"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-3xl border border-border bg-card shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setOpen(open === i ? null : i),
						"aria-expanded": open === i,
						className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-base font-semibold text-foreground",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: open === i ? "−" : "+"
						})]
					}), open === i && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-5 pb-5 text-sm text-muted-foreground",
						children: f.a
					})]
				}, f.q))
			})]
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-16 md:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl rounded-[2.5rem] bg-gradient-warm px-6 py-14 text-center shadow-lift md:px-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-primary-foreground sm:text-3xl md:text-4xl",
					children: "Ghar ki yaad aaye, toh ghar ka taste order kijiye ❤️"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-primary-foreground/85 md:text-base",
					children: "Fresh • Homemade • Hygienic • Delivered Daily"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#order",
						className: "rounded-full bg-card px-7 py-3.5 text-sm font-semibold text-primary shadow-soft",
						children: "Order Your Tiffin"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: waLink("Namaste! Tiffin order karna hai."),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full border border-primary-foreground/60 px-7 py-3.5 text-sm font-semibold text-primary-foreground",
						children: "Chat on WhatsApp"
					})]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Why, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plans, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhoWeServe, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delivery, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderForm, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFloat, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StickyMobileCTA, {})
		]
	});
}
//#endregion
export { Index as component };
