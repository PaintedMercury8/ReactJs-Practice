import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const initialInput = {
  initial: '',
  errorInitial: false,
}

class Login extends Component {
  state = {
    userName: initialInput.initial,
    password: initialInput.initial,
    error: initialInput.errorInitial,
    errorValue: initialInput.initial,
  }

  changeStateUser = event => {
    this.setState({userName: event.target.value})
  }

  changeStatePass = event => {
    this.setState({password: event.target.value})
  }

  checkLogin = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username: userName,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 2})
      history.replace('/')
    } else {
      this.setState({
        userName: initialInput.initial,
        password: initialInput.initial,
        error: true,
        errorValue: data.error_msg,
      })
    }
  }

  render() {
    const {userName, password, error, errorValue} = this.state
    if (Cookies.get('jwt_token') !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <form className="login-details-form" onSubmit={this.checkLogin}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="website-logo"
          />
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            className="input-field"
            id="username"
            onChange={this.changeStateUser}
            value={userName}
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            id="password"
            onChange={this.changeStatePass}
            value={password}
          />
          <button type="submit" className="login-button">
            Login
          </button>
          {error === true && <p className="error">{errorValue}</p>}
        </form>
      </div>
    )
  }
}
export default Login
