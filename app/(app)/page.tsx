import { Metadata } from "next";
import React from "react";
import ProjectsSection from "./sections/Projects";
import ContactSection from "./sections/Contact";
import AboutSection from "./sections/About";
import HeroSection from "./sections/Hero";
import HowItWorksSection from "./sections/HIW";
import ServicesSection from "./sections/Services";
import AwardsSection from "./sections/Awards";

export const metadata: Metadata = {
  title: "Welcome",
};

const App = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <AboutSection />
      <AwardsSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default App;
