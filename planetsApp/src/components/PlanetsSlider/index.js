// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem/index'

import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  console.log(planetsList)
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessibility: true,
  }
  return (
    <div className="main-container">
      <h1 className="main-head">PLANETS</h1>
      <div className="carousel" data-testid="planets">
        <Slider {...settings}>
          {planetsList.map(eachItem => (
            <PlanetItem key={eachItem.id} data={eachItem} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetsSlider
