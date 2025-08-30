'use client'
import React, { useState } from 'react'

const Consultation = () => {
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
            title: "(01) Visit Us Daily",
            address: "4140 Parker Rd. Allentown, Canada 31134",
            flag: "🇨🇦", // Canadian flag
            bgColor: "bg-white",
            textColor: "text-gray"
        },
        {
            id: 2,
            title: "(02) Visit Uk Daily",
            address: "4140 Parker Rd. Allentown, Canada 31134",
            flag: "🇬🇧", // UK flag
            bgColor: "bg-primary",
            textColor: "text-white"
        },
        {
            id: 3,
            title: "(03) Visit Canada Daily",
            address: "4140 Parker Rd. Allentown, Canada 31134",
            flag: "🇨🇦", // Canadian flag
            bgColor: "bg-white",
            textColor: "text-gray"
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
        <div className="container section-padding">
            {/* Contact Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {contactCards.map((card) => (
                    <div
                        key={card.id}
                        className={`${card.bgColor} ${card.textColor} p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300`}
                    >
                        <div className="text-center">
                            <div className="text-4xl mb-4">{card.flag}</div>
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className={`text-sm ${card.bgColor === 'bg-primary' ? '!text-white' : 'opacity-80'}`}>{card.address}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Heading Section */}
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Free Consultation Right Now
                </h2>
            </div>

            {/* Contact Form Section */}
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name Field */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            {/* Email Field */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            {/* Phone Field */}
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            {/* Website Field */}
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                                    Your website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200"
                                    placeholder="Enter your website URL"
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows="6"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors duration-200 resize-none"
                                placeholder="Message...."
                                required
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 uppercase tracking-wide"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Consultation