
import {useEffect,useState } from 'react'
import './App.css'

const content = {
  vi: {
    nav: ['Trang chủ', 'Giới thiệu', 'Kỹ năng', 'Dự án', 'Liên hệ'],
    role: 'FULL-STACK DEVELOPER',
    greeting: 'Xin chào, mình là',
    name: 'Gia Thuận',
    intro: 'Mình xây dựng những trải nghiệm web hiện đại, từ giao diện trực quan đến hệ thống backend mạnh mẽ.',
    primary: 'Xem dự án',
    secondary: 'Liên hệ với mình',
    available: 'Sẵn sàng cho những cơ hội mới',
    aboutLabel: 'TÌM HIỂU VỀ MÌNH',
    aboutTitle: 'Biến ý tưởng thành',
    aboutAccent: 'sản phẩm thực tế.',
    aboutText: 'Mình yêu thích phát triển web và giải quyết các vấn đề bằng công nghệ. Mục tiêu của mình là tạo ra những sản phẩm có giao diện đẹp, hoạt động ổn định và mang lại giá trị thực tế cho người dùng.',
    aboutText2: 'Mình luôn học hỏi, thử nghiệm công nghệ mới và cải thiện chất lượng code qua từng dự án.',
    experience: 'Tư duy phát triển',
    experienceDesc: 'Từ thiết kế giao diện đến logic hệ thống',
    skillLabel: 'CÔNG NGHỆ SỬ DỤNG',
    skillTitle: 'Bộ công cụ của mình',
    skillText: 'Những công nghệ mình đang sử dụng và phát triển kỹ năng.',
    projectLabel: 'MỘT SỐ SẢN PHẨM',
    projectTitle: 'Dự án nổi bật',
    projectText: 'Một vài ý tưởng và sản phẩm tiêu biểu trong hành trình phát triển của mình.',
    projects: [
      

{
  number: '01',
  title: 'Headphone E-commerce',
  type: 'E-commerce · Full-stack',
  description: 'Website thương mại điện tử bán tai nghe, hỗ trợ quản lý sản phẩm, giỏ hàng, đơn hàng và cập nhật trạng thái theo thời gian thực.',
  tags: ['ASP.NET Core', 'SQL Server', 'Bootstrap', 'SignalR'],
  icon: '🛒',
  logo: 'https://pada.com.vn/Uploads/images/logo-3.png',
  demoUrl: 'https://pada.com.vn/',
},
      // {
      //   number: '02',
      //   title: 'Portfolio Website',
      //   type: 'Website · Frontend',
      //   description: 'Website portfolio cá nhân với giao diện tối giản, hiệu ứng chuyển động và thiết kế responsive.',
      //   tags: ['React', 'CSS', 'Vite'],
      //   icon: '✳',
      // },
      // {
      //   number: '03',
      //   title: 'Inventory Dashboard',
      //   type: 'Dashboard · Web App',
      //   description: 'Giao diện quản lý dữ liệu kho, theo dõi thông tin sản phẩm và hiển thị trạng thái trực quan.',
      //   tags: ['JavaScript', 'API', 'UI Design'],
      //   icon: '⌘',
      // },
    ],
    contactLabel: 'HÃY KẾT NỐI',
    contactTitle: 'Có ý tưởng nào muốn',
    contactAccent: 'cùng thực hiện?',
    contactText: 'Mình luôn sẵn sàng trao đổi về dự án, công nghệ hoặc những cơ hội hợp tác thú vị.',
    emailButton: 'Gửi email cho mình',
    footer: 'Được thiết kế và phát triển với',
    footerEnd: 'bởi Gia Thuận.',
    skills: [
      { name: 'HTML & CSS', level: 'Nền tảng giao diện', icon: '◈' },
      { name: 'JavaScript', level: 'Ngôn ngữ lập trình', icon: 'JS' },
      { name: 'React', level: 'Frontend framework', icon: '⚛' },
      { name: 'C# / ASP.NET', level: 'Backend development', icon: 'C#' },
      { name: 'SQL', level: 'Database', icon: '◉' },
      { name: 'Git & GitHub', level: 'Version control', icon: '⑂' },
    ],
  },
  en: {
    nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
    role: 'FULL-STACK DEVELOPER',
    greeting: "Hi, I'm",
    name: 'Gia Thuan',
    intro: 'I build modern web experiences, from intuitive interfaces to reliable and powerful backend systems.',
    primary: 'Explore projects',
    secondary: 'Get in touch',
    available: 'Open to new opportunities',
    aboutLabel: 'A LITTLE ABOUT ME',
    aboutTitle: 'Turning ideas into',
    aboutAccent: 'real-world products.',
    aboutText: 'I enjoy web development and solving problems with technology. My goal is to build products that look great, work reliably, and create real value for users.',
    aboutText2: 'I keep learning, exploring new technologies, and improving my code quality with every project.',
    experience: 'Development mindset',
    experienceDesc: 'From interface design to system logic',
    skillLabel: 'MY TECH STACK',
    skillTitle: 'Tools I work with',
    skillText: 'Technologies I use and continue to grow with.',
    projectLabel: 'SELECTED WORK',
    projectTitle: 'Featured projects',
    projectText: 'A selection of ideas and products from my development journey.',
    projects: [
      {
        number: '01',
        title: 'Warranty Management',
        type: 'Web App · Full-stack',
        description: 'A warranty intake and tracking system for organizing product information and service progress.',
        tags: ['React', 'ASP.NET Core', 'SQL'],
        icon: '▦',
      },
      // {
      //   number: '02',
      //   title: 'Portfolio Website',
      //   type: 'Website · Frontend',
      //   description: 'A personal portfolio with a minimal interface, subtle motion, and responsive layouts.',
      //   tags: ['React', 'CSS', 'Vite'],
      //   icon: '✳',
      // },
      // {
      //   number: '03',
      //   title: 'Inventory Dashboard',
      //   type: 'Dashboard · Web App',
      //   description: 'An inventory interface for organizing product data and displaying status at a glance.',
      //   tags: ['JavaScript', 'API', 'UI Design'],
      //   icon: '⌘',
      // },
    ],
    contactLabel: "LET'S CONNECT",
    contactTitle: 'Have an idea to',
    contactAccent: 'build together?',
    contactText: "I'm always happy to talk about projects, technology, and exciting opportunities to collaborate.",
    emailButton: 'Send me an email',
    footer: 'Designed and built with',
    footerEnd: 'by Gia Thuan.',
    skills: [
      { name: 'HTML & CSS', level: 'Web foundations', icon: '◈' },
      { name: 'JavaScript', level: 'Programming language', icon: 'JS' },
      { name: 'React', level: 'Frontend framework', icon: '⚛' },
      { name: 'C# / ASP.NET', level: 'Backend development', icon: 'C#' },
      { name: 'SQL', level: 'Database', icon: '◉' },
      { name: 'Git & GitHub', level: 'Version control', icon: '⑂' },
    ],
  },
}

const skillBars = [90, 84, 80, 76, 72, 78]

function App() {
  const [language, setLanguage] = useState('vi')
  const [menuOpen, setMenuOpen] = useState(false)
  const t = content[language]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
useEffect(() => {
  const elements = document.querySelectorAll(
    '.section-label, .section-heading, .center-heading, ' +
    '.about-content, .about-note, .skill-card, .project-card, ' +
    '.contact-panel, .hero-copy, .hero-visual'
  )

  elements.forEach((element, index) => {
    element.classList.add('scroll-reveal')
    element.style.setProperty(
      '--reveal-delay',
      `${(index % 4) * 100}ms`
    )
  })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -35px 0px',
    }
  )

  elements.forEach((element) => observer.observe(element))

  return () => observer.disconnect()
}, [])
  return (
    <div className="portfolio">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={() => scrollTo('home')}>
            <span className="brand-mark">GT<span>.</span></span>
            <span className="brand-name">gia<span>thuan</span></span>
          </a>

          <div className={`nav-links ${menuOpen ? 'nav-links-open' : ''}`}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((id, i) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => {
                  event.preventDefault()
                  scrollTo(id)
                }}
              >
                {t.nav[i]}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="language-toggle"
              onClick={() => setLanguage(language === 'vi' ? 'en' : 'vi')}
              aria-label="Switch language"
            >
              <span className="language-icon">文</span>
              {language === 'vi' ? 'VI' : 'EN'}
              <span className="language-chevron">⌄</span>
            </button>
            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
            >
              {menuOpen ? '✕' : '☰'}
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
            <p className="hero-description">{t.intro}</p>

            <div className="hero-buttons">
              <button className="button button-primary" onClick={() => scrollTo('projects')}>
                {t.primary} <span>↗</span>
              </button>
              <button className="button button-secondary" onClick={() => scrollTo('contact')}>
                {t.secondary} <span>→</span>
              </button>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.23-1.62-1.23-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.22-5.1 5.49.4.35.75 1.02.75 2.06v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" /></svg>
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-text">in</a>
              <span className="social-divider" />
              <span className="social-caption">Ho Chi Minh City, Vietnam</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-grid" />
            <div className="orbit orbit-outer" />
            <div className="orbit orbit-inner" />
            <div className="hero-orb">
              <div className="orb-core">GT<span>.</span></div>
              <span className="orb-spark spark-one">✦</span>
              <span className="orb-spark spark-two">✧</span>
            </div>
            <div className="floating-card code-card">
              <div className="code-card-top"><span /><span /><span /><b>developer.js</b></div>
              <div className="code-lines">
                <p><i>const</i> developer <em>=</em> {'{'}</p>
                <p className="code-indent">name: <strong>'Gia Thuan'</strong>,</p>
                <p className="code-indent">focus: <strong>'Full-stack'</strong>,</p>
                <p className="code-indent">build: <strong>'Ideas'</strong></p>
                <p>{'}'}</p>
              </div>
            </div>
            <div className="floating-card tech-card">
              <span className="tech-card-icon">⌘</span>
              <div><strong>Full-stack</strong><small>Web Development</small></div>
              <span className="tech-card-check">✓</span>
            </div>
            <div className="visual-caption"><span /> CREATING DIGITAL EXPERIENCES</div>
          </div>

          <button className="scroll-cue" onClick={() => scrollTo('about')}>
            <span className="scroll-mouse"><i /></span>
            <span>SCROLL TO EXPLORE</span>
          </button>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="section-heading">
              <span className="section-label"><span /> {t.aboutLabel}</span>
              <h2>{t.aboutTitle}<br /><span className="gradient-text">{t.aboutAccent}</span></h2>
            </div>
            <div className="about-content">
              <p>{t.aboutText}</p>
              <p>{t.aboutText2}</p>
              <div className="about-note">
                <span className="note-icon">✳</span>
                <div><strong>{t.experience}</strong><span>{t.experienceDesc}</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="center-heading">
              <span className="section-label"><span /> {t.skillLabel}</span>
              <h2>{t.skillTitle}</h2>
              <p>{t.skillText}</p>
            </div>
            <div className="skills-grid">
              {t.skills.map((skill, i) => (
                <article className="skill-card" key={skill.name} style={{ '--skill-delay': `${i * 70}ms` }}>
                  <div className={`skill-icon skill-icon-${i}`}>{skill.icon}</div>
                  <div className="skill-info">
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                    <div className="skill-track"><span style={{ width: `${skillBars[i]}%` }} /></div>
                  </div>
                  <span className="skill-number">0{i + 1}</span>
                </article>
              ))}
            </div>
            <div className="skills-footnote"><span>✦</span> Always learning. Always building.</div>
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <div className="container">
            <div className="projects-heading">
              <div className="section-heading">
                <span className="section-label"><span /> {t.projectLabel}</span>
                <h2>{t.projectTitle}</h2>
                <p>{t.projectText}</p>
              </div>
          
<span className="project-count">
  {String(t.projects.length).padStart(2, '0')}{' '}
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
              {language === 'vi'
                ? '* Các dự án trên là nội dung mẫu. Bạn có thể thay bằng dự án thật và liên kết GitHub của mình.'
                : '* These are sample project entries. Replace them with your real projects and GitHub links.'}
            </p>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-glow" />
              <div className="contact-content">
                <span className="section-label"><span /> {t.contactLabel}</span>
                <h2>{t.contactTitle}<br /><span className="gradient-text">{t.contactAccent}</span></h2>
                <p>{t.contactText}</p>
                <a className="button button-primary contact-button" href="mailto:thuanhuynh941@gmail.com">
                  {t.emailButton} <span>↗</span>
                </a>
                <small className="contact-email">thuanhuynh941@gmail.com</small>
              </div>
              <div className="contact-decoration" aria-hidden="true">
                <div className="contact-decoration-ring" />
                <div className="contact-decoration-core">GT<span>.</span></div>
                <span className="contact-star star-a">✦</span>
                <span className="contact-star star-b">✧</span>
                <span className="contact-star star-c">✳</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand footer-brand" href="#home" onClick={() => scrollTo('home')}>
            <span className="brand-mark">GT<span>.</span></span>
            <span className="brand-name">gia<span>thuan</span></span>
          </a>
          <p>© {new Date().getFullYear()} Gia Thuan. {t.footer} <span>♥</span> {t.footerEnd}</p>
          <button className="back-top" onClick={() => scrollTo('home')} aria-label="Back to top">↑</button>
        </div>
      </footer>
    </div>
  )
}

export default App