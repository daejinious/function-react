import React, { Component } from 'react'
import './App.css'

function FuncComp({ initNumber }) {
  return (
    <div className="container">
      <h2>Function style Component</h2>
      <p>Number: {initNumber}</p>
    </div>
  )
}

class ClassComp extends Component {
  constructor(props) {
    super(props)
    const { initNumber } = this.props
    this.state = {
      number: initNumber,
    }
  }

  render() {
    const { number } = this.state
    return (
      <div className="container">
        <h2>class style Component</h2>
        <p>Number: {number}</p>
        <input
          type="button"
          value="random"
          onClick={function anonymous(e) {
            e.preventDefault()
            this.setState({ number: Math.random() })
          }.bind(this)}
        />
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      Hello World!!!
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  )
}

export default App
