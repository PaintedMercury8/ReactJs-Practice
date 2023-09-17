// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {inputText: ''}

  changeState = event => {
    this.setState({inputText: event.target.value})
  }

  changeResultText = suggestion => {
    this.setState({inputText: suggestion})
  }

  render() {
    const {inputText} = this.state
    const {suggestionsList} = this.props
    console.log(inputText)
    const resultList = suggestionsList.filter(
      eachItem =>
        eachItem.suggestion.toLowerCase().includes(inputText) === true,
    )
    return (
      <div className="main-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="googleLogo"
        />
        <ul className="searchList">
          <li className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              className="searchIcon"
              alt="search icon"
            />
            <input
              type="search"
              className="search"
              placeholder="Search Google"
              id="googleSearch"
              value={inputText}
              onChange={this.changeState}
            />
          </li>
          {resultList.map(eachItem => (
            <SuggestionItem
              eachItem={eachItem}
              func={this.changeResultText}
              key={eachItem.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
