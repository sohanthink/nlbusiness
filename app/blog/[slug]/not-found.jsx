import React from 'react'
import Link from 'next/link'
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa'

const BlogNotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5 flex items-center justify-center">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    {/* 404 Illustration */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <FaSearch className="text-6xl text-primary/60" />
                        </div>
                    </div>

                    {/* Error Message */}
                    <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Blog Post Not Found</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        The blog post you're looking for doesn't exist or may have been moved.
                        Let's get you back to our amazing content!
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                        >
                            <FaArrowLeft className="text-sm" />
                            Back to Blog
                        </Link>
                        <Link
                            href="/"
                            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1 border border-gray-200"
                        >
                            <FaHome className="text-sm" />
                            Go Home
                        </Link>
                    </div>

                    {/* Popular Posts Suggestion */}
                    <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Articles</h3>
                        <div className="text-left space-y-2">
                            <Link href="/blog/complete-guide-eb5-investor-visa" className="block text-primary hover:text-primary/80 font-medium transition-colors duration-300">
                                Complete Guide to EB-5 Investor Visa
                            </Link>
                            <Link href="/blog/startup-visa-canada-winning-business-plan" className="block text-primary hover:text-primary/80 font-medium transition-colors duration-300">
                                Start-Up Visa Canada: How to Build a Winning Business Plan
                            </Link>
                            <Link href="/blog/pnp-business-plans-provincial-requirements" className="block text-primary hover:text-primary/80 font-medium transition-colors duration-300">
                                PNP Business Plans: Provincial Requirements & Success Rates
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogNotFound
