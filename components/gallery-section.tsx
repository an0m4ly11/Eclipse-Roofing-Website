"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const projects = [
  {
    title: "Commercial Flat Roofing",
    location: "Etobicoke",
    image: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80",
    category: "Commercial"
  },
  {
    title: "Shingle Replacement",
    location: "Toronto",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    category: "Residential"
  },
  {
    title: "Siding & Aluminum",
    location: "North York",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    category: "Siding"
  },
  {
    title: "Flat Roof Installation",
    location: "Mississauga",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    category: "Commercial"
  },
  {
    title: "Sun Tunnel Installation",
    location: "Scarborough",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    category: "Residential"
  },
  {
    title: "Cool Roof Application",
    location: "Oakville",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    category: "Commercial"
  }
]

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const ref = useScrollAnimation()

  return (
    <section id="work" className="py-32 lg:py-48 bg-background" ref={ref}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase animate-on-scroll">Portfolio</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 animate-on-scroll stagger-1">
            OUR <span className="text-white/30">WORK</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Large left */}
          <div className="col-span-12 lg:col-span-8 animate-on-scroll stagger-1">
            <button
              type="button"
              onClick={() => setSelectedImage(projects[0].image)}
              className="group relative aspect-[16/10] w-full overflow-hidden cursor-pointer"
            >
              <Image src={projects[0].image || "/placeholder.svg"} alt={projects[0].title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 p-8">
                <span className="text-accent text-xs font-bold uppercase tracking-wider">{projects[0].category}</span>
                <h3 className="text-2xl lg:text-3xl font-black text-white mt-2">{projects[0].title}</h3>
                <p className="text-white/50 mt-1">{projects[0].location}</p>
              </div>
              <ArrowUpRight className="absolute top-6 right-6 w-8 h-8 text-white/0 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
          </div>

          {/* Right stack */}
          <div className="col-span-12 lg:col-span-4 grid gap-4">
            {projects.slice(1, 3).map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setSelectedImage(project.image)}
                className={`group relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden cursor-pointer animate-on-scroll stagger-${i + 2}`}
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-black text-white mt-1">{project.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom row */}
          {projects.slice(3).map((project, i) => (
            <div key={project.title} className={`col-span-12 md:col-span-4 animate-on-scroll stagger-${i + 4}`}>
              <button
                type="button"
                onClick={() => setSelectedImage(project.image)}
                className="group relative aspect-[4/3] w-full overflow-hidden cursor-pointer"
              >
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="text-accent text-xs font-bold uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-xl font-black text-white mt-1">{project.title}</h3>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === 'Escape' && setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X className="h-10 w-10" />
          </button>
          <div className="relative max-w-6xl max-h-[85vh] w-full h-full">
            <Image src={selectedImage || "/placeholder.svg"} alt="Project detail" fill className="object-contain" />
          </div>
        </div>
      )}
    </section>
  )
}
