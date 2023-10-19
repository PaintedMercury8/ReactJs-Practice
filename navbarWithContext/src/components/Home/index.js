// Write your code here
import Navbar from '../Navbar/index'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
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
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              className="main-img"
              alt="home"
            />
            <h1 className={classVal}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
