'use client'
import React, { useState } from 'react'

const Consultation = ({ sectionId = "consultation" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: ''
    })

    // Dynamic contact cards data
    const contactCards = [
        {
            id: 1,
            title: "Toronto Office",
            subtitle: "Headquarters",
            address: "2229 Kingston Rd, Scarborough, ON M1N 1T8. Canada.",
            phone: "+1 (437) 256-5623",
            email: "info@nlbusinessventure.ca",
            flag: "🇨🇦",
            bgColor: "bg-gradient-to-br from-red-500 to-red-600",
            textColor: "text-white",
            icon: "🏢"
        },
        {
            id: 2,
            title: "Scarborough Office",
            subtitle: "Second Office",
            address: "376 Birchmount Rd Unit 12, Scarborough, ON M1K 1M6",
            phone: "+1 (437) 256-5623",
            email: "info@nlbusinessventure.ca",
            flag: "🇨🇦",
            bgColor: "bg-gradient-to-br from-primary to-purple-600",
            textColor: "text-white",
            icon: "🌊"
        },
        {
            id: 3,
            title: "Bangladesh Office",
            subtitle: "Specialist Immigration Consultant",
            address: "House #62, Road #03, Block #B, Niketan, Gulshan_1",
            phone: "+1 (437) 256-5623",
            email: "info@nlbusinessventure.ca",
            flag: "🇨🇦",
            bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
            textColor: "text-white",
            icon: "🏛️"
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Here you can add your form submission logic
    }

    return (
        <section id={sectionId} className="mt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="container section-padding">
                {/* Contact Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {contactCards.map((card) => (
                        <div
                            key={card.id}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                        >
                            {/* Background Gradient */}
                            <div className={`${card.bgColor} absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-500"></div>

                            {/* Content */}
                            <div className="relative z-10 p-8 text-center">
                                {/* Icon and Flag */}
                                <div className="flex justify-center items-center gap-3 mb-4">
                                    <span className="text-3xl">{card.icon}</span>
                                    <span className="text-2xl">{card.flag}</span>
                                </div>

                                {/* Title and Subtitle */}
                                <h3 className="text-xl font-bold mb-2 text-white">{card.title}</h3>
                                <p className="text-white/80 text-sm font-medium mb-4">{card.subtitle}</p>

                                {/* Address */}
                                <div className="text-white/90 text-sm leading-relaxed mb-4">
                                    {card.address.split('\n').map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-2 text-sm text-white/80">
                                    <p className="flex items-center justify-center gap-2">
                                        <span>📞</span>
                                        <span>{card.phone}</span>
                                    </p>
                                    <p className="flex items-center justify-center gap-2">
                                        <span>✉️</span>
                                        <span className="text-xs">{card.email}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Heading Section */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <span>🎯</span>
                        <span>Get Expert Guidance</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent mb-6">
                        Free Consultation Right Now
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        With so many options, choosing the right program is the first critical step. Book a free consultation with our experts to identify the best Canadian immigration stream for your business and goals.
                    </p>
                </div>

                {/* Contact Form Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-blue-50/50 rounded-3xl"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full translate-y-24 -translate-x-24"></div>

                        {/* Form Container */}
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-4">
                                    <span>💬</span>
                                    <span>Start Your Journey</span>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free Consultation</h3>
                                <p className="text-gray-600">Fill out the form below and our experts will get back to you within 24 hours</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Name Field */}
                                    <div className="group">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <span className="text-primary">👤</span>
                                            <span>Your Name</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                            placeholder="Enter your full name"
                                            required
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="group">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <span className="text-primary">✉️</span>
                                            <span>Your Email</span>
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                            placeholder="Enter your email address"
                                            required
                                        />
                                    </div>

                                    {/* Phone Field */}
                                    <div className="group">
                                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <span className="text-primary">📱</span>
                                            <span>Your Phone</span>
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                            placeholder="Enter your phone number"
                                            required
                                        />
                                    </div>

                                    {/* Website Field */}
                                    <div className="group">
                                        <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                            <span className="text-primary">🌐</span>
                                            <span>Your Website</span>
                                        </label>
                                        <input
                                            type="url"
                                            id="website"
                                            name="website"
                                            value={formData.website}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white/70 backdrop-blur-sm"
                                            placeholder="Enter your website URL (optional)"
                                        />
                                    </div>
                                </div>

                                {/* Message Field */}
                                <div className="group">
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                        <span className="text-primary">💬</span>
                                        <span>Your Message</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none bg-white/70 backdrop-blur-sm"
                                        placeholder="Tell us about your business goals and immigration objectives..."
                                        required
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg uppercase tracking-wide"
                                    >
                                        <span>🚀</span>
                                        <span>Send Message</span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Consultation