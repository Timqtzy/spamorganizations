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
  },
  {
    name: "Richard N. Briones",
    role: "President",
    image: member2,
  },
  {
    name: "Jonathan V. Sta Ana",
    role: "Corporate Secretary",
    image: member3,
  },
  {
    name: "Alice R. Ramos",
    role: "Executive Secretary",
    image: member4,
  },
  {
    name: "Lydia S. Villanueva",
    role: "Vice-President Internal",
    image: member5,
  },
  {
    name: "June B. Mijares",
    role: "VP for Advocacy Affairs",
    image: member6,
  },
  {
    name: "Lydia S. Villanueva",
    role: "Vice-President Internal",
    image: member5,
  },
  {
    name: "June B. Mijares",
    role: "VP for Advocacy Affairs",
    image: member6,
  },
];

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font font-poppins">
      <div className="container py-24 mx-auto max-w-6xl px-4">
        <div className="flex flex-col text-center mb-20">
          <h1 className="text-2xl font-bold title-font mb-4 text-gray-900">
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
              className="m-4 p-4 w-full s:w-10/12 sm:w-7/12 md:w-1/3 lg:w-1/5 bg-gray-100 rounded-md shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1"
            >
              <div className="h-full flex flex-col items-center text-left">
                <img
                  alt={member.name}
                  className="flex-shrink-0 rounded-lg w-full h-48 object-cover object-center mb-4"
                  src={member.image}
                />
                <div className="w-full">
                  <h2 className="title-font font-semibold text-lg text-gray-900 text-center">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-800 mb-3 font-medium text-center">
                    {member.role}
                  </h3>
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
