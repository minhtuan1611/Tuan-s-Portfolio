'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const toggleSidebar = () => {
    setIsOpen((cur) => !cur)
  }

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
    <>
      <div className={`Bsidebar ${isOpen ? 'open' : ''}`}>
        <header className="Hsidebar">
          <nav className="sidebar">
            <div className="sidebar-inner">
              <header className="sidebar-header">
                <button
                  type="button"
                  className="sidebar-burger"
                  onClick={toggleSidebar}
                >
                  <i className="bx bx-menu" />
                </button>
                <Image
                  src="/logo.png"
                  alt=""
                  className="sidebar-logo"
                  height={200}
                  width={200}
                />
              </header>
              <nav className="sidebar-menu">
                <button
                  type="button"
                  id="home"
                  onClick={() => router.push('/')}
                >
                  <i className="bx bx-home-smile" />
                  <span>Home</span>
                </button>
                <button
                  type="button"
                  id="profile"
                  onClick={() => router.push('/about')}
                >
                  <i className="bx bx-user" />
                  <span>My profile</span>
                </button>
                <button
                  type="button"
                  id="qrcode"
                  onClick={() => router.push('/qr_generator')}
                >
                  <i className="bx bx-cog" />
                  <span>QR Generator</span>
                </button>
                <button
                  type="button"
                  id="recipeButton"
                  onClick={() => router.push('/Food_recipe')}
                >
                  <i className="bx bx-baguette" />
                  <span>Food Recipe</span>
                </button>
                <button
                  type="button"
                  onClick={() =>
                    router.push('https://bee-healthier.onrender.com/')
                  }
                >
                  <i className="bx bx-calculator" />
                  <span>Bee Healthier</span>
                </button>
                {/* <button type="button">
                  <i className="bx bx-list-check" />
                  <span>Schedule</span>
                </button> */}
              </nav>
            </div>
          </nav>
        </header>
        <div className="containerr">
          <div className="technologies">
            <h2>Technologies Used</h2>
            <p>The Bee Healthier app incorporates all aboved technologies.</p>
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>axios</li>
              <li>Fetch API</li>
              <li>UseEffect</li>
              <li>UseState</li>
              <li>Bootstrap</li>
              <li>React Router</li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>Cors</li>
              <li>Dotenv</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
