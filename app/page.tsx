import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HomeServices } from "@/components/home-services"
import { HomeWhy } from "@/components/home-why"
import { HomeServiceCards } from "@/components/home-service-cards"
import { HomeCTA } from "@/components/home-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <HomeServices />
      <HomeServiceCards />
      <HomeWhy />
      <HomeCTA />
      <Footer />
    </main>
  )
}
