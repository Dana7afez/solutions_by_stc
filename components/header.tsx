"use client"

import { Globe } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Solutions by STC" 
              width={120}
              height={32}
              className="h-8 w-auto" 
            />
          </Link>

          {/* Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-8">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-purple-600 font-medium">Domains</NavigationMenuTrigger>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/features" className="text-gray-700 hover:text-purple-600 font-medium">
                    Features
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/pricing" className="text-gray-700 hover:text-purple-600 font-medium">
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/cloud-applications" className="text-gray-700 hover:text-purple-600 font-medium">
                    Cloud Applications
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/faqs"
                    className="text-purple-600 hover:text-purple-700 font-medium border-b-2 border-purple-600"
                  >
                    FAQs
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-purple-600 font-medium">
                  Support
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600">
              <Globe className="w-4 h-4 mr-2" />
              العربية
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-700 hover:text-purple-600">
              Login
            </Button>
            <Button size="sm" className="bg-pink-500 hover:bg-pink-600 text-white border border-pink-500">
              Register
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
