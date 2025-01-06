import React from "react";
import CommunitySection from "../component/CommunitySection";
import TeamSection from "../component/TeamSectionsAbout";
import logo from "../assets/SpamLogo.png";
import Founder from "../AboutTeamImg/Melanie Briones.png";
import "../App.css";
import TimeLine from "../component/TimeLine";

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
      {/*
      <div>
        <section className="text-gray-600 body-font">
          <div className="max-w-7xl mx-auto flex px-4  py-24 flex-col items-center">
            <div className="max-w-lg lg:w-1/2 w-full mb-10 md:mb-8">
              <img
                className="mx-auto object-cover object-center w-96 h-96 rounded transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]"
                alt="hero"
                src={Founder}
              />
            </div>
            
            <div className="lg:flex-grow w-full flex flex-col items-start text-left items-left ">
              <h3 className="text-sm font-medium text-red-700 uppercase">
                Founding President{" "}
              </h3>
              <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                Melanie Viloria-Briones{" "}
              </h2>
              <p className="text-lg mb-8 leading-relaxed">
                Melanie G. Viloria-Briones is a passionate advocate for media
                education and responsible campus journalism, whose dedication
                stems from her firsthand experiences as a campus journalist and
                publication moderator. Recognizing the growing need to empower
                campus journalists and support school paper advisers, she
                founded the School Press Advisers Movement, Incorporated—a
                pioneering initiative aimed at transforming journalism education
                and mentorship in the Philippines. Briones stands as a beacon of
                excellence, combining her expertise with a relentless drive to
                inspire responsible reporting and ethical storytelling across
                the country. Under her leadership, the organization has become a
                trailblazer in fostering professional growth and guiding campus
                journalism towards global standards. With the vision of creating
                a nationally and internationally respected movement, the
                organization focuses on advancing four critical pillars: Media
                Technologies, Journalistic Writing, Integrated Marketing
                Communications and Media Ethics. Through this comprehensive
                approach, Briones has built a platform that equips future media
                leaders to navigate an increasingly complex world. Her mission
                centers on nurturing 21st-century communicators who not only
                excel in their craft but also contribute meaningfully to society
                and the environment. Melanie Viloria-Briones continues to
                inspire a generation of journalists and educators to uphold the
                principles of integrity, innovation, and impactful storytelling.
                Her work ensures that campus journalism remains a force for
                good, shaping the voices of tomorrow.
              </p>
            </div>
          </div>
        </section>
      </div>
      */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl text-left px-6 s:px-4 pt-24">
          <h2 className="text-3xl s:text-2xl font-extrabold text-gray-900">
            Founding President
          </h2>
        </div>
        <div className="bg-gray-100 pt-8 pb-4 slg:pb-0 px-4 flex flex-col lg:flex-col slg:flex-row lg:items-left slg:items-center max-w-7xl mx-auto">
          <div className="lg:w-1/2 mr-8 s:mx-auto sm:mx-auto md:mx-auto smd:mx-auto lg:mx-auto slg:mx-0">
            <img
              src={Founder}
              alt="St. Nicolas College Logo"
              className="mb-4 w-64 h-64 mx-auto ssm:w-96 ssm:h-96 slg:mx-2"
            />
          </div>
          <div className="w-full ">
            <p className="text-justify mb-4 text-lg text-gray-500">
              <span className="text-red-600">Melanie G. Viloria-Briones </span>{" "}
              is a passionate advocate for media education and responsible
              campus journalism, whose dedication stems from her firsthand
              experiences as a campus journalist and publication moderator.
              Recognizing the growing need to empower campus journalists and
              support school paper advisers, she founded the School Press
              Advisers Movement, Incorporated—a pioneering initiative aimed at
              transforming journalism education and mentorship in the
              Philippines.
            </p>
            <p className="text-justify text-lg text-gray-500">
              Briones stands as a beacon of excellence, combining her expertise
              with a relentless drive to inspire responsible reporting and
              ethical storytelling across the country. Under her leadership, the
              organization has become a trailblazer in fostering professional
              growth and guiding campus journalism towards global standards.
              With the vision of creating a nationally and internationally
              respected movement, the organization focuses on advancing four
              critical pillars: Media Technologies, Journalistic Writing,
              Integrated Marketing Communications and Media Ethics.
            </p>
          </div>
        </div>
        <div className="pb-24 pt-4 px-4 lg:flex lg:items-center max-w-7xl mx-auto">
          <div className=" lg:pr-8">
            <p className="text-justify mb-4 text-lg text-gray-500">
              Through this comprehensive approach, Briones has built a platform
              that equips future media leaders to navigate an increasingly
              complex world. Her mission centers on nurturing 21st-century
              communicators who not only excel in their craft but also
              contribute meaningfully to society and the environment.
            </p>
            <p className="text-justify text-lg text-gray-500">
              Melanie Viloria-Briones continues to inspire a generation of
              journalists and educators to uphold the principles of integrity,
              innovation, and impactful storytelling. Her work ensures that
              campus journalism remains a force for good, shaping the voices of
              tomorrow.
            </p>
          </div>
        </div>
      </div>
      <div>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
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
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
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
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
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
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
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
        {/*
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Founding President
                </h2>
                <img
                  src={Founder}
                  alt="Founder Photo"
                  className="mb-4  pt-8 s:hidden sm:hidden md:hidden lg:flex object-cover"
                />
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  <span className="text-red-600">
                    Melanie G. Viloria-Briones{" "}
                  </span>
                  is a passionate advocate for media education and responsible
                  campus journalism, whose dedication stems from her firsthand
                  experiences as a campus journalist and publication moderator.
                  Recognizing the growing need to empower campus journalists and
                  support school paper advisers, she founded the School Press
                  Advisers Movement, Incorporated—a pioneering initiative aimed
                  at transforming journalism education and mentorship in the
                  Philippines. <br /> <br /> Briones stands as a beacon of
                  excellence, combining her expertise with a relentless drive to
                  inspire responsible reporting and ethical storytelling across
                  the country. Under her leadership, the organization has become
                  a trailblazer in fostering professional growth and guiding
                  campus journalism towards global standards. With the vision of
                  creating a nationally and internationally respected movement,
                  the organization focuses on advancing four critical pillars:
                  Media Technologies, Journalistic Writing, Integrated Marketing
                  Communications and Media Ethics. Through this comprehensive
                  approach, Briones has built a platform that equips future
                  media leaders to navigate an increasingly complex world. Her
                  mission centers on nurturing 21st-century communicators who
                  not only excel in their craft but also contribute meaningfully
                  to society and the environment.
                  <br />
                  <br /> Melanie Viloria-Briones continues to inspire a
                  generation of journalists and educators to uphold the
                  principles of integrity, innovation, and impactful
                  storytelling. Her work ensures that campus journalism remains
                  a force for good, shaping the voices of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </section>
        */}
      </div>
      <div className="">
        <TimeLine />
      </div>
      <div className="" id="end"></div>
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
