import type { MetadataRoute } from "next"
import { serviceAreas } from "@/lib/service-areas"
import { blogPosts } from "@/lib/blog-posts"
import { siteUrl } from "@/lib/seo"

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/services/residential",
  "/services/commercial",
  "/services/flat-roofing",
  "/services/shingle-roofing",
  "/services/cool-roofs",
  "/services/industrial-flat-roofing",
  "/services/condo-flat-roofing",
  "/services/siding",
  "/services/skylights",
  "/services/eavestroughs",
  "/services/duradek",
  "/services/emergency",
  "/service-areas",
  "/eclipse-homes",
  "/portfolio",
  "/faq",
  "/blog",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : route.startsWith("/services") ? 0.8 : 0.6,
    })),
    ...serviceAreas.map((area) => ({
      url: `${siteUrl}/service-areas/${area.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...blogPosts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ]
}
