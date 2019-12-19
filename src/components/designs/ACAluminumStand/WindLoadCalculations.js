import React, { Component } from 'react'
import NOAStandardData from './data/NOA-standard'
import NOAHeavyData from './data/NOA-heavy'

export default class WindLoadCalculations extends Component {

  state = {
    lateralWind: 0,
    upliftWind: 0
  }

  windLoadPressures = () => {
    const {
      ultimateBasicWindSpeed, 
      exposureCategory, 
      totalRoofHeight,
      maxUnitHeight,
      minStandHeight
    } = this.props

    let Rh = totalRoofHeight + maxUnitHeight/12.0 + minStandHeight/12.0
    let V = ultimateBasicWindSpeed
    let Kd = 0.85
    let Zg = exposureCategory === "C" ? 900 : 700
    let alpha = exposureCategory === "C" ? 9.5 : 11.5

    if(Rh > Zg) return [NaN, NaN]

    var Kz = 2.01
    if(Rh >= 15){
      Kz *= Math.pow(Rh/Zg, 2/alpha)
    }else{
      Kz *= Math.pow(15/Zg, 2/alpha) 
    }

    let qz = 0.00256 * Kz * Kd * V * V

    return [qz, 1.9*qz, 1.5*qz]
  }

  obtain

  render() {

    const [ qz, lateralWind, upliftWind ] = this.windLoadPressures()

    return (
      <div className="row justify-content-center">
        <h4>WIND LOAD CALCULATIONS AND STAND DESIGN</h4>
        <div className="container">
          <dl className="row">
            <dt className="col-8">qz = </dt>
            <dd className="col-4">{ qz.toFixed(2) } psf</dd>

            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4">{ lateralWind.toFixed(2) } psf = 1.9 * qz</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4">{ upliftWind.toFixed(2) } psf = 1.5 * qz</dd>

            <dt className="col-8">FOR STANDARD SYSTEM USE: </dt>
            <dd className="col-4"><b>5 FRAMES</b></dd>

            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4"><b>159 psf</b> > { lateralWind.toFixed(2) } psf</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4"><b>125 psf</b> > { upliftWind.toFixed(2) } psf</dd>

            <dt className="col-8">FOR HEAVY SYSTEM USE: </dt>
            <dd className="col-4"><b>4 FRAMES</b></dd>

            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4"><b>162 psf</b> > { lateralWind.toFixed(2) } psf</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4"><b>128 psf</b> > { upliftWind.toFixed(2) } psf</dd>
          </dl>

        </div>
      </div>
    )
  }
}
