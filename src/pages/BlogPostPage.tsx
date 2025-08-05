import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User, Tag, Send } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import {
  getAllBlogs,
  getBlogById,
  getCommentsByBlogId,
  createComment,
} from "../../services/api";

// Types
interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  meta_description: string;
  content: string | { blocks: any[] };
  image: string;
  author: string;
  author_bio: string;
  created_at: string;
  read_time: number;
  category: string[];
  tags: string[];
  is_featured: number;
  comments?: number;
  likes?: number;
  shares?: number;
}

interface Comment {
  id: number;
  blog_id: number;
  user_name: string;
  user_email?: string;
  content: string;
  created_at: string;
}

const editorJSToHtml = (content: string | { blocks: any[] }): string => {
  if (typeof content === "string") {
    try {
      content = JSON.parse(content);
    } catch (e) {
      return content;
    }
  }
  if (!content || !content.blocks || !Array.isArray(content.blocks)) {
    return "<p>No content available</p>";
  }
  return content.blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p class="text-gray-700 leading-relaxed">${
            block.data.text || ""
          }</p>`;
        case "header":
          const level = block.data.level || 2;
          return `<h${level} class="text-gray-900 font-bold mt-4 mb-2 ${
            level === 1 ? "text-3xl" : level === 2 ? "text-2xl" : "text-xl"
          }">${block.data.text || ""}</h${level}>`;
        case "list":
          const tag = block.data.style === "ordered" ? "ol" : "ul";
          const items = (block.data.items || [])
            .map(
              (item) => `<li class="text-gray-700">${item.content || ""}</li>`
            )
            .join("");
          return items
            ? `<${tag} class="list-${
                block.data.style === "ordered" ? "decimal" : "disc"
              } pl-6 my-2">${items}</${tag}>`
            : "";
        case "image":
          return `<img src="${block.data.file?.url || ""}" alt="${
            block.data.caption || "Image"
          }" class="w-full max-w-md h-auto rounded-lg my-4 mx-auto object-cover" />`;
        default:
          return "";
      }
    })
    .join("");
};

