import {Component} from 'react'
import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginMainContainer,
  LoginContainer,
  LoginLogo,
  InputLabel,
  InputElement,
  CheckBoxElement,
  CheckBoxContainer,
  CheckBoxLabel,
  LoginButton,
  ErrorMessage,
} from './styledComponents'
import AppContext from '../../context/AppContext'

const defaultValues = ''

class Login extends Component {
  state = {
    userName: defaultValues,
    password: defaultValues,
    isShow: false,
    isError: false,
    errorMessage: defaultValues,
  }

  onChangeUsername = event => {
    this.setState({userName: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  changeShow = event => {
    if (event.target.checked === true) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  submitUserDetails = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {
      username: userName,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const url = 'https://apis.ccbp.in/login'
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const {history} = this.props
      const jwtToken = data.jwt_token
      Cookie.set('jwt_token', jwtToken, {expires: 10})
      history.replace('/')
    } else {
      this.setState({isError: true, errorMessage: data.error_msg})
    }
  }

  render() {
    const {userName, password, isShow, isError, errorMessage} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDark} = value
          if (Cookie.get('jwt_token') !== undefined) {
            return <Redirect to="/" />
          }
          return (
            <LoginMainContainer isDark={isDark}>
              <LoginContainer isDark={isDark} onSubmit={this.submitUserDetails}>
                <LoginLogo
                  src={
                    isDark
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <InputLabel isDark={isDark} htmlFor="username">
                  USERNAME
                </InputLabel>
                <InputElement
                  type="text"
                  value={userName}
                  isDark={isDark}
                  placeholder="Username"
                  id="username"
                  onChange={this.onChangeUsername}
                />
                <InputLabel isDark={isDark} htmlFor="password">
                  PASSWORD
                </InputLabel>
                <InputElement
                  type={isShow ? 'text' : 'password'}
                  value={password}
                  isDark={isDark}
                  placeholder="Password"
                  id="password"
                  onChange={this.onChangePassword}
                />
                <CheckBoxContainer>
                  <CheckBoxElement
                    type="checkbox"
                    value={isShow}
                    id="showCheckbox"
                    onChange={this.changeShow}
                  />
                  <CheckBoxLabel htmlFor="showCheckbox" isDark={isDark}>
                    {' '}
                    Show Password
                  </CheckBoxLabel>
                </CheckBoxContainer>
                <LoginButton type="submit">Login</LoginButton>
                {isError && <ErrorMessage>*{errorMessage}</ErrorMessage>}
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
