import React from 'react';

export default function NavBar() {

    return <div>
        <div class="container">
    <nav id="header">
  <div className="nav-logo">
    <p className="nav-name">Prakash</p>
    <span>.</span>
  </div>
  <div className="nav-menu" id="myNavMenu">
    <ul className="nav_menu_list">
      <li className="nav_list">
        <a href="#home" className="nav-link active-link">Home</a>
        <div className="circle" />
      </li>
      <li className="nav_list">
        <a href="#about" className="nav-link">About</a>
        <div className="circle" />
      </li>
      <li className="nav_list">
        <a href="#projects" className="nav-link">Projects</a>
        <div className="circle" />
      </li>
      <li className="nav_list">
        <a href="#contact" className="nav-link">Contact</a>
        <div className="circle" />
      </li>
    </ul>
  </div>
  <div className="nav-button">
    <button className="btn"><a href="https://prakash-ilage.online/document/Resume.pdf" className="btn-resume" style={{textDecoration: 'none', color:'#000',  }}>Download CV <i className="uil uil-file-alt" /></a></button>
  </div>
  <div className="nav-menu-btn">
    <i className="uil uil-bars" onclick="myMenuFunction()" />
  </div>
</nav>
</div>

         </div>
    
};
