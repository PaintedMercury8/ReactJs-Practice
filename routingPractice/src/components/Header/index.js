// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logo-img"
      />
      <p className="header-para">Wave</p>
    </div>
    <ul className="home-about-contact">
      <li>
        <Link to="/" className="header-para">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="header-para">
          About
        </Link>
      </li>
      <li>
        <Link to="/contact" className="header-para">
          Contact
        </Link>
      </li>
    </ul>
  </header>
)

export default Header
