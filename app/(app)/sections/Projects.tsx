const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Dishi-Fiti",
      description:
        "Dishi-Fiti is an app that rewards users with loyalty points when they dine at partner restaurants. These points can be redeemed for food, discounts, or even credit in the app. Our goal is to create a seamless experience for users while driving business for partner restaurants.",
      link: "#", // Replace with actual live link when available
    },
    {
      id: 2,
      title: "Lipa-Kodi",
      description:
        "A revolutionary project to simplify rent payments and improve landlord-tenant relationships. (Details coming soon!)",
      link: "#", // Replace with actual live link when available
    },
    {
      id: 3,
      title: "Locale Connect",
      partnership: "Nation Media",
      description:
        "Locale Connect is a platform that delivers hyper-local news, personalized content, and geo-targeted advertising to keep users informed about their communities. By leveraging AI and geolocation technologies, it provides city, county, and neighborhood-level updates tailored to users' locations and interests. Additionally, it offers geo-targeted ads to help local businesses reach relevant audiences.",
      link: "https://lionfish-app-n7aq6.ondigitalocean.app/",
    },
    {
      id: 4,
      title: "Support Sync",
      partnership: "Innovate One & The Garage, Microsoft",
      description:
        "Support Sync is a platform designed to empower individuals with disabilities by providing tools for better communication, emergency services, and access to expert advice. Its features include interactive chat, USSD emergency services, text-to-video translation, location tracking, and AI-based advice, all aimed at ensuring users stay connected and safe.",
      link: "https://supportsync.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-secondary py-10"
    >
      <div className="container flex flex-col mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Current Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 pt-5 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-background rounded-sm shadow-md p-6 hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.partnership && (
                <p className="mt-2">
                  <strong>Partnership:</strong> {project.partnership}
                </p>
              )}
              <p className="mt-2">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-primary underline hover:text-primary-dark transition-colors"
                >
                  Learn more
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
