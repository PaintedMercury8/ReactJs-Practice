// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {random: 0}

  changeNumber = () => {
    const randomNumber = Math.floor(Math.random() * (100 - 0 + 1)) + 0
    this.setState({random: randomNumber})
  }

  render() {
    const {random} = this.state
    return (
      <div className="bg-container">
        <div className="number-cont">
          <h1 className="main-head">Random Number</h1>
          <p className="main-para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="main-btn"
            onClick={this.changeNumber}
          >
            Generate
          </button>
          <p className="random-num">{random}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
