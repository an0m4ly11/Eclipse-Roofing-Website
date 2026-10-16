"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const roofTypes = [
  {
    title: "Modified Bitumen",
    description: "Multi-layer protection using torch-applied or self-adhering membranes. Excellent durability and flexibility for Canadian climate.",
    benefits: ["Multi-layer protection", "Excellent waterproofing", "20-30 year lifespan", "UV resistant"]
  },
  {
    title: "TPO (Thermoplastic)",
    description: "Single-ply reflective membrane that reduces cooling costs. Heat-welded seams create watertight bonds.",
    benefits: ["Energy efficient", "Reflective surface", "Environmentally friendly", "Strong seam welds"]
  },
  {
    title: "EPDM Rubber",
    description: "Durable synthetic rubber roofing proven over decades. Flexible and resistant to UV, ozone, and weathering.",
    benefits: ["Proven track record", "Highly flexible", "Weather resistant", "Cost effective"]
  },
  {
    title: "Built-Up Roofing (BUR)",
    description: "Traditional multi-ply system with alternating layers of bitumen and reinforcing fabrics.",
    benefits: ["Extremely durable", "Fire resistant", "Withstands foot traffic", "Low maintenance"]
  }
]

const services = [
  "Complete tear-off and replacement",
  "Roof re-covering and overlays",
  "Emergency leak repairs",
  "Preventive maintenance programs",
  "Drainage system installation",
  "Skylight and vent flashing",
  "Parapet wall repairs",
  "Roof inspections and assessments"
]

export default function FlatRoofingPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section - Clean text-based */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6">
            <Link href="/services" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">All Services</span>
            </Link>
            <div className="max-w-3xl animate-on-scroll">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Flat Roofing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Commercial & Residential Flat Roof Systems
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional installation, repair, and maintenance of all flat roof systems. We work with modified bitumen, TPO, EPDM, and built-up roofing to deliver lasting protection.
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

        {/* Roof Types */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Flat Roof Types We Install</h2>
              <p className="text-muted-foreground">We're certified to install and repair all major flat roofing systems.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {roofTypes.map((type, i) => (
                <div key={type.title} className={`bg-background p-8 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {type.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Flat Roofing Services</h2>
                <p className="text-muted-foreground mb-10">
                  Whether you need a complete roof replacement or emergency repairs, we handle projects of any size.
                </p>
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
                    src="/images/portfolio/flat-roof-deer-park.png"
                    alt="Commercial flat roof installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { number: "20+", label: "Years Experience" },
                { number: "500+", label: "Projects Completed" },
                { number: "100%", label: "Satisfaction Guarantee" },
              ].map((stat, i) => (
                <div key={stat.label} className={`animate-on-scroll stagger-${i + 1}`}>
                  <div className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-2">{stat.number}</div>
                  <div className="text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 animate-on-scroll">Ready to Get Started?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Contact us today for a free inspection and detailed quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" className="font-semibold px-8">
                <Link href="/contact">
                  Schedule Free Inspection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8 bg-transparent">
                <Link href="/portfolio">View Our Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
