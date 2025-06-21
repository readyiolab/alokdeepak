import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User, Tag, Star, CheckCircle } from 'lucide-react';

const BlogPostPage = () => {
  const { slug } = useParams();

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const blogPosts = [
    {
      id: 1,
      title: '5 Essential Digital Marketing Skills for 2025',
      excerpt: 'Discover the most in-demand digital marketing skills that will define success in 2025 and beyond.',
      content: `
        <h2>Introduction</h2>
        <p>As the digital landscape evolves, staying ahead requires mastering key skills that drive results. Here are the top five digital marketing skills you need for 2025.</p>
        <h3>1. Data-Driven Marketing</h3>
        <p>Understanding analytics tools like Google Analytics 4 and leveraging data to optimize campaigns is crucial. Marketers must interpret data-driven strategies.</p>
        <h3>2.2 AI and Automation</h3>
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
      date: '2025-06-15',
      readTime: '5 min read',
      category: 'Marketing Tips',
      tags: ['Skills', 'Trends', '2025'],
    },
    {
      id: 2,
      title: 'SEO Checklist: How to Rank Higher on Google',
      excerpt: 'A comprehensive guide to optimizing your website for better search engine rankings.',
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
      date: '2025-06-10',
      readTime: '8 min read',
      category: 'SEO',
      tags: ['SEO', 'Google', 'Rankings'],
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Social Media Content Planning',
      excerpt: 'Learn to create engaging social media content to drive engagement and brand growth.',
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
      date: '2025-06-05',
      readTime: '6 min read',
      category: 'Social Media',
      tags: ['Content', 'Planning', 'Engagement'],
    },
    {
      id: 4,
      title: 'Hiring Your First Digital Marketing Manager: What to Look For',
      excerpt: 'Key qualities to consider when hiring your first digital marketing team member.',
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
      date: '2025-05-30',
      readTime: '7 min read',
      category: 'Hiring',
      tags: ['Hiring', 'Team Building', 'Management'],
    },
    {
      id: 5,
      title: 'Why Responsive Web Design is Non-Negotiable Today',
      excerpt: 'Understand the critical role of responsive design in modern web development.',
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
      date: '2025-05-25',
      readTime: '4 min read',
      category: 'Web Dev',
      tags: ['Responsive', 'UX', 'Mobile'],
    },
    {
      id: 6,
      title: 'Understanding Google Analytics 4: A Beginner\'s Guide',
      excerpt: 'Master GA4 basics to track website performance effectively.',
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
      date: '2025-05-20',
      readTime: '9 min read',
      category: 'SEO',
      tags: ['Analytics', 'Google', 'Data'],
    },
    {
      id: 7,
      title: 'Leveraging AI in Digital Marketing: Trends to Watch',
      excerpt: 'Explore how AI is transforming digital marketing strategies.',
      content: `
        <h2>Introduction</h2>
        <p>AI is revolutionizing digital marketing. Discover key trends.</p>
        <h3>1. AI-Powered Ads</h3>
        <p>Optimize ad targeting, bidding, and creatives with AI for better ROI.</p>
        <h3>2. Content Creation</h3>
        <p>Use AI tools for scalable content production, like chatbots and generators.</p>
        <h3>3. Personalization</h3>
        <p>Deliver personalized experiences with AI-driven insights.</p>
        <h3>4. Predictive Analytics</h3>
        <p>Predict behavior and campaign performance with AI analytics.</p>
        <h3>5. Automation</h3>
        <p>Automate email marketing and social scheduling with AI.</p>
        <h2>Conclusion</h2>
        <p>AI is the future of marketing. Stay ahead with Sownmark’s course.</p>
      `,
      featuredImageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Anna Thompson',
      date: '2025-05-15',
      readTime: '6 min read',
      category: 'Marketing Tips',
      tags: ['AI', 'Innovation', 'Future'],
    },
    {
      id: 8,
      title: 'Social Media ROI: Measuring What Matters',
      excerpt: 'Learn to measure and optimize social media ROI with key metrics.',
      content: `
        <h2>Introduction</h2>
        <p>Measuring social media ROI justifies marketing spend. Here’s how.</p>
        <h3>1. Define KPIs</h3>
        <p>Track engagement, conversions, and click-through rates as KPIs.</p>
        <h3>2. Track Revenue</h3>
        <p>Link social efforts to sales using attribution models.</p>
        <h3>3. Measure Engagement</h3>
        <p>Analyze likes, shares, and comments for audience interaction.</p>
        <h3>4. Optimize Campaigns</h3>
        <p>Refine content with A/B testing to improve ROI.</p>
        <h3>5. Use Analytics Tools</h3>
        <p>Use Sprout Social or Hootsuite for ROI tracking.</p>
        <h2>Conclusion</h2>
        <p>Smart ROI measurement drives strategies. Learn with Sownmark.</p>
      `,
      featuredImageUrl: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Robert Kim',
      date: '2025-05-10',
      readTime: '7 min read',
      category: 'Social Media',
      tags: ['ROI', 'Metrics', 'Strategy'],
    },
  ];

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

  const post = blogPosts.find((p) => generateSlug(p.title) === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Blog Post Not Found</h2>
          <p className="text-lg text-gray-600 mb-10">The post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Back to Blog
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        className="relative py-24 sm:py-32 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 20%, #93c5fd 0%, transparent 50%), 
                               radial-gradient(circle at 80% 80%, #93c5fd 0%, transparent 50%)`,
              backgroundSize: '150px 150px',
            }}
          />
        </div>
        <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-lg px-4 py-2 rounded-full mb-8 border border-white/30"
            >
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-sm font-semibold">{post.category}</span>
            </motion.div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {post.title}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200 mb-12">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm font-medium">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content Section */}
      <section className="py-16 sm:py-24">
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-2xl hover:shadow-3xl transition-all duration-500 border border-gray-100"
          >
            <div className="relative overflow-hidden mb-10 rounded-2xl">
              <img
                src={post.featuredImageUrl}
                alt={post.title}
                className="w-full h-64 sm:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div
              className="prose prose-lg max-w-none text-gray-800 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
            <div className="flex flex-wrap gap-3 mt-8">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors duration-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section
        className="py-16 sm:py-24"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
      >
        <div className="container px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
              Discover More
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Insights
              </span>
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Explore more articles to elevate your digital marketing expertise.
            </p>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts
              .filter((p) => p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map((relatedPost) => (
                <motion.article
                  key={relatedPost.id}
                  variants={fadeInUp}
                  className="group relative"
                >
                  <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col">
                    <div className="relative overflow-hidden">
                      <img
                        src={relatedPost.featuredImageUrl}
                        alt={relatedPost.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <Link
                        to={`/blog/${generateSlug(relatedPost.title)}`}
                        className="mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-xl font-semibold text-base hover:from-blue-700 hover:to-blue-900 transition-all duration-300 hover:shadow-lg"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
      >
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, #93c5fd 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, #93c5fd 0%, transparent 50%)`,
              backgroundSize: '150px 150px',
            }}
          />
        </div>
        <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Elevate Your
              <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                Digital Presence
              </span>
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Partner with Sownmark to achieve your digital marketing goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 min-w-[220px] justify-center"
                onClick={() => window.open('/contact', '_blank')}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
                onClick={() => window.open('/consultation', '_blank')}
              >
                Free Consultation
              </motion.button>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">Free Resources</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">Expert Insights</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-300" />
                <span className="text-sm font-medium">Community Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPostPage;