import React from "react";
import Logo from "/public/SpamLogo.png";

function Blog() {
  return (
    <div className=" bg-gray-100">
      <div className="mx-auto max-w-7xl min-h-screen bg-gray-100 py-24 px-4 s:py-12 ssm:py-12 sm:py-12 ">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 md:gap-0 lg:gap-6">
          {/* Main Article */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={Logo}
                alt="Author"
                className="w-10 h-10 rounded-full mr-4"
              />
              <div>
                <h4 className="font-medium text-gray-800">SPAM</h4>
                <span className="text-sm text-gray-500">Author</span>
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Men's Basketball Semifinals Preview And Schedule
            </h1>
            <div className="text-gray-500 text-sm mb-6">
              <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
                Olympics
              </span>
              <span> | 6 minute read</span>
            </div>
            <img
              src="https://res.cloudinary.com/dmmdualpi/image/upload/v1735918070/cld-sample-3.jpg"
              alt="Basketball"
              className="rounded-lg w-full mb-6"
            />
          </div>

          {/* Related Articles */}
          <div className="space-y-6 md:pt-4">
            {[
              {
                title:
                  "Boom, Snoop Dogg: Breaking Electrifies Paris 2024 Olympics",
                time: "4 min read",
                category: "Food",
                img: "https://res.cloudinary.com/dmmdualpi/image/upload/v1735918068/samples/breakfast.jpg",
              },
              {
                title: "Carlos Nasar wins 89kg gold and breaks World Record",
                time: "6 min read",
                category: "Olympics",
                img: "https://res.cloudinary.com/dmmdualpi/image/upload/v1735918068/samples/smile.jpg",
              },
              {
                title:
                  "The People's Republic of China reigns supreme in men's team",
                time: "2 min read",
                category: "Desert",
                img: "https://res.cloudinary.com/dmmdualpi/image/upload/v1735918063/samples/landscapes/landscape-panorama.jpg",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="flex items-center bg-white shadow rounded-lg p-4"
              >
                <img
                  src={article.img}
                  alt={article.title}
                  className="w-24 h-24 rounded-lg object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-gray-800">{article.title}</h4>
                  <div className="text-sm text-gray-500 mt-2">
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded mr-2">
                      {article.category}
                    </span>
                    <span>{article.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
