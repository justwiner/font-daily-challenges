import React, {Component} from 'react'
import './index.scss'

class TheSea extends Component {
  static defaultProps = {
    title: 'the sea'
  }
  render () {
    const { title } = this.props
    return (
      <div class="sea">
        <p class="title">{title}</p>
        <span class="wave"></span>
        <span class="wave"></span>
        <span class="wave"></span>
      </div>
    )
  }
}

export default TheSea