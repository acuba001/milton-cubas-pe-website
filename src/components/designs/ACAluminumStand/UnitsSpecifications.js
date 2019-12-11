import React, { Component } from 'react'

import img1 from './ALUMINUM STAND F&L - WEB SITE.xlxm_70_image004.png'

export default class UnitsSpecifications extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <h4>UNITS SPECIFICATIONS PER STAND</h4>
        <div className="container">
          <img src={img1} style={{ width: "95%" }} alt="Unit Sizes & Configurations" />
          <div className="input-group row mb-3">
            <label htmlFor="numberOfUnits" className="col">NUMBER OF UNITS: </label>
            <select className="input-control col" id="numberOfUnits">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div className="input-group row mb-3 justify-content-center">
            <span className="input-group-text col-1">#1</span>
            <input className="form-control col-2" type="text" id="width1" />
            <input className="form-control col-2" type="text" id="deep1" />
            <input className="form-control col-2" type="text" id="high1" />
            <input className="form-control col-2" type="text" id="weight1" />
          </div>
          <div className="row justify-content-center">
            <p>MINIMUM STAND HIGH REQUIRED: <b>18.0 in.</b></p>
          </div>
        </div>
      </div>
    )
  }
}
