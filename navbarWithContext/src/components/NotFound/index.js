// Write your code here
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
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
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              className="not-found-img"
              alt="not found"
            />
            <h1
              className={
                isDarkTheme ? 'not-found-head-light' : 'not-found-head-dark'
              }
            >
              Lost Your Way?
            </h1>
            <p
              className={
                isDarkTheme ? 'not-found-para-light' : 'not-found-para-dark'
              }
            >
              We cannot seem to find the page you are looking for
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
