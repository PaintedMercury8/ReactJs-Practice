import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false}

  increaseSeconds = () => {
    this.setState(prevState => ({seconds: prevState.seconds + 1}))
  }

  startStopwatch = () => {
    const {isRunning} = this.state
    if (isRunning === false) {
      this.timerID = setInterval(this.increaseSeconds, 1000)
      this.setState({isRunning: true})
    }
  }

  stopStopwatch = () => {
    const {isRunning} = this.state
    if (isRunning === true) {
      clearInterval(this.timerID)
      this.setState({isRunning: false})
    }
  }

  resetStopwatch = () => {
    this.setState({seconds: 0})
    clearInterval(this.timerID)
    this.setState({isRunning: false})
  }

  getMinutesAndSeconds = () => {
    const {minutes, seconds} = this.state
    console.log(minutes, seconds)
    const setSeconds = Math.floor(seconds % 60)
    const setMinutes = Math.floor(seconds / 60)
    const displaySeconds = setSeconds > 9 ? setSeconds : `0${setSeconds}`
    const displayMinutes = setMinutes > 9 ? setMinutes : `0${setMinutes}`
    return `${displayMinutes}:${displaySeconds}`
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Stopwatch</h1>
        <div className="stopwatch-container">
          <div className="logo-flex">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-logo"
            />
            <p className="timer-para">Timer</p>
          </div>
          <h1 className="stopwatch-head">{this.getMinutesAndSeconds()}</h1>
          <div className="button-container">
            <button
              onClick={this.startStopwatch}
              type="button"
              className="btn green"
            >
              Start
            </button>
            <button
              onClick={this.stopStopwatch}
              type="button"
              className="btn red"
            >
              Stop
            </button>
            <button
              onClick={this.resetStopwatch}
              type="button"
              className="btn yellow"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
