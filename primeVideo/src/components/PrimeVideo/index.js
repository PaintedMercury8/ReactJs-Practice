// Write your code here

import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const filteredActionList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )
  const filteredComedyList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="main-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video-img"
      />
      <h2 className="movies-head">Action Movies</h2>
      <div className="slick-container">
        <MoviesSlider data={filteredActionList} />
      </div>
      <h2 className="movies-head">Comedy Movies</h2>
      <div className="slick-container">
        <MoviesSlider data={filteredComedyList} />
      </div>
    </div>
  )
}

export default PrimeVideo
