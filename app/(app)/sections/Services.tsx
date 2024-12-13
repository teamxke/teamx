import React from "react";

const ServicesSection = () => {
  return (
    <section id='services' className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Service 1</h3>
            <p className="text-lg">We offer innovative software solutions to streamline your business processes.</p>
          </div>
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Service 2</h3>
            <p className="text-lg">Our cloud-based tools ensure you stay connected and productive anywhere.</p>
          </div>
          <div className="bg-secondary shadow-md p-6 rounded-sm">
            <h3 className="text-xl font-bold mb-4">Service 3</h3>
            <p className="text-lg">Expert consultation to help you navigate the evolving tech landscape.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
