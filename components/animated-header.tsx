"use client"

import { Globe, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getAssetPath } from "@/lib/assets"

export function AnimatedHeader() {
  return (
    <header className="w-full bg-white border-b border-gray-100 navbar-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src={getAssetPath("logo.svg")} 
              alt="Solutions by STC" 
              width={120}
              height={32}
              className="h-8 w-auto" 
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="nav-item flex items-center space-x-1">
              <span>Domains</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <Link href="/features" className="nav-item">
              Features
            </Link>
            <Link href="/pricing" className="nav-item">
              Pricing
            </Link>
            <Link href="/cloud-applications" className="nav-item">
              Cloud Applications
            </Link>
            <Link href="/faqs" className="nav-item nav-item-active">
              FAQs
            </Link>
            <div className="nav-item flex items-center space-x-1">
              <span>Support</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </nav>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600">
              <Globe className="w-4 h-4 mr-2" />
              العربية
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700">
              Login
            </Button>
            <Button
              size="sm"
              className="text-white border rounded-lg px-6 py-2"
              style={{
                backgroundColor: "var(--color-primary)",
                borderColor: "var(--color-primary)",
              }}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
