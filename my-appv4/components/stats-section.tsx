'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Server, TrendingDown, TrendingUp, Users, Heart } from 'lucide-react'

export function StatsSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        {/* Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "Data Protection",
              description: "Fully compliant with international standards"
            },
            {
              icon: Lock,
              title: "Secure Process",
              description: "End-to-end encrypted recruitment"
            },
            {
              icon: Server,
              title: "Global Infrastructure",
              description: "Servers in US and EU for optimal compliance"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="p-3 rounded-full bg-[#1618FF]/10">
                <feature.icon className="h-6 w-6 text-[#1618FF]" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Title */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tight"
          >
            Our Track Record Speaks for Itself
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-500 max-w-3xl mx-auto"
          >
            We help companies optimize their workforce while maintaining high standards of quality and satisfaction
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="bg-[#1618FF] rounded-3xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: TrendingDown,
                stat: "-30%",
                label: "Operational Costs"
              },
              {
                icon: TrendingUp,
                stat: "+50%",
                label: "Efficiency Increase per Employee"
              },
              {
                icon: Users,
                stat: "5%",
                label: "Churn Rate"
              },
              {
                icon: Heart,
                stat: "95%",
                label: "Customer Satisfaction"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white space-y-4"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4" />
                <div className="text-5xl font-bold tracking-tight">
                  {stat.stat}
                </div>
                <p className="text-blue-100">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

