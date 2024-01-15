import { useState } from 'react'
import React, { Component } from 'react'
// import './App.css'

class App extends Component {
  state = {
    count: 0
  }

  increment = () =>
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    })

    decrement = () =>
    this.setState(prevState => {
      return {
        count: prevState.count - 1,
      }
    })

    render() {
      return (
        <div className='card'>
          <button onClick={this.increment}>+</button>
          <p>{this.state.count}</p>
          <button onClick={this.decrement}>-</button>
        </div>
      )
    }
}

export default App
