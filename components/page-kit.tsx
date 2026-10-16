import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

type PageHeroProps = {
  eyebrow: string
  title: ReactNode
  intro: ReactNode
  image?: string
  imageAlt?: string
  back?: { href: string; label: string }
}

export function PageHero({ eyebrow, title, intro, image, imageAlt = "", back }: PageHeroProps) {
  return (
    <section className="bg-background pt-36 lg:pt-44">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {back && (
          <Link
            href={back.href}
            className="inline-flex items-center gap-2 text-sm font-medium text-[#03133D]/60 hover:text-[#03133D] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            {back.label}
          </Link>
        )}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end pb-14 lg:pb-20">
          <div className="lg:col-span-7">
            <span className="eyebrow text-[#D05100]">{eyebrow}</span>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold text-[#03133D] leading-[1.02] tracking-tight text-balance">
              {title}
            </h1>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="text-lg text-[#03133D]/65 leading-relaxed text-pretty">{intro}</div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-4 h-14 pl-7 pr-2 rounded-sm bg-[#D05100] text-white text-sm font-semibold tracking-wide hover:bg-[#b34500] transition-colors"
              >
                Get a free quote
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-white/15 transition-transform group-hover:translate-x-1">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <a
                href="tel:+16472589434"
                className="inline-flex items-center h-14 px-7 rounded-sm border border-[#03133D]/15 text-[#03133D] text-sm font-semibold tracking-wide hover:bg-[#03133D] hover:text-white transition-colors"
              >
                647-258-9434
              </a>
            </div>
          </div>
        </div>
      </div>
      {image && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative aspect-[16/9] lg:aspect-[21/8] overflow-hidden rounded-md">
            <img src={image || "/placeholder.svg"} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      )}
    </section>
  )
}

type SectionProps = {
  eyebrow?: string
  title?: ReactNode
  lead?: ReactNode
  tone?: "light" | "muted" | "dark"
  children: ReactNode
}

export function Section({ eyebrow, title, lead, tone = "light", children }: SectionProps) {
  const toneClass =
    tone === "dark" ? "bg-[#03133D] text-white" : tone === "muted" ? "bg-card text-[#03133D]" : "bg-background text-[#03133D]"
  const leadClass = tone === "dark" ? "text-white/60" : "text-[#03133D]/60"
  return (
    <section className={`${toneClass} py-20 lg:py-28`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {(eyebrow || title || lead) && (
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-16 mb-12 lg:mb-16">
            <div className="lg:col-span-6">
              {eyebrow && <span className="eyebrow text-[#D05100]">{eyebrow}</span>}
              {title && (
                <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.08] tracking-tight text-balance">
                  {title}
                </h2>
              )}
            </div>
            {lead && <div className={`lg:col-span-6 lg:pt-10 text-lg leading-relaxed text-pretty ${leadClass}`}>{lead}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function CheckList({ items, columns = 2, dark = false }: { items: string[]; columns?: 1 | 2 | 3; dark?: boolean }) {
  const cols = columns === 3 ? "md:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "md:grid-cols-2" : ""
  const border = dark ? "border-white/10" : "border-[#03133D]/10"
  const text = dark ? "text-white/85" : "text-[#03133D]/85"
  return (
    <ul className={`grid ${cols} gap-x-12 border-t ${border}`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-4 py-5 border-b ${border}`}>
          <span className="mt-0.5 flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#D05100]/10">
            <Check className="w-3.5 h-3.5 text-[#D05100]" />
          </span>
          <span className={`leading-relaxed ${text}`}>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function FeatureGrid({
  items,
  dark = false,
}: {
  items: { title: string; description: string }[]
  dark?: boolean
}) {
  const border = dark ? "border-white/10" : "border-[#03133D]/10"
  const desc = dark ? "text-white/60" : "text-[#03133D]/60"
  return (
    <div className={`grid md:grid-cols-2 lg:grid-cols-3 border-t border-l ${border}`}>
      {items.map((item, i) => (
        <div key={item.title} className={`flex flex-col gap-4 p-8 lg:p-10 border-r border-b ${border}`}>
          <span className="text-sm font-semibold text-[#D05100] tabular-nums">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="text-xl font-semibold leading-snug">{item.title}</h3>
          <p className={`leading-relaxed ${desc}`}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export function TagList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map((item) => (
        <li
          key={item}
          className="px-5 py-3 rounded-sm border border-[#03133D]/10 bg-background text-sm font-medium text-[#03133D]"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
