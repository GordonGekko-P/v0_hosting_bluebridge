import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-16">
          <Image 
            src="/logo-database/bluebridge-logo.svg" 
            alt="BlueBridge" 
            width={120} 
            height={25} 
            className="invert"
          />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 w-full">
            <Link 
              href="https://linkedin.com" 
              className="flex items-center group text-gray-600 hover:text-[#1618FF] transition-colors"
            >
              <span className="mr-2">LinkedIn</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="https://twitter.com" 
              className="flex items-center group text-gray-600 hover:text-[#1618FF] transition-colors"
            >
              <span className="mr-2">Twitter</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="mailto:info@bluebridgellc.org" 
              className="flex items-center group text-gray-600 hover:text-[#1618FF] transition-colors"
            >
              <span className="mr-2">info@bluebridgellc.org</span>
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="text-center space-y-2 text-gray-600">
            <p>BlueBridge LLC © {new Date().getFullYear()}</p>
            <p>Carrera 9 #77-67</p>
            <p>Bogotá</p>
            <p>Colombia</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

