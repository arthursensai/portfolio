import React, { useState } from 'react';
import { ArrowUpRight, Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-blue-600" />,
      description: "Creating responsive, intuitive user interfaces with modern frameworks and design principles.",
      skills: [
        { name: "React.js", proficiency: 80 },
        { name: "Tailwind CSS", proficiency: 90 },
        { name: "JavaScript", proficiency: 95 },
        { name: "HTML/CSS", proficiency: 95 },
        { name: "UI/UX Design", proficiency: 80 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Database className="text-indigo-600" />,
      description: "Building robust, scalable server-side applications and APIs to power web experiences.",
      skills: [
        { name: "Express.js", proficiency: 90 },
        { name: "Firebase", proficiency: 80 },
        { name: "Node.js", proficiency: 90 },
        { name: "RESTful APIs", proficiency: 88 },
        { name: "MongoDB", proficiency: 82 },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="text-green-600" />,
      description: "Leveraging industry-standard tools and practices for efficient development workflows.",
      skills: [
        { name: "Git & GitHub", proficiency: 92 },
      ]
    }
  ];

  // Function to determine proficiency level text
  const getProficiencyLevel = (value) => {
    if (value >= 90) return "Expert";
    if (value >= 80) return "Advanced";
    if (value >= 70) return "Proficient";
    if (value >= 60) return "Intermediate";
    return "Beginner";
  };

  // Function to determine proficiency color
  const getProficiencyColor = (value) => {
    if (value >= 90) return "bg-blue-600";
    if (value >= 80) return "bg-indigo-500";
    if (value >= 70) return "bg-purple-500";
    if (value >= 60) return "bg-teal-500";
    return "bg-gray-500";
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical capabilities and proficiency levels across various domains of web development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-xl shadow-lg p-6 border-b-4 ${
                index === 0 ? 'border-blue-500' : index === 1 ? 'border-indigo-500' : 'border-green-500'
              } transform transition-all duration-300 hover:shadow-xl ${
                activeCategory === index ? 'ring-2 ring-offset-2 ring-blue-300' : ''
              }`}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-lg bg-gray-50 mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{category.title}</h3>
                </div>
                <ArrowUpRight className="text-gray-400" size={18} />
              </div>
              
              <p className="text-gray-600 mb-6">{category.description}</p>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <div className="flex items-center">
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
                          skill.proficiency >= 85 ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {getProficiencyLevel(skill.proficiency)}
                        </span>
                        <span className="text-gray-500 ml-2">{skill.proficiency}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                        style={{ 
                          width: `${skill.proficiency}%`,
                          transition: 'width 1s ease-out',
                          transform: `scaleX(${activeCategory === index ? 1 : 0})`,
                          transformOrigin: 'left',
                          transitionProperty: 'transform',
                          transitionDuration: '0.6s',
                          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            <span className="inline-flex items-center bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-sm font-medium mr-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>90-100%: Expert
            </span>
            <span className="inline-flex items-center bg-indigo-50 px-3 py-1 rounded-full text-indigo-700 text-sm font-medium mr-2">
              <span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>80-89%: Advanced
            </span>
            <span className="inline-flex items-center bg-purple-50 px-3 py-1 rounded-full text-purple-700 text-sm font-medium">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>70-79%: Proficient
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;