import React from 'react';
import './assets/css/App.css'; // Import your CSS file if you have one
import './assets/main';

function Header() {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="logo">
          Smk Pawyatan Daha 3 Kediri
        </a>

        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Guru & Karyawan</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Admin</a>
            </li>
          </ul>
        </div>


        <div className="nav-btns">
          <i class="ri-moon-line change-theme" id="theme-button"></i>
          <div class="nav-toggle" id="nav-toggle">
            <i class="ri-menu-line"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;