import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Trophy, Users, BookOpen, Award, Target, TrendingUp } from 'lucide-react'

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "12000+",
      label: "Students Mentored",
      description: "Successfully guided thousands of aspirants"
    },
    {
      icon: Trophy,
      number: "1800+", 
      label: "Toppers",
      description: "Students who secured top ranks"
    },
    {
      icon: Award,
      number: "10+",
      label: "Years Experience",
      description: "Decade of educational excellence"
    },
    {
      icon: BookOpen,
      number: "150+",
      label: "Expert Faculty",
      description: "Highly qualified teaching professionals"
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50 relative overflow-hidden">      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-8 bg-white text-gray-700 border-gray-300">
            🏆 Our Achievements Speak for Themselves
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Our Achievements</span> Speak for{' '}
            <span className="text-gray-700">Themselves</span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Numbers that reflect our commitment to excellence and student success
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon
            
            return (
              <Card key={index} className="group bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 lg:p-8 text-center">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 lg:w-10 lg:h-10 text-gray-600" />
                  </div>
                  
                  <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {achievement.number}
                  </div>
                  
                  <div className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                    {achievement.label}
                  </div>
                  
                  <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Additional achievement highlights */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">95% Success Rate</h4>
              <p className="text-gray-600">Consistently high success rate across all programs</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">1400+ Selections</h4>
              <p className="text-gray-600">NEET & JEE selections with numerous APSC qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-gray-600" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Award-Winning</h4>
              <p className="text-gray-600">Recognized institution with multiple accolades</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AchievementsSection