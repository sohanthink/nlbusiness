// Blog Configuration
// Centralized configuration for blog functionality

export const blogConfig = {
  // Blog settings
  postsPerPage: 6,
  latestPostsCount: 3,
  relatedPostsCount: 3,

  // SEO settings
  siteName: "NL Business",
  siteUrl: "https://nlbusiness.com", // Update with your actual domain

  // Social media settings
  socialMedia: {
    twitter: "@nlbusiness", // Update with your Twitter handle
    facebook: "nlbusiness", // Update with your Facebook page
    linkedin: "nlbusiness", // Update with your LinkedIn page
  },

  // Author information
  defaultAuthor: {
    name: "NL Business Team",
    role: "Business & Immigration Experts",
    image: "/images/team/default-author.jpg", // Add default author image
  },

  // Categories configuration
  categories: {
    "US Immigration": {
      color: "bg-blue-100 text-blue-800",
      description: "US immigration programs and requirements",
    },
    "Canadian Immigration": {
      color: "bg-red-100 text-red-800",
      description: "Canadian immigration programs and requirements",
    },
    "Business Planning": {
      color: "bg-green-100 text-green-800",
      description: "Business planning strategies and tips",
    },
    "Startup Advisory": {
      color: "bg-purple-100 text-purple-800",
      description: "Startup advice and funding strategies",
    },
    "Financial Planning": {
      color: "bg-yellow-100 text-yellow-800",
      description: "Financial planning and investment strategies",
    },
    "Small Business": {
      color: "bg-indigo-100 text-indigo-800",
      description: "Small business development and management strategies",
    },
  },

  // Reading time calculation
  readingSpeed: 200, // words per minute

  // Image settings
  defaultImage: "/images/blog/default-blog-image.jpg",
  imageSizes: {
    thumbnail: { width: 400, height: 250 },
    medium: { width: 800, height: 500 },
    large: { width: 1200, height: 750 },
  },

  // Pagination settings
  pagination: {
    showNumbers: true,
    showPreviousNext: true,
    maxVisiblePages: 5,
  },

  // Search settings
  search: {
    minQueryLength: 2,
    maxResults: 20,
    searchFields: ["title", "excerpt", "content", "tags"],
  },

  // Comment settings (for future implementation)
  comments: {
    enabled: false,
    provider: "disqus", // or 'custom'
    disqusShortname: "nlbusiness", // Update with your Disqus shortname
  },

  // Newsletter settings
  newsletter: {
    enabled: true,
    title: "Subscribe to Our Newsletter",
    description:
      "Get the latest immigration and business planning insights delivered to your inbox.",
    placeholder: "Enter your email address",
  },
};

// Helper function to get category configuration
export const getCategoryConfig = (categoryName) => {
  return (
    blogConfig.categories[categoryName] || {
      color: "bg-gray-100 text-gray-800",
      description: "General category",
    }
  );
};

// Helper function to get full image URL
export const getImageUrl = (imagePath) => {
  if (imagePath.startsWith("http")) {
    return imagePath;
  }
  return `${blogConfig.siteUrl}${imagePath}`;
};

// Helper function to get blog post URL
export const getBlogPostUrl = (slug) => {
  return `${blogConfig.siteUrl}/blog/${slug}`;
};

// Helper function to get blog listing URL
export const getBlogListingUrl = () => {
  return `${blogConfig.siteUrl}/blogs`;
};
