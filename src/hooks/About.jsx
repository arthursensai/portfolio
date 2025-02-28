const About = () => {
  return (
      <section id="about" className="section">
          <div className="container">
              <h2 className="section-title">About Me</h2>
              <div className="about-container">
                  {/* صورة توضيحية بدل البروفايل */}
                  <div className="about-image">
                    <img 
                      className="profile-img" 
                      src="/assets/profileImage.svg"
                      alt="Developer Profile Illustration" 
                    />
                      <div className="profile-bg"></div>
                  </div>

                  {/* المحتوى */}
                  <div className="about-content">
                      <p>
                          Hi, I'm Mohamed! A passionate full-stack developer with a deep interest in building intelligent 
                          and interactive applications. My expertise lies in crafting efficient front-end experiences 
                          using <strong>React</strong> and <strong>Tailwind CSS</strong>, while ensuring a strong 
                          and scalable backend with <strong>Firebase</strong> and <strong>Express.js</strong>.
                      </p>
                      <p>
                          I love solving complex problems, optimizing user experience, and exploring the endless 
                          possibilities of technology. My projects often integrate <strong>AI</strong> to create 
                          smarter, more adaptive systems.
                      </p>
                      <p>
                          Beyond coding, I'm fascinated by <strong>philosophy</strong>, strategic games like 
                          <strong> chess</strong>, and the art of <strong>creative problem-solving</strong>.
                      </p>
                      
                      {/* قائمة الاهتمامات */}
                      <div className="interests">
                          <div className="interest-item">
                              <div className="interest-icon">♟</div>
                              <div className="interest-title">Chess</div>
                              <p>Strategic thinking & problem-solving</p>
                          </div>
                          <div className="interest-item">
                              <div className="interest-icon">🤖</div>
                              <div className="interest-title">AI & Automation</div>
                              <p>Building smart and adaptive applications</p>
                          </div>
                          <div className="interest-item">
                              <div className="interest-icon">φ</div>
                              <div className="interest-title">Philosophy</div>
                              <p>Exploring deep ideas & concepts</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  );
}

export default About;
