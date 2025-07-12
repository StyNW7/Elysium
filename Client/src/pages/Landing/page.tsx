import { HeroSection } from "@/components/landing/hero-section"
import { AboutSection } from "@/components/landing/about-section"
import { WhyElysiumSection } from "@/components/landing/why-elynsium-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { MarqueeSection } from "@/components/landing/marquee-section"
import { OverviewSection } from "@/components/landing/overview-section"
import { DeveloperSection } from "@/components/landing/developer-section"
import { TestimonySection } from "@/components/landing/testimony-section"
import { FAQSection } from "@/components/landing/faq-section"
import { CommunitySection } from "@/components/landing/community-section"

export default function Portfolio() {

  return (

    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Why Elysium Section */}
      <WhyElysiumSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Marquee Section */}
      <MarqueeSection />

      {/* Overview Section */}
      <OverviewSection />

      {/* Developer Section */}
      <DeveloperSection />

      {/* Testimony Section */}
      <TestimonySection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Community Section */}
      <CommunitySection />

    </div>
    
  )
}
