import React from 'react'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#home">Home</a>
        <a className="nav-item nav-link" href="#">News</a>
        <a className="nav-item nav-link" href="#contact">Contact</a>
        <a className="nav-item nav-link" href="#">About</a>
      </div>
    </div>
  </nav>
  )
}
