import React, { Component } from 'react'
import Header from '../Header'

import ContractorJobInfo from './ContractorJobInfo'
import SiteConditions from './SiteConditions'
import UnitsSpecifications from './UnitsSpecifications'
import WindLoadCalculations from './WindLoadCalculations'

export default class ACAluminumStand extends Component {

  state = {
    ultimateBasicWindSpeed: 0,
    exposureCategory: "C",
    totalRoofHeight: 0,
    maxUnitHeight: 0,
    minStandHeight: 0
  }

  updateSiteData = (name, value) => {
    this.setState({...this.state, [name]: value})
  }

  updateMaxUnitHeight = (newHeight) => {
    this.setState({...this.state, maxUnitHeight: newHeight})
  }

  updateMinStandHeight = (newHeight) => {
    this.setState({...this.state, minStandHeight: newHeight})
  }

  render() {

    const {
      ultimateBasicWindSpeed,
      exposureCategory,
      totalRoofHeight,
      maxUnitHeight,
      minStandHeight
    } = this.state

    return (
      <div className="container">
        <div className="row">
          <div className="col-3" />
          <div className="col-6">
            <Header/>
            <hr/>
            <div className="row justify-content-center text-center">
              <h3>A/C ALUMINUM STAND DESIGN ACCORDING TO NOA: 18-0305.16</h3>
            </div>
            <hr/>
            <ContractorJobInfo/>
            <hr/>
            <SiteConditions updateSiteData={this.updateSiteData} />
            <hr/>
            <UnitsSpecifications
              updateMaxUnitHeight={this.updateMaxUnitHeight}
              updateMinStandHeight={this.updateMinStandHeight}
            />
            <hr/>
            <WindLoadCalculations
              ultimateBasicWindSpeed={ultimateBasicWindSpeed}
              exposureCategory={exposureCategory}
              totalRoofHeight={totalRoofHeight}
              maxUnitHeight={maxUnitHeight}
              minStandHeight={minStandHeight}
            />
          </div>
        </div>
      </div>
    )
  }
}
