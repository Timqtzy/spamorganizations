import React from "react";
import logo from "../assets/SpamLogo.png";

const teamMembers = [
  {
    name: "Melanie V. Briones",
    role: "Chief Operating Officer Bot Chairperson",
    image: "../src/TeamImage/member-1.png",
  },
  {
    name: "Richard N. Briones",
    role: "President",
    image: "../src/TeamImage/member-2.png",
  },
  {
    name: "Jonathan V. Sta Ana",
    role: "Corporate Secretary",
    image: "../src/TeamImage/member-3.png",
  },
  {
    name: "Alice R. Ramos",
    role: "Executive Secretary",
    image: "../src/TeamImage/member-4.png",
  },
  {
    name: "Lydia S. Villanueva",
    role: "Vice-President Internal",
    image: "../src/TeamImage/member-5.png",
  },
  {
    name: "June B. Mijares",
    role: "VP for Advocacy Affairs",
    image: "../src/TeamImage/member-6.png",
  },
];

const TeamSection = () => {
  return (
    <section className="bg-white text-black py-16">
      <div className="max-w-screen-xl container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-4xl font-bold mb-4">Our people make us great</h2>
          <p className="text-lg mb-2">
            Here we focus on markets where technology, innovation, can unlock
            long-term value.
          </p>
          <p className="text-lg mb-6">
            You'll interact with talented professionals, will be challenged to
            solve difficult problems and think in new and creative ways.
          </p>
          <button className="inline-flex text-white font-semibold bg-customRed border-0 py-2 px-6 focus:outline-none hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]">
            View more
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg text-center shadow-sm transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1  "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
