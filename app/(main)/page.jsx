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
import BottomBanner from '@/components/ui/bottom-banner'

export default function Home() {
  return (
    <>
      <div className="bg-background">
        <Header />
        <div className="min-h-screen flex flex-col">
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
        </div>
        <Footer />
      </div>
      {/* <BottomBanner text="Ajmal Educare Pvt Ltd" /> */}
    </>
  );
}
