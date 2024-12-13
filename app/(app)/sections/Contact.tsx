import React from "react";

const ContactSection = () => {
  return (
    <section id='contact' className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Get in Touch</h2>

      <div className="text-center">
        <p>
          <strong>Website:</strong>{" "}
          <a href="http://teamx.co.ke" className="underline">
            http://teamx.co.ke
          </a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:mail@teamx.co.ke" className="underline">
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
  );
};

export default ContactSection;
