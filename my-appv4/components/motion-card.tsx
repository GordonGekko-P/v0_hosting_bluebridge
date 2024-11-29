'use client'

import { motion } from 'framer-motion'
import { Card, CardProps } from '@/components/ui/card'

interface MotionCardProps extends CardProps {
  delay?: number
}

export function MotionCard({ children, className, delay = 0, ...props }: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className={`h-full hover:shadow-lg transition-shadow duration-300 ${className}`} {...props}>
        {children}
      </Card>
    </motion.div>
  )
}

