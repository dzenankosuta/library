import React from 'react'
import "./index.css"
import { NavLink } from 'react-router-dom'
import logo from "../../assets/logo.png"

function Header() {
  return (
    <header className='header'>
      <div className="logo">
      <NavLink to={'/'}>
        <img src={logo} height="80" />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink to={'/'} className="nav-link">Početna</NavLink>
        <NavLink to={'/books'} className="nav-link">Knjige</NavLink>
      </nav>
    </header>
  )
}

export default Header