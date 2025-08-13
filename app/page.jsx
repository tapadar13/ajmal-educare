"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import CTASection from '@/components/sections/CTASection'
import AboutSection from '@/components/sections/AboutSection'
import MissionVisionSection from '@/components/sections/MissionVisionSection'
import WhyChooseSection from '@/components/sections/WhyChooseSection'
import MethodologySection from '@/components/sections/MethodologySection'
import NewsSection from '@/components/sections/NewsSection'
import LeadershipSection from '@/components/sections/LeadershipSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionVisionSection />
        <LeadershipSection />
        <WhyChooseSection />
        <MethodologySection />
        <CTASection />
        <NewsSection />
      </main>
      <Footer />
    </div>
  );
}
