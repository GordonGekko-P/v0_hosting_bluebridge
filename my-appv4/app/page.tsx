'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Building2, Users, ShieldCheck, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ReviewsSection } from "@/components/reviews-section"
import { StatsSection } from "@/components/stats-section"

interface FormData {
  workerType: string
  numberOfEmployees: string
  language: string
  proficiencyLevel: string
  companyName: string
  contactName: string
  email: string
  phone: string
  additionalInfo: string
  errors: {
    [key: string]: string;
  };
}

const INITIAL_FORM_DATA: FormData = {
  workerType: '',
  numberOfEmployees: '',
  language: '',
  proficiencyLevel: '',
  companyName: '',
  contactName: '',
  email: '',
  phone: '',
  additionalInfo: '',
  errors: {},
}

export default function Home() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => {
      const newData = { ...prev, [field]: value };
      const newErrors = { ...prev.errors };
      
      if (field === 'email' && value && !value.includes('@')) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors[field];
      }

      return { ...newData, errors: newErrors };
    });
  }

  const handleNext = () => {
    const currentStepFields = {
      1: ['workerType'],
      2: ['numberOfEmployees'],
      3: ['language', 'proficiencyLevel'],
      4: ['companyName', 'contactName', 'email', 'phone']
    }[step];

    const newErrors: { [key: string]: string } = {};
    currentStepFields.forEach(field => {
      if (!formData[field as keyof FormData]) {
        newErrors[field] = 'This field is required';
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setFormData(prev => ({ ...prev, errors: { ...prev.errors, ...newErrors } }));
    } else if (step < 4) {
      setStep(step + 1);
    }
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#1618FF]/30 to-white overflow-hidden">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white"
            >
              Find the best <span className="text-[#1618FF]">blue-collar</span> labor force for your company's needs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl font-semibold text-white mt-4"
            >
              The world's first <span className="text-[#1618FF]">Blue Tech</span> company
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400"
            >
              Professional recruitment services connecting skilled international workers with employers worldwide
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-x-4"
            >
              <Button size="lg" className="bg-[#1618FF] hover:bg-[#1618FF]/90">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-2 text-[#1618FF]">Find Your Perfect Workforce in 4 Easy Steps</h2>
                <p className="text-gray-500">Tell us about your blue-collar staffing needs</p>
                <div className="mt-4 h-2 bg-gray-100 rounded-full">
                  <div 
                    className="h-full bg-[#1618FF] rounded-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold">What type of worker do you need?</h3>
                    <div className="space-y-2">
                      <Label htmlFor="workerType">Select worker type: *</Label>
                      <Select 
                        value={formData.workerType}
                        onValueChange={value => updateFormData('workerType', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select worker type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Construction Worker">Construction Worker</SelectItem>
                          <SelectItem value="Electrician">Electrician</SelectItem>
                          <SelectItem value="Plumber">Plumber</SelectItem>
                          <SelectItem value="Carpenter">Carpenter</SelectItem>
                          <SelectItem value="Welder">Welder</SelectItem>
                          <SelectItem value="Mechanic">Mechanic</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {formData.errors.workerType && (
                        <p className="text-red-500 text-sm">{formData.errors.workerType}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold">Number of employees needed</h3>
                    <div className="space-y-2">
                      <Label htmlFor="employees">Enter the number of employees: *</Label>
                      <Input
                        id="employees"
                        type="number"
                        min="1"
                        value={formData.numberOfEmployees}
                        onChange={(e) => updateFormData('numberOfEmployees', e.target.value)}
                        className="text-lg"
                      />
                      {formData.errors.numberOfEmployees && (
                        <p className="text-red-500 text-sm">{formData.errors.numberOfEmployees}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold">Language Requirements</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Required Language: *</Label>
                        <Select 
                          value={formData.language}
                          onValueChange={value => updateFormData('language', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="English">English</SelectItem>
                            <SelectItem value="German">German</SelectItem>
                            <SelectItem value="Spanish">Spanish</SelectItem>
                            <SelectItem value="Portuguese">Portuguese</SelectItem>
                            <SelectItem value="French">French</SelectItem>
                            <SelectItem value="Arabic">Arabic</SelectItem>
                            <SelectItem value="Chinese">Chinese</SelectItem>
                            <SelectItem value="Dutch">Dutch</SelectItem>
                            <SelectItem value="Hindi">Hindi</SelectItem>
                            <SelectItem value="Italian">Italian</SelectItem>
                            <SelectItem value="Japanese">Japanese</SelectItem>
                            <SelectItem value="Korean">Korean</SelectItem>
                            <SelectItem value="Russian">Russian</SelectItem>
                            <SelectItem value="Swedish">Swedish</SelectItem>
                            <SelectItem value="Turkish">Turkish</SelectItem>
                          </SelectContent>
                        </Select>
                        {formData.errors.language && (
                          <p className="text-red-500 text-sm">{formData.errors.language}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label>Proficiency Level: *</Label>
                        <Select 
                          value={formData.proficiencyLevel}
                          onValueChange={value => updateFormData('proficiencyLevel', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                          <SelectContent>
                            {['A1', 'A2', 'B1', 'B2', 'C1'].map((level) => (
                              <SelectItem key={level} value={level}>
                                {level}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {formData.errors.proficiencyLevel && (
                          <p className="text-red-500 text-sm">{formData.errors.proficiencyLevel}</p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-semibold">Company and Contact Information</h3>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="companyName">Company Name: *</Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => updateFormData('companyName', e.target.value)}
                        />
                        {formData.errors.companyName && (
                          <p className="text-red-500 text-sm">{formData.errors.companyName}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contactName">Contact Name: *</Label>
                        <Input
                          id="contactName"
                          value={formData.contactName}
                          onChange={(e) => updateFormData('contactName', e.target.value)}
                        />
                        {formData.errors.contactName && (
                          <p className="text-red-500 text-sm">{formData.errors.contactName}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address: *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateFormData('email', e.target.value)}
                        />
                        {formData.errors.email && (
                          <p className="text-red-500 text-sm">{formData.errors.email}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number: *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => updateFormData('phone', e.target.value)}
                        />
                        {formData.errors.phone && (
                          <p className="text-red-500 text-sm">{formData.errors.phone}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information (Optional):</Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                          rows={4}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={step === 1}
                >
                  Previous
                </Button>
                {step < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (step === 1 && !formData.workerType) ||
                      (step === 2 && !formData.numberOfEmployees) ||
                      (step === 3 && (!formData.language || !formData.proficiencyLevel))
                    }
                  >
                    Next
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={Object.keys(formData.errors).length > 0 || !formData.companyName || !formData.contactName || !formData.email || !formData.phone}
                    className="bg-[#1618FF] hover:bg-[#1618FF]/90"
                  >
                    Submit
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1618FF]">Our recruitment services include:</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: "Talent Selection",
                description: "Hire the best blue-collar talent from Colombia, Brazil and other countries in LatAm."
              },
              {
                icon: Users,
                title: "Recruitment Flexibility",
                description: "We tailor our education and up-skilling processes to meet your specific company needs."
              },
              {
                icon: ShieldCheck,
                title: "Regulatory Compliance",
                description: "We take great care in adhering to local and international laws to facilitate a smooth relocation process."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <service.icon className="h-12 w-12 text-[#1618FF]" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-gray-500">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 md:px-6 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1618FF]">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                question: "What types of workers can you provide?",
                answer: "We specialize in placing skilled blue-collar workers including construction workers, electricians, plumbers, welders, and more."
              },
              {
                question: "How long does the recruitment process take?",
                answer: "The typical recruitment process takes 4-6 weeks from initial contact to worker placement."
              },
              {
                question: "Do you handle visa and work permits?",
                answer: "Yes, we provide full support with visa applications and work permits as part of our service."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1618FF]">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to find your perfect workforce?
            </h2>
            <Button size="lg" variant="secondary" className="bg-white text-[#1618FF] hover:bg-gray-100">
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

