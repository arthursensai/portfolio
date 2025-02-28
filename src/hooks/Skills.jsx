const Skills = () => {
  return (
      <section id="skills" className="section skills-section">
    <div className="container">
      <h2 className="section-title skills-title">Skills & Expertise</h2>
      <div className="skills-container">
        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">⚛️</div>
            <div className="skill-title">Frontend Development</div>
          </div>
          <ul className="skill-list">
            <li className="skill-item">
              <span className="skill-name">React.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">Tailwind CSS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">JavaScript</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "95%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">HTML/CSS</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">UI/UX Design</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">🖥️</div>
            <div className="skill-title">Backend Development</div>
          </div>
          <ul className="skill-list">
            <li className="skill-item">
              <span className="skill-name">Express.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">Firebase</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "90%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">Node.js</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">RESTful APIs</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "88%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">MongoDB</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "82%" }}></div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="skill-category">
          <div className="skill-header">
            <div className="skill-icon">🔧</div>
            <div className="skill-title">Tools & Technologies</div>
          </div>
          <ul className="skill-list">
            <li className="skill-item">
              <span className="skill-name">Git & GitHub</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "92%" }}></div>
              </div>
            </li>
            {/*<li className="skill-item">
              <span className="skill-name">Webpack</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "85%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">Jest</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "80%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">CI/CD</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "78%" }}></div>
              </div>
            </li>
            <li className="skill-item">
              <span className="skill-name">Docker</span>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: "75%" }}></div>
              </div>
            </li>*/}
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills;