import React, {Component} from 'react'
import './index.scss'

class TheSea extends Component {
  static defaultProps = {
    title: 'the sea'
  }
  render () {
    const { title } = this.props
    return (
      <div className="sea">
        <p className="title">{title}</p>
        <span className="wave"></span>
        <span className="wave"></span>
        <span className="wave"></span>
      </div>
    )
  }
}

export default TheSea