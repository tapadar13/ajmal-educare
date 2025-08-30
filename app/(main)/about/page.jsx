"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import {
  Award,
  MessageSquare,
  BookOpen,
  Heart,
  ClipboardList,
} from "lucide-react";

function GradientIcon({ Icon }) {
  return <Icon className="w-5 h-5 text-white" />;
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
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-16">
            <div className="text-center max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 mb-6">
                Ajmal Educare India Private Limited
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                Excellence in education for aspiring students across North-East
                India.
              </p>

              {/* Gradient Underline */}
              <div className="flex justify-center mt-6">
                <div className="w-48 h-[2px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="mt-10 max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src="/images/about/ajmal-educare.jpg"
                alt="Ajmal Educare"
                width={1600}
                height={900}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Intro and Ventures */}
        <section className="py-16 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-10 lg:gap-16 items-start">
              <div className="space-y-6 max-w-5xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed">
                  Founded with deep roots in social upliftment and academic
                  excellence our mission is to democratize top-tier coaching for
                  competitive exams across North-East India, empowering young
                  minds to achieve their dreams—without financial barriers.
                  Ajmal Educare was established to provide quality educational
                  opportunities to students from rural and underserved
                  communities. We firmly believe that talent is everywhere,
                  opportunity isn't and we're here to bridge that gap.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed ">
                  Today, our organization oversees two flagship ventures:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                      <span className="font-semibold text-xl">
                        Ajmal Super 40
                      </span>{" "}
                      –{" "}
                      <span className="text-xl">
                        Premier residential coaching for NEET & JEE.
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold text-xl">
                        Ajmal IAS Academy
                      </span>{" "}
                      –{" "}
                      <span className="text-xl">
                        Expert guidance for UPSC & APSC aspirants.
                      </span>
                    </li>
                  </ul>
                </ul>
                <p className="text-xl text-gray-700 leading-relaxed">
                  Since inception, we've guided hundreds of students to secure
                  seats in top medical & engineering institutes across the
                  country and civil services institutions transforming lives and
                  uplifting communities.
                </p>
              </div>
              {/* Mission & Vision image removed as requested */}
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                What{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Sets Us Apart
                </span>
              </h2>
              <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto">
                A blend of excellence, accessibility, and mentorship that empowers students to rise beyond limitations
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: BookOpen, id: "about-mission" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Mission-Driven Focus
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Education is our tool for social transformation and we
                      prioritize merit over means, offering scholarships and
                      free boarding to talent across the region. We are driven
                      by the belief that true progress happens when
                      opportunities reach those who need them the most. Our
                      mission ensures that every deserving student, regardless
                      of financial background, finds a place to thrive here.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: Award, id: "about-results" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Proven Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Over 1,400 selections in NEET, JEE and APSC, with alumni
                      in top institutes and government services across India.
                      These results are not just numbers they are stories of
                      determination, resilience, and a support system that
                      refuses to let students give up on their dreams.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({
                        Icon: ClipboardList,
                        id: "about-faculty",
                      })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Exceptional Faculty
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Faculty includes seasoned professionals, ex-bureaucrats,
                      former civil servants, and IIT/NIT-qualified educators who
                      provide personal mentorship. Their guidance goes beyond
                      academics, shaping students into confident individuals
                      ready to face real-world challenges.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: Heart, id: "about-holistic" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Holistic Development
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      We cultivate strong character and leadership through mock
                      interviews, current-affairs training, and
                      personality-building sessions. Our goal is to prepare
                      students not just for exams, but for life equipping them
                      with confidence, communication skills, and a sense of
                      purpose.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black md:col-span-2 md:justify-self-center md:w-full md:max-w-[calc(50%-0.75rem)] overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: MessageSquare, id: "about-rural" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Focus on Rural Talent
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Most of our students come from rural and economically
                      weaker backgrounds and we work tirelessly to remove every
                      barrier. By providing resources, mentorship, and
                      encouragement, we unlock hidden potential and give voice
                      to students who might otherwise be overlooked.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Foundational Pillars */}
        <section className="py-16 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-4xl sm:text-5xl font-black text-gray-900 tracking-tight">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Foundational Pillars
                </span>
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: Award, id: "pillar-scholarship" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Scholarship Led Access
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Merit-based full/partial scholarships to deserving
                      students which ensures no student is deprived of
                      opportunity. This ensures that financial constraints never
                      overshadow talent, and every bright mind gets the chance
                      to shine.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: BookOpen, id: "pillar-academics" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Rigorous Academics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Comprehensive test schedules, performance tracking, and
                      weekly analysis ensure steady progress. Our structured
                      system builds discipline, consistency, and
                      resilience—qualities essential for long-term success.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({
                        Icon: ClipboardList,
                        id: "pillar-experts",
                      })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Subject-Matter Experts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Classes led by experienced faculty with proven track
                      records. With years of expertise, they simplify complex
                      concepts and instill confidence in every learner.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({ Icon: Heart, id: "pillar-beyond" })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Beyond Exams
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Coaching for confidence, interview skills, leadership, and
                      ethical growth. We focus on nurturing well- rounded
                      individuals who succeed not just in academics, but in
                      their careers and communities.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black md:col-span-2 md:justify-self-center md:w-full md:max-w-[calc(50%-0.75rem)] overflow-hidden">
                <Card className="rounded-none shadow-none gap-2 border-0">
                  <CardHeader className="flex flex-row items-center gap-3 pt-6 pb-6 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                      {GradientIcon({
                        Icon: MessageSquare,
                        id: "pillar-community",
                      })}
                    </div>
                    <CardTitle className="text-white text-2xl font-bold">
                      Community Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-lg">
                      Each success story uplifts entire communities, reinforcing
                      education as a powerful social equalizer. Our students
                      become role models, inspiring others to dream bigger and
                      proving that education can transform generations.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
