import React from "react";
import HeroPhoto2 from "../assets/Hero2.png";
import Donate from "../assets/Donate.png";
import Hero1 from "../assets/Hero1.png";
import CarouselLogo from "../component/CarouselLogo";
import { Link } from "react-router-dom";
import HeroSection from "../component/HeroSection";
import DataDisplay from "../component/DataDisplay";
import AccordionComponent from "../component/AccordionComponent";
import Subscribe from "../component/Subscribe";
import "../App.css";
import TeamSection from "../component/TeamSection";

function Home() {
  return (
    <div className="font-poppins">
      <div className="py-24 s:py-2 sm:py-4">
        <HeroSection />
      </div>
      <div className="pt-12 pb-24 max-w-screen-xl mx-auto block s:hidden sm:hidden md:block lg:block">
        {" "}
        <CarouselLogo />
      </div>
      <div className="py-14 bg-gray-900 ">
        <section className="text-gray-600 body-font max-w-screen-xl mx-auto rounded-lg">
          <div className="containerpx-5 py-12 s:py-2 sm:py-2 mx-auto s:mx-0 sm:mx-0">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white s:px-4">
                Empowering Journalists to Uphold Integrity and Excellence in
                Reporting
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center text-white s:px-4">
                At our organization, we are dedicated to promoting ethical
                journalism that informs and empowers communities. Our mission is
                to foster a culture of integrity, transparency, and excellence
                in media, ensuring that every voice is heard.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="py-24 bg-gray-100">
        <div className="bg-gray-100 px-4 py-10">
          <div id="features" className="mx-auto max-w-6xl">
            <p className="text-center text-base font-semibold leading-7 text-red-500">
              Why Choose Us?
            </p>
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Empower your journalism with SPAM
            </h2>
            <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3 ">
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 21h8m-4-4v4m-4.5-9.5l-2-2m11 2l2-2M12 3c1.7 0 3 1.3 3 3 0 .8-.3 1.5-.8 2l-.7.7c-.4.4-.5.9-.5 1.3v1h-2v-1c0-.8.3-1.5.8-2l.7-.7c.4-.4.5-.9.5-1.3 0-.6-.4-1-1-1s-1 .4-1 1H9c0-1.7 1.3-3 3-3z"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium">
                  Expertise and Experience
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  With over a decade of experience, our organization is a
                  trusted name in campus journalism. We bring a wealth of
                  knowledge to help you excel.
                </p>
              </li>

              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Extensive Network
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Join a nationwide network of campus journalism educators and
                  professionals, providing opportunities for collaboration,
                  mentorship, and professional growth.
                </p>
              </li>

              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium">
                  Comprehensive Training Programs
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We offer training programs and workshops to enhance the skills
                  of school paper advisers and student journalists, tailored to
                  meet the evolving needs of the journalism community.
                </p>
              </li>
              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Innovative Resources
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our website is a hub of resources, including the latest news,
                  updates, and educational materials. We strive to provide tools
                  that empower you to stay informed and excel in your field.
                </p>
              </li>

              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Commitment to Excellence
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  Our commitment to excellence drives us to continuously improve
                  our services and support. We are dedicated to fostering a
                  vibrant and dynamic community of campus journalists.
                </p>
              </li>

              <li className="rounded-xl bg-white px-6 py-8 shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1">
                <div className="bg-red-500 mx-auto h-12 w-12 flex items-center justify-center rounded-full">
                  <svg
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-10 w-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 15l-3-3m0 0l3-3m-3 3h12M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                  Recognition and Awards
                </h3>
                <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                  We recognize and celebrate the achievements of outstanding
                  school paper advisers and student journalists through our
                  prestigious awards and recognition programs. Your hard work
                  and dedication deserve to be acknowledged.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-white py-24">
        <TeamSection />
      </div>
      <div className="py-14 bg-gray-900 ">
        <section className="text-gray-600 body-font max-w-screen-xl mx-auto rounded-lg">
          <div className="containerpx-5 py-12 s:py-2 sm:py-2 mx-auto s:mx-0 sm:mx-0">
            <div className="flex flex-col text-center w-full mt-2 mb-2">
              <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white s:px-4">
                Our Commitment to Integrity and Excellence in Journalism Starts
                Here
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center text-white s:px-4">
                At our organization, we strive to uphold the highest standards
                in journalism. Our dedicated team works tirelessly to promote
                transparency and accountability in media. Join us as we champion
                the values that define quality journalism.
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="py-24 bg-gray-100">
        <section className="text-gray-600 body-font">
          <div className="max-w-screen-xl container mx-auto flex px-4 py-12 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h4 className="title-font font-medium text-4xl s:text-2xl sm:text-2xl md:text-2xl smd:text-2xl lg:text-2xl xl:text-4xl mb-2 text-gray-900">
                Empowering Journalists to Uphold Truth and Foster Informed
                Communities.
                <span className="hidden lg:inline-block"> </span>
              </h4>
              <p className="md:mb-4 mb-8 leading-relaxed text-base">
                At our organization, we champion the principles of integrity and
                excellence in journalism. Join us in our mission to promote
                transparency and accountability in the media.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={HeroPhoto2}
              />
            </div>
          </div>
        </section>
      </div>

      <div className="py-24 bg-white">
        <section className="text-gray-600 body-font px-4">
          <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center max-w-screen-xl">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font font-medium	text-4xl s:text-2xl sm:text-2xl md:text-2xl smd:text-2xl lg:text-2xl xl:text-4xl mb-2 text-gray-900">
                Support Journalism with Your Donation
                <br className="hidden lg:inline-block" />
              </h1>
              <p className="md:mb-4 mb-8 leading-relaxed">
                Your contribution helps us promote integrity and excellence in
                journalism for a better tomorrow.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]">
                  Donate
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={Donate}
              ></img>
            </div>
          </div>
        </section>
      </div>
      <div className="mx-auto py-24 bg-gray-100">
        <div className="max-w-screen-xl mx-auto py-12">
          <h1 className="sm:text-3xl md:text-3xl lg:text-4xl font-medium title-font mb-2 text-gray-900 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-4 sm:mb-4 md:mb-8 lg:mb-10 text-center">
            {" "}
            We're happy to answer your questions!
          </p>
          <AccordionComponent />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 z-10">
        {" "}
        <button
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          className="bg-red-500 px-4 py-2 text-white hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-6 h-6"
            fill="currentColor"
          >
            {" "}
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />{" "}
          </svg>{" "}
        </button>{" "}
      </div>
    </div>
  );
}

export default Home;
