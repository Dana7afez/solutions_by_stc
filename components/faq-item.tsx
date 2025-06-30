"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FAQItemProps {
  question: string
  answer: string
  isOpen?: boolean
}

export function FAQItem({ question, answer, isOpen = false }: FAQItemProps) {
  const [expanded, setExpanded] = useState(isOpen)

  return (
    <Card className="mb-4 border border-gray-200 hover:border-purple-300 transition-colors">
      <CardContent className="p-0">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
          {expanded ? (
            <ChevronUp className="w-5 h-5 text-purple-600 flex-shrink-0" />
          ) : (
            <ChevronDown className="w-5 h-5 text-purple-600 flex-shrink-0" />
          )}
        </button>
        {expanded && (
          <div className="px-6 pb-6">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{answer}</div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
