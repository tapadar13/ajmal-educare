import { Badge } from '@/components/ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowRight, BookOpen, Trophy, Users, Target, Clock, Award, GraduationCap, UserCheck, FileText, MessageCircle, Brain, Zap, Star, Globe } from 'lucide-react'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gray-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100/30 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-8 lg:pb-8 ">
        {/* Main Hero Content */}
        <div className="text-center mb-10">
          {/* <Badge 
            variant="outline"
            className="mb-8 text-sm font-medium py-2 px-4 border-gray-300 text-gray-700 bg-white rounded-full shadow-sm"
          >
            ✨ Our Educational Ecosystem
          </Badge> */}
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tighter">
            Specialized{' '}
            <span className="text-gray-700">
              Academies
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our academies are designed to cater to specific competitive examinations, providing 
            targeted preparation with expert faculty and proven methodologies.
          </p>
        </div>

        {/* Academy Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Ajmal Super 40 */}
          <Card className="overflow-hidden h-full flex flex-col min-h-[800px]">
            <CardHeader className="p-0">
              {/* Academy Badge */}
              <div className="px-6 pt-6 pb-1">
                <Badge className="bg-green-600 text-white px-4 py-2 text-3xl font-semibold rounded-lg border-0 hover:bg-green-600">
                  🎯 Ajmal Super 40
                </Badge>
              </div>
              
              {/* Title and Description */}
              <div className="px-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3 min-h-[64px] flex items-center">
                  Excellence in JEE, NEET Exam Preparation
                </CardTitle>
                <div className="min-h-[80px]">
                  <p className="text-gray-600 leading-relaxed">
                    Elite program designed for top-performing students aspiring for premier engineering and medical colleges with intensive JEE & NEET preparation
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-64 overflow-hidden rounded-xl mx-4">
                  <Image
                    src="/images/super-40.jpg"
                    alt="Ajmal Super 40 Academy"
                    fill
                    className="object-fit rounded-xl"
                  />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Intensive coaching for NEET & JEE</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FileText className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Regular mock tests & detailed analysis</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <UserCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Individual mentorship program</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Clock className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">24/7 doubt clearing sessions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Scholarship opportunities for deserving students</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-sm">Integrated coaching which includes board curriculum and NEET & JEE</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <a
                href="#super40"
                className="w-full inline-flex items-center justify-center py-3 px-6 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300"
              >
                Learn More About Ajmal Super 40
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CardFooter>
          </Card>

          {/* Ajmal IAS Academy */}
          <Card className="overflow-hidden h-full flex flex-col min-h-[800px]">
            <CardHeader className="p-0">
              {/* Academy Badge */}
              <div className="px-6 pt-6 pb-1">
                <Badge className="bg-red-500 text-white px-4 py-2 text-3xl font-semibold rounded-lg border-0 hover:bg-red-600">
                  <Award className="w-16 h-16" /> Ajmal IAS Academy
                </Badge>
              </div>
              
              {/* Title and Description */}
              <div className="px-6 pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3 min-h-[64px] flex items-center">
                  Excellence in UPSC/IAS, APSC Preparation
                </CardTitle>
                <div className="min-h-[80px]">
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive civil services preparation with proven track record of successful candidates and guidance from experienced civil servants
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-64 overflow-hidden rounded-xl mx-4">
                  <Image
                    src="/images/ias-academy.jpg"
                    alt="Ajmal IAS Academy"
                    fill
                    className="object-fit rounded-xl"
                  />
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="flex-grow">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-900 mb-4">Key Features</h4>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Globe className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">360 degree coverage of UPSC CSE & APSC CCE Syllabus.</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Star className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">Nationally renowned faculties from Delhi and other parts of India.</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <UserCheck className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">One to One mentorship and Individual Care.</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">24*7 Doubt Clearance by our Expert Faculties.</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">Comprehensive Study material and Class Notes</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Users className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-sm">Periodic interactive sessions with IAS, IPS, ACS Officers.</span>
                </div>
              </div>
            </CardContent>
            
            <CardFooter>
              <a
                href="#ias"
                className="w-full inline-flex items-center justify-center py-3 px-6 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors duration-300"
              >
                Learn More About Ajmal IAS Academy
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default HeroSection