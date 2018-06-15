import React, { Component } from 'react'
import './index.scss'

class RainbowLoading extends Component {
  render () {
    return (
      <div className="rainbow-loading">
        <div className="rainbow-bows">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    )
  }
}

export default RainbowLoading