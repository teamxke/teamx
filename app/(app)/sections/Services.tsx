import React from "react";
import { Code, Cloud, Compass } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Innovative Software Solutions",
    description:
      "We offer innovative software solutions to streamline your business processes.",
    icon: <Code className="h-10 w-10 text-primary" />,
  },
  {
    id: 2,
    title: "Cloud-Based Tools",
    description:
      "Our cloud-based tools ensure you stay connected and productive anywhere.",
    icon: <Cloud className="h-10 w-10 text-primary" />,
  },
  {
    id: 3,
    title: "Expert Consultation",
    description:
      "Expert consultation to help you navigate the evolving tech landscape.",
    icon: <Compass className="h-10 w-10 text-primary" />,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-16"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Our Services</h2>
        <p className="text-lg  mb-12">
          Empowering businesses with cutting-edge solutions tailored to your
          needs.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-secondary shadow-lg p-8 rounded-md transform hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 ">{service.title}</h3>
              <p className="">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
