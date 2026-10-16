"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Commercial Flat Roof Installation",
    category: "Commercial",
    location: "Etobicoke, ON",
    image: "/images/featured-flat-roof.jpg"
  },
  {
    title: "Premium Shingle Replacement",
    category: "Residential",
    location: "Toronto, ON",
    image: "/images/featured-shingle.png"
  },
  {
    title: "Siding & Aluminum Replacement",
    category: "Residential",
    location: "Toronto, ON",
    image: "/images/featured-siding.jpg"
  }
]

export function HomePortfolio() {
  const ref = useScrollAnimation()

  return (
    <section className="py-32 lg:py-40 bg-[#0a0a0a]" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 animate-on-scroll">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-accent" />
              <span className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent">
                Our Work
              </span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-white">
              Featured Projects
            </h2>
          </div>
          <Button 
            asChild 
            variant="outline" 
            className="h-12 px-8 text-[13px] font-medium uppercase tracking-[0.1em] bg-transparent border-white/20 text-white hover:bg-white/5 self-start lg:self-auto"
          >
            <Link href="/portfolio">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Link
              key={project.title}
              href="/portfolio"
              className={`group animate-on-scroll stagger-${i + 1}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                
                {/* Category tag */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-[11px] font-medium uppercase tracking-[0.15em] text-white">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm">{project.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
