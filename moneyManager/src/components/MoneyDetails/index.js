// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expense, total} = props
  return (
    <>
      <li className="money-balance-item bg-col-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="bal-img"
        />
        <div className="bal-details">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {total}</p>
        </div>
      </li>
      <li className="money-balance-item bg-col-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="bal-img"
        />
        <div className="bal-details">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </li>
      <li className="money-balance-item bg-col-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="bal-img"
        />
        <div className="bal-details">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expense}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
