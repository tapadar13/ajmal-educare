import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calendar, ArrowRight, Play } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { AnimatedList } from "@/components/magicui/animated-list"
import { useEffect, useLayoutEffect, useRef, useState } from 'react'

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
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60 mb-2">
            {description}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {date.day} {date.month}
            </div>
            <span>{time}</span>
          </div>
        </div>
      </div>
    </figure>
  );
};

const NewsSection = () => {
  const [eventsRef, hasEventsBeenInView] = useInView({ threshold: 0.3 })
  const firstNewsRef = useRef(null)
  const secondNewsRef = useRef(null)
  const [rightPanelHeight, setRightPanelHeight] = useState(null)

  // Measure combined height of the two left news cards to fix the right panel height on large screens
  useLayoutEffect(() => {
    const GAP_PX = 32 // Tailwind gap-8 at lg breakpoint

    const recalc = () => {
      if (typeof window === 'undefined') return
      const isLarge = window.innerWidth >= 1024
      if (isLarge && firstNewsRef.current && secondNewsRef.current) {
        const h1 = firstNewsRef.current.getBoundingClientRect().height || 0
        const h2 = secondNewsRef.current.getBoundingClientRect().height || 0
        setRightPanelHeight(h1 + h2 + GAP_PX)
      } else {
        setRightPanelHeight(null)
      }
    }

    recalc()
    window.addEventListener('resize', recalc)
    return () => window.removeEventListener('resize', recalc)
  }, [])

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
      title: "News18 Documentary",
      thumbnail: "/images/updated-news-media/news18-documentary.jpg"
    },
    {
      type: "video",
      title: "DY365",
      thumbnail: "/images/updated-news-media/dy365-digital.jpg"
    },
    {
      type: "video",
      title: "Monuwar Zama YT",
      thumbnail: "/images/updated-news-media/english-house.jpg"
    },
    {
      type: "video",
      title: "NEWS18 Northeast",
      thumbnail: "/images/updated-news-media/news18-ias-academy.jpg"
    }
  ]

  const videoLinks = [
    "https://www.youtube.com/watch?v=5WqX-WB0BbM",
    "https://www.facebook.com/watch/live/?extid=CL-UNK-UNK-UNK-AN_GK0T-GK1C&mibextid=Nif5oz&ref=watch_permalink&v=2062011300809689",
    "https://www.youtube.com/watch?v=AYbgKG7Blag",
    "https://www.youtube.com/watch?v=GREbaiOIC3A",
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

  // Autoplay for News & Media carousel
  const [carouselApi, setCarouselApi] = useState(null)
  useEffect(() => {
    if (!carouselApi) return
    const intervalId = setInterval(() => {
      try {
        carouselApi.scrollNext()
      } catch (_) {}
    }, 4000) // 4s interval
    return () => clearInterval(intervalId)
  }, [carouselApi])

  return (
    <>
      {/* Latest News & Updates Section */}
      <section id="news" className="py-12 sm:py-20 lg:py-16 bg-white">
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

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* First News Item */}
            <div className="lg:col-span-2" ref={firstNewsRef}>
              {newsItems[0] && (
                <Card className="group hover:border-gray-300 transition-all duration-300 border-1 border-gray-200 bg-white overflow-hidden rounded-xl p-0 py-0 gap-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image */}
                      <div className="md:w-1/3 h-64 md:h-auto bg-gray-50 overflow-hidden">
                        <img 
                          src={newsItems[0].image} 
                          alt={newsItems[0].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Content */}
                      <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {newsItems[0].date}
                            </div>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {newsItems[0].title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {newsItems[0].description}
                          </p>
                        </div>
                        <p className="flex items-center justify-between text-blue-500 p-0 h-auto font-semibold group self-start">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Upcoming Events spans two rows - Hidden on mobile and medium screens */}
            <div ref={eventsRef} className="hidden lg:block lg:row-span-2 h-full" style={{ height: rightPanelHeight ? `${rightPanelHeight}px` : 'auto' }}>
              <Card className="border-2 border-gray-200 bg-white sticky top-8 rounded-xl h-full shadow-none">
                <CardContent className="px-4 py-2 h-full flex flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mr-3">
                      <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Upcoming Events</h3>
                  </div>
                  <div className="relative flex flex-1 w-full flex-col min-h-0 overflow-y-auto">
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
                  </div>
                  <Button variant="outline" className="w-full mt-3">
                    View All Events
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Second News Item */}
            <div className="lg:col-span-2" ref={secondNewsRef}>
              {newsItems[1] && (
                <Card className="group hover:border-gray-300 transition-all duration-300 border-2 border-gray-200 bg-white overflow-hidden rounded-xl p-0 py-0 gap-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row h-full">
                      {/* Image */}
                      <div className="md:w-1/3 h-64 md:h-auto bg-gray-50 overflow-hidden">
                        <img 
                          src={newsItems[1].image} 
                          alt={newsItems[1].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Content */}
                      <div className="md:w-2/3 p-6 lg:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar className="w-4 h-4 mr-2" />
                              {newsItems[1].date}
                            </div>
                          </div>
                          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {newsItems[1].title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed mb-6">
                            {newsItems[1].description}
                          </p>
                        </div>
                        <p className="flex items-center justify-betweentext-blue-500 p-0 h-auto font-semibold group self-start">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* News & Media Section */}
      <section className="py-12 sm:py-20 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                LIST OF{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NEWS & MEDIA
                </span>
              </h2>
            </div>

          <div className="relative max-w-7xl mx-auto">
            <Carousel className="w-full px-12" opts={{ loop: true }} setApi={setCarouselApi}>
              <CarouselContent className="py-3">
                {videos.map((item, index) => (
                  <CarouselItem key={index} className={cn("basis-full sm:basis-1/2 lg:basis-1/3")}> 
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <Card className="group hover:border-gray-300 transition-all duration-300 border-2 border-gray-200 bg-white overflow-hidden rounded-xl p-0 py-0 gap-0 shadow-none">
                        <CardContent className="p-0">
                          <div className="relative aspect-video bg-gray-100 overflow-hidden">
                            {/* Fallback background for missing images (beneath) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 z-0" />
                            {/* Video thumbnail image */}
                            <div 
                              className="absolute inset-0 bg-cover bg-center z-10"
                              style={{
                                backgroundImage: `url("${item.thumbnail}")`,
                              }}
                            />
                            {/* Dark overlay above image */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300 z-20" />
                            {/* Play button overlay (topmost) */}
                            <div className="absolute inset-0 flex items-center justify-center z-30">
                              <div className="w-16 h-16 bg-black/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 text-white ml-1" />
                              </div>
                            </div>
                          </div>
                          {null}
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