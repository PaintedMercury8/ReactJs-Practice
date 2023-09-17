// Write your code here
import './index.css'

const TransactionItem = props => {
  const {data, deleteTransaction} = props
  const {id, title, amount, type} = data

  const deleteTransactionFunc = () => {
    deleteTransaction(id, amount, type)
  }
  const val = type === 'INCOME' ? 'Income' : 'Expenses'
  return (
    <li className="history-items">
      <p className="position">{title}</p>
      <p className="position">Rs {amount}</p>
      <p className="position">{val}</p>
      <button
        type="button"
        className="delete-btn position"
        data-testid="delete"
        onClick={deleteTransactionFunc}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="deleteBtn"
        />
      </button>
    </li>
  )
}

export default TransactionItem
