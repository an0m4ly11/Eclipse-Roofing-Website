"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft, Droplets, Shield, Home, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const gutterTypes = [
  { title: "5\" K-Style Gutters", description: "Most popular profile for residential homes. Handles moderate rainfall.", capacity: "Standard residential" },
  { title: "6\" K-Style Gutters", description: "Oversized gutters for large roof areas. 40% more capacity than standard.", capacity: "High-capacity" },
  { title: "Half-Round Gutters", description: "Traditional semi-circular profile for heritage and Victorian homes.", capacity: "Heritage homes" },
  { title: "Box Gutters", description: "Commercial-style gutters integrated into the roof structure.", capacity: "Commercial" }
]

const problems = [
  { icon: Droplets, title: "Foundation Damage", desc: "Water pooling causes cracks and basement flooding" },
  { icon: Shield, title: "Fascia & Soffit Rot", desc: "Overflowing gutters cause expensive wood rot" },
  { icon: Home, title: "Landscape Erosion", desc: "Water cascading erodes landscaping" },
  { icon: Wrench, title: "Ice Dams", desc: "Clogged gutters contribute to ice dam formation" },
]

const services = [
  "Complete eavestrough replacement",
  "Seamless gutter installation",
  "Leafguard gutter protection (Alu-Rex)",
  "Rain barrel installation",
  "Downspout installation & repairs",
  "Soffit and fascia replacement",
  "Gutter cleaning & maintenance",
  "Ice dam prevention systems",
  "Custom gutter fabrication"
]

export default function EavestroughsPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Services</span>
            </Link>
            <div className="max-w-3xl animate-on-scroll">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Drainage</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Eavestroughs & Gutters
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Protect your home's foundation with properly installed eavestrough systems. We install seamless gutters, downspouts, gutter guards, and soffit & fascia.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg" className="font-semibold px-8">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="font-semibold px-8 bg-transparent">
                  <a href="tel:+16472589434">Call 647-258-9434</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Gutters Matter */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Gutters Matter</h2>
              <p className="text-muted-foreground">Your gutter system is your home's first line of defense against water damage.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {problems.map((problem, i) => (
                <div key={problem.title} className={`bg-background p-6 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <problem.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground text-sm">{problem.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gutter Types */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Gutter Options</h2>
              <p className="text-muted-foreground">Seamless gutters in a variety of profiles to match your home.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {gutterTypes.map((type, i) => (
                <div key={type.title} className={`bg-card p-8 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full whitespace-nowrap">{type.capacity}</span>
                  </div>
                  <p className="text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Image */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Complete Gutter Services</h2>
                <p className="text-muted-foreground mb-10">From new installations to repairs and maintenance, we handle all your eavestrough needs.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-on-scroll-right">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio/eavestrough-cedarvale-completed.png"
                    alt="Professional eavestrough installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Colours */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <span className="eyebrow text-[#D05100]">Popular colours</span>
              <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-foreground mb-4">Finishes our clients choose most.</h2>
              <p className="text-muted-foreground">Seamless aluminum eavestroughs are available in many colours. These are the most requested.</p>
            </div>
            <ul className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
              {[
                { name: "Matte Black", swatch: "#1c1c1c" },
                { name: "Commercial Brown", swatch: "#5a4636" },
                { name: "Chocolate Brown", swatch: "#3e2a1f" },
                { name: "White", swatch: "#f7f7f5" },
              ].map((colour) => (
                <li key={colour.name} className="flex flex-col gap-5 p-6 lg:p-8 border-r border-b border-border">
                  <span
                    aria-hidden="true"
                    className="block h-20 w-full rounded-sm border border-border"
                    style={{ backgroundColor: colour.swatch }}
                  />
                  <span className="font-semibold text-foreground">{colour.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">Protect Your Foundation</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Get a free assessment of your current gutter system and see how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="font-semibold px-8">
                <Link href="/contact">
                  Get Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
