import React from 'react'

import picture1 from './images/Home/pic_home_44.jpg'
import picture2 from './images/Home/pics_home_53.jpg'
import picture3 from './images/Home/pics_home_55.jpg'
import picture4 from './images/Home/pics_home_57.jpg'

export default function Home(props) {
  return (
    <React.Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 mb-3"> Welcome To Our Company Site!</h1>
          <img src={picture1} className="img-fluid mx-auto d-block" alt="centerfold"/>
        </div>
      </div>
      <div className="container">
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={picture2} alt="About Us"/>
              <div className="card-body">
                <h5 className="card-title">About Us</h5>
                <p className="card-text">Read about us, about the company policies, activities and the procedures we use to supply your building needs.</p>
              </div>
              <div className="card-footer">
                <a href="/who-we-are" className="btn btn-danger">Read More</a>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={picture3} alt="About Us"/>
              <div className="card-body">
                <h5 className="card-title">What We Have To Offer</h5>
                <p className="card-text">We elaborate design, calculations, shop drawings production for steel, aluminum, wood or concrete structures, structural inspection, estimates and landscaping design.</p>
              </div>
              <div className="card-footer">
                <a href="/what-we-do" className="btn btn-danger">Read More</a>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={picture4} alt="About Us"/>
              <div className="card-body">
                <h5 className="card-title">Our Experience</h5>
                <p className="card-text">Over the past 15 years we have developed successfully hundreds of projects, for any kind of companies, as well as private projects for covering a range of engineering needs.</p>
              </div>
              <div className="card-footer">
                <a href="/our-projects" className="btn btn-danger">Read More</a>
              </div>
            </div>
          </div>
      </div>
    </React.Fragment>
  )
}
