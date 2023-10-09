const About = () => {
  return (
    <>
      <div className="Aboutpage">
        <header>
          <h1>Minh Tuan Nguyen</h1>
        </header>
        <section id="profile">
          <h2>Profile 👨🏼‍🎓</h2>
          <p>
            International university student with a huge passion for creating
            innovative, engaging, and user-friendly websites. Responsible and
            hardworking, with goals of achieving valuable insights into the
            field of Web Development.
          </p>
        </section>
        <section id="employment">
          <h2>💼 Employment History</h2>
          <strong>Logistician at DTH multi-industry company, Lahti</strong>
          <p>
            <span className="date">May 2023 - October 2023</span>
          </p>
          <ul>
            <li>Supply Chain Management.</li>
            <li>Problem-Solving Skills.</li>
            <li>
              Effective communication and collaboration with different
              stakeholders.
            </li>
            <li>Time Management.</li>
          </ul>
        </section>
        <section id="education">
          <h2>🎓 Education</h2>
          <strong>
            Bachelor&apos;s degree, Lappeenranta-Lahti University of Technology,
            Lahti
          </strong>
          <p>
            <span className="date">August 2022 - May 2024</span>
          </p>
          <ul>
            <li>Bachelor&apos;s degree in Software and Systems Engineering.</li>
            <li>Maintained decent academic results.</li>
            <li>Relevant Coursework:</li>
            <ul>
              <li>CT60A4304 - Basics of Database Systems.</li>
              <li>CT60A7650 - Database Systems Management.</li>
              <li>BM20A9300 - Statistical Mathematics.</li>
              <li>CT60A4002 - Software Engineering.</li>
            </ul>
          </ul>
        </section>
        <section id="courses">
          <h2>✓ Courses</h2>
          <strong>Full Stack Open Course of University of Helsinki</strong>
          <p>
            <span className="date">July 2023 - November 2023</span>
          </p>
          <strong>
            The Complete JavaScript Course 2023: From Zero to Expert!, Udemv.com
          </strong>
          <p>
            <span className="date">October 2022 - March 2023</span>
          </p>
          <strong>
            Open Source Software Development, Linux and Git Specialization,
            coursera.org
          </strong>
          <p>
            <span className="date">January 2023 - June 2023</span>
          </p>
          <strong>
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, MongoDB, Web3 and DApps
          </strong>
          <p>
            <span className="date">May 2023 - August 2023</span>
          </p>
        </section>
        <section id="activities">
          <h2>✹ Extra-curricular activities</h2>
          <strong>Logistician at Scribbles Project, Ha Noi</strong>
          <p>
            <span className="date">June 2020 - April 2021</span>
          </p>
          <ul>
            <li>
              Organized charitable events, including a non-profit class for
              students from undeveloped backgrounds, and a summer camp for about
              100 children, aimed at raising their awareness of the importance
              of technology.
            </li>
            <li>
              Contact with individuals and organizations to reach sources of
              sponsorship, both money, and material.
            </li>
          </ul>
        </section>
        <section id="references">
          <h2>References ✍︎</h2>
          <strong>
            Kieu Pham Quoc Khanh, Former Head of Logistics Department from
            Scribbles Project
          </strong>
          <p>Email: khanh.kieu@student.lut.fi</p>
          <p>Phone: +358 41 491 4730</p>
          <strong>Tkhan Le, Operation Team Leader</strong>
          <p>Email: tkhan.le@dth.fi</p>
          <p>Phone: 044 380 3307</p>
        </section>
      </div>
    </>
  )
}

export default About
