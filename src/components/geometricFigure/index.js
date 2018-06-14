import React, { Component } from 'react'
import './index.scss'

class GeometricFigure extends Component {
  static defaultProps  = {
    types: ['square', 'retangle', 'circle', 'semicircle', 'oval', 'diamond', 'leaf', 'bookmark', 'parallelogram'],
    colors: ['#fed3ca', '#2eb7ed', '#11309B', '#D65E2A', '#1C951A', '#8D0EEE', '#6ACFEE', '#0CCEf2', '#0F93AA', 'rgba(0, 255, 0, .5)', '#A26D14', '#13AD6D'],
    commStyle: {},
    graphStyle: {}
  }
  randomType () {
    const { type, types } = this.props
    if( type === undefined || type === null || typeof type !== 'string' || type === '' || types.indexOf(type) < 0) {
      const index = Math.floor(Math.random() * types.length)
      return types[index]
    } else {
      return type
    }
  }
  render () {
    const {commStyle, graphStyle, children, colors} = this.props
    const background = colors[Math.floor(Math.random()*colors.length)]
    const className = this.randomType()
    return (
      <div style={commStyle} className="wrapper">
      {
        className === 'bookmark' ? (
          <div style={{...graphStyle,borderLeftColor: background, borderRightColor: background}} className={className}>{children}</div>
        ) : (
          <div style={{...graphStyle,background: background}} className={className}>{children}</div>
        )
      }
      </div>
    )
  }
}

export default GeometricFigure