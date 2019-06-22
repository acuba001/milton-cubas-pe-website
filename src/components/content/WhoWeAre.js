import React from 'react'

import picture1 from './images/WhoWeAre/who-we-are_03.jpg'
// import picture2 from './images/WhoWeAre/AWNINGS.jpg'

export default function WhoWeAre() {
  return (
    <div className="container">
      <img src={picture1} className="img-fluid mx-auto d-block" alt="centerfold"/>
    </div>
  )
}
