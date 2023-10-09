'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
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
                {/* <img src="logo.png" alt="" className="sidebar-logo" /> */}
              </header>
              <nav className="sidebar-menu">
                <Link href="/" style={{ color: 'rgb(12, 11, 11)' }}>
                  <i className="bx bx-home-smile" />
                  <span>Home</span>
                </Link>
                <Link href="/Food_recipe" style={{ color: 'rgb(12, 11, 11)' }}>
                  <i className="bx bx-home-smile" />
                  <span>Food Reicpe</span>
                </Link>
                <button type="button" id="home">
                  <i className="bx bx-home-smile" />
                  <span>Home</span>
                </button>
                <button type="button" id="profile">
                  <i className="bx bx-user" />
                  <span>My profile</span>
                </button>
                <button type="button" id="qrcode">
                  <i className="bx bx-cog" />
                  <span>QR Generator</span>
                </button>
                <button type="button" id="recipeButton">
                  <i className="bx bx-baguette" />
                  <span>Food Recipe</span>
                </button>
                <button type="button">
                  <i className="bx bx-calculator" />
                  <span>Calories Caculator</span>
                </button>
                <button type="button">
                  <i className="bx bx-list-check" />
                  <span>Schedule</span>
                </button>
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
