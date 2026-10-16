"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const shingleTypes = [
  {
    title: "Architectural Shingles",
    description: "Premium dimensional shingles that create depth and visual interest with enhanced durability.",
    benefits: ["3D dimensional look", "Superior durability", "Wind resistant up to 130 mph", "Wide color selection"]
  },
  {
    title: "3-Tab Shingles",
    description: "Classic flat shingles offering a clean, uniform appearance at an affordable price point.",
    benefits: ["Economical choice", "Lightweight", "Easy maintenance", "Proven performance"]
  },
  {
    title: "Designer Shingles",
    description: "Luxury shingles mimicking slate, cedar shake, or tile at a fraction of the cost.",
    benefits: ["Premium aesthetics", "Lifetime warranties available", "Unique profiles", "Maximum curb appeal"]
  },
  {
    title: "Cool Roof Shingles",
    description: "Reflective granules reduce heat absorption by up to 25%. Lower your cooling costs.",
    benefits: ["Energy savings", "Cooler attic space", "Extended roof life", "Eco-friendly option"]
  }
]

const services = [
  "Complete roof replacement",
  "Shingle repairs and patching",
  "Storm damage restoration",
  "Ventilation improvements",
  "Flashing replacement",
  "Ice dam prevention",
  "Attic insulation upgrades",
  "Gutter guard installation"
]

export default function ShingleRoofingPage() {
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Shingle Roofing</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Expert Shingle Installation & Repairs
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Expert shingle installation and repairs for homes across the GTA. We work with premium brands to deliver beautiful, long-lasting roofs.
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

        {/* Shingle Types */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Shingle Options</h2>
              <p className="text-muted-foreground">Find the perfect balance of style, durability, and value.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {shingleTypes.map((type, i) => (
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

        {/* Services & Image */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-on-scroll-left order-2 lg:order-1">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio/shingle-palmerston-completed.png"
                    alt="Premium shingle roof installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Complete Shingle Services</h2>
                <p className="text-muted-foreground mb-10">From minor repairs to complete replacements, we handle all aspects of residential shingle roofing.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <div key={service} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">Protect Your Home Today</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Get a free inspection and see why hundreds of GTA homeowners trust Eclipse Roofing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="font-semibold px-8">
                <Link href="/contact">
                  Get Your Free Quote
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
