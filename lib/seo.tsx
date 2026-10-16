import { serviceAreas } from "@/lib/service-areas"

export const siteUrl = "https://eclipseroofing.ca"

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": `${siteUrl}/#business`,
  name: "Eclipse Roofing Ltd",
  url: siteUrl,
  logo: `${siteUrl}/images/eclipse-logo-full.png`,
  image: `${siteUrl}/images/hero-roofing.jpg`,
  telephone: "+1-647-258-9434",
  email: "admin@eclipseroofing.ca",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "386 Bering Ave",
    addressLocality: "Etobicoke",
    addressRegion: "ON",
    postalCode: "M8Z 3A9",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ...serviceAreas.map((area) => ({ "@type": "City", name: area.name })),
  ],
  sameAs: [
    "https://www.facebook.com/eclipseroofing2007",
    "https://twitter.com/EclipseRoofing2",
    "https://www.instagram.com/eclipseroofingltd/",
  ],
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
