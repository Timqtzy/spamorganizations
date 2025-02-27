import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollTop from "./component/ScrollTop";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CmsEvent from "./component/CmsEvent";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import "./App.css";
import LoadingSpinner from "./component/Loading"; // Custom loading animation

// Lazy load Navbar & Footer
const Navbar = lazy(() => import("./component/Navbar"));
const Footer = lazy(() => import("./component/Footer"));

function App() {
  return (
    <Router>
      <ScrollTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
      </Suspense>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog/" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cmsevent" element={<CmsEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
