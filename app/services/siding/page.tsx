"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const sidingTypes = [
  {
    title: "Vinyl Siding",
    description: "Affordable, low-maintenance option available in countless colors and styles.",
    benefits: ["Budget friendly", "Zero painting required", "Easy to clean", "50+ year lifespan"]
  },
  {
    title: "Aluminum Siding",
    description: "Durable metal siding that won't crack, peel, or rot. Excellent for trim work.",
    benefits: ["Fire resistant", "Pest proof", "Recyclable", "Versatile applications"]
  },
  {
    title: "James Hardie Fiber Cement",
    description: "Premium fiber cement siding that looks like wood but resists fire, rot, and pests.",
    benefits: ["Looks like real wood", "Non-combustible", "Termite resistant", "30-50 year warranty"]
  },
  {
    title: "Engineered Wood",
    description: "Composite wood siding combining real wood fibers with resins for authentic appearance.",
    benefits: ["Natural wood look", "Better than natural wood", "Paintable", "Strong impact resistance"]
  }
]

const services = [
  "Complete siding replacement",
  "Partial siding repairs",
  "Soffit and fascia installation",
  "Aluminum trim and capping",
  "Eavestrough integration",
  "Insulated siding systems",
  "Color and style consultation",
  "Removal of old materials"
]

export default function SidingPage() {
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Exterior</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Siding & Exterior Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your home's exterior with professional siding installation. We work with vinyl, aluminum, fiber cement, and more.
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

        {/* Siding Types */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Siding Materials</h2>
              <p className="text-muted-foreground">Choose from a range of materials, each with unique advantages.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {sidingTypes.map((type, i) => (
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
              <div className="animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Complete Exterior Services</h2>
                <p className="text-muted-foreground mb-10">
                  Beyond siding, we handle all aspects of your home's exterior for a cohesive, professional finish.
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
                    src="/images/portfolio/siding-greenwood-completed.png"
                    alt="Professional siding installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">Transform Your Home's Exterior</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Ready for a fresh look? Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="font-semibold px-8">
                <Link href="/contact">
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="font-semibold px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/portfolio">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
