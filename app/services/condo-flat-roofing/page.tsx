import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section, FeatureGrid, TagList } from "@/components/page-kit"

export const metadata: Metadata = {
  title: "Condo Flat Roofing in Toronto, ON | Eclipse Roofing Ltd",
  description:
    "Flat roof installation, repairs and maintenance for condominium buildings in Toronto. Tailored proposals from Eclipse Roofing Ltd.",
}

const scope = [
  {
    title: "Installation",
    description:
      "Flat roofing requires different preparation than sloped roofs. We build condo roofs to manage water and stand up to wear and tear.",
  },
  {
    title: "Repairs",
    description:
      "The risk of water pooling is higher on flat roofs and leaks need to be dealt with quickly. Our team responds to keep residents protected.",
  },
  {
    title: "General maintenance",
    description:
      "Ongoing maintenance services that extend the life of your condominium's roof system and keep repairs predictable.",
  },
]

export default function CondoFlatRoofingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          back={{ href: "/services/commercial", label: "Commercial & industrial" }}
          eyebrow="Condo Flat Roofing · Toronto"
          title="Flat roofing for condominium buildings."
          intro="If you own or manage a condominium building with a flat roof, Eclipse Roofing Ltd is here to meet your roofing needs — with top-quality service and a tailored proposal for every project."
          image="/images/portfolio/commercial-highrise-torchdown-1.jpg"
          imageAlt="Torch-down flat roof installation on a Toronto apartment building"
        />

        <Section
          eyebrow="Flat roofing"
          title="Every element of your condo roof, handled."
          lead="Our team is equipped to handle all elements of your condominium flat roofing, from installation and repairs to general maintenance."
        >
          <FeatureGrid items={scope} />
        </Section>

        <Section
          tone="muted"
          eyebrow="Choosing a material"
          title="Not sure what your roof needs?"
          lead="Talk with one of our team members about your roof's function and needs, and we'll propose a flat roofing material that will stand up to wear and tear."
        >
          <TagList items={["Modified bitumen membrane", "Built-up roofing", "Soprema Soprastar cool roof", "Other options based on your needs"]} />
        </Section>

        <Section
          tone="dark"
          eyebrow="Custom proposals"
          title="We listen first, then we propose."
          lead="The trust and confidence of our clients are key to our business. Our biggest priority is providing every client with professional, reliable and proven quality service — starting with a customized proposal."
        >
          <p className="max-w-3xl text-lg text-white/60 leading-relaxed">
            While contracting with us, you can trust that we will listen to you and curate your roofing proposal to meet your
            needs — during installation, throughout repairs for wear and tear, and with our general maintenance services. If
            you aren&apos;t sure what you need, we can provide professional advice for your installation.
          </p>
        </Section>

        <HomeCTA
          eyebrow="Condo roofing"
          title="Need condo flat roofing services?"
          description="Reach out to our team for flat roofing for condos in Toronto. Call us today to book an assessment."
          image="/images/portfolio/commercial-highrise-torchdown-2.jpg"
        />
      </main>
      <Footer />
    </>
  )
}
