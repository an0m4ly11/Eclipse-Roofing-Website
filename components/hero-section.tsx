"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Clock, MapPin, Phone } from "lucide-react"

const credentials = [
  { icon: ShieldCheck, label: "Fully insured", detail: "Corporate-grade coverage" },
  { icon: Clock, label: "20+ years", detail: "Serving the GTA since 2004" },
  { icon: MapPin, label: "Greater Toronto Area", detail: "Commercial & residential" },
]

export function HeroSection() {
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return
      imageRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.05)`
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden bg-[#03133D]">
      <div ref={imageRef} className="absolute inset-0 scale-105 will-change-transform">
        <img
          src="/images/commercial-flat-roof-hero.png"
          alt="Aerial view of a commercial flat membrane roof with HVAC units, skylights, and solar panels"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#03133D] via-[#03133D]/75 to-[#03133D]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03133D] via-transparent to-transparent" />
      <div className="absolute inset-0 hairline-grid opacity-60" aria-hidden="true" />

      <a
        href="tel:+16472589434"
        className="group relative z-10 mt-24 lg:mt-28 block bg-[#D05100] text-white transition-colors hover:bg-[#b34500]"
        aria-label="Call Eclipse Roofing at 647-258-9434 for a free estimate"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="relative flex items-center justify-center w-9 h-9 rounded-full bg-white/15 shrink-0">
              <span className="absolute inset-0 rounded-full bg-white/20 animate-ping motion-reduce:hidden" aria-hidden="true" />
              <Phone className="relative w-4 h-4" aria-hidden="true" />
            </span>
            <p className="text-sm font-medium leading-snug text-pretty">
              <span className="font-semibold">Free estimates</span>
              <span className="hidden sm:inline"> &middot; Speak with a roofing specialist today</span>
            </p>
          </div>
          <span className="inline-flex items-center gap-3 shrink-0">
            <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">
              Call now
            </span>
            <span className="text-lg lg:text-xl font-semibold tracking-tight tabular-nums">647-258-9434</span>
            <span className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-white text-[#D05100] transition-transform group-hover:translate-x-1">
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </span>
          </span>
        </div>
      </a>

      <div className="relative z-10 flex-1 flex items-center max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-16 pb-16">
        <div className="max-w-3xl">
          <span className="eyebrow text-[#D05100] mb-8">Commercial Roofing Specialists</span>

          <h1 className="mt-8 text-5xl sm:text-6xl lg:text-[5.5rem] font-semibold text-white leading-[0.98] text-balance">
            The roofing partner property managers{" "}
            <span className="text-[#D05100]">trust.</span>
          </h1>

          <p className="mt-8 text-lg lg:text-xl font-light text-white/70 max-w-xl leading-relaxed text-pretty">
            Corporate-grade commercial flat roofing for the Greater Toronto Area&mdash;backed
            by the residential craftsmanship we&apos;ve been known for over two decades.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 h-14 pl-8 pr-6 rounded-sm bg-[#D05100] text-white text-sm font-semibold tracking-wide transition-colors hover:bg-[#b34500]"
            >
              Request a Quote
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center h-14 px-8 rounded-sm border border-white/25 text-white text-sm font-semibold tracking-wide transition-colors hover:bg-white hover:text-[#03133D]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#03133D]/60 backdrop-blur-md">
        <ul className="max-w-[1400px] mx-auto px-6 lg:px-12 grid sm:grid-cols-3">
          {credentials.map((item, i) => (
            <li
              key={item.label}
              className={`flex items-center gap-4 py-6 ${i > 0 ? "sm:border-l sm:border-white/10 sm:pl-8" : ""} ${i > 0 ? "border-t border-white/10 sm:border-t-0" : ""}`}
            >
              <item.icon className="w-5 h-5 text-[#D05100] shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-white">{item.label}</p>
                <p className="text-[13px] text-white/50">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