const getCategoryColor = (category: string): { bg: string; text: string } => {
  switch (category) {
    case "Marketing Tips":
      return { bg: "bg-blue-100", text: "text-blue-600" };
    case "SEO":
      return { bg: "bg-green-100", text: "text-green-600" };
    case "Social Media":
      return { bg: "bg-purple-100", text: "text-purple-600" };
    case "Hiring":
      return { bg: "bg-orange-100", text: "text-orange-600" };
    case "Web Dev":
      return { bg: "bg-teal-100", text: "text-teal-600" };
    default:
      return { bg: "bg-gray-100", text: "text-gray-600" };
  }
};

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
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [commentForm, setCommentForm] = useState({
    name: "",
    email: "",
    content: "",
  });
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Fetch all blogs to find the post by slug
        const { data: blogs } = await getAllBlogs();

        if (!Array.isArray(blogs)) {
          setError("Failed to load blog data");
          setLoading(false);
          return;
        }

        const foundPost = blogs.find((p) => p.slug === slug);

        if (!foundPost) {
          setError("Blog post not found");
          setLoading(false);
          return;
        }

        // Fetch detailed post data by ID
        const { data: postData } = await getBlogById(foundPost.id);

        setPost({
          ...postData,
          category: Array.isArray(postData.category)
            ? postData.category
            : JSON.parse(postData.category || "[]"),
          tags: Array.isArray(postData.tags)
            ? postData.tags
            : JSON.parse(postData.tags || "[]"),
          slug: postData.slug || slug,
        });

        // Fetch comments
        try {
          const { data: commentsData } = await getCommentsByBlogId(
            foundPost.id
          );

          setComments(Array.isArray(commentsData) ? commentsData : []);
        } catch (err) {
          setComments([]); // Fallback to empty array
        }

        // Find related posts
        const related = blogs
          .filter(
            (p) =>
              p.id !== foundPost.id &&
              p.category.some((cat) => foundPost.category.includes(cat))
          )
          .slice(0, 3);
        setRelatedPosts(related);

        setLoading(false);
      } catch (err) {
        setError("Failed to load blog post");
        setLoading(false);
      }
    };
    fetchData();
  }, [slug]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!commentForm.content) {
      setFormError("Comment content is required");
      return;
    }

    if (
      commentForm.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(commentForm.email)
    ) {
      setFormError("Invalid email format");
      return;
    }

    try {
      const { data } = await createComment(post!.id, {
        name: commentForm.name,
        email: commentForm.email,
        content: commentForm.content,
      });
      setComments([...comments, data.comment]); // Add new comment to the list
      setCommentForm({ name: "", email: "", content: "" }); // Reset form
    } catch (err) {
      setFormError("Failed to submit comment. Please try again.");
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCommentForm((prev) => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="animate-pulse">
            <div className="h-10 w-48 bg-gray-200 rounded mb-6"></div>
            <div className="h-96 w-full bg-gray-200 rounded-2xl mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6"></div>
                <div className="h-6 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="space-y-4">
                <div className="h-48 bg-gray-200 rounded-lg"></div>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error || !post) {
    return (
      <motion.section
        className="py-12 bg-gray-100 text-center min-h-screen flex flex-col justify-center"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Blog Post Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          {error || "The requested blog post does not exist."}
        </p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          aria-label="Return to blog homepage"
        >
          Back to Blog
        </Link>
      </motion.section>
    );
  }

  const htmlContent =
    typeof post.content === "string"
      ? editorJSToHtml(post.content)
      : editorJSToHtml(post.content);

  return (
    <>
      <Helmet>
        <title>{post.title} | Sownmark Blog</title>
        <meta name="description" content={post.meta_description} />
      </Helmet>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <motion.header
            variants={fadeInUp}
            initial="initial"
            animate="animate"
          >
            <Link
              to="/blog"
              className="mb-6 inline-flex items-center text-gray-900 text-base hover:text-blue-600 transition-colors"
              aria-label="Return to blog homepage"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
            </Link>
            <div className="relative">
              <img
                src={post.image}
                alt={`${post.title} - Blog cover`}
                className="w-auto h-auto sm:h-auto object-fill rounded-2xl shadow-lg"
              />
              <div className=" rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <span
                  className={`inline-block ${
                    getCategoryColor(post.category[0] || "Uncategorized").bg
                  } ${
                    getCategoryColor(post.category[0] || "Uncategorized").text
                  } text-sm font-medium py-1 px-3 rounded-full mb-2 shadow-sm`}
                >
                  {post.category[0] || "Uncategorized"}
                </span>
                {/* <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                  {post.title}
                </h1> */}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-500 mt-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.read_time} min read
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>
          </motion.header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-8">
            <div className="lg:col-span-2 overflow-y-auto">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <div className="prose prose-sm sm:prose-base max-w-none text-gray-700">
                  <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
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

            <aside className="lg:sticky lg:top-20 space-y-6">
              <motion.div
                className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  About the Author
                </h2>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-600">{post.author_bio}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                id="comment-section"
                className="bg-white border border-gray-100 rounded-lg p-4 sm:p-6 shadow-sm lg:sticky lg:top-6"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Leave a Comment
                </h2>
                <form className="space-y-4 mb-6" onSubmit={handleCommentSubmit}>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={commentForm.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      aria-label="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={commentForm.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      className="w-full h-10 px-3 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      aria-label="Your Email"
                    />
                  </div>
                  <div>
                    <textarea
                      name="content"
                      value={commentForm.content}
                      onChange={handleInputChange}
                      placeholder="Your Comment"
                      className="w-full h-24 px-3 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      aria-label="Your Comment"
                    />
                  </div>
                  {formError && (
                    <p className="text-sm text-red-600">{formError}</p>
                  )}
                  <button
                    type="submit"
                    className="bg-[#1a2957] text-white px-4 py-2 rounded-lg  flex items-center gap-2 transition"
                  >
                    Submit <Send className="h-4 w-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mb-6">
                  Comments are moderated and will appear after approval.
                </p>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  Comments ({comments.length})
                </h2>
                {comments.length > 0 ? (
                  <div className="space-y-4 max-h-60 sm:max-h-80 overflow-y-auto">
                    {comments.map((comment) => (
                      <div
                        key={comment.id}
                        className="border-t border-gray-200 pt-4"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <User className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {comment.user_name || "Anonymous"}
                            </p>
                            <p className="text-xs text-gray-500">
                              {new Date(
                                comment.created_at
                              ).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700">
                          {comment.content}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-600">
                    No comments yet. Be the first!
                  </p>
                )}
              </motion.div>
            </aside>
          </div>

          {relatedPosts.length > 0 && (
            <motion.section
              className="mt-10"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
                Explore More Articles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {relatedPosts.map((relatedPost) => {
                  const { bg, text } = getCategoryColor(
                    relatedPost.category[0] || "Uncategorized"
                  );
                  return (
                    <motion.article
                      key={relatedPost.id}
                      className="group bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                      variants={fadeInUp}
                    >
                      <Link
                        to={`/blog/${relatedPost.slug}`}
                        aria-label={`Read ${relatedPost.title}`}
                      >
                        <div className="relative">
                          <img
                            src={relatedPost.image}
                            alt={`${relatedPost.title} - Related blog post`}
                            className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span
                            className={`absolute top-3 left-3 ${bg} ${text} text-xs font-medium py-1 px-2 rounded-full shadow-sm`}
                          >
                            {relatedPost.category[0] || "Uncategorized"}
                          </span>
                        </div>
                        <div className="p-4 sm:p-5">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </div>
            </motion.section>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;
