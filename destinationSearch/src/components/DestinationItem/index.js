// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destination} = props
  const {name, imgUrl} = destination
  return (
    <li className="each-destination">
      <img src={imgUrl} alt={name} className="img" />
      <p className="dest-name">{name}</p>
    </li>
  )
}

export default DestinationItem
