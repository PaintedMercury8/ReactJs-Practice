// Write your code here
import './index.css'

const SimilarProductDetails = props => {
  const {data} = props
  const {imageUrl, title, price, brand, rating} = data
  return (
    <li className="product-detail-similar-products">
      <img
        src={imageUrl}
        className="similar-prod-img"
        alt={`similar product ${title}`}
      />
      <h2 className="similar-prod-title">{title}</h2>
      <p className="similar-product-brand">by {brand}</p>
      <div className="similar-prod-price-rating-container">
        <p className="similar-prod-price">Rs {price}/-</p>
        <div className="similar-prod-rating">
          <p className="rating-similar-prod">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
            className="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductDetails
