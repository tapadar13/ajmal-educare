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

export default function Super40Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero / Intro */}
        <section className="relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
                Ajmal <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Super40</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-700">
                Premier coaching institute for NEET and JEE in Assam and Northeast India
              </p>
            </div>

            {/* Narrative */}
            <div className="mt-12 max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p>
                Founded in 2016 under the aegis of the Ajmal Foundation, Ajmal Super40 stands as the premier
                coaching institute for NEET and JEE in Assam and Northeast India. Super40 is dedicated to unlocking
                the academic potential of rural and underprivileged bright minds. To date, over 1,400+ selections in
                NEET and JEE underpin our track record of excellence.
              </p>
              <p>
                At Ajmal Super 40, we pride ourselves on having a team of highly qualified and experienced faculties
                from IITs and NITs. Our educators bring a wealth of knowledge and expertise, ensuring that our
                students receive the best possible guidance.
              </p>
              <p>
                We understand that each student has unique challenges and questions, that's why Ajmal Super 40
                offers personalized doubt-solving sessions. Our dedicated faculty members provide one-on-one
                assistance to ensure that no doubt goes unresolved, which helps students establish a solid
                foundation and builds their confidence.
              </p>
              <p>
                Regular assessment is key to success in competitive exams for IIT and JEE aspirants. At Ajmal Super
                40, we conduct weekly mock tests that simulate the real exam environment. Through these exams,
                students can evaluate their level of preparation, identify their areas of weakness and enhance their
                performance.
              </p>
              <p>
                Our integrated teaching approach ensures that students are well-prepared for both board and
                competitive exams like NEET and JEE. By aligning our curriculum with the school syllabus and
                competitive exam requirements, we provide a holistic education that enhances students' potential.
              </p>
            </div>
          </div>
        </section>

        {/* Why Stands Out */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
              Why <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ajmal Super40</span> Stands Out
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
              <div className="relative rounded-2xl lg:col-span-2">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: Award, id: 'card-award' })}
                    </div>
                  <CardTitle className="text-gray-900">Proven Academic Success</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-600">
                    With 1400+ NEET/JEE selections, our results speak volumes. We consistently nurture students into
                    doctors and engineers through structured coaching and expert guidance.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl lg:col-span-2">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: ClipboardList, id: 'card-tests' })}
                    </div>
                    <CardTitle className="text-gray-900">Weekly Mock Tests &amp; Detailed Analysis</CardTitle>
                  </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-600">
                    We simulate real NEET/JEE conditions every week. Tests are followed by in depth analysis and
                    tailored feedback, helping students overcome weaknesses and steadily build exam confidence.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl lg:col-span-2">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: MessageSquare, id: 'card-msg' })}
                    </div>
                  <CardTitle className="text-gray-900">Individualized Doubt Sessions</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-600">
                    Our teachers are available around the clock for one-on-one doubt resolution, ensuring personalized
                    attention and academic clarity for each student.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl lg:col-span-2 lg:col-start-2">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: BookOpen, id: 'card-book' })}
                    </div>
                  <CardTitle className="text-gray-900">Focused Teaching for Board &amp; Entrance Exams</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-600">
                    We prepare Class XI and XII students for board exams concurrently with NEET/JEE, avoiding
                    academic mismatches and maximizing time efficiency.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl lg:col-span-2">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: Heart, id: 'card-heart' })}
                    </div>
                  <CardTitle className="text-gray-900">Holistic Mentorship &amp; Motivation</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <CardDescription className="text-gray-600">
                    From motivational sessions to performance tracking, students receive emotional and academic
                    support throughout their journey.
                  </CardDescription>
                </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Performers gallery */}
        <section className="py-12 lg:py-16 bg-yellow-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-10">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Outstanding Performers</span> in NEET &amp; JEE
            </h2>
            <div className="space-y-8">
              <div className="rounded-xl overflow-hidden shadow-xl border border-yellow-300/40">
                <Image src="/images/super40/neet-1.jpg" alt="Outstanding performers in NEET" width={1600} height={900} className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl border border-yellow-300/40">
                <Image src="/images/super40/neet-2.jpg" alt="Outstanding performers in NEET" width={1600} height={900} className="w-full h-auto" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl border border-yellow-300/40">
                <Image src="/images/super40/jee.jpg" alt="Outstanding performers in JEE" width={1600} height={900} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Popular</span> Courses</h2>
            <p className="max-w-4xl mx-auto text-center text-gray-700 mb-10">
              Our popular courses are Five Year Integrated Course from class VIII to XII, Four Year Integrated
              Course from class IX to XII for students, Two year Integrated Course from class XI to XII &amp; One Year
              Integrated Course for students who have passed class XII.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="relative rounded-2xl">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Test Series</CardTitle>
                    <CardDescription className="text-gray-600">Test series</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="relative rounded-2xl">
                <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none">
                  <CardHeader>
                    <CardTitle className="text-gray-900">One Year Integrated Course</CardTitle>
                    <CardDescription className="text-gray-600">For students who have passed class XII</CardDescription>
                  </CardHeader>
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



