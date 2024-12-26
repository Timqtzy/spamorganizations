import React from "react";
import CommunitySection from "../component/CommunitySection";
import TeamSection from "../component/TeamSectionsAbout";
import logo from "../assets/SpamLogo.png";
import "../App.css";

function About() {
  return (
    <div className="font-poppins">
      <CommunitySection />
      <TeamSection />
      {/*
<div className="py-24 px-4 lg:flex lg:flex-col lg:items-center max-w-7xl mx-auto">
        <img
          src={logo}
          alt="St. Nicolas College Logo"
          className="mb-4 w-32 h-auto mx-auto md:flex s:hidden"
        />
        <h2 className="text-red-700 text-3xl font-extrabold mb-8  text-center s:text-left">
          Brief History
        </h2>
        <p className="text-left mb-4 text-lg">
          The School Press Advisers Movement Inc. (SPAM, INC.) was conceived by
          its founding president, Dr. Melanie Viloria-Briones and was pitched by
          her to campus paper advisers on September 10, 2006 in a national
          conference that she organized at the University of the Assumption,
          City of San Fernando, Pampanga. The organization was set up as a
          national organization of campus advisers from elementary, high school
          and college. It aims to unite campus journalism educators in the
          Philippines and offer affordable trainings and eventually reach out to
          deserving institutions that need assistance in the establishment of
          their publications or training of their writers.
        </p>
        <p className="text-left text-lg">
          On July 29, 2009, the organization was registered at the Securities
          and Exchange Commission (SEC) with Company Registration No.
          CN200911591. Embracing the principle of co-opetition', SPAM Inc.
          expanded its composition to include school administrators, media and
          industry practitioners.
        </p>
      </div>
      <div className="py-24 px-4 lg:flex lg:flex-col lg:items-center max-w-7xl mx-auto">
        <h2 className="text-red-700 text-3xl font-extrabold mb-8 text-center s:text-left">
          Why 'Movement'{" "}
        </h2>
        <p className="text-left mb-4 text-lg">
          SPAM Inc. endeavors to effect reforms; it is not only confined in
          gathering participants to be merely audience or listeners. It does not
          only open doors for School Paper Advisers (SPAs) to hone their skills
          but it also gives them the opportunity to propose modules, share their
          expertise and develop their skills in research. Hand-in-hand with this
          journey of self-enrichment is the training provided to student
          journalists and communication and journalism students from various
          parts of the country.
        </p>
        <p className="text-left text-lg">
          The trainings and contests that the organization has embarked on paved
          the way for the development of the students' ability to realize the
          concepts of co-opetition'. All these are ways for the realization of
          the organization's advocacy in promoting responsible journalism.
        </p>
      </div>
      */}
      <div>
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  VISION
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Our Vision
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  An organization which is respected nationally and
                  internationally as a professionally-oriented movement that
                  excels in research, trainings and in responsible, ethical and
                  revolutionary media practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  MISSION
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Our Mission
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  Prepares 21st Century education and media leaders to thrive in
                  an increasingly complex world and to contribute to the
                  betterment of the environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  History
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Brief History
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  The School Press Advisers Movement Inc. (SPAM, INC.) was
                  conceived by its founding president, Dr. Melanie
                  Viloria-Briones and was pitched by her to campus paper
                  advisers on September 10, 2006 in a national conference that
                  she organized at the University of the Assumption, City of San
                  Fernando, Pampanga. <br /> <br />
                  The organization was set up as a national organization of
                  campus advisers from elementary, high school and college. It
                  aims to unite campus journalism educators in the Philippines
                  and offer affordable trainings and eventually reach out to
                  deserving institutions that need assistance in the
                  establishment of their publications or training of their
                  writers. <br /> <br /> On July 29, 2009, the organization was
                  registered at the Securities and Exchange Commission (SEC)
                  with Company Registration No. CN200911591. Embracing the
                  principle of co-opetition', SPAM Inc. expanded its composition
                  to include school administrators, media and industry
                  practitioners.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  Why?
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Why Movement?
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  SPAM Inc. endeavors to effect reforms; it is not only confined
                  in gathering participants to be merely audience or listeners.
                  It does not only open doors for School Paper Advisers (SPAs)
                  to hone their skills but it also gives them the opportunity to
                  propose modules, share their expertise and develop their
                  skills in research. <br /> <br /> Hand-in-hand with this
                  journey of self-enrichment is the training provided to student
                  journalists and communication and journalism students from
                  various parts of the country. The trainings and contests that
                  the organization has embarked on paved the way for the
                  development of the students' ability to realize the concepts
                  of co-opetition'. All these are ways for the realization of
                  the organization's advocacy in promoting responsible
                  journalism.
                </p>
              </div>
            </div>
          </div>
        </section>
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

export default About;
