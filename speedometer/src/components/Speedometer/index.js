// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increase = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return {speed: prevState.speed}
    })
  }

  decrease = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return {speed: prevState.speed}
    })
  }

  render() {
    const {speed} = this.state
    return (
      <div className="main-container">
        <h1 className="main-head">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="speed"
        />
        <div className="bottom-container">
          <h1 className="speed-display">Speed is {speed}mph</h1>
          <p className="main-para">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              onClick={this.increase}
              className="accelerate btn"
            >
              Accelerate
            </button>
            <button type="button" onClick={this.decrease} className="brake btn">
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
