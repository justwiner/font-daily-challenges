import React, { Component } from 'react'
import './index.scss'

class MeteorLoading extends Component{
  render () {
    return (
      <div className="meteor-loader">
        <div className="meteor-face">
          <div className="meteor-circle"></div>
        </div>
        <div className="meteor-face">
          <div className="meteor-circle"></div>
        </div>
      </div>
    )
  }
}

export default MeteorLoading