// Write your code here
import './index.css'

const CartSummary = props => {
  const {total, length} = props
  return (
    <div className="item-total-container">
      <div className="class-summary-flex">
        <h1 className="order-total">
          Order Total: <span className="amount">Rs {total}/- </span>
        </h1>
        <p className="cart-length">{length} items in cart</p>
      </div>
      <button className="checkout" type="button">
        Checkout
      </button>
    </div>
  )
}

export default CartSummary
