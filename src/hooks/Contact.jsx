import React, { useState } from "react";
import {
  Send,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Github,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [activeCard, setActiveCard] = useState(null);

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/arthursensai', 
      icon: Github,
      color: 'hover:text-gray-900'
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/mohamed-aytsidibah-7268b02a8/', // Fixed the URL
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate email sending for demo
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully! I will get back to you soon.",
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again or contact me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfoCards = [
    {
      title: "Email",
      value: "mohamedaytsidibah@gmail.com",
      icon: <Mail className="text-blue-600" />,
      link: "mailto:mohamedaytsidibah@gmail.com",
      borderColor: "border-blue-500",
    },
    {
      title: "Location",
      value: "Based in Morocco",
      icon: <MapPin className="text-indigo-600" />,
      link: null,
      borderColor: "border-indigo-500",
    },
    {
      title: "Response Time",
      value: "Within 24 hours",
      icon: <Clock className="text-green-600" />,
      link: null,
      borderColor: "border-green-500",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-10">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            {contactInfoCards.map((card, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-6 border-b-4 ${
                  card.borderColor
                } transform transition-all duration-300 hover:shadow-xl ${
                  activeCard === `card-${index}`
                    ? "ring-2 ring-offset-2 ring-blue-300"
                    : ""
                }`}
                onMouseEnter={() => setActiveCard(`card-${index}`)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start">
                    <div className="p-3 rounded-lg bg-gray-50 mr-4">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        {card.title}
                      </h3>
                      <p className="text-gray-600 mt-1">{card.value}</p>
                    </div>
                  </div>
                  {card.link && (
                    <a
                      href={card.link}
                      className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`Contact via ${card.title}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 bg-white rounded-xl shadow-lg p-8 border-b-4 border-blue-500 transform transition-all duration-300 hover:shadow-xl ${
              activeCard === "form" ? "ring-2 ring-offset-2 ring-blue-300" : ""
            }`}
            onMouseEnter={() => setActiveCard("form")}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-lg bg-gray-50 mr-4">
                <MessageSquare className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Send a Message
              </h3>
            </div>

            {status.submitted && (
              <div
                className={`p-4 mb-6 rounded-lg ${
                  status.success
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  placeholder="What's this about?"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 h-36"
                  placeholder="Tell me about your project, idea, or question"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition duration-300 flex items-center group disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send
                    size={16}
                    className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center border-t border-gray-200 pt-10">
          <h3 className="text-lg font-bold text-gray-800 mb-6">
            Connect With Me
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center p-3 rounded-lg hover:bg-gray-100 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-md
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <IconComponent
                    size={24}
                    className={`mb-2 text-gray-600 ${social.color} transition-colors duration-300`}
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;