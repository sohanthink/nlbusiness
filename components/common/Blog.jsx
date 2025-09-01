import React from 'react'
import Image from 'next/image'
import blog1 from "@/public/images/home/blog/blog1.png"
import blog2 from "@/public/images/home/blog/blog2.png"
import blog3 from "@/public/images/home/blog/blog3.png"

const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            image: blog1,
            date: "Aug 20, 2025",
            views: "234",
            title: "2025 Canadian Election outcome: What's at stake for immigrants",
            author: "Boostly admin",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 2,
            image: blog2,
            date: "Aug 20, 2025",
            views: "234",
            title: "2025 Canadian Election outcome: What's at stake for immigrants",
            author: "Boostly admin",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        },
        {
            id: 3,
            image: blog3,
            date: "Aug 20, 2025",
            views: "234",
            title: "2025 Canadian Election outcome: What's at stake for immigrants",
            author: "Boostly admin",
            authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
        }
    ]

    return (
        <section className="container section-padding bg-white">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
                    Latest From The Blog
                </h2>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {blogPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1">
                        {/* Blog Image */}
                        <div className="relative overflow-hidden">
                            <Image
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 md:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="p-6">
                            {/* Metadata */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span>{post.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                    <span>Seen {post.views}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-lg md:text-xl font-bold text-black mb-4 line-clamp-2 leading-tight">
                                {post.title}
                            </h3>

                            {/* Separator */}
                            <div className="w-full h-px bg-gray-200 mb-4"></div>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                        src={post.authorImage}
                                        alt={post.author}
                                        width={32}
                                        height={32}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-sm text-gray-600 font-medium">
                                    {post.author}
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12 md:mt-16">
                <button className="primary-button">
                    View All Posts
                </button>
            </div>
        </section>
    )
}

export default Blog