import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/notFound.png"; // Replace with your image path

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-32 bg-gray-100">
      <img
        src={notFoundImage}
        alt="Not Found"
        className="w-1/2 max-w-md mb-8"
      />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">
        The site you are looking for is not found.
      </h1>
      <Link to={"/"}>
        <button className="px-4 py-2 bg-customRed text-white rounded hover:bg-customRedHover transition-colors">
          Go to Homepage
        </button>
      </Link>
      ;
    </div>
  );
};

export default NotFound;
