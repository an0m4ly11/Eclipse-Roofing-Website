import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section } from "@/components/page-kit"
import { serviceAreas } from "@/lib/service-areas"

export const metadata: Metadata = {
  title: "Roofing Contractor Serving Toronto & the GTA | Eclipse Roofing Ltd",
  description:
    "Eclipse Roofing Ltd serves Toronto and the Greater Toronto Area — Etobicoke, North York, Scarborough, Mississauga, Brampton, Vaughan, Markham, Richmond Hill and Oakville. Residential and commercial roofing.",
  alternates: { canonical: "/service-areas" },
}

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Service areas"
          title="Roofing across Toronto & the GTA."
          intro="From our office in Etobicoke, Eclipse Roofing Ltd serves homeowners, property managers and business owners throughout Toronto and the Greater Toronto Area."
          image="/images/hero-roofing.jpg"
          imageAlt="Roof replacement by Eclipse Roofing in the Greater Toronto Area"
        />

        <Section
          eyebrow="Where we work"
          title="Choose your area."
          lead="Every area page lists the neighbourhoods we serve and the roofing work we do most there. If you don't see your area, call us anyway — we work across the GTA."
        >
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#03133D]/10">
            {serviceAreas.map((area) => (
              <li key={area.slug} className="border-r border-b border-[#03133D]/10">
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="group flex h-full flex-col gap-4 p-8 lg:p-10 hover:bg-card transition-colors"
                >
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[#03133D]/50">
                    <MapPin className="w-4 h-4 text-[#D05100]" />
                    {area.region}
                  </span>
                  <span className="flex items-center justify-between gap-4 text-2xl font-semibold text-[#03133D] group-hover:text-[#D05100] transition-colors">
                    Roofing in {area.name}
                    <ArrowRight className="w-5 h-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-sm leading-relaxed text-[#03133D]/60">
                    {area.neighbourhoods.slice(0, 4).join(", ")} and more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>

        <HomeCTA
          eyebrow="Anywhere in the GTA"
          title="Get a free roofing estimate."
          description="Tell us where your property is and what you need. We'll come out, inspect the roof and send a clear, itemised proposal."
          image="/images/portfolio/commercial-epdm-system-2.jpg"
        />
      </main>
      <Footer />
    </>
  )
}
