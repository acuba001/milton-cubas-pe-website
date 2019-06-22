import React from 'react'

import picture1 from './images/WhoWeAre/who-we-are_03.jpg'
import picture2 from './images/WhoWeAre/AWNINGS.jpg'

export default function WhoWeAre() {
  return (
    <div className="container px-3">
      <div className="row mb-3">
        <div className="col-12">
          <h1 className="display-4 mb-3">Who We Are</h1>
        </div>
        <div className="col">
          <img src={picture1} className="img-fluid mx-auto d-block" alt="centerfold"/>
        </div>
      </div>
      <div className="row">
        <p className="lead">
          Established in August 6th, 1997, MILTON CUBAS, P.E. has prospered as a Civil 
          Engineering firm dedicated to fulfilling each client's building needs. The multi-faceted 
          practice takes pride in providing personal service, utilizing the knowledge and experience 
          of its professional staff, with expertise in both residential and commercial disciplines. 
          Each project is viewed as a problem-solving process, combining client involvement through 
          each phase of research, programming, and design.
        </p>
        <p className="lead">
            Milton Cubas, P.E. utilizes computer-aided drafting software and it counts with full 
            computer 3-D modeling capabilities. Experienced budget analysis as well as cost control 
            methodology assure that each project will be reviewed continuously in terms timeliness 
            along with proper utilization of the budget allotted. 
          </p>
      </div>
      <div className="row">
        <div className="col-3-sm px-3">
          <img src={picture2} className="img-fluid mx-auto d-block" alt="inline"/>
        </div>
        <div className="col">
          <p className="lead">
            We are a group of professional Civil Engineers, Structural Engineers and Software 
            Engineers committed to the quality of our projects. We keep a policy of continuous 
            education and improvement of knowledge, technologies and methodologies for better 
            serving our customers while producing accurate results. We provide Architecture or 
            Construction firms, Steel Fabricators, Awning designer, as well as any other person 
            wishing to make a construction project, the foundation for any successful job: Good 
            designs and accurate information.
          </p>
          <p className="lead">
            Located in North Miami, Florida, we know perfectly the local conditions and building 
            requirements. Our knowledge of current regulations and Building Codes, Cities/Counties 
            policies, as well as many years of experience, makes us a perfect partner for your project.
          </p>
        </div>
      </div>
    </div>
  )
}
