import React, { Component } from 'react'

export default class Unit extends Component {

  state = {
    width: "", 
    deep: "", 
    high: "", 
    weight: ""
  }

  RegExp = new RegExp(/^\d*\.?\d*$/)

  isValidNum = (value) => this.RegExp.test(value)

  onChange = (e) => {
    if(this.isValidNum(e.target.value)){
      this.setState({...this.state, [e.target.name]: e.target.value})
    }
  }

  render() {

    const { ind } = this.props
    const { width, deep, high, weight } = this.state

    return (
      <tr>
        <th scope="row">#{ind}</th>
        <td><input className="form-control" type="text" name={"width"} value={width} onChange={this.onChange} placeholder="Width" /></td>
        <td><input className="form-control" type="text" name={"deep"} value={deep} onChange={this.onChange} placeholder="Deep" /></td>
        <td><input className="form-control" type="text" name={"high"} value={high} onChange={this.onChange} placeholder="High" /></td>
        <td><input className="form-control" type="text" name={"weight"} value={weight} onChange={this.onChange} placeholder="Weight" /></td>
      </tr>
    )
  }
}
