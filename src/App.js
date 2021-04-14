import React from 'react'

function FuncComp({ initNumber }) {
  return (
    <div className="container">
      <h2>Function style Component</h2>
      <p>Number: {initNumber}</p>
    </div>
  )
}

class ClassComp extends React.Component {
  render() {
    return (
      <div className="container">
        <h2>class style Component</h2>
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
