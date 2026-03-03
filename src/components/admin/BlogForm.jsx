import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Save, 
  AlertCircle, 
  FileText, 
  User, 
  Layers, 
  Tag, 
  Clock, 
  Eye, 
  Settings, 
  Image as ImageIcon,
  Star,
  Search
} from "lucide-react";
import { createBlog, updateBlog, getBlogById } from "../../../services/api";
import EditorJSEditor from "./EditorJSEditor";
import EditorJSPreview from "./EditorJSPreview";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const BlogForm = ({ isEdit = false }) => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: { blocks: [] },
    author: "",
    author_bio: "",
    status: "draft",
    read_time: "",
    categories: "",
    tags: "",
    meta_description: "",
    is_featured: false,
    featured_image: null,
    current_image: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin/login");
      return;
    }

    if (isEdit && id) {
      const fetchBlog = async () => {
        try {
          setLoading(true);
          const response = await getBlogById(id);
          const blogData = response.data;
          console.log("Fetched blog data:", blogData);
          let parsedContent = blogData.content;
          if (typeof blogData.content === "string") {
            try {
              parsedContent = JSON.parse(blogData.content);
              console.log("Parsed content:", parsedContent);
              if (parsedContent.blocks.some((block) => block.type === "list")) {
                console.log(
                  "List blocks found:",
                  parsedContent.blocks.filter((block) => block.type === "list")
                );
              }
            } catch (err) {
              console.error("Failed to parse content:", err);
              parsedContent = { blocks: [] };
            }
          }
          setFormData({
            title: blogData.title || "",
            excerpt: blogData.excerpt || "",
            content: parsedContent || { blocks: [] },
            author: blogData.author || "",
            author_bio: blogData.author_bio || "",
            status: blogData.status || "draft",
            read_time: blogData.read_time ? blogData.read_time.toString() : "",
            categories: Array.isArray(blogData.category)
              ? blogData.category.join(",")
              : blogData.category || "",
            tags: Array.isArray(blogData.tags)
              ? blogData.tags.join(",")
              : blogData.tags || "",
            meta_description: blogData.meta_description || "",
            is_featured: !!blogData.is_featured,
            featured_image: null,
            current_image: blogData.image || "",
          });
        } catch (err) {
          const errorMessage =
            err.response?.data?.error || "Failed to fetch blog";
          setError(errorMessage);
          console.error("Error fetching blog:", err);
          if (err.response?.status === 404) {
            alert("Blog not found. Redirecting to blog list.");
            navigate("/admin/blogs");
          }
        } finally {
          setLoading(false);
        }
      };
      fetchBlog();
    }
  }, [id, isEdit, navigate, token]);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleContentChange = (content) => {
    console.log("Content updated:", content);
    if (content.blocks.some((block) => block.type === "list")) {
      console.log(
        "List blocks in updated content:",
        content.blocks.filter((block) => block.type === "list")
      );
    }
    setFormData((prev) => ({ ...prev, content }));
  };

  const handleImageUpload = async (files) => {
    if (files && files.length > 0) {
      const formData = new FormData();
      formData.append("image", files[0]);
      try {
        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (result.success) {
          return result.url;
        } else {
          throw new Error("Image upload failed");
        }
      } catch (error) {
        console.error("Image upload error:", error);
        throw error;
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate content
    if (
      !formData.content ||
      !formData.content.blocks ||
      formData.content.blocks.length === 0
    ) {
      setError("Content cannot be empty");
      setLoading(false);
      return;
    }
    const hasNonEmptyContent = formData.content.blocks.some(
      (block) =>
        (block.type === "paragraph" && block.data.text?.trim()) ||
        (block.type === "header" && block.data.text?.trim()) ||
        (block.type === "list" &&
          block.data.items?.some((item) => item.trim())) ||
        (block.type === "quote" && block.data.text?.trim()) ||
        (block.type === "image" && block.data.file?.url)
    );
    if (!hasNonEmptyContent) {
      setError(
        "Please add some meaningful content (text, lists, images, etc.) to the blog post"
      );
      setLoading(false);
      return;
    }

    const data = new FormData();
    data.append("title", formData.title);
    data.append("excerpt", formData.excerpt);
    data.append("content", JSON.stringify(formData.content));
    data.append("author", formData.author);
    data.append("author_bio", formData.author_bio);
    data.append("status", formData.status);
    data.append("read_time", formData.read_time);
    data.append("categories", formData.categories);
    data.append("tags", formData.tags);
    data.append("meta_description", formData.meta_description);
    data.append("is_featured", formData.is_featured.toString());

    if (formData.featured_image) {
      data.append("featured_image", formData.featured_image);
    } else if (isEdit && formData.current_image) {
      data.append("image", formData.current_image);
    }

    try {
      console.log("Submitting form with content:", formData.content);
      if (isEdit && id) {
        await updateBlog(id, data);
        alert("Blog updated successfully");
      } else {
        await createBlog(data);
        alert("Blog created successfully");
      }
      navigate("/admin/blogs");
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save blog");
      console.error("Error saving blog:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit) {
    return (
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        <Skeleton className="h-10 w-48 mb-6" />
        <Skeleton className="h-96 w-full" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto space-y-8 pb-12"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
            {isEdit ? "Edit Blog Post" : "Create New Post"}
          </h1>
          <p className="text-gray-500 mt-1">
            {isEdit ? "Update existing content and settings" : "Draft a new story for your audience"}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => setShowPreview(true)}
            className="hidden sm:flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            Preview
          </Button>
          <Button onClick={handleSubmit} disabled={loading} className="flex items-center gap-2">
            {loading ? (
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
            ) : (
              <Save className="w-4 h-4" />
            )}
            {isEdit ? "Update Post" : "Publish Post"}
          </Button>
        </div>
      </div>

      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertCircle className="h-5 w-5" />
          <AlertTitle>Action Required</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column - Main Content */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="border-none shadow-sm overflow-hidden">
            <CardHeader className="bg-gray-50/50 border-b">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg">Content & Details</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Post Title
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  placeholder="Enter a catchy title..."
                  className="text-lg font-medium py-6"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Excerpt
                </label>
                <Textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief summary shown in lists..."
                  rows={3}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  Body Content
                </label>
                <div className="bg-white rounded-md border shadow-inner">
                  <EditorJSEditor
                    content={formData.content}
                    onChange={handleContentChange}
                    onImageUpload={handleImageUpload}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="bg-gray-50/50 border-b">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg">Author Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Author Name</label>
                <Input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  placeholder="Writer's name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Author Bio</label>
                <Input
                  type="text"
                  name="author_bio"
                  value={formData.author_bio}
                  onChange={handleChange}
                  placeholder="Short description of the author"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Settings & SEO */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="bg-gray-50/50 border-b">
              <div className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg">Publish Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Status
                </label>
                <Select
                  value={formData.status}
                  onValueChange={(v) => setFormData(p => ({ ...p, status: v }))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Read Time (min)
                </label>
                <Input
                  type="number"
                  name="read_time"
                  value={formData.read_time}
                  onChange={handleChange}
                  min="0"
                />
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg border border-blue-100 cursor-pointer hover:bg-blue-50 transition-colors">
                  <Checkbox
                    checked={formData.is_featured}
                    onCheckedChange={(c) => setFormData(p => ({ ...p, is_featured: c }))}
                  />
                  <div className="flex items-center gap-2 text-sm font-semibold text-blue-900">
                    <Star className="w-4 h-4 fill-blue-500 text-blue-500" />
                    Featured on Homepage
                  </div>
                </label>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="bg-gray-50/50 border-b">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg">Featured Image</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {isEdit && formData.current_image && !formData.featured_image && (
                <div className="relative group rounded-lg overflow-hidden border">
                  <img
                    src={formData.current_image}
                    alt="Cover"
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-xs font-medium">Current Image</span>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleChange}
                  name="featured_image"
                  className="text-xs"
                />
                <p className="text-[10px] text-gray-400">Recommended: 1200x630px JPG or WEBP</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="bg-gray-50/50 border-b">
              <div className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-600" />
                <CardTitle className="text-lg">Categorization & SEO</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> Categories
                </label>
                <Input
                  name="categories"
                  value={formData.categories}
                  onChange={handleChange}
                  placeholder="News, Updates, Tips..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Tag className="w-4 h-4" /> Tags
                </label>
                <Input
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  placeholder="react, tech, future..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Meta Description</label>
                <Textarea
                  name="meta_description"
                    value={formData.meta_description}
                  onChange={handleChange}
                  placeholder="Optimized for search engines..."
                  rows={2}
                  maxLength={160}
                  className="text-xs"
                />
                <p className="text-[10px] text-gray-400 text-right">
                  {formData.meta_description?.length || 0}/160
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Mobile Preview Button */}
      <div className="sm:hidden fixed bottom-6 right-6 shadow-2xl z-50">
        <Button
          type="button"
          size="icon"
          className="rounded-full h-14 w-14"
          onClick={() => setShowPreview(true)}
        >
          <Eye className="w-6 h-6" />
        </Button>
      </div>
      {showPreview && (
        <EditorJSPreview
          content={formData.content}
          onClose={() => setShowPreview(false)}
        />
      )}
    </motion.div>
  );
};

export default BlogForm;
