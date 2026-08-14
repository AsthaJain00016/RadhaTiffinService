import { createFileRoute } from "@tanstack/react-router";
import { Footer, Header, StickyMobileCTA, WhatsAppFloat } from "@/components/site/Chrome";
import { Hero } from "@/components/site/Hero";
import { OrderForm } from "@/components/site/OrderForm";
import {
  About,
  Delivery,
  Faq,
  FinalCta,
  Gallery,
  HowItWorks,
  Menu,
  Plans,
  Reviews,
  Why,
  WhoWeServe,
} from "@/components/site/Sections";

const title = "Radha's Tiffin Services | Fresh Ghar Jaisa Khana, Daily Delivery";
const description =
  "Fresh, hygienic aur ghar jaisa home-style tiffin — roti, sabzi, dal, rice, salad. Daily, weekly aur monthly tiffin plans with doorstep delivery.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Why />
        <Plans />
        <Menu />
        <Gallery />
        <HowItWorks />
        <WhoWeServe />
        <Reviews />
        <Delivery />
        <OrderForm />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <StickyMobileCTA />
    </div>
  );
}
