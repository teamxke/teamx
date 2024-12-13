import React from "react";

export const Footer = () => (
  <footer className="bg-secondary py-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            At Team X, we develop innovative software solutions to make life
            easier for businesses and individuals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-sm hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="text-sm hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#services" className="text-sm hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-sm hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:mail@teamx.co.ke"
              className="text-sm hover:underline"
            >
              mail@teamx.co.ke
            </a>
          </p>
          <p className="text-sm">
            <strong>Location:</strong> Kenya
          </p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com/teamx"
              className="text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/teamx"
              className="text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/teamx"
              className="text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 text-center">
        <p className="text-sm">&copy; 2024 Team X. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
