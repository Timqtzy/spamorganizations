import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/SpamLogo.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"; // Replace with the correct URL

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/blogs`)
      .then((response) => setBlogs(response.data))
      .catch((error) => console.error("Blog not found in Blog page:", error));
  }, []);

  // Sort blogs by most recent (assuming data has a `createdAt` field)
  const sortedBlogs = [...blogs].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );

  const mainBlog = sortedBlogs[0]; // Get the most recent blog
  const relatedBlogs = sortedBlogs.slice(1); // Other blogs

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl min-h-screen bg-gray-100 py-24 px-4 s:py-12 ssm:py-12 sm:py-12">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0 lg:gap-6">
          {/* Main Article Section */}
          {mainBlog && <MainArticleSection blog={mainBlog} />}

          {/* Related Articles Section */}
          <RelatedArticlesSection blogs={relatedBlogs} />
        </div>
      </div>
    </div>
  );
};

// Main Article Component
const MainArticleSection = ({ blog }) => (
  <div className="md:col-span-2">
    <div className="flex items-center mb-4">
      <img src={Logo} alt="Author" className="w-10 h-10 rounded-full mr-4" />
      <div>
        <h4 className="font-medium text-gray-800">{blog.author}</h4>
        <span className="text-sm text-gray-500">Author</span>
      </div>
    </div>
    <Link to={`/blog/${blog.slug}`}>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 hover:cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-2 hover:decoration-red-400">
        {blog.title}
      </h1>
    </Link>
    <div className="text-gray-500 text-sm mb-6">
      <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
        {blog.category}
      </span>
      <span> | {blog.readTime}</span>
    </div>
    <Link to={`/blog/${blog.slug}`}>
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-lg w-full mb-6 transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:cursor-pointer"
      />
    </Link>
    <p className="text-gray-700">{blog.content}</p>
  </div>
);

// Related Articles Component
const RelatedArticlesSection = ({ blogs }) => (
  <div className="space-y-6 md:pt-4">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="flex items-center bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:cursor-pointer"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-24 h-24 rounded-lg object-cover mr-4"
        />
        <div>
          <Link to={`/blog/${blog.slug}`}>
            <h4 className="font-medium text-gray-800 hover:cursor-pointer hover:underline hover:underline-offset-1 hover:decoration-2 hover:decoration-red-400">
              {blog.title}
            </h4>
          </Link>
          <div className="text-sm text-gray-500 mt-2">
            <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
              {blog.category}
            </span>
            <span>{blog.readTime}</span>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Blog;
