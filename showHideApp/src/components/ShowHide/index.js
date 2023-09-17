// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  firstName = () => {
    const {isFirst} = this.state
    if (isFirst === false) {
      this.setState(() => ({isFirst: true}))
    } else {
      this.setState(() => ({isFirst: false}))
    }
  }

  lastName = () => {
    const {isLast} = this.state
    if (isLast === false) {
      this.setState(() => ({isLast: true}))
    } else {
      this.setState(() => ({isLast: false}))
    }
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="main-container">
        <h1 className="main-head">Show/Hide</h1>
        <div className="btn-container">
          <div className="inner-btn-container">
            <button onClick={this.firstName} type="button">
              Show/Hide Firstname
            </button>
            {isFirst && <p className="showName">Joe</p>}
          </div>
          <div className="inner-btn-container">
            <button onClick={this.lastName} type="button">
              Show/Hide Lastname
            </button>
            {isLast && <p className="showName">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
