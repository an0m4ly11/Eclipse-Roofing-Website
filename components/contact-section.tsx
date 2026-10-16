"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, CheckCircle2, ArrowUpRight } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const ref = useScrollAnimation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-32 lg:py-48 bg-background relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-secondary hidden lg:block" />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-0">
          {/* Left - Contact Info */}
          <div className="lg:pr-16 lg:py-8">
            <span className="text-accent font-bold tracking-[0.3em] text-xs uppercase animate-on-scroll">Contact</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mt-6 mb-8 animate-on-scroll stagger-1">
              LET&apos;S<br />
              <span className="text-white/30">TALK.</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-12 animate-on-scroll stagger-2">
              Ready to start your project? Fill out our form or contact us directly. We&apos;ll be in touch as soon as possible to book you an appointment.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5 animate-on-scroll stagger-2">
                <div className="w-14 h-14 bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Call Us</div>
                  <a href="tel:647-258-9434" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                    647-258-9434
                  </a>
                  <p className="text-white/40 text-sm mt-1">Toll Free: 1-888-946-6696</p>
                </div>
              </div>

              <div className="flex items-start gap-5 animate-on-scroll stagger-3">
                <div className="w-14 h-14 bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Email Us</div>
                  <a href="mailto:admin@eclipseroofing.ca" className="text-xl font-bold text-white hover:text-accent transition-colors break-all">
                    admin@eclipseroofing.ca
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 animate-on-scroll stagger-4">
                <div className="w-14 h-14 bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-1">Hours</div>
                  <p className="text-xl font-bold text-white">Mon - Fri: 8AM - 5PM</p>
                  <p className="text-white/40 text-sm mt-1">24/7 Emergency Services</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-12 pt-8 border-t border-white/10 animate-on-scroll stagger-5">
              <div className="text-white/40 text-xs font-bold uppercase tracking-wider mb-4">Follow Us</div>
              <div className="flex gap-3">
                <a href="https://facebook.com" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group" aria-label="Facebook">
                  <svg className="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://instagram.com" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all group" aria-label="Instagram">
                  <svg className="h-5 w-5 text-white/60 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:bg-background lg:p-12 lg:-my-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-on-scroll">
                <CheckCircle2 className="h-16 w-16 text-accent mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">Thank You!</h3>
                <p className="text-white/50 text-lg">We&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-on-scroll">
                  <h3 className="text-2xl font-black text-white mb-2">Book A Free Estimate</h3>
                  <p className="text-white/40 text-sm">Fill out the form and we&apos;ll contact you soon.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 animate-on-scroll stagger-1">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white/70 text-sm font-semibold">Name</Label>
                    <Input id="name" placeholder="John Smith" required className="bg-secondary border-white/10 text-white placeholder:text-white/30 h-12 focus:border-accent" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-white/70 text-sm font-semibold">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(416) 555-0123" required className="bg-secondary border-white/10 text-white placeholder:text-white/30 h-12 focus:border-accent" />
                  </div>
                </div>

                <div className="space-y-2 animate-on-scroll stagger-2">
                  <Label htmlFor="email" className="text-white/70 text-sm font-semibold">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-secondary border-white/10 text-white placeholder:text-white/30 h-12 focus:border-accent" />
                </div>

                <div className="space-y-2 animate-on-scroll stagger-3">
                  <Label htmlFor="address" className="text-white/70 text-sm font-semibold">Address</Label>
                  <Input id="address" placeholder="123 Main Street, Toronto, ON" required className="bg-secondary border-white/10 text-white placeholder:text-white/30 h-12 focus:border-accent" />
                </div>

                <div className="space-y-2 animate-on-scroll stagger-4">
                  <Label htmlFor="service" className="text-white/70 text-sm font-semibold">Service</Label>
                  <Select required>
                    <SelectTrigger className="bg-secondary border-white/10 text-white h-12">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      <SelectItem value="flat-commercial">Flat Roof: Commercial</SelectItem>
                      <SelectItem value="flat-residential">Flat Roof: Residential</SelectItem>
                      <SelectItem value="shingle">Shingle Roof</SelectItem>
                      <SelectItem value="skylight">Skylight</SelectItem>
                      <SelectItem value="siding">Siding & Trims</SelectItem>
                      <SelectItem value="eavestrough">Eavestrough & Metal Work</SelectItem>
                      <SelectItem value="emergency">Emergency Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2 animate-on-scroll stagger-5">
                  <Label htmlFor="message" className="text-white/70 text-sm font-semibold">Message</Label>
                  <Textarea id="message" placeholder="Describe your project..." rows={4} className="bg-secondary border-white/10 text-white placeholder:text-white/30 resize-none focus:border-accent" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 text-base group animate-on-scroll stagger-6">
                  Submit Request
                  <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
