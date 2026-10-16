"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    number: "01",
    title: "Flat Roof",
    subtitle: "Commercial & Industrial",
    description: "Installation, repair and maintenance of various commercial flat roof systems. Modified bitumen, rubber roof systems and more.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
  },
  {
    number: "02",
    title: "Shingle",
    subtitle: "Residential",
    description: "Our team of installers pride themselves on their skill and ability to repair and install a variety of residential roof systems with precision.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    number: "03",
    title: "Cool Roofs",
    subtitle: "Energy Efficient",
    description: "We offer cool roof options for both your residential home and commercial building; shingle and flat roof options available.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
  },
  {
    number: "04",
    title: "Aluminum",
    subtitle: "Siding & Eavestrough",
    description: "Trusted installer of your residential or commercial eavestrough system. We assist owners with assessing their eavestrough needs.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    number: "05",
    title: "Emergency",
    subtitle: "24/7 Service",
    description: "Emergency and repair services due to rain, severe weather, storms or high winds. Typical emergency repair services available 24/7.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
  },
  {
    number: "06",
    title: "Skylights",
    subtitle: "Sun Tunnels",
    description: "Professional skylight installation and sun tunnel services to bring natural light into your home or commercial space.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  }
]

export function ServicesSection() {
  const ref = useScrollAnimation()

  return (
    <section id="services" className="py-32 lg:py-48 bg-secondary" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase animate-on-scroll">What We Do</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 animate-on-scroll stagger-1">
              OUR<br />
              <span className="text-white/30">SERVICES</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-md leading-relaxed animate-on-scroll stagger-2">
            Comprehensive roofing solutions for commercial, residential and industrial properties across the GTA.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service, index) => (
            <div 
              key={service.number}
              className={`group bg-secondary p-8 lg:p-10 hover:bg-card transition-colors duration-500 cursor-pointer animate-on-scroll stagger-${Math.min(index + 1, 6)}`}
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-accent/50 font-black text-5xl">{service.number}</span>
                <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
              </div>
              
              <div className="aspect-[16/10] relative overflow-hidden mb-8">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              </div>

              <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{service.subtitle}</div>
              <h3 className="text-2xl lg:text-3xl font-black text-white mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
