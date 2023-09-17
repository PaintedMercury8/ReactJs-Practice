// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {eachItem, func} = props
  const {suggestion} = eachItem

  const changeSuggestion = () => {
    func(suggestion)
  }

  return (
    <li className="listSuggestion">
      <p className="listItemName">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="upImg"
        alt="arrow"
        onClick={changeSuggestion}
      />
    </li>
  )
}

export default SuggestionItem
