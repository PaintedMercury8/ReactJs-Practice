// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header">
    <Link to="/" className="link">
      Home
    </Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Header
