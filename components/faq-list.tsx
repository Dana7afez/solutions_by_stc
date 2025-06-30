"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQ {
  question: string
  answer: string
}

interface FAQListProps {
  faqs: FAQ[]
  categoryName: string
}

export function FAQList({ faqs, categoryName }: FAQListProps) {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set([0]))

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
        <span
          className="ml-4 px-3 py-1 rounded-full text-sm"
          style={{
            backgroundColor: "var(--color-info)15",
            color: "var(--color-info)",
          }}
        >
          {faqs.length} questions
        </span>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="faq-item border border-gray-200">
            <CardContent className="p-0">
              <button
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {expandedItems.has(index) ? (
                  <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-info)" }} />
                ) : (
                  <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: "var(--color-info)" }} />
                )}
              </button>
              {expandedItems.has(index) && (
                <div className="px-6 pb-6">
                  <div
                    className="text-gray-700 leading-relaxed whitespace-pre-line border-l-4 pl-4"
                    style={{ borderColor: "var(--color-info)" }}
                  >
                    {faq.answer}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
