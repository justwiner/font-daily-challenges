import React, { Component } from 'react'
import {GeometricFigure} from '../../components'
import {BadModel} from '../../components'
import {
  LiteralSlipping,
  RectangularRotationLoading,
  ConcentricCircleLoading,
  NON404,
  TheSea,
  MeteorLoading,
  RainbowLoading,
  SloshingAd,
  MilkFonts
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
        title: '旋转矩形Loading',
        link: '/dayTwo'
      },
      {
        title: '同心圆Loading',
        link: '/dayThree'
      },
      {
        title: '404动画',
        link: '/dayFour'
      },
      {
        title: '海浪',
        link: '/dayFive'
      },
      {
        title: '彗星loading',
        link: '/daySix'
      },
      {
        title: '彩虹loading',
        link: '/daySeven'
      },
      {
        title: '晃动的广告板',
        link: '/dayEight'
      },
      {
        title: '牛奶文字',
        link: '/dayNine'
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
                  <Route path="/dayTwo" component={() => <RectangularRotationLoading />}></Route>
                  <Route path="/dayThree" component={() => <ConcentricCircleLoading />}></Route>
                  <Route path="/dayFour" component={() => <NON404 />}></Route>
                  <Route path="/dayFive" component={() => <TheSea title="我们一起看海吧"/>}></Route>
                  <Route path="/daySix" component={() => <MeteorLoading />}></Route>
                  <Route path="/daySeven" component={() => <RainbowLoading />}></Route>
                  <Route path="/dayEight" component={() => <SloshingAd title="Hello" />}></Route>
                  <Route path="/dayNine" component={() => <MilkFonts title={['Hello', 'Css3']} />}></Route>
                </div>
            </BrowserRouter>
          </BadModel>
        </section>
    )
  }
}

export default List