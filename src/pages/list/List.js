import React, { Component } from 'react'
import {GeometricFigure} from '../../components'
import {BadModel} from '../../components'
import {LiteralSlipping} from '../../components/dailyChallenges'
import { Route, Link, BrowserRouter } from 'react-router-dom'
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
        title: '按钮文字滑动特效',
        link: '/dayOne'
      },
      {
        title: '跳动的',
        link: '/dayTwo'
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
                <Link to={item.link} onClick={this.openModal.bind(this)} key={index}>
                  <GeometricFigure graphStyle={_graphStyle}>
                    <font>{item.title}</font>
                  </GeometricFigure>
                </Link>
              )
            })
          }
          <BadModel open={_open}>
            <BrowserRouter>
                <div>
                  <Route path="/dayOne" component={LiteralSlipping}></Route>
                  <Route path="/dayTwo" component={() => <div>dayTwo</div>}></Route>
                </div>
            </BrowserRouter>
          </BadModel>
        </section>
    )
  }
}

export default List