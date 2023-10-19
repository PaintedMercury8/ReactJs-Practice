// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

const Login = props => {
  const loginSample = async () => {
    const {history} = props
    const url = 'https://apis.ccbp.in/login'
    const credentials = {username: 'rahul', password: 'rahul@2021'}
    const options = {
      method: 'POST',
      body: JSON.stringify(credentials),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 1})
      history.replace('/')
    }
  }
  if (Cookies.get('jwt_token') !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div className="center">
      <h1>Please Login</h1>
      <button type="button" onClick={loginSample}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
