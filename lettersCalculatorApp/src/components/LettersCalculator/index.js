import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  changeState = event => {
    const stringCount = event.target.value.length
    this.setState({count: stringCount})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <div className="text-container">
          <h1 className="main-head">Calculate the Letters you enter</h1>
          <label htmlFor="textbar" className="label">
            Enter the phrase
          </label>
          <br />
          <input
            type="text"
            id="textbar"
            className="inputText"
            onChange={this.changeState}
          />
          <br />
          <div className="letterMain">
            <p className="letterPara">No.of letters: {count}</p>
          </div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="main-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
