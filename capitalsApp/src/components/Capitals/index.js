import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {capital: 'NEW_DELHI'}

  changeState = event => {
    console.log(event.target.value)
    this.setState({capital: event.target.value})
  }

  render() {
    const {capital} = this.state
    const value = countryAndCapitalsList.filter(
      eachItem => eachItem.id === capital,
    )
    console.log(value)
    return (
      <div className="bg-container">
        <div className="capital-container">
          <h1 className="main-head">Countries And Capitals</h1>
          <div className="select-div">
            <select
              name="capitals"
              className="select"
              onChange={this.changeState}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="capitals" className="label-name">
              is capital of which country?
            </label>
          </div>
          <p className="capital-head">{value[0].country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
