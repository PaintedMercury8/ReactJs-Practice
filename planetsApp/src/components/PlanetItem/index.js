// Write your code here
import './index.css'

const PlanetItem = props => {
  const {data} = props
  const {name, imageUrl, description} = data
  return (
    <div className="planet-item">
      <img src={imageUrl} className="carousel-img" alt={`planet ${name}`} />
      <h2 className="planetName">{name}</h2>
      <p className="description">{description}</p>
    </div>
  )
}

export default PlanetItem
