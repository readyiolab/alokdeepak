import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, Calendar, Clock, User, ArrowRight, Tag, TrendingUp, BookOpen, Users, Target, Lightbulb, Star, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';
import NewsletterForm from './NewsletterForm';

// Types
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  metaDescription: string;
  content: string;
  featuredImageUrl: string;
  author: string;
  author_bio: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: '5 Essential Digital Marketing Skills for 2025',
    excerpt: 'Discover the most in-demand digital marketing skills that will define success in 2025 and beyond.',
    metaDescription: 'Learn the top 5 digital marketing skills for 2025: data, AI, content, social media, and SEO. Start with Sownmark!',
    content: `
      <h2>Introduction</h2>
      <p>As the digital landscape evolves, staying ahead requires mastering key skills that drive results. Here are the top five digital marketing skills you need for 2025.</p>
      <h3>1. Data-Driven Marketing</h3>
      <p>Understanding analytics tools like Google Analytics 4 and leveraging data to optimize campaigns is crucial. Marketers must interpret data-driven strategies.</p>
      <h3>2. AI and Automation</h3>
      <p>Artificial intelligence is transforming campaigns. Use AI for content creation, ad targeting, and segmentation.</p>
      <h3>3. Content Strategy</h3>
      <p>High-quality content remains king. Master storytelling, video, and SEO to capture audiences.</p>
      <h3>4. Social Media Expertise</h3>
      <p>Platforms like TikTok and Instagram demand creative strategies tailored to diverse audiences.</p>
      <h3>5. Technical SEO</h3>
      <p>Optimize websites for speed, mobile-friendliness, and crawlability to rank higher.</p>
      <h2>Conclusion</h2>
      <p>Master these skills to lead in digital marketing. Start with Sownmark's courses today.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Johnson',
    author_bio: 'Sarah is a digital marketing expert with over 10 years of experience in SEO and content strategy.',
    date: '2025-06-15',
    readTime: '5 min read',
    category: 'Marketing Tips',
    tags: ['Skills', 'Trends', '2025'],
  },
  {
    id: 2,
    title: 'SEO Checklist: How to Rank Higher on Google',
    excerpt: 'A comprehensive guide to optimizing your website for better search engine rankings.',
    metaDescription: 'Boost your Google rankings with our SEO checklist: keywords, on-page, technical SEO, and backlinks. Join Sownmark!',
    content: `
      <h2>Introduction</h2>
      <p>Ranking higher on Google requires strategic SEO. This checklist covers essential steps.</p>
      <h3>1. Keyword Research</h3>
      <p>Identify high-intent keywords using Ahrefs or SEMrush, focusing on long-tail terms.</p>
      <h3>2. On-Page Optimization</h3>
      <p>Optimize titles, meta descriptions, and headers with keywords for relevance.</p>
      <h3>3. Technical SEO</h3>
      <p>Enhance site speed, mobile responsiveness, and fix broken links for better crawling.</p>
      <h3>4. Backlink Building</h3>
      <p>Earn quality backlinks through guest posts and partnerships, avoiding spammy links.</p>
      <h3>5. Content Updates</h3>
      <p>Refresh content regularly to stay relevant, monitoring via Google Search Console.</p>
      <h2>Conclusion</h2>
      <p>Use this checklist to boost rankings and traffic. Join our SEO course for more.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Michael Chen',
    author_bio: 'Michael is an SEO specialist passionate about helping businesses grow online.',
    date: '2025-06-10',
    readTime: '8 min read',
    category: 'SEO',
    tags: ['SEO', 'Google', 'Rankings'],
  },
  {
    id: 3,
    title: 'The Ultimate Guide to Social Media Content Planning',
    excerpt: 'Learn to create engaging social media content to drive engagement and brand growth.',
    metaDescription: 'Master social media planning with our guide: set goals, know your audience, and optimize content. Join Sownmark!',
    content: `
      <h2>Introduction</h2>
      <p>Effective social media planning builds a strong online presence. This guide shows how.</p>
      <h3>1. Define Goals</h3>
      <p>Set objectives like increasing engagement, traffic, or brand awareness.</p>
      <h3>2. Know Your Audience</h3>
      <p>Understand demographics using analytics to tailor content effectively.</p>
      <h3>3. Content Calendar</h3>
      <p>Plan posts with a calendar, balancing promotional and educational content.</p>
      <h3>4. Platform Strategies</h3>
      <p>Customize content for Instagram Stories, LinkedIn articles, or Twitter threads.</p>
      <h3>5. Analyze & Optimize</h3>
      <p>Track metrics and adjust strategies based on audience resonance.</p>
      <h2>Conclusion</h2>
      <p>Strategic planning transforms social media. Master it with our course.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Emma Davis',
    author_bio: 'Emma is a social media strategist who loves crafting engaging content.',
    date: '2025-06-05',
    readTime: '6 min read',
    category: 'Social Media',
    tags: ['Content', 'Planning', 'Engagement'],
  },
  {
    id: 4,
    title: 'Hiring Your First Digital Marketing Manager: What to Look For',
    excerpt: 'Key qualities to consider when hiring your first digital marketing team member.',
    metaDescription: 'Hire the right digital marketing manager with skills in strategy, SEO, and creativity. Find talent with Sownmark!',
    content: `
      <h2>Introduction</h2>
      <p>Hiring a digital marketing manager is vital for growth. Here’s what to seek.</p>
      <h3>1. Strategic Thinking</h3>
      <p>Choose candidates who align marketing strategies with business goals.</p>
      <h3>2. Technical Expertise</h3>
      <p>Proficiency in SEO, PPC, and tools like Google Analytics is crucial.</p>
      <h3>3. Creativity</h3>
      <p>Look for innovative campaign ideas that stand out digitally.</p>
      <h3>4. Leadership</h3>
      <p>Ensure they can inspire teams and collaborate cross-departmentally.</p>
      <h3>5. Adaptability</h3>
      <p>Select someone who keeps up with digital trends and adapts fast.</p>
      <h2>Conclusion</h2>
      <p>The right manager transforms your business. Find talent with Sownmark.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'David Wilson',
    author_bio: 'David is a hiring consultant specializing in digital marketing roles.',
    date: '2025-05-30',
    readTime: '7 min read',
    category: 'Hiring',
    tags: ['Hiring', 'Team Building', 'Management'],
  },
  {
    id: 5,
    title: 'Why Responsive Web Design is Non-Negotiable Today',
    excerpt: 'Understand the critical role of responsive design in modern web development.',
    metaDescription: 'Discover why responsive web design is key for SEO, UX, and mobile traffic. Learn with Sownmark’s course!',
    content: `
      <h2>Introduction</h2>
      <p>Responsive design ensures sites look great on all devices. Here’s why it matters.</p>
      <h3>1. Mobile Traffic</h3>
      <p>Over 60% of traffic is mobile. Responsive sites offer seamless experiences.</p>
      <h3>2. SEO Benefits</h3>
      <p>Google favors mobile-friendly sites, boosting rankings with responsive design.</p>
      <h3>3. User Experience</h3>
      <p>Consistent UX across devices lowers bounce rates and boosts engagement.</p>
      <h3>4. Cost Efficiency</h3>
      <p>One responsive site is cheaper than separate desktop/mobile versions.</p>
      <h3>5. Future-Proofing</h3>
      <p>Responsive design adapts to new devices, keeping sites relevant.</p>
      <h2>Conclusion</h2>
      <p>Invest in responsive design to stay competitive. Learn with Sownmark.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Lisa Parker',
    author_bio: 'Lisa is a web developer advocating for user-friendly design.',
    date: '2025-05-25',
    readTime: '4 min read',
    category: 'Web Dev',
    tags: ['Responsive', 'UX', 'Mobile'],
  },
  {
    id: 6,
    title: 'Understanding Google Analytics 4: A Beginner\'s Guide',
    excerpt: 'Master GA4 basics to track website performance effectively.',
    metaDescription: 'Learn Google Analytics 4 basics: setup, events, and reports for better tracking. Join Sownmark’s course!',
    content: `
      <h2>Introduction</h2>
      <p>Google Analytics 4 (GA4) is the latest tool for tracking performance. Learn the basics.</p>
      <h3>1. Setting Up GA4</h3>
      <p>Create a GA4 property and integrate via Google Tag Manager.</p>
      <h3>2. Understanding Events</h3>
      <p>GA4 uses event-based tracking. Set up custom events for interactions.</p>
      <h3>3. Analyzing Reports</h3>
      <p>Use GA4 reports to track behavior, traffic, and conversions.</p>
      <h3>4. Custom Dashboards</h3>
      <p>Build dashboards tailored to your business goals.</p>
      <h3>5. Data Privacy</h3>
      <p>Ensure GDPR compliance when collecting data.</p>
      <h2>Conclusion</h2>
      <p>GA4 powers data-driven marketing. Learn it with Sownmark’s course.</p>
    `,
    featuredImageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'James Rodriguez',
    author_bio: 'James is a data analyst with expertise in Google Analytics.',
    date: '2025-05-20',
    readTime: '9 min read',
    category: 'SEO',
    tags: ['Analytics', 'Google', 'Data'],
  },
  {
    id: 9,
    title: 'Digital Marketing Course in India with Job Guarantee',
    excerpt: 'Join India’s top-rated digital marketing course with 100% job guarantee. Learn live ads, SEO, and get placed fast.',
    metaDescription: 'Join India\'s top-rated digital marketing course with 100% job guarantee. Learn live ads, SEO, and get placed fast. Enroll now at Sownmark!',
    content: `
      <h2>Why Digital Marketing is Booming in India</h2>
      <p>The digital economy is growing rapidly. With over 800 million internet users in India, businesses are moving online, creating a huge demand for skilled digital marketers. Companies across Delhi, Mumbai, Bangalore, and Tier 2 cities are hiring professionals for SEO, paid ads, traffic, and lead generation.</p>
      <h3>Best Digital Marketing Course in Delhi with Job Guarantee</h3>
      <p>Sownmark’s Digital Marketing Mastery Course stands out with its 100% practical training. Designed for job seekers, students, entrepreneurs, and freelancers, it offers live project-based learning. You’ll run real campaigns, analyze live data, and create results.</p>
      <h3>Short-Term Courses with Long-Term Benefits</h3>
      <p>Sownmark’s 3-month course covers Google Ads, Meta Ads, SEO, keyword research, email/WhatsApp marketing, e-commerce ads, landing page design, and analytics. It includes interview training and guaranteed job assistance.</p>
      <h3>Why Choose an Online Course?</h3>
      <p>Sownmark’s online course offers hands-on training and placement support for learners across India. Learn from experts, practice on real tools, and attend doubt-clearing sessions from home.</p>
      <h3>Student Success Stories</h3>
      <p>“I was jobless for 6 months until I joined Sownmark. Within 2 months, I cracked an interview at a Delhi-based agency.” – Radhika Sharma<br>“The live ads training helped me run Amazon Ads for US clients.” – Ankit Tiwari</p>
      <h2>Conclusion</h2>
      <p>In 2025, digital marketing skills are invaluable. Sownmark’s course offers real projects, job support, and confidence. Enroll at <a href="https://sownmark.com">Sownmark</a> today.</p>
    `,
    featuredImageUrl: 'https://res.cloudinary.com/dbyjiqjui/image/upload/v1754372724/Blog_1_ciuj5z.png',
    author: 'Priya Mehra',
    author_bio: 'Priya is a digital marketing trainer passionate about empowering careers.',
    date: '2025-08-01',
    readTime: '6 min read',
    category: 'Marketing Tips',
    tags: ['digital marketing course in india', 'job guaranteed digital marketing course', 'digital marketing course delhi', 'short term digital marketing course', 'online digital marketing course', 'sownmark digital marketing course'],
  },
  {
    id: 10,
    title: 'Want to Land a ₹9 LPA Job? Start With These Digital Marketing Courses in India',
    excerpt: 'Join India’s top digital marketing course with 100% job guarantee. Learn SEO, PPC, and analytics to secure high-paying roles.',
    metaDescription: 'Join India\'s top-rated digital marketing course with 100% job guarantee. Learn live ads, SEO, and get placed fast. Enroll now at Sownmark!',
    content: `
      <h2>Why Digital Marketing Is the Career of the Future</h2>
      <p>With over 800 million internet users in India, businesses from startups to MNCs need digital marketers. Over 250,000 job listings on Naukri and LinkedIn seek skills in SEO, PPC, content, and analytics.</p>
      <h3>What Makes a Course Worth Your Time?</h3>
      <p>Top courses offer hands-on experience with live campaigns, training in tools like Google Ads, Meta Ads Manager, Ahrefs, SEMrush, and HubSpot, plus mentorship and placement support.</p>
      <h3>Sownmark Digital Marketing Course: The Job-Ready Choice</h3>
      <p>Sownmark’s course provides 100% placement support, live campaign execution, certifications (Google, Meta, HubSpot), and 1-on-1 mentorship. Students secure jobs at Lenskart, BigBasket, and D2C brands with packages from ₹4.5 LPA to ₹9 LPA.</p>
      <h3>Why Choose Digital Marketing Classes in Delhi?</h3>
      <p>Delhi offers access to tech companies, experienced trainers, and networking. Sownmark’s Delhi courses blend quality education with career support.</p>
      <h3>What You Will Learn</h3>
      <p>Master SEO, PPC, social media marketing, content strategy, email marketing, Google Analytics, and automation tools.</p>
      <h3>Real Results</h3>
      <p>“I went from a ₹12,000/month BPO job to a ₹8.5 LPA Performance Marketer role.” – Rahul Sharma<br>“The mentorship gave me confidence to manage campaigns.” – Pooja Verma</p>
      <h2>Final Thoughts</h2>
      <p>Digital marketing skills open doors to high-paying careers. Enroll in Sownmark’s course at <a href="https://sownmark.com">Sownmark</a> to start your journey.</p>
    `,
    featuredImageUrl: 'https://res.cloudinary.com/dbyjiqjui/image/upload/v1754372852/WhatsApp_Image_2025-08-05_at_11.15.55_0882c8a0_wmcuvn.jpg',
    author: 'Vikram Singh',
    author_bio: 'Vikram is a digital marketing expert focused on career growth strategies.',
    date: '2025-08-03',
    readTime: '7 min read',
    category: 'Marketing Tips',
    tags: ['digital marketing course in india', 'job guaranteed digital marketing course', 'digital marketing course delhi', 'online digital marketing course', 'sownmark digital marketing course'],
  },
];

const BlogPage: React.FC = () => {
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

  const generateSlug = (title: string): string =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const categories = [
    { name: 'All', icon: <BookOpen className="w-4 h-4" />, count: 8 },
    { name: 'SEO', icon: <TrendingUp className="w-4 h-4" />, count: 2 },
    { name: 'Social Media', icon: <Users className="w-4 h-4" />, count: 1 },
    { name: 'Web Dev', icon: <Target className="w-4 h-4" />, count: 1 },
    { name: 'Hiring', icon: <User className="w-4 h-4" />, count: 1 },
    { name: 'Marketing Tips', icon: <Lightbulb className="w-4 h-4" />, count: 3 },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Digital Marketing & Tech Blog | Sownmark</title>
        <meta
          name="description"
          content="Explore expert insights on digital marketing, SEO, design, and business growth from the Sownmark blog. Stay ahead with proven strategies"
        />
        <meta
          name="keywords"
          content="digital marketing blog, SEO tips blog, online marketing trends, content marketing blog, small business growth tips"
        />
        <link rel="canonical" href="https://sownmark.com/blog" />
        <meta property="og:title" content="Digital Marketing & Tech Blog | Sownmark" />
        <meta
          property="og:description"
          content="Explore expert insights on digital marketing, SEO, design, and business growth from the Sownmark blog. Stay ahead with proven strategies"
        />
        <meta property="og:url" content="https://sownmark.com/blog" />
        <meta property="og:type" content="website" />
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
                        src={post.featuredImageUrl}
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
                <NewsletterForm />

                <motion.div
                  {...fadeInUp}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
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
                            src={post.featuredImageUrl}
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

                <motion.div
                  {...fadeInUp}
                  className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {['SEO', 'Social Media', 'Content Marketing', 'Web Development', 'Analytics', 'Digital Marketing Course', 'Job Guarantee'].map((tag, index) => (
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
                to="/contact#contact-form"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact#contact-form"
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