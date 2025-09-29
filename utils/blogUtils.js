// Blog Utility Functions
// Additional helper functions for blog functionality

import { blogPosts, formatBlogDate, formatViewCount } from "./blogData";

/**
 * Generate blog post metadata for SEO
 * @param {Object} post - Blog post object
 * @returns {Object} SEO metadata object
 */
export const generateBlogPostMeta = (post) => {
  return {
    title: `${post.title} | NL Business`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    author: post.author.name,
    publishedTime: post.date,
    modifiedTime: post.date,
    image: post.image,
    url: `/blog/${post.slug}`,
    type: "article",
  };
};

/**
 * Generate blog listing page metadata
 * @returns {Object} SEO metadata object
 */
export const generateBlogListingMeta = () => {
  return {
    title:
      "Expert Blog | Immigration & Business Planning Insights | NL Business",
    description:
      "Stay updated with the latest immigration trends, business planning strategies, and success stories from our expert team at NL Business.",
    keywords:
      "immigration blog, business planning, startup advice, investor visa, canadian immigration, US immigration",
    url: "/blogs",
    type: "website",
  };
};

/**
 * Get blog post reading progress
 * @param {string} content - Blog post content
 * @returns {Object} Reading progress information
 */
export const getReadingProgress = (content) => {
  const wordCount = content.split(" ").length;
  const estimatedMinutes = Math.ceil(wordCount / 200); // Average reading speed: 200 words per minute

  return {
    wordCount,
    estimatedMinutes,
    readTime: `${estimatedMinutes} min read`,
  };
};

/**
 * Validate blog post data structure
 * @param {Object} post - Blog post object to validate
 * @returns {Object} Validation result with errors array
 */
export const validateBlogPost = (post) => {
  const errors = [];
  const requiredFields = [
    "id",
    "slug",
    "title",
    "excerpt",
    "content",
    "author",
    "category",
    "date",
  ];

  requiredFields.forEach((field) => {
    if (!post[field]) {
      errors.push(`Missing required field: ${field}`);
    }
  });

  // Validate date format
  if (post.date && !/^\d{4}-\d{2}-\d{2}$/.test(post.date)) {
    errors.push("Date must be in YYYY-MM-DD format");
  }

  // Validate slug format
  if (post.slug && !/^[a-z0-9-]+$/.test(post.slug)) {
    errors.push(
      "Slug must contain only lowercase letters, numbers, and hyphens"
    );
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Generate unique slug from title
 * @param {string} title - Blog post title
 * @returns {string} Generated slug
 */
export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
};

/**
 * Get blog statistics
 * @returns {Object} Blog statistics
 */
export const getBlogStats = () => {
  const publishedPosts = blogPosts.filter((post) => post.published);
  const totalViews = publishedPosts.reduce((sum, post) => sum + post.views, 0);
  const categories = [...new Set(publishedPosts.map((post) => post.category))];
  const tags = [...new Set(publishedPosts.flatMap((post) => post.tags))];

  return {
    totalPosts: publishedPosts.length,
    totalViews,
    categories: categories.length,
    tags: tags.length,
    averageViews: Math.round(totalViews / publishedPosts.length),
  };
};

/**
 * Get blog post navigation (previous/next)
 * @param {number} currentId - Current blog post ID
 * @returns {Object} Navigation object with previous and next posts
 */
export const getBlogPostNavigation = (currentId) => {
  const sortedPosts = blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const currentIndex = sortedPosts.findIndex((post) => post.id === currentId);

  return {
    previous: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
    next:
      currentIndex < sortedPosts.length - 1
        ? sortedPosts[currentIndex + 1]
        : null,
  };
};

/**
 * Format blog post for display
 * @param {Object} post - Raw blog post object
 * @returns {Object} Formatted blog post object
 */
export const formatBlogPost = (post) => {
  return {
    ...post,
    formattedDate: formatBlogDate(post.date),
    formattedViews: formatViewCount(post.views),
    readingProgress: getReadingProgress(post.content),
  };
};

/**
 * Get blog post breadcrumbs
 * @param {Object} post - Blog post object
 * @returns {Array} Breadcrumb array
 */
export const getBlogPostBreadcrumbs = (post) => {
  return [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blogs" },
    {
      label: post.category,
      href: `/blogs?category=${encodeURIComponent(post.category)}`,
    },
    { label: post.title, href: `/blog/${post.slug}`, current: true },
  ];
};

/**
 * Filter blog posts by multiple criteria
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered blog posts
 */
export const filterBlogPosts = (filters = {}) => {
  let posts = blogPosts.filter((post) => post.published);

  if (filters.category) {
    posts = posts.filter((post) => post.category === filters.category);
  }

  if (filters.tag) {
    posts = posts.filter((post) => post.tags.includes(filters.tag));
  }

  if (filters.author) {
    posts = posts.filter((post) => post.author.name === filters.author);
  }

  if (filters.featured !== undefined) {
    posts = posts.filter((post) => post.featured === filters.featured);
  }

  if (filters.search) {
    const query = filters.search.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Sort by date (newest first) unless specified otherwise
  if (filters.sortBy === "oldest") {
    posts.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return posts;
};
