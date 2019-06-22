import React, { Component } from 'react'

import Home from './Home'

export default class Content extends Component {
  render() {
    const {page} = this.props
    var Page;
    
    switch (page) {
      default:
        Page = <Home/>
        break;
    }
    
    return (
      <main>
        {Page}
      </main>
    )
  }
}
