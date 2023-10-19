// Write your code here
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import Header from '../Header/index'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const initialQuantity = {
  initial: 1,
}

const viewList = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

const initialData = {
  initial: {
    id: '',
    imageUrl: '',
    title: '',
    price: '',
    brand: '',
    totalReviews: '',
    rating: '',
    availability: '',
    similarProducts: [],
  },
}

class ProductItemDetails extends Component {
  state = {
    quantity: initialQuantity.initial,
    displayView: viewList.initial,
    data: initialData.initial,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({displayView: viewList.loading})
    const token = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/products/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const filteredData = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        style: data.style,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
        similarProducts: data.similar_products.map(eachItem => ({
          id: eachItem.id,
          imageUrl: eachItem.image_url,
          title: eachItem.title,
          style: eachItem.style,
          price: eachItem.price,
          description: eachItem.description,
          brand: eachItem.brand,
          totalReviews: eachItem.total_reviews,
          rating: eachItem.rating,
          availability: eachItem.availability,
        })),
      }
      console.log(filteredData)
      this.setState({data: filteredData, displayView: viewList.success})
    } else {
      console.log(data)
      this.setState({displayView: viewList.failure})
    }
  }

  reduceQuantity = () => {
    const {quantity} = this.state
    if (quantity > 1) {
      this.setState(prevState => ({quantity: prevState.quantity - 1}))
    }
  }

  increaseQuantity = () => {
    this.setState(prevState => ({quantity: prevState.quantity + 1}))
  }

  renderProductDetails = () => {
    const {data, quantity} = this.state
    const {
      imageUrl,
      title,
      price,
      brand,
      description,
      totalReviews,
      rating,
      availability,
      similarProducts,
    } = data
    return (
      <>
        <Header />
        <div className="product-details-container">
          <div className="product-details-img-description-container">
            <img
              src={imageUrl}
              className="product-details-main-img"
              alt="product"
            />
            <div className="product-details-description-flex">
              <h1 className="product-details-title">{title}</h1>
              <p className="product-price">Rs {price}/-</p>
              <div className="product-details-rating-container">
                <div className="rating-img-container">
                  <p className="product-desc-rating">{rating}</p>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                    alt="star"
                    className="star"
                  />
                </div>
                <p>{totalReviews} Reviews</p>
              </div>
              <p className="prod-details-desc">{description}</p>
              <p>
                <span className="bold">Available: </span>
                {availability}
              </p>
              <p>
                <span className="bold">Brand: </span>
                {brand}
              </p>
              <hr className="product-line" />
              <div className="plus-minus-container">
                <button
                  className="product-minus-btn"
                  type="button"
                  data-testid="minus"
                  onClick={this.reduceQuantity}
                >
                  <BsDashSquare className="plus-minus-icon" />
                </button>
                <p className="product-details-quantity">{quantity}</p>
                <button
                  className="product-plus-btn"
                  type="button"
                  data-testid="plus"
                  onClick={this.increaseQuantity}
                >
                  <BsPlusSquare className="plus-minus-icon" />
                </button>
              </div>
              <button className="add-to-cart-btn" type="button">
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="similar-prod-head-container">
            <h2 className="similar-prod-head">Similar Products</h2>
          </div>
          <ul className="similar-products-container">
            {similarProducts.map(eachItem => (
              <SimilarProductItem data={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </>
    )
  }

  renderFailure = () => (
    <>
      <Header />
      <div className="not-found-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
          className="error-img"
          alt="error view"
        />
        <h1>Product Not Found</h1>
        <Link to="/products" className="link-product-container">
          <button className="continue-shopping-btn" type="button">
            Continue Shopping
          </button>
        </Link>
      </div>
    </>
  )

  renderLoading = () => (
    <>
      <Header />
      <div className="not-found-container">
        <div data-testid="loader">
          <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
        </div>
      </div>
    </>
  )

  render() {
    const {displayView} = this.state
    switch (displayView) {
      case viewList.success:
        return this.renderProductDetails()
      case viewList.failure:
        return this.renderFailure()
      case viewList.loading:
        return this.renderLoading()
      default:
        return null
    }
  }
}

export default ProductItemDetails
