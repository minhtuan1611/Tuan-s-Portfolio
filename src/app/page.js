'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
export default function Home() {
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <main>
      <header className="mainpage">
        <div className="info-text">
          <h1>Minh Tuan Nguyen</h1>
          <h3>Welcome to my portfolio</h3>
          <a href="#about" className="scroll">
            <i className="bx bxs-down-arrow" />
          </a>
        </div>
      </header>
      <section id="about">
        <div className="header">
          <h1>About Me</h1>

          <Link href="/contact" style={{ color: 'rgb(12, 11, 11)' }}>
            {' '}
            Please hire me
          </Link>
        </div>
        <div className="card">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
          <div className="info">
            <h1>Hi, Happy to se you here</h1>
            <p>
              I am a second-year student at Lappeenranta-Lahti University of
              Technology, majoring in Software and Systems Engineering, with a
              strong focus on full-stack web development. I am passionate about
              mastering both front-end and back-end technologies to create
              engaging web experiences.
            </p>
            <div
              className="header"
              style={{ margin: '20px', fontSize: '14px' }}
            >
              <Link href="/about" style={{ color: 'rgb(12, 11, 11)' }}>
                {' '}
                Know more
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="features">
        <div className="header">
          <h1>Features</h1>
          <Link href="/contact" style={{ color: 'rgb(12, 11, 11)' }}>
            {' '}
            Contact me
          </Link>
        </div>
        <div className="feature-cards">
          <div className="card">
            <div className="info">
              <i className="bx bx-code-alt" />
              <h1>Creative Projects</h1>
              <p>
                My interest as a professional web developer is in the domain of
                creative initiatives that go beyond the ordinary. Web
                development, in my opinion, is an art form in which lines of
                code become the brushstrokes of creativity. I like creating
                digital masterpieces because I have a good eye for design and a
                talent for translating thoughts into interactive web
                experiences. Let us take a look!
              </p>
              <div
                className="header"
                style={{ margin: '20px', fontSize: '14px' }}
              >
                <Link href="/sidebar" style={{ color: 'rgb(12, 11, 11)' }}>
                  {' '}
                  See amazing projects!
                </Link>
              </div>
            </div>
          </div>
          <div className="card skills-card">
            <div className="info">
              <i className="bx bxs-briefcase" />
              <h1>Skills</h1>
              <ul className="skills-list">
                <li>Node.js</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MongoDB</li>
                <li>Wordpress</li>
                <li>Python</li>
                <li>Front-end Framework: React</li>
              </ul>
              <p className="skills-description">
                I possess a diverse skill set encompassing various technologies
                such as Node.js, JavaScript, HTML, CSS, MongoDB, WordPress,
                Python, and proficiency in front-end frameworks like React. I
                take pride in my ability to craft clean, efficient, and
                maintainable code.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
