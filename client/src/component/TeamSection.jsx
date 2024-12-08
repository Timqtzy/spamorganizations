import React from "react";
import { Link } from "react-router-dom";
import member1 from "../TeamImage/member-1.png";
import member2 from "../TeamImage/member-2.png";
import member3 from "../TeamImage/member-3.png";
import member4 from "../TeamImage/member-4.png";
import member5 from "../TeamImage/member-5.png";
import member6 from "../TeamImage/member-6.png";

const teamMembers = [
  {
    name: "Melanie V. Briones",
    role: "Chief Operating Officer Bot Chairperson",
    image: member1,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "Richard N. Briones",
    role: "President",
    image: member2,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "Jonathan V. Sta Ana",
    role: "Corporate Secretary",
    image: member3,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "Alice R. Ramos",
    role: "Executive Secretary",
    image: member4,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "Lydia S. Villanueva",
    role: "Vice-President Internal",
    image: member5,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "June B. Mijares",
    role: "VP for Advocacy Affairs",
    image: member6,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "Lydia S. Villanueva",
    role: "Vice-President Internal",
    image: member5,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
  {
    name: "June B. Mijares",
    role: "VP for Advocacy Affairs",
    image: member6,
    description:
      "Jese drives the technical strategy of the themesberg platform and brand.",
  },
];

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-24 mx-auto max-w-6xl px-4">
        <div className="flex flex-col text-center mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our diverse group of dedicated journalists brings a wealth of
            experience and passion to uncovering the truth and delivering
            impactful stories. Together, we strive to inform, inspire, and
            engage our readers with reliable and compelling news.
          </p>
          <Link to="/about">
            <button className="mt-4 inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]">
              View more
            </button>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="m-6 p-4 w-full s:w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/5 bg-gray-100 rounded-md shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1"
            >
              <div className="h-full flex flex-col items-center text-left">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-700 mb-3">{member.role}</h3>
                  <p className="mb-4">{member.description}</p>
                  <span className="inline-flex">
                    <a className="text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </a>
                    <a className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
