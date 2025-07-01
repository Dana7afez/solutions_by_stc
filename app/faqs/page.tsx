"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedHeader } from "@/components/animated-header"
import { CategorySelector } from "@/components/category-selector"
import { FAQList } from "@/components/faq-list"
import { Button } from "@/components/ui/button"
import { Search, MessageCircle, Phone } from "lucide-react"

const faqData = {
  registration: [
    {
      question: "How to register a Saudi domain?",
      answer:
        "For more information regarding the required steps for registering a Saudi domain name, please referee to the user guide of the service, from supporting documents section.",
    },
    {
      question: "What is a domain name?",
      answer:
        "A domain name is a series of letters, numbers and some special characters, which together represent a form legible and easy to remember. It is used to determine a website on the internet, which is used as a readable alternative from an IP address that is used effectively to identify sites and directing Internet traffic.",
    },
    {
      question: "Why do I need to register a domain name?",
      answer:
        "Based in the current internet protocol it is almost impossible to publish a website working in a normal way without a domain name",
    },
    {
      question: "How to write a Saudi domain name under (.sa)?",
      answer:
        "A typical .sa domain name consists of two or three parts (labels) separated by (.) and looks like: .sa or . .sa Where can be one of the 2nd level top domains, such as: .com.sa, net.sa, org.sa, edu.sa, gov.sa, ..etc. A label can contain any combination of letters (a-z), numbers (0-9), and a hyphen (-). It's length between 2 and 63 characters long",
    },
    {
      question: "How does (.sa) ccTLD differ from (.com) gTLD?",
      answer:
        "The (.sa) is the country code Top Level Domain (ccTLD) designated for domain names in Saudi Arabia. While (.com) is a generic Top Level Domain (gTLDs) that is open for commercial entities and others world-wide. The policies and administration of the (.sa) domain name are set and managed by SaudiNIC in CST. While gTLDs are managed by ICANN",
    },
  ],
  technical: [
    {
      question: "What is DNS?",
      answer:
        "The Internet Domain Name System (DNS) is a set of distributed databases containing IP addresses and their corresponding domain names. Each domain name is mapped to a particular numeric address. DNS, with servers located all over the Internet, performs the translation back and forth between names and numbers",
    },
    {
      question: "Do I need to have a web site (ready or hosted) to register a domain name?",
      answer:
        "No, you only need to provide the two name servers that are hosting your domain name from DNS point of view, and have your domain registered. All this does not require having your web-site ready",
    },
    {
      question: "Do you provide DNS hosting?",
      answer: "Yes, please check cloud DNS page",
    },
    {
      question: "How to add or update name servers?",
      answer:
        "You can check the user guide in the supporting documents section, for more information on how to add or update domain name servers.",
    },
    {
      question: "How to add DNS records?",
      answer:
        "You need to activate the cloud DNS service from cloud applications section, after activating the service you will be able to host your zone and add the required records",
    },
    {
      question: "How to link my domain name with my email?",
      answer:
        "Once email service provider shares with you the DNS records, you can then add it to your cloud DNS service to complete the process of integrating your domain name with your email.",
    },
  ],
  management: [
    {
      question: "How long is a registered Saudi domain name valid for?",
      answer: "Saudi domains names are valid for up to ten years",
    },
    {
      question: "Who should be the administrative contact?",
      answer:
        "The administrative contact should be a person who can speak on behalf of the Applicant and he should be from the organization requesting the domain name. He/she should be located in KSA. He/she should be able to contact solutions by stc and change any information for the registered domain name",
    },
    {
      question: "How can I transfer my domain name to a new registrar?",
      answer:
        "1. The account holder for the domain requests (auth-code) for the domain.\n2. The registrant provides the accredited registrar with the auth-code.\n3. Transfer request is submitted electronically to SaudiNIC",
    },
    {
      question: "Can I delete a registered domain name?",
      answer: "Yes.",
    },
    {
      question: "Can I transfer a domain name to another entity (giving up the domain)?",
      answer: "Yes.",
    },
    {
      question: "How long it takes to register new domain name?",
      answer: "Within 1 to 3 business days",
    },
    {
      question: "Can I check if a domain name is available?",
      answer: "Yes, from the search engine in domains portal",
    },
  ],
  eligibility: [
    {
      question: "What type of domain name should I apply for?",
      answer:
        "It depends on the nature of your organization. (Check Eligibility conditions for registration, in supporting documents section)",
    },
    {
      question: "As a non-Saudi entity can we register a domain name under .sa TLD?",
      answer:
        "One of the following should be true for an Applicant requesting domain name registration under SA domain:\n• An entity physically located in Saudi Arabia.\n• A natural person, not underage, with a Saudi national identification card or equivalent document issued by the Ministry of Interior of Saudi Arabia.\n• An entity with a registration or license issued by a pertinent authority in Saudi Arabia.\n• An owner of a trademark or trade name that is registered in Saudi Arabia.",
    },
    {
      question: "Can I register my personal name?",
      answer:
        'Individuals can register under the following domains (pub.sa, .sa, or .السعودية) personal names, as expressed in the regulations as follows: "Individuals may register personal names, whether first or family name (e.g., Ahmad, Ali or Alfulani). The chosen name should be followed by at least one numerical digit. Combining two or more names together is allowed without using numerical digits."\n\nTo clarify this, let us assume the following example where the Person Name is : (أحمد الفلاني ) Ahmad Alfulani :\n\nAcceptable Examples:\nahmad7.pub.sa\nalfulani01.sa\nأحمد7.السعودية\nahmadalfulani.pub.sa\nأحمد-الفلاني.السعودية\n\nUnacceptable Examples:\nأحمد.السعودية\nالفلاني.السعودية\nahmad.sa\nalfulani.sa',
    },
  ],
  renewal: [
    {
      question: "How Can I renew my domain?",
      answer:
        "Check the payment information of your account and make sure it is up to date, and for more information on how to renew, please refer to the user guide in the supporting documents section",
    },
    {
      question: "How to restore an expired domain?",
      answer:
        "Check the payment information of your account and make sure it is up to date, and for expired domain names, they are applicable to restore in the first 30 days after expiration, for more information on how to restore, please refer to the user guide in the supporting documents section",
    },
    {
      question: "What is auto-renewal feature?",
      answer:
        "In auto-renewal, your domain name will be automatically renewed every year without any further action required from your side",
    },
    {
      question: "How can I disable the automatic renewal of the domain name?",
      answer:
        "The administrative contact can click the link in the emails we send before domain name renewal, to prevent the domain from being renewed",
    },
  ],
  payment: [
    {
      question: "How can I pay my invoices?",
      answer:
        "You can pay through Visa or MasterCard, and after any purchase, please check your digital agreement signing day date from your account dashboard in bluvalt, as on that day of the purchase month, we will send you the due invoices, and we will deduct the amount for the added payment card.",
    },
    {
      question: "What type of payment cards do you support?",
      answer: "We support Visa and MasterCard payment cards",
    },
    {
      question: "What is a domain name that is premium?",
      answer:
        "Because of factors like its shorter length, memorability, keyword relevancy, or brandability, a premium domain name is worth more than a standard domain name",
    },
    {
      question: "Why do premium domain names cost more?",
      answer:
        "Due to their increased demand, improved brand recognition, and increased potential to increase website traffic, premium domain names are more costly",
    },
  ],
  troubleshooting: [
    {
      question: "Why my domain name request status showing rejected?",
      answer:
        "You can click on domain details to view the feedback we sent after reviewing the registration request, and one of the common reasons for rejection is not demonstrating a clear relation between the domain name and registrant information, for more information please visit https://help.nic.sa/en/registrant-domain-relationship-criteria",
    },
  ],
}

