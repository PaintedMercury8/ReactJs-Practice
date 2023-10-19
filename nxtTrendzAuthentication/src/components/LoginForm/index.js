// Write your JS code here
import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', noMatch: false, errorMessage: ''}

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const loginCredentials = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      this.setState({
        noMatch: false,
        errorMessage: '',
        username: '',
        password: '',
      })
      history.replace('/')
    } else {
      const errorMsg = data.error_msg
      this.setState({noMatch: true, errorMessage: errorMsg})
    }
  }

  changeUserName = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, noMatch, errorMessage} = this.state
    return (
      <div className="login-main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-main-logo-1"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-main-img"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitDetails}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-main-logo"
            alt="website logo"
          />
          <label className="form-label" htmlFor="username">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            className="input"
            placeholder="Username"
            onChange={this.changeUserName}
            value={username}
          />
          <label className="form-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="input"
            placeholder="Password"
            onChange={this.changePassword}
            value={password}
          />
          <button className="login-btn-main" type="submit">
            Login
          </button>
          {noMatch && <p className="error">`*{errorMessage}`</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
