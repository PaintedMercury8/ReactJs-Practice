// Write your JS code here
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'
import Header from '../Header/index'

const Products = () => {
  if (Cookies.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="cart-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="cart-img"
        />
      </div>
    </>
  )
}

export default Products
