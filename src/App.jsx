import { useEffect, useState } from "react";
import "./App.css";
import Typewriter from './Typewriter'


import content from "./data/content";
import socialLinks from "./data/socialLinks";
import skills, { skillBars } from "./data/skills";



function App() {
  const [language, setLanguage] = useState("vi");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[language];

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".section-label, .section-heading, .center-heading, " +
      ".about-content, .about-note, .skill-card, .project-card, " +
      ".contact-panel, .hero-copy, .hero-visual",
    );

    elements.forEach((element, index) => {
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${(index % 4) * 100}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -35px 0px",
      },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={() => scrollTo("home")}>
            <span className="brand-mark">
              <img src="/LOGOGT_FINAL.png" alt="GiaThuanLogo" />
            </span>
          </a>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {["home", "about", "skills", "projects", "contact"].map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollTo(id);
                }}
              >
                {t.nav[i]}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="language-toggle"
              onClick={() => setLanguage(language === "vi" ? "en" : "vi")}
              aria-label="Switch language"
            >
              <span className="language-icon">文</span>
              {language === "vi" ? "VI" : "EN"}
              <span className="language-chevron">⌄</span>
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero-section section container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              {t.available}
            </div>

            <p className="eyebrow">{t.greeting}</p>
            <h1>
              Gia <span className="gradient-text">Thuận.</span>
            </h1>
            <div className="hero-role">
              <span className="role-line" />
              {t.role}
            </div>
            <p className="hero-description">
              <Typewriter texts={t.intros} />
            </p>

            <div className="hero-buttons">
              <button
                className="button button-primary"
                onClick={() => scrollTo("projects")}
              >
                {t.primary} <span>↗</span>
              </button>
              <button
                className="button button-secondary"
                onClick={() => scrollTo("contact")}
              >
                {t.secondary} <span>→</span>
              </button>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/Thuan17"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.22-5.1 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="social-text"
              >
                in
              </a>
              <span className="social-divider" />
              <span className="social-caption">Ho Chi Minh City, Vietnam</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="hero-orb">
              <div className="orb-core">
                <img src="/LOGOGT_FINAL.png" />
              </div>
              <span className="orb-spark spark-one">✦</span>
              <span className="orb-spark spark-two">✧</span>
            </div>
            <div className="floating-card code-card">
              <div className="code-card-top">
                <span />
                <span />
                <span />
                <b>developer.js</b>
              </div>
              <div className="code-lines">
                <p>
                  <i>const</i> developer <em>=</em> {"{"}
                </p>
                <p className="code-indent">
                  name: <strong>'Gia Thuan'</strong>,
                </p>
                <p className="code-indent">
                  focus: <strong>'Back-End'</strong>,
                </p>
                <p className="code-indent">
                  build: <strong>'Ideas'</strong>
                </p>
                <p>{"}"}</p>
              </div>
            </div>
            <div className="floating-card tech-card">
              <span className="tech-card-icon">⌘</span>
              <div>
                <strong>Back-End</strong>
                <small>Web Development</small>
              </div>
              <span className="tech-card-check">✓</span>
            </div>
            <div className="visual-caption">
              <span /> CREATING DIGITAL EXPERIENCES
            </div>
          </div>

          <button className="scroll-cue" onClick={() => scrollTo("about")}>
            <span className="scroll-mouse">
              <i />
            </span>
            <span>SCROLL TO EXPLORE</span>
          </button>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="section-heading">
              <span className="section-label">
                <span /> {t.aboutLabel}
              </span>
              <h2>
                {t.aboutTitle}
                <br />
                <span className="gradient-text">{t.aboutAccent}</span>
              </h2>
            </div>
            <div className="about-content">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="about-note">
                <span className="note-icon">✳</span>
                <div>
                  <strong>{t.experience}</strong>
                  <span>{t.experienceDesc}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="center-heading">
              <span className="section-label">
                <span /> {t.skillLabel}
              </span>
              <h2>{t.skillTitle}</h2>
              <p>{t.skillText}</p>
            </div>
            <div className="skills-grid">
              {skills[language].map((skill, i) => (
                <article
                  className="skill-card"
                  key={skill.name}
                  style={{ "--skill-delay": `${i * 70}ms` }}
                >
                  <div className={`skill-icon skill-icon-${i}`}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                    <div className="skill-track">
                      <span style={{ width: `${skillBars[i]}%` }} />
                    </div>
                  </div>
                  <span className="skill-number">0{i + 1}</span>
                </article>
              ))}
            </div>
            <div className="skills-footnote">
              <span>✦</span> Always learning. Always building.
            </div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="projects-heading">
              <div className="section-heading">
                <span className="section-label">
                  <span /> {t.projectLabel}
                </span>
                <h2>{t.projectTitle}</h2>
                <p>{t.projectText}</p>
              </div>

              <span className="project-count">
                {String(t.projects.length).padStart(2, "0")}{" "}
                <i>/ SELECTED PROJECTS</i>
              </span>
            </div>

            <div className="projects-grid">
              {t.projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className={`project-art project-art-${project.number}`}>
                    <span className="project-art-number">{project.number}</span>

                    <div className="project-art-symbol">
                      {project.logo ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${project.title}`}
                        >
                          <img
                            src={project.logo}
                            alt={`${project.title} logo`}
                            className="project-logo"
                          />
                        </a>
                      ) : (
                        project.icon
                      )}
                    </div>

                    <div className="project-art-ring ring-one" />
                    <div className="project-art-ring ring-two" />
                    <span className="project-art-label">GT / DEV</span>
                  </div>

                  <div className="project-body">
                    <div className="project-type">{project.type}</div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <span>PERSONAL PROJECT</span>

                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-arrow"
                          aria-label={`Open ${project.title}`}
                        >
                          Visit Website ↗
                        </a>
                      ) : (
                        <span className="project-arrow">↗</span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="projects-disclaimer">
              {language === "vi"
                ? "* Các dự án trên là nội dung mẫu. Bạn có thể thay bằng dự án thật và liên kết GitHub của mình."
                : "* These are sample project entries. Replace them with your real projects and GitHub links."}
            </p>
          </div>
        </section>



        <section className="section education-section" id="education">
          <div className="container">
            <div className="section-heading education-heading">
              <span className="section-label">
                <span /> {t.educationLabel}
              </span>

              <h2>
                {t.educationTitle}
                <span className="gradient-text">.</span>
              </h2>
            </div>

            <div className="education-card">
              <div className="education-timeline">
                <div className="education-timeline-dot" />
                <div className="education-timeline-line" />
              </div>

              <div className="education-icon" aria-hidden="true">
                <span>ED</span>
              </div>

              <div className="education-content">
                <div className="education-top">
                  <span className="education-period">
                    {t.education.period}
                  </span>

                  <span className="education-status">
                    <span className="education-status-dot" />
                    {language === 'vi' ? 'Đã hoàn thành' : 'Completed'}
                  </span>
                </div>

                <h3>{t.education.school}</h3>

                <p className="education-degree">
                  {t.education.degree}
                </p>

                <p className="education-description">
                  {t.education.description}
                </p>

                <div className="education-tags">
                  <span>Information Technology</span>
                  <span>Software Development</span>
                  <span>Web Development</span>
                </div>
              </div>

              <div className="education-card-number" aria-hidden="true">
                01
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-glow" />
              <div className="contact-content">
                <span className="section-label">
                  <span /> {t.contactLabel}
                </span>
                <h2>
                  {t.contactTitle}
                  <br />
                  <span className="gradient-text">{t.contactAccent}</span>
                </h2>
                <p>{t.contactText}</p>
                <a
                  className="button button-primary contact-button"
                  href="mailto:thuanhuynh941@gmail.com"
                >
                  {t.emailButton} <span>↗</span>
                </a>
                <small className="contact-email">thuanhuynh941@gmail.com</small>
              </div>
              <div className="contact-decoration" aria-hidden="true">
                <div className="contact-decoration-ring" />
                <div className="contact-decoration-core">
                  GT<span>.</span>
                </div>
                <span className="contact-star star-a">✦</span>
                <span className="contact-star star-b">✧</span>
                <span className="contact-star star-c">✳</span>
              </div>
            </div>
          </div>
        </section>


        <section className="section social-section" id="social">
          <div className="container">
            <div className="center-heading social-heading">
              <span className="section-label">
                <span /> LET'S CONNECT
              </span>
              <h2>
                Find me on <span className="gradient-text">socials.</span>
              </h2>
              <p>Kết nối với mình qua các nền tảng trực tuyến.</p>
            </div>

            <div className="social-grid">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  className="social-card"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ "--social-color": social.color }}
                >
                  <div className="social-card-top">
                    <span className="social-card-icon">{social.icon}</span>
                    <span className="social-card-arrow">↗</span>
                  </div>

                  <div className="social-card-info">
                    <span className="social-card-status">
                      <span /> {social.status}
                    </span>
                    <h3>{social.name}</h3>
                    <p>{social.description}</p>
                  </div>

                  <div className="social-card-footer">
                    <span>{social.label}</span>
                    <span>{social.buttonText} ↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a
            className="brand footer-brand"
            href="#home"
            onClick={() => scrollTo("home")}
          >
            <span className="brand-mark">
              <img src="/LOGOGT_FINAL.png" alt="Gia Thuan Logo" />
            </span>
          </a>
          <p>
            © 2025 Gia Thuan. {t.footer} <span>♥</span>{" "} bởi
           <b class="text-white"> {t.footerEnd}</b>
          </p>
          <button
            className="back-top"
            onClick={() => scrollTo("home")}
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </footer>

      <button
        type="button"
        className="floating-contact fixed bottom-5 right-4 z-[9999] flex h-12 w-12 items-center justify-center gap-2 rounded-full sm:h-auto sm:w-auto sm:px-5 sm:py-3"
        onClick={() => scrollTo("contact")}
        aria-label={language === "vi" ? "Liên hệ với tôi" : "Contact me"}
      >
        <span className="floating-contact-icon">✉</span>
        <span className="hidden sm:inline">
          {language === "vi" ? "Liên hệ" : "Contact me"}
        </span>
      </button>
    </div>

  );
}

export default App;
