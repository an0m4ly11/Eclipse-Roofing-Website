import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section, FeatureGrid, CheckList } from "@/components/page-kit"

export const metadata: Metadata = {
  title: "Duradek Waterproofing for Patios & Balconies | Eclipse Roofing Ltd",
  description:
    "Duradek vinyl waterproofing for patios, balconies and walkable decks in Toronto and the GTA. Installation, consultation and maintenance by Eclipse Roofing.",
}

const benefits = [
  {
    title: "Unmatched durability",
    description:
      "Built to withstand the harshest weather. High-quality materials protect against moisture, UV rays and temperature swings, keeping your patio or balcony looking pristine for years.",
  },
  {
    title: "Waterproof performance",
    description:
      "Say goodbye to leaks, rot and water damage. Duradek's membrane acts as a barrier that stops water from seeping into the structure below.",
  },
  {
    title: "Safety first",
    description:
      "A slip-resistant surface provides reliable traction in wet conditions, keeping family, guests and pets safer outdoors.",
  },
  {
    title: "Low maintenance",
    description:
      "Enjoy your outdoor space without constant upkeep. A simple routine cleaning is all it takes to keep the surface fresh and inviting.",
  },
  {
    title: "Customization options",
    description:
      "A wide range of colours, patterns and textures lets you create a personalized look that complements your home.",
  },
  {
    title: "Longevity & warranty",
    description:
      "Built to last and backed by an industry-leading warranty, so your outdoor space stays protected for years to come.",
  },
]

const services = [
  "Installation — a seamless process tailored to your specific needs and requirements",
  "Consultation — personalized guidance to help you choose the right Duradek style",
  "Maintenance tips — recommendations to prolong the life of your Duradek surface",
]

export default function DuradekPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          back={{ href: "/services/residential", label: "Residential services" }}
          eyebrow="Duradek Waterproofing"
          title="The ultimate waterproofing for outdoor spaces."
          intro="Transform your patio or balcony into a beautiful, functional and durable outdoor living area. Duradek is the industry leader in walkable waterproofing, with years of proven performance."
          image="/images/duradek-balcony.png"
          imageAlt="Rooftop patio finished with a grey Duradek waterproof vinyl surface"
        />

        <Section
          eyebrow="Why choose Duradek"
          title="Protection you can walk on."
          lead="Duradek enhances both the longevity and the look of your outdoor space, protecting the structure underneath while giving you a finished surface you can enjoy."
        >
          <FeatureGrid items={benefits} />
        </Section>

        <Section
          tone="dark"
          eyebrow="Our services"
          title="With you from consultation to care."
          lead="We're not just here for the installation — we're here for the long haul."
        >
          <CheckList items={services} columns={1} dark />
        </Section>

        <Section
          tone="muted"
          eyebrow="Colours"
          title="Residential colours & patterns."
          lead={
            <>
              Duradek is available in a wide range of residential colours, patterns and textures. Please visit{" "}
              <a
                href="https://duradek.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D05100] font-semibold underline underline-offset-4"
              >
                duradek.com
              </a>{" "}
              for the full colour list. Photos courtesy of duradek.com.
            </>
          }
        >
          <span className="sr-only">Colour list available at duradek.com</span>
        </Section>

        <HomeCTA
          eyebrow="Duradek"
          title="Ready to waterproof your patio or balcony?"
          description="Book a consultation and our team will help you choose the right Duradek system and style."
          image="/images/duradek-balcony.png"
        />
      </main>
      <Footer />
    </>
  )
}
