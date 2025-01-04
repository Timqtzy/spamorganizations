import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const apiUrl = import.meta.env.API_URL || "http://localhost:5000"; // Replace with the correct URL

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/blogs/${slug}`)
      .then((response) => setBlog(response.data))
      .catch((error) => console.error("Blog not found in BlogPost:", error));
  }, [slug]);

  if (!blog) {
    return <div className="text-center text-gray-700">Loading...</div>;
  }

  return (
    <div className="bg-gray-100 py-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {/* Image */}
        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-auto  object-cover rounded-lg mb-6"
          />
        )}
        {/* Title */}
        <h1 className="text-3xl s:text-2xl font-bold text-gray-800 mb-4">
          {blog.title}
        </h1>
        {/* Author */}
        <p className="text-gray-500 mb-6">
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
            Author: {blog.author}
          </span>
        </p>
        {/* Content */}
        <p className="text-gray-700 mb-6">{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
