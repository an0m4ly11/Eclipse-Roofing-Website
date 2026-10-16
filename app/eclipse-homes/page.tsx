"use client"

import { ClipboardCheck, Sparkles, Search, Clock, Medal, Smile } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const highlights = [
  {
    icon: ClipboardCheck,
    title: "Roof maintenance & reports",
    description: "Annual and seasonal roof maintenance with detailed condition reports.",
  },
  {
    icon: Sparkles,
    title: "Building curb appeal",
    description:
      "Exterior repairs and replacements for cladding, windows, skylights, rain systems and more.",
  },
  {
    icon: Search,
    title: "Leak investigations",
    description:
      "Experienced professionals who trace leaks to the source and give building managers and owners clear solutions.",
  },
]

const interiorServices = [
  { name: "Painting", detail: "Refresh interiors with vibrancy and sophistication." },
  { name: "Drywalling", detail: "Emergency and non-emergency repairs for water staining, holes and skylight installs." },
  { name: "Carpentry", detail: null },
  { name: "Stairs", detail: null },
  { name: "Doors & hardware", detail: null },
  { name: "Electrician coordination", detail: null },
  { name: "Plumbing coordination", detail: null },
]

const exteriorServices = [
  { name: "Siding & metal cladding", detail: "Boost curb appeal and protect against the elements." },
  { name: "Roof repairs & replacements", detail: "Address leaks and weather-related damage." },
  { name: "Concrete & cement", detail: "Parking spaces, walkways and patios." },
  { name: "Masonry & stucco", detail: "Including tuckpointing." },
  { name: "Rain systems & drainage", detail: "Gutters, downspouts, scuppers & interior drains." },
  { name: "Decks & railings", detail: null },
  { name: "Flashings", detail: null },
  { name: "Carports", detail: null },
  { name: "Fencing & gates", detail: null },
]

const whyChoose = [
  { icon: Medal, title: "Experience", description: "Years of condo and apartment maintenance experience brought to every project." },
  { icon: Clock, title: "Reliability", description: "Timely, dependable service that keeps disruption to residents at a minimum." },
  { icon: Smile, title: "Customer satisfaction", description: "We strive for excellence in every detail, meeting and exceeding your expectations." },
]

function ServiceList({
  title,
  services,
}: {
  title: string
  services: { name: string; detail: string | null }[]
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between pb-6 border-b border-white/15">
        <h3 className="text-2xl lg:text-3xl font-semibold text-white">{title}</h3>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40 tabular-nums">
          {String(services.length).padStart(2, "0")} services
        </span>
      </div>
      <ul>
        {services.map((service) => (
          <li
            key={service.name}
            className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-8 py-5 border-b border-white/10"
          >
            <span className="flex items-center gap-3 font-medium text-white">
              <span
                className="w-1.5 h-1.5 rounded-full bg-[#D05100] transition-transform group-hover:scale-150"
                aria-hidden="true"
              />
              {service.name}
            </span>
            {service.detail && (
              <span className="pl-[18px] sm:pl-0 text-sm text-white/50 leading-relaxed sm:text-right sm:max-w-xs">
                {service.detail}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function EclipseHomesPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        <section className="bg-background pt-40 pb-20 lg:pt-48 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">A division of Eclipse Roofing</span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-[#03133D] leading-[1.02] text-balance">
                Eclipse Homes & Buildings
              </h1>
              <p className="mt-6 text-xl font-medium text-[#03133D]/80 leading-snug text-pretty">
                Your trusted partner for comprehensive condo and apartment maintenance.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
                Elevate your living spaces with dedicated interior and exterior repair services.
              </p>
            </div>
            <div className="lg:col-span-7 animate-on-scroll stagger-1">
              <div className="relative aspect-video rounded-md overflow-hidden bg-[#03133D] shadow-2xl shadow-[#03133D]/20">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/YcAvC75seJ8?start=2"
                  title="Eclipse Homes & Buildings"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">About us</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                A leading provider of condo & apartment maintenance.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Our skilled team is committed to enhancing the aesthetics, functionality and overall well-being of your
                residential and commercial properties&mdash;tailored to the unique needs of multi-unit buildings.
              </p>
            </div>
            <ul className="lg:col-span-7 flex flex-col border-t border-[#03133D]/10">
              {highlights.map((item, i) => (
                <li
                  key={item.title}
                  className={`group grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 lg:py-10 border-b border-[#03133D]/10 animate-on-scroll stagger-${i + 1}`}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-md bg-[#03133D] text-[#D05100] transition-colors group-hover:bg-[#D05100] group-hover:text-white">
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold text-[#03133D]">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="relative bg-[#03133D] py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 hairline-grid" aria-hidden="true" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 animate-on-scroll">
              <div>
                <span className="eyebrow text-[#D05100]">Our services</span>
                <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-white leading-[1.05] text-balance">
                  Inside and out, fully covered.
                </h2>
              </div>
              <p className="max-w-md text-white/60 leading-relaxed text-pretty">
                Complete interior and exterior solutions to keep your property in peak condition.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              <div className="animate-on-scroll">
                <ServiceList title="Interior" services={interiorServices} />
              </div>
              <div className="animate-on-scroll stagger-1">
                <ServiceList title="Exterior" services={exteriorServices} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-14 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">Why us</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                Why choose Eclipse Homes & Buildings?
              </h2>
            </div>
            <dl className="grid md:grid-cols-3 gap-4 lg:gap-6">
              {whyChoose.map((item, i) => (
                <div
                  key={item.title}
                  className={`flex flex-col gap-4 rounded-md bg-card border border-[#03133D]/10 p-8 lg:p-10 transition-shadow hover:shadow-xl hover:shadow-[#03133D]/5 animate-on-scroll stagger-${i + 1}`}
                >
                  <item.icon className="w-6 h-6 text-[#D05100]" aria-hidden="true" />
                  <dt className="text-xl font-semibold text-[#03133D]">{item.title}</dt>
                  <dd className="text-muted-foreground leading-relaxed">{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <HomeCTA
          eyebrow="Your satisfaction is our commitment"
          title="Ready to transform your living spaces?"
          description="Contact Eclipse Homes & Buildings for a consultation or to schedule our services."
          primaryLabel="admin@eclipseroofing.ca"
          primaryHref="mailto:admin@eclipseroofing.ca"
          image="/images/about-roof-2.png"
        />
      </main>
      <Footer />
    </>
  )
}
