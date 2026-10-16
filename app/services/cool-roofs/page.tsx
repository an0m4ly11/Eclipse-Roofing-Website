"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, ArrowLeft, Thermometer, DollarSign, Leaf, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const benefits = [
  { icon: Thermometer, title: "Lower Surface Temperature", description: "Up to 50°F cooler than traditional dark roofs" },
  { icon: DollarSign, title: "Reduced Energy Costs", description: "Lower cooling costs by 10-30%" },
  { icon: Leaf, title: "Environmental Impact", description: "Reduced emissions and urban heat islands" },
  { icon: Clock, title: "Extended Roof Life", description: "Less thermal stress means longer lifespan" }
]

const options = [
  { title: "White TPO Membrane", description: "Single-ply thermoplastic membrane with highly reflective white surface.", reflectance: "85%+ Solar Reflectance" },
  { title: "Cool Roof Coatings", description: "Elastomeric coatings applied over existing roofs for a reflective, waterproof surface.", reflectance: "Up to 90% Solar Reflectance" },
  { title: "Reflective Shingles", description: "Asphalt shingles with specially coated granules that reflect more solar energy.", reflectance: "25-40% Solar Reflectance" },
  { title: "Metal Roofing", description: "Pre-finished metal roofing with reflective pigmented coatings.", reflectance: "60-70% Solar Reflectance" }
]

export default function CoolRoofsPage() {
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
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Energy Efficient</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mt-4 mb-6">
                Cool Roof Systems
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Energy-efficient roofing solutions that reflect sunlight and reduce cooling costs. Ideal for commercial buildings and eco-conscious homeowners.
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

        {/* Benefits Grid */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Why Cool Roofs?</h2>
              <p className="text-muted-foreground">A smart investment that pays dividends in comfort, savings, and sustainability.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className={`bg-background p-6 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <benefit.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Perfect for Toronto's Climate</h2>
                <p className="text-muted-foreground mb-8">
                  With summers getting hotter and energy costs rising, cool roofs make more sense than ever for GTA property owners.
                </p>
                <div className="space-y-4">
                  {[
                    "Reduce air conditioning run time and costs",
                    "Improve indoor comfort without higher bills",
                    "Qualify for potential energy rebates",
                    "Extend the lifespan of your roof",
                    "Lower your building's carbon footprint"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-on-scroll-right">
                <div className="aspect-[4/3] relative rounded-xl overflow-hidden">
                  <img
                    src="/images/portfolio/cool-flat-don-mills-completed.png"
                    alt="Cool roof installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cool Roof Options */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Cool Roof Options</h2>
              <p className="text-muted-foreground">A range of solutions for commercial and residential properties.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {options.map((option, i) => (
                <div key={option.title} className={`bg-background p-8 rounded-xl animate-on-scroll stagger-${Math.min(i + 1, 4)}`}>
                  <div className="inline-block bg-accent/10 text-accent text-sm font-medium px-3 py-1 rounded-full mb-4">
                    {option.reflectance}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eco-Roof Rebate */}
        <section className="py-20 lg:py-28 bg-[#03133D] text-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
              <div className="lg:col-span-6 animate-on-scroll">
                <span className="eyebrow text-[#D05100]">City of Toronto Eco-Roof Incentive</span>
                <h2 className="mt-5 text-3xl lg:text-5xl font-semibold leading-[1.08] tracking-tight text-balance">
                  Get money back for your cool roof.
                </h2>
                <p className="mt-6 text-lg text-white/65 leading-relaxed">
                  The City of Toronto offers an Eco-Roof rebate for qualifying cool roof installations. Eclipse Roofing will
                  prepare and submit the rebate application on your behalf, so you can focus on the savings.
                </p>
                <a
                  href="https://coolroofs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#D05100] underline underline-offset-4"
                >
                  Learn more at coolroofs.org
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="lg:col-span-6 animate-on-scroll">
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50 mb-2">Qualifying products we install</h3>
                <ul className="border-t border-white/10">
                  {[
                    { name: "Soprema Soprastar", note: "Cool roof membrane for flat roofs" },
                    { name: "CertainTeed Landmark — Energy Star", note: "Includes Silver Birch, which qualifies for the rebate" },
                    { name: "CertainTeed Landmark Solaris", note: "Energy Star reflective shingle" },
                  ].map((item) => (
                    <li key={item.name} className="flex items-start gap-4 py-5 border-b border-white/10">
                      <CheckCircle2 className="w-5 h-5 text-[#D05100] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm text-white/55 mt-1">{item.note}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 animate-on-scroll">Start Saving Energy Today</h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Find out if a cool roof is right for your property. We'll assess your current roof and provide a detailed energy savings estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="font-semibold px-8">
                <Link href="/contact">
                  Get Energy Assessment
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
