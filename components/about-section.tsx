"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const ref = useScrollAnimation()

  return (
    <section id="about" className="py-32 lg:py-48 bg-background relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/50 -skew-x-12 translate-x-1/4" />
      
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Images */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 animate-on-scroll-left">
                <div className="aspect-[4/5] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-504307651254-35680f356dfd?w=800&q=80"
                    alt="Commercial flat roofing installation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-accent/20" />
                </div>
              </div>
              <div className="col-span-6 -mt-24 ml-auto animate-on-scroll-right stagger-2">
                <div className="aspect-[3/4] relative overflow-hidden border-4 border-background">
                  <Image
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                    alt="Residential roofing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-8 left-8 bg-accent p-6 animate-on-scroll-scale stagger-3">
              <div className="text-4xl font-black text-white">20+</div>
              <div className="text-white/80 text-sm font-semibold uppercase tracking-wider">Years</div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <div className="animate-on-scroll">
              <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1] tracking-tight mt-6 mb-8 animate-on-scroll stagger-1">
              BUILT ON<br />
              <span className="text-white/30">TRUST.</span>
            </h2>

            <div className="space-y-6 text-white/50 text-lg leading-relaxed">
              <p className="animate-on-scroll stagger-2">
                Eclipse Roofing is your go-to roofing company with one of the strongest reputations in Canada. Providing you with the roofing services you need for commercial, residential and industrial roofing.
              </p>
              <p className="animate-on-scroll stagger-3">
                We have been committing to completing our customers projects on time and on budget for over 20 years. With the most competitive prices and a guarantee on all projects, there is no better option for your roofing needs.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-12 border-t border-white/10">
              {[
                { label: "Licensed & Insured", value: "100%" },
                { label: "Project Warranty", value: "Full" },
                { label: "Response Time", value: "24h" },
                { label: "Free Estimates", value: "Always" },
              ].map((item, i) => (
                <div key={item.label} className={`animate-on-scroll stagger-${i + 2}`}>
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="text-white/40 text-sm font-semibold mt-1 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
