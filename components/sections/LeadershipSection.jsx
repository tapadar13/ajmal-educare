import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Abdur Rehman Ajmal",
      position: "Director",
      description: "Visionary leader with 20+ years in educational excellence and social service",
      image: "/images/leader1.jpg", // Placeholder
      company: "Pioneering educational excellence with decades of experience in institutional leadership and community development."
    },
    {
      name: "Abdul Hafeez Mohammed Sirajuddin Ajmal",
      position: "Director", 
      description: "Visionary leader with 20+ years in educational excellence and social service",
      image: "/images/leader2.jpg", // Placeholder
      company: "Dedicated to transforming education through innovative teaching methodologies and student-centered learning approaches."
    }
  ]

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            We bring a wealth of{' '}
            <span className="relative inline-block">
              <span className="bg-green-200 px-2 py-1 rounded border-2 border-green-300 border-dashed">
                experience
              </span>
            </span>
            <br />
            in educational excellence
          </h2>
          
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mt-8">
            Our philosophy is simple; nurture great minds and provide them
            <br />
            the guidance and support to achieve their fullest potential.
          </p>
        </div>

        {/* Team Grid - Centered for 2 cards */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
          {leaders.map((leader, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
              {/* Image Section */}
              <div className="aspect-square bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {leader.position}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {leader.company}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection