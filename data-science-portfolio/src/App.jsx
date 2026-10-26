import React from "react";
import "./App.css";

function App() {
  const skills = [
    "Python",
    "SQL",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Seaborn",
    "Scikit-learn",
    "Machine Learning",
    "Power BI",
    "Tableau",
    "Excel",
    "Git & GitHub",
  ];

  const projects = [
    {
      number: "01",
      category: "ARTIFICIAL INTELLIGENCE",
      title: "Auto Analyst",
      description:
        "An AI-powered data analysis system designed to automate data exploration, generate visualizations, and discover insights from datasets.",
      technologies: ["Python", "Pandas", "AI Agents"],
      github: "https://github.com/",
    },
    {
      number: "02",
      category: "MACHINE LEARNING",
      title: "ML Prediction System",
      description:
        "A machine learning project that processes data, trains predictive models, and evaluates their performance using appropriate metrics.",
      technologies: ["Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/",
    },
    {
      number: "03",
      category: "DATA ANALYTICS",
      title: "Energy Demand Forecasting",
      description:
        "An analysis of historical electricity demand using time-series forecasting to understand trends and estimate future demand.",
      technologies: ["Python", "Forecasting", "Matplotlib"],
      github: "https://github.com/",
    },
    {
      number: "04",
      category: "BUSINESS INTELLIGENCE",
      title: "Interactive BI Dashboard",
      description:
        "An interactive dashboard that presents key performance indicators, trends, and useful insights from structured datasets.",
      technologies: ["Power BI", "Excel", "Data Visualization"],
      github: "https://github.com/",
    },
  ];

  const experiences = [
    {
      role: "Data Science Engineer",
      company: "Ethqan Technologies",
      period: "February 2026 – Present",
      description:
        "Add your actual responsibilities, technical work, training activities, and projects here.",
    },
  ];

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          K<span>.</span>AS
        </a>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className="nav-contact">
            Contact ↗
          </a>
        </nav>
      </header>

      {/* HERO SECTION */}
      <main>
        <section id="home" className="hero section-container">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot"></span>
              DATA SCIENCE & AI
            </div>

            <p className="hero-greeting">Hello, I'm</p>

            <h1>
              Kalidas <span>A S.</span>
            </h1>

            <h2>
              Turning data into <span>insights.</span>
            </h2>

            <p className="hero-description">
              I'm a Data Science Engineer interested in data analytics,
              machine learning, and AI-powered solutions. I enjoy exploring
              data, solving problems, and building useful applications.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="button button-primary">
                Explore My Work ↗
              </a>

              <a href="#contact" className="button button-secondary">
                Get In Touch
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/kalidas-a-s-3baa36348/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-card">
              <div className="profile-card-top">
                <span>MY FOCUS</span>
                <span className="card-indicator">● ACTIVE</span>
              </div>

              <div className="profile-symbol">{"{ }"}</div>

              <h3>Data × Intelligence</h3>

              <p>
                Python · Machine Learning
                <br />
                Analytics · Generative AI
              </p>

              <div className="mini-chart">
                {[35, 55, 42, 75, 60, 90, 70, 100].map((height, index) => (
                  <span key={index} style={{ height: `${height}%` }}></span>
                ))}
              </div>

              <div className="card-footer">
                <span>BUILDING WITH DATA</span>
                <span>01 / 04</span>
              </div>
            </div>

            <span className="floating-tag tag-python">Python</span>
            <span className="floating-tag tag-ai">AI / ML</span>
            <span className="floating-tag tag-data">Data Analytics</span>
          </div>

          <a href="#about" className="scroll-indicator">
            SCROLL TO EXPLORE ↓
          </a>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-container section-block">
          <div className="section-heading">
            <p className="eyebrow">01 / ABOUT ME</p>
            <h2>
              Curious mind.
              <br />
              <span>Data-driven thinking.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Computer Science graduate with an interest in Data
                Science, machine learning, and artificial intelligence.
              </p>

              <p>
                My focus is on understanding data, building analytical
                solutions, experimenting with machine learning models, and
                developing practical projects that solve real problems.
              </p>

              <p>
                I'm continuously learning new technologies and improving
                my ability to turn complex information into meaningful
                insights.
              </p>

              <a
                href="https://www.linkedin.com/in/kalidas-a-s-3baa36348/"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                Connect with me on LinkedIn ↗
              </a>
            </div>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-number">01</span>
                <div>
                  <h3>Education</h3>
                  <p>B.Tech in Computer Science</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-number">02</span>
                <div>
                  <h3>Specialization</h3>
                  <p>Data Science & Machine Learning</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-number">03</span>
                <div>
                  <h3>Interests</h3>
                  <p>AI Agents, Analytics & Predictive Modeling</p>
                </div>
              </div>

              <div className="detail-item">
                <span className="detail-number">04</span>
                <div>
                  <h3>Based in</h3>
                  <p>Kerala, India</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section-container section-block">
          <div className="section-heading">
            <p className="eyebrow">02 / MY TOOLKIT</p>
            <h2>
              Skills & <span>technologies.</span>
            </h2>
            <p className="section-description">
              The tools I use to explore data, develop models, and
              communicate insights.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{skill}</h3>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-container section-block">
          <div className="projects-heading">
            <div className="section-heading">
              <p className="eyebrow">03 / SELECTED WORK</p>
              <h2>
                Projects that
                <br />
                <span>show what I can do.</span>
              </h2>
            </div>

            <p className="projects-intro">
              A selection of projects demonstrating my interest in
              analytics, predictive modeling, and artificial intelligence.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-art">
                  <span className="project-art-symbol">
                    {project.number === "01"
                      ? "✳"
                      : project.number === "02"
                        ? "⌁"
                        : project.number === "03"
                          ? "↗"
                          : "▦"}
                  </span>
                  <span className="project-art-label">PROJECT / {project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="technology-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View on GitHub <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section
          id="experience"
          className="section-container section-block"
        >
          <div className="section-heading">
            <p className="eyebrow">04 / EXPERIENCE</p>
            <h2>
              My professional <span>journey.</span>
            </h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div className="experience-card" key={index}>
                <div className="experience-marker">
                  <span></span>
                </div>

                <div className="experience-content">
                  <p className="experience-period">{experience.period}</p>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                  <p>{experience.description}</p>
                </div>

                <span className="experience-arrow">↗</span>
              </div>
            ))}
          </div>

          <div className="education-card">
            <span className="education-icon">✳</span>
            <div>
              <p className="eyebrow">EDUCATION</p>
              <h3>B.Tech — Computer Science</h3>
              <p>Muslim Association College of Engineering</p>
              <p className="education-period">2021 – 2025</p>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="section-container contact-content">
            <p className="eyebrow">05 / LET'S CONNECT</p>

            <h2>
              Have a project
              <br />
              <span>in mind?</span>
            </h2>

            <p className="contact-description">
              I'm interested in data science, analytics, and AI projects.
              Let's connect and explore opportunities to build something
              meaningful.
            </p>

            <a
              href="mailto:your-email@example.com"
              className="button button-primary contact-button"
            >
              Send Me an Email ↗
            </a>

            <div className="contact-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/kalidas-a-s-3baa36348/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          K<span>.</span>AS
        </a>

        <p>Designed & built with React.</p>

        <a href="#home">Back to top ↑</a>

        <p className="copyright">
          © {new Date().getFullYear()} Kalidas A S
        </p>
      </footer>
    </div>
  );
}

export default App;