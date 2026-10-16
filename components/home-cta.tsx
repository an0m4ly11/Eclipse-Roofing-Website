"use client"

import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

type HomeCTAProps = {
  eyebrow?: string
  title?: string
  description?: string
  primaryLabel?: string
  primaryHref?: string
  image?: string
}

export function HomeCTA({
  eyebrow = "Free Estimates",
  title = "Ready to start your project?",
  description = "Get a free consultation and detailed estimate from our team\u2014no pressure, no obligation.",
  primaryLabel = "Get a free quote",
  primaryHref = "/contact",
  image = "/images/commercial-flat-roof-hero.png",
}: HomeCTAProps) {
  const ref = useScrollAnimation()
  const primaryClass =
    "group inline-flex items-center justify-between gap-6 h-16 pl-8 pr-3 w-full lg:w-80 rounded-sm bg-[#D05100] text-white text-sm font-semibold tracking-wide transition-colors hover:bg-[#b34500]"
  const primaryContent = (
    <>
      <span className="truncate">{primaryLabel}</span>
      <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
        <ArrowRight className="w-4 h-4" />
      </span>
    </>
  )

  return (
    <section className="bg-background py-20 lg:py-28" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-md animate-on-scroll-scale">
          <img
            src={image || "/placeholder.svg"}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#03133D] via-[#03133D]/90 to-[#03133D]/60" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-end px-8 py-16 lg:px-16 lg:py-24">
            <div className="lg:col-span-7">
              <span className="eyebrow text-[#D05100]">{eyebrow}</span>
              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.05] text-balance">
                {title}
              </h2>
              <p className="mt-6 text-lg text-white/65 leading-relaxed max-w-lg text-pretty">
                {description}
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-4 lg:items-end">
              {primaryHref.startsWith("/") ? (
                <Link href={primaryHref} className={primaryClass}>
                  {primaryContent}
                </Link>
              ) : (
                <a href={primaryHref} className={primaryClass}>
                  {primaryContent}
                </a>
              )}
              <a
                href="tel:+16472589434"
                className="inline-flex items-center justify-between gap-6 h-16 pl-8 pr-3 w-full lg:w-80 rounded-sm border border-white/20 text-white text-sm font-semibold tracking-wide transition-colors hover:bg-white hover:text-[#03133D]"
              >
                647-258-9434
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-current/20">
                  <Phone className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
