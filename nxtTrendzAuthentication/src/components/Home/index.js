// Write your JS code here
import Header from '../Header/index'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="main-container">
      <div className="clothes-container">
        <div className="home-description">
          <h1 className="home-head">Clothes That Get YOU Noticed</h1>
          <img
            className="xs-clothes-notice-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
          />
          <p className="home-para">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <button className="shop-now" type="button">
            Shop Now
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="home-img"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
