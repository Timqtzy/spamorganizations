import React from "react";
import Marquee from "react-fast-marquee";
import image1 from "../AboutImages/img1.jpg";
import image2 from "../AboutImages/img2.jpg";
import image3 from "../AboutImages/img3.jpg";
import image4 from "../AboutImages/img4.jpg";
import image5 from "../AboutImages/img5.jpg";

const images = [
  { src: image1, alt: "Image 1" },
  { src: image2, alt: "Image 2" },
  { src: image3, alt: "Image 3" },
  { src: image4, alt: "Image 4" },
  { src: image5, alt: "Image 5" },
];

const CommunitySection = () => {
  return (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-base font-semibold text-red-400 tracking-wide uppercase">
            Join a community
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Join our Community
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 md:mx-auto lg:mx-auto">
            Championing Accountability Campus Journalism for a Positive
            Societal Impact through expanding and Venturing the Digital Horizon
          </p>
        </div>
        <div className="relative overflow-hidden py-32">
          <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
          <Marquee speed={50} gradient={false}>
            {images.map((image, index) => (
              <img
                key={index}
                className="h-48 w-96 rounded-sm object-cover mr-6"
                src={image.src}
                alt={image.alt}
              />
            ))}
            {images.map((image, index) => (
              <img
                key={index + images.length}
                className="h-48 w-96 rounded-sm object-cover mr-6"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
