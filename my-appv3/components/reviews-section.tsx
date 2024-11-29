import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "@heroicons/react/24/solid";

const floatAnimation = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const reviews = [
  {
    id: 1,
    rating: 4.5,
    text: "This is an amazing product! I highly recommend it.",
    name: "John Doe",
    company: "Acme Corp",
  },
  {
    id: 2,
    rating: 5,
    text: "I love this product! It's so easy to use and it works perfectly.",
    name: "Jane Doe",
    company: "Example Inc",
  },
  {
    id: 3,
    rating: 4,
    text: "This is a great product. It's a little pricey, but it's worth it.",
    name: "Peter Jones",
    company: "XYZ Company",
  },
  {
    id: 4,
    rating: 3.5,
    text: "This product is okay. It's not the best, but it's not the worst.",
    name: "Mary Smith",
    company: "ABC Company",
  },
];


export function ReviewsSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1618FF]">What our clients say</h2>
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex animate-float"
            variants={floatAnimation}
            animate="animate"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <Card key={index} className="flex-shrink-0 w-[300px] mx-3">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= review.rating
                              ? "text-[#1618FF] fill-[#1618FF]"
                              : star - 0.5 <= review.rating
                              ? "text-[#1618FF] fill-[#1618FF] half-star"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"{review.text}"</p>
                    <div>
                      <p className="font-semibold">{review.name}</p>
                      <p className="text-sm text-gray-500">{review.company}</p>
                    </div>
                  </CardContent>
                </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

