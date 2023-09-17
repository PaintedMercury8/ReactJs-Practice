// Write your code here
import {Component} from 'react'

import Login from '../Login/index'
import Logout from '../Logout/index'

import Message from '../Message/index'

import './index.css'

class Home extends Component {
  state = {login: false}

  change = () => {
    const {login} = this.state
    if (login === false) {
      this.setState(() => ({login: true}))
    } else {
      this.setState(() => ({login: false}))
    }
  }

  render() {
    const {login} = this.state
    return (
      <div className="container">
        <Message state={login} />
        {login ? (
          <Logout logout={this.change} />
        ) : (
          <Login login={this.change} />
        )}
      </div>
    )
  }
}

export default Home
