import React from 'react'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import picture1 from './images/OurProjects/projects_07.jpg'
import picture2 from './images/OurProjects/projects_10.jpg'
import picture3 from './images/OurProjects/projects_11.jpg'
import picture4 from './images/OurProjects/projects_13.jpg'
import picture5 from './images/OurProjects/projects_15.jpg'
import picture6 from './images/OurProjects/projects_16.jpg'
import picture7 from './images/OurProjects/projects_18.jpg'

export default function OurProjects() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
        <div className="row mb-3">
          <h1 className="display-4 mb-3">Our Projects</h1>
        </div>
        <div className="row">
          <div className="container">
            <div className="row border border-danger p-3 mb-3">
              <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src={picture1} alt="Project 1" />
              </div>
              <div className="col">
                <h4>Lotos Condominium</h4>
                <p>June 2005</p>
                <p>918 Ocean Dr. Miami Beach, FL 33139</p>
                <p>Residential Condominium</p>
                <p>
                  Complete structural design, mechanical, electrical, civil and plumbing
                  construction document six stories building, common areas general features
                  for condominium. Light bearing partition walls. Wood shear wall, wood
                  joist and plywood decking. This project is over 42,000Sq ft of built area.
                </p>
              </div>
            </div>
            <div className="row border border-danger p-3 mb-3">
              <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src={picture2} alt="Project 2" />
              </div>
              <div className="col">
                <h4>Starbucks Coffee</h4>
                <p>January 2005</p>
                <p>5XX W 45 St Hialeah, FL</p>
                <p>Commercial Use</p>
                <p>
                  Complete structural design of building including footings, concrete and steel
                  columns, shoring, etc. and Structural inspections to beams, Concrete columns,
                  slabs, steel columns, etc. Total built area is 3,400 sq ft.
                </p>
              </div>
            </div>
            <div className="row border border-danger p-3 mb-3">
              <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src={picture3} alt="Project 3" />
              </div>
              <div className="col">
                <h4>Lenox Village Condominium</h4>
                <p>April 2004</p>
                <p>1024 Lenox Ave. Miami Beach, FL 33139</p>
                <p>Apartments / Townhouses - Residential use</p>
                <p>
                  Complete structural design of building, structural, mechanical, electric, civil
                  and plumbing. Four stories building as well as two stories buildings. The main
                  four story building consists of four Townhouses. The walls are 52 height. C.B.
                  walls, concrete slabs, concrete columns, steel columns. Concrete footings,
                  columns, beams, etc. field inspections and design: ground beams, cmu concrete
                  columns, concrete slabs, steel columns. The total built area is 6,232 sq ft.
                </p>
              </div>
            </div>
            <div className="row border border-danger p-3 mb-3">
              <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src={picture4} alt="Project 4" />
              </div>
              <div className="col">
                <h4>Copy Right Center</h4>
                <p>August 2004</p>
                <p>1122 W Commercial Blvd. Fort Lauderdale, FL</p>
                <p>Facility</p>
                <p>
                  Entire Structural Design and Calculation of Deck, foundation and covert for
                  air conditioning machine, the built area is over 427 sq ft.
                </p>
              </div>
            </div>
            <div className="row border border-danger p-3 mb-3">
              <div className="col-md-4">
                <img className="img-fluid mx-auto d-block" src={picture5} alt="Project 5" />
              </div>
              <div className="col">
                <h4>South Broward Resource Recovery Facility</h4>
                <p>October 2004</p>
                <p>4400 South State Rd. 7 Fort Lauderdale, FL</p>
                <p>Trash Management building</p>
                <p>
                  Whole Structural Design of the building, Ash load out reconstruction, steel
                  columns, beams, column bar grating, metal siding fiber-glass reinforcing
                  polymer panel walls and roof. Design: Wind loads connections, steel columns,
                  beams, joist, metal decking and walls, field inspections, connection and erection.
                </p>
              </div>
            </div>
            <div className="row p-3 mb-3">
              <div className="col-6">
                <p className="lead">Residential</p>
                <img className="img-fluid mx-auto d-block" src={picture6} alt="Bottom 1" />
              </div>
              <div className="col">
                <p className="lead">Commercial</p>
                <img className="img-fluid mx-auto d-block" src={picture7} alt="Bottom 2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </React.Fragment>
  )
}
