import { FAQItem } from "./faq-item"

interface FAQ {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  faqs: FAQ[]
}

export function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-600">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={index === 0} // First item open by default
          />
        ))}
      </div>
    </div>
  )
}
