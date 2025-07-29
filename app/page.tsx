"use client"

import type React from "react"

import { useState } from "react"

const countries = [
  { name: "India", flag: "🇮🇳", wallet: "UPI, Paytm" },
  { name: "Pakistan", flag: "🇵🇰", wallet: "JazzCash, Easypaisa" },
  { name: "Bangladesh", flag: "🇧🇩", wallet: "Nagad, bKash" },
  { name: "Thailand", flag: "🇹🇭", wallet: "TrueMoney, Rabbit LINE Pay" },
  { name: "Egypt", flag: "🇪🇬", wallet: "Vodafone Cash, Orange Money" },
  { name: "Kenya", flag: "🇰🇪", wallet: "M-Pesa, Airtel Money" },
  { name: "Tanzania", flag: "🇹🇿", wallet: "M-Pesa, Tigo Pesa" },
  { name: "Brazil", flag: "🇧🇷", wallet: "PIX, PicPay" },
  { name: "Philippines", flag: "🇵🇭", wallet: "GCash, PayMaya" },
  { name: "Vietnam", flag: "🇻🇳", wallet: "MoMo, ZaloPay" },
]

const features = [
  {
    title: "High-Risk Business Support",
    description: "Specialized payment solutions for forex, gaming, lending, and streaming businesses",
  },
  {
    title: "Global Local Coverage",
    description: "Supporting 10+ countries across Asia, Africa, and Latin America",
  },
  {
    title: "Local E-Wallets",
    description: "Integration with popular local payment methods like M-Pesa, Nagad, GCash, and more",
  },
  {
    title: "USDT Support",
    description: "Accept cryptocurrency payments with USDT for global transactions",
  },
  {
    title: "Fast Settlement",
    description: "Quick payment processing and settlement for your business needs",
  },
  {
    title: "Business Growth",
    description: "Scale your high-risk business with reliable payment infrastructure",
  },
]

export default function PayGatewayLanding() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mqalbozd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", company: "", message: "" })
      }
    } catch (error) {
      console.error("Form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const openTelegram = () => {
    window.open("https://t.me/champan", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">PayGateway</span>
          </div>
          <button
            onClick={openTelegram}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            💬 Chat Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Trusted by 10,000+ Businesses
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Payment Gateway for <span className="text-blue-600">High-Risk Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Accept payments through local e-wallets and USDT across Asia, Africa, and Latin America. Perfect for forex,
            gaming, lending, and streaming businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started Today →
            </button>
            <button
              onClick={openTelegram}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-50 transition-colors"
            >
              💬 Chat on Telegram
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
              <div className="text-gray-600">Businesses Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">10+</div>
              <div className="text-gray-600">Countries Supported</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-600 mb-2">3</div>
              <div className="text-gray-600">Continents Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Choose PayGateway?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We specialize in providing payment solutions for businesses that traditional gateways won't support
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Countries */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Global Coverage, Local Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We support popular local e-wallets in key markets across Asia, Africa, and Latin America
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-2">{country.flag}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{country.name}</h3>
                <p className="text-sm text-gray-600">{country.wallet}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-block bg-orange-500 text-white px-6 py-2 rounded-full text-lg font-medium">
              + USDT Cryptocurrency Support
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600">Contact us today to discuss your payment gateway needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-6xl text-green-500 mb-4">✓</div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tell us about your business and payment needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"} ✉️
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">💬</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Telegram Chat</p>
                      <button onClick={openTelegram} className="text-blue-600 hover:text-blue-700 underline">
                        Start a conversation
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">👥</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Business Support</p>
                      <p className="text-gray-600">24/7 customer support</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                      <span className="text-white">🌍</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Global Coverage</p>
                      <p className="text-gray-600">Asia • Africa • Latin America</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Why Businesses Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">High-risk business friendly</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Local payment methods</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">USDT cryptocurrency support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span className="text-gray-700">Fast settlement times</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-2xl font-bold">PayGateway</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Empowering high-risk businesses with reliable payment solutions across Asia, Africa, and Latin America.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <button onClick={openTelegram} className="text-gray-400 hover:text-white transition-colors">
              💬 Telegram
            </button>
            <button onClick={scrollToContact} className="text-gray-400 hover:text-white transition-colors">
              ✉️ Contact
            </button>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2025 PayGateway. Serving 10,000+ businesses worldwide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
