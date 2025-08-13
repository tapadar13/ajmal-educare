"use client";

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Phone, Mail, Clock, Building2, ArrowRight, Users, Award, ExternalLink } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: [
        "123 Education Street",
        "Learning District", 
        "City - 500001"
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Primary: +91 98765 43210",
        "Secondary: +91 87654 32109"
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@ajmaleducare.com",
        "admissions@ajmaleducare.com"
      ],
      color: "from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed"
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50"
    }
  ]

  const academyLocations = [
    {
      name: "Ajmal Super 40",
      description: "Excellence in JEE & NEET Preparation",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
      icon: Award,
      locations: [
        {
          city: "Hojai Office",
          address: "Ajmal Super 40, Borolobi Colony, Hojai",
          contact: "Mr. Nazir Hossain",
          phone: "9435786477",
          additional: ["Abdullah Zamman: 8127514763", "Samuel Alom: 9876204477"]
        },
        {
          city: "Dhubri Office", 
          address: "Ajmal Super 40, Infront of B.N College, Dhubri",
          contact: "Nasirour Rahman",
          phone: "8864696069",
          additional: ["Mustak: 9706117162"]
        },
        {
          city: "Badarpur Office",
          address: "Ajmal Super 40, Near SBI Building, Badarpur",
          contact: "Shahidul Uddin",
          phone: "8638798649",
          additional: ["Furkan Ahmed: 8001492671"]
        },
        {
          city: "Baipeta Office",
          address: "Ajmal Super 40, Near College Tiniali, Kaligacha",
          contact: "Mostajir Jamal",
          phone: "8473016881",
          additional: ["Sohel Rana: 7002736532"]
        }
      ]
    },
    {
      name: "Ajmal IAS Academy",
      description: "Excellence in UPSC & APSC Preparation",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      icon: Users,
      locations: [
        {
          city: "Main Campus",
          address: "Fire Brigade Road, Bishnugarh, Hojai, Assam",
          contact: "Ahmed Nawej",
          phones: ["9287502601", "9287502602", "9287502603"]
        }
      ]
    }
  ]

  return (
    <section className="relative min-h-screen bg-gray-50 overflow-hidden py-20">
      {/* Enhanced Background Design */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/20" />
        
        {/* Modern geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-3xl rotate-12 blur-sm"></div>
        <div className="absolute top-60 right-32 w-32 h-32 bg-gradient-to-br from-green-200/30 to-cyan-200/30 rounded-2xl -rotate-12"></div>
        <div className="absolute bottom-40 left-40 w-28 h-28 bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full rotate-45"></div>
        <div className="absolute bottom-60 right-20 w-36 h-36 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-3xl -rotate-6"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-yellow-200/40 to-orange-200/40 rounded-xl rotate-45"></div>
        <div className="absolute top-3/4 right-1/3 w-24 h-24 bg-gradient-to-br from-indigo-200/40 to-blue-200/40 rounded-2xl -rotate-12"></div>
        
        {/* Large background elements */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-100/10 to-purple-100/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-100/10 to-cyan-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <Badge 
            variant="outline"
            className="mb-8 text-base font-medium py-3 px-6 border-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 rounded-full backdrop-blur-sm"
          >
            ✨ Connect With Excellence
          </Badge>
          
          <h1 className="text-6xl sm:text-7xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight tracking-tighter">
            Contact Us
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Connect with our dedicated academies for admissions, queries, or partnership opportunities
          </p>
        </div>

        {/* Enhanced Academy Locations */}
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {academyLocations.map((academy, index) => (
              <Card key={index} className={`border-0 ${academy.bgColor} overflow-hidden rounded-lg`}>
                {/* Academy Header */}
                <div className={`bg-gradient-to-r ${academy.color} p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <academy.icon className="w-10 h-10 text-white/90" />
                      <ExternalLink className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">{academy.name}</h3>
                    <p className="text-white/90 text-lg font-medium">{academy.description}</p>
                  </div>
                </div>

                {/* Locations List */}
                <CardContent className="p-8">
                  <div className="space-y-8">
                    {academy.locations.map((location, idx) => (
                      <div key={idx} className="group/location">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h4 className="font-bold text-xl text-gray-900 mb-2 group-hover/location:text-blue-600 transition-colors">
                              {location.city}
                            </h4>
                            <div className="space-y-3">
                              <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                <p className="text-gray-600 leading-relaxed">{location.address}</p>
                              </div>
                              
                              {location.contact && (
                                <div className="flex items-start space-x-3">
                                  <Users className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                  <div>
                                    <p className="text-gray-700 font-medium">{location.contact}</p>
                                    {location.phone && (
                                      <p className="text-blue-600 font-semibold">{location.phone}</p>
                                    )}
                                  </div>
                                </div>
                              )}
                              
                              {location.phones && (
                                <div className="flex items-start space-x-3">
                                  <Phone className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                                  <div className="space-y-1">
                                    {location.phones.map((phone, phoneIdx) => (
                                      <p key={phoneIdx} className="text-blue-600 font-semibold">{phone}</p>
                                    ))}
                                  </div>
                                </div>
                              )}
                              
                              {location.additional && (
                                <div className="bg-gray-50 rounded-xl p-4 mt-4">
                                  <p className="text-sm text-gray-500 font-medium mb-2">Additional Contacts:</p>
                                  {location.additional.map((contact, contactIdx) => (
                                    <p key={contactIdx} className="text-sm text-gray-600">{contact}</p>
                                  ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        {idx < academy.locations.length - 1 && (
                          <div className="border-b border-gray-200 pt-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Enhanced Quick Contact CTA */}
        <div className="text-center mt-24">
          <Card className="max-w-5xl mx-auto border-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
            
            <CardContent className="relative p-12">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-4xl font-bold mb-6">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xl text-gray-300 mb-10 font-light">
                  Our admission counselors are ready to help you choose the perfect program for your future
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <a
                    href="tel:+919876543210"
                    className="group inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-2xl font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    Call Now
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="mailto:info@ajmaleducare.com"
                    className="group inline-flex items-center justify-center py-4 px-8 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-2xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                    Send Email
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
                </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection