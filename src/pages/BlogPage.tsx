import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight, Tag, TrendingUp, BookOpen, Users, Target, Lightbulb, Star, Play, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import NewsletterForm from './NewsletterForm';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Function to generate URL-friendly slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const categories = [
    { name: 'All', icon: <BookOpen className="w-4 h-4" />, count: 8 },
    { name: 'SEO', icon: <TrendingUp className="w-4 h-4" />, count: 2 },
    { name: 'Social Media', icon: <Users className="w-4 h-4" />, count: 2 },
    { name: 'Web Dev', icon: <Target className="w-4 h-4" />, count: 1 },
    { name: 'Hiring', icon: <User className="w-4 h-4" />, count: 1 },
    { name: 'Marketing Tips', icon: <Lightbulb className="w-4 h-4" />, count: 2 },
  ];

  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Digital Marketing Skills for 2025',
      excerpt: 'Discover the most in-demand digital marketing skills that will define success in 2025 and beyond.',
      content: `
        <h2>Introduction</h2>
        <p>As the digital landscape evolves, staying ahead requires mastering key skills that drive results. Here are the top five digital marketing skills you need for 2025.</p>
        <h3>1. Data-Driven Marketing</h3>
        <p>Understanding analytics tools like Google Analytics 4 and leveraging data to optimize campaigns is crucial. Marketers must interpret data to make informed decisions.</p>
        <h3>2. AI and Automation</h3>
        <p>Artificial intelligence is transforming how campaigns are created and optimized. Learn to use AI tools for content creation, ad targeting, and customer segmentation.</p>
        <h3>3. Content Strategy</h3>
        <p>High-quality, engaging content remains king. Master storytelling, video content, and SEO-driven content to capture audience attention.</p>
        <h3>4. Social Media Expertise</h3>
        <p>Platforms like TikTok and Instagram demand creative strategies. Learn to craft platform-specific campaigns that resonate with diverse audiences.</p>
        <h3>5. Technical SEO</h3>
        <p>Optimize websites for speed, mobile-friendliness, and crawlability to rank higher on search engines. Stay updated on algorithm changes.</p>
        <h2>Conclusion</h2>
        <p>Mastering these skills will position you as a leader in the digital marketing field. Start learning today with Sownmark's comprehensive courses.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: '2025-06-15',
      readTime: '5 min read',
      category: 'Marketing Tips',
      tags: ['Skills', 'Trends', '2025'],
    },
    {
      id: 2,
      title: 'SEO Checklist: How to Rank Higher on Google',
      excerpt: 'A comprehensive guide to optimizing your website for better search engine rankings and organic traffic.',
      content: `
        <h2>Introduction</h2>
        <p>Ranking higher on Google requires a strategic approach to SEO. This checklist covers essential steps to boost your site's visibility.</p>
        <h3>1. Keyword Research</h3>
        <p>Identify high-intent keywords using tools like Ahrefs or SEMrush. Focus on long-tail keywords for better targeting.</p>
        <h3>2. On-Page Optimization</h3>
        <p>Optimize title tags, meta descriptions, and headers with target keywords. Ensure content is relevant and high-quality.</p>
        <h3>3. Technical SEO</h3>
        <p>Improve site speed, mobile responsiveness, and fix broken links. Use XML sitemaps and robots.txt for better crawling.</p>
        <h3>4. Backlink Building</h3>
        <p>Earn high-quality backlinks through guest posting and partnerships. Avoid spammy links to maintain credibility.</p>
        <h3>5. Content Updates</h3>
        <p>Regularly update content to keep it fresh and relevant. Monitor performance using Google Search Console.</p>
        <h2>Conclusion</h2>
        <p>Follow this checklist to improve your Google rankings and drive organic traffic. Enroll in our SEO course for deeper insights.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      date: '2025-06-10',
      readTime: '8 min read',
      category: 'SEO',
      tags: ['SEO', 'Google', 'Rankings'],
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Social Media Content Planning',
      excerpt: 'Learn how to create engaging social media content that drives engagement and builds your brand.',
      content: `
        <h2>Introduction</h2>
        <p>Effective social media content planning is key to building a strong online presence. This guide walks you through the process.</p>
        <h3>1. Define Your Goals</h3>
        <p>Set clear objectives, such as increasing engagement, driving traffic, or boosting brand awareness.</p>
        <h3>2. Know Your Audience</h3>
        <p>Understand your target demographic using analytics tools. Tailor content to their preferences and behaviors.</p>
        <h3>3. Content Calendar Creation</h3>
        <p>Plan posts in advance using a content calendar. Balance promotional, educational, and entertaining content.</p>
        <h3>4. Platform-Specific Strategies</h3>
        <p>Customize content for each platform, leveraging Instagram Stories, LinkedIn articles, or Twitter threads.</p>
        <h3>5. Analyze and Optimize</h3>
        <p>Track performance metrics and adjust your strategy based on what resonates with your audience.</p>
        <h2>Conclusion</h2>
        <p>Strategic content planning can transform your social media presence. Join our course to master these techniques.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emma Davis',
      date: '2025-06-05',
      readTime: '6 min read',
      category: 'Social Media',
      tags: ['Content', 'Planning', 'Engagement'],
    },
    {
      id: 4,
      title: 'Hiring Your First Digital Marketing Manager: What to Look For',
      excerpt: 'Essential qualities and skills to consider when hiring your first digital marketing team member.',
      content: `
        <h2>Introduction</h2>
        <p>Hiring a digital marketing manager is a critical step for business growth. Here’s what to look for in a candidate.</p>
        <h3>1. Strategic Thinking</h3>
        <p>Look for candidates who can develop and execute comprehensive marketing strategies aligned with business goals.</p>
        <h3>2. Technical Expertise</h3>
        <p>Proficiency in SEO, PPC, and analytics tools like Google Analytics is essential for measurable results.</p>
        <h3>3. Creativity</h3>
        <p>A great manager brings creative ideas for campaigns that stand out in a crowded digital space.</p>
        <h3>4. Leadership Skills</h3>
        <p>They should inspire and manage teams, collaborating effectively with other departments.</p>
        <h3>5. Adaptability</h3>
        <p>The digital landscape changes rapidly. Choose someone who stays updated on trends and adapts quickly.</p>
        <h2>Conclusion</h2>
        <p>Hiring the right digital marketing manager can transform your business. Partner with Sownmark for top talent.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Wilson',
      date: '2025-05-30',
      readTime: '7 min read',
      category: 'Hiring',
      tags: ['Hiring', 'Team Building', 'Management'],
    },
    {
      id: 5,
      title: 'Why Responsive Web Design is Non-Negotiable Today',
      excerpt: 'Understanding the critical importance of responsive design in modern web development.',
      content: `
        <h2>Introduction</h2>
        <p>Responsive web design ensures your site looks great on all devices. Here’s why it’s essential today.</p>
        <h3>1. Mobile Traffic Dominance</h3>
        <p>Over 60% of web traffic comes from mobile devices. A responsive site ensures a seamless user experience.</p>
        <h3>2. SEO Benefits</h3>
        <p>Google prioritizes mobile-friendly websites, boosting your rankings with responsive design.</p>
        <h3>3. User Experience</h3>
        <p>A consistent experience across devices reduces bounce rates and increases engagement.</p>
        <h3>4. Cost Efficiency</h3>
        <p>Maintaining one responsive site is more cost-effective than separate desktop and mobile versions.</p>
        <h3>5. Future-Proofing</h3>
        <p>Responsive design adapts to new devices and screen sizes, keeping your site relevant.</p>
        <h2>Conclusion</h2>
        <p>Invest in responsive design to stay competitive. Learn web development with Sownmark’s courses.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Parker',
      date: '2025-05-25',
      readTime: '4 min read',
      category: 'Web Dev',
      tags: ['Responsive', 'UX', 'Mobile'],
    },
    {
      id: 6,
      title: 'Understanding Google Analytics 4: A Beginner\'s Guide',
      excerpt: 'Master the basics of GA4 and learn how to track your website\'s performance effectively.',
      content: `
        <h2>Introduction</h2>
        <p>Google Analytics 4 (GA4) is the latest tool for tracking website performance. This guide covers the basics for beginners.</p>
        <h3>1. Setting Up GA4</h3>
        <p>Create a GA4 property and integrate it with your website using Google Tag Manager.</p>
        <h3>2. Understanding Events</h3>
        <p>GA4 focuses on event-based tracking. Learn to set up custom events for user interactions.</p>
        <h3>3. Analyzing Reports</h3>
        <p>Use GA4’s reports to track user behavior, traffic sources, and conversion rates.</p>
        <h3>4. Custom Dashboards</h3>
        <p>Create dashboards tailored to your business goals for quick insights.</p>
        <h3>5. Data Privacy</h3>
        <p>Ensure compliance with GDPR and other regulations when collecting data.</p>
        <h2>Conclusion</h2>
        <p>GA4 is a powerful tool for data-driven marketing. Master it with Sownmark’s analytics course.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'James Rodriguez',
      date: '2025-05-20',
      readTime: '9 min read',
      category: 'SEO',
      tags: ['Analytics', 'Google', 'Data'],
    },
    {
      id: 7,
      title: 'Leveraging AI in Digital Marketing: Trends to Watch',
      excerpt: 'Explore how artificial intelligence is transforming digital marketing strategies and execution.',
      content: `
        <h2>Introduction</h2>
        <p>AI is revolutionizing digital marketing. Discover key trends to watch in this space.</p>
        <h3>1. AI-Powered Advertising</h3>
        <p>Use AI to optimize ad targeting, bidding, and creative generation for better ROI.</p>
        <h3>2. Content Creation</h3>
        <p>AI tools like chatbots and content generators streamline content production at scale.</p>
        <h3>3. Personalization</h3>
        <p>Deliver hyper-personalized user experiences using AI-driven insights and recommendations.</p>
        <h3>4. Predictive Analytics</h3>
        <p>Predict customer behavior and campaign performance with AI-powered analytics.</p>
        <h3>5. Automation</h3>
        <p>Automate repetitive tasks like email marketing and social media scheduling with AI.</p>
        <h2>Conclusion</h2>
        <p>AI is the future of digital marketing. Stay ahead with Sownmark’s AI marketing course.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Anna Thompson',
      date: '2025-05-15',
      readTime: '6 min read',
      category: 'Marketing Tips',
      tags: ['AI', 'Innovation', 'Future'],
    },
    {
      id: 8,
      title: 'Social Media ROI: Measuring What Matters',
      excerpt: 'Learn how to measure and optimize your social media return on investment with actionable metrics.',
      content: `
        <h2>Introduction</h2>
        <p>Measuring social media ROI is critical for justifying your marketing spend. Here’s how to do it effectively.</p>
        <h3>1. Define KPIs</h3>
        <p>Identify key performance indicators like engagement, conversions, and click-through rates.</p>
        <h3>2. Track Revenue</h3>
        <p>Use attribution models to link social media efforts to sales and revenue.</p>
        <h3>3. Measure Engagement</h3>
        <p>Analyze likes, shares, and comments to gauge audience interaction.</p>
        <h3>4. Optimize Campaigns</h3>
        <p>Use A/B testing to refine content and improve ROI over time.</p>
        <h3>5. Use Analytics Tools</h3>
        <p>Leverage tools like Sprout Social or Hootsuite for comprehensive ROI tracking.</p>
        <h2>Conclusion</h2>
        <p>Effective ROI measurement drives smarter social media strategies. Learn more with Sownmark’s courses.</p>
      `,
      featuredImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Robert Kim',
      date: '2025-05-10',
      readTime: '7 min read',
      category: 'Social Media',
      tags: ['ROI', 'Metrics', 'Strategy'],
    },
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
        <Helmet>
    <title> Digital Marketing & Tech Blog | Sownmark</title>
    <meta name="description" content="Explore expert insights on digital marketing, SEO, design, and business growth from the Sownmark blog. Stay ahead with proven strategies" />
    <meta name="keywords" content="digital marketing blog, SEO tips blog, online marketing trends, content marketing blog, small business growth tips" />
  </Helmet>
      {/* Hero Section - Dark Theme */}
      <section
        className="relative min-h-[100vh] flex items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #90abff 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #90abff 0%, transparent 50%)`,
              backgroundSize: '100px 100px',
            }}
          ></div>
        </div>

        <div className="container relative z-10 text-center text-white px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full mb-6 mt-20 border border-white/20"
            >
              <Star className="w-3 h-3 text-yellow-400 fill-current" />
              <span className="text-xs font-medium">Expert Insights for Digital Success</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Sownmark Blog
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Insights & Innovations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay ahead with expert insights on digital marketing, web development, and talent acquisition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
              >
                Explore Blogs
                <ArrowRight className="w-4 h-4" />
              </motion.button>

             
            </div>

            
          </motion.div>
        </div>
      </section>

      {/* Search and Categories Section - Light Theme */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Explore Our
              <span
                className="block text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #1a2957, #90abff)' }}
              >
                Blog Content
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover articles crafted by industry experts to help you stay ahead in the digital world.
            </p>
          </motion.div>

          <motion.div {...fadeInUp} className="relative max-w-4xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={fadeInUp}
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 group relative ${
                  selectedCategory === category.name
                    ? 'bg-white text-gray-900 shadow-lg border border-blue-200'
                    : 'bg-white text-gray-600 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid - Dark Theme */}
      <section className="py-16 sm:py-20" style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}>
        <div className="container px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Dive Into Our
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Expert Insights
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Comprehensive articles designed to empower you with actionable knowledge and strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filteredPosts.map((post) => (
                <motion.article
                  key={post.id}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed">{post.excerpt}</p>

                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-5">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag, tagIndex) => (
                            <span key={tagIndex} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={`/blog/${generateSlug(post.title)}`}
                          className="w-32 py-2 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                          style={{
                            background: 'linear-gradient(135deg, #1a2957, #90abff)',
                            color: 'white',
                          }}
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
               <NewsletterForm/>

                <motion.div {...fadeInUp} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <Link
                          key={post.id}
                          to={`/blog/${generateSlug(post.title)}`}
                          className="flex gap-4 group hover:bg-gray-50 p-2 rounded-xl transition-colors duration-300 w-full text-left"
                        >
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                              {post.title}
                            </h4>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                              <Calendar className="w-3 h-3" />
                              <span>{new Date(post.date).toLocaleDateString()}</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div {...fadeInUp} className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['SEO', 'Social Media', 'Content Marketing', 'Web Development', 'Analytics', 'Strategy', 'AI', 'Trends'].map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-full text-sm cursor-pointer transition-colors duration-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <motion.div {...fadeInUp} className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors duration-300">
                Previous
              </button>
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">1</button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors duration-300">
                2
              </button>
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors duration-300">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Dark Theme */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #90abff 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, #90abff 0%, transparent 50%)`,
            }}
          ></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6 md:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Your Digital Presence?
              </span>
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Let's discuss how Sownmark can help you achieve your digital marketing goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
                to='/contact#contact-form'
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                
                 to='/contact#contact-form'
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
              >
                Get Free Consultation
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Free Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Expert Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm">Community Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;