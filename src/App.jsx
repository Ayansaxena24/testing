import { useState } from 'react'
import React, { Component } from 'react'
// import './App.css'

class App extends Component {
  state = {
    count: 0
  }

  makeIncrementer = amount => () => {
  this.setState(prevState => ({
      count : prevState.count + amount,
  })
  )
}

increment = this.makeIncrementer(1)
decrement = this.makeIncrementer(-1)

  // increment = () =>
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count + 1,
  //     }
  //   })

  //   decrement = () =>
  //   this.setState(prevState => {
  //     return {
  //       count: prevState.count - 1,
  //     }
  //   })

    render() {
      return (
        <div className='card'>
          <button className='increment' onClick={this.increment}>+++</button>
          <p>{this.state.count}</p>
          <button className='decrement' onClick={this.decrement}>---</button>
        </div>
      )
    }
}

export default App
