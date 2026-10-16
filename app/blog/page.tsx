import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { blogPosts } from "@/lib/blog-posts"

export const metadata: Metadata = {
  title: "Blog | Eclipse Roofing Ltd",
  description: "Roofing insights from Eclipse Roofing Ltd: commercial roof problems, TPO retrofits, maintenance tips and more.",
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-background pt-36 lg:pt-44 pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-end pb-14 lg:pb-20 border-b border-[#03133D]/10">
              <div className="lg:col-span-7">
                <span className="eyebrow text-[#D05100]">Eclipse Roofing Ltd. Blog</span>
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-semibold text-[#03133D] leading-[1.02] tracking-tight text-balance">
                  Insights from the roof.
                </h1>
              </div>
              <p className="lg:col-span-5 text-lg text-[#03133D]/65 leading-relaxed text-pretty">
                Practical advice for property owners and managers across Toronto and the GTA — from preventing leaks to
                choosing the right flat roof system.
              </p>
            </div>

            <ul className="grid md:grid-cols-2 gap-10 lg:gap-14 pt-14 lg:pt-20">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-6">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-card">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.imageAlt}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D05100]">{post.category}</span>
                      <h2 className="text-2xl lg:text-3xl font-semibold text-[#03133D] leading-tight text-balance group-hover:text-[#D05100] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[#03133D]/60 leading-relaxed text-pretty">{post.excerpt}</p>
                      <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#03133D]">
                        Read article
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
