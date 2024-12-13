import React from "react";

const HowItWorksSection = () => {
  return (
    <section id='how-it-works' className="py-16 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Step 1</h3>
            <p className="text-lg">Sign up for an account to get started.</p>
          </div>
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Step 2</h3>
            <p className="text-lg">Choose a service or project that fits your needs.</p>
          </div>
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Step 3</h3>
            <p className="text-lg">Start using our tools and enjoy the benefits.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
