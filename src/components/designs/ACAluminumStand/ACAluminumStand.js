import React, { Component } from 'react'
import Header from '../Header'

import ContractorJobInfo from './ContractorJobInfo'
import SiteConditions from './SiteConditions'
import UnitsSpecifications from './UnitsSpecifications'
import WindLoadCalculations from './WindLoadCalculations'

export default class ACAluminumStand extends Component {
  render() {
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
            <SiteConditions/>
            <hr/>
            <UnitsSpecifications/>
            <hr/>
            <WindLoadCalculations/>
          </div>
        </div>
      </div>
    )
  }
}
