import React from 'react'

import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'

import picture1 from './images/ContactUs/contact_09.jpg'

export default function ContactUs() {
  return (
    <React.Footer>
      <Navbar/>
      <div className="container">
        <div className="row mb-3">
          <h1 className="display-4 mb-3">Contact Us</h1>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <img className="img-fluid mx-auto d-block" src={picture1} alt="centerfold" />
          </div>
          <div className="col">
            <table className="table table-borderless">
                <tbody>
                    <tr>
                        <td>Addr.</td>
                        <td>1302 NE 125th Street North Miami, FL 33161</td>
                    </tr>
                    <tr>
                        <td>Phone</td>
                        <td>(305) 891-4174</td>
                    </tr>
                    <tr>
                        <td>Fax</td>
                        <td>(305) 891-4175</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>miltoncubas@msn.com</td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
        <div className="row mb-3">
          <iframe className="mx-auto" title="directions" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.354851109113!2d-80.17430654901652!3d25.89070280948632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b20949f067ef%3A0x2792ee67ae808603!2s1302+NE+125th+St%2C+North+Miami%2C+FL+33161!5e0!3m2!1sen!2sus!4v1561197532610!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
      </div>
      <Footer/>
    </React.Footer>
  )
}
