import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section, CheckList, TagList, FeatureGrid } from "@/components/page-kit"
import { getServiceArea, serviceAreas } from "@/lib/service-areas"
import { JsonLd, siteUrl } from "@/lib/seo"

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const area = getServiceArea(slug)
  if (!area) return {}
  const title = `Roofing ${area.name} | Roofers & Roof Replacement | Eclipse Roofing Ltd`
  const description = `Trusted roofing contractor in ${area.name}. Shingle and flat roof replacement, repairs, commercial roofing, eavestroughs and skylights. Free estimates — call 647-258-9434.`
  return {
    title,
    description,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: { title, description, url: `/service-areas/${area.slug}`, images: [area.image] },
  }
}

const reasons = [
  {
    title: "Quality in everything",
    description:
      "We work with you to ensure satisfaction throughout each project, with top-quality labour and certified materials.",
  },
  {
    title: "Seamless coordination",
    description:
      "Projects are completed on time and to specification, with the safety of everyone on the property in mind.",
  },
  {
    title: "Transparent proposals",
    description: "Tailored, itemised proposals that avoid surprises on cost and time frame.",
  },
]

export default async function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const area = getServiceArea(slug)
  if (!area) notFound()

  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug)

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Roofing",
        name: `Roofing in ${area.name}`,
        provider: { "@id": `${siteUrl}/#business` },
        areaServed: { "@type": "City", name: area.name },
        url: `${siteUrl}/service-areas/${area.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Service Areas", item: `${siteUrl}/service-areas` },
          { "@type": "ListItem", position: 3, name: area.name, item: `${siteUrl}/service-areas/${area.slug}` },
        ],
      },
    ],
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <PageHero
          eyebrow={`${area.region} · Roofing`}
          title={area.headline}
          intro={area.intro}
          image={area.image}
          imageAlt={`Roofing project by Eclipse Roofing near ${area.name}`}
          back={{ href: "/service-areas", label: "All service areas" }}
        />

        <Section
          eyebrow={`Roofers in ${area.name}`}
          title={`What we do in ${area.name}.`}
          lead={area.local}
        >
          <CheckList items={area.focus} columns={3} />
        </Section>

        <Section tone="muted" eyebrow="Neighbourhoods" title={`Serving all of ${area.name}.`}>
          <TagList items={area.neighbourhoods} />
        </Section>

        <Section
          eyebrow="Why Eclipse Roofing"
          title="Most of our new clients are referrals."
          lead="That shows our clients don't need to come back — we deliver great quality the first time around."
        >
          <FeatureGrid items={reasons} />
        </Section>

        <Section tone="muted" eyebrow="Nearby" title="Other areas we serve.">
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 border-t border-[#03133D]/10">
            {otherAreas.map((other) => (
              <li key={other.slug} className="border-b border-[#03133D]/10">
                <Link
                  href={`/service-areas/${other.slug}`}
                  className="group flex items-center justify-between gap-4 py-5 font-semibold text-[#03133D] hover:text-[#D05100] transition-colors"
                >
                  Roofing {other.name}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <HomeCTA
          eyebrow={area.name}
          title={`Get a free roofing estimate in ${area.name}.`}
          description="Call 647-258-9434 or send us the details. We'll inspect the roof and send a clear, itemised proposal."
          image="/images/portfolio/commercial-epdm-system-2.jpg"
        />
      </main>
      <Footer />
    </>
  )
}
