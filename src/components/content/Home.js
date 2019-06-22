import React from 'react'

import picture1 from './images/pic_home_44.jpg'
import picture2 from './images/pics_home_53.jpg'
import picture3 from './images/pics_home_55.jpg'
import picture4 from './images/pics_home_57.jpg'

export default function Home() {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 mb-3"> Welcome to our company site!</h1>
          <img src={picture1} className="rounded mx-auto d-block" alt="centerfold"/>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={picture2} alt="About Us"/>
              <div className="card-body">
                <h5 class="card-title">About Us</h5>
                <p class="card-text">Read about us, about the company policies, activities and the procedures we use to supply your building needs.</p>
              </div>
              <div className="card-footer">
                <a href="#!" class="btn btn-danger">Read More</a>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={picture3} alt="About Us"/>
              <div className="card-body">
                <h5 class="card-title">What We Have To Offer</h5>
                <p class="card-text">We elaborate design, calculations, shop drawings production for steel, aluminum, wood or concrete structures, structural inspection, estimates and landscaping design.</p>
              </div>
              <div className="card-footer">
                <a href="#!" class="btn btn-danger">Read More</a>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={picture4} alt="About Us"/>
              <div className="card-body">
                <h5 class="card-title">Our Experience</h5>
                <p class="card-text">Over the past 15 years we have developed successfully hundreds of projects, for any kind of companies, as well as private projects for covering a range of engineering needs.</p>
              </div>
              <div className="card-footer">
                <a href="#!" class="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
