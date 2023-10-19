import './index.css'

const DisplayItems = props => {
  const {data, checkMatch} = props
  const {id, imageUrl, thumbnailUrl, category} = data

  const checkThumbnail = () => {
    checkMatch(id)
  }
  return (
    <li className="fruit-items">
      <button className="btn-thumbnail" type="button" onClick={checkThumbnail}>
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default DisplayItems
