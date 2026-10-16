"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    number: "01",
    title: "Flat Roof Systems",
    category: "Commercial & Industrial",
    description: "Installation, repair, and maintenance of TPO, EPDM, modified bitumen, and other commercial flat roof systems.",
    link: "/services/flat-roofing"
  },
  {
    number: "02",
    title: "Shingle Roofing",
    category: "Residential",
    description: "Premium asphalt, architectural, and designer shingle installation with manufacturer-backed warranties.",
    link: "/services/shingle-roofing"
  },
  {
    number: "03",
    title: "Cool Roof Systems",
    category: "Energy Efficient",
    description: "Reflective roofing solutions that reduce cooling costs and extend roof life for commercial and residential properties.",
    link: "/services/cool-roofs"
  },
  {
    number: "04",
    title: "Siding & Exterior",
    category: "Exterior Services",
    description: "Complete siding installation including vinyl, aluminum, fiber cement, and engineered wood options.",
    link: "/services/siding"
  },
  {
    number: "05",
    title: "Skylights & Sun Tunnels",
    category: "Natural Light",
    description: "Professional skylight installation, repairs, and sun tunnel systems to bring natural light into your space.",
    link: "/services/skylights"
  },
  {
    number: "06",
    title: "Eavestroughs & Gutters",
    category: "Drainage Systems",
    description: "Seamless gutter installation, gutter guards, soffit, fascia, and complete drainage solutions.",
    link: "/services/eavestroughs"
  }
]

const quickLinks = [
  { label: "Commercial", href: "/services/commercial" },
  { label: "Residential", href: "/services/residential" },
  { label: "Flat Roofs", href: "/services/flat-roofing" },
  { label: "Shingles", href: "/services/shingle-roofing" },
  { label: "Cool Roofs", href: "/services/cool-roofs" },
  { label: "Siding", href: "/services/siding" },
  { label: "Skylights", href: "/services/skylights" },
  { label: "Eavestroughs", href: "/services/eavestroughs" },
]

export default function ServicesPage() {
  const ref = useScrollAnimation()

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 bg-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl animate-on-scroll">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6">
                Our Services
              </h1>
              <p className="text-xl text-primary-foreground/70 leading-relaxed">
                Comprehensive roofing and exterior solutions for commercial, industrial, and residential properties across the Greater Toronto Area.
              </p>
            </div>
            
            {/* Quick Navigation */}
            <div className="flex flex-wrap gap-2 mt-10 animate-on-scroll stagger-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="space-y-1">
              {services.map((service, i) => (
                <Link
                  key={service.title}
                  href={service.link}
                  className={`group flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8 py-10 border-t border-foreground/10 hover:border-accent transition-colors animate-on-scroll stagger-${Math.min(i + 1, 6)}`}
                >
                  {/* Number */}
                  <span className="text-sm font-medium text-muted-foreground lg:w-12">{service.number}</span>
                  
                  {/* Content */}
                  <div className="flex-1 lg:flex lg:items-center lg:gap-8">
                    <div className="lg:flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl lg:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <span className="text-sm font-medium text-accent uppercase tracking-wider">{service.category}</span>
                    </div>
                    
                    <p className="text-muted-foreground mt-3 lg:mt-0 lg:max-w-md lg:text-right">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="hidden lg:flex w-12 justify-end">
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-6">
              <Link href="/services/commercial" className="group bg-primary p-10 lg:p-14 flex flex-col justify-between min-h-[300px] animate-on-scroll">
                <div>
                  <span className="text-sm font-medium text-primary-foreground/60 uppercase tracking-wider">For Business</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground mt-2">Commercial & Industrial</h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary-foreground/70 max-w-sm">Flat roofs, cool roofs, maintenance programs, and emergency services for businesses.</p>
                  <ArrowUpRight className="w-8 h-8 text-primary-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>

              <Link href="/services/residential" className="group bg-accent p-10 lg:p-14 flex flex-col justify-between min-h-[300px] animate-on-scroll stagger-1">
                <div>
                  <span className="text-sm font-medium text-accent-foreground/60 uppercase tracking-wider">For Homeowners</span>
                  <h3 className="text-3xl lg:text-4xl font-bold text-accent-foreground mt-2">Residential Services</h3>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-accent-foreground/80 max-w-sm">Shingle roofing, siding, skylights, eavestroughs, and complete exterior solutions.</p>
                  <ArrowUpRight className="w-8 h-8 text-accent-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 animate-on-scroll">
              <div className="max-w-2xl">
                <span className="text-sm font-medium text-accent uppercase tracking-wider">24/7 Available</span>
                <h2 className="text-3xl lg:text-5xl font-bold text-foreground mt-2 mb-4">Emergency Roof Repairs</h2>
                <p className="text-muted-foreground text-lg">
                  Storm damage? Severe leak? Our emergency response team is available around the clock to protect your property when you need us most.
                </p>
              </div>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 w-fit">
                <a href="tel:+16472589434">
                  Call 647-258-9434
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-6 animate-on-scroll">
              Not Sure What You Need?
            </h2>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto mb-10 animate-on-scroll stagger-1">
              Contact us for a free consultation. Our experts will assess your property and recommend the best solution for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll stagger-2">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent font-semibold px-8">
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
