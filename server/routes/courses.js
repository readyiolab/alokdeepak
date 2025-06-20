import express from 'express';

export function createCoursesRouter(db) {
  const router = express.Router();

  // Get all courses
  router.get('/', async (req, res) => {
    try {
      const [courses] = await db.query(
        `
        SELECT 
          c.id,
          c.title,
          c.slug,
          c.short_description,
          c.featured_image,
          c.price,
          c.duration,
          c.level,
          c.status
        FROM courses c
        WHERE c.status = 'active'
        ORDER BY c.created_at DESC
        `
      );
      
      return res.status(200).json({
        success: true,
        data: courses
      });
    } catch (error) {
      console.error('Error fetching courses:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching courses'
      });
    }
  });

  // Get course by slug
  router.get('/:slug', async (req, res) => {
    try {
      const { slug } = req.params;
      
      const [courses] = await db.query(
        `
        SELECT 
          c.id,
          c.title,
          c.slug,
          c.short_description,
          c.long_description,
          c.featured_image,
          c.price,
          c.duration,
          c.level,
          c.status,
          c.what_youll_learn,
          c.prerequisites,
          c.target_audience
        FROM courses c
        WHERE c.slug = ? AND c.status = 'active'
        LIMIT 1
        `,
        [slug]
      );
      
      if (courses.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'Course not found'
        });
      }
      
      const course = courses[0];
      
      // Get course modules
      const [modules] = await db.query(
        `
        SELECT 
          m.id,
          m.title,
          m.description,
          m.order_index
        FROM course_modules m
        WHERE m.course_id = ?
        ORDER BY m.order_index ASC
        `,
        [course.id]
      );
      
      // Get instructors
      const [instructors] = await db.query(
        `
        SELECT 
          u.id,
          u.name,
          u.bio,
          u.avatar,
          u.job_title
        FROM users u
        JOIN course_instructors ci ON u.id = ci.user_id
        WHERE ci.course_id = ?
        `,
        [course.id]
      );
      
      return res.status(200).json({
        success: true,
        data: {
          ...course,
          modules,
          instructors
        }
      });
    } catch (error) {
      console.error('Error fetching course:', error);
      return res.status(500).json({
        success: false,
        message: 'An error occurred while fetching the course'
      });
    }
  });

  return router;
}