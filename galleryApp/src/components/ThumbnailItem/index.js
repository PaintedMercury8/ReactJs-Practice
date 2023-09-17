// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {data, changeState, isTrue} = props
  const {id, thumbnailUrl, thumbnailAltText} = data

  const onClickChange = () => {
    changeState(id)
  }
  const classNameSelected = isTrue
    ? 'thumbnailItemImg selectedOpacity'
    : 'thumbnailItemImg transparentOpacity'

  return (
    <li className="thumbnailItem">
      <button onClick={onClickChange} className="btn" type="button">
        <img
          src={thumbnailUrl}
          className={classNameSelected}
          alt={thumbnailAltText}
          onClick={onClickChange}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
