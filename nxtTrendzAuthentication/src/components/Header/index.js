// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header">
    <div className="nav-content">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="header-logo"
        />
        <button className="logout-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
            className="nav-logout"
          />
        </button>
      </div>
      <ul className="home-product-cart-header-container">
        <li className="nav-list-item">
          <p className="header-home-para">Home</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="header-nav-img"
            alt="nav home"
          />
        </li>
        <li className="nav-list-item">
          <p className="header-home-para">Products</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="header-nav-img"
            alt="nav products"
          />
        </li>
        <li className="nav-list-item">
          <p className="header-home-para">Cart</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            className="header-nav-img"
            alt="nav-cart"
          />
        </li>

        <button className="logout" type="button">
          Logout
        </button>
      </ul>
    </div>
  </nav>
)

export default Header
