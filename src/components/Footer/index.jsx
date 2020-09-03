/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './style.css';

function Footer() {
  const [darkMode, setDarkMode] = useState(Boolean(localStorage.getItem('lightMode')) || false);

  const onClickHandler = (e) => {
    e.preventDefault();

    if (darkMode) {
      document.body.classList.add('lightmode');
      localStorage.setItem('lightMode', 'true');
      setDarkMode(!darkMode);
    } else {
      document.body.classList.remove('lightmode');
      localStorage.setItem('lightMode', 'false');
      setDarkMode(!darkMode);
    }
  };

  return (
    <footer className="footer">
      <div>
        <a href="https://github.com/MitoKito/startpage">GitHub repo</a>
        {' | '}
        <a onClick={(e) => onClickHandler(e)}>Switch themes</a>
      </div>
      <div>
        <a href="https://www.pixiv.net/en/artworks/83612969">Art by コーラ on Pixiv</a>
      </div>
    </footer>
  );
}

export default Footer;
