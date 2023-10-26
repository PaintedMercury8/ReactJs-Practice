// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const add = cartList.reduce(
        (acc, eachItem) => acc + eachItem.quantity * eachItem.price,
        0,
      )

      return (
        <div className="item-total-container">
          <div className="class-summary-flex">
            <h1 className="order-total">
              Order Total: <span className="amount">Rs {add}/- </span>
            </h1>
            <p className="cart-length">{cartList.length} Items in cart</p>
          </div>
          <button className="checkout" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
