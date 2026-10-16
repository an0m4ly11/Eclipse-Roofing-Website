import type { Metadata } from "next"
import { Phone } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { PageHero, Section, CheckList } from "@/components/page-kit"

export const metadata: Metadata = {
  title: "Emergency Roof Repair Services | Eclipse Roofing Ltd",
  description:
    "Emergency roof, siding and eavestrough repairs after rain, storms and high winds across Toronto and the GTA. Call or text 647-258-9434.",
}

const repairs = [
  "Temporary roof or siding cover (tarping or synthetic membrane) over damaged or missing materials",
  "Trim, replace or re-secure shingles",
  "Torch-down loose or peeling flat roof membrane",
  "Seal punctures or flat roof perimeter seams with asphalt primer",
  "Caulking eavestrough seams or cracks",
  "Re-secure loose eavestrough and downspouts (new fasteners or straps)",
  "Re-secure loose siding panels",
  "Remove damaged siding, eavestrough or flashings due to safety concerns",
]

const details = ["Your name", "Email and phone number", "Details about the repair and home — how many storeys, the repair area, etc."]

const signs = [
  "Lifted, lifting or missing shingles",
  "Ceiling stains on the interior of your home",
  "Visible water dripping from light fixtures or window seams",
  "Peeling flat roof seams",
  "Eavestrough, soffit or fascia bending, lifting or hanging from the roof perimeter",
  "Bowing or loose siding",
  "Peeling, deteriorated or missing caulking (e.g. flashings)",
  "Rain water running behind your eavestrough system",
  "Roof materials such as shingles lying on the ground around your home",
  "Sunken or bowing sections of the roof",
  "Pooling water or ponding on your roof deck (typically on flat roofs)",
  "Animal damage, often along the roof perimeter",
]

export default function EmergencyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          back={{ href: "/services", label: "All services" }}
          eyebrow="Emergency Services"
          title="Storm damage? We'll secure it fast."
          intro="Eclipse Roofing provides emergency and repair services due to rain, severe weather, storms or high winds — for roofs, siding and eavestroughs."
          image="/images/emergency-tarp-repair.png"
          imageAlt="Roofer securing a protective tarp over a storm-damaged shingle roof"
        />

        <Section
          eyebrow="Typical emergency repairs"
          title="What we can do on the spot."
          lead="Our crews stabilize the damage first, protecting your home or building from further water intrusion until a permanent repair can be made."
        >
          <CheckList items={repairs} />
        </Section>

        <Section tone="dark" eyebrow="Arrange a repair" title="Call or text our local office.">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <p className="text-lg text-white/60 leading-relaxed">
                To arrange an emergency repair or service, contact the office by phone or text.
              </p>
              <a
                href="tel:+16472589434"
                className="group inline-flex items-center gap-5 self-start rounded-sm bg-[#D05100] pl-3 pr-8 py-3 text-white hover:bg-[#b34500] transition-colors"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="text-2xl lg:text-3xl font-semibold tracking-tight tabular-nums">647-258-9434</span>
              </a>
            </div>
            <div className="lg:col-span-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">Our staff will ask for</h3>
              <CheckList items={details} columns={1} dark />
            </div>
          </div>
        </Section>

        <Section
          tone="muted"
          eyebrow="Warning signs"
          title="Signs you may need a repair."
          lead="Spotted any of these on your roof or the exterior of your home? Remedial work now can prevent costly interior damage later."
        >
          <CheckList items={signs} columns={3} />
        </Section>

        <HomeCTA
          eyebrow="Emergency repairs"
          title="Need help right away?"
          description="Call or text our office and we'll get the details of your repair to get a crew out as soon as possible."
          primaryLabel="Send us the details"
          image="/images/emergency-tarp-repair.png"
        />
      </main>
      <Footer />
    </>
  )
}
