import React from "react";
import CommunitySection from "../component/CommunitySection";
import TeamSection from "../component/TeamSectionsAbout";

function About() {
  return (
    <div>
      <CommunitySection />
      <TeamSection />
      <div>
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  VISION
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Our Vision
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  An organization which is respected nationally and
                  internationally as a professionally-oriented movement that
                  excels in research, trainings and in responsible, ethical and
                  revolutionary media practice.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row">
              <div className="flex-1 lg:w-1/3 mb-6 lg:mb-0">
                <h3 className="text-sm font-medium text-gray-500 uppercase">
                  MISSION
                </h3>
                <h2 className="text-3xl font-extrabold text-gray-900 mt-2">
                  Our Mission
                </h2>
              </div>
              <div className="flex-1 lg:w-2/3">
                <p className="text-lg text-gray-500">
                  Prepares 21st Century education and media leaders to thrive in
                  an increasingly complex world and to contribute to the
                  betterment of the environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
