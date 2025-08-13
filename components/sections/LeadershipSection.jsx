import Image from 'next/image'
import { ShineBorder } from '@/components/magicui/shine-border'

const LeadershipSection = () => {
  const leaders = [
    {
      name: "Abdur Rehman Ajmal",
      position: "Director",
      image: "/images/leadership-team/abdur-rehman-ajmal.webp",
    },
    {
      name: "Abdul Hafeez Ajmal",
      position: "Director",
      image: "/images/leadership-team/abdul-hafeez-ajmal.webp",
    },
    {
      name: "Abdul Kadir",
      position: "General Manager",
      image: "/images/leadership-team/abdul-kadir.webp",
    },
  ]

  return (
    <section id="leadership" className="pt-8 lg:pt-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Leadership Team</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who guide our institution towards excellence and innovation in education.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {leaders.map((leader, index) => (
            <div key={index} className="relative rounded-2xl">
              <ShineBorder className="rounded-[inherit] z-10 opacity-90" borderWidth={2} duration={16} shineColor={["#60A5FA", "#C084FC", "#60A5FA"]} />
              <div className="relative z-0 rounded-[inherit] bg-white shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 mb-6">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    sizes="128px"
                    className="rounded-full object-cover"
                    priority={index < 2}
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{leader.name}</h3>
                <p className="text-sm text-purple-700 mt-1">{leader.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LeadershipSection