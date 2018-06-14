import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import Header from '../pages/header/Header'
import List from '../pages/list/List'
import './App.scss'

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <List />
        </div>
      </BrowserRouter>
    )
  }
}

export default App