"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { FaUser, FaEnvelope, FaPhone, FaChevronDown, FaPen } from 'react-icons/fa'
import contactbanner from "@/public/images/service/innerpages/contactbanner.png"


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        countryCode: '+1',
        source: '',
        researchTypes: [],
        message: '',
        privacyConsent: false
    })

    const researchOptions = [
        "Market Overview",
        "Competitive Analysis",
        "Location Analysis",
        "Price Analysis & Product Comparison",
        "Value Chain Analysis",
        "Potential List of Clients",
        "Data Analysis",
        "Other"
    ]

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target

        if (type === 'checkbox') {
            if (name === 'privacyConsent') {
                setFormData(prev => ({ ...prev, privacyConsent: checked }))
            } else {
                setFormData(prev => ({
                    ...prev,
                    researchTypes: checked
                        ? [...prev.researchTypes, value]
                        : prev.researchTypes.filter(type => type !== value)
                }))
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Handle form submission here
    }

    return (
        <section className="container section-padding bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                {/* Left Content Section */}
                <div className="space-y-8">
                    {/* Title and Description */}
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                            Let's Contact With Us
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At the heart of our commitment to providing exceptional immigration solutions stands our trusted
                        </p>
                    </div>

                    {/* Images Section */}
                    <div className="relative">
                        {/* <div className="flex gap-4">
                            <div className="relative flex-1">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Team collaboration"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                </div>
                            </div>

                            <div className="relative flex-1">
                                <div className="relative overflow-hidden rounded-lg shadow-lg">
                                    <Image
                                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                        alt="Team discussion"
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                </div>
                            </div>
                        </div> */}

                        <div>
                            <Image src={contactbanner} alt="contactbanner" />
                        </div>
                    </div>
                </div>

                {/* Right Contact Form Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name Field */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Name *
                            </label>
                            <div className="relative">
                                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Your Name"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email *
                            </label>
                            <div className="relative">
                                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="demo@"
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                    required
                                />
                            </div>
                        </div>

                        {/* Phone Field */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone *
                            </label>
                            <div className="flex gap-2">
                                <div className="relative flex-shrink-0">
                                    <select
                                        name="countryCode"
                                        value={formData.countryCode}
                                        onChange={handleInputChange}
                                        className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
                                    >
                                        <option value="+1">🇺🇸 +1</option>
                                        <option value="+44">🇬🇧 +44</option>
                                        <option value="+91">🇮🇳 +91</option>
                                        <option value="+86">🇨🇳 +86</option>
                                    </select>
                                    <FaChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                                <div className="relative flex-1">
                                    <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Source Field */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                How did you find out about us? *
                            </label>
                            <div className="relative">
                                <select
                                    name="source"
                                    value={formData.source}
                                    onChange={handleInputChange}
                                    className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white"
                                    required
                                >
                                    <option value="">Select a Answer</option>
                                    <option value="google">Google Search</option>
                                    <option value="social">Social Media</option>
                                    <option value="referral">Referral</option>
                                    <option value="advertisement">Advertisement</option>
                                    <option value="other">Other</option>
                                </select>
                                <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>
                        </div>

                        {/* Research Types */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-3">
                                What research report types are you interested in? *
                            </label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {researchOptions.map((option) => (
                                    <label key={option} className="flex items-center space-x-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            name="researchTypes"
                                            value={option}
                                            checked={formData.researchTypes.includes(option)}
                                            onChange={handleInputChange}
                                            className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2"
                                        />
                                        <span className="text-sm text-gray-700">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <FaPen className="absolute left-3 top-3 text-gray-400" />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Write Message"
                                    rows={4}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Privacy Consent */}
                        <div className="flex items-start space-x-2">
                            <input
                                type="checkbox"
                                name="privacyConsent"
                                checked={formData.privacyConsent}
                                onChange={handleInputChange}
                                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 mt-1"
                                required
                            />
                            <label className="text-sm text-gray-600">
                                By clicking "Get a Quote" you agree to our{' '}
                                <a href="/privacy-policy" className="text-red-500 hover:text-red-600 underline">
                                    Privacy Policy
                                </a>
                                .
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-primary text-white font-bold py-4 px-6 rounded-lg hover:bg-primary/90 transition-colors duration-300 transform hover:scale-[1.02]"
                        >
                            GET QUOTE
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact