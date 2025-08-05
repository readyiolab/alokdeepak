import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User, Tag, Send, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

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

interface Comment {
  id: number;
  author: string;
  text: string;
  date: string;
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


// Utility Functions
const generateSlug = (title: string): string =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const getCategoryColor = (category: string): { bg: string; text: string } => {
  switch (category) {
    case 'Marketing Tips':
      return { bg: 'bg-blue-100', text: 'text-blue-600' };
    case 'SEO':
      return { bg: 'bg-green-100', text: 'text-green-600' };
    case 'Social Media':
      return { bg: 'bg-purple-100', text: 'text-purple-600' };
    case 'Hiring':
      return { bg: 'bg-orange-100', text: 'text-orange-600' };
    case 'Web Dev':
      return { bg: 'bg-teal-100', text: 'text-teal-600' };
    default:
      return { bg: 'bg-gray-100', text: 'text-gray-600' };
  }
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2 } },
};

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find post and related posts
  const post = blogPosts.find((p) => generateSlug(p.title) === slug);
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post?.id && p.category === post?.category)
    .slice(0, 3);

  // Mock comments
  const comments: Comment[] = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great insights! Really helpful article.',
      date: 'June 20, 2025',
    },
  ];

  // Handle comment form submission (mock)
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const comment = formData.get('comment') as string;
    console.log('Comment submitted:', { name, email, comment });
    e.currentTarget.reset();
  };

  return (
    <>
      <Helmet>
        <title>{post ? post.title : 'Blog Post Not Found'} | Sownmark Blog</title>
        <meta
          name="description"
          content={
            post
              ? post.metaDescription
              : 'Explore digital marketing insights and tips at Sownmark Blog.'
          }
        />
      </Helmet>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          {!post ? (
            <motion.section
              className="py-12 bg-gray-100 text-center min-h-screen flex flex-col justify-center"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Blog Post Not Found</h2>
              <p className="text-gray-600 mb-6">The requested blog post does not exist.</p>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                aria-label="Return to blog homepage"
              >
                Back to Blog
              </Link>
            </motion.section>
          ) : (
            <>
              {/* Header Section */}
              <motion.header variants={fadeInUp} initial="initial" animate="animate">
                <Link
                  to="/blog"
                  className="mb-6 inline-flex items-center text-gray-900 text-base hover:text-blue-600 transition-colors"
                  aria-label="Return to blog homepage"
                >
                  <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
                </Link>
                <div className="relative">
                  <img
                    src={post.featuredImageUrl}
                    alt={`${post.title} - Blog cover`}
                    className="w-full h-80 sm:h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <span
                      className={`inline-block ${getCategoryColor(post.category).bg} ${
                        getCategoryColor(post.category).text
                      } text-sm font-medium py-1 px-3 rounded-full mb-2 shadow-sm`}
                    >
                      {post.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                      {post.title}
                    </h1>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {post.author}
                  </div>
                </div>
              </motion.header>

              {/* Main Content and Sidebar */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                <div className="lg:col-span-2">
                  {/* Blog Content */}
                  <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                      <div dangerouslySetInnerHTML={{ __html: post.content }} />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 text-sm text-gray-600 bg-gray-100 py-1 px-3 rounded-full shadow-sm"
                        >
                          <Tag className="h-4 w-4" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <aside>
                  {/* Author Card */}
                  <motion.div
                    className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm mb-6"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">About the Author</h2>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-600">{post.author_bio}</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Comment Section */}
                  <motion.div
                    id="comment-section"
                    className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm"
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                  >
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Leave a Comment</h2>
                    <form className="space-y-4 mb-6" onSubmit={handleCommentSubmit}>
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Your Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                          required
                          aria-label="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Your Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                          required
                          aria-label="Your Email"
                        />
                      </div>
                      <div>
                        <label htmlFor="comment" className="sr-only">
                          Your Comment
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          placeholder="Your Comment"
                          className="w-full h-24 px-3 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                          required
                          aria-label="Your Comment"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2 transition"
                      >
                        Submit <Send className="h-4 w-4" />
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mb-6">Comments are moderated and will appear after approval.</p>
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Comments ({comments.length})</h2>
                    {comments.length > 0 ? (
                      <div className="space-y-4">
                        {comments.map((comment) => (
                          <div key={comment.id} className="border-t border-gray-200 pt-4">
                            <div className="flex items-center gap-3 mb-2">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <User className="h-4 w-4 text-blue-600" />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-900">{comment.author}</p>
                                <p className="text-xs text-gray-500">{comment.date}</p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-700">{comment.text}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-sm text-gray-600">No comments yet. Be the first!</p>
                    )}
                  </motion.div>
                </aside>
              </div>

              {/* Related Posts Section */}
              {relatedPosts.length > 0 && (
                <motion.section
                  className="mb-10"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore More Articles</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => {
                      const { bg, text } = getCategoryColor(relatedPost.category);
                      return (
                        <motion.article
                          key={relatedPost.id}
                          className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                          variants={fadeInUp}
                        >
                          <Link
                            to={`/blog/${generateSlug(relatedPost.title)}`}
                            aria-label={`Read ${relatedPost.title}`}
                          >
                            <div className="relative">
                              <img
                                src={relatedPost.featuredImageUrl}
                                alt={`${relatedPost.title} - Related blog post`}
                                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <span
                                className={`absolute top-3 left-3 ${bg} ${text} text-xs font-medium py-1 px-2 rounded-full shadow-sm`}
                              >
                                {relatedPost.category}
                              </span>
                            </div>
                            <div className="p-5">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                {relatedPost.title}
                              </h3>
                              <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                            </div>
                          </Link>
                        </motion.article>
                      );
                    })}
                  </div>
                </motion.section>
              )}

              {/* Discover More Section */}
              {relatedPosts.length > 0 && (
                <motion.section
                  className="py-16 sm:py-24"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div variants={fadeInUp} className="text-center mb-12">
                      <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4">
                        Discover More
                        <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                          Insights
                        </span>
                      </h2>
                      <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                        Explore more articles to elevate your digital marketing expertise.
                      </p>
                    </motion.div>
                    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                      {relatedPosts.map((relatedPost) => {
                        const { bg, text } = getCategoryColor(relatedPost.category);
                        return (
                          <motion.article
                            key={relatedPost.id}
                            variants={fadeInUp}
                            className="group relative"
                          >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                              <div className="relative overflow-hidden">
                                <img
                                  src={relatedPost.featuredImageUrl}
                                  alt={relatedPost.title}
                                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <span
                                  className={`absolute top-4 right-4 ${bg} ${text} px-3 py-1 rounded-full text-xs font-semibold`}
                                >
                                  {relatedPost.category}
                                </span>
                              </div>
                              <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                  {relatedPost.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-5 line-clamp-3">
                                  {relatedPost.excerpt}
                                </p>
                                <Link
                                  to={`/blog/${generateSlug(relatedPost.title)}`}
                                  className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
                                >
                                  Read More <ArrowRight className="w-4 h-4" />
                                </Link>
                              </div>
                            </div>
                          </motion.article>
                        );
                      })}
                    </motion.div>
                  </div>
                </motion.section>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;