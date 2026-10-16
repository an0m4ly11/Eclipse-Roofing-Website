"use client"

import { Shield, Clock, Award, Wrench } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const features = [
  {
    icon: Shield,
    title: "Quality guaranteed",
    description: "Every project is backed by comprehensive warranties and our commitment to excellence.",
  },
  {
    icon: Clock,
    title: "On-time delivery",
    description: "We respect your schedule and complete projects within the agreed timeframe.",
  },
  {
    icon: Award,
    title: "Licensed & insured",
    description: "Fully licensed, bonded, and insured for your complete peace of mind.",
  },
  {
    icon: Wrench,
    title: "Expert craftsmanship",
    description: "Our skilled crews bring decades of combined experience to every job.",
  },
]

export function HomeWhy() {
  const ref = useScrollAnimation()

  return (
    <section className="py-28 lg:py-36 bg-secondary" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div className="lg:col-span-5 relative animate-on-scroll-left">
          <div className="relative aspect-[4/5] rounded-md overflow-hidden">
            <img
              src="/images/residential-roofing-hero.jpg"
              alt="Eclipse Roofing crew completing a residential roof"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 lg:-right-10 max-w-[260px] rounded-md bg-[#03133D] p-6 shadow-2xl">
            <p className="text-sm font-semibold text-white leading-snug">
              HomeStars &ldquo;Best of&rdquo; award winner
            </p>
            <p className="mt-2 text-[13px] text-white/60 leading-relaxed">
              Recognized by GTA homeowners for service and workmanship.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 animate-on-scroll-right">
          <span className="eyebrow text-[#D05100]">Why Eclipse</span>
          <h2 className="mt-6 text-4xl lg:text-6xl font-semibold text-[#03133D] leading-[1.05] text-balance">
            Built on trust. Driven by excellence.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl text-pretty">
            For over 20 years, we&apos;ve been the trusted choice for roofing across the
            Greater Toronto Area.
          </p>

          <dl className="mt-12 grid sm:grid-cols-2 border-t border-[#03133D]/10">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`py-8 border-b border-[#03133D]/10 ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8 sm:border-l"}`}
              >
                <dt className="flex items-center gap-3 text-base font-semibold text-[#03133D]">
                  <feature.icon className="w-5 h-5 text-[#D05100]" aria-hidden="true" />
                  {feature.title}
                </dt>
                <dd className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
