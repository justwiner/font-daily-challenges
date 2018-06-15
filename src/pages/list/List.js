import React, { Component } from 'react'
import {GeometricFigure} from '../../components'
import {BadModel} from '../../components'
import {
  LiteralSlipping,
  RectangularRotation
} from '../../components/dailyChallenges'
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
        title: '旋转的矩形',
        link: '/dayTwo'
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
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'10vh 0'}}>
                  <Route path="/dayOne" component={() => <LiteralSlipping text="text"/>}></Route>
                  <Route path="/dayTwo" component={() => <RectangularRotation />}></Route>
                </div>
            </BrowserRouter>
          </BadModel>
        </section>
    )
  }
}

export default List