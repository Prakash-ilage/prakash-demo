import React from 'react';

export default function Home() {

    return <div>
<main className="wrapper">
  {/* -------------- FEATURED BOX ---------------- */}
  <section className="featured-box" id="home">
    <div className="featured-text">
      <div className="featured-text-card">
        <span>Prakash Ilage</span>
      </div>
      <div className="featured-name">
        <p>I'm Developer<span className="typedText" /></p>
      </div>
      <div className="featured-text-info">
        <p>Experienced frontend & Backend developer with a passion for creating visually stunning
          and user-friendly websites.
        </p>
      </div>
      <div className="featured-text-btn">
        <button className="btn blue-btn">Hire Me</button>
        <button className="btn"><a href="https://prakash-ilage.online/document/Resume.pdf" className="btn-resume" style={{textDecoration: 'none', color:'#000',  }}  >Download CV <i className="uil uil-file-alt" /></a></button>
      </div>
      <div className="social_icons">
        <div className="icon"><a href="https://www.instagram.com/prakash_ilage/"><i className="uil uil-instagram" /></a></div>
        <div className="icon"><a href="https://www.linkedin.com/in/prakash-ilage-385603189/"><i className="uil uil-linkedin-alt" /></a></div>
        <div className="icon"><a href="https://github.com/Prakash-ilage"><i className="uil uil-github-alt" /></a></div>
      </div>
    </div>
    <div className="featured-image">
      <div className="image">
        <img src="assets/images/avatar.jpg" alt="avatar" />
      </div>
    </div>
    <div className="scroll-icon-box">
      <a href="#about" className="scroll-btn">
        <i className="uil uil-mouse-alt" />
        <p>Scroll Down</p>
      </a>
    </div>
  </section>
  {/* -------------- ABOUT BOX ---------------- */}
  <section className="section" id="about">
    <div className="top-header">
      <h1>About Me</h1>
    </div>
    <div className="row">
      <div className="col">
        <div className="about-info">
          <h3>My introduction</h3>
          <p>Master Of Computer Application | Excellent experience of Web Development | Skilled at HTML, CSS, Bootstrap and PHP | Highly capable of WordPress developing Website.
          </p>
          <div className="about-btn">
            <button className="btn"><a href="https://prakash-ilage.online/document/Resume.pdf" className="btn-resume" style={{textDecoration: 'none', color:'#fff',  }}>Download CV <i className="uil uil-import" /></a></button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="skills-box">
          <div className="skills-header">
            <h3>Frontend</h3>
          </div>
          <div className="skills-list">
            <span>HTML</span>
            <span>CSS</span>
            <span>Bootstrap</span>
            <span>JavaScript</span>
            <span>React</span>
            
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-header">
            <h3>Backend</h3>
          </div>
          <div className="skills-list">
            <span>PHP</span>
          </div>
        </div>
        <div className="skills-box">
          <div className="skills-header">
            <h3>Database</h3>
          </div>
          <div className="skills-list">
            <span>MySQL</span>
          </div>
          
        </div>
        <div className="skills-box">
          <div className="skills-header">
            <h3>CMS</h3>
          </div>
          <div className="skills-list">
            <span>WordPress</span>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  {/* -------------- PROJECT BOX ---------------- */}
  <section className="section" id="projects">
    <div className="top-header">
      <h1>Projects</h1>
    </div>
    <div className="project-container">
      <div className="project-box">
        <i className="uil uil-briefcase-alt" />
        <h3>Completed</h3>
        <label>30+ Finished Projects</label>
      </div>
      <div className="project-box">
        <i className="uil uil-users-alt" />
        <h3>Clients</h3>
        <label>25+ Happy Clients</label>
      </div>
      <div className="project-box">
        <i className="uil uil-award" />
        <h3>Experience</h3>
        <label>4.5+ Years in the field</label>
      </div>
    </div>
  </section>
  {/* -------------- CONTACT BOX ---------------- */}
  <section className="section" id="contact">
    <div className="top-header">
      <h1>Get in touch</h1>
      <span>Do you have a project in your mind, contact me here</span>
    </div>
    <div className="row">
      <div className="col">
        <div className="contact-info">
          <h2>Find Me <i className="uil uil-corner-right-down" /></h2>
          <p><i className="uil uil-envelope" /> Email: info@prakash-ilage.online</p>
          <p><i className="uil uil-phone" /> Tel: +91 8007130352</p>
        </div>
      </div>
      <div className="col">
        <div className="form-control">
          <div className="form-inputs">
            <input type="text" className="input-field" placeholder="Name" />
            <input type="text" className="input-field" placeholder="Email" />
          </div>
          <div className="text-area">
            <textarea placeholder="Message" defaultValue={""} />
          </div>
          <div className="form-button">
            <button className="btn">Send <i className="uil uil-message" /></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

    </div>
    
};
