import {Component} from 'react'
import './index.css'
import HistoryItems from '../HistoryItems/index'

class BrowserHistory extends Component {
  state = {searchText: ''}

  changeStateSearch = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {searchText} = this.state
    console.log(searchText)

    const searchHistoryList = initialHistoryList.filter(
      everyItem => everyItem.title.toLowerCase().includes(searchText) === true,
    )
    return (
      <div className="main-container">
        <header className="header-top">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="logo"
          />
          <div className="searchIconText">
            <input
              type="search"
              placeholder="Search History"
              onChange={this.changeStateSearch}
            />
          </div>
        </header>
        <div className="bottom-container">
          {searchHistoryList.length <= 0 && (
            <h1>There is no history to show</h1>
          )}
          <ul className="historyList">
            {searchHistoryList.map(eachItem => (
              <HistoryItems eachItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default BrowserHistory
