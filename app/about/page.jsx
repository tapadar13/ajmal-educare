"use client";

import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Image from 'next/image'
import { Award, MessageSquare, BookOpen, Heart, ClipboardList } from 'lucide-react'
import { ShineBorder } from '@/components/magicui/shine-border'

function GradientIcon({ Icon, id }) {
  return (
    <Icon className="w-5 h-5" stroke={`url(#${id})`}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="relative bg-gray-50">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">About Ajmal Educare</h1>
              <p className="text-lg sm:text-xl text-gray-700">Learn more about our organization and initiatives.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


