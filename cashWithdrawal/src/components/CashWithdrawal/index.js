// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  withdrawalMinus = amount => {
    const {balance} = this.state
    if (balance - amount < 0) {
      alert('Insufficient Balance')
    } else {
      this.setState(prevState => ({balance: prevState.balance - amount}))
    }
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="header">
            <div className="profile-back">
              <p className="profile-logo">S</p>
            </div>
            <h1 className="main-head">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="your-bal">Your Balance</p>
            <p className="main-bal">{balance}</p>
          </div>
          <p className="rupees">In Rupees</p>
          <p className="main-bal">Withdraw</p>
          <p className="your-bal choose-sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="btn-container">
            {denominationsList.map(everyItem => (
              <DenominationItem
                everyItem={everyItem}
                func={this.withdrawalMinus}
                key={everyItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
