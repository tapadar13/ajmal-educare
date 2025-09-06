"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Check, Star, Target, Users, Book, Trophy } from 'lucide-react'

export default function PaymentsPage() {
  const plans = [
    {
      id: 'super40',
      name: 'Ajmal Super 40',
      subtitle: 'The Intelligent Choice for NEET & JEE Coaching',
      price: '₹85,000',
      originalPrice: '₹1,20,000',
      duration: '/year',
      badge: 'Popular',
      badgeColor: 'bg-blue-500',
      description: 'Elite program designed for top-performing students aspiring for premier engineering and medical colleges with intensive JEE & NEET preparation',
      features: [
        'Intensive JEE & NEET Preparation',
        'Expert Faculty with 15+ years experience',
        'Small batch size (Max 40 students)',
        'Daily practice sessions',
        'Weekly mock tests',
        'Doubt clearing sessions',
        'Study materials included',
        'Performance tracking',
        'Scholarship opportunities',
        '24/7 learning support'
      ],
      icon: Target,
      highlight: true
    },
    {
      id: 'ias',
      name: 'Ajmal IAS Academy',
      subtitle: 'Premier institute for UPSC/IAS & APSC preparation',
      price: '₹65,000',
      originalPrice: '₹95,000',
      duration: '/year',
      badge: 'Recommended',
      badgeColor: 'bg-orange-500',
      description: 'Comprehensive civil services preparation with proven track record of successful candidates and guidance from experienced civil servants',
      features: [
        'Complete UPSC/IAS syllabus coverage',
        'APSC preparation included',
        'Experienced civil servants as mentors',
        'Current affairs updates',
        'Answer writing practice',
        'Interview preparation',
        'Personality development',
        'Optional subject coaching',
        'Study materials & notes',
        'Previous year papers analysis'
      ],
      icon: Trophy,
      highlight: false
    }
  ]

  const handleEnrollment = (planId) => {
    // This would typically integrate with a payment gateway
    console.log(`Enrolling in plan: ${planId}`)
    alert(`Enrollment process for ${planId} would start here!`)
  }

  return (
    <>
      <div className="bg-background min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Path to 
                <span className="bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent"> Success</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Invest in your future with our premium coaching programs designed to unlock your potential
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>1000+ Success Stories</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Book className="w-5 h-5" />
                  <span>Expert Faculty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {plans.map((plan) => {
                const IconComponent = plan.icon
                return (
                  <Card 
                    key={plan.id} 
                    className={`relative p-8 ${
                      plan.highlight 
                        ? 'border-2 border-blue-500 shadow-xl scale-105' 
                        : 'border border-gray-200 shadow-lg'
                    } transition-all duration-300 hover:shadow-2xl`}
                  >
                    {/* Badge */}
                    {plan.badge && (
                      <Badge className={`absolute -top-3 left-8 ${plan.badgeColor} text-white px-3 py-1`}>
                        {plan.badge}
                      </Badge>
                    )}

                    {/* Header */}
                    <div className="text-center mb-8">
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                        plan.highlight ? 'bg-blue-100' : 'bg-orange-100'
                      }`}>
                        <IconComponent className={`w-8 h-8 ${
                          plan.highlight ? 'text-blue-600' : 'text-orange-600'
                        }`} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                      <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
                      
                      {/* Pricing */}
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                        <span className="text-gray-500">{plan.duration}</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                        <Badge variant="secondary" className="text-green-600 bg-green-100">
                          Save {Math.round((1 - parseInt(plan.price.replace(/[₹,]/g, '')) / parseInt(plan.originalPrice.replace(/[₹,]/g, ''))) * 100)}%
                        </Badge>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      onClick={() => handleEnrollment(plan.id)}
                      className={`w-full py-3 text-lg font-semibold transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-blue-600 hover:bg-blue-700 text-white'
                          : 'bg-orange-600 hover:bg-orange-700 text-white'
                      }`}
                    >
                      Enroll Now
                    </Button>

                    {/* Additional Info */}
                    <p className="text-center text-sm text-gray-500 mt-4">
                      ✨ Limited seats available • 🎓 Certificate included
                    </p>
                  </Card>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Still Have Questions?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our education counselors are here to help you choose the right program for your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                    Schedule a Call
                  </Button>
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                    Contact Admissions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
