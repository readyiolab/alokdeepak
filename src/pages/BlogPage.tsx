import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Search,
  Calendar,
  Clock,
  User,
  ArrowRight,
  Tag,
  TrendingUp,
  BookOpen,
  Users,
  Target,
  Lightbulb,
  Star,
  CheckCircle,
  Heart,
  Share2,
  MessageSquare,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet";
import NewsletterForm from "./NewsletterForm";
import { getAllBlogs } from "../../services/api";

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  metaDescription: string;
  content: string;
  image: string;
  author: string;
  author_bio: string;
  readTime: string;
  category: string;
  tags: string[];
  isFeatured: number;
  likes: number;
  shares: number;
  comments: number;
  publishedAt: string;
}

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

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

 useEffect(() => {
     const fetchBlogs = async () => {
       try {
         setLoading(true);
         const response = await getAllBlogs();
         
         // Handle different response structures
         const data = response.data || response;
         
         if (Array.isArray(data)) {
           const mappedPosts = data.map((post: any) => ({
               id: post.id,
               title: post.title,
               slug: post.slug || generateSlug(post.title),
               excerpt: post.excerpt,
               metaDescription: post.meta_description,
               content: post.content,
               image: post.image,
               author: post.author,
               author_bio: post.author_bio,
               readTime: post.read_time ? `${post.read_time} min read` : "5 min read",
               category: Array.isArray(post.category)
                 ? post.category[0] || "Uncategorized"
                 : typeof post.category === 'string' 
                   ? (post.category.startsWith('[') ? JSON.parse(post.category)[0] : post.category) || "Uncategorized"
                   : "Uncategorized",
               tags: Array.isArray(post.tags)
                 ? post.tags
                 : typeof post.tags === 'string'
                   ? (post.tags.startsWith('[') ? JSON.parse(post.tags) : [post.tags])
                   : [],
               isFeatured: post.is_featured || 0,
               likes: post.likes || 0,
               shares: post.shares || 0,
               comments: post.comments || 0,
               publishedAt: post.published_at || post.createdAt || new Date().toISOString(),
             }));

             const sortedPosts = mappedPosts.sort(
               (a, b) =>
                 new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
             );

             setBlogPosts(sortedPosts);
         } else {
           console.error("Expected array but got:", data);
           setBlogPosts([]);
         }
         setLoading(false);
       } catch (err) {
         console.error("Error fetching blogs:", err);
         setError("Failed to load blog posts");
         setLoading(false);
       }
     };
     fetchBlogs();
   }, []);
 
   const generateSlug = (title: string): string =>
     title
       .toLowerCase()
       .replace(/[^a-z0-9]+/g, "-")
       .replace(/(^-|-$)/g, "");
 
   // Filter posts based on search query only
   const filteredPosts = blogPosts.filter((post) => {
     const matchesSearch =
       searchQuery === "" ||
       post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
       post.tags.some((tag) =>
         tag.toLowerCase().includes(searchQuery.toLowerCase())
       ) ||
       post.category.toLowerCase().includes(searchQuery.toLowerCase());
     return matchesSearch;
   });
 
   const recentPosts = blogPosts.slice(0, 3);
 
   // Reset page to 1 when search query changes
   useEffect(() => {
     setPage(1);
   }, [searchQuery]);
 
   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
   const paginatedPosts = filteredPosts.slice(
     (page - 1) * postsPerPage,
     page * postsPerPage
   );

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="container px-4 sm:px-6 md:px-8">
            <div className="animate-pulse">
              <div className="h-10 w-48 bg-gray-200 rounded mb-6 mx-auto"></div>
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-4 mx-auto"></div>
              <div className="h-12 w-full bg-gray-200 rounded mb-8"></div>
              <div className="flex flex-wrap gap-3 justify-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div
                      key={i}
                      className="h-10 w-32 bg-gray-200 rounded-full"
                    ></div>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </section>
      </div>
    );
  }

  const scrollToBlogs = () => {
    document.getElementById('blog-posts')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <meta
          property="og:title"
          content="Digital Marketing & Tech Blog | Sownmark"
        />
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
        style={{
          background: "linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)",
        }}
      >
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #90abff 0%, transparent 50%), 
                               radial-gradient(circle at 75% 75%, #90abff 0%, transparent 50%)`,
              backgroundSize: "100px 100px",
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
              <span className="text-xs font-medium">
                Expert Insights for Digital Success
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Sownmark Blog
              <span className="block bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Insights & Innovations
              </span>
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Stay ahead with expert insights on digital marketing, web
              development, and talent acquisition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToBlogs}
                className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[180px] justify-center"
                aria-label="Explore blog posts"
              >
                Explore Blogs
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Section - Light Theme */}
           <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
             <div className="container px-4 sm:px-6 md:px-8">
               <motion.div {...fadeInUp} className="text-center mb-16">
                 <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                   Explore Our
                   <span
                     className="block text-transparent bg-clip-text pb-5"
                     style={{
                       backgroundImage: "linear-gradient(135deg, #1a2957, #90abff)",
                     }}
                   >
                     Blog Content
                   </span>
                 </h2>
                 <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                   Discover articles crafted by industry experts to help you stay
                   ahead in the digital world.
                 </p>
               </motion.div>
     
               <motion.div {...fadeInUp} className="relative max-w-4xl mx-auto mb-8">
                 <div className="relative flex items-center">
                   <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                   <input
                     type="text"
                     placeholder="Search blog posts..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full pl-12 pr-12 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                     aria-label="Search blog posts"
                   />
                   {searchQuery && (
                     <button
                       onClick={() => setSearchQuery("")}
                       className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                       aria-label="Clear search"
                     >
                       <X className="w-5 h-5" />
                     </button>
                   )}
                 </div>
               </motion.div>
     
               <div className="text-center">
                 <p className="text-sm text-gray-600">
                   Found {filteredPosts.length} blog post{filteredPosts.length !== 1 ? 's' : ''} 
                   {searchQuery && ` for "${searchQuery}"`}
                 </p>
               </div>
             </div>
           </section>
     
           {/* Blog Posts Grid - Dark Theme */}
           <section
             id="blog-posts"
             className="py-16 sm:py-20"
             style={{
               background: "linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)",
             }}
           >
             <div className="container px-4 sm:px-6 md:px-8">
               <motion.div {...fadeInUp} className="text-center mb-16">
                 <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                   {searchQuery ? "Search Results" : "Dive Into Our"}
                   {!searchQuery && (
                     <span className="block bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent pb-2">
                       Expert Insights
                     </span>
                   )}
                 </h2>
                 <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed pt-5">
                   {searchQuery 
                     ? `Showing ${paginatedPosts.length} of ${filteredPosts.length} results`
                     : "Comprehensive articles designed to empower you with actionable knowledge and strategies."
                   }
                 </p>
               </motion.div>
     
               <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                 <motion.div
                   key={page}
                   variants={staggerContainer}
                   initial="initial"
                   whileInView="whileInView"
                   viewport={{ once: true }}
                   className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
                 >
                   {paginatedPosts.length > 0 ? (
                     paginatedPosts.map((post) => (
                       <motion.article
                         key={post.id}
                         variants={fadeInUp}
                         className="group relative"
                       >
                         <div className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:-translate-y-2 h-auto">
                           <div className="relative overflow-hidden">
                             <img
                               src={post.image}
                               alt={post.title}
                               className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                               loading="lazy"
                             />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                             <div className="absolute top-3 right-3 flex gap-2">
                               {post.isFeatured === 1 && (
                                 <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                                   Featured
                                 </span>
                               )}
                               <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-2 py-1 rounded-full text-xs font-semibold">
                                 {post.category}
                               </span>
                             </div>
                           </div>
     
                           <div className="p-6">
                             <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                               {post.title}
                             </h3>
                             <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-3">
                               {post.excerpt}
                             </p>
     
                             <div className="space-y-2 mb-5">
                               <div className="flex items-center gap-2">
                                 <User className="w-4 h-4 text-green-500 flex-shrink-0" />
                                 <span className="text-gray-700 text-sm">
                                   {post.author}
                                 </span>
                               </div>
                               <div className="flex items-center gap-2">
                                 <Calendar className="w-4 h-4 text-green-500 flex-shrink-0" />
                                 <span className="text-gray-700 text-sm">
                                   {new Date(post.publishedAt).toLocaleDateString()}
                                 </span>
                               </div>
                               <div className="flex items-center gap-2">
                                 <Clock className="w-4 h-4 text-green-500 flex-shrink-0" />
                                 <span className="text-gray-700 text-sm">
                                   {post.readTime}
                                 </span>
                               </div>
                             </div>
     
                             <div className="flex items-center justify-between mb-5">
                               <div className="flex flex-wrap gap-1">
                                 {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                   <span
                                     key={tagIndex}
                                     className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                                   >
                                     #{tag}
                                   </span>
                                 ))}
                               </div>
                               <Link
                                 to={`/blog/${post.slug}`}
                                 className="w-32 py-2 rounded-xl font-semibold text-base transition-all duration-300 hover:scale-105 hover:shadow-lg text-center"
                                 style={{
                                   background:
                                     "linear-gradient(135deg, #1a2957, #90abff)",
                                   color: "white",
                                 }}
                                 aria-label={`Read more about ${post.title}`}
                               >
                                 Read More
                               </Link>
                             </div>
     
                             <div className="flex items-center gap-4 text-sm text-gray-600">
                               <div className="flex items-center gap-1">
                                 <Heart className="w-4 h-4 text-red-500" />
                                 <span>{post.likes}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <Share2 className="w-4 h-4 text-blue-500" />
                                 <span>{post.shares}</span>
                               </div>
                               <div className="flex items-center gap-1">
                                 <MessageSquare className="w-4 h-4 text-green-500" />
                                 <span>{post.comments}</span>
                               </div>
                             </div>
                           </div>
                         </div>
                       </motion.article>
                     ))
                   ) : (
                     <div className="col-span-2 text-center py-12">
                       <div className="bg-white rounded-3xl p-8 shadow-lg">
                         <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                         <h3 className="text-xl font-bold text-gray-900 mb-2">
                           No posts found
                         </h3>
                         <p className="text-gray-600 mb-4">
                           {searchQuery 
                             ? `No blog posts match "${searchQuery}". Try different keywords.`
                             : "No blog posts available at the moment."
                           }
                         </p>
                         {searchQuery && (
                           <button
                             onClick={() => setSearchQuery("")}
                             className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                           >
                             Clear Search
                           </button>
                         )}
                       </div>
                     </div>
                   )}
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
                         <h3 className="text-xl font-bold text-gray-900 mb-4">
                           Recent Posts
                         </h3>
                         <div className="space-y-4">
                           {recentPosts.map((post) => (
                             <Link
                               key={post.id}
                               to={`/blog/${post.slug}`}
                               className="flex gap-4 group hover:bg-gray-50 p-2 rounded-xl transition-colors duration-300 w-full text-left"
                               aria-label={`Read recent post: ${post.title}`}
                             >
                               <img
                                 src={post.image}
                                 alt={post.title}
                                 className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                                 loading="lazy"
                               />
                               <div className="flex-1 min-w-0">
                                 <h4 className="font-medium text-gray-900 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                   {post.title}
                                 </h4>
                                 <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                                   <Calendar className="w-3 h-3" />
                                   <span>
                                     {new Date(
                                       post.publishedAt
                                     ).toLocaleDateString()}
                                   </span>
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
                         <h3 className="text-xl font-bold text-gray-900 mb-4">
                           Popular Tags
                         </h3>
                         <div className="flex flex-wrap gap-2">
                           {[
                             "SEO",
                             "Social Media",
                             "Content Marketing",
                             "Web Development",
                             "Analytics",
                             "Digital Marketing Course",
                             "Job Guarantee",
                           ].map((tag, index) => (
                             <button
                               key={index}
                               onClick={() => setSearchQuery(tag)}
                               className="bg-gray-100 hover:bg-blue-100 text-gray-600 hover:text-blue-600 px-3 py-2 rounded-full text-sm cursor-pointer transition-colors duration-300"
                             >
                               #{tag}
                             </button>
                           ))}
                         </div>
                       </div>
                     </motion.div>
                   </div>
                 </div>
               </div>
     
               {/* Pagination */}
               {totalPages > 1 && (
                 <motion.div {...fadeInUp} className="flex justify-center mt-12">
                   <div className="flex items-center gap-2">
                     <button
                       onClick={() => setPage((p) => Math.max(p - 1, 1))}
                       disabled={page === 1}
                       className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                       aria-label="Previous page"
                     >
                       Previous
                     </button>
                     
                     {/* Show page numbers */}
                     {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                       let pageNum;
                       if (totalPages <= 5) {
                         pageNum = i + 1;
                       } else if (page <= 3) {
                         pageNum = i + 1;
                       } else if (page >= totalPages - 2) {
                         pageNum = totalPages - 4 + i;
                       } else {
                         pageNum = page - 2 + i;
                       }
                       
                       return (
                         <button
                           key={pageNum}
                           onClick={() => setPage(pageNum)}
                           className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                             page === pageNum
                               ? "bg-blue-600 text-white"
                               : "border border-gray-200 text-gray-600 hover:bg-blue-50 bg-white"
                           }`}
                           aria-label={`Go to page ${pageNum}`}
                         >
                           {pageNum}
                         </button>
                       );
                     })}
                     
                     <button
                       onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                       disabled={page === totalPages}
                       className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-blue-50 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-white"
                       aria-label="Next page"
                     >
                       Next
                     </button>
                   </div>
                 </motion.div>
               )}
     
               {/* Show pagination info */}
               {filteredPosts.length > 0 && (
                 <motion.div {...fadeInUp} className="text-center mt-8">
                   <p className="text-blue-200 text-sm">
                     Showing {((page - 1) * postsPerPage) + 1} to {Math.min(page * postsPerPage, filteredPosts.length)} of {filteredPosts.length} posts
                   </p>
                 </motion.div>
               )}
             </div>
           </section>

      {/* CTA Section - Dark Theme */}
      <section
        className="py-16 sm:py-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #1a2957 0%, #2d4a8f 100%)",
        }}
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
              Let's discuss how Sownmark can help you achieve your digital
              marketing goals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-base hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center shadow-2xl"
                to="/contact#contact-form"
                aria-label="Get started with Sownmark"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                to="/contact#contact-form"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-base hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 min-w-[220px] justify-center"
                aria-label="Get a free consultation"
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