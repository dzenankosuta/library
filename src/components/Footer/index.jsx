import React from 'react'
import './index.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

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
            <a href="https://www.facebook.com/" aria-label="Facebook" target='_blank'><FacebookIcon /></a>
            <a href="https://x.com/" aria-label="Twitter" target='_blank'><XIcon /></a>
            <a href="https://www.instagram.com/" aria-label="Instagram" target='_blank'><InstagramIcon /></a>
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