// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      return (
        <ul className={isDarkTheme ? 'header dark' : 'header light'}>
          <li className="logo-container">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
              }
              className="logo"
              alt="website logo"
            />
          </li>
          <li className="home-about-nav">
            <Link to="/" className="link-nav">
              <p
                className={
                  isDarkTheme
                    ? 'light-text navHeadHome'
                    : 'dark-text navHead navHeadHome'
                }
              >
                Home
              </p>
            </Link>
            <Link to="/about" className="link-nav">
              <p
                className={
                  isDarkTheme
                    ? 'light-text navHeadAbout'
                    : 'dark-text navHeadAbout'
                }
              >
                About
              </p>
            </Link>
          </li>
          <li className="light-dark-btn-container">
            <button
              type="button"
              onClick={toggleTheme}
              className="light-dark-btn"
              data-testid="theme"
            >
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                }
                alt="theme"
                className="light-dark-img"
              />
            </button>
          </li>
        </ul>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
