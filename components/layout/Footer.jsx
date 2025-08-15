import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Academies', href: '#academies' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '/contact' }
  ]

  const programs = [
    { name: 'Ajmal Super 40', href: '/super40' },
    { name: 'Ajmal IAS Academy', href: '/ias' },
    { name: 'JEE Preparation', href: '#jee' },
    { name: 'NEET Coaching', href: '#neet' },
    { name: 'Foundation Courses', href: '#foundation' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div>
                  <h3 className="text-xl font-bold">Ajmal Educare India Pvt Ltd</h3>
                  <p className="text-gray-400 text-sm font-medium">Excellence in Education</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                Empowering students to achieve their dreams through innovative teaching 
                methodologies and comprehensive educational programs.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6">Quick Links</h4>
              <nav className="space-y-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Our Programs */}
            <div>
              <h4 className="text-lg font-bold mb-6">Our Programs</h4>
              <nav className="space-y-4">
                {programs.map((program) => (
                  <Link
                    key={program.name}
                    href={program.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {program.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6">Contact Info</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Address</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Hojai, Assam, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Phone</p>
                    <p className="text-gray-300 text-sm">+91 98765 43210</p>
                    <p className="text-gray-300 text-sm">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-4 h-4 text-gray-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Email</p>
                    <p className="text-gray-300 text-sm">info@ajmaleducare.com</p>
                    <p className="text-gray-300 text-sm">admissions@ajmaleducare.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                © 2025 Ajmal Educare India Private Limited. All rights reserved.
              </p>
              
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer