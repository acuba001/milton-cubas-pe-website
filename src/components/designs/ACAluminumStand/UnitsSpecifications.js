import React, { Component } from 'react'

import Unit from './Unit'

import img1 from './ALUMINUM STAND F&L - WEB SITE.xlxm_70_image004.png'

export default class UnitsSpecifications extends Component {

  state = {
    numberOfUnits: 1,
    units: [{}]
  }

  onChangeUnitNum = (e) => {
    this.setState({...this.state, numberOfUnits: e.target.value})
  }

  render() {

    const { numberOfUnits} = this.state

    let unitForms = []

    for(let i = 1; i <= numberOfUnits; i++){
      unitForms.push(<Unit key={i} ind={i} />)
    }

    return (
      <div className="row justify-content-center">
        <h4>UNITS SPECIFICATIONS PER STAND</h4>
        <div className="container">
          <img src={img1} style={{ width: "95%" }} alt="Unit Sizes & Configurations" />
          <div className="input-group row mb-3">
            <label htmlFor="numberOfUnits" className="col">NUMBER OF UNITS: </label>
            <select className="input-control col" value={numberOfUnits} onChange={this.onChangeUnitNum} id="numberOfUnits">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">WIDTH (in)</th>
                <th scope="col">DEEP (in)</th>
                <th scope="col">HIGH (in)</th>
                <th scope="col">WEIGHT (lb)</th>
              </tr>
            </thead>
            <tbody>
              {unitForms}
            </tbody>
          </table>
          <div className="row justify-content-center">
            <p>MINIMUM STAND HIGH REQUIRED: <b>18.0 in.</b></p>
          </div>
        </div>
      </div>
    )
  }
}
