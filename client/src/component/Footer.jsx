import logo from "../assets/SpamLogo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Footer() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState(""); // success, error

  const showToastNotification = (message, type) => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    // Auto-hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${API_URL}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      // Handle already subscribed email (409 conflict)
      if (response.status === 409) {
        showToastNotification("This email is already subscribed.", "error");
        return; // Exit early, no need to proceed with the rest of the logic
      }
      if (response.ok) {
        showToastNotification("Subscribed successfully!", "success");
        setEmail("");
      } else {
        const errorMessage =
          data.message || "Failed to subscribe. Please try again.";
        showToastNotification(errorMessage, "error");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      showToastNotification(
        "Network error occurred. Please check your connection and try again.",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto bg-gray-800">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 max-w-screen-xl mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-[#d62926]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-[#d62926]"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-gray-300 hover:text-[#d62926]"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-[#d62926]"
                  >
                    Contact
                  </Link>
                </li>
                {/*
                <li>
                  <a className="text-gray-300 hover:text-[#d62926]">
                    Registration
                  </a>
                </li>
                */}
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SOCIAL MEDIA
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.facebook.com/SchoolPressAdvisersMovementInc"
                    className="text-gray-300 hover:text-[#d62926]"
                  >
                    Facebook
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                TERMS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-300 hover:text-[#d62926]">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-2/5 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <form
                onSubmit={handleSubmit}
                className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start"
              >
                <div className="relative w-80 my-2 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="footer-field"
                    name="footer-field"
                    required
                    className="w-full bg-gray-100 bg-opacity-30 rounded border border-gray-300 focus:bg-white focus:border-[#FF6A6A] focus:ring-[#FF6A6A] focus:ring-1 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`my-2 lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]${
                    isLoading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              <p className="text-gray-300 text-sm mt-2 md:text-left text-center">
                Subscribe for more exciting news
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 border-t-2 border-gray-700 max-w-screen-xl mx-auto">
          <div className="container px-5 py-6 max-w-screen-xl mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              {" "}
              <img
                src={logo}
                alt="Spam Logo"
                className="w-10 h-10 text-white rounded-full"
              />
              <span className="ml-3 text-xl text-customRed">SPAM</span>{" "}
            </a>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
              © 2024 SPAM —
              <a
                href="https://www.facebook.com/TimCanMimic"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Tim
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a
                href="https://www.facebook.com/SchoolPressAdvisersMovementInc"
                className="text-gray-500"
                target="_blank"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
      {showToast && (
        <div
          className={`fixed bottom-4 right-4 z-50 min-w-[300px] text-center ${
            toastType === "success"
              ? "text-green-600 bg-green-100"
              : "text-red-600 bg-red-100"
          } p-4 rounded-lg shadow-lg border ${
            toastType === "success" ? "border-green-200" : "border-red-200"
          } animate-fade-in-up`}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}

export default Footer;

{
  /*
<div className="bg-white">
  <footer className="bg-white rounded-lg  dark:bg-gray-900 mt-28 max-w-screen-xl mx-auto px-4">
    <div className="w-full max-w-screen-xl mx-auto py-24 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <a
          href=""
          className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
        >
          <img src={SpamLogo} className="h-8" alt="Spam Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-500">
            SPAM
          </span>
        </a>
        <form className="w-full md:w-1/2 xl:w-1/3">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full"
          />
          <button className="btn btn-primary w-full">Subscribe</button>
        </form>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:underline me-4 md:me-6">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline me-4 md:me-6">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2024{" "}
        <a href="" className="hover:underline">
          SPAM™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  </footer>
</div>
*/
}
