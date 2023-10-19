// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptoCurrencyItem extends Component {
  state = {cryptoDetails: [], isLoading: true}

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const url = 'https://apis.ccbp.in/crypto-currency-converter'
    const response = await fetch(url)
    const data = await response.json()
    const filteredData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      usdValue: eachItem.usd_value,
    }))
    this.setState({cryptoDetails: filteredData, isLoading: false})
  }

  render() {
    const {cryptoDetails, isLoading} = this.state
    return (
      <div className="crypto-list-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <>
            <h1 className="main-head">CryptoCurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="main-crypto-img"
            />
            <ul className="bottom-table">
              <li className="table-top">
                <div className="coin-type">
                  <p className="coin-head decoration">Coin</p>
                  <p className="decoration">Type</p>
                </div>
                <div className="usd-euro">
                  <p className="usd decoration">USD</p>
                  <p className="euro decoration">EURO</p>
                </div>
              </li>
              {cryptoDetails.map(eachItem => (
                <CryptocurrencyItem key={eachItem.id} data={eachItem} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default CryptoCurrencyItem
