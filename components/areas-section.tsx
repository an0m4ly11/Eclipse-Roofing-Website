"use client"

import { MapPin } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const areas = [
  "Etobicoke", "Toronto", "Old Toronto", "Downtown Toronto", "Midtown Toronto", "Don Mills",
  "Riverdale", "Leslieville", "Cabbagetown", "East York", "York", "Leaside",
  "North York", "Thornhill", "The Beach", "The Upper Beach", "Scarborough (South)",
  "Runnymede", "Roncesvalles", "Mimico", "Mississauga (South)", "Oakville (East)"
]

export function AreasSection() {
  const ref = useScrollAnimation()

  return (
    <section id="areas" className="py-32 lg:py-48 bg-card relative overflow-hidden" ref={ref}>
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[20vw] font-black text-white/[0.02] tracking-tighter">GTA</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase animate-on-scroll">Coverage</span>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mt-6 animate-on-scroll stagger-1">
              SERVICE<br />
              <span className="text-white/30">AREAS</span>
            </h2>
          </div>
          <p className="text-white/50 text-lg max-w-md leading-relaxed animate-on-scroll stagger-2">
            Contact us to see if we provide services in your area. We are expanding yearly and may have an estimator near you.
          </p>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-20">
          {areas.map((area, index) => (
            <div 
              key={area}
              className={`group flex items-center gap-3 p-4 border border-white/10 hover:border-accent hover:bg-accent/10 transition-all duration-300 cursor-default animate-on-scroll stagger-${Math.min((index % 6) + 1, 6)}`}
            >
              <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{area}</span>
            </div>
          ))}
        </div>

        {/* Office Card */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-secondary p-10 lg:p-14 animate-on-scroll">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-accent flex items-center justify-center">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-white/40 text-xs font-bold uppercase tracking-wider">Headquarters</div>
                <div className="text-2xl font-black text-white">Our Office</div>
              </div>
            </div>
            <p className="text-xl text-white/70 mb-6">386 Bering Ave, Etobicoke, ON M8Z 3A9</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="mailto:admin@eclipseroofing.ca" className="text-accent hover:text-accent/80 transition-colors font-semibold">
                admin@eclipseroofing.ca
              </a>
              <span className="hidden sm:inline text-white/20">|</span>
              <a href="tel:647-258-9434" className="text-accent hover:text-accent/80 transition-colors font-semibold">
                647-258-9434
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="aspect-video lg:aspect-auto overflow-hidden animate-on-scroll stagger-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.5841849893247!2d-79.51697492346045!3d43.62648705413461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b37131a3f6c8d%3A0x8c9c5c5c5c5c5c5c!2s386%20Bering%20Ave%2C%20Etobicoke%2C%20ON%20M8Z%203A9!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eclipse Roofing Location"
              className="min-h-[300px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
