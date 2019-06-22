import React, { Component } from 'react'
import logo from './home_white.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3">
        <div className="container">
          <a className="navbar-brand" href="#!"><img src={logo} alt="Logo" style={{width:"15%"}} /> Milton Cubas P.E., Inc.</a>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#!">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Who We Are</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">What We Do</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Our Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}