import React, { useState } from "react";

const teamMembers = [
  {
    name: "Emmy Rosum",
    position: "Co-Founder and CEO",
    image: "path/to/image1.jpg",
    category: "Founder",
  },
  {
    name: "Orlando Diggs",
    position: "Co-Founder and COO",
    image: "path/to/image2.jpg",
    category: "Founder",
  },
  {
    name: "Sophie Chamberlain",
    position: "Head of Sales",
    image: "path/to/image3.jpg",
    category: "Executive Officers",
  },
  {
    name: "Lana Steiner",
    position: "VP of Customer Success",
    image: "path/to/image4.jpg",
    category: "Executive Officers",
  },
  {
    name: "Emily Donnavan",
    position: "Product Lead",
    image: "path/to/image5.jpg",
    category: "Executive Officers",
  },
  {
    name: "Sasha Kindred",
    position: "VP of Marketing",
    image: "path/to/image6.jpg",
    category: "Executive Officers",
  },
  {
    name: "Jessica Dobrev",
    position: "Backend Lead",
    image: "path/to/image7.jpg",
    category: "Executive Officers",
  },
  {
    name: "Drew Cano",
    position: "Head of UX",
    image: "path/to/image8.jpg",
    category: "Executive Officers",
  },
  {
    name: "John Doe",
    position: "Developer",
    image: "path/to/image9.jpg",
    category: "Executive Officers",
  },
  {
    name: "Jane Smith",
    position: "Designer",
    image: "path/to/image10.jpg",
    category: "Executive Officers",
  },
];

const TeamSection = () => {
  const [displayedMembers, setDisplayedMembers] = useState(teamMembers);
  const [currentCategory, setCurrentCategory] = useState("View all");
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 8;

  const filterMembers = (category) => {
    setCurrentCategory(category);
    setCurrentPage(0); // Reset to the first page
    if (category === "View all") {
      setDisplayedMembers(teamMembers);
    } else {
      setDisplayedMembers(
        teamMembers.filter((member) => member.category === category)
      );
    }
  };

  const renderButton = (category) => (
    <button
      className={`m-1 px-3 py-2 text-sm rounded-md ${
        currentCategory === category ? "bg-red-500 text-white" : "bg-gray-200"
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
    <section className="py-12 my-4 bg-white">
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
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentMembers.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                  src={member.image}
                  alt={member.name}
                />
                <div className="mt-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-red-600">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
          {currentCategory === "View all" && (
            <div className="flex justify-center mt-4">
              <button
                className="px-4 py-2 text-sm bg-gray-200 rounded-md mx-2"
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                Prev
              </button>
              <button
                className="px-4 py-2 text-sm bg-gray-200 rounded-md mx-2"
                onClick={handleNextPage}
                disabled={
                  (currentPage + 1) * membersPerPage >= displayedMembers.length
                }
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
