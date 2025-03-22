import React from 'react'
import "./index.css"

function Header() {
  return (
    <header className='header'>
      <div className="logo">
        <span className="logo-text">📚 Biblioteka</span>
      </div>
      <nav className="nav-links">
        <a href="#" className="nav-link">Početna</a>
        <a href="#" className="nav-link">Knjige</a>
      </nav>
    </header>
  )
}

export default Header