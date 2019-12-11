import React from 'react'

export default function ContractorJobInfo() {
  return (
    <React.Fragment>
      <div className="row justify-content-center">
        <h4>CONTRACTOR AND JOB INFORMATION</h4>
      </div>
      <div className="row">
        <div className="col-6">
          <h5><u>CONTRACTOR INFORMATION:</u></h5>
        </div>
        <div className="col">
          <h5><u>JOB INFORMATION:</u></h5>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="container">
            <div className="form-group">
              <label htmlFor="companyName">COMPANY NAME:</label>
              <input className="form-control" type="text" id="companyName"/>
            </div>
            <div className="form-group">
              <label htmlFor="companyAddress">CONTRACTOR ADDRESS:</label>
              <input className="form-control" type="text" id="companyAddress"/>
            </div>
            <div className="form-group">
              <label htmlFor="companyCityState">CITY, STATE:</label>
              <input className="form-control" type="text" id="companyCityState"/>
            </div>
            <div className="form-group">
              <label htmlFor="companyZipcode">ZIPCODE:</label>
              <input className="form-control" type="text" id="companyZipcode"/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="container">
            <div className="form-group">
              <label htmlFor="projectName">PROJECT NAME:</label>
              <input className="form-control" type="text" id="projectName"/>
            </div>
            <div className="form-group">
              <label htmlFor="projectAddress">PROJECT ADDRESS:</label>
              <input className="form-control" type="text" id="projectAddress"/>
            </div>
            <div className="form-group">
              <label htmlFor="projectCityState">CITY, STATE:</label>
              <input className="form-control" type="text" id="projectAddress"/>
            </div>
            <div className="form-group">
              <label htmlFor="projectZipcode">ZIPCODE:</label>
              <input className="form-control" type="text" id="projectAddress"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
