import React, {Component} from 'react'
import './index.scss'

class MilkFonts extends Component {
  render () {
    const {title} = this.props
    return (
      <div className="milkFonts">
        <p>{title[0]}</p>
        <p>{title[1]}</p>
      </div>
    )
  }
}

export default MilkFonts