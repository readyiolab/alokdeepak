import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Save, AlertCircle } from "lucide-react";
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            {isEdit ? "Edit Blog" : "Create Blog"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Alert variant="destructive">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Title *
                </label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Enter blog title"
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Author *
                </label>
                <Input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="Enter author name"
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Excerpt
                </label>
                <Textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  placeholder="Brief description of the blog post"
                  rows={4}
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Author Bio
                </label>
                <Textarea
                  name="author_bio"
                  value={formData.author_bio}
                  onChange={handleChange}
                  placeholder="Brief bio about the author"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-gray-900 mb-2 text-sm font-medium">
                    Status
                  </label>
                  <Select
                    name="status"
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, status: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-gray-900 mb-2 text-sm font-medium">
                    Read Time (minutes)
                  </label>
                  <Input
                    type="number"
                    name="read_time"
                    value={formData.read_time}
                    onChange={handleChange}
                    min="0"
                    placeholder="0"
                  />
                </div>

                <div className="flex items-center">
                  <label className="flex items-center text-gray-900 text-sm font-medium cursor-pointer">
                    <Checkbox
                      name="is_featured"
                      checked={formData.is_featured}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          is_featured: checked,
                        }))
                      }
                      className="mr-3"
                    />
                    Featured Post
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-900 mb-2 text-sm font-medium">
                    Categories (comma-separated)
                  </label>
                  <Input
                    type="text"
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    placeholder="e.g., Technology, Web Development"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 mb-2 text-sm font-medium">
                    Tags (comma-separated)
                  </label>
                  <Input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                    placeholder="e.g., react, javascript, tutorial"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Meta Description
                </label>
                <Input
                  type="text"
                  name="meta_description"
                  value={formData.meta_description}
                  onChange={handleChange}
                  placeholder="SEO description for search engines"
                  maxLength={160}
                />
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Featured Image
                </label>
                {isEdit && formData.current_image && (
                  <div className="mb-4">
                    <p className="text-gray-600 text-sm mb-2">Current Image:</p>
                    <img
                      src={formData.current_image}
                      alt="Current featured image"
                      className="w-full max-w-xs h-auto rounded-lg object-cover"
                    />
                  </div>
                )}
                <Input
                  type="file"
                  name="featured_image"
                  accept="image/*"
                  onChange={handleChange}
                />
                {isEdit && (
                  <p className="text-gray-600 text-sm mt-2">
                    Upload a new image to replace the current one, or leave
                    blank to keep it.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-900 mb-2 text-sm font-medium">
                  Content *
                </label>
                <EditorJSEditor
                  content={formData.content}
                  onChange={handleContentChange}
                  onImageUpload={handleImageUpload}
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 space-x-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPreview(true)}
                disabled={loading}
              >
                Preview
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    {isEdit ? "Updating..." : "Creating..."}
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    {isEdit ? "Update Blog" : "Create Blog"}
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
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
