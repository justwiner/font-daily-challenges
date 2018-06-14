import React, { Component } from 'react'
import './List.scss'

class List extends Component {
  render () {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (
      <section className="list-content">
          {
            arr.map((item, index) => {
              return (
                <p key={index}>
                  <font>好看的英文字体,网页中css这样写</font>
                  <font> ———— </font>
                  <font>2018.6.13</font>
                </p>
              )
            })
          }
        </section>
    )
  }
}

export default List