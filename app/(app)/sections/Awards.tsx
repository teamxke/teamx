import React from "react";
import { Trophy, Star } from "lucide-react"; // Importing icons from Lucide React

const AwardsSection = () => {
  const awards = [
    {
      position: "Second Runners Up",
      title: "Africa'sTalking Edutech Solutions 2023",
    },
    {
      position: "Winners",
      title: "Diabetes Hackathon by AfricanStemGirl and Africa'sTalking",
    },
    {
      position: "Third Runners Up",
      title:
        "Hack4PWD Microsoft Students Learn Hackathon with TechnoBrain and Innovate One",
    },
    {
      position: "Winners",
      title: "Nation Media Group Hackathon with Strathmore's iLabAfrica",
    },
  ];

  return (
    <section
      id="awards"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-10 ">
          Our Achievements
        </h2>

        {/* Awards List */}
        <div className="space-y-10">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center space-x-6 bg-secondary/10 rounded-lg p-6 shadow-lg"
            >
              {/* Award Icon */}
              <div className="flex-shrink-0">
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-md">
                  <Trophy className="text-white w-8 h-8" />
                </div>
              </div>

              {/* Award Details */}
              <div className="t">
                <h3 className="text-2xl font-semibold">{award.position}</h3>
                <p className="text-lg">{award.title}</p>
              </div>

              {/* Star Decoration */}
              <div className="ml-auto hidden md:block">
                <Star className="text-primary w-10 h-10 animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
