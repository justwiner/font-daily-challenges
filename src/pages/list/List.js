import React, { Component } from 'react'
import {GeometricFigure} from '../../components'
import {BadModel} from '../../components'
import './List.scss'

let _graphStyle = {
  color: 'white',
  fontSize: '0.8vw',
  background: ''
}

class List extends Component {
  render () {
    const arr = [
      {
        title: '跳动的',
        link: '/demo1'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo3'
      },
      {
        title: '跳动的',
        link: '/demo4'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      },
      {
        title: '跳动的',
        link: '/demo2'
      }
    ]
    return (
      <section className="list-content">
          {
            arr.map((item, index) => {
              return (
                <GeometricFigure graphStyle={_graphStyle} key={index}>
                  <font>{item.title}</font>
                </GeometricFigure>
              )
            })
          }
          <BadModel>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </BadModel>
        </section>
    )
  }
}

export default List