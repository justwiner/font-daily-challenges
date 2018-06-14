import React, { Component } from 'react'
import Header from '../pages/header/Header'
import List from '../pages/list/List'
import Show from '../pages/show/Show'
import './App.scss'

class App extends Component {
  render () {
    return (  
      <div className="container">
        <Header />
        <List />
        <Show />
      </div>
    )
  }
}

export default App