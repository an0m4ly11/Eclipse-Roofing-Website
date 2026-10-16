"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { HomeStarsWidget } from "@/components/homestars-widget"
import { serviceAreas } from "@/lib/service-areas"

export function Footer() {
  return (
    <footer className="bg-[#0c1829] text-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-20 lg:py-24 grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex mb-8">
              <span className="flex items-center justify-center rounded-full bg-white p-1.5 shadow-md">
                <img 
                  src="/images/eclipse-logo-full.png" 
                  alt="Eclipse Roofing Ltd" 
                  className="h-16 w-auto rounded-full"
                />
              </span>
            </Link>
            <p className="text-white/40 leading-relaxed mb-8 max-w-sm">
              Premium commercial, residential, and industrial roofing services. Trusted by the Greater Toronto Area for over 20 years.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/eclipseroofing2007" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Facebook">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://twitter.com/EclipseRoofing2" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all" aria-label="X (Twitter)">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/eclipseroofingltd/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-white/20 transition-all" aria-label="Instagram">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/eclipse-homes", label: "Homes & Buildings" },
                { href: "/portfolio", label: "Portfolio" },
                  { href: "/faq", label: "FAQ" },
                  { href: "/blog", label: "Blog" },
                  { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { href: "/services/commercial", label: "Commercial & Industrial" },
                { href: "/services/residential", label: "Residential Roofing" },
                { href: "/services/flat-roofing", label: "Flat Roofing" },
                { href: "/services/shingle-roofing", label: "Shingle Roofing" },
                { href: "/services/siding", label: "Siding & Exterior" },
                  { href: "/services/eavestroughs", label: "Eavestroughs" },
                  { href: "/services/duradek", label: "Duradek" },
                  { href: "/services/emergency", label: "Emergency Services" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={service.href} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    {service.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-6">Contact</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-white/40 text-sm leading-relaxed">386 Bering Ave<br />Etobicoke, ON M8Z 3A9</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="tel:647-258-9434" className="text-white/40 hover:text-white transition-colors text-sm">
                  647-258-9434
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href="mailto:admin@eclipseroofing.ca" className="text-white/40 hover:text-white transition-colors text-sm">
                  admin@eclipseroofing.ca
                </a>
              </li>
            </ul>
          </div>
        </div>

        <nav aria-label="Service areas" className="border-t border-white/10 py-10">
          <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-5">
            <Link href="/service-areas" className="hover:text-accent transition-colors">Roofing across the GTA</Link>
          </h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className="text-white/40 hover:text-white transition-colors text-sm">
                  Roofing {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* HomeStars Reviews */}
        <div className="border-t border-white/10 py-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
          <div className="max-w-md text-center lg:text-left">
            <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-white mb-4">Award-Winning Service</h4>
            <p className="text-white/40 leading-relaxed">
              We&apos;re proud to be a HomeStars &ldquo;Best of&rdquo; winner. Read what our customers have to say and see why the Greater Toronto Area trusts Eclipse Roofing.
            </p>
          </div>
          <HomeStarsWidget />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-white/30">
            <p>&copy; {new Date().getFullYear()} Eclipse Roofing. All rights reserved.</p>
            <p>Premium Roofing Solutions for the Greater Toronto Area</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
