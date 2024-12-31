import React from "react";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-background py-16"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-3xl font-semibold text-center mb-8">
          Get in Touch
        </h2>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Details */}
            <div>
              <h3 className="text-xl font-bold mb-4">Our Details</h3>
              <ul className="space-y-3">
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="http://teamx.co.ke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-secondary transition-all"
                  >
                    http://teamx.co.ke
                  </a>
                </li>
                <li>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:mail@teamx.co.ke"
                    className="underline hover:text-secondary transition-all"
                  >
                    mail@teamx.co.ke
                  </a>
                </li>
                <li>
                  <strong>Location:</strong> Kenya
                </li>
                <li>
                  <strong>Followers:</strong> 7
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <ul className="flex space-x-6 justify-center md:justify-start">
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:scale-110 transition-transform"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 md:p-8 bg-secondary rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-center md:text-left">
              Send Us a Message
            </h3>
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-secondary outline-none"
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white py-3 font-semibold rounded-md shadow focus:outline-none bg-primary transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
