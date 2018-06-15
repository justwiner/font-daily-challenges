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
  constructor (props) {
    super(props)
    this.state = {
      _open: false
    }
  }
  openModal () {
    this.setState({
      _open: true
    })
  }
  render () {
    const { _open } = this.state
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
                <div onClick={this.openModal.bind(this)} key={index}>
                  <GeometricFigure graphStyle={_graphStyle}>
                    <font>{item.title}</font>
                  </GeometricFigure>
                </div>
              )
            })
          }
          <BadModel open={_open}>
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