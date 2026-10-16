export type ServiceArea = {
  slug: string
  name: string
  region: string
  headline: string
  intro: string
  local: string
  neighbourhoods: string[]
  focus: string[]
  image: string
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    headline: "Roofing contractor in Toronto.",
    intro:
      "Eclipse Roofing Ltd has been replacing, repairing and maintaining roofs across Toronto for close to two decades — from century homes downtown to low-slope commercial and condo roofs.",
    local:
      "Toronto's mix of older detached homes, semis, row houses, mid-rise condos and commercial plazas means no two roofs are the same. We handle steep-slope shingle roofs, flat and low-slope membranes, and the City of Toronto Eco-Roof cool roof rebate application for eligible buildings.",
    neighbourhoods: ["Downtown", "The Annex", "Leslieville", "High Park", "The Junction", "Midtown", "Danforth", "Liberty Village"],
    focus: ["Shingle roof replacement", "Flat & low-slope roofing", "Cool roofs & Eco-Roof rebate", "Condo & commercial roofing", "Eavestroughs & siding", "Emergency roof repair"],
    image: "/images/hero-roofing.jpg",
  },
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "West Toronto",
    headline: "Roofing contractor in Etobicoke.",
    intro:
      "Our office is at 386 Bering Ave in Etobicoke, so this is home turf. We serve homeowners, property managers and business owners right across the west end.",
    local:
      "Etobicoke has a large stock of post-war bungalows and split-levels alongside industrial buildings near the Queensway and Kipling corridors. We replace residential shingle roofs and install commercial flat roof systems built for large, low-slope spans.",
    neighbourhoods: ["Mimico", "New Toronto", "Long Branch", "Islington", "The Kingsway", "Markland Wood", "Rexdale", "Humber Bay"],
    focus: ["Residential shingle roofing", "Industrial flat roofing", "Commercial roof maintenance", "Skylights", "Eavestroughs & Leafguard", "Emergency roof repair"],
    image: "/images/residential-roofing-hero.jpg",
  },
  {
    slug: "north-york",
    name: "North York",
    region: "North Toronto",
    headline: "Roofing contractor in North York.",
    intro:
      "From family homes in Willowdale to commercial buildings along Yonge and the 401 corridor, Eclipse Roofing delivers residential and commercial roofing throughout North York.",
    local:
      "North York's housing ranges from 1950s bungalows to large custom homes, with plenty of low-rise apartments and office buildings. We regularly handle full tear-offs, flat roof replacements and ongoing maintenance programs for property managers.",
    neighbourhoods: ["Willowdale", "Don Mills", "Bayview Village", "York Mills", "Downsview", "Lawrence Park", "Bathurst Manor", "Newtonbrook"],
    focus: ["Shingle roof replacement", "Flat roofing", "Condo flat roofing", "Commercial roof inspections", "Siding & exterior", "Skylights"],
    image: "/images/featured-shingle.png",
  },
  {
    slug: "york",
    name: "York",
    region: "Central-West Toronto",
    headline: "Commercial & residential roofing in York.",
    intro:
      "If you need to update the roof on a property in York, you should have an experienced roofer do the work. Whether you're a property manager, owner or homeowner, you'll be pleased with the results.",
    local:
      "York's older housing and its commercial and light-industrial buildings along Eglinton West and Weston Road call for roofers who know both shingles and flat roof systems. Most of our new clients here come from referrals — they don't need to come back, because we deliver great quality the first time.",
    neighbourhoods: ["Weston", "Mount Dennis", "Oakwood Village", "Fairbank", "Caledonia", "Silverthorn", "Keelesdale", "Humewood"],
    focus: ["Commercial flat roof installation", "Industrial flat roofing", "Residential shingle roofing", "Roof repairs", "Eavestroughs", "Emergency roof repair"],
    image: "/images/portfolio/commercial-epdm-system-1.jpg",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "East Toronto",
    headline: "Roofing contractor in Scarborough.",
    intro:
      "Eclipse Roofing provides shingle and flat roof installation, repair and maintenance for homes, plazas and industrial properties across Scarborough.",
    local:
      "Scarborough has thousands of mid-century bungalows and back-splits now due for full roof replacements, plus large commercial and industrial areas with low-slope roofs. We work on both, with clear, itemised proposals.",
    neighbourhoods: ["Agincourt", "Malvern", "Scarborough Village", "Guildwood", "Highland Creek", "Birch Cliff", "Wexford", "Cliffside"],
    focus: ["Shingle roof replacement", "Commercial flat roofing", "Industrial roofing", "Eavestroughs & downspouts", "Siding", "Emergency roof repair"],
    image: "/images/featured-flat-roof.jpg",
  },
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    headline: "Roofing contractor in Mississauga.",
    intro:
      "Just west of our Etobicoke office, Mississauga is one of our busiest service areas for both residential re-roofs and commercial flat roofing.",
    local:
      "Mississauga's subdivisions from the 1970s through the 2000s are reaching the end of their original shingle roofs, and its industrial parks near Pearson are full of large flat roofs. We handle replacements, retro-fits and preventative maintenance.",
    neighbourhoods: ["Port Credit", "Streetsville", "Erin Mills", "Meadowvale", "Cooksville", "Clarkson", "Lorne Park", "Malton"],
    focus: ["Residential re-roofing", "Industrial flat roofing", "TPO retro-fits", "Roof inspections", "Eavestroughs", "Skylights"],
    image: "/images/portfolio/commercial-epdm-system-2.jpg",
  },
  {
    slug: "brampton",
    name: "Brampton",
    region: "Peel Region",
    headline: "Roofing contractor in Brampton.",
    intro:
      "Eclipse Roofing replaces and repairs roofs for Brampton homeowners and maintains flat roofs on the city's commercial and industrial buildings.",
    local:
      "Brampton's fast-growing neighbourhoods have many homes built in the 1990s and 2000s that now need new shingles, and its warehouses and distribution centres rely on well-maintained low-slope roofs.",
    neighbourhoods: ["Bramalea", "Springdale", "Heart Lake", "Mount Pleasant", "Castlemore", "Fletcher's Meadow", "Downtown Brampton", "Sandringham"],
    focus: ["Shingle roof replacement", "Warehouse flat roofing", "Commercial roof maintenance", "Eavestroughs & Leafguard", "Siding", "Emergency roof repair"],
    image: "/images/residential-roofing-hero.jpg",
  },
  {
    slug: "vaughan",
    name: "Vaughan",
    region: "York Region",
    headline: "Roofing contractor in Vaughan.",
    intro:
      "From custom homes in Kleinburg to industrial buildings in Concord, Eclipse Roofing serves residential and commercial clients throughout Vaughan.",
    local:
      "Vaughan combines large detached homes with complex rooflines and one of the GTA's biggest industrial zones. We install premium architectural shingles and commercial flat roof systems, and offer inspections with photo reports for property managers.",
    neighbourhoods: ["Woodbridge", "Maple", "Concord", "Thornhill", "Kleinburg", "Vellore Village", "Sonoma Heights", "Patterson"],
    focus: ["Architectural shingles", "Industrial flat roofing", "Annual roof inspections", "Skylights", "Siding & exterior", "Eavestroughs"],
    image: "/images/portfolio/commercial-epdm-system-3.jpg",
  },
  {
    slug: "markham",
    name: "Markham",
    region: "York Region",
    headline: "Roofing contractor in Markham.",
    intro:
      "Eclipse Roofing brings the same quality, transparent proposals and certified installation to homes and commercial properties in Markham.",
    local:
      "Markham's mix of established neighbourhoods, newer subdivisions and tech-sector office parks means steady demand for both shingle replacements and commercial flat roof work.",
    neighbourhoods: ["Unionville", "Markham Village", "Cornell", "Berczy Village", "Milliken", "Cathedraltown", "Greensborough", "Thornhill"],
    focus: ["Shingle roof replacement", "Commercial flat roofing", "Condo flat roofing", "Skylights", "Eavestroughs", "Emergency roof repair"],
    image: "/images/featured-shingle.png",
  },
  {
    slug: "richmond-hill",
    name: "Richmond Hill",
    region: "York Region",
    headline: "Roofing contractor in Richmond Hill.",
    intro:
      "Eclipse Roofing installs and repairs roofs for homeowners, condo boards and commercial property owners across Richmond Hill.",
    local:
      "Richmond Hill has many large two-storey homes with steep, multi-plane roofs and a growing number of condo and mid-rise buildings along Yonge Street — both are areas where experienced installation makes a real difference.",
    neighbourhoods: ["Oak Ridges", "Mill Pond", "Bayview Hill", "Jefferson", "Richvale", "Langstaff", "Westbrook", "Elgin Mills"],
    focus: ["Steep-slope shingle roofing", "Condo flat roofing", "Roof repairs", "Skylights", "Siding", "Eavestroughs"],
    image: "/images/hero-roofing.jpg",
  },
  {
    slug: "oakville",
    name: "Oakville",
    region: "Halton Region",
    headline: "Roofing contractor in Oakville.",
    intro:
      "Eclipse Roofing serves Oakville homeowners and commercial property owners with premium roofing, skylights, eavestroughs and siding.",
    local:
      "Oakville's lakeside and older neighbourhoods include many high-value homes where material choice and detailing matter. We install certified shingle systems with extended manufacturer warranties, plus flat roofing for commercial buildings.",
    neighbourhoods: ["Old Oakville", "Bronte", "Glen Abbey", "River Oaks", "Joshua Creek", "Clearview", "West Oak Trails", "Falgarwood"],
    focus: ["Premium shingle roofing", "Extended-warranty installs", "Commercial flat roofing", "Skylights", "Eavestroughs", "Duradek"],
    image: "/images/residential-roofing-hero.jpg",
  },
]

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug)
}
