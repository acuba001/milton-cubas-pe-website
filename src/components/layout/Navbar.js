import React, { Component } from 'react'
import logo from './home_white.png'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
        <a className="navbar-brand" href="/"><img src={logo} alt="Logo" style={{width:"15%"}} /> Milton Cubas P.E., Inc.</a>
        <button class="navbar-toggler" data-toggle="collapse" data-target="#navtarget">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navtarget">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/who-we-are">Who We Are</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/what-we-do">What We Do</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/our-projects">Our Projects</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/contact-us">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      // <nav className="navbar navbar-expand-lg navbar-dark bg-danger mb-3">
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <a className="navbar-brand" href="/"><img src={logo} alt="Logo" style={{width:"15%"}} /> Milton Cubas P.E., Inc.</a>
      //   <div className="collapse navbar-collapse" id="navbarToggler">
      //     <ul className="navbar-nav">
      //       <li className="nav-item">
      //         <a className="nav-link" href="/">Home</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/who-we-are">Who We Are</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/what-we-do">What We Do</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/our-projects">Our Projects</a>
      //       </li>
      //       <li className="nav-item">
      //         <a className="nav-link" href="/contact-us">Contact Us</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>
    )
  }
}
