'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const companies = [
  { name: "McKinsey", logo: "/logo-database/mckinsey-logo.svg" },
  { name: "Rappi", logo: "/logo-database/rappi-logo.svg" },
  { name: "UBS", logo: "/logo-database/ubs-logo.svg" },
  { name: "JP Morgan", logo: "/logo-database/jpmorgan-logo.svg" },
  { name: "Foodology", logo: "/logo-database/foodology-logo.svg" },
  { name: "Bain & Company", logo: "/logo-database/bain-logo.svg" },
  { name: "BCG", logo: "/logo-database/bcg-logo.svg" },
  { name: "Kearney", logo: "/placeholder.svg?height=80&width=200" },
]

export function FloatingLogos() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl text-center text-[#1618FF] font-bold mb-16">
          Built by experts from
        </h2>
        <div className="relative h-[200px] overflow-hidden">
          <div className="absolute w-full">
            <div className="flex gap-8 animate-float">
              {[...companies, ...companies].map((company, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 bg-white rounded-2xl shadow-sm px-8 py-6 w-[200px] h-[100px] flex items-center justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={160}
                    height={60}
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

