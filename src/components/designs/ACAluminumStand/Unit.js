import React, { Component } from 'react'
import classnames from 'classnames'

export default class Unit extends Component {

  state = {
    width: "", 
    deep: "", 
    high: "", 
    weight: "",
    topAreaGood: true, 
    frontAreaGood: true, 
    highGood: true, 
    weightGood: true
  }

  RegExp = new RegExp(/^\d*\.?\d*$/)

  isValidNum = (value) => this.RegExp.test(value)

  onChange = (e) => {
    if(this.isValidNum(e.target.value)){

      const { width, deep, high} = this.state

      if(e.target.name === "weight"){
        this.setState({
          ...this.state, 
          weight: e.target.value,
          weightGood: e.target.value === "" || parseFloat(e.target.value) < 450
        })
      }
      else if (e.target.name === "high"){
        this.setState({
          ...this.state, 
          high: e.target.value,
          highGood: e.target.value === "" || parseFloat(e.target.value) <= 60,
          frontAreaGood: this.area(width, e.target.value) < 50
        })
      } else if(e.target.name === "width"){
        this.setState({
          ...this.state, 
          width: e.target.value,
          topAreaGood: this.area(e.target.value, deep) <= 37.9,
          frontAreaGood: this.area(e.target.value, high) < 50
        })
      } else if(e.target.name === "deep"){
        this.setState({
          ...this.state, 
          deep: e.target.value,
          topAreaGood: this.area(width, e.target.value) <= 37.9
        })
      }
    }
  }

  area = (x, y) => {
    if(x === "" || y === "") return 0
    return parseFloat(x) * parseFloat(y) / 144.0
  }

  render() {

    const { ind } = this.props
    const { 
      width, 
      deep, 
      high, 
      weight,
      topAreaGood,
      frontAreaGood,
      highGood,
      weightGood
    } = this.state

    return (
      <tr>
        <th scope="row">#{ind}</th>
        <td>
          <input className={classnames({'form-control': true, 'is-invalid': !topAreaGood || !frontAreaGood})} type="text" name={"width"} value={width} onChange={this.onChange} placeholder="Width" />
          { !topAreaGood ? (<div className="invalid-feedback"> Top area of unit too high!</div>) : null }
          { !frontAreaGood ? (<div className="invalid-feedback"> Front area of unit too high!</div>) : null }
        </td>
        <td>
          <input className={classnames({'form-control': true, 'is-invalid': !topAreaGood})} type="text" name={"deep"} value={deep} onChange={this.onChange} placeholder="Deep" />
          {  }
        </td>
        <td>
          <input className={classnames({'form-control': true, 'is-invalid': !highGood || !frontAreaGood})} type="text" name={"high"} value={high} onChange={this.onChange} placeholder="High" />
          { !highGood ? (<div className="invalid-feedback"> Unit too high!</div>) : null }
        </td>
        <td>
          <input className={classnames({'form-control': true, 'is-invalid': !weightGood})} type="text" name={"weight"} value={weight} onChange={this.onChange} placeholder="Weight" />
          { !weightGood ? (<div className="invalid-feedback"> Weight of unit too high!</div>) : null }
        </td>
      </tr>
    )
  }
}
