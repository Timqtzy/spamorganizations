import React, { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import "tailwindcss/tailwind.css";

const YourComponent = () => {
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
      date: "September, 12-13",
      title:
        "7th Annual National Convention and Seminar- Workshop, 4th SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2013 and 1st International- Cultural Exchange",
      Theme:
        "Intensifying the Power of Campus Paper in Protecting and Preserving the Environment and Natural Resources.",
    },

    // Second Page

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
      date: "September, 12-13",
      title:
        "7th Annual National Convention and Seminar- Workshop, 4th SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2013 and 1st International- Cultural Exchange",
      Theme:
        "Intensifying the Power of Campus Paper in Protecting and Preserving the Environment and Natural Resources.",
    },

    // Third Page

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
      date: "September, 12-13",
      title:
        "7th Annual National Convention and Seminar- Workshop, 4th SPAM's National Journalism Quiz Bee: PAMBANSANG PAUTAKANG PAMPAHAYAGAN 2013 and 1st International- Cultural Exchange",
      Theme:
        "Intensifying the Power of Campus Paper in Protecting and Preserving the Environment and Natural Resources.",
    },

    // End
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const eventsPerPage = 7;
  const eventContainerRef = useRef(null);

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

  return (
    <div
      className="mx-auto max-w-7xl text-center px-6 pt-24"
      ref={eventContainerRef}
    >
      <section
        ref={sectionRef}
        className={`${sectionInView ? "animate-fade-in" : "opacity-0"}`}
      >
        <div className="bg-white text-white">
          <div className="container mx-auto flex flex-col lg:flex-row slg:flex-row items-start">
            <div className="flex flex-col w-full lg:sticky md:top-36 lg:w-1/3 mt-2 md:my-12 px-8">
              <p className="ml-2 text-red-400 uppercase tracking-loose">
                Events{" "}
              </p>
              <p className="text-3xl font-bold text-red-700 md:text-4xl leading-normal md:leading-relaxed mb-2">
                Programs And Project{" "}
              </p>
              <p className="text-sm md:text-base text-gray-500 mb-4">
                This is your reference for the events and programs. Follow all
                the steps to understand the timeline.
              </p>
              <a
                href="#end"
                className="bg-transparent mr-auto mx-auto hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent"
              >
                SKIP
              </a>
            </div>
            <div className=" lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div
                    className="border-2 border-customRed absolute h-full border border-red-400 rounded"
                    style={{ right: "50%" }}
                  ></div>
                  <div
                    className="border-2 border-customRed absolute h-full border border-red-400 rounded"
                    style={{ left: "50%" }}
                  ></div>
                  {displayedEvents.map((event, index) => (
                    <div
                      key={index}
                      className={`mb-8 flex justify-between ${
                        index % 2 === 0
                          ? "items-center w-full right-timeline"
                          : "flex-row-reverse items-center w-full left-timeline"
                      }`}
                    >
                      <div className="order-1 w-5/12"></div>
                      <div className="order-1 w-5/12 px-1 py-4 text-left">
                        <p className="mb-3 text-base text-red-400">
                          {event.date}
                        </p>
                        <h4 className="mb-3 font-bold text-md text-customRed">
                          {event.title}
                        </h4>
                        <p className="text-sm md:text-base leading-snug text-left text-gray-500 text-opacity-100">
                          {event.Theme}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between">
                  <button
                    className="bg-transparent hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent"
                    onClick={handlePrevious}
                    disabled={currentPage === 0}
                  >
                    Previous
                  </button>
                  <button
                    className="bg-transparent hover:bg-customRedHover text-red-400 hover:text-white rounded shadow hover:shadow-lg py-2 px-4 border border-customRed hover:border-transparent"
                    onClick={handleNext}
                    disabled={
                      currentPage ===
                      Math.ceil(events.length / eventsPerPage) - 1
                    }
                  >
                    Next
                  </button>
                </div>
                <img
                  className="mx-auto -mt-36 md:-mt-36"
                  src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
                  alt="Your Alt Text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default YourComponent;
