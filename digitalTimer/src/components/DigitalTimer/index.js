// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {minutes: 25, seconds: 0, isTimerRunning: false}

  increaseSeconds = () => {
    const {minutes, seconds} = this.state
    const hasTimerFinished = minutes * 60 === seconds
    if (hasTimerFinished === false) {
      this.setState(prevState => ({seconds: prevState.seconds + 1}))
    } else {
      clearInterval(this.timerID)
      this.setState({isTimerRunning: false})
    }
    console.log(minutes, seconds)
  }

  startAndPauseTimer = () => {
    const {minutes, seconds, isTimerRunning} = this.state
    const hasTimerFinished = minutes * 60 === seconds
    if (hasTimerFinished === true) {
      this.setState({seconds: 0})
    }
    if (isTimerRunning) {
      clearInterval(this.timerID)
    } else {
      this.timerID = setInterval(this.increaseSeconds, 1000)
    }

    this.setState(prevState => ({isTimerRunning: !prevState.isTimerRunning}))
  }

  displayMinutesAndSeconds = () => {
    const {minutes, seconds} = this.state
    const totalRemainingSeconds = minutes * 60 - seconds
    const remMinutes = Math.floor(totalRemainingSeconds / 60)
    const remSeconds = Math.floor(totalRemainingSeconds % 60)
    const modifiedMinutes = remMinutes > 9 ? remMinutes : `0${remMinutes}`
    const modifiedSeconds = remSeconds > 9 ? remSeconds : `0${remSeconds}`
    return `${modifiedMinutes}:${modifiedSeconds}`
  }

  resetTimer = () => {
    clearInterval(this.timerID)
    this.setState({seconds: 0})
    this.setState({isTimerRunning: false})
  }

  decrement = () => {
    const {minutes} = this.state
    if (minutes > 1) {
      this.setState(prevState => ({minutes: prevState.minutes - 1}))
    }
  }

  increment = () => {
    this.setState(prevState => ({minutes: prevState.minutes + 1}))
  }

  render() {
    const {isTimerRunning, minutes} = this.state
    const buttonUrl = isTimerRunning
      ? 'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
    return (
      <div className="bg-container">
        <h1>Digital Timer</h1>
        <div className="timer-container">
          <h1 className="timer">{this.displayMinutesAndSeconds()}</h1>
          <p>{isTimerRunning ? 'Running' : 'Paused'}</p>
        </div>
        <div className="pause-reset-timer-container">
          <div className="pause-reset">
            <button onClick={this.startAndPauseTimer} type="button">
              <img
                src={buttonUrl}
                alt={isTimerRunning ? 'pause icon' : 'play icon'}
              />
              {isTimerRunning ? 'Pause' : 'Start'}
            </button>
            <button onClick={this.resetTimer} type="button">
              Reset
              <img
                src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                alt="reset icon"
              />
            </button>
          </div>
          <div className="set-timer-limit-container">
            <p>Set Timer Limit</p>
            <div className="timer-limit">
              <button
                className="change"
                type="button"
                onClick={this.decrement}
                disabled={isTimerRunning}
              >
                -
              </button>
              <div className="limit-value-container">
                <p>{minutes}</p>
              </div>
              <button
                className="change"
                type="button"
                onClick={this.increment}
                disabled={isTimerRunning}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
