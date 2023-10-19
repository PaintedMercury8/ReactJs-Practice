// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {data} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = data
  return (
    <li className="table-items">
      <div className="coin-type">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="usd-euro">
        <p className="usd">{usdValue}</p>
        <p className="euro">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
