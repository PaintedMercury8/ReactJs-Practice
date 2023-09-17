// Write your code here
import './index.css'

const DenominationItem = props => {
  const {everyItem, func} = props
  const {value} = everyItem

  const triggerWithdrawal = () => {
    func(value)
  }

  return (
    <li className="list-item">
      <button className="btn" type="button" onClick={triggerWithdrawal}>
        {' '}
        {value}{' '}
      </button>
    </li>
  )
}

export default DenominationItem
