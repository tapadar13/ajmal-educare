import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Enhanced Dotted Pattern Background */}
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="#d1d5db" opacity="0.4"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)"/>
        </svg>
      </div>
      
      {/* Subtle decorative circles */}
      <div className="absolute top-20 left-20 w-24 h-24 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 right-20 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-10 w-16 h-16 border border-gray-200 rounded-full opacity-30"></div>
      <div className="absolute top-1/4 right-1/3 w-12 h-12 border border-gray-200 rounded-full opacity-30"></div>
      
      <div className="relative py-20 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Begin Your{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Success Journey?</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">
              Join thousands of successful students who have achieved their dreams with 
              our proven methodologies and expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="/contact"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-12 px-6 ring-1 bg-gray-900 text-white ring-gray-900"
              >
                <Phone className="w-5 h-5 mr-3" />
                TALK TO OUR COUNSELLING EXPERTS
                <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="/contact"
                className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-6 py-3 text-sm font-medium rounded-md transition-all duration-300 group inline-flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                Chat with Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection