import React, { Component } from 'react'
import {Icon} from 'antd'
import './Show.scss'

class Show extends Component {
  render () {
    return (
      <section className="show-content">
        <header>
          <Icon type="arrow-left" />
          <font>好看的英文字体,网页中css这样写</font>
          <div>
            <Icon type="arrow-right" />
            <Icon type="plus-square" />
          </div>
        </header>
        <section>
          123
        </section>
      </section>
    )
  }
}

export default Show