import { Link } from "react-router-dom";
import HeroPhoto from "../assets/Hero1.png";
import "../App.css";

function HeroSection() {
  return (
    <div className="relative w-full">
      <div className="relative z-10">
        <section className="text-gray-600 body-font">
          <div className="max-w-screen-xl container mx-auto flex px-5 py-24 s:py-8 md:py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 md:pr-6 lg:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-semibold text-4xl s:text-2xl sm:text-2xl md:text-2xl smd:text-2xl lg:text-2xl xl:text-4xl mb-4 font-lg text-red-600">
                Building A Better Tomorrow Through Journalist Empowerment
              </h1>
              <p className="mb-8 leading-relaxed">
                Join us in our mission to uphold the highest standards of
                journalism.
              </p>
              <div className="flex justify-center ">
                <Link to="/about">
                  <button
                    id="LearnMoreBtn"
                    className="inline-flex text-white font-semibold bg-[#ff2d2d] border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]"
                  >
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-8">
              <img
                className="object-cover object-center rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={HeroPhoto}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HeroSection;
