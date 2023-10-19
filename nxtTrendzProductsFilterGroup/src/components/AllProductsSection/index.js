import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const renderViews = {
  renderProducts: 'PRODUCTS',
  noProducts: 'NOPRODUCTS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

const searchInitial = {
  initial: '',
}

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    activeOptionId: sortbyOptions[0].optionId,
    titleSearch: searchInitial.initial,
    category: searchInitial.initial,
    rating: searchInitial.initial,
    viewType: renderViews.renderProducts,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      viewType: renderViews.loading,
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {activeOptionId, category, titleSearch, rating, viewType} = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${category}&title_search=${titleSearch}&rating=${rating}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      if (updatedData.length === 0) {
        this.setState({
          productsList: updatedData,
          viewType: renderViews.noProducts,
        })
      } else {
        this.setState({
          productsList: updatedData,
          viewType: renderViews.renderProducts,
        })
      }
    } else {
      this.setState({
        viewType: renderViews.failure,
      })
    }
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderNoProducts = () => (
    <div className="all-products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
        className="no-products"
        alt="no products"
      />
      <h1>No Products Found</h1>
      <p>We could not find any products. Try other filters.</p>
    </div>
  )

  renderProductsList = () => {
    const {productsList, activeOptionId, titleSearch} = this.state

    // TODO: Add No Products View
    return (
      <div className="all-products-container">
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          changeSortby={this.changeSortby}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </div>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  // TODO: Add failure view
  renderFailure = () => (
    <div className="all-products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        className="no-products"
        alt="products failure"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request.
        <br /> Please Try Again
      </p>
    </div>
  )

  changeTitle = value => {
    this.setState({titleSearch: value}, this.getProducts)
  }

  changeCategory = value => {
    this.setState({category: value}, this.getProducts)
  }

  changeRating = value => {
    this.setState({rating: value}, this.getProducts)
  }

  resetFilter = () => {
    this.setState(
      {
        productsList: [],
        activeOptionId: sortbyOptions[0].optionId,
        titleSearch: searchInitial.initial,
        category: searchInitial.initial,
        rating: searchInitial.initial,
        viewType: renderViews.renderProducts,
      },
      this.getProducts,
    )
  }

  getView = () => {
    const {viewType} = this.state
    switch (viewType) {
      case renderViews.renderProducts:
        return this.renderProductsList()
      case renderViews.loading:
        return this.renderLoader()
      case renderViews.noProducts:
        return this.renderNoProducts()
      case renderViews.failure:
        return this.renderFailure()
      default:
        return null
    }
  }

  render() {
    const {titleSearch, category, rating} = this.state

    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          titleSearch={titleSearch}
          changeTitle={this.changeTitle}
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          stateCategory={category}
          stateRating={rating}
          changeCategory={this.changeCategory}
          changeRating={this.changeRating}
          resetFilter={this.resetFilter}
        />
        {this.getView()}
      </div>
    )
  }
}

export default AllProductsSection
