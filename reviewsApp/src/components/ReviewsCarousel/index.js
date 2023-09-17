// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewCarousel extends Component {
  state = {itemIndex: 0}

  changeStateLeft = () => {
    const {itemIndex} = this.state
    if (itemIndex >= 1) {
      this.setState(prevState => ({
        itemIndex: prevState.itemIndex - 1,
      }))
    }
  }

  changeStateRight = () => {
    const {itemIndex} = this.state
    const {reviewsList} = this.props

    if (itemIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        itemIndex: prevState.itemIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {itemIndex} = this.state
    const filteredItem = reviewsList.filter(
      (eachItem, index) => index === itemIndex,
    )
    return (
      <div className="bg-container">
        <div className="reviews-container">
          <h1 className="reviews">Reviews</h1>
          <img
            src={filteredItem[0].imgUrl}
            className="img"
            alt={filteredItem[0].username}
          />
          <div className="arrow-container">
            <button
              className="btn"
              type="button"
              onClick={this.changeStateLeft}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="arrow"
                alt="left arrow"
              />
            </button>
            <p className="name">{filteredItem[0].username}</p>
            <button
              className="btn"
              type="button"
              onClick={this.changeStateRight}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="arrow"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company">{filteredItem[0].companyName}</p>
          <p className="description">{filteredItem[0].description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewCarousel
