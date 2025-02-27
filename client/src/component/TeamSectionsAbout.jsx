import React, { useState, useEffect } from "react";
import MelanieBrionesImg from "../AboutTeamImg/Melanie Briones.png";
import RichardNBriones from "../AboutTeamImg/Richard N. Briones.png";
import JonathanStaAnaImg from "../AboutTeamImg/Jonathan Sta. Ana.png";
import JaypeeVLagmanImg from "../AboutTeamImg/Jaypee V. Lagman.png";
import MarkVincentVBrionesImg from "../AboutTeamImg/Mark Vincent V. Briones.png";
import RichyLloydMTanImg from "../AboutTeamImg/Richy Lloyd M. Tan.png";
import CarlitoARobinImg from "../AboutTeamImg/Carlito A. Robin.png";
import ArvinBCasimiroImg from "../AboutTeamImg/Arvin B. Casimiro.jpg";
import CedricJoshuaJarciaImg from "../AboutTeamImg/Cedric Joshua Jarcia.jpg";
import JuneBMijaresImg from "../AboutTeamImg/June B. Mijares.jpg";
import RozelEnzoHernandezImg from "../AboutTeamImg/Rozel Enzo Hernandez.png";
import RonaldLacumbesJRImg from "../AboutTeamImg/Ronald Lacumbes JR.png";
import LydiaSVillanuevaImg from "../AboutTeamImg/Lydia S. Villanueva.jpg";
import IreneSLinagImg from "../AboutTeamImg/Irene S. Linag.jpg";
import AnataliaSSyImg from "../AboutTeamImg/Anatalia S. Sy.jpg";
import FatimaSVillonesImg from "../AboutTeamImg/Fatima S. Villones.jpg";
import AliceRRamosImg from "../AboutTeamImg/Alice R. Ramos.jpg";
import CristinaBReyesImg from "../AboutTeamImg/Cristina B. Reyes.jpg";
import JennyRoseGatusMarianoImg from "../AboutTeamImg/Jenny Rose Gatus Mariano.jpg";
import OlgaDomingoImg from "../AboutTeamImg/Olga Domingo.jpg";
import LoriedeeDBentulaImg from "../AboutTeamImg/Loriedee D. Bentula.jpg";
import LeahMPanaguitonImg from "../AboutTeamImg/Leah M. Panaguiton.jpg";
import AlexisEnriquezImg from "../AboutTeamImg/Alexis Enriquez.jpg";
import WinSharmCincoImg from "../AboutTeamImg/Win Sharm Cinco.jpg";
import KylieMaeAbegoniaImg from "../AboutTeamImg/Kylie Mae Abegonia.jpg";
import AubreyRoseRicoImg from "../AboutTeamImg/Aubrey Rose Rico.jpg";
import GilIrincoImg from "../AboutTeamImg/Gil Irinco.jpg";
import SafeeyaHamsiraniImg from "../AboutTeamImg/Safeeya Hamsirani.jpg";

const teamMembers = [
  {
    name: "Melanie Viloria-Briones",
    image: MelanieBrionesImg,
    categories: [
      { name: "Founder", positions: ["Founding President"] },
      { name: "Board Of Trustees", positions: ["Chairperson"] },
      {
        name: "Executive Officers",
        positions: ["Chief Operating Officer Bot Chairperson"],
      },
    ],
  },
  {
    name: "Lydia S. Villanueva",
    image: LydiaSVillanuevaImg,
    categories: [
      { name: "Founder", positions: ["Vice President"] },
      { name: "Board Of Trustees", positions: ["Member"] },
      { name: "Executive Officers", positions: ["Vice-President Internal"] },
    ],
  },
  {
    name: "Irene S. Linag",
    image: IreneSLinagImg,

    categories: [{ name: "Founder", positions: ["Secretary"] }],
  },
  {
    name: "Anatalia S. Sy",
    image: AnataliaSSyImg,
    categories: [
      { name: "Founder", positions: ["Treasurer"] },
      { name: "Board Of Trustees", positions: ["Member"] },
      { name: "Executive Officers", positions: ["Treasurer"] },
    ],
  },
  {
    name: "Alexis Enriquez",
    image: AlexisEnriquezImg,
    categories: [{ name: "Founder", positions: ["PRO"] }],
  },
  {
    name: "Fatima S. Villones",
    image: FatimaSVillonesImg,
    categories: [{ name: "Founder", positions: ["Business Manager"] }],
  },
  {
    name: "Richard N. Briones",
    image: RichardNBriones,
    categories: [
      { name: "Board Of Trustees", positions: ["Member"] },
      { name: "Executive Officers", positions: ["President"] },
    ],
  },
  {
    name: "Jonathan Sta. Ana",
    image: JonathanStaAnaImg,
    categories: [
      { name: "Board Of Trustees", positions: ["Corporate Secretary"] },
      { name: "Executive Officers", positions: ["Corporate Secretary"] },
    ],
  },
  {
    name: "Jaypee V. Lagman",
    image: JaypeeVLagmanImg,
    categories: [
      { name: "Board Of Trustees", positions: ["Member"] },
      { name: "Executive Officers", positions: ["Accountant"] },
    ],
  },
  {
    name: "Mark Vincent V. Briones",
    image: MarkVincentVBrionesImg,
    categories: [
      { name: "Board Of Trustees", positions: ["Member"] },
      { name: "Executive Officers", positions: ["Secretariat-Deputy Chief"] },
    ],
  },
  {
    name: "Alice R. Ramos",
    image: AliceRRamosImg,
    categories: [
      { name: "Executive Officers", positions: ["Executive Secretary"] },
    ],
  },
  {
    name: "Cristina B. Reyes",
    image: CristinaBReyesImg,
    categories: [{ name: "Executive Officers", positions: ["VP for Luzon"] }],
  },
  {
    name: "Richy Lloyd M. Tan",
    image: RichyLloydMTanImg,
    categories: [{ name: "Executive Officers", positions: ["VP for Visayas"] }],
  },
  {
    name: "Carlito A. Robin",
    image: CarlitoARobinImg,
    categories: [
      { name: "Executive Officers", positions: ["VP for Mindanao"] },
    ],
  },
  {
    name: "June B. Mijares",
    image: JuneBMijaresImg,
    categories: [
      { name: "Executive Officers", positions: ["VP for Advocacy Affairs"] },
    ],
  },
  {
    name: "Jenny Rose Gatus Mariano",
    image: JennyRoseGatusMarianoImg,
    categories: [{ name: "Executive Officers", positions: ["Auditor"] }],
  },
  {
    name: "Olga Domingo",
    image: OlgaDomingoImg,
    categories: [
      { name: "Executive Officers", positions: ["Representative of Luzon"] },
    ],
  },
  {
    name: "Loriedee D. Bentula",
    image: LoriedeeDBentulaImg,
    categories: [
      { name: "Executive Officers", positions: ["Representative of Visayas"] },
    ],
  },
  {
    name: "Leah M. Panaguiton",
    image: LeahMPanaguitonImg,
    categories: [
      { name: "Executive Officers", positions: ["Representative of Mindanao"] },
    ],
  },
  {
    name: "Arvin B. Casimiro",
    image: ArvinBCasimiroImg,
    categories: [
      { name: "Executive Officers", positions: ["Events and Program Manager"] },
    ],
  },
  {
    name: "Cedric Joshua Jarcia",
    image: CedricJoshuaJarciaImg,
    categories: [
      { name: "Executive Officers", positions: ["Secretariat-Chief"] },
    ],
  },
  {
    name: "Rozel Enzo Hernandez",
    image: RozelEnzoHernandezImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["President"],
      },
    ],
  },
  {
    name: "Win Sharm Cinco",
    image: WinSharmCincoImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Vice President"],
      },
    ],
  },
  {
    name: "Kylie Mae Abegonia",
    image: KylieMaeAbegoniaImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Secretary"],
      },
    ],
  },
  {
    name: "Aubrey Rose Rico",
    image: AubreyRoseRicoImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Luzon Representative"],
      },
    ],
  },
  {
    name: "Gil Irinco",
    image: GilIrincoImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Visayas Representative"],
      },
    ],
  },
  {
    name: "Safeeya Hamsirani",
    image: SafeeyaHamsiraniImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Mindanao Representative"],
      },
    ],
  },
  {
    name: "Ronald Lacumbes JR.",
    image: RonaldLacumbesJRImg,
    categories: [
      {
        name: "National Federation Of Campus Journalists",
        positions: ["Senior High School Representative"],
      },
    ],
  },
];

const removeDuplicateNames = (members) => {
  const seen = new Set();
  return members.filter((member) => {
    if (seen.has(member.name)) {
      return false;
    } else {
      seen.add(member.name);
      return true;
    }
  });
};

const TeamSection = () => {
  const [displayedMembers, setDisplayedMembers] = useState(
    removeDuplicateNames(teamMembers)
  );
  const [currentCategory, setCurrentCategory] = useState("View all");
  const [currentPage, setCurrentPage] = useState(0);
  const [membersPerPage, setMembersPerPage] = useState(8);

  useEffect(() => {
    const updateMembersPerPage = () => {
      if (window.innerWidth >= 1024) {
        setMembersPerPage(8);
      } else if (window.innerWidth >= 768) {
        setMembersPerPage(6);
      } else {
        setMembersPerPage(4);
      }
    };

    updateMembersPerPage();

    window.addEventListener("resize", updateMembersPerPage);

    return () => {
      window.removeEventListener("resize", updateMembersPerPage);
    };
  }, []);

  const filterMembers = (category) => {
    setCurrentCategory(category);
    setCurrentPage(0);
    if (category === "View all") {
      setDisplayedMembers(removeDuplicateNames(teamMembers));
    } else {
      setDisplayedMembers(
        removeDuplicateNames(
          teamMembers.filter((member) =>
            member.categories.some((cat) => cat.name === category)
          )
        )
      );
    }
  };

  const renderButton = (category) => (
    <button
      key={category}
      className={`m-1 px-3 py-2 text-sm rounded-md ${
        currentCategory === category
          ? "bg-red-500 text-white"
          : "bg-gray-200  hover:text-white hover:bg-customRedHover rounded text-lg transform transition-all duration-[300ms] ease-in delay-[100ms]"
      }`}
      onClick={() => filterMembers(category)}
    >
      {category}
    </button>
  );

  const currentMembers = displayedMembers.slice(
    currentPage * membersPerPage,
    (currentPage + 1) * membersPerPage
  );

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <section className="py-24 my-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-700 tracking-wide uppercase">
            Meet our team
          </h2>
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl py-8">
            Meet Our Diverse Team
          </p>
          <div className="flex justify-center mt-2">
            <div className="bg-white flex-wrap rounded-md">
              {renderButton("View all")}
              {renderButton("Founder")}
              {renderButton("Board Of Trustees")}
              {renderButton("Executive Officers")}
              {renderButton("National Federation Of Campus Journalists")}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {currentMembers.map((member) => (
              <div
                key={member.name}
                className="text-center py-4 rounded-md transition-all duration-300 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:-translate-y-1"
              >
                <img
                  className="mx-auto h-64 w-64 rounded-lg xl:w-56 xl:h-56"
                  src={member.image}
                  alt={member.name}
                />
                <div className="mt-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {member.name}
                  </h3>
                  {currentCategory !== "View all" &&
                    member.categories
                      .filter((cat) =>
                        currentCategory === "View all"
                          ? true
                          : cat.name === currentCategory
                      )
                      .map((cat, idx) => (
                        <p key={idx} className="text-red-600">
                          {cat.positions.join(", ")}
                        </p>
                      ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button
              className={`px-4 py-2 text-sm font-medium rounded-sm mx-2 transform transition-all duration-[300ms] ease-in delay-[100ms] ${
                currentPage === 0
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-gray-200 hover:text-white hover:bg-customRedHover"
              }`}
              onClick={handlePrevPage}
              disabled={currentPage === 0}
            >
              Prev
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium rounded-sm mx-2 transform transition-all duration-[300ms] ease-in delay-[100ms] ${
                (currentPage + 1) * membersPerPage >= displayedMembers.length
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-customRed text-white hover:bg-customRedHover"
              }`}
              onClick={handleNextPage}
              disabled={
                (currentPage + 1) * membersPerPage >= displayedMembers.length
              }
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
