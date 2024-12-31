import React from "react";

const HeroSection = () => {
  return (
    <section id='home' className="h-[95dvh] max-h-[900px] flex items-center justify-center py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-7xl font-bold mb-4">
          Team<span className="text-primary">X</span>
        </h1>
        <p className="text-2xl max-w-3xl mx-auto text-center mb-6">
        Innovating Solutions, Cultivating Talent
        </p>
        <a
          href="#"
          className="bg-primary text-white py-2 px-6 rounded-lg hover:bg-secondary-dark transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
