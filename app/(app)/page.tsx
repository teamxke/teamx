import AppBar from "@/components/widgets/AppBar";
import Footer from "@/components/widgets/Footer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Welcome",
};

const App = () => {
  return (
    <>
      {/* About Us Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          About Team X
        </h2>
        <p className="text-center text-lg max-w-2xl mx-auto">
          At Team X, our mission is to develop cutting-edge software solutions
          that make life easier and businesses more efficient. Based in Kenya,
          we take pride in building impactful projects like{" "}
          <strong>Dishi-Fiti</strong> and <strong>Lipa-Kodi</strong>, designed
          to solve real-world problems.
        </p>
      </section>

      {/* Projects Section */}
      <section className="bg-secondary py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Current Projects
          </h2>

          {/* Dishi-Fiti Project */}
          <div className="bg-background rounded-sm shadow-md p-6 mb-6">
            <h3 className="text-xl font-bold">Dishi-Fiti</h3>
            <p className=" mt-2">
              <strong>Due Date:</strong> November 30, 2023
            </p>
            <p className=" mt-2">
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
            <p className=" mt-2">
              A revolutionary project to simplify rent payments and improve
              landlord-tenant relationships. (Details coming soon!)
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Get in Touch
        </h2>

        <div className="text-center">
          <p>
            <strong>Website:</strong>{" "}
            <a href="http://teamx.co.ke" className=" underline">
              http://teamx.co.ke
            </a>
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mail@teamx.co.ke"
              className="underline"
            >
              mail@teamx.co.ke
            </a>
          </p>
          <p>
            <strong>Location:</strong> Kenya
          </p>
          <p>
            <strong>Followers:</strong> 7
          </p>
        </div>
      </section>
    </>
  );
};

export default App;
