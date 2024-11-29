import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#1618FF]">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo-database/bluebridge-logo.svg" 
              alt="BlueBridge" 
              width={140} 
              height={30} 
              className="invert"
            />
          </Link>
          <nav className="flex gap-10">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Our Offering", "/offering"],
              ["Contact Us", "/contact"]
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className={`text-base font-medium text-white transition-colors hover:text-blue-100/80 ${
                  href === '/about' ? 'font-bold' : ''
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button 
            variant="secondary" 
            className="bg-white text-[#1618FF] hover:bg-gray-100"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  )
}

