// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {data} = props
  const {thumbnailUrl, videoUrl, categoryId} = data
  return (
    <div className="movie-item">
      <Popup
        trigger={
          <button className="button" type="button">
            {' '}
            <img
              src={thumbnailUrl}
              className="carousel-img"
              alt="thumbnail"
            />{' '}
          </button>
        }
        modal
      >
        {close => (
          <div className="modal">
            <button
              className="close"
              onClick={close}
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose className="close-icon" />
            </button>
            <ReactPlayer
              url={videoUrl}
              width="100%"
              height="100%"
              controls="true"
            />
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
