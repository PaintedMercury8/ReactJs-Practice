// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  changeState = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imgUrl} = this.state
    return (
      <div className="bg-container">
        <div className="toss-container">
          <h1 className="main-head">Coin Toss Game</h1>
          <p className="main-para">Heads (or) Tails</p>
          <img src={imgUrl} className="img" alt="toss result" />
          <button className="btn" type="button" onClick={this.changeState}>
            Toss Coin
          </button>
          <div className="toss-result">
            <p className="toss-total">Total: {total}</p>
            <p className="toss-total">Heads: {heads}</p>
            <p className="toss-total">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
