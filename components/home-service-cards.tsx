"use client"

import Link from "next/link"
import { Layers, Home, Droplets, AlertTriangle, ArrowUpRight, ArrowRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const serviceCards = [
  {
    icon: Layers,
    title: "Flat Roofing",
    description:
      "Installation, repair, and maintenance of residential and commercial flat roof systems, including modified bitumen and single-ply membranes.",
    href: "/services/flat-roofing",
  },
  {
    icon: Home,
    title: "Shingle Roofing",
    description:
      "Modern residential systems built for longevity and durability, from architectural asphalt to premium designer shingles.",
    href: "/services/shingle-roofing",
  },
  {
    icon: Droplets,
    title: "Aluminum & Eavestroughs",
    description:
      "Trusted installers of eavestrough systems. We assess and deliver your eavestrough, soffit, fascia, and downspout needs.",
    href: "/services/eavestroughs",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Repairs",
    description:
      "Rapid response to rain, severe weather, storms, or high winds. We stop leaks fast and protect your property.",
    href: "/services",
  },
]

export function HomeServiceCards() {
  const ref = useScrollAnimation()

  return (
    <section className="relative py-28 lg:py-36 bg-[#03133D] overflow-hidden" ref={ref}>
      <div className="absolute inset-0 hairline-grid" aria-hidden="true" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20 animate-on-scroll">
          <div className="max-w-2xl">
            <span className="eyebrow text-[#D05100]">Services</span>
            <h2 className="mt-6 text-4xl lg:text-6xl font-semibold text-white leading-[1.05] text-balance">
              Every roof, every system, done properly.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 self-start lg:self-auto h-12 px-6 rounded-sm border border-white/20 text-white text-sm font-semibold transition-colors hover:bg-white hover:text-[#03133D]"
          >
            All services
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
          {serviceCards.map((service, i) => {
            const Icon = service.icon
            return (
              <Link
                key={service.title}
                href={service.href}
                className={`group relative flex flex-col min-h-[360px] p-8 lg:p-10 border-r border-b border-white/10 transition-colors duration-500 hover:bg-white/[0.04] animate-on-scroll stagger-${i + 1}`}
              >
                <span className="absolute inset-x-0 top-0 h-px bg-[#D05100] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-start justify-between mb-auto">
                  <span className="flex items-center justify-center w-12 h-12 rounded-sm border border-white/15 text-[#D05100] transition-colors group-hover:border-[#D05100]">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-white/30 transition-all group-hover:text-[#D05100] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-16 text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{service.description}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
