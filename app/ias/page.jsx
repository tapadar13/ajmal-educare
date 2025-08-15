"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { ShineBorder } from '@/components/magicui/shine-border'
import { BookOpen, Monitor, Home, Wifi, CalendarCheck2, GraduationCap } from 'lucide-react'

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

export default function IASAcademyPage() {
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
                Ajmal <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">IAS Academy</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-700">Inspired By Excellence & Innovation</p>
              <p className="text-base sm:text-lg text-gray-700 mt-2">We offer a wide range of high quality of teaching and extra-curricular activities.</p>
            </div>

            {/* Narrative */}
            <div className="mt-12 max-w-5xl mx-auto space-y-6 text-gray-700 leading-relaxed">
              <p>
                Ajmal IAS Academy is one of the leading and trusted institutions in India for UPSC Civil Services and State PCS (like APSC) exam preparation. Established under the visionary leadership of the Ajmal Foundation, the academy is dedicated to transforming the educational landscape of Northeast India by nurturing aspirants for the Indian Administrative Service (IAS), Indian Police Service (IPS), Indian Revenue Service (IRS), and other prestigious government services.
              </p>
              <p>
                We blend academic excellence with holistic personality development, guided by a team of nationally renowned faculty members, seasoned administrators, and former civil servants. Our programs are designed to foster critical thinking, leadership, and a deep understanding of the Indian polity, economy, and society.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Our Facilities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: BookOpen, id: 'ias-lib' })}
                    </div>
                    <CardTitle className="text-gray-900">24×7 Library Access</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Our fully-equipped library remains open round-the-clock and offers high-speed Wi-Fi, enabling students to access digital resources. A quiet, focused zone for self-study anytime.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: Monitor, id: 'ias-smart' })}
                    </div>
                    <CardTitle className="text-gray-900">Digital Smart Classrooms</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Our modern classrooms are equipped with smart boards and audio-visual tools to enhance interactive learning, live sessions, and recorded lectures for better conceptual clarity.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: Home, id: 'ias-hostel' })}
                    </div>
                    <CardTitle className="text-gray-900">Hostel Facility</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Safe, comfortable, and disciplined hostel accommodations are available for both boys and girls. Designed to provide a study-conducive atmosphere with in-house warden support.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="flex items-center gap-3 pt-6">
                    <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                      {GradientIcon({ Icon: Wifi, id: 'ias-online' })}
                    </div>
                    <CardTitle className="text-gray-900">Online Courses</CardTitle>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Learn from anywhere with our structured online programs for UPSC & APSC. Live classes, recorded lectures, digital notes, and doubt-clearing sessions. Perfect for remote learners and working aspirants.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="py-12 lg:py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">Our Programs</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl p-6 bg-gradient-to-r from-orange-400 to-amber-600 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <CalendarCheck2 className="w-5 h-5" />
                  <h3 className="font-semibold">Assam Exclusive Batch (GS V)</h3>
                </div>
                <p className="text-white/90 text-sm">APSC</p>
                <p className="mt-3 text-white/95 text-sm leading-relaxed">
                  Prepare with precision for APSC Mains GS Paper V with our Assam Exclusive Batch, focused on Assam-specific topics and state-related knowledge. This course is specially designed for GS Paper V of the APSC Mains exam and covers Assam’s history, geography, polity, economy, society, and current affairs. Get in-depth guidance from subject experts, practice answer writing, and improve your score with targeted preparation.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-r from-sky-500 to-blue-600 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-semibold">IAS Advance Batch – GS (Mains)</h3>
                </div>
                <p className="text-white/90 text-sm">UPSC / IAS</p>
                <p className="mt-3 text-white/95 text-sm leading-relaxed">
                  Join the IAS Advance Batch for GS (Mains) and get comprehensive, expert-guided preparation tailored for UPSC Civil Services Mains Examination. Designed by experienced UPSC mentors, this batch offers in-depth General Studies syllabus coverage, answer writing practice, personalized feedback, and advanced test series to help you secure top ranks in the IAS exam.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-500 to-violet-600 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-semibold">IAS Foundation Batch – GS (Prelims + Mains)</h3>
                </div>
                <p className="text-white/90 text-sm">UPSC / IAS</p>
                <p className="mt-3 text-white/95 text-sm leading-relaxed">
                  Enroll in our IAS Foundation Batch for General Studies (Prelims + Mains) and build a strong base for your UPSC Civil Services Exam preparation. This integrated course offers a comprehensive approach covering the full UPSC GS syllabus, including Prelims and Mains, along with NCERT fundamentals, current affairs, answer writing, mentorship, and regular tests—all guided by expert faculty.
                </p>
              </div>

              <div className="rounded-2xl p-6 bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-semibold">IAS GS Mentorship Programme</h3>
                </div>
                <p className="text-white/90 text-sm">UPSC / IAS</p>
                <p className="mt-3 text-white/95 text-sm leading-relaxed">
                  Join our IAS GS Mentorship Programme and receive one-on-one guidance tailored to your UPSC preparation needs. This program is designed to provide personalized mentorship for General Studies (Prelims + Mains), including study planning, daily/weekly target setting, performance tracking, answer writing feedback, and doubt resolution—directly from experienced UPSC mentors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">Courses</h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700 mb-10">Join Our Coaching Programs. Enroll now and start your journey toward success in Civil Services Exams!</p>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">Assam Exclusive Batch (GS V)</CardTitle>
                    <CardDescription className="text-gray-600">APSC</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Prepare with precision for APSC Mains GS Paper V with our Assam Exclusive Batch, focused on Assam-specific topics and state-related knowledge. This course is specially designed for GS Paper V of the APSC Mains exam and covers Assam’s history, geography, polity, economy, society, and current affairs. Get in-depth guidance from subject experts, practice answer writing, and improve your score with targeted preparation.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">IAS Advance Batch – GS (Mains)</CardTitle>
                    <CardDescription className="text-gray-600">UPSC / IAS</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Join the IAS Advance Batch for GS (Mains) and get comprehensive, expert-guided preparation tailored for UPSC Civil Services Mains Examination. Designed by experienced UPSC mentors, this batch offers in-depth General Studies syllabus coverage, answer writing practice, personalized feedback, and advanced test series to help you secure top ranks in the IAS exam.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">IAS Foundation Batch – GS (Prelims + Mains)</CardTitle>
                    <CardDescription className="text-gray-600">UPSC / IAS</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Enroll in our IAS Foundation Batch for General Studies (Prelims + Mains) and build a strong base for your UPSC Civil Services Exam preparation. This integrated course offers a comprehensive approach covering the full UPSC GS syllabus, including Prelims and Mains, along with NCERT fundamentals, current affairs, answer writing, mentorship, and regular tests—all guided by expert faculty.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">IAS GS Mentorship Programme</CardTitle>
                    <CardDescription className="text-gray-600">UPSC / IAS</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Join our IAS GS Mentorship Programme and receive one-on-one guidance tailored to your UPSC preparation needs. This program is designed to provide personalized mentorship for General Studies (Prelims + Mains), including study planning, daily/weekly target setting, performance tracking, answer writing feedback, and doubt resolution—directly from experienced UPSC mentors.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">APSC Mains Crash Course</CardTitle>
                    <CardDescription className="text-gray-600">APSC</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Boost your APSC Mains preparation with our expertly designed Crash Course, focused on high-scoring strategies and complete syllabus coverage. This short-term program includes structured classes, answer writing practice, model tests, and mentorship—designed specifically for the APSC Mains exam pattern. Ideal for last-phase revision with expert guidance and targeted learning.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>

              <div className="relative rounded-2xl border-2 border-black">
                <Card className="relative z-0 rounded-[inherit] h-full shadow-none border-0">
                  <CardHeader className="py-6">
                    <CardTitle className="text-gray-900">APSC Foundation Batch – GS</CardTitle>
                    <CardDescription className="text-gray-600">APSC</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-6">
                    <CardDescription className="text-gray-600">
                      Join our APSC Foundation Batch for General Studies and build a strong base for Prelims and Mains with expert guidance. This comprehensive course is designed to cover the full APSC GS syllabus with conceptual clarity, daily classes, updated current affairs, test series, and personalized mentorship—ideal for beginners and serious aspirants aiming to crack the APSC exam.
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


