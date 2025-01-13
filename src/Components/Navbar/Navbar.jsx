import React from 'react'
import  './NavbarStyle.scss'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return <>
    <nav className="navbar navbar-expand-lg fixed-top main-text-wight bg-main-color">
      <div className="container">
        <Link className="navbar-brand text-white text-uppercase" to={'/'}>Start Framework</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav text-uppercase ms-auto mb-2 mb-lg-0">
            <li className="nav-item me-3">
              <NavLink className="nav-link text-white px-2 rounded-3" aria-current="page" to={'about'}>about</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link text-white px-2 rounded-3" to={'portfolio'}>portfolio</NavLink>
            </li>
            <li className="nav-item me-3">
              <NavLink className="nav-link text-white px-2 rounded-3" to={'contact'}>contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
}
