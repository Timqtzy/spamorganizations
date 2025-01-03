import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";
import { useMediaQuery } from "react-responsive";

const TimeLine = () => {
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    {
      date: "July 18-20, 2007",
      title: "1st Annual National Convention and Seminar-Workshop",
      Theme:
        "Reshaping Campus Journalism: An Adherence to the Modern Print Media of the 21st Century.",
    },
    {
      date: "August 20-22, 2008",
      title: "2nd Annual National Convention and Seminar- Workshop",
      Theme: "Gearing towards a Free and Responsible Campus Journalism.",
    },

    {
      date: "August 24-26, 2009",
      title: "3rd Annual National Convention and Seminar- Workshop",
      Theme: "A Drift towards Responsible Campus Journalism.",
    },
    {
      date: "July 28-30, 2010",
      title:
        "4th Annual National Convention and Seminar- Workshop and the 1st SPAM's SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2010",
      Theme:
        "COOL MEDIA: Empowering Campus Journalists Towards Public Critical Involvement.",
    },

    {
      date: "August 3-5, 2011",
      title:
        "5th Annual National Convention and Seminar- Workshop and the 2nd SPAM's 2nd SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2011",
      Theme:
        "Keeping the Tradition of Campus Journalism amidst the Influential Electronic Media.",
    },
    {
      date: "August 22-24, 2012",
      title:
        "6th Annual National Convention and Seminar- Workshop and the 3rd SPAM's SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2012",
      Theme:
        "Utilizing the Influence of Campus Paper in Promoting Filipino Culture Across Regions.",
    },

    {
      date: "September, 12-13, 2013",
      title:
        "7th Annual National Convention and Seminar- Workshop, 4th SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2013 and 1st International- Cultural Exchange",
      Theme:
        "Intensifying the Power of Campus Paper in Protecting and Preserving the Environment and Natural Resources.",
    },
    {
      date: "September, 11-13, 2014",
      title:
        "8th Annual National Media Conference and Seminar-Workshop, 5th SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2014 and 2nd International Cultural Exchange",
      Theme:
        "Inculcating the Essence of Truth, Credibility and Morality in Campus Journalism Amidst Global Changes.",
    },
    {
      date: "April 28-30, 2015",
      title: "Extramural 2015 Training of Advisers and Students",
      Theme:
        "Going beyond the Conventional: Training the Trainers, Campus Press and Communication Students.",
    },

    {
      date: "October 27-29, 2015",
      title:
        "9th Annual National Media Conference, 6th National Journalism Quiz Bee: Pambansang Pautakang Pampahayagan and 3rd Inter-Cultural Exchange",
      Theme:
        "Responding to the Challenges and Demands of Responsible Campus Journalism.",
    },
    {
      date: "April 28-30, 2015",
      title: "3rd Extramural Training and 1st Poetry Out Loud Competition",
      Theme: "Unifying Campus Journalists Amidst Diversity.",
    },

    {
      date: "October 26-28, 2016",
      title:
        "10th Annual National Media Conference, 7th Pautakang Pampahayagan and 4th I-Documento",
      Theme:
        "Exhibiting Gender Sensitivity through Ethical and Responsible Campus Journalism Proponent: Dr. Melanie Viloria-Briones.",
    },
    {
      date: "April 27-29, 2017",
      title: "4th Extramural Training and 2nd Poetry Out Loud Competition",
      Theme: "Getting into the Stride of Responsible and Innovative Writing.",
    },

    {
      date: "September 13-15, 2017",
      title:
        "11th National Media Conference, 5th Training of School Paper Advisers and 8th Pautakang Pampahayagan",
      Theme: "Advocating Ethical Campus Journalism Amidst Social Challenges.",
    },

    {
      date: "September 12-14, 2018",
      title: "12th National Media Conference",
      Theme:
        "Embracing Integration in a Borderless Society and in Cyberspace Through Campus Journalism.",
    },
    {
      date: "September 11-13, 2019",
      title: "13th National Campus Media Conference",
      Theme:
        "Fostering an Upright Campus Journalism in the Era of Generation C.",
    },

    {
      date: "November 8-10, 2023",
      title:
        "14th National Campus Media Conference and 1st International Media Research Conference",
      Theme:
        "Promoting Evidence-based Journalism in the Reel World of Al and Social Media Influencers Proponent: Mr. Carlito Apolinario Robin Coordinator: Ms. Leah Murillo Panaguiton.",
    },
    // End
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 6;
  const eventContainerRef = useRef(null);
  const isSmScreen = useMediaQuery({ query: "(max-width: 640px)" });

  const handleNext = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(events.length / eventsPerPage) - 1)
    );
    eventContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    eventContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const displayedEvents = events.slice(
    currentPage * eventsPerPage,
    (currentPage + 1) * eventsPerPage
  );

  const checksScreen = (index) => {
    if (index % 2 === 0) {
      return "mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline";
    } else if (index % 2 === 0 || isSmScreen) {
      return "mb-8 flex justify-between items-center w-full flex-row-reverse left-timeline";
    } else {
      return "mb-8 flex justify-between items-center w-full right-timeline";
    }
  };

  const checkSmallScreen = () => {
    let baseStyle = "absolute h-full border-2 border-red-400 rounded ";
    if (isSmScreen) {
      return `${baseStyle} left-0`;
    } else {
      return `${baseStyle} right-1/2`;
    }
  };

  return (
    <div
      className="mx-auto max-w-7xl text-center px-4 pt-24"
      ref={eventContainerRef}
    >
      {" "}
      <section
        className={`section animate-fade-in ${sectionInView ? "in-view" : ""}`}
        ref={sectionRef}
      >
        {" "}
        <div className="bg-white text-white">
          {" "}
          <div className="mx-auto flex flex-col lg:flex-row items-start">
            {" "}
            <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:my-12 py-8 md:px-8 s:px-0 sm:px-0 ssm:px-0">
              {" "}
              <p className="ml-2 text-red-400 uppercase tracking-loose">
                {" "}
                Events{" "}
              </p>{" "}
              <p className="text-3xl font-bold text-red-700 leading-relaxed mb-2">
                {" "}
                Programs And Projects{" "}
              </p>{" "}
              <p className="text-sm text-gray-500 mb-4">
                {" "}
                Learn about the events and programs that shaped our journey.{" "}
              </p>{" "}
              {/*<a
                href="#end"
                className="bg-transparent hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent transform transition-all duration-[300ms] ease-in delay-[100ms]"
              >
                {" "}
                SKIP{" "}
              </a>{" "}
              */}
            </div>{" "}
            <div className="lg:w-2/3 sticky">
              {" "}
              <div className="relative wrap overflow-hidden p-10 s:p-2 ssm:p-2 sm:p-2 md:p-4">
                {" "}
                {/* Vertical Borders */}{" "}
                <div className={checkSmallScreen()}></div> {/* Render Events */}{" "}
                {displayedEvents.map((event, index) => (
                  <div key={index} className={checksScreen(index)}>
                    {" "}
                    <div
                      className={`order-1${isSmScreen ? "w-0" : "w-5/12"}`}
                    ></div>{" "}
                    <div
                      className={`order-1 px-4 py-4 text-left ${isSmScreen ? "w-full" : "w-5/12"}`}
                    >
                      {" "}
                      <p className="mb-3 text-base text-red-400">
                        {" "}
                        {event.date}{" "}
                      </p>{" "}
                      <h4 className="mb-3 font-bold text-md text-customRed">
                        {" "}
                        {event.title}{" "}
                      </h4>{" "}
                      <p className="text-sm leading-snug text-gray-500">
                        {" "}
                        {event.Theme}{" "}
                      </p>{" "}
                    </div>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
              {/* Pagination Controls */}{" "}
              <div className="flex justify-between mt-8 mb-24 sm:mb-12">
                {" "}
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-sm mx-2 transform transition-all duration-[300ms] ease-in delay-[100ms] ${currentPage === 0 ? "bg-transparent hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent cursor-not-allowed" : "bg-transparent hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent cursor-pointer"}`}
                  onClick={handlePrevious}
                  disabled={currentPage === 0}
                >
                  {" "}
                  Previous{" "}
                </button>{" "}
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-sm mx-2 transform transition-all duration-[300ms] ease-in delay-[100ms] ${(currentPage + 1) * eventsPerPage >= events.length ? "bg-customRedHover hover:bg-transparent text-white hover:text-red rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-customRed hover:text-red-400 hover:bg-customRedHover cursor-not-allowed" : "bg-customRedHover hover:bg-transparent text-white hover:text-red rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-customRed hover:text-red-400 hover:bg-customRedHover cursor-pointer"}`}
                  onClick={handleNext}
                  disabled={(currentPage + 1) * eventsPerPage >= events.length}
                >
                  {" "}
                  Next{" "}
                </button>{" "}
              </div>{" "}
              <img
                className="mx-auto mt-36 mb-24 hidden sm:block"
                src="/public/study.png"
                alt="Study"
              />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
};
export default TimeLine;
