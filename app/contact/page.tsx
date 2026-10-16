"use client"

import React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, MapPin, CheckCircle2, ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const areas = [
  "Toronto", "North York", "Etobicoke", "Scarborough", "Mississauga", "Brampton",
  "Vaughan", "Richmond Hill", "Markham", "Oakville", "Burlington", "Hamilton",
  "Milton", "Ajax", "Pickering", "Whitby", "Oshawa", "Newmarket", "Aurora"
]

const serviceLabels: Record<string, string> = {
  "flat-commercial": "Flat Roof: Commercial",
  "flat-residential": "Flat Roof: Residential",
  shingle: "Shingle Roof",
  repair: "Roof Repair",
  skylight: "Skylight Installation",
  siding: "Siding & Trims",
  eavestrough: "Eavestrough & Gutters",
  emergency: "Emergency Services",
  other: "Other",
}

const propertyLabels: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    service: "",
    property: "",
    message: "",
  })
  const ref = useScrollAnimation()

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = `Quote Request${form.service ? ` - ${serviceLabels[form.service]}` : ""} from ${form.name}`
    const body = [
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Property Address: ${form.address}`,
      `Service Needed: ${serviceLabels[form.service] ?? ""}`,
      `Property Type: ${propertyLabels[form.property] ?? ""}`,
      "",
      "Project Details:",
      form.message || "(none provided)",
    ].join("\n")

    window.location.href = `mailto:admin@eclipseroofing.ca?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 8000)
  }

  return (
    <>
      <Header />
      <main ref={ref}>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-2xl animate-on-scroll">
              <span className="inline-block px-3 py-1 bg-muted rounded-full text-foreground/60 text-xs font-medium mb-6">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Let&apos;s Discuss<br />Your Project
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to start your project? Fill out our form or contact us directly. We&apos;ll be in touch as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="pb-16 bg-background">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-4">
              <a href="tel:+16472589434" className="bg-card rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-on-scroll">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-muted-foreground text-sm mb-1">Call Us</div>
                <div className="text-foreground font-semibold text-lg">647-258-9434</div>
              </a>
              <a href="mailto:admin@eclipseroofing.ca" className="bg-card rounded-2xl p-6 hover:shadow-lg transition-shadow group animate-on-scroll stagger-1">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-muted-foreground text-sm mb-1">Email Us</div>
                <div className="text-foreground font-semibold text-lg">admin@eclipseroofing.ca</div>
              </a>
              <div className="bg-card rounded-2xl p-6 animate-on-scroll stagger-2">
                <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="text-muted-foreground text-sm mb-1">Hours</div>
                  <div className="text-foreground font-semibold text-lg">Mon-Fri 8AM-5PM</div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 lg:py-32 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <div className="bg-background rounded-3xl p-8 lg:p-10">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 animate-on-scroll">
                    <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
                    <h3 className="text-3xl font-bold text-foreground mb-4">Almost There!</h3>
                    <p className="text-muted-foreground max-w-md">Your email app should have opened with your details filled in. Just press send and we&apos;ll get back to you shortly. If nothing opened, email us directly at admin@eclipseroofing.ca.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="animate-on-scroll">
                      <h2 className="text-2xl font-bold text-foreground mb-2">Request a Free Quote</h2>
                      <p className="text-muted-foreground text-sm">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 animate-on-scroll stagger-1">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-foreground text-sm font-medium">Full Name *</Label>
                        <Input id="name" placeholder="John Smith" required className="h-12 rounded-xl" value={form.name} onChange={(e) => updateField("name", e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-foreground text-sm font-medium">Phone Number *</Label>
                        <Input id="phone" type="tel" placeholder="(416) 555-0123" required className="h-12 rounded-xl" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} />
                      </div>
                    </div>

                    <div className="space-y-2 animate-on-scroll stagger-2">
                      <Label htmlFor="email" className="text-foreground text-sm font-medium">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="h-12 rounded-xl" value={form.email} onChange={(e) => updateField("email", e.target.value)} />
                    </div>

                    <div className="space-y-2 animate-on-scroll stagger-3">
                      <Label htmlFor="address" className="text-foreground text-sm font-medium">Property Address *</Label>
                      <Input id="address" placeholder="123 Main Street, Toronto, ON" required className="h-12 rounded-xl" value={form.address} onChange={(e) => updateField("address", e.target.value)} />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 animate-on-scroll stagger-4">
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-foreground text-sm font-medium">Service Needed *</Label>
                        <Select required value={form.service} onValueChange={(value) => updateField("service", value)}>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="flat-commercial">Flat Roof: Commercial</SelectItem>
                            <SelectItem value="flat-residential">Flat Roof: Residential</SelectItem>
                            <SelectItem value="shingle">Shingle Roof</SelectItem>
                            <SelectItem value="repair">Roof Repair</SelectItem>
                            <SelectItem value="skylight">Skylight Installation</SelectItem>
                            <SelectItem value="siding">Siding & Trims</SelectItem>
                            <SelectItem value="eavestrough">Eavestrough & Gutters</SelectItem>
                            <SelectItem value="emergency">Emergency Services</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="property" className="text-foreground text-sm font-medium">Property Type *</Label>
                        <Select required value={form.property} onValueChange={(value) => updateField("property", value)}>
                          <SelectTrigger className="h-12 rounded-xl">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="industrial">Industrial</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2 animate-on-scroll stagger-5">
                      <Label htmlFor="message" className="text-foreground text-sm font-medium">Project Details</Label>
                      <Textarea id="message" placeholder="Tell us about your project..." rows={4} className="resize-none rounded-xl" value={form.message} onChange={(e) => updateField("message", e.target.value)} />
                    </div>

                    <Button type="submit" size="lg" className="w-full rounded-full font-semibold h-14 animate-on-scroll stagger-6">
                      Submit Request
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                )}
              </div>

              {/* Side Info */}
              <div className="space-y-8">
                {/* Emergency Card */}
                <div className="bg-primary rounded-3xl p-8 animate-on-scroll">
                  <h3 className="text-xl font-bold text-primary-foreground mb-3">24/7 Emergency Service</h3>
                  <p className="text-primary-foreground/70 mb-6">
                    Experiencing a roof emergency due to storm damage, leaks, or other urgent issues? We&apos;re here to help around the clock.
                  </p>
                  <Button asChild variant="secondary" className="rounded-full font-semibold">
                    <a href="tel:+16472589434">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Emergency Line
                    </a>
                  </Button>
                </div>

                {/* Service Areas */}
                <div className="bg-background rounded-3xl p-8 animate-on-scroll stagger-1">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-foreground" />
                    <h3 className="text-xl font-bold text-foreground">Service Areas</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    We proudly serve the Greater Toronto Area and surrounding regions:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {areas.map((area) => (
                      <span key={area} className="bg-muted px-3 py-1.5 rounded-full text-sm text-foreground/70">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Office Address */}
                <div className="bg-background rounded-3xl p-8 animate-on-scroll stagger-2">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-foreground" />
                    <h3 className="text-xl font-bold text-foreground">Our Office</h3>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=386+Bering+Ave+Etobicoke+ON+M8Z+3A9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    386 Bering Ave, Etobicoke, ON M8Z 3A9
                  </a>
                </div>

                {/* Toll Free */}
                <div className="bg-background rounded-3xl p-8 animate-on-scroll stagger-3">
                  <h3 className="text-lg font-bold text-foreground mb-2">Toll Free Number</h3>
                  <a href="tel:+18889466696" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
                    1-888-946-6696
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">Available for customers outside the GTA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-foreground animate-on-scroll">Serving the Greater Toronto Area</h2>
            </div>
            <div className="aspect-[21/9] w-full rounded-3xl overflow-hidden animate-on-scroll stagger-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d369356.84498828977!2d-79.72855359999999!3d43.7181557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON%2C%20Canada!5e0!3m2!1sen!2sus!4v1690000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Eclipse Roofing Service Area"
              />
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap items-center justify-center gap-8 text-center">
              <Link href="/services" className="group">
                <span className="text-muted-foreground text-xs font-medium block mb-1">Explore</span>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors">Our Services</span>
              </Link>
              <span className="text-border hidden md:inline">|</span>
              <Link href="/portfolio" className="group">
                <span className="text-muted-foreground text-xs font-medium block mb-1">Browse</span>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors">Our Portfolio</span>
              </Link>
              <span className="text-border hidden md:inline">|</span>
              <Link href="/about" className="group">
                <span className="text-muted-foreground text-xs font-medium block mb-1">Learn</span>
                <span className="text-foreground font-semibold group-hover:text-primary transition-colors">About Us</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
