import React, { Component, useState } from 'react'
import './App.css'

function FuncComp({ initNumber }) {
  const numberState = useState(initNumber)
  const [number, setNumber] = numberState

  return (
    <div className="container">
      <h2>Function style Component</h2>
      <p>Number: {number}</p>
      <input
        type="button"
        value="random"
        onClick={function anonymous() {
          setNumber(Math.random())
        }}
      />
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

  // eslint-disable-next-line react/no-deprecated
  componentWillMount() {
    window.console.log('class => success')
  }

  componentDidMount() {
    window.console.log('class => ComponentDidMount')
  }

  render() {
    window.console.log('class => render()')
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
