// Write your code here.
import './index.css'

const CardItem = props => {
  const {technologies} = props
  const {title, description, imgUrl, className} = technologies
  console.log(title, description, imgUrl, className)
  const classValue = `${className} list-align`
  return (
    <li className={classValue}>
      <h1 className="card-head">{title}</h1>
      <p className="card-para">{description}</p>
      <img src={imgUrl} className="bot-img" alt={title} />
    </li>
  )
}

export default CardItem
