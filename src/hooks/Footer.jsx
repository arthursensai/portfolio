import React from "react";
import { Github, Linkedin, Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social media links data
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-ait-sidi-bah/",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/arthursensai",
      icon: <Github size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/sensai_arthur",
      icon: <Instagram size={20} />,
    },
    {
      name: "Email",
      url: "mailto:mohamedaytsidibah@gmail.com",
      icon: <Mail size={20} />,
    },
  ];

  // Navigation section data
  const footerNavLinks = [
    { name: "Home", url: "#home" },
    { name: "Projects", url: "#projects" },
    { name: "About", url: "#about" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and nav links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-800">
          {/* Logo and tagline */}
          <div className="flex flex-col space-y-4">
            <div className="font-bold text-2xl">
              M<span className="text-blue-500">.</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {footerNavLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <p className="text-gray-400">mohamedaytsidibah@gmail.com</p>
            <p className="text-gray-400">Fes, Morocco</p>
          </div>
        </div>

        {/* Bottom section with copyright and social links */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-1">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mohamed. Made with
            </p>
            <Heart size={14} className="text-red-500" />
            <p className="text-gray-400 text-sm">All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 rounded-full hover:bg-gray-800"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
