import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Eye, Target, Users, BookOpen, Heart, Lightbulb, ArrowRight, Sparkles, Zap, Star, Trophy, Rocket, Globe } from 'lucide-react'
import AchievementsCounter from './AchievementsCounter'

const MissionVisionSection = () => {
  return (
    <section className="min-h-screen py-20 lg:py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          
          <h2 className="text-5xl sm:text-6xl lg:text-6xl font-black text-gray-900 mb-8 leading-none tracking-tight">
            Our{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
                Vision
              </span>
            </span>
            {' '}&{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Mission
              </span>
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
          At Ajmal Educare India Private Limited, we are committed to transforming the landscape of competitive exam preparation through innovative teaching methodologies and unwavering dedication to student success.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr">
            
            {/* Vision Header Card - Spans 2 columns */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative h-full bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl
               overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-4xl font-black text-gray-900">Our Vision</h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed flex-1">
                  To become a nationally recognized center of excellence in coaching and academic support, empowering students from every background especially the underserved and marginalized with the knowledge, confidence, and values to lead and serve.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Header Card - Spans 2 columns */}
            <div className="md:col-span-2 group cursor-pointer">
              <div className="relative h-full bg-white/80 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl hover:shadow-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-1000"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-4xl font-black text-gray-900">Our Mission</h3>
                      <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-700 leading-relaxed flex-1">
                  To identify and nurture meritorious students from underprivileged communities and equip them with the tools to succeed in competitive exams like NEET, JEE, UPSC, and APSC.
                  </p>
                </div>
              </div>
            </div>

            

          </div>

          {/* Achievements Counter Section */}
        </div>
      </div>
    </section>
  )
}

export default MissionVisionSection