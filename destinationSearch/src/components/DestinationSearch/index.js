// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  changeState = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResult = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )
    console.log(searchResult)
    return (
      <div className="bg-container">
        <div className="main-container">
          <h1>Destination Search</h1>
          <div className="search-bar">
            <input
              type="search"
              onChange={this.changeState}
              placeholder="Search"
              className="inputEl"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              className="search-img"
              alt="search icon"
            />
          </div>
          <ul className="destination-container">
            {searchResult.map(eachItem => (
              <DestinationItem destination={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
