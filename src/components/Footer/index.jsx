import React from 'react'
import './index.css'

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Biblioteka</h3>
          <p>Vaš digitalni prolaz u svet beskrajnih priča</p>
        </div>
        <div className="footer-section">
          <h3>Brzi Linkovi</h3>
          <a href="#">O nama</a>
          <a href="#">Kontakt</a>
          <a href="#">Pravila privatnosti</a>
        </div>
        <div className="footer-section">
          <h3>Pratite nas</h3>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📸</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Biblioteka. Sva prava zadržana.</p>
      </div>
    </footer>
  )
}

export default Footer