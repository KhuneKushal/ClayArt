import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-contact">
          <p>Email: hello@clayart.com | Phone: +91 1800 0000 1111</p>
        </div>
        
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">f</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">📌</a>
        </div>
        
        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>
        </div>
        
        <div className="footer-copyright">
          <p>&copy; 2024 ClayArt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;