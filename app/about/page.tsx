"use client"

import { ArrowUpRight, Award, BadgeCheck, HeartHandshake, ShieldCheck, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const stats = [
  { value: "20+", label: "Years experience" },
  { value: "10,000+", label: "Projects completed" },
  { value: "100%", label: "Satisfaction rate" },
  { value: "24/7", label: "Emergency service" },
]

const values = [
  { icon: Award, title: "Quality craftsmanship", description: "We take pride in every project, using premium materials and proven techniques." },
  { icon: HeartHandshake, title: "Customer first", description: "Your satisfaction is our priority. We communicate clearly and deliver on our promises." },
  { icon: ShieldCheck, title: "Licensed & insured", description: "Fully licensed and insured for your complete peace of mind on every project." },
  { icon: Tag, title: "Competitive pricing", description: "Fair, transparent pricing with no hidden fees or surprise charges." },
]

const process = [
  { title: "Free inspection", description: "A free inspection by a professional licensed contractor from the City of Toronto." },
  { title: "Full documentation", description: "A thorough inspection of your project with photos and warranty information." },
  { title: "Itemized quote", description: "A detailed, itemized quote provided in person or by email." },
  { title: "Protected property", description: "Special attention to the safety of your home, building, landscaping and neighbouring properties." },
  { title: "Timely completion", description: "Your project completed in a timely manner (weather permitting!)." },
  { title: "Final inspection & warranty", description: "A final walkthrough to ensure every detail meets your satisfaction, backed by workmanship and material warranties." },
]

const brands = ["CertainTeed", "Soprema", "Maibec", "GAF", "DaVinci", "Inspire", "Owens Corning", "Gentek", "James Hardie", "Kaycan"]

const productLinks = [
  { name: "CertainTeed Canada", url: "https://www.certainteed.com/en-ca" },
  { name: "Owens Corning Canada", url: "https://www.owenscorning.com/en-ca/roofing" },
  { name: "GAF Canada", url: "https://www.gaf.ca" },
  { name: "James Hardie Canada", url: "https://www.jameshardie.ca" },
  { name: "Maibec", url: "https://www.maibec.com/en" },
]

export default function AboutPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        <section className="bg-background pt-40 pb-16 lg:pt-48 lg:pb-24">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
            <div className="lg:col-span-7 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">About Eclipse</span>
              <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-semibold text-[#03133D] leading-[1.02] text-balance">
                Built on trust. Delivered with excellence.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed text-pretty animate-on-scroll stagger-1">
              A fully insured roofing partner trusted by property managers across the Greater Toronto Area&mdash;specializing
              in commercial and industrial roofing, with the residential craftsmanship that first built our reputation.
            </p>
          </div>
        </section>

        <section className="bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-md animate-on-scroll-scale">
              <img
                src="/images/about-roof-1.png"
                alt="Freshly installed asphalt shingle roof on a modern home"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <dl className="relative -mt-px grid grid-cols-2 lg:grid-cols-4 bg-[#03133D] rounded-b-md lg:mx-12 lg:-mt-20">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-2 px-6 py-8 lg:px-10 lg:py-10 border-white/10 ${i % 2 === 1 ? "border-l" : ""} ${i > 1 ? "border-t lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                >
                  <dd className="text-4xl lg:text-5xl font-semibold text-white tracking-tight">{stat.value}</dd>
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="bg-background py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-4 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">Our story</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                Most of our work comes from referrals.
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-6 animate-on-scroll stagger-1">
              <p className="text-2xl lg:text-3xl font-medium text-[#03133D] leading-snug text-pretty">
                Eclipse Roofing has earned the trust of countless customers throughout the GTA by providing professional,
                reliable and proven quality service&mdash;it&apos;s likely we&apos;ve worked with someone you know.
              </p>
              <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-[#03133D]/10 text-muted-foreground leading-relaxed">
                <p>
                  We are proud of the thousands of installations we have performed and a long list of happy clients in the
                  GTA area. Our goal is to exceed customer expectations by providing the best value and service.
                </p>
                <p>
                  This company is our life vision. The moment you hire us, we will endeavour to ensure your satisfaction
                  with your project from beginning to end.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-6 relative animate-on-scroll-left">
              <div className="relative aspect-[4/5] md:aspect-[5/4] rounded-md overflow-hidden">
                <img
                  src="/images/about-roof-2.png"
                  alt="Flat commercial roof with white membrane and rooftop units"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 right-4 lg:-right-10 max-w-[280px] rounded-md bg-[#03133D] p-6 shadow-2xl">
                <BadgeCheck className="w-6 h-6 text-[#D05100]" aria-hidden="true" />
                <p className="mt-3 text-sm font-semibold text-white leading-snug">
                  Insured & bonded by WSIB Ontario
                </p>
                <p className="mt-1 text-[13px] text-white/60 leading-relaxed">Licensed by the City of Toronto.</p>
              </div>
            </div>

            <div className="lg:col-span-6 animate-on-scroll-right">
              <span className="eyebrow text-[#D05100]">Team & mission</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                More than a roofing company.
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                We are constantly evolving at every level to better serve our clients&mdash;offering a wide umbrella of
                services for the exterior of your residential or commercial property.
              </p>
              <ul className="mt-10 grid sm:grid-cols-2 gap-x-8 border-t border-[#03133D]/10">
                {[
                  "Shingle & flat roof repairs",
                  "Full roof replacements",
                  "Eavestrough systems",
                  "Custom soffit & fascia",
                  "Custom aluminum work",
                  "Siding installation & repair",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 py-4 border-b border-[#03133D]/10 text-sm font-medium text-[#03133D]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D05100]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
                Our experienced, licensed technicians follow the guidelines and standards set by the organizations that
                govern our industry.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-background py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 animate-on-scroll">
              <div>
                <span className="eyebrow text-[#D05100]">Visit us</span>
                <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05]">Our home base</h2>
              </div>
              <p className="max-w-md text-muted-foreground leading-relaxed text-pretty">
                Our fully-stocked office and fleet are based in the heart of the GTA, ready to serve commercial and
                residential clients across the region.
              </p>
            </div>
            <div className="grid md:grid-cols-12 gap-4 lg:gap-6">
              <div className="md:col-span-7 relative aspect-[4/3] rounded-md overflow-hidden animate-on-scroll">
                <img
                  src="/images/eclipse-office-1.jpg"
                  alt="Eclipse Roofing office storefront with branded fleet trucks parked out front"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="md:col-span-5 relative aspect-[4/3] md:aspect-auto rounded-md overflow-hidden animate-on-scroll stagger-1">
                <img
                  src="/images/eclipse-office-2.jpg"
                  alt="Eclipse Roofing office and branded trucks lined up in the lot"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative bg-[#03133D] py-28 lg:py-36 overflow-hidden">
          <div className="absolute inset-0 hairline-grid" aria-hidden="true" />
          <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 mb-16">
              <div className="lg:col-span-6 animate-on-scroll">
                <span className="eyebrow text-[#D05100]">What we provide</span>
                <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-white leading-[1.05] text-balance">
                  A clear process, from first look to final walkthrough.
                </h2>
              </div>
              <div className="lg:col-span-6 relative aspect-[16/10] rounded-md overflow-hidden animate-on-scroll stagger-1">
                <img
                  src="/images/about-roof-3.png"
                  alt="Gray slate tile roof being installed with copper flashing"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
            <ol className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
              {process.map((step, i) => (
                <li
                  key={step.title}
                  className={`flex flex-col gap-4 p-8 lg:p-10 border-r border-b border-white/10 transition-colors hover:bg-white/[0.03] animate-on-scroll stagger-${(i % 3) + 1}`}
                >
                  <span className="text-sm font-semibold text-[#D05100] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-background py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">Materials</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                Brands we love to build with.
              </h2>
              <ul className="mt-10 flex flex-col border-t border-[#03133D]/10">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 border-b border-[#03133D]/10 text-sm font-medium text-[#03133D] transition-colors hover:text-[#D05100]"
                    >
                      {link.name}
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[#03133D]/10 border border-[#03133D]/10 rounded-md overflow-hidden self-start animate-on-scroll stagger-1">
              {brands.map((brand) => (
                <li
                  key={brand}
                  className="flex items-center justify-center bg-card h-28 lg:h-32 px-4 text-center text-base lg:text-lg font-semibold tracking-tight text-[#03133D]/70 transition-colors hover:text-[#03133D]"
                >
                  {brand}
                </li>
              ))}
              <li className="flex items-center justify-center bg-card h-28 lg:h-32 px-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#D05100] md:col-span-2 lg:col-span-2">
                And more
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-secondary py-28 lg:py-36">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mb-14 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">Our values</span>
              <h2 className="mt-6 text-4xl lg:text-5xl font-semibold text-[#03133D] leading-[1.05] text-balance">
                The principles behind every roof.
              </h2>
            </div>
            <dl className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[#03133D]/10">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className={`flex flex-col gap-4 py-10 sm:pr-8 lg:px-8 lg:first:pl-0 border-b border-[#03133D]/10 lg:border-b-0 ${i > 0 ? "lg:border-l" : ""} animate-on-scroll stagger-${i + 1}`}
                >
                  <value.icon className="w-6 h-6 text-[#D05100]" aria-hidden="true" />
                  <dt className="text-lg font-semibold text-[#03133D]">{value.title}</dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed">{value.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <HomeCTA
          description="Contact us today for a free estimate. Our team is ready to help with all your roofing needs."
          image="/images/about-roof-1.png"
        />
      </main>
      <Footer />
    </>
  )
}
