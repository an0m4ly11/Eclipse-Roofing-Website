import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section, CheckList } from "@/components/page-kit"

export const metadata: Metadata = {
  title: "Industrial Flat Roofing in Toronto, ON | Eclipse Roofing",
  description:
    "Commercial and industrial flat roofing in Toronto: retrofits, repairs, annual inspections with photo reports, and rooftop component repairs.",
}

const installs = [
  "Cool-roof membrane (Soprastar Ultra White) by Soprema",
  "2-ply modified bitumen membrane systems (heat-welded preferred)",
  "1-ply TPO or PVC systems",
  "EPDM systems",
  "Tar and gravel ballast systems",
]

const repairs = [
  "Cool roof and green roof repairs",
  "2-ply modified bitumen membrane systems (conventional, inverted)",
  "1-ply TPO or PVC systems",
  "EPDM systems",
  "Tar and gravel systems",
]

const rooftop = [
  "Replacement and/or repair of flashings and sealant",
  "Repair and/or replacement of skylights",
  "Repair and/or replacement of roof hatches",
  "Scupper and interior roof drains",
  "Metal chimneys (caps and flashings only)",
  "HVAC and skylight curbs (flashings, wood, membrane)",
  "Roof cones, pitch pockets, pipe collars and vent caps",
  "Walkways (concrete pavers, rubber matting)",
]

export default function IndustrialFlatRoofingPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          back={{ href: "/services/commercial", label: "Commercial & industrial" }}
          eyebrow="Industrial Flat Roofing · Toronto"
          title="Flat roofing built for industrial buildings."
          intro="A wide selection of services for commercial and industrial flat roofing, including full retrofits or repairs for modified bitumen membrane, TPO, PVC and EPDM systems."
          image="/images/portfolio/commercial-modbit-toronto-1.jpg"
          imageAlt="SBS bitumen membrane torch-down installation on an industrial flat roof"
        />

        <Section
          eyebrow="Annual inspections & reports"
          title="Know the condition of your roof, every year."
          lead="Our roofing experts provide annual inspections and reports for your commercial or industrial property management company, business or organization."
        >
          <div className="grid md:grid-cols-3 border-t border-l border-[#03133D]/10">
            {[
              {
                title: "Annotated photo reports",
                body: "A report with annotated photo documentation of your roof and an outline of critical and non-critical recommendations for maintaining your system.",
              },
              {
                title: "Emergency assessments",
                body: "Inspections after atypical exposure to severe weather — extreme winds, ice storms and heavy snowfall.",
              },
              {
                title: "Preventative upkeep",
                body: "Regular inspection and maintenance extends your roof's life span and avoids the high cost of major repairs or early replacement.",
              },
            ].map((item) => (
              <div key={item.title} className="p-8 lg:p-10 border-r border-b border-[#03133D]/10 flex flex-col gap-3">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-[#03133D]/60 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section tone="dark" eyebrow="Types of roofs we service" title="Replacements, re-covers & repairs.">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">
                Installations, retrofits & re-covers
              </h3>
              <CheckList items={installs} columns={1} dark />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">
                Repairs, preventative & remedial services
              </h3>
              <CheckList items={repairs} columns={1} dark />
            </div>
          </div>
        </Section>

        <Section
          tone="muted"
          eyebrow="Additional exterior roof services"
          title="Every rooftop component, covered."
          lead="Most leaks begin around penetrations and drainage. We repair and replace the components that keep your system watertight."
        >
          <CheckList items={rooftop} />
        </Section>

        <HomeCTA
          eyebrow="Commercial & industrial"
          title="Book a field representative or senior project manager."
          description="Ask about our annual inspection services and fees for commercial and industrial property. Email admin@eclipseroofing.ca or call our office."
          image="/images/portfolio/commercial-modbit-toronto-1.jpg"
        />
      </main>
      <Footer />
    </>
  )
}
