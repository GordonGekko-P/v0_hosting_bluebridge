'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FloatingLogos } from "@/components/floating-logos"

export default function AboutPage() {
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
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Connecting Worlds to{" "}
              <span className="text-[#1618FF]">Bridge</span>{" "}
              the Global Labor Shortage
            </h1>
            <p className="max-w-[900px] text-xl text-gray-500 md:text-2xl dark:text-gray-400">
              BlueBridge is far more than a traditional recruiting firm. We provide comprehensive, scalable solutions that go beyond simply placing talent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-[#1618FF]">Our Mission</h2>
              <p className="text-xl text-gray-600">
                To bridge the global labor shortage by connecting skilled international workers with employers worldwide, ensuring our talent is culturally prepared and language proficient.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6 flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-[#1618FF]">Our Vision</h2>
              <p className="text-xl text-gray-600">
                To become the global leader in revolutionizing international recruitment, connecting skilled workers with employers worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section with Floating Logos */}
      <FloatingLogos />

      {/* CTA Section */}
      <section className="py-20 bg-[#1618FF]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to scale your business with a consolidated workforce?
            </h2>
            <Button size="lg" variant="secondary" className="bg-white text-[#1618FF] hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

