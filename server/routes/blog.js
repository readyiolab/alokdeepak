import express from 'express';

export function createBlogRouter(db) {
  const router = express.Router();

  // Get all blog posts with pagination
  router.get('/', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const offset = (page - 1) * limit;
      const category = req.query.category;

      let query = `
        SELECT 
          p.id, 
          p.title, 
          p.slug, 
          p.excerpt, 
          p.featured_image, 
          p.published_at, 
          u.name as author_name, 
          c.name as category_name
        FROM blog_posts p
        LEFT JOIN users u ON p.author_id = u.id
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.status = 'published'
      `;
      
      const queryParams = [];
      
      if (category) {
        query += ' AND c.slug = ?';
        queryParams.push(category);
      }
      
      query += ' ORDER BY p.published_at DESC LIMIT ? OFFSET ?';
      queryParams.push(limit, offset);
      
      const [posts] = await db.query(query, queryParams);
      
      // Get total count for pagination
      let countQuery = `
        SELECT COUNT(*) as total
        FROM blog_posts p
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.status = 'published'
      `;
      
      const countParams = [];
      
      if (category) {
        countQuery += ' AND c.slug = ?';
        countParams.push(category);
      }
      
      const [countResult] = await db.query(countQuery, countParams);
      const total = countResult[0].total;
      
      return res.status(200).json({
        success: true,
        data: {
          posts,
          pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit)
          }
        }
      });
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching blog posts'
      });
    }
  });

  // Get blog post by slug
  router.get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      
      const [posts] = await db.query(
        `
        SELECT 
          p.id, 
          p.title, 
          p.slug, 
          p.content, 
          p.excerpt,
          p.featured_image, 
          p.published_at, 
          u.name as author_name, 
          u.avatar as author_avatar,
          c.name as category_name,
          c.slug as category_slug
        FROM blog_posts p
        LEFT JOIN users u ON p.author_id = u.id
        LEFT JOIN categories c ON p.category_id = c.id
        WHERE p.slug = ? AND p.status = 'published'
        LIMIT 1
        `,
        [slug]
      );
      
      if (posts.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Blog post not found'
        });
      }
      
      const post = posts[0];
      
      // Get related posts in the same category
      const [relatedPosts] = await db.query(
        `
        SELECT 
          id, 
          title, 
          slug, 
          excerpt, 
          featured_image, 
          published_at
        FROM blog_posts
        WHERE category_id = (SELECT category_id FROM blog_posts WHERE slug = ?)
        AND slug != ?
        AND status = 'published'
        ORDER BY published_at DESC
        LIMIT 3
        `,
        [slug, slug]
      );
      
      return res.status(200).json({
        success: true,
        data: {
          post,
          relatedPosts
        }
      });
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching the blog post'
      });
    }
  });

  // Get all blog categories
  router.get('/categories/all', async (req, res) => {
    try {
      const [categories] = await db.query(
        `
        SELECT 
          c.id,
          c.name,
          c.slug,
          COUNT(p.id) as post_count
        FROM categories c
        LEFT JOIN blog_posts p ON c.id = p.category_id AND p.status = 'published'
        GROUP BY c.id
        ORDER BY c.name ASC
        `
      );
      
      return res.status(200).json({
        success: true,
        data: categories
      });
    } catch (error) {
      console.error('Error fetching blog categories:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching blog categories'
      });
    }
  });

  return router;
}