import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight, Play, Clock, Award } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AnimatedList } from "@/components/magicui/animated-list"
import { useEffect, useRef, useState } from 'react'

// Custom hook to detect when element is in view
const useInView = (options = {}) => {
  const [isInView, setIsInView] = useState(false)
  const [hasBeenInView, setHasBeenInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true)
        if (!hasBeenInView) {
          setHasBeenInView(true)
        }
      } else {
        setIsInView(false)
      }
    }, {
      threshold: 0.3,
      ...options
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [hasBeenInView, options])

  return [ref, isInView, hasBeenInView]
}

// Event notification component for animated list
const EventNotification = ({ title, description, icon, color, time, date }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[102%]",
        // light styles
        "bg-gray-50 border border-gray-100 hover:border-gray-200",
        // dark styles
        "dark:bg-gray-900 dark:border-gray-800",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{title}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-1">
            <Calendar className="w-3 h-3 mr-1" />
            {date.day} {date.month}
          </div>
        </div>
      </div>
    </figure>
  );
};

const NewsSection = () => {
  const [eventsRef, hasEventsBeenInView] = useInView({ threshold: 0.3 })

  const newsItems = [
    {
      type: "Achievement",
      date: "January 15, 2024",
      title: "Record-Breaking JEE Results 2024",
      description: "Our students secured top 100 ranks with 98% success rate in JEE Advanced, marking our best performance yet.",
      image: "/images/updates/engineers.jpg",
      badge: "Latest Achievement"
    },
    {
      type: "Achievement", 
      date: "January 12, 2024",
      title: "Outstanding NEET 2024 Performance",
      description: "Celebrating exceptional NEET results with multiple students securing admission to premier medical colleges across the nation.",
      image: "/images/updates/doctors.JPG", 
      badge: "Medical Success"
    }
  ]

  const mediaItems = [
    {
      type: "video",
      title: "Producing Doctors at Ajmal Super 40",
    },
    {
      type: "video",
      title: "Real Environment at Ajmal Super 40", 
      thumbnail: "/images/video2-thumb.jpg"
    },
    {
      type: "video",
      title: "Mock Interview at Ajmal IAS Academy",
      thumbnail: "/images/video3-thumb.jpg"
    },
    {
      type: "video",
      title: "Ajmal IAS Academy",
      thumbnail: "/images/video4-thumb.jpg"
    },
    {
      type: "video",
      title: "Ajmal Video",
      thumbnail: "/images/video5-thumb.jpg"
    }
  ]

  const videoLinks = [
    "https://www.facebook.com/watch/live/?ref=watch_permalink&v=593685266942443&rdid=a7UTygcAx4T9s8Ye",
    "https://www.youtube.com/watch?v=5WqX-WB0BbM",
    "https://www.facebook.com/watch/live/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=Nif5oz&ref=watch_permalink&v=2062011300809689",
    "https://www.youtube.com/watch?v=eDBroGiI_Ps",
    "https://www.youtube.com/watch?v=AYbgKG7Blag",
  ]

  const videos = videoLinks.map((url, index) => ({
    ...mediaItems[index],
    title: mediaItems[index]?.title || `Video ${index + 1}`,
    description: mediaItems[index]?.description || "",
    url,
  }))

  const upcomingEvents = [
    {
      date: { day: "25", month: "AUG" },
      title: "Mock Test Series Launch",
      description: "Comprehensive mock test series for JEE and NEET aspirants",
      time: "10:00 AM",
      icon: "📝",
      color: "#1E86FF"
    },
    {
      date: { day: "02", month: "SEP" },
      title: "Parent-Teacher Meeting", 
      description: "Quarterly progress review and guidance session",
      time: "2:00 PM",
      icon: "👥",
      color: "#FFB800"
    },
    {
      date: { day: "15", month: "NOV" },
      title: "Career Counseling Workshop",
      description: "Expert guidance on career paths after competitive exams",
      time: "11:00 AM",
      icon: "💼",
      color: "#00C9A7"
    }
  ]

  return (
    <>
      {/* Latest News & Updates Section */}
      <section id="news" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-8">
              📰 Latest News & Updates
            </Badge>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Stay Updated with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Our Journey
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Keep track of our latest achievements, upcoming events, and important announcements 
              that shape our educational community.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* News Items */}
            <div className="lg:col-span-2 space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="group hover:border-gray-300 transition-all duration-300 border border-gray-200 bg-white overflow-hidden rounded-xl">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image */}
                      <div className="md:w-1/3 h-64 md:h-auto bg-gray-50 relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                      </div>
                      
                      {/* Content */}
                      <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            <Badge className="bg-gray-100 text-gray-700 border-0 rounded-lg px-3 py-1 text-xs font-medium mr-3">
                              {item.type}
                            </Badge>
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {item.date}
                            </div>
                          </div>
                          
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {item.description}
                          </p>
                        </div>
                        
                        <Button variant="ghost" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 p-0 h-auto font-semibold group self-start">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Upcoming Events */}
            <div ref={eventsRef}>
              <Card className="border border-gray-200 bg-white sticky top-8 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                  </div>
                  
                  <div className="relative flex h-[400px] w-full flex-col overflow-hidden">
                    {hasEventsBeenInView ? (
                      <AnimatedList delay={1000}>
                        {upcomingEvents.map((event, idx) => (
                          <EventNotification {...event} key={idx} />
                        ))}
                      </AnimatedList>
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-gray-400 text-center">
                          <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm">Scroll to see upcoming events</p>
                        </div>
                      </div>
                    )}
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white"></div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 rounded-lg">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* News & Media Section */}
      <section className="py-20 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-8">
              <Badge className="mb-8">
                🎬 A glimpse into our institute
              </Badge>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                LIST OF NEWS &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  MEDIA
                </span>
              </h2>
            </div>

          <div className="relative max-w-7xl mx-auto">
            <Carousel className="w-full px-12" opts={{ loop: true }}>
              <CarouselContent className="py-3">
                {videos.map((item, index) => (
                  <CarouselItem key={index} className={cn("basis-full sm:basis-1/2 lg:basis-1/3")}> 
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:border-gray-300 transition-all duration-300 border border-gray-200 bg-white overflow-hidden rounded-xl">
                        <CardContent className="p-0">
                          <div className="relative aspect-video bg-gray-100 overflow-hidden">
                            {/* Video thumbnail image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center"
                              style={{
                                backgroundImage: `url(${item.thumbnail})`,
                              }}
                            />
                            {/* Fallback background for missing images */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100" />
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-gray-900 text-center line-clamp-2 min-h-[3rem] flex items-center justify-center">
                              {item.title}
                            </h4>
                          </div>
                        </CardContent>
                      </Card>
                    </a>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default NewsSection