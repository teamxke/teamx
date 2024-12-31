import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-16 bg-background"
    >
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center mb-8">About Team X</h2>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed text-justify">
            <strong>Team X</strong> is a unique software solutions startup that
            excels in delivering innovative, high-quality software products
            while simultaneously fostering the next generation of technology
            professionals. We specialize in crafting custom software solutions
            that cater to a diverse range of client needs.
          </p>
          <p className="text-lg leading-relaxed text-justify">
            Alongside our professional services, we are deeply committed to
            mentoring students, integrating them into real-world projects to
            provide valuable hands-on experience. Our approach combines the
            dynamism of fresh talent with the wisdom of industry veterans,
            ensuring that we remain at the forefront of technological
            advancements while contributing significantly to the tech community.
          </p>
          <blockquote className="text-black dark:text-white border-l-4 border-primary pl-4 italic text-lg text-secondary">
            &quot;By Students, for Students.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
