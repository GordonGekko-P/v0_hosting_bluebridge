'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import 'mapbox-gl/dist/mapbox-gl.css'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Globe } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// Import the WorkforceForm component
import { WorkforceForm } from '@/components/workforce-form'


const OFFICE_LOCATION = {
  latitude: 4.6697,
  longitude: -74.0518,
  zoom: 15
}

export default function ContactPage() {

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
              Get in Touch with{" "}
              <span className="text-[#1618FF]">BlueBridge</span>
            </h1>
            <p className="max-w-[700px] text-xl text-gray-500 md:text-2xl dark:text-gray-400">
              Ready to transform your workforce? We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <WorkforceForm />

      {/* Contact Info Section */}
<section className="py-16 bg-gray-50">
  <div className="container px-4 md:px-6">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-[#1618FF] mb-8">Our Contact Info</h2>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-[#1618FF]/10">
            <MapPin className="h-6 w-6 text-[#1618FF]" />
          </div>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600">Carrera 9 #77-67 Bogotá, Colombia</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-[#1618FF]/10">
            <Phone className="h-6 w-6 text-[#1618FF]" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">+57 321 239 9831</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-[#1618FF]/10">
            <Mail className="h-6 w-6 text-[#1618FF]" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <p className="text-gray-600">info@bluebridgellc.org</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="p-3 rounded-full bg-[#1618FF]/10">
            <Globe className="h-6 w-6 text-[#1618FF]" />
          </div>
          <div>
            <p className="font-medium">Website</p>
            <p className="text-gray-600">bluebridgellc.org</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

