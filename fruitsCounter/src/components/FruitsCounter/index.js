// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mango = () => {
    this.setState(prevState => {
      console.log('clicked')
      return {mango: prevState.mango + 1}
    })
  }

  banana = () => {
    this.setState(prevState => {
      console.log('clicked')
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="fruit-container">
          <h1 className="main-head">
            Bob ate <span className="yellow">{mango}</span> mangoes{' '}
            <span className="yellow">{banana}</span> bananas
          </h1>
          <div className="fruit-bottom-container">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="img"
              />
              <div>
                <button type="button" className="button" onClick={this.mango}>
                  Eat Mango
                </button>
              </div>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="img"
              />
              <div>
                <button type="button" className="button" onClick={this.banana}>
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
