import React from "react";

const ProjectsSection = () => {
  return (
    <section className="bg-secondary py-10">
      <div className="container flex flex-col mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Current Projects
        </h2>
        <div className="grid md:grid-cols-2 pt-5 gap-6">
          {/* Dishi-Fiti Project */}
          <div className="bg-background rounded-sm shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold">Dishi-Fiti</h3>
            <p className="mt-2">
              <strong>Due Date:</strong> November 30, 2023
            </p>
            <p className="mt-2">
              Dishi-Fiti is an app that rewards users with loyalty points when
              they dine at partner restaurants. These points can be redeemed for
              food, discounts, or even credit in the app. Our goal is to create
              a seamless experience for users while driving business for partner
              restaurants.
            </p>
          </div>

          {/* Lipa-Kodi Project */}
          <div className="bg-background rounded-sm shadow-md p-6">
            <h3 className="text-xl font-bold">Lipa-Kodi</h3>
            <p className="mt-2">
              A revolutionary project to simplify rent payments and improve
              landlord-tenant relationships. (Details coming soon!)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
