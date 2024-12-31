import React from "react";

const HowItWorksSection = () => {
  const steps = [
    {
      id: 1,
      title: "Sign Up",
      description: "Create an account to get started and unlock all features.",
    },
    {
      id: 2,
      title: "Explore Services",
      description:
        "Browse through our projects and select one that suits your needs.",
    },
    {
      id: 3,
      title: "Enjoy Benefits",
      description:
        "Leverage our tools and services to achieve your goals seamlessly.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10">
          How It Works
        </h2>
        <div className="relative border-l-4 border-secondary pl-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="mb-8 flex items-start last:mb-0 group"
            >
              {/* Step Indicator */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-background font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transform transition duration-300">
                {step.id}
              </div>
              {/* Step Details */}
              <div className="ml-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition duration-300">
                  {step.title}
                </h3>
                <p className="text-lg  group-hover:text-primary transition duration-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
