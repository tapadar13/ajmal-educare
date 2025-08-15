"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import { Award, MessageSquare, BookOpen, Heart, ClipboardList } from 'lucide-react'
import { ShineBorder } from '@/components/magicui/shine-border'

function GradientIcon({ Icon, id }) {
  return (
    <Icon className="w-5 h-5" stroke={`url(#${id})`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/40 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl" />
          </div>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
                Ajmal Educare India Private Limited
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Excellence in education for aspiring students across North-East India.
              </p>
            </div>
            <div className="mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image src="/images/about/ajmal-educare.jpg" alt="Ajmal Educare" width={1600} height={900} className="w-full h-auto" priority />
            </div>
          </div>
        </section>

        {/* Intro and Ventures */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:gap-16 items-start">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Founded with deep roots in social upliftment and academic excellence our mission is to democratize top-tier coaching for competitive exams across North-East India, empowering young minds to achieve their dreams—without financial barriers. Ajmal Educare was established to provide quality educational opportunities to students from rural and underserved communities. We firmly believe that talent is everywhere, opportunity isn't and we're here to bridge that gap.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Today, our organization oversees two flagship ventures:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <span className="font-semibold">Ajmal Super 40</span> – Premier residential coaching for NEET & JEE.
                  </li>
                  <li>
                    <span className="font-semibold">Ajmal IAS Academy</span> – Expert guidance for UPSC & APSC aspirants.
                  </li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Since inception, we've guided hundreds of students to secure seats in top medical & engineering institutes across the country and civil services institutions transforming lives and uplifting communities.
                </p>
              </div>
              {/* Mission & Vision image removed as requested */}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                What <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Sets Us Apart</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                <CardHeader className="pt-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <BookOpen className="w-5 h-5 text-gray-700" /> Mission-Driven Focus
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">
                    Education is our tool for social transformation and we prioritize merit over means, offering scholarships and free boarding to talent across the region.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                <CardHeader className="pt-6">
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <Award className="w-5 h-5 text-gray-700" /> Proven Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">
                    Over 1,400 selections in NEET, JEE and APSC, with alumni in top universities and government services.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                  <CardHeader className="pt-6">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <ClipboardList className="w-5 h-5 text-gray-700" /> Exceptional Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-base">
                      Faculty includes seasoned professionals, ex-bureaucrats, former civil servants, and IIT/NIT-qualified educators who provide personal mentorship.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              

              {/* Center bottom two cards */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="relative rounded-2xl border-2 border-black">
                  <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                    <CardHeader className="pt-6">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <Heart className="w-5 h-5 text-gray-700" /> Holistic Development
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <CardDescription className="text-base">
                        We cultivate strong character and leadership through mock interviews, current-affairs training, and personality-building sessions.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative rounded-2xl border-2 border-black">
                  <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                    <CardHeader className="pt-6">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <MessageSquare className="w-5 h-5 text-gray-700" /> Focus on Rural Talent
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <CardDescription className="text-base">
                        Most of our students come from rural and economically weaker backgrounds and we work tirelessly to remove every barrier.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Foundational Pillars */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Foundational Pillars</span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl">Scholarship Led Access</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">Merit-based full/partial scholarships to deserving students which ensures no student is deprived of opportunity.</CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl">Rigorous Academics</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">Comprehensive test schedules, performance tracking, and weekly analysis ensure steady progress.</CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                <CardHeader className="pt-6">
                  <CardTitle className="text-xl">Subject-Matter Experts</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-base">Classes led by experienced faculty with proven track records.</CardDescription>
                </CardContent>
                </Card>
              </div>

              {/* Center bottom two cards */}
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <div className="relative rounded-2xl border-2 border-black">
                  <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                    <CardHeader className="pt-6">
                      <CardTitle className="text-xl">Beyond Exams</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <CardDescription className="text-base">Coaching for confidence, interview skills, leadership, and ethical growth.</CardDescription>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative rounded-2xl border-2 border-black">
                  <Card className="rounded-[inherit] shadow-none gap-2 border-0">
                    <CardHeader className="pt-6">
                      <CardTitle className="text-xl">Community Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="pb-6">
                      <CardDescription className="text-base">Each success story uplifts entire communities, reinforcing education as a powerful social equalizer.</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


