import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "../assets/SpamLogo.png";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL; // Replace with the correct URL

  useEffect(() => {
    let isMounted = true;
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/blogs`);
        if (isMounted) {
          setBlogs(response.data);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();

    return () => {
      isMounted = false; // Cleanup function to prevent memory leaks
    };
  }, []);

  // Memoize sorted blogs to prevent re-sorting on every render
  const sortedBlogs = useMemo(
    () =>
      [...blogs].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [blogs]
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-7xl py-24 px-4 s:py-12 ssm:py-12 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0 lg:gap-6">
          {sortedBlogs.length > 0 && (
            <MainArticleSection blog={sortedBlogs[0]} />
          )}
          <RelatedArticlesSection blogs={sortedBlogs.slice(1)} />
        </div>
      </div>
    </div>
  );
};

// Memoized Main Article Component
const MainArticleSection = React.memo(({ blog }) => (
  <div className="md:col-span-2">
    <div className="flex items-center mb-4">
      <img
        src={Logo}
        alt="Author"
        className="w-10 h-10 rounded-full mr-4"
        loading="lazy"
      />
      <div>
        <h4 className="font-medium text-gray-800">{blog.author}</h4>
        <span className="text-sm text-gray-500">Author</span>
      </div>
    </div>
    <Link to={`/blog/${blog.slug}`}>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 hover:underline">
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
        className="rounded-lg w-full mb-6 transition-all duration-300 hover:shadow-lg"
        loading="lazy"
      />
    </Link>
    <p className="text-gray-700">{blog.content}</p>
  </div>
));

// Memoized Related Articles Component
const RelatedArticlesSection = React.memo(({ blogs }) => (
  <div className="space-y-6 md:pt-4">
    {blogs.map((blog) => (
      <div
        key={blog._id}
        className="flex items-center bg-white rounded-lg p-4 shadow-sm transition-all duration-300 hover:shadow-lg"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-24 h-24 rounded-lg object-cover mr-4"
          loading="lazy"
        />
        <div>
          <Link to={`/blog/${blog.slug}`}>
            <h4 className="font-medium text-gray-800 hover:underline">
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
));

export default Blog;
