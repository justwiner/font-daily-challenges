import React, { Component } from 'react'
import './App.scss'

class App extends Component {
  render () {
    const arr = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return (  
      <div className="container">
        <header>
          <font className="title">前端</font>
          <font> ———— </font>
          <font>on the load</font>
        </header>
        <section className="content">
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
      </div>
    )
  }
}

export default App