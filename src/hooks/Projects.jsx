const Projects = () => {
  return (
      <section id="projects" className="section">
          <div className="container">
              <h2 className="section-title">Featured Projects</h2>
              <div className="projects-grid">
                  {[
                      {
                          title: "Dakerati",
                          desc: "An interactive quiz application designed to test and enhance Quran memorization skills. Features different difficulty levels, tracking progress, and personalized learning paths.",
                          tags: ["React", "Firebase", "MongoDB", "Tailwind CSS"],
                          bg: "linear-gradient(135deg, #3182ce, #38a169)",
                          demoUrl: "https://dakerati.vercel.app/",
                          githubUrl: "https://github.com/arthursensai/dakerati"
                      },
                      {
                          title: "ClipNote",
                          desc: "An intelligent text summarization tool that leverages AI to condense long articles and documents while preserving key information and context.",
                          tags: ["Node.js", "Express", "React", "Tailwind CSS", "Hugging Face API"],
                          bg: "linear-gradient(135deg, #6b46c1, #4299e1)",
                          demoUrl: "https://clipnote-frontend.onrender.com/",
                          githubUrl: "https://github.com/arthursensai/ClipNote"
                      }
                  ].map((project, index) => (
                      <div key={index} className="project-card">
                          <div className="project-image" style={{ background: project.bg }}>
                              <div className="project-overlay">
                                  <div className="project-btns">
                                      <a href={project.demoUrl} className="project-btn">View Demo</a>
                                      <a href={project.githubUrl} className="project-btn">GitHub</a>
                                  </div>
                              </div>
                          </div>
                          <div className="project-content">
                              <h3 className="project-title">{project.title}</h3>
                              <p className="project-desc">{project.desc}</p>
                              <div className="project-tags">
                                  {project.tags.map((tag, i) => (
                                      <span key={i} className="project-tag">{tag}</span>
                                  ))}
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  );
}

export default Projects;