const categoryNames = {
  registration: "Domain Registration",
  technical: "Technical Questions",
  management: "Domain Management",
  eligibility: "Eligibility & Requirements",
  renewal: "Renewal & Expiration",
  payment: "Payment & Pricing",
  troubleshooting: "Troubleshooting",
}

export default function FAQsPage() {
  const [selectedCategory, setSelectedCategory] = useState("registration")

  return (
    <div className="min-h-screen bg-white">
      <AnimatedHeader />

      {/* Hero Section */}
      <div className="hero-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-xl mb-8 opacity-90">
                Find answers to the most common questions about Saudi domain registration and management
              </p>

              {/* Enhanced Search Bar */}
              <div className="search-container">
                <Search className="search-icon w-5 h-5" />
                <input type="text" placeholder="Search frequently asked questions..." className="search-input" />
              </div>
            </div>

            <div className="hidden lg:block">
              <Image 
                src="/faq-illustration.png" 
                alt="FAQ Illustration" 
                width={400}
                height={400}
                className="w-full h-auto max-w-md mx-auto" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose a Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select a category below to view related questions and answers. Each category contains the most frequently
            asked questions for that topic.
          </p>
        </div>

        <CategorySelector selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        {/* FAQ List */}
        <div className="mt-12">
          <FAQList
            faqs={faqData[selectedCategory as keyof typeof faqData]}
            categoryName={categoryNames[selectedCategory as keyof typeof categoryNames]}
          />
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Can't find the answer you're looking for? Our support team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white px-8 py-3 text-lg font-medium"
              style={{ backgroundColor: "var(--color-info)" }}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat Support
            </Button>
            <Button
              className="text-white px-8 py-3 text-lg font-medium"
              style={{ backgroundColor: "var(--color-success)" }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
