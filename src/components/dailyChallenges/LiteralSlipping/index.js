import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

class LiteralSlipping extends Component {
  static defaultProps = {
    text: 'button'
  }
  static propTypes = {
    text: PropTypes.string
  }
  render () {
    const { text } = this.props
    console.log(text.split(''))
    return (
      <div className="box">
        {
          text.split('').map((element,index) => {
            return <span key={index} data-text={element.toUpperCase()}>{element.toUpperCase()}</span>
          })
        }
      </div>
    )
  }
}

export default LiteralSlipping