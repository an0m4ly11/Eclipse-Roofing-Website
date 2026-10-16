"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft, Sun, Home, Zap, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const skylightTypes = [
  { title: "Fixed Skylights", description: "Stationary skylights for maximum natural light.", ideal: "Hallways, stairwells, living rooms" },
  { title: "Venting Skylights", description: "Operable skylights that open for fresh air circulation.", ideal: "Bathrooms, kitchens, bedrooms" },
  { title: "Sun Tunnels", description: "Tubular daylighting devices for interior rooms.", ideal: "Bathrooms, closets, interior hallways" },
  { title: "Custom Skylights", description: "Custom-designed for unique applications.", ideal: "Unique roof angles, specialty projects" }
]

const benefits = [
  { icon: Sun, title: "Natural Light", desc: "Flood your home with beautiful daylight" },
  { icon: Zap, title: "Energy Savings", desc: "Reduce reliance on artificial lighting" },
  { icon: Home, title: "Added Value", desc: "Increase your home's value" },
  { icon: Shield, title: "Proper Installation", desc: "Expert installation prevents leaks" },
]

const services = [
  "New skylight installation",
  "Skylight replacement",
  "Sun tunnel installation",
  "Leak repair and resealing",
  "Flashing replacement",
  "Glass replacement",
  "Shade and blind installation",
  "Electric venting upgrades"
]

export default function SkylightsPage() {
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Natural Light</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Skylights & Sun Tunnels
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Bring natural light into your home with professionally installed skylights. We're certified installers for VELUX and other premium brands.
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

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className={`bg-background p-6 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <benefit.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skylight Types */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Skylight Options</h2>
              <p className="text-muted-foreground">We install all types of skylights for your space and budget.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {skylightTypes.map((type, i) => (
                <div key={type.title} className={`bg-card p-8 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <h3 className="text-xl font-bold text-foreground mb-3">{type.title}</h3>
                  <p className="text-muted-foreground mb-4">{type.description}</p>
                  <span className="inline-block text-sm font-medium text-accent">Best for: {type.ideal}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Image */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative animate-on-scroll-left">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio/flat-roof-greenwood.png"
                    alt="Skylight installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>

              <div className="animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Skylight Services</h2>
                <p className="text-muted-foreground mb-10">From installation to repairs, we handle everything with expert precision.</p>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">Brighten Your Home</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Ready to bring more natural light into your home? Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="font-semibold px-8">
                <Link href="/contact">
                  Schedule Consultation
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
