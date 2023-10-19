// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem/index'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {data} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }
  return (
    <Slider {...settings}>
      {data.map(eachItem => (
        <MovieItem data={eachItem} key={eachItem.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
