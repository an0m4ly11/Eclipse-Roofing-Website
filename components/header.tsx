"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    label: "Services", 
    href: "/services",
    megaMenu: {
      residential: {
        title: "Residential",
        href: "/services/residential",
        services: [
          { href: "/services/shingle-roofing", label: "Shingle Roofing" },
          { href: "/services/siding", label: "Siding & Exterior" },
          { href: "/services/skylights", label: "Skylights" },
          { href: "/services/eavestroughs", label: "Eavestroughs" },
          { href: "/services/duradek", label: "Duradek" },
          { href: "/services/emergency", label: "Emergency Services" },
        ]
      },
      commercial: {
        title: "Commercial & Industrial",
        href: "/services/commercial",
        services: [
          { href: "/services/flat-roofing", label: "Flat Roofing" },
          { href: "/services/cool-roofs", label: "Cool Roofs" },
          { href: "/services/industrial-flat-roofing", label: "Industrial Flat Roofing" },
          { href: "/services/condo-flat-roofing", label: "Condo Flat Roofing" },
        ]
      }
    }
  },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/eclipse-homes", label: "Homes & Buildings" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  const isTransparent = isHomePage && !scrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-500 ${scrolled ? "shadow-[0_8px_30px_-12px_rgba(3,19,61,0.18)]" : "border-b border-[#03133D]/5"}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`flex items-center justify-between h-24 transition-all duration-500 ${scrolled ? "lg:h-20" : "lg:h-28"}`}>
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/eclipse-logo-full.png" 
              alt="Eclipse Roofing Ltd" 
              className={`w-auto h-20 transition-all duration-500 ${scrolled ? "lg:h-16" : "lg:h-24"}`}
            />
          </Link>

          {/* Center Nav - Desktop */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div 
                key={link.label}
                className="relative"
                onMouseEnter={() => link.megaMenu && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className={`relative flex items-center gap-1.5 px-4 xl:px-5 py-2 text-sm font-medium transition-colors after:absolute after:left-4 after:right-4 xl:after:left-5 xl:after:right-5 after:-bottom-0.5 after:h-px after:bg-accent after:origin-left after:transition-transform after:duration-300 ${
                    pathname === link.href 
                      ? "text-[#03133D] after:scale-x-100"
                      : "text-[#03133D]/70 hover:text-[#03133D] after:scale-x-0 hover:after:scale-x-100"
                  }`}
                >
                  {link.label}
                  {link.megaMenu && (
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                
                {link.megaMenu && (
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 ${
                    activeDropdown === link.label 
                      ? "opacity-100 translate-y-0 pointer-events-auto" 
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}>
                    <div className="grid grid-cols-2 gap-0 min-w-[440px] bg-[#03133D] border border-white/10 overflow-hidden rounded-md shadow-2xl">
                      {/* Residential Column */}
                      <div className="border-r border-white/10">
                        <Link
                          href={link.megaMenu.residential.href}
                          className={`block px-5 py-4 text-[13px] font-bold uppercase tracking-wider border-b border-white/10 transition-colors ${
                            pathname === link.megaMenu.residential.href 
                              ? "bg-accent text-white" 
                              : "text-white hover:bg-accent hover:text-white"
                          }`}
                        >
                          {link.megaMenu.residential.title}
                        </Link>
                        <div className="py-2">
                          {link.megaMenu.residential.services.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-5 py-2.5 text-[12px] transition-colors ${
                                pathname === item.href 
                                  ? "text-accent" 
                                  : "text-white/50 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Commercial Column */}
                      <div>
                        <Link
                          href={link.megaMenu.commercial.href}
                          className={`block px-5 py-4 text-[13px] font-bold uppercase tracking-wider border-b border-white/10 transition-colors ${
                            pathname === link.megaMenu.commercial.href 
                              ? "bg-accent text-white" 
                              : "text-white hover:bg-accent hover:text-white"
                          }`}
                        >
                          {link.megaMenu.commercial.title}
                        </Link>
                        <div className="py-2">
                          {link.megaMenu.commercial.services.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={`block px-5 py-2.5 text-[12px] transition-colors ${
                                pathname === item.href 
                                  ? "text-accent" 
                                  : "text-white/50 hover:text-white hover:bg-white/5"
                              }`}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="h-12 px-7 rounded-sm text-sm font-semibold tracking-wide bg-[#03133D] hover:bg-accent text-white border-0 transition-colors"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-[#0c1829]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-24 bg-[#03133D] transition-all duration-300 overflow-y-auto ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <nav className="flex flex-col px-6 py-4 pb-24">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.megaMenu ? (
                <div>
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                    className="flex items-center justify-between w-full text-base uppercase tracking-wider text-white py-3 border-b border-white/10"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeDropdown === link.label ? 'max-h-[400px]' : 'max-h-0'}`}>
                    {/* Residential Section */}
                    <Link
                      href={link.megaMenu.residential.href}
                      className="block text-white font-semibold py-2 pl-4 mt-1 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.megaMenu.residential.title}
                    </Link>
                    {link.megaMenu.residential.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/50 py-1.5 pl-8 text-xs"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {/* Commercial Section */}
                    <Link
                      href={link.megaMenu.commercial.href}
                      className="block text-white font-semibold py-2 pl-4 mt-1 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.megaMenu.commercial.title}
                    </Link>
                    {link.megaMenu.commercial.services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-white/50 py-1.5 pl-8 text-xs"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className="block text-base uppercase tracking-wider text-white py-3 border-b border-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Button asChild className="mt-6 h-12 text-sm uppercase tracking-wider bg-accent hover:bg-accent/90">
            <Link href="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
