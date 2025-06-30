"use client"

import type React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Settings, CreditCard, Shield, RefreshCw, HelpCircle, AlertTriangle } from "lucide-react"

interface Category {
  id: string
  name: string
  icon: React.ReactNode
  count: number
  color: string
}

const categories: Category[] = [
  {
    id: "registration",
    name: "Domain Registration",
    icon: <Globe className="w-6 h-6" />,
    count: 5,
    color: "var(--color-info)",
  },
  {
    id: "technical",
    name: "Technical Questions",
    icon: <Settings className="w-6 h-6" />,
    count: 6,
    color: "var(--color-secondary)",
  },
  {
    id: "management",
    name: "Domain Management",
    icon: <Shield className="w-6 h-6" />,
    count: 7,
    color: "var(--color-success)",
  },
  {
    id: "eligibility",
    name: "Eligibility & Requirements",
    icon: <HelpCircle className="w-6 h-6" />,
    count: 3,
    color: "var(--color-warning)",
  },
  {
    id: "renewal",
    name: "Renewal & Expiration",
    icon: <RefreshCw className="w-6 h-6" />,
    count: 4,
    color: "var(--color-primary)",
  },
  {
    id: "payment",
    name: "Payment & Pricing",
    icon: <CreditCard className="w-6 h-6" />,
    count: 4,
    color: "var(--color-info)",
  },
  {
    id: "troubleshooting",
    name: "Troubleshooting",
    icon: <AlertTriangle className="w-6 h-6" />,
    count: 1,
    color: "var(--color-danger)",
  },
]

interface CategorySelectorProps {
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
}

export function CategorySelector({ selectedCategory, onCategoryChange }: CategorySelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
      {categories.map((category) => (
        <Card
          key={category.id}
          className={`category-card border-2 ${selectedCategory === category.id ? "active" : "border-gray-200"}`}
          onClick={() => onCategoryChange(category.id)}
        >
          <CardContent className="p-6 text-center">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {category.icon}
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
            <span
              className="text-sm px-3 py-1 rounded-full"
              style={{
                backgroundColor: `${category.color}15`,
                color: category.color,
              }}
            >
              {category.count} questions
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
