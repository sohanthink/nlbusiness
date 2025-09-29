import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { FaEye, FaClock, FaCalendarAlt, FaArrowLeft, FaArrowRight, FaShareAlt, FaTag } from 'react-icons/fa'
import { getBlogPostBySlug, getRelatedBlogPosts, formatBlogDate, formatViewCount } from '@/utils/blogData'
import { getBlogPostNavigation } from '@/utils/blogUtils'
import { getCategoryConfig } from '@/utils/blogConfig'
import { generateBlogPostMeta } from '@/utils/blogUtils'

// Generate metadata for SEO
export async function generateMetadata({ params }) {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        return {
            title: 'Blog Post Not Found | NL Business',
            description: 'The requested blog post could not be found.'
        }
    }

    const meta = generateBlogPostMeta(post)
    return {
        title: meta.title,
        description: meta.description,
        keywords: meta.keywords,
        authors: [{ name: meta.author }],
        openGraph: {
            title: meta.title,
            description: meta.description,
            type: meta.type,
            publishedTime: meta.publishedTime,
            modifiedTime: meta.modifiedTime,
            images: [
                {
                    url: meta.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: meta.title,
            description: meta.description,
            images: [meta.image],
        },
    }
}

const BlogPostPage = ({ params }) => {
    const post = getBlogPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedBlogPosts(post, 3)
    const categoryConfig = getCategoryConfig(post.category)
    const navigation = getBlogPostNavigation(post.id)

    return (
        <div className="min-h-screen bg-white mt-20 md:mt-32">
            {/* Navigation */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 text-gray-600 hover:text-primary font-medium transition-colors duration-300"
                >
                    <FaArrowLeft className="text-sm" />
                    Back to Blog
                </Link>
            </div>

            <div className="container mx-auto px-4 pb-20">
                <div className="max-w-4xl mx-auto">
                    {/* Article Header */}
                    <article className="bg-white">
                        {/* Featured Image */}
                        <div className="relative h-64 md:h-80 mb-12">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover rounded-lg"
                                priority
                            />
                        </div>

                        {/* Article Content */}
                        <div className="space-y-6">
                            {/* Category */}
                            <div className="flex items-center">
                                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                                    {post.category}
                                </span>
                            </div>

                            {/* Article Title */}
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                {post.title}
                            </h1>

                            {/* Article Meta */}
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                                <span>{formatBlogDate(post.date)}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                                <span>•</span>
                                <span>{formatViewCount(post.views)} views</span>
                            </div>

                            {/* Article Excerpt */}
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {post.excerpt}
                            </p>

                            {/* Author Info */}
                            <div className="flex items-center gap-3 py-4">
                                <div className="w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">{post.author.name}</div>
                                    <div className="text-sm text-gray-600">{post.author.role}</div>
                                </div>
                            </div>

                            {/* Article Content */}
                            <div
                                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Tags */}
                            <div className="pt-6">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="bg-gray-50 text-gray-600 px-2 py-1 rounded text-xs"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Navigation */}
                    <div className="mt-12 pt-6 border-t border-gray-100">
                        <div className="flex justify-between items-center">
                            {navigation.previous ? (
                                <Link
                                    href={`/blog/${navigation.previous.slug}`}
                                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                                >
                                    ← Previous
                                </Link>
                            ) : (
                                <div></div>
                            )}

                            {navigation.next && (
                                <Link
                                    href={`/blog/${navigation.next.slug}`}
                                    className="text-gray-600 hover:text-primary transition-colors duration-300"
                                >
                                    Next →
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Related Posts */}
                    {relatedPosts.length > 0 && (
                        <div className="mt-12 pt-6 border-t border-gray-100">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Related Articles</h2>
                            <div className="space-y-4">
                                {relatedPosts.map((relatedPost) => (
                                    <Link
                                        key={relatedPost.id}
                                        href={`/blog/${relatedPost.slug}`}
                                        className="block p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-300"
                                    >
                                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-sm text-gray-600 line-clamp-2">
                                            {relatedPost.excerpt}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogPostPage
