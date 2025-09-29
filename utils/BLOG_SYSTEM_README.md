# Blog System Documentation

## Overview

This blog system provides a centralized, easy-to-manage solution for your website's blog functionality. It's designed to be scalable and maintainable.

## Files Structure

### Core Files

- `blogData.js` - Centralized blog post data and utility functions
- `blogUtils.js` - Additional helper functions for blog functionality
- `blogConfig.js` - Configuration settings for the blog system

## Adding New Blog Posts

### Step 1: Add to blogData.js

Add your new blog post to the `blogPosts` array in `utils/blogData.js`:

```javascript
{
    id: 4, // Next sequential ID
    slug: "your-blog-post-slug", // URL-friendly version of title
    image: "/images/home/blog/your-image.png",
    date: "2025-09-20", // YYYY-MM-DD format
    views: 0, // Initial view count
    readTime: "6 min read",
    title: "Your Blog Post Title",
    excerpt: "Brief description of your blog post...",
    content: `
        <h2>Your Content Here</h2>
        <p>Your blog post content in HTML format...</p>
    `,
    author: {
        name: "Author Name",
        role: "Author Role",
        image: "https://images.unsplash.com/photo-..."
    },
    category: "Category Name", // Must match categories in blogConfig.js
    tags: ["tag1", "tag2", "tag3"],
    featured: false, // Set to true for featured posts
    published: true // Set to false to hide from public
}
```

### Step 2: Add Images

Place your blog images in the appropriate directory:

- Main blog images: `/public/images/home/blog/`
- Author images: Use Unsplash or add to `/public/images/authors/`

### Step 3: Update Categories (if needed)

If you're adding a new category, update the `categories` object in `blogConfig.js`.

## Key Functions

### Getting Blog Posts

```javascript
import {
  getLatestBlogPosts,
  getAllBlogPosts,
  getBlogPostById,
} from "@/utils/blogData";

// Get 3 latest posts (for homepage)
const latestPosts = getLatestBlogPosts(3);

// Get all published posts
const allPosts = getAllBlogPosts();

// Get specific post by ID
const post = getBlogPostById(1);
```

### Utility Functions

```javascript
import {
  formatBlogDate,
  formatViewCount,
  getRelatedBlogPosts,
} from "@/utils/blogData";

// Format dates and view counts
const formattedDate = formatBlogDate("2025-09-15");
const formattedViews = formatViewCount(1200);

// Get related posts
const related = getRelatedBlogPosts(currentPost, 3);
```

## Configuration

### Blog Settings

Update `blogConfig.js` to customize:

- Posts per page
- Latest posts count
- Site URL and social media handles
- Category colors and descriptions
- Reading speed calculation

### SEO Settings

The system automatically generates:

- Meta titles and descriptions
- Open Graph tags
- Structured data for blog posts

## Best Practices

### Content Guidelines

1. **Titles**: Keep under 60 characters for SEO
2. **Excerpts**: 150-160 characters for optimal meta descriptions
3. **Images**: Use high-quality images (1200x750px recommended)
4. **Content**: Use proper HTML structure with headings (h2, h3, etc.)

### SEO Optimization

1. **Slugs**: Use descriptive, keyword-rich slugs
2. **Tags**: Use relevant, specific tags
3. **Categories**: Keep categories broad but meaningful
4. **Content**: Include target keywords naturally

### Performance

1. **Images**: Optimize images before uploading
2. **Content**: Keep content focused and valuable
3. **Updates**: Regularly update older posts with new information

## Future Enhancements

The system is designed to easily support:

- Blog post search functionality
- Category and tag filtering
- Comment system integration
- Newsletter subscription
- Social media sharing
- Analytics integration

## Support

For questions or issues with the blog system, refer to this documentation or contact the development team.
