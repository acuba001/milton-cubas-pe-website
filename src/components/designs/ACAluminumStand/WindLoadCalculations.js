import React, { Component } from 'react'

export default class WindLoadCalculations extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <h4>WIND LOAD CALCULATIONS AND STAND DESIGN</h4>
        <div className="container">
          <dl className="row">
            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4">134.92 psf</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4">106.52 psf</dd>

            <dt className="col-8">FOR STANDARD SYSTEM USE: </dt>
            <dd className="col-4"><b>5 FRAMES</b></dd>

            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4"><b>159 psf</b> > 134.92 psf</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4"><b>125 psf</b> > 106.52 psf</dd>

            <dt className="col-8">FOR HEAVY SYSTEM USE: </dt>
            <dd className="col-4"><b>4 FRAMES</b></dd>

            <dt className="col-8">LATERAL WIND PRESSURE = </dt>
            <dd className="col-4"><b>162 psf</b> > 134.92 psf</dd>

            <dt className="col-8">UPLIFT WIND PRESSURE = </dt>
            <dd className="col-4"><b>128 psf</b> > 106.52 psf</dd>
          </dl>

        </div>
      </div>
    )
  }
}
