import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaClock, FaCalendarAlt, FaArrowRight, FaSearch, FaFilter } from 'react-icons/fa'
import { getAllBlogPosts, formatBlogDate, formatViewCount, getAllCategories } from '@/utils/blogData'
import { getCategoryConfig } from '@/utils/blogConfig'
import { generateBlogListingMeta } from '@/utils/blogUtils'

// Generate metadata for SEO
export async function generateMetadata() {
    const meta = generateBlogListingMeta()
    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: meta.type,
            url: meta.url,
        },
    }
}

const BlogsPage = () => {
    const allBlogPosts = getAllBlogPosts()
    const categories = getAllCategories()

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary/5">
            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
                <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-block mb-6">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm">
                                EXPERT INSIGHTS
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Our Expert
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                                Blog
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                            Stay updated with the latest immigration trends, business planning strategies, and success stories from our expert team.
                        </p>

                        {/* Search and Filter */}
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
                            <div className="relative flex-1 w-full">
                                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles..."
                                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                                />
                            </div>
                            <div className="relative">
                                <FaFilter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                                <select className="pl-12 pr-8 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 bg-white">
                                    <option value="">All Categories</option>
                                    {categories.map((category) => (
                                        <option key={category} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {allBlogPosts.map((post) => {
                            const categoryConfig = getCategoryConfig(post.category)
                            return (
                                <article key={post.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:-translate-y-2">
                                    {/* Blog Image */}
                                    <div className="relative overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={600}
                                            height={400}
                                            className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className={`${categoryConfig.color} px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm`}>
                                                {post.category}
                                            </span>
                                        </div>
                                        {post.featured && (
                                            <div className="absolute top-4 right-4">
                                                <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    FEATURED
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent group-hover:from-black/40 transition-all duration-300"></div>
                                    </div>

                                    {/* Blog Content */}
                                    <div className="p-6 md:p-8">
                                        {/* Metadata */}
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-primary text-xs" />
                                                <span>{formatBlogDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaEye className="text-primary text-xs" />
                                                <span>{formatViewCount(post.views)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="text-primary text-xs" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        {/* Author & CTA */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/10">
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        width={40}
                                                        height={40}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 text-sm">{post.author.name}</div>
                                                    <div className="text-xs text-gray-500">{post.author.role}</div>
                                                </div>
                                            </div>

                                            <Link href={`/blog/${post.slug}`}>
                                                <button className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-all duration-300 hover:gap-3">
                                                    Read More
                                                    <FaArrowRight className="text-sm" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                    {/* Load More Button (for future pagination) */}
                    <div className="text-center mt-16">
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                            <span>Load More Articles</span>
                            <FaArrowRight className="text-sm" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BlogsPage