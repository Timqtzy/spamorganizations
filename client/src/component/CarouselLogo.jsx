import React from "react";
import Marquee from "react-fast-marquee";
import logo1 from "../images/image1.png";
import logo2 from "../images/image2.png";
import logo3 from "../images/image3.png";
import logo4 from "../images/image4.png";

const CarouselLogo = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      <Marquee speed={50} gradient={false}>
        <div className="flex justify-around w-full">
          <img
            src={logo1}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo2}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo3}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo4}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo1}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo2}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo3}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
          <img
            src={logo4}
            alt="logo"
            className="h-24 mx-4 sm:mx-8 md:mx-12 lg:mx-32"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default CarouselLogo;
