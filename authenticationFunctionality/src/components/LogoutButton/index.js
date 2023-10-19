// Write your JS code here
import './index.css'
import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const clearCookie = () => {
    const {history} = props
    Cookie.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <button type="button" onClick={clearCookie}>
      Logout
    </button>
  )
}

export default withRouter(LogoutButton)
