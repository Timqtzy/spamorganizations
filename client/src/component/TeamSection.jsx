import React from "react";
import { Link } from "react-router-dom";
import member1 from "../AboutTeamImg/Melanie Briones.png";
import member2 from "../AboutTeamImg/Richard N. Briones.png";
import member3 from "../AboutTeamImg/Jonathan Sta. Ana.png";
import member4 from "../AboutTeamImg/Alice R. Ramos.jpg";
import member5 from "../AboutTeamImg/Lydia S. Villanueva.jpg";
import member6 from "../AboutTeamImg/June B. Mijares.jpg";
import member7 from "../AboutTeamImg/Cristina B. Reyes.jpg";
import member8 from "../AboutTeamImg/Richy Lloyd M. Tan.png";

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
    name: "Cristina B. Reyes",
    role: "VP for Luzon",
    image: member7,
  },
  {
    name: "Richy Lloyd M. Tan",
    role: "VP for Visayas",
    image: member8,
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
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center py-4 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1"
              >
                <img
                  alt={member.name}
                  className="mx-auto h-64 w-64 rounded-md xl:w-56 xl:h-56"
                  src={member.image}
                />
                <div className="mt-6">
                  <h2 className="title-font font-semibold text-lg text-gray-900">
                    {member.name}
                  </h2>
                  <h3 className="text-gray-800 mb-3 font-medium">
                    {member.role}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
