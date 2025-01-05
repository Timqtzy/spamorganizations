import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
const BlogPost = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  {
    /*const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000"; // Replace with the correct URL*/
  }
  {
    /*  const apiUrl = import.meta.env.VITE_API_URL; // Replace with the correct URL*/
  }

  const apiUrl = import.meta.env.VITE_API_URL; // Replace with the correct URL

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
    <div className="bg-gray-100 py-12 lg:py-24 px-4 min-h-screen">
      <section className="max-w-4xl mx-auto pb-2 sm:pb-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <Link to="/blog">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-red-600 dark:text-gray-400 dark:hover:text-white transform transition-all duration-[300ms] ease-in delay-[100ms]"
                >
                  <svg
                    className="w-3 h-3 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Blog
                </a>
              </li>
            </Link>
            <li>
              <div className="flex items-center">
                <svg
                  className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  className="ms-1 text-sm font-medium text-gray-700 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                >
                  Read
                </a>
              </div>
            </li>
          </ol>
        </nav>
      </section>

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
