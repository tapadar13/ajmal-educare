import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowRight,
  BookOpen,
  Trophy,
  Users,
  Target,
  Clock,
  Award,
  GraduationCap,
  UserCheck,
  FileText,
  MessageCircle,
  Brain,
  Zap,
  Star,
  Globe,
  School,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gray-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gray-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gray-100/30 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-20 lg:pt-8 lg:pb-8 pb-8 sm:pb-0">
        {/* Main Hero Content */}
        <div className="text-center mb-10 px-2 sm:px-0">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight tracking-tight px-2">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ajmal Educare
            </span>{" "}
            India Pvt Ltd
          </h3>

          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
            Academies designed to cater specific competitive examinations,
            providing targeted preparation with expert faculty and proven
            methodologies.
          </p>
        </div>

        {/* Academy Cards */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Ajmal Super 40 */}
          <Card className="overflow-hidden h-full flex flex-col min-h-[800px] border border-gray-200/80 shadow-sm">
            <CardHeader className="p-0">
              {/* Academy Badge */}
              <div className="px-6 pt-6 pb-1">
                <Badge className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-semibold transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-lg shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-lg after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-3xl px-4 py-2 ring-1 bg-blue-500 text-white ring-blue-500 border-0 gap-2">
                  <Target className="w-6 h-6" /> Ajmal Super 40
                </Badge>
              </div>

              {/* Title and Description */}
              <div className="px-6 pb-4">
                <CardTitle className="text-xl font-medium text-gray-900 mb-3 min-h-[64px] flex items-center">
                The Intelligent Choice for NEET & JEE Coaching
                </CardTitle>
                <div className="min-h-[80px]">
                  <p className="text-gray-600 leading-relaxed">
                    Elite program designed for top-performing students aspiring
                    for premier engineering and medical colleges with intensive
                    JEE & NEET preparation
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative h-64 overflow-hidden rounded-xl mx-4">
                  <Image
                    src="/images/ajmal-super-40.JPG"
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
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">
                    Intensive coaching for NEET & JEE
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FileText className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">
                    Regular mock tests & detailed analysis
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <UserCheck className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">Individual mentorship program</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Clock className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">24/7 doubt clearing sessions</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">
                    Scholarship opportunities for deserving students
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#D5F2FE] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <GraduationCap className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm">
                    Integrated coaching which includes board curriculum and NEET
                    & JEE
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pb-6 sm:pb-4">
              <Link
                href="https://ajmalsuper40.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-blue-500 text-white ring-blue-500 w-full py-3"
              >
                Learn More About Ajmal Super 40
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardFooter>
          </Card>

          {/* Ajmal IAS Academy */}
          <Card className="overflow-hidden h-full flex flex-col min-h-[800px] border border-gray-200/80 shadow-sm">
            <CardHeader className="p-0">
              {/* Academy Badge */}
              <div className="px-6 pt-6 pb-1">
                <Badge className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-semibold transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-lg shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-lg after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-3xl px-4 py-2 ring-1 bg-orange-500 text-white ring-orange-500 border-0 gap-2">
                  <School className="w-6 h-6" /> Ajmal IAS Academy
                </Badge>
              </div>

              {/* Title and Description */}
              <div className="px-6 pb-4">
                <CardTitle className="text-xl font-medium text-gray-900 mb-3 min-h-[64px] flex items-center">
                Premier institute for UPSC/IAS & APSC preparation in Assam
                </CardTitle>
                <div className="min-h-[80px]">
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive civil services preparation with proven track
                    record of successful candidates and guidance from
                    experienced civil servants
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
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Globe className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    360 degree coverage of UPSC CSE & APSC CCE Syllabus.
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    Nationally renowned faculties from Delhi and other parts of
                    India.
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <UserCheck className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    One to One mentorship and Individual Care.
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <MessageCircle className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    24*7 Doubt Clearance by our Expert Faculties.
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    Comprehensive Study material and Class Notes
                  </span>
                </div>
                <div className="flex items-center text-gray-700">
                  <div className="w-8 h-8 bg-[#FFF0E1] rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Users className="w-4 h-4 text-orange-600" />
                  </div>
                  <span className="text-sm">
                    Periodic interactive sessions with IAS, IPS, ACS Officers.
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="pb-6 sm:pb-4">
              <Link
                href="https://ajmaliasacademy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative isolate inline-flex items-center justify-center overflow-hidden text-left font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] before:duration-300 before:ease-[cubic-bezier(0.4,0.36,0,1)] before:transtion-opacity rounded-md shadow-[0_1px_theme(colors.white/0.07)_inset,0_1px_3px_theme(colors.gray.900/0.2)] before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:from-white/20 before:opacity-50 hover:before:opacity-100 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:from-white/10 after:from-[46%] after:to-[54%] after:mix-blend-overlay text-sm h-[1.875rem] px-3 ring-1 bg-orange-500 text-white ring-orange-500 w-full py-3"
              >
                Learn More About Ajmal IAS Academy
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
