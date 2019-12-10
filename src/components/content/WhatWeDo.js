import React from 'react'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import picture1 from './images/WhatWeDo/what-we-do_07.jpg'
import picture2 from './images/WhatWeDo/what-we-do_09.jpg'
import picture3 from './images/WhatWeDo/what-we-do_11.jpg'
import picture4 from './images/WhatWeDo/what-we-do_16.jpg'

export default function WhatWeDo() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <div className="row mb-3">
          <div className="col-12">
            <h1 className="display-4 mb-3">Who We Do</h1>
          </div>
          <div className="col">
          <div className="card-deck">
              <div className="card">
                <img src={picture1} className="img-fluid mx-auto d-block" alt="Structural Design"/>
                <div className="card-body">
                  <h5 className="card-title">Structural Design</h5>
                  <p className="card-text">
                    We elaborate Design, Calculations and Shop Drawings production for steel, 
                    aluminum, wood or concrete structures. Whether an awning or a complete 
                    building, we can do all the necessary designs you need.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={picture2} className="img-fluid mx-auto d-block" alt="Structural Design"/>
                <div className="card-body">
                  <h5 className="card-title">Concept Design</h5>
                  <p className="card-text">
                    We have on-site advisors to help you refine your project, produce final 
                    drawings and plans, or simply help you to sketch your ideas. The goal is 
                    to make your ideas real; in a fast and accurate manner.
                  </p>
                </div>
              </div>
              <div className="card">
                <img src={picture3} className="img-fluid mx-auto d-block" alt="Structural Design"/>
                <div className="card-body">
                  <h5 className="card-title">Special Inspections</h5>
                  <p className="card-text">
                    Engineering Inspections for on-going projects, repairs and any other jobs. 
                    Also, 40 and 10 years inspections for certifications and re-certifications 
                    of buildings (required by certain Cities and Counties).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card">
            <img src={picture4} className="img-fluid mx-auto d-block" alt="Structural Design"/>
            <div className="card-body">
              <h5 className="card-title">Consulting</h5>
              <p className="card-text">
                More than 15 years of experience and a multi-disciplinary team allow us to 
                offer your company the advice and knowledge needed to succeed in your 
                projects, timely and feasibly.
              </p>
              <p className="card-text">
                We are absolutely convinced that our knowledge, expertise, and commitment 
                to excellence may be sufficient to assist your company in achieving its 
                objectives. We hope for an opportunity to join efforts in pursuing common interest. 
                To inquire additional information or to arrange a meeting, please do not hesitate 
                to contact us at your earliest convenience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>      
    </React.Fragment>
  )
}
