import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    total: 0,
    income: 0,
    expense: 0,
    title: '',
    amount: '',
    type: 'INCOME',
  }

  addHistory = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const item = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    if (type === 'INCOME') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, item],
        income: prevState.income + amount,
        total: prevState.total + amount,
        title: '',
        amount: '',
      }))
    } else {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, item],
        expense: prevState.expense + amount,
        total: prevState.total - amount,
        title: '',
        amount: '',
      }))
    }
  }

  changeTitle = event => {
    this.setState({title: event.target.value})
  }

  changeAmount = event => {
    this.setState({amount: parseInt(event.target.value)})
  }

  changeType = event => {
    this.setState({type: event.target.value})
  }

  deleteTransaction = (id, amount, type) => {
    console.log(id, amount, type)
    if (type === 'INCOME') {
      this.setState(prevState => ({
        total: prevState.total - amount,
        income: prevState.income - amount,
        transactionList: prevState.transactionList.filter(
          eachItem => eachItem.id !== id,
        ),
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + amount,
        expense: prevState.expense - amount,
        transactionList: prevState.transactionList.filter(
          eachItem => eachItem.id !== id,
        ),
      }))
    }
  }

  render() {
    const {transactionList, total, income, expense, title, amount} = this.state
    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="top-name-container">
            <h1 className="main-head">Hi, Richard</h1>
            <p className="welcome">
              Welcome back to your <span className="blue">Money Manager</span>
            </p>
          </div>
          <div className="money-details-list">
            <MoneyDetails income={income} expense={expense} total={total} />
          </div>
          <div className="bottom-transaction-container">
            <form className="add-transaction" onSubmit={this.addHistory}>
              <h1 className="add-trans-head">Add Transaction</h1>
              <label className="inputTitle" htmlFor="title">
                TITLE
              </label>
              <input
                type="text"
                className="inputText"
                placeholder="TITLE"
                id="title"
                onChange={this.changeTitle}
                value={title}
              />
              <label
                className="inputTitle"
                placeholder="AMOUNT"
                htmlFor="amount"
              >
                AMOUNT
              </label>
              <input
                type="text"
                className="inputText"
                placeholder="AMOUNT"
                id="amount"
                onChange={this.changeAmount}
                value={amount}
              />
              <label className="inputTitle" htmlFor="selectType">
                TYPE
              </label>
              <select
                id="selectType"
                className="select"
                name="type"
                onChange={this.changeType}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <ul className="history-list history">
              <li>
                <h1 className="history-head">History</h1>
              </li>
              <li className="title-amount-type">
                <p className="table-title">Title</p>
                <p className="table-title">Amount</p>
                <p className="table-title">Type</p>
              </li>
              {transactionList.map(eachItem => (
                <TransactionItem
                  key={eachItem.id}
                  data={eachItem}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
