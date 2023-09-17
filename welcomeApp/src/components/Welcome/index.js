// Write your code here
import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {sub: false}

  changeState = () => {
    const {sub} = this.state
    if (sub === false) {
      this.setState(prevState => ({
        sub: true,
      }))
    } else {
      this.setState(prevState => ({
        sub: false,
      }))
    }
  }

  render() {
    const {sub} = this.state
    let btnEl
    if (sub === false) {
      btnEl = (
        <button onClick={this.changeState} type="button">
          Subscribe
        </button>
      )
    } else {
      btnEl = (
        <button onClick={this.changeState} type="button">
          Subscribed
        </button>
      )
    }
    return (
      <div className="container">
        <h1 className="main-head">Welcome</h1>
        <p className="main-para">Thank you! Happy Learning</p>
        {btnEl}
      </div>
    )
  }
}

export default Welcome
