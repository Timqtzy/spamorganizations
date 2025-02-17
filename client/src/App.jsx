import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import CmsEvent from "./component/CmsEvent";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ScrollTop from "./component/ScrollTop";
import NotFound from "./pages/NotFound";
import "./App.css";
import "@fontsource/poppins"; // Defaults to weight 400

const futureConfig = {
  v7_startTransition: true,
  v7_relativeSplatPath: true,
};

function App() {
  return (
    <Router future={futureConfig}>
      <ScrollTop />
      <div>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            {/*<Route path="/register" element={<Register />} /> */}
            <Route path="/cmsevent" element={<CmsEvent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
