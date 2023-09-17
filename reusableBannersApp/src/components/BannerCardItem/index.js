// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {itemDetails} = props
  const {headerText, description, className} = itemDetails
  console.log(props)
  console.log(headerText, className)
  const classValue = `${className} card`
  return (
    <li className={classValue}>
      <h1 className="card-head">{headerText}</h1>
      <p className="main-para">{description}</p>
      <div className="btn-container">
        <button className="btn-1">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
