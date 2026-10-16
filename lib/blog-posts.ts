export type BlogBlock =
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  image: string
  imageAlt: string
  body: BlogBlock[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "common-commercial-roof-problems",
    title: "Common Commercial Roof Problems",
    excerpt:
      "From ponding water to leaks around rooftop penetrations, here are the issues we see most on commercial and industrial roofs across the GTA — and how to prevent them.",
    category: "Commercial",
    image: "/images/portfolio/commercial-epdm-system-3.jpg",
    imageAlt: "Commercial flat roof with rooftop equipment",
    body: [
      { type: "h2", text: "Commercial roofs need specialists" },
      {
        type: "p",
        text: "Commercial and industrial buildings depend on strong, reliable roofing systems every day. From warehouses and retail plazas to manufacturing facilities and office buildings, commercial roofs face constant exposure to weather, rooftop traffic, drainage challenges and heavy equipment.",
      },
      { type: "p", text: "Owning a building is hard enough. Your roof should not become another problem." },
      {
        type: "p",
        text: "Commercial roofing systems require experienced specialists who understand flat roofs, waterproofing systems, drainage design, insulation performance and long-term building protection. For property owners in Toronto, Etobicoke, Mississauga, Oakville, Scarborough and across the GTA, working with a trusted commercial roofing company can help prevent costly repairs, reduce business interruptions and improve long-term building performance.",
      },
      { type: "h2", text: "Common commercial roofing problems" },
      { type: "h3", text: "Ponding water and drainage concerns" },
      {
        type: "p",
        text: "Flat roofing systems can develop standing water if drains or slopes are compromised. Over time, trapped moisture can damage roofing membranes and insulation layers.",
      },
      { type: "h3", text: "Roof leaks around penetrations" },
      {
        type: "p",
        text: "Commercial roofs often contain HVAC units, vents, skylights and piping penetrations. These areas are common sources of leaks if flashing and waterproofing are not properly maintained.",
      },
      { type: "h3", text: "Aging roofing systems" },
      {
        type: "p",
        text: "As roofing materials age, seams, flashing and membranes can weaken from years of sun exposure, freeze-thaw cycles and changing temperatures across the GTA.",
      },
      { type: "h2", text: "Why commercial roofing specialists matter" },
      {
        type: "p",
        text: "Commercial roofing projects require specialized knowledge, proper safety procedures and high-quality materials designed for large-scale buildings. Professional commercial roofing contractors help property owners:",
      },
      {
        type: "list",
        items: [
          "Extend roof lifespan",
          "Reduce emergency repair costs",
          "Improve building protection",
          "Prevent interior water damage",
          "Protect insulation performance and energy efficiency",
          "Minimize disruptions to tenants and operations",
        ],
      },
      {
        type: "p",
        text: "Experienced roofing specialists also understand how roofing systems interact with rooftop mechanical equipment and drainage systems, helping avoid long-term structural issues.",
      },
      { type: "h2", text: "Preventative tips for property owners" },
      { type: "h3", text: "Schedule routine roof inspections" },
      {
        type: "p",
        text: "Regular inspections help identify weak areas, drainage concerns and early membrane damage before larger issues develop.",
      },
      { type: "h3", text: "Repair small problems early" },
      {
        type: "p",
        text: "Minor cracks, seam separation or flashing damage can quickly turn into major leaks if left untreated.",
      },
      { type: "h3", text: "Keep roof drains clear" },
      { type: "p", text: "Blocked drains can lead to standing water and unnecessary stress on commercial roofing systems." },
      {
        type: "callout",
        title: "Strong roofs start with smart maintenance",
        text: "Did you know that many commercial roof failures begin from small areas around rooftop penetrations and drainage systems? Regular maintenance and inspections can significantly reduce the risk of major interior water damage and expensive emergency repairs.",
      },
      {
        type: "p",
        text: "Eclipse Roofing Ltd. provides professional commercial roofing, industrial roofing, flat roof repairs, inspections, maintenance and full roof replacement services throughout Toronto, Etobicoke, Mississauga, Oakville, Scarborough and the GTA. Whether you own a warehouse, retail plaza, office building or industrial facility, our team delivers dependable roofing solutions built for long-term performance.",
      },
    ],
  },
  {
    slug: "signs-you-need-a-retro-fit-tpo",
    title: "Signs You Need a Retro-Fit: TPO",
    excerpt:
      "Why TPO has become one of the most popular flat roof systems in Toronto and the GTA, where it works best, and how to keep it performing.",
    category: "Flat Roofing",
    image: "/images/portfolio/commercial-epdm-system-5.jpg",
    imageAlt: "Single-ply flat roof membrane on a commercial building",
    body: [
      { type: "h2", text: "Why TPO roofing is popular for flat roofs in Toronto and the GTA" },
      {
        type: "p",
        text: "Flat roofing systems are widely used on commercial and industrial buildings across Toronto, Etobicoke, Mississauga, Oakville, Scarborough and the GTA. One of the most popular roofing systems today is TPO roofing.",
      },
      {
        type: "p",
        text: "TPO stands for thermoplastic polyolefin. It is a durable single-ply roofing membrane designed for flat and low-slope roofs. Property owners choose TPO because it offers excellent waterproofing performance, energy efficiency and long-term durability.",
      },
      {
        type: "p",
        text: "With changing weather conditions across Ontario — including heavy rain, snow, ice and extreme summer heat — commercial property owners need roofing systems that can handle demanding conditions while helping improve building efficiency.",
      },
      { type: "h2", text: "Why property owners choose TPO roofing" },
      { type: "h3", text: "Energy-efficient roofing system" },
      {
        type: "p",
        text: "One of the biggest advantages of TPO roofing is its reflective surface. The bright membrane reflects sunlight and heat away from the building instead of absorbing it. Benefits include:",
      },
      {
        type: "list",
        items: [
          "Lower cooling costs during summer",
          "Improved energy efficiency",
          "Reduced strain on rooftop HVAC systems",
          "More comfortable indoor temperatures",
        ],
      },
      {
        type: "p",
        text: "For commercial and industrial buildings in Toronto and the GTA, energy savings can make a major difference over time.",
      },
      { type: "h3", text: "Strong and durable seams" },
      {
        type: "p",
        text: "TPO membranes are heat-welded together to create strong, watertight seams. This helps protect flat roofs from leaks, moisture penetration and weather-related damage. Flat roofs are exposed to standing water, freeze-thaw cycles and heavy storms throughout the year — durable welded seams help improve long-term performance and reliability.",
      },
      { type: "h3", text: "Excellent for large commercial roofs" },
      {
        type: "p",
        text: "TPO roofing is lightweight, flexible and efficient to install, making it an excellent choice for large commercial and industrial projects. Common applications include:",
      },
      {
        type: "list",
        items: [
          "Warehouses",
          "Commercial plazas",
          "Industrial facilities",
          "Office buildings",
          "Manufacturing plants",
          "Institutional buildings",
        ],
      },
      {
        type: "p",
        text: "Many commercial property owners across Etobicoke, Toronto, Oakville and Mississauga choose TPO roofing because it offers strong performance with long-term value.",
      },
      { type: "h2", text: "Preventative maintenance tips" },
      {
        type: "p",
        text: "Even high-quality roofing systems require regular maintenance to maximize lifespan. Helpful preventative maintenance tips include:",
      },
      {
        type: "list",
        items: [
          "Schedule professional roof inspections twice per year",
          "Keep drains and rooftop areas clear of debris",
          "Check flashing and seams after storms",
          "Address ponding water early",
          "Repair small issues before they become major leaks",
        ],
      },
      {
        type: "p",
        text: "Routine flat roof maintenance can help prevent expensive interior water damage and emergency repairs.",
      },
      {
        type: "callout",
        title: "Interesting fact",
        text: "TPO roofing has become one of the fastest-growing commercial roofing systems in North America because of its energy-efficient reflective surface and strong weather resistance. Many modern commercial buildings now use TPO systems to help improve building performance and reduce operating costs.",
      },
      {
        type: "p",
        text: "Whether you need roof repairs, preventative maintenance, inspections or a complete flat roof replacement, Eclipse Roofing Ltd. delivers dependable workmanship and long-lasting results across Toronto, Etobicoke, Mississauga, Oakville, Scarborough and the GTA.",
      },
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
