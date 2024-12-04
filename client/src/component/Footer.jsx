import logo from "../assets/SpamLogo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="mx-auto bg-gray-100">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 max-w-screen-xl mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                COMPANY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    About
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Registration
                  </a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Contact
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SOCIAL MEDIA
              </h2>
              <nav className="list-none mb-10">
                <li>
                <a href="https://www.facebook.com/SchoolPressAdvisersMovementInc" className="text-gray-600 hover:text-gray-800">
                    Facebook
                  </a>
                </li>

              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                TERMS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Submit
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
                Subscribe for more
                <br className="lg:block hidden" />
                exciting news
              </p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="container px-5 py-6 max-w-screen-xl mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> <img
                src={logo} alt="Spam Logo" className="w-10 h-10 text-white rounded-full"/>
              <span className="ml-3 text-xl text-customRed">SPAM</span> </a>
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
              <a href="https://www.facebook.com/SchoolPressAdvisersMovementInc" className="text-gray-500" target="_blank">
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
            </span>
          </div>
        </div>
      </footer>
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
