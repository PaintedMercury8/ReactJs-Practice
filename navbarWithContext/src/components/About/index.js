// Write your code here
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const classVal = isDarkTheme ? 'light-text' : 'dark-text'
      return (
        <div
          className={
            isDarkTheme
              ? 'main-container dark-background'
              : 'main-container light-background'
          }
        >
          <Navbar />
          <div className="home">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              className="main-img"
              alt="about"
            />
            <h1 className={classVal}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
