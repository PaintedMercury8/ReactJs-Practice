// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  increase = () => {
    const random = Math.floor(Math.random() * (100 - 0 + 1)) + 0
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <div className="count-container">
          <h1 className="main-head">Count {count}</h1>
          {count % 2 === 0 ? (
            <p className="result">Count is Even</p>
          ) : (
            <p className="result">Count is Odd</p>
          )}
          <button onClick={this.increase} type="button">
            increment
          </button>
          <p className="bottom-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
