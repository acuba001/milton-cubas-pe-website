import React, { Component } from 'react'

export default class SiteConditions extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row justify-content-center">
          <h4>SITE CONDITIONS</h4>
        </div>
        <div className="row">
          <div className="input-group row mb-3">
            <label className="col" htmlFor="ultimateBasicWindSpeed">ULTIMATE BASIC WIND SPEED (V) = </label>
            <input className="input-control col" type="text" id="ultimateBasicWindSpeed"/>
          </div>
          <div className="input-group row mb-3">
            <label htmlFor="exposureCategory" className="col">EXPOSURE CATEGORY = </label>
            <select className="input-control col" id="exposureCategory">
              <option>C</option>
              <option>D</option>
            </select>
          </div>
          <div className="input-group row mb-3">
            <label htmlFor="totalRoofHigh" className="col">TOTAL ROOF HIGH (Rh) = </label>
            <input type="text" className="input-control col"/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
