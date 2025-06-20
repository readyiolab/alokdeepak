-- Create Database
CREATE DATABASE IF NOT EXISTS sownmark_db;
USE sownmark_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  bio TEXT,
  job_title VARCHAR(255),
  role ENUM('admin', 'instructor', 'student', 'staff') NOT NULL DEFAULT 'student',
  status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Categories Table
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog Posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content LONGTEXT,
  featured_image VARCHAR(255),
  author_id INT,
  category_id INT,
  status ENUM('draft', 'published', 'archived') NOT NULL DEFAULT 'draft',
  published_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE SET NULL,
  FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE SET NULL
);

-- Tags Table
CREATE TABLE IF NOT EXISTS tags (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog Post Tags (Many-to-Many)
CREATE TABLE IF NOT EXISTS blog_post_tags (
  post_id INT NOT NULL,
  tag_id INT NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES blog_posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

-- Courses Table
CREATE TABLE IF NOT EXISTS courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  short_description TEXT,
  long_description LONGTEXT,
  featured_image VARCHAR(255),
  price DECIMAL(10, 2),
  duration VARCHAR(100),
  level ENUM('beginner', 'intermediate', 'advanced', 'all-levels') NOT NULL DEFAULT 'all-levels',
  what_youll_learn TEXT,
  prerequisites TEXT,
  target_audience TEXT,
  status ENUM('active', 'inactive', 'coming-soon') NOT NULL DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Course Modules Table
CREATE TABLE IF NOT EXISTS course_modules (
  id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  order_index INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE
);

-- Course Instructors (Many-to-Many)
CREATE TABLE IF NOT EXISTS course_instructors (
  course_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (course_id, user_id),
  FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Contact Submissions Table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status ENUM('new', 'read', 'responded', 'archived') NOT NULL DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Job Listings Table
CREATE TABLE IF NOT EXISTS job_listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  company_name VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  job_type ENUM('full-time', 'part-time', 'contract', 'freelance', 'internship') NOT NULL,
  description LONGTEXT,
  requirements TEXT,
  salary_range VARCHAR(100),
  application_url VARCHAR(255),
  status ENUM('active', 'filled', 'expired') NOT NULL DEFAULT 'active',
  expires_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Services Table
CREATE TABLE IF NOT EXISTS services (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  short_description TEXT,
  long_description LONGTEXT,
  icon VARCHAR(255),
  featured_image VARCHAR(255),
  service_type ENUM('agency', 'development', 'hiring', 'education') NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS testimonials (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  designation VARCHAR(255),
  image VARCHAR(255),
  testimonial TEXT NOT NULL,
  rating TINYINT UNSIGNED,
  service_type ENUM('agency', 'development', 'hiring', 'education', 'general') NOT NULL DEFAULT 'general',
  display_order INT NOT NULL DEFAULT 0,
  is_featured BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert Sample Data
-- Admin User
INSERT INTO users (name, email, password, role, job_title, bio) 
VALUES ('Admin User', 'admin@sownmark.com', '$2a$10$NqOgEJAiK7cYEBIFLlY4o.PoMU6LDkAuVBLIKBY.7VpAYIbNIjFq6', 'admin', 'Administrator', 'System administrator');

-- Categories
INSERT INTO categories (name, slug, description) VALUES 
('SEO', 'seo', 'Search Engine Optimization tips and strategies'),
('Social Media', 'social-media', 'Social media marketing strategies and platform updates'),
('Content Marketing', 'content-marketing', 'Content strategy, creation and distribution'),
('Digital Strategy', 'digital-strategy', 'Comprehensive digital marketing strategies'),
('Web Development', 'web-development', 'Website development tips and best practices');

-- Sample Blog Posts
INSERT INTO blog_posts (title, slug, excerpt, content, featured_image, author_id, category_id, status, published_at) VALUES 
('5 Essential Digital Marketing Skills for 2025', '5-essential-digital-marketing-skills-for-2025', 
'Stay ahead of the curve with these must-have digital marketing skills that will be in high demand in 2025.', 
'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>1. AI and Machine Learning</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>2. Data Analytics</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><h2>3. Content Creation</h2><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>4. SEO Expertise</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>5. Social Media Strategy</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>', 
'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
1, 4, 'published', NOW()),

('SEO Checklist: How to Rank Higher on Google', 'seo-checklist-how-to-rank-higher-on-google', 
'Follow this comprehensive SEO checklist to improve your website's visibility and climb up Google's search rankings.', 
'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>On-Page SEO</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>Technical SEO</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><h2>Off-Page SEO</h2><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><h2>Content Strategy</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><h2>Monitoring and Analytics</h2><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>', 
'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
1, 1, 'published', NOW());

-- Sample Courses
INSERT INTO courses (title, slug, short_description, long_description, featured_image, price, duration, level, what_youll_learn, prerequisites, target_audience, status) VALUES 
('Certified Digital Marketing Professional', 'certified-digital-marketing-professional', 
'A comprehensive program covering SEO, SEM, Social Media, Content Marketing, Email Marketing, Analytics, and more.', 
'<p>This comprehensive digital marketing course will transform you into a complete digital marketing professional. From understanding the foundations of digital strategy to mastering specific channels and measuring success through analytics, this course covers it all.</p><p>Our hands-on approach ensures you'll not just learn theory but apply your knowledge through real-world projects and case studies. By the end of this course, you'll have a portfolio of work to showcase to potential employers or clients.</p>', 
'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
1299.00, '12 weeks', 'beginner', 
'Develop effective SEO strategies,Manage successful paid ad campaigns,Create engaging social media content,Implement conversion-focused email marketing,Analyze campaign performance with analytics tools', 
'Basic computer skills,Interest in marketing,No prior digital marketing experience required', 
'Marketing professionals looking to upskill,Career changers entering the digital marketing field,Entrepreneurs wanting to market their businesses,Students looking to start a career in digital marketing', 
'active');

-- Sample Services
INSERT INTO services (title, slug, short_description, long_description, icon, service_type, display_order) VALUES 
('Search Engine Optimization (SEO)', 'search-engine-optimization', 
'Improve your organic search rankings, drive more qualified traffic, and establish your authority online with our expert SEO strategies.', 
'<p>Our comprehensive SEO services are designed to improve your visibility in search engines and drive organic traffic to your website. We focus on sustainable, white-hat techniques that provide long-term results.</p><p>Our approach includes:</p><ul><li>Thorough website audit and competitive analysis</li><li>Keyword research and strategy development</li><li>On-page optimization</li><li>Technical SEO improvements</li><li>Content strategy and creation</li><li>Link building and off-page SEO</li><li>Local SEO (if applicable)</li><li>Regular reporting and analytics</li></ul>', 
'search', 'agency', 1);

-- Sample Testimonials
INSERT INTO testimonials (name, company, designation, image, testimonial, rating, service_type, is_featured) VALUES 
('Sarah Johnson', 'Tech Innovators', 'Digital Marketing Manager', 
'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600', 
'Sownmark's digital marketing course transformed my career. The instructors were knowledgeable and the content was relevant and up-to-date. Highly recommend!', 
5, 'education', TRUE);