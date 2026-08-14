// EDIT THIS FILE to update business details, menu, plans, prices and reviews.
export const brand = {
  name: "Radha's Tiffin Services",
  tagline: "घर से दूर... लेकिन घर के स्वाद के करीब ❤️",
  secondaryTagline: "Fresh Tiffin | Daily Delivery",
  phone: "+91 XXXXX XXXXX", // EDIT
  whatsapp: "91XXXXXXXXXX", // EDIT: country code + number, digits only
  instagram: "https://instagram.com/", // EDIT
  deliveryAreas: ["Area 1 — placeholder", "Area 2 — placeholder", "Area 3 — placeholder"],
  deliveryTimings: [
    { label: "Lunch", value: "12:00 PM – 2:00 PM (editable)" },
    { label: "Dinner", value: "7:00 PM – 9:00 PM (editable)" },
  ],
  deliveryCharges: "Free within X km • ₹XX beyond that (editable)",
};

export const waLink = (text: string) =>
  `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(text)}`;

export const plans = [
  {
    name: "Daily Tiffin",
    price: "₹XXX",
    per: "/ tiffin",
    blurb: "Perfect for customers who need meals every day.",
    items: ["Roti", "Sabzi", "Dal", "Rice", "Salad / Pickle"],
    cta: "Order Now",
    featured: false,
  },
  {
    name: "Weekly Plan",
    price: "₹XXX",
    per: "/ week",
    blurb: "A convenient plan for regular customers.",
    items: ["Fresh daily meals", "Weekly subscription", "Daily delivery"],
    cta: "Choose Plan",
    featured: true,
  },
  {
    name: "Monthly Plan",
    price: "₹XXXX",
    per: "/ month",
    blurb: "Best value for students, working professionals and regular customers.",
    items: ["Regular daily tiffin", "Monthly subscription", "Hassle-free delivery"],
    cta: "Subscribe Now",
    featured: false,
  },
];

export const todaysMenu = [
  { item: "Roti / Chapati", note: "Hot & soft, made fresh" },
  { item: "Seasonal Sabzi", note: "Ghar jaisa masala" },
  { item: "Dal", note: "Tadka with desi ghee" },
  { item: "Steamed Rice", note: "Light and fluffy" },
  { item: "Salad", note: "Fresh cut daily" },
  { item: "Pickle", note: "Homemade achaar" },
];

export const reviews = [
  {
    text: "Bilkul ghar jaisa taste aur food hamesha fresh milta hai.",
    author: "Customer",
    meta: "Placeholder review — editable",
  },
  {
    text: "Working days mein tiffin service ne khana manage karna bahut easy kar diya.",
    author: "Customer",
    meta: "Placeholder review — editable",
  },
  {
    text: "Roti soft, dal ghar jaisi aur delivery time par. Hostel life easy ho gayi.",
    author: "Customer",
    meta: "Placeholder review — editable",
  },
];

export const faqs = [
  {
    q: "What type of food do you serve?",
    a: "Simple, home-style vegetarian Indian meals — roti, sabzi, dal, rice, salad and pickle, cooked the way it is made at home.",
  },
  { q: "Do you provide daily tiffins?", a: "Yes, fresh tiffins are prepared and delivered every day at fixed lunch and dinner timings." },
  { q: "Do you offer weekly/monthly plans?", a: "Yes. Daily, weekly and monthly plans are available — the monthly plan offers the best value." },
  { q: "Which areas do you deliver to?", a: "Delivery areas are listed in the Delivery section. Message us on WhatsApp to confirm your location." },
  { q: "What are the delivery timings?", a: "Lunch and dinner delivery windows are shown in the Delivery section and can be updated by us anytime." },
  { q: "Can I customize my meal?", a: "Yes, simple customisations like less spice, no onion-garlic or extra roti can be requested while ordering." },
  { q: "How can I place an order?", a: "Fill the order form on this page and send it on WhatsApp, or simply call us." },
  { q: "Is advance booking required?", a: "For daily tiffin, please order a few hours in advance. Weekly and monthly plans start from your chosen date." },
];