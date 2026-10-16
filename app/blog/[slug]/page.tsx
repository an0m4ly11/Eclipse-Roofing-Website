import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HomeCTA } from "@/components/home-cta"
import { blogPosts, getPost, type BlogBlock } from "@/lib/blog-posts"

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return { title: `${post.title} | Eclipse Roofing Ltd`, description: post.excerpt }
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-14 text-2xl lg:text-3xl font-semibold text-[#03133D] leading-tight text-balance">{block.text}</h2>
    case "h3":
      return <h3 className="mt-8 text-lg lg:text-xl font-semibold text-[#03133D]">{block.text}</h3>
    case "p":
      return <p className="mt-4 text-lg text-[#03133D]/70 leading-relaxed text-pretty">{block.text}</p>
    case "list":
      return (
        <ul className="mt-6 border-t border-[#03133D]/10">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-4 py-4 border-b border-[#03133D]/10">
              <span className="mt-0.5 flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-[#D05100]/10">
                <Check className="w-3.5 h-3.5 text-[#D05100]" />
              </span>
              <span className="text-[#03133D]/85 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )
    case "callout":
      return (
        <aside className="mt-14 rounded-md bg-[#03133D] p-8 lg:p-10 text-white">
          <span className="eyebrow text-[#D05100]">{block.title}</span>
          <p className="mt-5 text-lg text-white/75 leading-relaxed text-pretty">{block.text}</p>
        </aside>
      )
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const others = blogPosts.filter((p) => p.slug !== post.slug)

  return (
    <>
      <Header />
      <main>
        <article className="bg-background pt-36 lg:pt-44 pb-20 lg:pb-28">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#03133D]/60 hover:text-[#03133D] transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              All articles
            </Link>
            <div className="max-w-4xl">
              <span className="eyebrow text-[#D05100]">{post.category}</span>
              <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-[#03133D] leading-[1.04] tracking-tight text-balance">
                {post.title}
              </h1>
              <p className="mt-6 text-xl text-[#03133D]/60 leading-relaxed text-pretty">{post.excerpt}</p>
            </div>
            <div className="relative mt-12 aspect-[16/9] lg:aspect-[21/8] overflow-hidden rounded-md">
              <img src={post.image || "/placeholder.svg"} alt={post.imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mt-6">
              <div className="lg:col-span-8">
                {post.body.map((block, i) => (
                  <Block key={i} block={block} />
                ))}
              </div>
              <aside className="lg:col-span-4 lg:pt-14">
                <div className="lg:sticky lg:top-32 flex flex-col gap-6 border-t border-[#03133D]/10 pt-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#03133D]/50">Talk to a specialist</p>
                  <p className="text-[#03133D]/70 leading-relaxed">
                    Fully insured, professional roofing specialists serving the GTA.
                  </p>
                  <a href="tel:+16472589434" className="text-2xl font-semibold text-[#03133D] hover:text-[#D05100] transition-colors">
                    647-258-9434
                  </a>
                  <a href="mailto:admin@eclipseroofing.ca" className="text-[#03133D]/70 hover:text-[#D05100] transition-colors">
                    admin@eclipseroofing.ca
                  </a>
                  {others.length > 0 && (
                    <div className="mt-6 border-t border-[#03133D]/10 pt-6 flex flex-col gap-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#03133D]/50">More articles</p>
                      {others.map((p) => (
                        <Link key={p.slug} href={`/blog/${p.slug}`} className="font-semibold text-[#03133D] hover:text-[#D05100] transition-colors">
                          {p.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </article>
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
