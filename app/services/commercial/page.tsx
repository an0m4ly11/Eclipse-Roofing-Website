"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Building2, Wrench, Sun, Calendar, AlertTriangle, ClipboardCheck, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    title: "Flat Roof Installation",
    description: "Complete flat roof installation for commercial and industrial buildings using premium materials like TPO, EPDM, and modified bitumen.",
    icon: Layers,
    href: "/services/flat-roofing"
  },
  {
    title: "Flat Roof Repair",
    description: "Expert repair services for all types of commercial flat roofs. We diagnose and fix leaks, ponding issues, and membrane damage.",
    icon: Wrench,
    href: "/services/flat-roofing"
  },
  {
    title: "Cool Roof Systems",
    description: "Energy-efficient cool roof options that reduce cooling costs and extend roof life through reflective technology.",
    icon: Sun,
    href: "/services/cool-roofs"
  },
  {
    title: "Roof Maintenance Programs",
    description: "Preventive maintenance programs to extend the life of your commercial roof and prevent costly emergency repairs.",
    icon: Calendar,
    href: "/contact"
  },
  {
    title: "Emergency Repairs",
    description: "24/7 emergency response for commercial roof leaks and storm damage. Fast service to protect your business.",
    icon: AlertTriangle,
    href: "/contact"
  },
  {
    title: "Roof Inspections",
    description: "Comprehensive roof assessments and detailed reports to help you plan maintenance and budgeting.",
    icon: ClipboardCheck,
    href: "/contact"
  }
]

const benefits = [
  { title: "Licensed & Insured", description: "Full coverage for your peace of mind" },
  { title: "20+ Years Experience", description: "Trusted commercial roofing experts" },
  { title: "Free Inspections", description: "No-obligation assessments" },
  { title: "24/7 Emergency Service", description: "We're here when you need us" },
]

export default function CommercialServicesPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl animate-on-scroll">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-5 h-5 text-foreground/60" />
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-foreground/60 text-xs font-medium">
                  Commercial & Industrial
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Commercial<br />Roofing Services
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional commercial and industrial roofing services for businesses across the Greater Toronto Area. From flat roof installations to emergency repairs, we have you covered.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild className="rounded-full font-semibold px-6">
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full font-semibold px-6 bg-transparent">
                  <a href="tel:+16472589434">Call 647-258-9434</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className={`bg-card rounded-2xl p-6 animate-on-scroll stagger-${i + 1}`}>
                  <CheckCircle2 className="w-8 h-8 text-primary mb-3" />
                  <div className="text-foreground font-semibold">{benefit.title}</div>
                  <div className="text-muted-foreground text-sm mt-1">{benefit.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12 animate-on-scroll">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Commercial Solutions</h2>
              <p className="text-muted-foreground mt-2">Complete roofing services for your business</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <Link 
                  key={service.title} 
                  href={service.href}
                  className={`group bg-background rounded-2xl p-8 hover:shadow-lg transition-all duration-300 animate-on-scroll stagger-${Math.min(i + 1, 6)}`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 animate-on-scroll">
                  Our Commercial Process
                </h2>
                
                <div className="space-y-6">
                  {[
                    { step: "01", title: "Site Assessment", desc: "Comprehensive inspection of your commercial property" },
                    { step: "02", title: "Detailed Proposal", desc: "Clear pricing with project timeline and specifications" },
                    { step: "03", title: "Professional Installation", desc: "Minimal disruption to your business operations" },
                    { step: "04", title: "Quality Assurance", desc: "Final inspection and warranty documentation" },
                  ].map((item, i) => (
                    <div key={item.step} className={`flex gap-4 animate-on-scroll stagger-${i + 1}`}>
                      <span className="text-muted-foreground/30 font-bold text-3xl">{item.step}</span>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative animate-on-scroll-right">
                <div className="aspect-square relative rounded-3xl overflow-hidden">
                  <img
                    src="/images/portfolio/flat-roof-etobicoke.png"
                    alt="Commercial flat roof installation"
                    className="absolute inset-0 w-full h-[130%] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-primary">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-on-scroll">
              Protect Your Investment
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Your commercial property deserves the best protection. Contact us today for a free inspection and estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold px-8">
                <Link href="/contact">
                  Schedule Free Inspection
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full font-semibold px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
                <Link href="/services/residential">View Residential Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
