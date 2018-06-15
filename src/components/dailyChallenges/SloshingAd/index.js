import React, { Component } from 'react'
import PropsType from 'prop-types'
import './index.scss'

class SloshingAd extends Component {
  static defaultProps = {
    title: '晃动的广告版'
  }
  static propTypes = {
    title: PropsType.string
  }
  render () {
    const { title } = this.props
    return (
      <div className="sloshing-ad">
        <div className="sloshing-ad-signboard">
          <div className="sloshing-ad-sign">{title}</div>
          <div className="sloshing-ad-strings"></div>
          <div className="sloshing-ad-pin sloshing-ad-top"></div>
          <div className="sloshing-ad-pin sloshing-ad-left"></div>
          <div className="sloshing-ad-pin sloshing-ad-right"></div>
        </div>
      </div>
    )
  }
}

export default SloshingAd