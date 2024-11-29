'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Microscope, Users, GraduationCap, Network, FileCheck, Trophy } from 'lucide-react'

export default function OfferingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#1618FF]/30 to-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center space-y-8 text-center"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="text-white">Building</span> <span className="text-[#1618FF]">Bridges</span>
            </h1>
            <p className="text-xl text-gray-500 md:text-2xl max-w-[800px]">
              From Latin America to Europe, the USA, and Beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Experts</h2>
                <p className="text-gray-600">
                  Our talent holds top degrees that Latin America has to offer and years of experience, handpicked after an <span className="font-bold text-[#1618FF]">intense selection process</span>.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Culture Fit</h2>
                <p className="text-gray-600">
                  We offer <span className="font-bold text-[#1618FF]">tailormade training</span> for the European market with client specific details on work culture.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Language</h2>
                <p className="text-gray-600">
                  Every talent is learning the specific language required at Latin America's <span className="font-bold text-[#1618FF]">best language school</span>.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/placeholder.svg?height=1200&width=800"
                alt="BlueBridge services"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <p className="text-gray-500">We offer this by...</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Leveraging and Optimizing our <span className="text-[#1618FF]">Proven End-to-End Process</span>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Network",
                description: "Close relationship to embassies, government labor entities and federal foreign offices, helping in complex relocation process.",
                icon: Network,
              },
              {
                title: "End-to-end",
                description: "We take care of relocation process from selection to start in your country",
                icon: FileCheck,
              },
              {
                title: "Track Record",
                description: "Thanks to the BlueBridge system, 200x highly skilled electricians could already be placed at a leading German industry player",
                icon: Trophy,
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center h-full">
                    <item.icon className="w-12 h-12 mb-4 text-[#1618FF]" />
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 flex-grow">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-[#1618FF] hover:bg-[#1618FF]/90">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

