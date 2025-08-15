import { Badge } from '@/components/ui/badge'
import { Award, Users, BookOpen, Heart } from 'lucide-react'
import Image from 'next/image'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'

const AboutSection = () => {
  return (
    <section id="about" className="relative pt-8 pb-8 sm:py-20 lg:py-8 bg-white overflow-hidden">
      {/* Box type background design */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-gray-200 rounded-lg"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border border-gray-300 rounded-md"></div>
        <div className="absolute bottom-40 left-1/4 w-12 h-12 border border-gray-200 rounded"></div>
        <div className="absolute top-1/2 right-10 w-24 h-24 border-2 border-gray-200 rounded-xl"></div>
        <div className="absolute bottom-20 right-1/3 w-14 h-14 border border-gray-300 rounded-lg"></div>
        <div className="absolute top-20 left-1/3 w-18 h-18 border border-gray-200 rounded-md"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <Badge className="mb-6 sm:mb-8 bg-gray-100 text-gray-700 border-gray-200">
            📖 About Ajmal Educare
          </Badge>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-0 sm:mb-6">
            Our Foundation{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Story
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ajmal Educare India Private Limited was founded with a single, 
              powerful belief that quality education should not be a privilege, but 
              a right for every deserving student, regardless of their financial 
              background.
            </p>
            
            {/* <p className="text-lg text-gray-700 leading-relaxed">
              Established under the visionary leadership of Maulana Badruddin Ajmal, our 
              journey began as a social commitment to uplift the youth of North-East India 
              through academic excellence and equal opportunity.
            </p> */}
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, Ajmal Educare India has become the backbone of two flagship 
              educational ventures:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <BookOpen className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ajmal Super 40</h4>
                  <p className="text-gray-600">A premier coaching institute for NEET and JEE aspirants</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-gray-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Ajmal IAS Academy</h4>
                  <p className="text-gray-600">A dedicated training center for UPSC and APSC civil service aspirants</p>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Both institutes were founded not just to produce results, but to ignite hope, 
              discipline, and ambition in the minds of students from underserved regions. 
              {/* Through fully residential coaching programs, expert faculty, and holistic support, 
              we are proud to have helped hundreds of students secure seats in top 
              engineering and medical institutions and civil services posts across India. */}
              Today, Ajmal Educare stands as a symbol of our purpose-driven education and social 
              transformation through academic empowerment.
            </p>
          </div>

          {/* Stats and Image */}
          <div className="space-y-8">
            {/* Featured Image Placeholder */}
            <Image src="/images/campus-inauguration.jpg" alt="Ajmal Educare" width={576} height={576} className='rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection