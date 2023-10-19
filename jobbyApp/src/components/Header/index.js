import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoLogOutOutline} from 'react-icons/io5'
import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import './index.css'

const Header = props => {
  const {history} = props
  const logoutUser = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <ul className="header">
      <Link to="/" className="link-nav">
        <li className="header-li">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="header-logo"
            alt="website logo"
          />
        </li>
      </Link>
      <li className="home-jobs-route">
        <Link to="/" className="link-nav">
          <h2 className="nav-home-style">Home</h2>
        </Link>
        <Link to="/jobs" className="link-nav">
          <h2 className="nav-home-style">Jobs</h2>
        </Link>
      </li>
      <li className="header-li-btn">
        <button className="logout-btn" type="button" onClick={logoutUser}>
          Logout
        </button>
      </li>
      <li className="home-jobs-sm">
        <Link to="/" className="link-nav">
          <button className="nav-home-style-sm" type="button">
            <AiFillHome className="header-icon-sm" />
          </button>
        </Link>
        <Link to="/jobs" className="link-nav">
          <button className="nav-home-style-sm" type="button">
            <BsFillBriefcaseFill className="header-icon-sm" />
          </button>
        </Link>
        <button className="logout-btn-sm" type="button" onClick={logoutUser}>
          <IoLogOutOutline className="header-icon-sm" />
        </button>
      </li>
    </ul>
  )
}

export default withRouter(Header)
