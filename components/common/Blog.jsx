import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaEye, FaClock, FaArrowRight, FaCalendarAlt } from 'react-icons/fa'
import { getLatestBlogPosts, formatBlogDate, formatViewCount } from '@/utils/blogData'
import { getCategoryConfig } from '@/utils/blogConfig'

const Blog = () => {
    // Get the 3 latest blog posts using our data management system
    const blogPosts = getLatestBlogPosts(3)

    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-white to-primary/5 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-l from-primary/20 to-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-primary/15 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <div className="inline-block">
                        <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
                            INSIGHTS & EXPERTISE
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Latest From Our
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/80">
                            Expert Blog
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Stay updated with the latest immigration trends, business planning strategies, and success stories from our expert team.
                    </p>
                </div>

                {/* Featured Blog Post */}
                {blogPosts.filter(post => post.featured).map((post) => {
                    const categoryConfig = getCategoryConfig(post.category)
                    return (
                        <div key={post.id} className="mb-16 md:mb-20">
                            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                                    {/* Image Section */}
                                    <div className="relative overflow-hidden h-64 lg:h-auto">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            width={800}
                                            height={500}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                                FEATURED
                                            </span>
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className={`${categoryConfig.color} px-3 py-1 rounded-full text-sm font-medium`}>
                                                {post.category}
                                            </span>
                                        </div>

                                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                                            {post.title}
                                        </h3>

                                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>

                                        {/* Metadata */}
                                        <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                                            <div className="flex items-center gap-2">
                                                <FaCalendarAlt className="text-primary" />
                                                <span>{formatBlogDate(post.date)}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaEye className="text-primary" />
                                                <span>{formatViewCount(post.views)} views</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <FaClock className="text-primary" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>

                                        {/* Author & CTA */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900">{post.author.name}</div>
                                                    <div className="text-sm text-gray-500">{post.author.role}</div>
                                                </div>
                                            </div>

                                            <Link href={`/blog/${post.slug}`}>
                                                <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105">
                                                    Read More
                                                    <FaArrowRight className="text-sm" />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}

                {/* Regular Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {blogPosts.filter(post => !post.featured).map((post) => {
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
                                        <span className={`${categoryConfig.color} bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium`}>
                                            {post.category}
                                        </span>
                                    </div>
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
                                    <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
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

                {/* View All Button */}
                <div className="text-center mt-16 md:mt-20">
                    <Link href="/blogs">
                        <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                            <span>View All Articles</span>
                            <FaArrowRight className="text-sm" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Blog