import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {counter: 0}

  onIncrement = () => {
    const {counter} = this.state
    this.setState(prevState => {
      console.log('Clicked')
      return {counter: prevState.counter + 1}
    })
    console.log(counter)
  }

  render() {
    const {counter} = this.state
    return (
      <div className="main-container">
        <h1 className="main-head">
          The Button has been clicked <br />
          <span className="count">{counter}</span> times
        </h1>
        <p className="main-para">Click the button to increase the count</p>
        <div>
          <button className="btn" onClick={this.onIncrement} type="button">
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
