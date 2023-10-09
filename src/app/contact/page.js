'use client'

import { useState, useEffect } from 'react'

const Contact = () => {
  const [email, setEmail] = useState('')
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
      <section className="contact">
        <div className="content">
          <h2>Contact Me</h2>
          <p>
            As a creative and motivated web developer with strong core abilities
            from front-end to back-end, I am always on the lookout for
            possibilities to participate in projects or locate a firm to intern
            and learn from. Please contact me so that we may begin a discussion
            about how I can contribute to our success!
          </p>
        </div>
        <div className="container">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="bx bx-map" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  Lahti, Finland, <br />
                  15110
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bxl-gmail" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>tuan.mn51@gmail.com</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+358 41-713-6727</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <h2>Send Message</h2>
              <div className="inputBox">
                <input id="Customer name" type="text" required="required" />
                <span>Full Name</span>
              </div>
              <div className="inputBox">
                <input
                  id="email"
                  type="text"
                  required="required"
                  value={email}
                  onChange={(e) => setEmail(e.value)}
                />
                <span>Email</span>
              </div>
              <div className="inputBox">
                <textarea
                  id="message"
                  type="text"
                  required="required"
                  defaultValue={''}
                />
                <span>Type a message..</span>
              </div>
              <div className="inputBox">
                <input type="submit" defaultValue="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
