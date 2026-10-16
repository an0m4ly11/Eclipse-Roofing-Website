"use client"

import Link from "next/link"
import { ArrowUpRight, Building2, ShieldCheck, ClipboardList } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const commercialHighlights = [
  {
    icon: Building2,
    title: "Flat & low-slope systems",
    description: "TPO, EPDM, and modified bitumen installs, repairs, and full replacements.",
  },
  {
    icon: ClipboardList,
    title: "Built for property managers",
    description: "Scheduled maintenance, documentation, and single-point project management.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured & corporate",
    description: "Complete coverage and compliance for multi-site commercial portfolios.",
  },
]

export function HomeServices() {
  const ref = useScrollAnimation()

  return (
    <section className="py-28 lg:py-36 bg-background" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-16 lg:mb-20 animate-on-scroll">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[#D05100]">What We Do</span>
            <h2 className="mt-6 text-4xl lg:text-6xl font-semibold text-[#03133D] leading-[1.05] text-balance">
              Commercial roofing, built for the long term.
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6 lg:pb-2">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We protect the commercial and industrial buildings that keep the GTA
              running&mdash;while delivering the residential craftsmanship we&apos;ve
              been trusted with for over 20 years.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-[#03133D] border-b border-[#03133D]/20 pb-1 transition-colors hover:border-[#D05100] hover:text-[#D05100]"
            >
              Talk to our team
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Link
            href="/services/commercial"
            className="group relative lg:col-span-8 rounded-md overflow-hidden min-h-[480px] lg:min-h-[620px] flex flex-col justify-end animate-on-scroll stagger-1"
          >
            <img
              src="/images/commercial-flat-roof-hero.png"
              alt="Commercial flat membrane roof with HVAC units and skylights"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03133D] via-[#03133D]/60 to-[#03133D]/0" />

            <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
              <span className="px-3 py-1.5 rounded-sm bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Our specialty
              </span>
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#03133D] transition-colors group-hover:bg-[#D05100] group-hover:text-white">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <div className="relative p-8 lg:p-12">
              <h3 className="text-3xl lg:text-5xl font-semibold text-white mb-10 text-balance">
                Commercial &amp; Industrial
              </h3>
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-white/15">
                {commercialHighlights.map((item) => (
                  <div key={item.title}>
                    <item.icon className="w-5 h-5 text-[#D05100] mb-4" aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-white mb-1.5">{item.title}</h4>
                    <p className="text-[13px] text-white/60 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Link>

          <Link
            href="/services/residential"
            className="group relative lg:col-span-4 rounded-md overflow-hidden min-h-[420px] lg:min-h-[620px] flex flex-col justify-end animate-on-scroll stagger-2"
          >
            <img
              src="/images/residential-roofing-hero.jpg"
              alt="Residential shingle roof installation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#03133D] via-[#03133D]/50 to-transparent" />

            <div className="absolute top-6 right-6">
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-[#03133D] transition-colors group-hover:bg-[#D05100] group-hover:text-white">
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </div>

            <div className="relative p-8 lg:p-10">
              <h3 className="text-3xl lg:text-4xl font-semibold text-white mb-4 text-balance">
                Residential
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                Premium shingle and metal roofing for homeowners&mdash;quality, aesthetics,
                and lasting performance.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
