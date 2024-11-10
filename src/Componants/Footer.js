import React from 'react';

export default function Footer() {

    return <div> 
<div class="container">
<footer>

  <div className="top-footer">
    <p>Prakash Ilage</p>
  </div>
  <div className="middle-footer">
    <ul className="footer-menu">
      <li className="footer_menu_list">
        <a href="#home">Home</a>
      </li>
      <li className="footer_menu_list">
        <a href="#about">About</a>
      </li>
      <li className="footer_menu_list">
        <a href="#projects">Projects</a>
      </li>
      <li className="footer_menu_list">
        <a href="#contact">Contact</a>
      </li>
    </ul>
  </div>
  <div className="footer-social-icons">
    <div className="icon"><a href="https://www.instagram.com/prakash_ilage/"><i className="uil uil-instagram" /></a></div>
    <div className="icon"><a href="https://www.linkedin.com/in/prakash-ilage-385603189/"><i className="uil uil-linkedin-alt" /></a></div>

    <div className="icon"><i className="uil uil-github-alt" /></div>
  </div>
  <div className="bottom-footer">
    <p>Copyright © <a href="#home" style={{textDecoration: 'none'}}>Prakash Ilage</a> - All rights reserved</p>
  </div>
</footer>
</div>



        
         </div>
    
};
